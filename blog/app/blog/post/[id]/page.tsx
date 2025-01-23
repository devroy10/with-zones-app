import Link from "next/link";

interface PageProps {
  params: {
    id: Promise<string> | undefined;
  }
}

export async function generateMetadata({ params }: PageProps) {
  const id = await params.id;
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


export default async function Post({ params }: PageProps) {
  const id = await params.id;
  return (
    <div>
      <h3>Post #{id}</h3>
      <p>Lorem ipsum</p>
      <Link href="/blog">Back to blog</Link>
    </div>
  );
}
