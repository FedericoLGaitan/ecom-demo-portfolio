import Link from 'next/link';

export default function notFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-darkBg/80">
            <h1 className="text-4xl font-bold text-red-400">404 - Page not found</h1>
            <p className="text-lg mt-4">
                It seems you got lost. ¿Wanna go back{' '}
                <Link href="/">
                    <span className="text-slate-300 underline">home</span>
                </Link>
                ?
            </p>
        </div>
    );
}
