import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getPostById } from "@/data/getPosts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Params = Promise<{ id: string }>;

export default async function page({ params }: { params: Params }) {
  const { id } = await params;
  const post = await getPostById(id);
  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <Link href={"/"} className={buttonVariants({ variant: "secondary" })}>
        Back to posts
      </Link>

      <div className="mb-8 mt-6">
        <h1 className="text-3xl font-bold tracking-tight mb-4">{post.title}</h1>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            {/* Image */}
            <div className="relative size-10 overflow-hidden rounded-full">
              <Image
                src={post.autherImage}
                alt={post.autherName}
                fill
                className="object-cover"
              />
            </div>
            {/* Name */}
            <p className="font-medium">{post.autherName}</p>
          </div>
          {/* Date */}
          <p className="text-sm text-gray-500">
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(post.createdAt)}
          </p>
        </div>
      </div>
      {/* Post Img */}
      <div className="relative h-[400px] w-full mb-8  overflow-hidden rounded-lg">
        <Image
          src={post.imageUrl}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Card */}
      <Card>
        <CardContent>
          <p className="text-gray-700">{post.content}</p>
        </CardContent>
      </Card>
    </div>
  );
}
