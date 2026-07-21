import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { supabase } from "../lib/supabase";

const GameContext = createContext(null);

const initialState = {
  completedExercises: {
    comandos_basicos: [],
    entidades: [],
    movimiento: [],
    construccion: [],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "completeExercise": {
      const { category, exerciseId } = action.payload;
      if (state.completedExercises[category].includes(exerciseId)) return state;
      return {
        ...state,
        completedExercises: {
          ...state.completedExercises,
          [category]: [...state.completedExercises[category], exerciseId],
        },
      };
    }
    case "loadProgress":
      return { ...state, completedExercises: action.payload };
    case "resetProgress":
      return initialState;
    default:
      return state;
  }
}

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [userId, setUserId] = useState(null);
  const [syncing, setSyncing] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadProgress = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session?.user) {
        setLoaded(true);
        return;
      }

      setUserId(session.user.id);

      const { data, error } = await supabase
        .from("progreso")
        .select("completed_exercises")
        .eq("user_id", session.user.id)
        .single();

      if (data && !error) {
        dispatch({ type: "loadProgress", payload: data.completed_exercises });
      }

      setLoaded(true);
    };

    loadProgress();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        setUserId(session.user.id);

        const { data } = await supabase
          .from("progreso")
          .select("completed_exercises")
          .eq("user_id", session.user.id)
          .single();

        if (data) {
          dispatch({ type: "loadProgress", payload: data.completed_exercises });
          setLoaded(true);
        }
      } else {
        setUserId(null);
        setLoaded(false);
        dispatch({ type: "resetProgress" });
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!userId || !loaded) return;

    const save = async () => {
      setSyncing(true);
      await supabase.from("progreso").upsert(
        {
          user_id: userId,
          completed_exercises: state.completedExercises,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "user_id" },
      );
      setSyncing(false);
    };

    save();
  }, [state.completedExercises, userId, loaded]);

  return (
    <GameContext.Provider value={{ state, dispatch, syncing }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context)
    throw new Error("useGame debe usarse dentro de un GameProvider");
  return context;
};
