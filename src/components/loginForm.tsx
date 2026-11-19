import Button from './button'
import { useState } from 'react';

interface LoginResponse {
    message: string;
    error?: string;
    data?: {
        username: string;
        email: string;
        password: string
    }
}

export default function LoginForm() {
    const [error, setError] = useState<string>("");
    const [success, setSucccess] = useState<string>("");
    const [loading, setLoading] =  useState<boolean>(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setError("");
        setSucccess("");
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const payload = {
            username: formData.get("username"),
            email: formData.get("email"),
            password: formData.get("password")
        }
    
        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            })

            const result: LoginResponse = await res.json();

            if(!res.ok) {
                setError(result.error ?? result.message);
                return;
            }

            setSucccess(result.message);
        } catch(error) {
            setError("Tidak dapat terhubung ke server");
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='w-125 p-8 shadow-2xl rounded-2xl'>
                <div className='flex justify-end items-center'>
                    <a href="/" className='bg-cyan-900 text-cyan-300 px-3 py-0.5 rounded-xl'>Beranda</a>
                </div>
                <div className='font-bold text-2xl text-center mb-4'>
                    MASUK AKUN
                </div>
                <div>
                    <div className='flex flex-col'>
                        <label htmlFor="username">Nama Pengguna</label>
                        <input type="text" name='username' id='username' className='mt-1 py-2 px-4 bg-gray-200 rounded-xl' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' id='email' className='mt-1 py-2 px-4 bg-gray-200 rounded-xl' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="password">Kata Sandi</label>
                        <input type="password" name='password' id='password' className='mt-1 py-2 px-4 bg-gray-200 rounded-xl' />
                    </div>
                    <div className='mt-4 flex items-center justify-center'>
                        Belum memiliki akun? <a href="/register" className='text-cyan-800'>buat akun baru</a>
                    </div>
                    <div className='mt-4 flex justify-center'>
                        <Button label='MASUK' />
                    </div>
                </div>
            </form>
        </>
    )
}