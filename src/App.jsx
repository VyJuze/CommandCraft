import {createBrowserRouter, RouterProvider} from "react-router"
import { Game } from "./screens/Game"
import { Home } from "./screens/Home"
import { Levels } from "./screens/Levels"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/game/:categoria",
    element: <Game />
  },
  {
    path: "/levels",
    element: <Levels />
  }
])
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
