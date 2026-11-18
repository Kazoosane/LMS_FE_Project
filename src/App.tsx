import { useEffect, useState } from "react";

type Post = {
    id: number,
    title: string,
    description: string | null,
    created_at: string
}

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

export default function App() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(`${API_URL}/api/posts`)
        .then((res) => {
            if(!res.ok) throw new Error(`Status ${res.status}`);
            return res.json()
        })
        .then((data: Post[]) => setPosts(data))
        .catch((err: Error) => setError(err.message))
        .finally(() => setLoading(false))
    }, []);

    return (
        <main className="min-h-screen bg-slate-100 py-12 px-4">

            <div className="mx-auto max-w-2xl">
                <h1 className="text-3xl font-bold text-slate-800 mb-8">Daftar Course</h1>
                {loading && <p className="text-slate-500">Memuat data...</p>}
                {error && (
                    <p className="rounded-lg bg-red-100 p-4 text-red-700">
                        Gagal mengambil data: {error}
                    </p>
                )}

                <div className="flex gap-4">
                    {posts.map((post) => (
                        <article key={post.id} className="rounded-xl bg-white p-6 shadow-sm border border-slate-200">
                            <small id="post-created-at">
                                {post.created_at.slice(0, 10) ?? ""}
                            </small>
                            <h2 className="text-xl font-semibold text-slate-900">
                                {post.title}
                            </h2>
                            <p className="mt-2 text-slate-600">{post.description}</p>
                            <div className="flex justify-end">
                                <a href="" className="text-blue-600 font-semibold">Lihat Detail</a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    )
}