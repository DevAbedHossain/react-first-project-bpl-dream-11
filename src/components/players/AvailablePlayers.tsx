import type { Dispatch, SetStateAction } from "react";
import type { PlayerType } from "../../type/PlayerType";
import PlayerCart from "./PlayerCart";

export interface AvailablePlayersProps {
    players: PlayerType[]
    coin: number
    setCoin: Dispatch<SetStateAction<number>>
    selectedPlayers: PlayerType[]
    setSelectedPlayers: Dispatch<SetStateAction<PlayerType[]>>
}

export default function AvailablePlayers({ players, coin, setCoin, selectedPlayers, setSelectedPlayers }: AvailablePlayersProps) {
    
    return (
        <div className="grid grid-cols-3 gap-4">
            { 
                players.map((player, index) => <PlayerCart key={ index} player={player} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={ setSelectedPlayers}></PlayerCart>)
            }
        </div>
    )
}