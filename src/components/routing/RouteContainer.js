import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom"; //npm i react-router-dom
// keep the outtermost parent (app component ) inside <browserRouter> in index.js file

import Home from "./fewComponents/Home";
import AboutUs from "./fewComponents/AboutUs";
import Careers from "./fewComponents/Careers";
import Products from "../List-Item/Products";
import ProductDetails from "./fewComponents/ProductDetails";
import ProductDetail from "./fewComponents/ProductDetail";
import PermanentJobs from "./fewComponents/PermanentJobs";
import ContractJobs from "./fewComponents/ContractJobs";
import ProtectedRoute from "./fewComponents/ProtectedRoute";
import NotFound from "./fewComponents/NotFound"; 

// lazy loading concept applied on lazy component component:
const LazyComponent=React.lazy(()=>import('./fewComponents/LazyComponent'))    //Lazy import ,we have to keep the component inside suspense.


export default function RouteContainer() {//this is the main components that imports all other components and by Route loads other component when url changes as mentioned  
  return (
    // this routing concept implemented on the navbar componented.
    <Routes>
      <Route exact path="/" element={ <Home/>} />
      <Route exact path="/home" element={<Home/>} />
      <Route exact path="/aboutus" element={<AboutUs />} />

      {/* on career component routing nested routing concept implemented */}
      <Route exact path="/careers" element={<Careers/>}>\
          {/*for index route path is not required */}
          <Route index  element={<PermanentJobs/>} />

          <Route path="permanentjobs" element={<PermanentJobs/>} />
          <Route path="contractjobs" element={<ContractJobs/>} />
      </Route>

      {/*protectedRoute concept implements on product component  */}
      <Route exact path="/products" element={<ProtectedRoute>
                                                  <Products/>
                                            </ProtectedRoute>} />
      {/* product component will go as children to protected route where authentication done */}
      {/* path params */}
      <Route exact path="/productdetails/:id" element={<ProductDetails/>} />
      {/* query params:looks like normal route */}
      <Route path="/productdetail" element={<ProductDetail/>} />

      <Route path="/lazy" element={<Suspense fallback={<h1>Loading</h1>}>{/* suspense make sure to load the component after 1-2 sec without this the ui will load immediately throughing error immediately not waiting for this component to load,in the meantime fallback will show something to user*/}
                                 <LazyComponent/>
                               </Suspense>} />

      <Route path="*" element={<NotFound/>} /> 

      {/* exact key makes the component url only available on exact path only,as react can do partial match of url path that may sometime load other component with same keyword at starting */}

    </Routes>
  );
}
