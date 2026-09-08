import type { Dispatch, SetStateAction } from "react";
import type { PlayerType } from "../../type/PlayerType";
import { MdDeleteForever } from "react-icons/md";

export interface SelectedPlayerCartProps {
    player: PlayerType
    selectedPlayers: PlayerType[]
    setSelectedPlayers: Dispatch<SetStateAction<PlayerType[]>>
    coin: number
    setCoin: Dispatch<SetStateAction<number>>
}

export default function SelectedPlayerCart({ player, selectedPlayers, setSelectedPlayers, coin, setCoin }: SelectedPlayerCartProps) {

    const handelRemovePlayer = (player: PlayerType) => {
        const newSelectedPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName !== player.playerName);

        setSelectedPlayers(newSelectedPlayers);

        const updatedCoin = coin + player.price;
        setCoin(updatedCoin);
    }


    return (
        <>
            <div className="flex items-center gap-3 border p-2 rounded rounded-gray-100 mb-2 justify-between">
                <div className="flex items-center gap-3">
                    <img className="w-12.5 h-12.5 object-cover rounded" src={player.image} alt="" />
                    <div>
                        <h2>{player.playerName}</h2>
                        <span>{player.playerType}</span>
                    </div>
                </div>
                <div>
                    <span onClick={() => handelRemovePlayer(player)} className="text-2xl cursor-pointer"><MdDeleteForever />
                    </span>
                </div>

            </div>
        </>
    )
}