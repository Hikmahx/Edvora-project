import React from "react";
import Cards from "./components/cards/Cards";
import Navbar from "./components/Navbar";
import TabHeader from "./components/TabHeader";

const App = () => {
  return (
    <div className="App w-full bg-main-black">
      <Navbar />
      <main className="font-inter">
        <TabHeader />
        <Cards />
      </main>
    </div>
  );
};

export default App;
