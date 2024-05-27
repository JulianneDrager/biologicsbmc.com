import { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// const Screen = lazy(() => import("./Components/Screen/Screen"));
// const ThankyouGeneral = lazy(() => import("./Components/Thank You/Thankyou"));
// const ReadMore = lazy(() => import("./Components/Training/ReadMore"));

import Screen from "./Components/Screen/Screen";
import ThankyouGeneral from "Components/Thank You/Thankyou";
import ReadMore from "Components/Training/ReadMore";
import FAQ from "Components/FAQ/FAQ";
import Services from "Components/Terms/Services";
import Privacy from "Components/Terms/Privacy";

function App() {
  return (
    <BrowserRouter>
      {/* <Suspense fallback={<div>Loading...</div>}></Suspense> */}
      <Routes>
        <Route exact path="/" element={<Screen />} />
        <Route exact path="/readmore" element={<ReadMore />} />
        <Route exact path="/faq" element={<FAQ />} />
        <Route exact path="/thankyou/:name" element={<ThankyouGeneral />} />
        <Route exact path="services" element={<Services />} />
        <Route exact path="privacy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
