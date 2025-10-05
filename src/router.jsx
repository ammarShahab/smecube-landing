import { createBrowserRouter } from "react-router";
/* import Home from "./pages/HomePage";
import FacebookBoost from "./pages/FacebookBoost";
import BrandPageSetup from "./pages/BrandPageSetup"; */
import App from "./App";
import SMECubeLanding from "./components/SMECubeLanding";
import BusinessConsulting from "./pages/BusinessConsulting";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        /* loader: async () => {
          const res = await fetch("/services.json");
          const data = await res.json();
          return data;
        }, */
        element: <SMECubeLanding />,
      },
      {
        path: "service/business-consulting",
        element: <BusinessConsulting />,
      },
      //   {
      //     path: "service/business-consulting",
      //     element: <BusinessConsulting />,
      //   },
      //   {
      //     path: "service/brand-page-setup",
      //     element: <BrandPageSetup />,
      //   },
    ],
  },
]);
export default router;
