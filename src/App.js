import React from "react";
import Navbar from "./components/Navbar";
import TabHeader from "./components/TabHeader";

const App = () => {
  return (
    <div className="App w-full h-screen bg-main-black">
      <Navbar />
      <main className="font-inter">
        <TabHeader />
      </main>
    </div>
  );
};

export default App;
