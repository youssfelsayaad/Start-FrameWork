import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";
import Layout from "./Components/layout/Layout";
import Home from "./Components/Home/Home";
import Contacts from "./Components/Contacts/Contacts";
import Portfolio from "./Components/Portfolio/Portfolio";
import About from "./Components/About/About";
import NotFound from "./Components/NotFound/NotFound";

export default function app() {
  let routes = createBrowserRouter([{
    path:"", element:<Layout/>, children:[
      
      {index:true,element:<Home/>   },
      { path:"Contacts",element:<Contacts/>   },
      { path:"Portfolio",element:<Portfolio/>,children:[
      ]   },
      { path:"About",element:<About/>  },
    
      
      
      { path:"*",element:<NotFound/>  }
    ]
  }])
  return (
    //empty fragment
    <>
    
   <RouterProvider router={routes}/>
    </>
  );
}
