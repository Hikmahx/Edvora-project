import React from "react";
import Cards from "./components/cards/Cards";
import Navbar from "./components/Navbar";
import TabHeader from "./components/TabHeader";
import { RideProvider } from "./context/RideContext";

const App = () => {
  return (
    <RideProvider>
      <div className="App w-full min-h-screen bg-main-black">
        <Navbar />
        <main className="font-inter max-w-lg lg:max-w-8xl mx-auto">
          <TabHeader />
          <Cards />
        </main>
      </div>
    </RideProvider>
  );
};

export default App;
