"use client"
import {Heart, Star} from "lucide-react"

import { Button } from "./button"
import { useState } from "react"



interface CardProps {
    filme: {
    id: number,
    title: string,
    poster_path: string,
    vote_average: number
    }
}

export function Card({filme} : CardProps) {

    const [favorito, setFavorito] = useState(false)

    function taggledFavorita() {
        setFavorito(!favorito)
    }
    return (
        <div className="gap-2 p-4 m-l-4 flex flex-col items-center w-36 relative">
            {favorito ?
            <Heart onClick={taggledFavorita} className="text-yellow-300 absolute right-1 top-1 cursor-pointer"/> :
            <Heart onClick={taggledFavorita} className="absolute right-1 top-1 cursor-pointer"/>
            }
            
            <img className="w-36 rounded" src={filme.poster_path} alt="" />
            <h4 className="line-clamp-1">{filme.title}</h4>
                
            <div className="flex gap-2">
            <Star className="text-amber-400"/>
                <span className="opacity-50">{filme.vote_average}</span>
            </div>
        <Button label="detalhes" href={"/filme/" + filme.id}/>
        </div>
    )
}