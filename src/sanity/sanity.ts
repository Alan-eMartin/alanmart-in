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
  // sort posts by published date, descending
  const posts = await sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc)`,
  );

  return posts.map((post: Post) => {
    return {
      title: post.title,
      excerpt: post.excerpt,
      slug: post.slug.current,
      body: post.body,
      mainImage: post.mainImage,
      publishedAt: post.publishedAt,
      featured: post.featured,
    };
  });
}
