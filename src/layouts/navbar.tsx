export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 flex items-center justify-between h-16 px-12 shadow-sm bg-white text-slate-900">
            <span>
                <a href="/" className="font-semibold text-2xl">
                    <span className="text-black">Kelas</span>
                    <span className="text-cyan-500">Ku</span>
                </a>
            </span>
            <nav className="flex justify-end">
                <ul className="flex gap-4">
                    <li><a href="/">Beranda</a></li>
                    <li><a href="/login">Masuk</a></li>
                    <li><a href="/register" className="px-3 py-1 bg-cyan-800 text-cyan-300 rounded-sm">Daftar</a></li>
                </ul>
            </nav>
        </header>
    )
}