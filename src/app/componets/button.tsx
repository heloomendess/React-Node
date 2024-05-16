import Link from "next/link"

interface ButtonProps {
    icon?: React.ReactNode,
    label: string,
    href: string

}

export function Button(props : ButtonProps) {
    return (
        <Link href={props.href} className=" flex gap-2 items-center justify-center bg-orange-300 px-7 py-1 rounded hover:bg-orange-400 transition-colors">
         {props.icon}
         {props.label} </Link>
    )
}