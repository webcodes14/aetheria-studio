import { createBrowserRouter, RouterProvider } from "react-router";

import { routes } from "./routes.jsx";
import Loading from "./components/Loading.jsx";

const router = createBrowserRouter(routes);

const App = () => {

  return <RouterProvider router={router} />;
}

export default App;