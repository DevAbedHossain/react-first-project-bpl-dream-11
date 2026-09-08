import type { Dispatch, SetStateAction } from "react";
import type { PlayerType } from "../../type/PlayerType";
import SelectedPlayerCart from "./SelectedPlayerCart";

export interface SelectedPlayersProps {
    selectedPlayers: PlayerType[]
    setSelectedPlayers: Dispatch<SetStateAction<PlayerType[]>>
    coin: number
    setCoin: Dispatch<SetStateAction<number>>
}

export default function SelectedPlayers({ selectedPlayers, setSelectedPlayers, coin, setCoin }: SelectedPlayersProps) {

    if (selectedPlayers.length === 0) { 
        return (
            <div className="flex justify-center items-center h-40">
                <h2 className="text-2xl font-medium">No Player Selected</h2>
            </div>
        )
    }

    return (
        <>
            <div>
                {
                    selectedPlayers.map((player, index) => <SelectedPlayerCart key={index} player={ player} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coin={coin} setCoin={ setCoin}></SelectedPlayerCart>)
                }
            </div>
        </>
    )
}