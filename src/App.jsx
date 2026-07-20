import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router";
import { Game } from "./screens/Game";
import { Home } from "./screens/Home";
import { Levels } from "./screens/Levels";
import { Docs } from "./screens/Docs";
import { Auth } from "./screens/Auth";
import { GameProvider } from "./context/GameProvider";
import { useAuth } from "./hooks/useAuth";

const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <div className="min-h-screen bg-fondo flex items-center justify-center">
        <p className="font-monospace text-xs text-textosecundario uppercase tracking-widest animate-pulse">
          Loading...
        </p>
      </div>
    );

  if (!user) return <Navigate to="/auth" replace />;

  return (
    <GameProvider>
      <Outlet />
    </GameProvider>
  );
};

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Auth />,
  },
  { path: "/docs", element: <Docs /> },
  { path: "/", element: <Home /> },

  {
    element: <ProtectedRoute />,
    children: [
      { path: "/levels", element: <Levels /> },
      { path: "/game/:categoria", element: <Game /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
