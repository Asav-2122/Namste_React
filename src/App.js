import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import "./index.css";
// import {About} from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import RestraurantMenu from "./components/RestraurantMenu";
import userContext from "./utils/userContext";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";
import Cart from "./components/Cart";
// this is how you can write code using React.createElement
// const header1 = React.createElement("h1",{id:"header1",key:"1"},"Namste React From React CDN parcel package");
// const header2 = React.createElement("h2",{id:"header2",key:"2"},"Namste React From React CDN");
// const container = React.createElement("div",{id:"container"},[header1,header2])

// jsx and component

//Lazy Loading
//dynamic Import
// code spitting
/*React.lazy currently only supports default exports. If the module you want to import uses named exports, you can create an intermediate module that reexports it as the default. This ensures that tree shaking keeps working and that you don't pull in unused components.*/
const About = lazy(() => import("./components/About")); 

const App = () => {
 
  return (
    <Provider store={store}>
    <userContext.Provider value={{user:{
      name:"Aasav Pandya",
      email:"asav@gmail.com",
    }
    }}>
    
      <Header />
      <Outlet />
      {/* every children of App(Body,About,Contact) will come in outlet accoring to the route. we are doing this because we want our navbar and footer in all the component so that our navigation will become easy. */}
      <Footer />
    </userContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restraurants/:id",
        element: <RestraurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
