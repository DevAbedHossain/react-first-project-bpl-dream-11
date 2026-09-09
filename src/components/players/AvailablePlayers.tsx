import type { Dispatch, SetStateAction } from "react";
import type { PlayerType } from "../../type/PlayerType";
import PlayerCart from "./PlayerCart";

export interface AvailablePlayersProps {
    players: PlayerType[]
    coin: number
    setCoin: Dispatch<SetStateAction<number>>
    selectedPlayers: PlayerType[]
    setSelectedPlayers: Dispatch<SetStateAction<PlayerType[]>>
    searchPlayer: string
    setSearchPlayer: Dispatch<SetStateAction<string>>
    countryPlayer: string
}

export default function AvailablePlayers({ players, coin, setCoin, selectedPlayers, setSelectedPlayers, searchPlayer, setSearchPlayer, countryPlayer }: AvailablePlayersProps) {
    
    return (
        <>
            { searchPlayer.length > 0 || countryPlayer.length > 0 ? <div className="grid grid-cols-3 gap-4">
            { 
                players.filter(playerName => playerName.playerName.toLowerCase().includes(searchPlayer.toLowerCase()) || playerName.country === countryPlayer).map((player, index) => <PlayerCart key={ index} player={player} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={ setSelectedPlayers}></PlayerCart>)
            }
        </div> : <div className="grid grid-cols-3 gap-4">
            { 
                players.map((player, index) => <PlayerCart key={ index} player={player} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={ setSelectedPlayers}></PlayerCart>)
            }
        </div> }
            
        </>
    )
}