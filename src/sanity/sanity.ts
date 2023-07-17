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

export type Work = {
  company: string;
  slug: {
    current: string;
  };
  companyUrl: string;
  mainImage: any;
  position: string;
  location: string;
  technologies: string[];
  startDate: string;
  endDate?: string;
  description: string;
};

export async function getWork() {
  const work = await sanityClient.fetch(
    `*[_type == "work"] | order(startDate desc)`,
  );

  return work.map((work: Work) => {
    return {
      company: work.company,
      slug: work.slug.current,
      companyUrl: work.companyUrl,
      mainImage: work.mainImage,
      position: work.position,
      location: work.location,
      technologies: work.technologies,
      startDate: work.startDate,
      endDate: work?.endDate,
      description: work.description,
    };
  });
}
