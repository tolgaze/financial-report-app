import { HomePage } from "./pages/home-page";
import { AboutPage } from "./pages/about-page";
import { createBrowserRouter } from "react-router-dom";
import { RealizedProfitPage } from "./pages/realized-profit-page";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/realizedProfit",
    element: <RealizedProfitPage />,
  },
]);
