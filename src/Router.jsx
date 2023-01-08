import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
const Home = lazy(() => import('./pages/Home'))
const Players = lazy(() => import('./pages/Players'))
const Result = lazy(() => import('./pages/Result'))
const NotFound = lazy(() => import('./pages/NotFound'))

const Router = () => {
  return (
    <Suspense>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}>
            <Route path="/result" element={<Result/>} />
            <Route path="/players" element={<Players/>} />
          </Route>
          <Route path='*' element={<NotFound/>}/> 
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};




export default Router;
