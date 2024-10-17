import Link from 'next/link';
export default function Home() {
  return (
    <main>
      <Link
        href={'/login'}
        className="block bg-gray-800 text-white w-60 h-10 rounded text-center"
      >
        Log in
      </Link>
    </main>
  );
}
