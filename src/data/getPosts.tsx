import { prisma } from "@/uilts/db";

export async function getPosts() {
  const data = await prisma.blogPost.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      createdAt: true,
      autherName: true,
      imageUrl: true,
    },
  });

  return data;
}
