import Link from 'next/link';
export default function Home() {
  return (
    <main>
      <Link
        href={'/dashboard'}
        className="block bg-gray-800 text-white w-20 h-10 rounded text-center"
      >
        Log in
      </Link>
    </main>
  );
}
