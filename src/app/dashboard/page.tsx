import BlogPostCard from "@/components/general/BlogPostCard";
import { buttonVariants } from "@/components/ui/button";
import { getUserPosts } from "@/data/getPosts";
import Link from "next/link";
import React from "react";

export default async function page() {
  const data = await getUserPosts();
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium">Your Blog Articles</h2>

        <Link href={"/dashboard/create"} className={buttonVariants()}>
          Create Post
        </Link>
      </div>

      {/* Display user posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {data.map((post) => (
          <BlogPostCard data={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}
