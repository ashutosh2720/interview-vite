import React, { useEffect, useLayoutEffect, useState } from "react";
import AnimatedCards from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <AnimatedCards />
    </>
  );
}

export default App;
