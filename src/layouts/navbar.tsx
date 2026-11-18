export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 flex items-center justify-between h-12 px-12 bg-slate-900 text-slate-100">
            <span>
                <a href="/">LMS</a>
            </span>
            <nav className="flex justify-end">
                <ul className="flex gap-4">
                    <li><a href="">List 1</a></li>
                    <li><a href="">List 2</a></li>
                </ul>
            </nav>
        </header>
    )
}