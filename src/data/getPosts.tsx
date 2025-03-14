import { prisma } from "@/uilts/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

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
      autherid: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}
