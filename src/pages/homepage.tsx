import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import '../index.css';
import Navbar from '../layouts/navbar';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <>
            <Navbar />
            <section className="mt-36 mx-12">
                <h1 className="text-4xl text-cyan-950 font-bold">Belajar membangun aplikasi, dari baris kode pertama.</h1>
                <p className="text-2xl mt-8 text-cyan-900">Kursus praktik berbasis proyek. Setiap modul membawa kamu selangkah lebih dekat ke aplikasi yang benar-benar berjalan di server.</p>
                <div className="mt-8">
                    <a href="" className="rounded-sm mr-2 py-2 px-6 bg-cyan-50 border-cyan-900 border">Lihat cara kerja</a>
                    <a href="register" className="bg-cyan-800 ml-2 rounded-sm text-cyan-300 px-6 py-2">Daftar</a>
                </div>
                <p className="mt-8 text-cyan-900">Tanpa kartu kredit. <span className="font-bold">Gratis 100%</span></p>
            </section>

            <section className="mt-36 px-12 py-12 bg-cyan-900">
                <h2>Dari nol sampai aplikasi berjalan di server</h2>
                
            </section>
        </>
    </StrictMode>
)