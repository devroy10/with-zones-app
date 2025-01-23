import Link from "next/link";

interface Params {
  id: string;
}

interface Props { // Ensure Props extends PageProps
  params: Promise<Params>; // Change here: params should be a Promise
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params; // Await the params here
  const { id } = resolvedParams;
  return {
    title: `Post ${id}`,
  };
}

export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
  ];
}


export default async function Post({ params }: Props) {
  const resolvedParams = await params; // Await the params here
  const { id } = resolvedParams; // Now this will work
  return (
    <div>
      <h3>Post #{id}</h3>
      <p>Lorem ipsum</p>
      <Link href="/blog">Back to blog</Link>
    </div>
  );
}
