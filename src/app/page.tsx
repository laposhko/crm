import Link from 'next/link';
export default function Home() {
  return (
    <main>
      <h1 className="text-xl text-red-300">Home page</h1>
      <Link
        href={'/dashboard'}
        className="block bg-gray-800 text-white w-20 h-10 rounded text-center"
      >
        Log in
      </Link>
    </main>
  );
}
