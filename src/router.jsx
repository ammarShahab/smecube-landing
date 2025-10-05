import { createBrowserRouter } from "react-router";
import Home from "./pages/HomePage";
import FacebookBoost from "./pages/FacebookBoost";
import BusinessConsulting from "./pages/BusinessConsulting";
import BrandPageSetup from "./pages/BrandPageSetup";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        loader: async () => {
          const res = await fetch("/services.json");
          const data = await res.json();
          return data;
        },
        element: <Home />,
      },
      {
        path: "service/facebook-boosting",
        // loader: () => fetch("/services.json"),
        // Component: ServicePageLayout,
        element: <FacebookBoost />,
      },
      {
        path: "service/business-consulting",
        // loader: () => fetch("/services.json"),
        // Component: ServicePageLayout,
        element: <BusinessConsulting />,
      },
      {
        path: "service/brand-page-setup",
        // loader: () => fetch("/services.json"),
        // Component: ServicePageLayout,
        element: <BrandPageSetup />,
      },
    ],
  },
]);
export default router;
