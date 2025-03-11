import { getPosts } from "@/data/getPosts";

export default async function Home() {
  const data = await getPosts();
  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Lasted Posts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-4">
        {data.map((ele) => (
          <h1 key={ele.id}>{ele.title}</h1>
        ))}
      </div>
    </div>
  );
}
