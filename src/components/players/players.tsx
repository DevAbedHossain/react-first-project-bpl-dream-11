import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { PlayerType } from "../../type/PlayerType";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

export interface PlayersProps {
    playerDataPromise: Promise<PlayerType[]>
    coin: number
    setCoin: Dispatch<SetStateAction<number >>
}

export default function Players({ playerDataPromise, coin, setCoin}: PlayersProps) {

    const players = use(playerDataPromise);

    const [buttonType, setButtonType] = useState("available")

    const [mySelectedPlayers, setMySelectedPlayers] = useState<PlayerType[]>([])

    const handelButtonType = (type: "available" | "selected") => { 
        setButtonType(type)
    }
    
    return (
        <>
            <div className="container mx-auto space-y-10 my-10">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-medium">{ buttonType === "available"? "Available Players" : "Selected Players"}</h2>
                    <div>
                        <button onClick={() => handelButtonType("available")} className={`btn rounded-r-none ${buttonType === "available" ? "btn-success" : ""}`}>Available</button>
                        <button onClick={() => handelButtonType("selected")} className={`btn rounded-l-none ${buttonType === "selected" ? "btn-success" : ""}`}>Selected ({ mySelectedPlayers.length})</button>
                    </div>
                </div>

                {buttonType === "available" ? <AvailablePlayers players={players} coin={coin} setCoin={setCoin} selectedPlayers={mySelectedPlayers} setSelectedPlayers={setMySelectedPlayers}></AvailablePlayers> : <SelectedPlayers selectedPlayers={mySelectedPlayers} setSelectedPlayers={setMySelectedPlayers} coin={coin} setCoin={setCoin}></SelectedPlayers>}
                
                
        </div>
            

        </>
    )
}