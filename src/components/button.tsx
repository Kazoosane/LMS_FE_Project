interface ButtonProps {
    label: string;
}

export default function Button({ label }: ButtonProps) {
    return (
        <button className="bg-cyan-800 ml-2 rounded-sm text-cyan-300 px-6 py-2 cursor-pointer shadow-lg">{ label }</button>
    )
}