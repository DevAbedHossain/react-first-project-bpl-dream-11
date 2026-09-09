import { use, useState, type ChangeEvent, type Dispatch, type SetStateAction } from "react";
import type { PlayerType } from "../../type/PlayerType";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

export interface PlayersProps {
    playerDataPromise: Promise<PlayerType[]>
    coin: number
    setCoin: Dispatch<SetStateAction<number>>
}

export default function Players({ playerDataPromise, coin, setCoin }: PlayersProps) {

    const players = use(playerDataPromise);

    const [buttonType, setButtonType] = useState("available")

    const [mySelectedPlayers, setMySelectedPlayers] = useState<PlayerType[]>([])

    // Filter form logic
    const [searchPlayer, setSearchPlayer] = useState<string>("")
    const [countryPlayer, setCountryPlayer] = useState<string>("")

    const handleSearchPlayer = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchPlayer(e.target.value)
    }

    const handleCountryPlayer = (k: ChangeEvent<HTMLSelectElement>) => {
        setCountryPlayer(k.target.value)
    }

    const handelButtonType = (type: "available" | "selected") => {
        setButtonType(type)
    }

    const countriesList = [...new Set(players.map(player => player.country))]

    return (
        <>
            <div className="container mx-auto space-y-10 my-10">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-medium">{buttonType === "available" ? "Available Players" : "Selected Players"}</h2>
                    <div className="flex gap-2 items-center">

                        <input onChange={handleSearchPlayer} type="text" placeholder="Search Players..." className="input focus:border-none active:border-none w-2xs outline-0" />

                        <select onChange={handleCountryPlayer} name="country" id="country" className="select focus:border-none active:border-none w-2xs outline-0">
                            <option value="">All Countries</option>
                            {countriesList.map((country, index) => (
                                <option key={index} value={country}>
                                    {country}
                                </option>
                            ))}

                        </select>
                        
                    </div>
                    <div>
                        <button onClick={() => handelButtonType("available")} className={`btn rounded-r-none ${buttonType === "available" ? "btn-success" : ""}`}>Available</button>
                        <button onClick={() => handelButtonType("selected")} className={`btn rounded-l-none ${buttonType === "selected" ? "btn-success" : ""}`}>Selected ({mySelectedPlayers.length})</button>
                    </div>
                </div>

                {buttonType === "available" ? <AvailablePlayers players={players} coin={coin} setCoin={setCoin} selectedPlayers={mySelectedPlayers} setSelectedPlayers={setMySelectedPlayers} searchPlayer={searchPlayer} countryPlayer={countryPlayer} setCountryPlayer={ setCountryPlayer}></AvailablePlayers> : <SelectedPlayers selectedPlayers={mySelectedPlayers} setSelectedPlayers={setMySelectedPlayers} coin={coin} setCoin={setCoin} searchPlayer={searchPlayer}></SelectedPlayers>}


            </div>


        </>
    )
}