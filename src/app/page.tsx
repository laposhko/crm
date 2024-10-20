import Link from 'next/link';
export default function Home() {
  return (
    <main className="flex h-screen flex-col justify-center items-center gap-4">
      <h1 className="text-3xl">Welcome to our application</h1>
      <Link
        href={'/login'}
        className="flex justify-center items-center bg-gray-800 text-white w-60 h-10 rounded "
      >
        Log in
      </Link>
    </main>
  );
}
