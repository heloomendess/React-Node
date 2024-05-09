import {Heart, Star} from "lucide-react"

import Link from "next/link"

export function Card() {
    return (
        <div className="gap-2 p-4 m-l-4 flex flex-col items-center w-36 relative">
            <Heart className="absolute right-1 top-1"/>
            <img className="w-36 rounded" src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/e8pI4XkYgUMuSJ8cEFbJE18wc4e.jpg" alt="" />
            <h4 className="line-clamp-1">Duna</h4>
                
            <div className="flex gap-2">
            <Star className="text-amber-400"/>
                <span className="opacity-50">9.9</span>
            </div>
            <Link href="#" className="bg-orange-300 px-7 py-1 rounded hover:bg-orange-400 transition-colors">Detalhes</Link>
        </div>
    )
}