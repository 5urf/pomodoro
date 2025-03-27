import { createBrowserRouter } from "react-router";
import App from "./App";
import Pomodoro from "./pages/Pomodoro";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Pomodoro />,
      },
    ],
  },
]);

export default router;
