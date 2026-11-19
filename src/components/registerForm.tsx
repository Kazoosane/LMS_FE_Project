import Button from './button'

export default function RegisterForm() {
    return (
        <>
            <form action="" method="POST" className='w-125 p-8 shadow-2xl rounded-2xl'>
                <div className='flex justify-end items-center'>
                    <a href="/" className='bg-cyan-900 text-cyan-300 px-3 py-0.5 rounded-xl'>Beranda</a>
                </div>
                <div className='font-bold text-2xl text-center mb-4'>
                    DAFTAR AKUN
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
                    <div className='flex flex-col'>
                        <label htmlFor="confirm-password">Konfirmasi Kata Sandi</label>
                        <input type="password" name='confirm-password' id='confirm-password' className='mt-1 py-2 px-4 bg-gray-200 rounded-xl' />
                    </div>
                    <div className='mt-4 flex items-center justify-center'>
                        Sudah memiliki akun? <a href="/login" className='text-cyan-800  '> masuk ke akun</a>
                    </div>
                    <div className='mt-4 flex justify-center'>
                        <Button label='DAFTAR' />
                    </div>
                </div>
            </form>
        </>
    )
}