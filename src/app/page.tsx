import Image from 'next/image';
// import styles from './page.module.css';
import StatusLabel from './components/active-label';
import { Status } from './components/active-label';
export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Home Page</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Active</StatusLabel>
      <StatusLabel status={Status.Pending}>Active</StatusLabel>
      <StatusLabel status={Status.Suspended
        
      }>Active</StatusLabel>
    </main>
  );
}
