import { useSanityClient } from 'astro-sanity';

export const sanityClient = useSanityClient();

export type Post = {
  title: string;
  excerpt: string;
  slug: {
    current: string;
  };
  mainImage: any;
  publishedAt: string;
  body: any[];
  featured: boolean;
};

export async function getPosts(): Promise<Post[]> {
  const posts = await sanityClient.fetch(`*[_type == "post"]`);

  return posts.map((post: Post) => {
    return {
      title: post.title,
      excerpt: post.excerpt,
      slug: post.slug.current,
      body: post.body,
      mainImage: post.mainImage,
      publishedAt: post.publishedAt,
    };
  });
}

export async function getPost(slug: string): Promise<Post> {
  const post = await sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug },
  );

  return {
    title: post.title,
    excerpt: post.excerpt,
    slug: post.slug.current,
    body: post.body,
    mainImage: post.mainImage,
    publishedAt: post.publishedAt,
    featured: post.featured,
  };
}
