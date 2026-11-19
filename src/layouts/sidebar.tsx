export default function Sidebar() {
  return (
    <aside className="fixed bg-slate-900 min-w-64 top-0 bottom-0 left-0 text-white p-4">
        <div>
            <h1 className="font-medium text-2xl">Dashboard LMS</h1>
        </div>
        <div>
            <ul>
                <li>
                    <a href="/">Beranda</a>
                </li>
                <li>
                    <a href="/login">Masuk</a>
                </li>
            </ul>
        </div>
    </aside>
  )
}