import type { Dispatch, SetStateAction } from "react";
import type { PlayerType } from "../../type/PlayerType";
import SelectedPlayerCart from "./SelectedPlayerCart";

export interface SelectedPlayersProps {
    selectedPlayers: PlayerType[]
    setSelectedPlayers: Dispatch<SetStateAction<PlayerType[]>>
    coin: number
    setCoin: Dispatch<SetStateAction<number>>
    searchPlayer: string
    setSearchPlayer: Dispatch<SetStateAction<string>>
}

export default function SelectedPlayers({ selectedPlayers, setSelectedPlayers, coin, setCoin,searchPlayer, setSearchPlayer }: SelectedPlayersProps) {

    if (selectedPlayers.length === 0) { 
        return (
            <div className="flex justify-center items-center h-40">
                <h2 className="text-2xl font-medium">No Player Selected</h2>
            </div>
        )
    }

    return (
        <>
            { searchPlayer.length > 0 ? <div>
                {
                    selectedPlayers.filter(playerName => ((playerName.playerName.toLowerCase().includes(searchPlayer.toLowerCase())))).map((player, index) => <SelectedPlayerCart key={index} player={ player} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coin={coin} setCoin={ setCoin}></SelectedPlayerCart>)
                }
            </div> : <div>
                {
                    selectedPlayers.map((player, index) => <SelectedPlayerCart key={index} player={ player} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coin={coin} setCoin={ setCoin}></SelectedPlayerCart>)
                }
            </div>}
        </>
    )
}