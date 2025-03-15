import { prisma } from "@/uilts/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound } from "next/navigation";

// Get all posts
export async function getPosts() {
  const data = await prisma.blogPost.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      createdAt: true,
      autherName: true,
      imageUrl: true,
      autherid: true,
      updatedAt: true,
      autherImage: true,
    },
  });

  return data;
}

// Get user posts
export async function getUserPosts() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const data = await prisma.blogPost.findMany({
    where: {
      autherid: user?.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

//Find post by id
export async function getPostById(id: string) {
  const data = await prisma.blogPost.findUnique({
    where: {
      id: id,
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
}
