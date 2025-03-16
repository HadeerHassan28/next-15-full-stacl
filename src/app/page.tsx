import BlogPostCard from "@/components/general/BlogPostCard";
import { getPosts } from "@/data/getPosts";
import { Suspense } from "react";

export const revalidate = 60;

export default function Home() {
  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Lasted Posts</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <BlogPosts />
      </Suspense>
    </div>
  );
}

async function BlogPosts() {
  const data = await getPosts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-4">
      {data.map((ele) => (
        <BlogPostCard key={ele.id} data={ele} />
      ))}
    </div>
  );
}
