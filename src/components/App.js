import React from "react"
import Header from "./Header"
import TravalCard from "./TravalCard"
import Data from "../data"

export default function App(){

    const travalCards = Data.map(item => {
        return <TravalCard 
        key={item.imageUrl}
        item = {item}
        />
    })

    return (
        <div>
            <Header />
            {travalCards}
        </div>
    )
}