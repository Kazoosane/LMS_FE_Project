import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RegisterForm from '../components/registerForm'
import '../index.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <>
            <main className='min-h-screen flex justify-center items-center'>
                <RegisterForm />
            </main>
        </>
    </StrictMode>,
)