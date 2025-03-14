import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogPostCardProps {
  data: {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
    autherid: string;
    autherName: string;
    autherImage: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

export default function BlogPostCard({ data }: BlogPostCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg">
      <Link href={`/post/${data.id}`} className="block size-full">
        {/* Image */}
        <div className="relative h-48 md:h-64 w-full overflow-hidden">
          <Image
            src={data.imageUrl}
            alt="Image for blog"
            fill
            className="object-contain transition-transform duration-300 transform group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-4 ">
          <h3 className="mb-2 font-semibold text-lg text-gray-900">
            {data.title}
          </h3>

          <p className="mb-4 text-sm text-gray-600 line-clamp-2">
            {data.content}
          </p>
          {/* auther info */}
          <div className="flex items-center justify-between">
            {/* Image and name */}
            <div className="flex items-center space-x-2">
              {/* Image */}
              <div className="relative size-8 overflow-hidden rounded-full">
                <Image
                  src={data.autherImage}
                  alt={data.autherName}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Name */}
              <p className="text-sm font-medium text-gray-700">
                {data.autherName}
              </p>
            </div>

            {/* Time */}
            <time className="text-xs text-gray-500">
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              }).format(data.createdAt)}
            </time>
          </div>
        </div>
      </Link>
    </div>
  );
}
