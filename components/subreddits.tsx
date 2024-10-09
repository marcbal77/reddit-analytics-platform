"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Plus } from 'lucide-react';
import Link from 'next/link';

export function Subreddits() {
  const [subreddits, setSubreddits] = useState(['AskReddit', 'funny', 'gaming']);
  const [newSubreddit, setNewSubreddit] = useState('');

  const addSubreddit = () => {
    if (newSubreddit && !subreddits.includes(newSubreddit)) {
      setSubreddits([...subreddits, newSubreddit]);
      setNewSubreddit('');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Available Subreddits</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {subreddits.map((subreddit) => (
          <Card key={subreddit}>
            <CardHeader>
              <CardTitle>{subreddit}</CardTitle>
            </CardHeader>
            <CardContent>
              <Link href={`/subreddit/${subreddit}`}>
                <Button>View Analytics</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex gap-2">
        <Input
          placeholder="Add new subreddit"
          value={newSubreddit}
          onChange={(e) => setNewSubreddit(e.target.value)}
        />
        <Button onClick={addSubreddit}>
          <Plus className="mr-2 h-4 w-4" /> Add Subreddit
        </Button>
      </div>
    </div>
  );
}