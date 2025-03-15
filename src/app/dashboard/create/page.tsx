import { handleSubmit } from "@/actions/formSub";
import SubmitButton from "@/components/general/SubmitButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function CreatePage() {
  return (
    <div>
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Create Post</CardTitle>
          <CardDescription>
            Create a new post to share with the world
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="flex flex-col gap-4" action={handleSubmit}>
            {/* Title */}
            <div className="flex flex-col gap-2">
              <Label>Title</Label>
              <Input required type="text" placeholder="Title" name="title" />
            </div>
            {/* Content */}
            <div className="flex flex-col gap-2">
              <Label>Content</Label>
              <Textarea required placeholder="Content" name="content" />
            </div>

            {/* Img */}
            <div className="flex flex-col gap-2">
              <Label>Image URL</Label>
              <Input
                required
                type="url"
                placeholder="Image url"
                name="imgeUrl"
              />
            </div>

            {/* Btn */}
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
