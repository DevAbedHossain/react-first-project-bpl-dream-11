import { FaUser } from "react-icons/fa";
import type { PlayerType } from "../../type/PlayerType";
import { IoFlagSharp } from "react-icons/io5";
import { useState, type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";

export interface PlayerProps {
  player: PlayerType
  coin: number
  setCoin: Dispatch<SetStateAction<number>>
  selectedPlayers: PlayerType[]
    setSelectedPlayers: Dispatch<SetStateAction<PlayerType[]>>
}

export default function Player({ player, coin, setCoin, selectedPlayers, setSelectedPlayers }: PlayerProps) {

  const [isSelected, setIsSelected] = useState(false);

  const handleChooseButton = () => { 
    setIsSelected(true);
    let newCoin = coin - player.price;
    if (newCoin > 0) {
      setCoin(newCoin);
      toast.success(`${player.playerName} is purchased successfully.`)
    } else { 
      toast.error("Insupient Coin.")
    }


    // Selected Card Logic
    if (coin >= player.price) { 
      setSelectedPlayers([...selectedPlayers, player])
    }
    
    
    
  }
    
    return (
        <>
            <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
  
  {/* Player Image */}
  <div className="relative overflow-hidden bg-gray-100">
    <img
      className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
      src={player.image}
      alt={player.playerName}
    />

    {/* Player Type */}
    <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-700 backdrop-blur">
      {player.playerType}
    </span>
  </div>

  {/* Card Content */}
  <div className="p-5">

    {/* Name */}
    <div className="mb-3">
      <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900">
        <FaUser className="text-gray-500" />
        {player.playerName}
      </h2>

      <p className="mt-1 flex items-center gap-2 text-sm text-gray-500">
        <IoFlagSharp />
        {player.country}
      </p>
    </div>

    <div className="my-4 h-px bg-gray-200"></div>

    {/* Rating */}
    <div className="mb-4 flex items-center justify-between">
      <span className="text-sm font-medium text-gray-500">
        Rating
      </span>

      <div className="flex items-center gap-1">
        <span className="text-yellow-500">★</span>
        <span className="font-bold text-gray-800">4.8</span>
      </div>
    </div>

    {/* Batting / Bowling */}
    <div className="grid grid-cols-2 gap-3">

      <div className="rounded-xl bg-gray-50 p-3">
        <p className="text-xs text-gray-400">
          Batting
        </p>

        <p className="mt-1 text-sm font-semibold text-gray-800">
          {player.battingPosition}
        </p>
      </div>

      <div className="rounded-xl bg-gray-50 p-3">
        <p className="text-xs text-gray-400">
          Bowling
        </p>

        <p className="mt-1 text-sm font-semibold text-gray-800">
          {player.bowlingPosition}
        </p>
      </div>

    </div>

    <div className="my-4 h-px bg-gray-200"></div>

    {/* Price + Button */}
    <div className="flex items-center justify-between gap-3">

      <div>
        <p className="text-xs text-gray-400">
          Player Price
        </p>

        <p className="text-xl font-bold text-gray-900">
          ${player.price.toLocaleString()}
        </p>
      </div>

              <button onClick={handleChooseButton} disabled={isSelected}
  className="rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white
             transition hover:bg-gray-700 active:scale-95 cursor-pointer
             disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-200" 
      >
        {isSelected ? "Selected" : "Choose Player"}
      </button>

    </div>

  </div>
</div>
        </>
    )
}