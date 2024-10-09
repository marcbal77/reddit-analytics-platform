import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface Post {
  id: number;
  title: string;
  score: number;
  author: string;
}

export function TopPosts({ posts }: { posts: Post[] }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Top Posts</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Score</TableHead>
            <TableHead>Author</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.title}</TableCell>
              <TableCell>{post.score}</TableCell>
              <TableCell>{post.author}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}