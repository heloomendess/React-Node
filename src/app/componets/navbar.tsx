import Link from "next/link";

export function NavBar() {
    return (
        <nav className=" flex justify-between items-center bg-orange-300 w-full px-6 py-2"> 

        <Link href="/"><h1 className="text-4xl uppercase font-bold text-orange-50">Senac Filmes</h1></Link>

        <Link href="/sobre">Sobre</Link>
      </nav>
    );
}