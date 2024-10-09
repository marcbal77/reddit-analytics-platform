"use client"

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TopPosts } from '@/components/top-posts';
import { Themes } from '@/components/themes';

export default function SubredditPage({ params }: { params: { name: string } }) {
  const [posts, setPosts] = useState([]);
  const [themes, setThemes] = useState([]);

  // Fetch data for the subreddit (this would be replaced with actual API calls)
  const fetchData = async () => {
    // Simulated data fetch
    const fetchedPosts = [
      { id: 1, title: 'Post 1', score: 1000, author: 'user1' },
      { id: 2, title: 'Post 2', score: 800, author: 'user2' },
      { id: 3, title: 'Post 3', score: 600, author: 'user3' },
    ];
    setPosts(fetchedPosts);

    const fetchedThemes = [
      { id: 1, name: 'Technology', count: 50 },
      { id: 2, name: 'Politics', count: 30 },
      { id: 3, name: 'Entertainment', count: 20 },
    ];
    setThemes(fetchedThemes);
  };

  // Fetch data when the component mounts
  useState(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">r/{params.name}</h1>
      <Tabs defaultValue="top-posts">
        <TabsList>
          <TabsTrigger value="top-posts">Top Posts</TabsTrigger>
          <TabsTrigger value="themes">Themes</TabsTrigger>
        </TabsList>
        <TabsContent value="top-posts">
          <TopPosts posts={posts} />
        </TabsContent>
        <TabsContent value="themes">
          <Themes themes={themes} />
        </TabsContent>
      </Tabs>
    </div>
  );
}