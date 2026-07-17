import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Commands } from "../data/commands.js";
import { Button } from "../components/ui/Button.jsx";

export const Docs = () => {
  const navigate = useNavigate();
  const categories = Object.values(Commands);

  return (
    <div className="min-h-screen bg-fondo">
      <header className="boder-b border-bordesecundario bg-tarjetas px-8 py-4 flex items-center justify-between">
        <button
          onClick={() => navigate("/")}
          className="font-monospace text-xs text-textosecundario uppercase tracking-widest hover:text-primarioverde transition-colors cursor-pointer"
        >
          Back
        </button>
        <span className="font-monospace text-xs text-primarioverde uppercase tracking-widest">
          Command Reference
        </span>
      </header>

      <div className="max-w-4xl mx-auto px-8 py-12 flex flex-col gap-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="font-display text-5xl font-bold text-textoprincipal mb-4">
            Command Reference
          </h1>
          <p className="font-body text-lg text-textosecundario max-w-2xl">
            Study these commands before jumping into the challenges. Each entry
            covers what the command does, its full syntax and real usage
            examples
          </p>
        </motion.div>

        {categories.map((category, categoryIndex) => (
          <motion.section
            key={category.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
          >
            <div className="flex item-center gap-4 mb-8">
              <div className="h-px flex-1 bg-bordesecundario" />
              <h2 className="font-display text-2xl font-bold uppercase text-primarioverde whitespace-nowrap">
                {category.title}
              </h2>
              <div className="h-px flex-1 bg-bordesecundario" />
            </div>

            <div className="flex flex-col gap-6">
              {category.entries.map((entry) => (
                <div
                  key={entry.name}
                  className="bg-tarjetas border border-bordesecundario p-6 flex-col gap-4"
                >
                  <p className="font-monospace text-nase font-bold text-primarioverde">
                    {entry.name}
                  </p>

                  <p className="font-body text-sm text-textosecundario leading-relaxed">
                    {entry.description}
                  </p>

                  <div className="flex flex-col gap-1">
                    <p className="font-monospace text-xs text-textosecundario uppercase tracking-widest">
                      Syntax
                    </p>
                    <div className="bg-inputs border border-bordesecundario px-4 py-3">
                      <code className="font-monospace text-xs text-terciariopiedra">
                        {entry.syntax}
                      </code>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <p className="font-monospace text-xs text-textosecundario uppercase tracking-widest">
                      Examples
                    </p>
                    <div className="bg-inputs border border-bordesecundario px-4 py-3 flex flex-col gap-1">
                      {entry.example}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        ))}

        <div className="flex flex-col items-center gap-4 py-8 border-t border-bordesecundario">
          <p className="font-monospace text-xs text-textosecundario uppercase tracking-widest">
            Ready to put it into practice?
          </p>
          <div className="w-64">
            <Button onClick={() => navigate("/levels")}>Start Game</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
