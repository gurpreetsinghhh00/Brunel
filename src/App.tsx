import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Signin from "./pages/Signin"
import Success from "./pages/Success"
import Dashboard from "./pages/Dashboard"

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <Dashboard/>,
  },
  {
    path : "/signin",
    element : <Signin/>,
  },
  {
    path : "/success",
    element : <Success/>
  }

])

function App() {
  return (
    <RouterProvider router={appRouter}>
    </RouterProvider>
  )
}

export default App
