"use server";

import { prisma } from "@/uilts/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export async function handleSubmit(formData: FormData) {
  //Data from the user
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  // Check if the user is logged in
  if (!user) {
    return redirect("/api/auth/register");
  }

  // Data from the form
  const title = formData.get("title");
  const content = formData.get("content");
  const imgeUrl = formData.get("imgeUrl");

  const data = await prisma.blogPost.create({
    data: {
      title: title as string,
      content: content as string,
      imageUrl: imgeUrl as string,
      autherid: user.id,
      autherImage: user.picture as string,
      autherName: user.given_name as string,
    },
  });

  return redirect("/dashboard");
}
