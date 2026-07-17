import {Link} from "react-router"

export const Home = () => {
  return (
    <div className="relative h-screen flex justify-center items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url('src/assets/HomeWallpaper.png')" }}
      />
      <div className="relative bg-transparent p-8 flex flex-col justify-around w-2/4">
        <h1 className="text-8xl font-monospace font-bold mb-4 text-center text-primarioverde text-shadow-black text-shadow-md">CommandCraft</h1>
        <p className="text-lg mb-8 text-center text-shadow-black text-shadow-md">Learn Minecraft commands by actually using them. Without tutorials, no walls of text ,just real challenges that put you in the game. Read the exercise, type the right command, and earn XP as you go. Four categories to explore. To start game and test your knowledge click "Start game", to see the commands and the use of them click "Learn commands" to see the commands and after this test your knowledge. Macondo Proyect</p>
        <div className="flex justify-between gap-4">
          <Link
            to="/levels"
            className="flex-1 bg-primarioverde text-black py-2 px-4 border-black border-[3px] hover:bg-[#3cb86a] hover:border-b-[5px] transition-colors text-center box-border"
          >
            Start
          </Link>
          <Link
            to="/docs"
            className="flex-1 bg-fondo opacity-90 text-textoprincipal py-2 px-4 border-black border-[3px] hover:opacity-80 hover:border-b-[5px] transition-colors text-center box-border"
          >
            Learn commands
          </Link>
        </div>
      </div>
    </div>
  )
}
