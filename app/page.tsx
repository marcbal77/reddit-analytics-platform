import { Subreddits } from '@/components/subreddits';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Reddit Analytics Platform</h1>
      <Subreddits />
    </div>
  );
}