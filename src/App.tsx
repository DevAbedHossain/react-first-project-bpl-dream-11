import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Players from "./components/players/players";
import type { PlayerType } from "./type/PlayerType";
import { ToastContainer } from "react-toastify";

const playerDataPromise = async ():Promise<PlayerType[]> => { 
  const res = await fetch("/Data.tsx");
  const data = await res.json();
  return data;
}

function App() {

  const [playerDataPromiseState] = useState<Promise<PlayerType[]>>(playerDataPromise())
  const [coin, setCoin] = useState(10000);
  return (
    <>
      
      <Suspense fallback={<h1>Loading...</h1>}>
      <Nav coin={ coin}></Nav>
      <Banner></Banner>
        <Players playerDataPromise={playerDataPromiseState} coin={coin} setCoin={setCoin}></Players>
        
      </Suspense>

      <ToastContainer />
      
    </>
  );
}

export default App;
