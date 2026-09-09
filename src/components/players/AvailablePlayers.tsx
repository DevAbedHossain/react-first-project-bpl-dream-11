import type { Dispatch, SetStateAction } from "react";
import type { PlayerType } from "../../type/PlayerType";
import PlayerCart from "./PlayerCart";

export interface AvailablePlayersProps {
    players: PlayerType[];
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
    selectedPlayers: PlayerType[];
    setSelectedPlayers: Dispatch<SetStateAction<PlayerType[]>>;
    searchPlayer: string;
    countryPlayer: string;
    setCountryPlayer: Dispatch<SetStateAction<string>>;
}

export default function AvailablePlayers({
    players,
    coin,
    setCoin,
    selectedPlayers,
    setSelectedPlayers,
    searchPlayer,
    countryPlayer,
    
}: AvailablePlayersProps) {

    const filteredPlayers = players.filter(player => {

        const matchesSearch = player.playerName
            .toLowerCase()
            .includes(searchPlayer.toLowerCase());

        const matchesCountry =
            countryPlayer === "" || player.country === countryPlayer;

        return matchesSearch && matchesCountry;
    });

    return (
        <div className="grid grid-cols-3 gap-4">
            {filteredPlayers.map((player, index) => (
                <PlayerCart
                    key={index}
                    player={player}
                    coin={coin}
                    setCoin={setCoin}
                    selectedPlayers={selectedPlayers}
                    setSelectedPlayers={setSelectedPlayers}
                />
            ))}
        </div>
    );
}
