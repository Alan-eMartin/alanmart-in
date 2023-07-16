import { useSanityClient } from 'astro-sanity';
import { createImageBuilder } from 'astro-sanity';

export const imageBuilder = createImageBuilder(useSanityClient() as any);

export function urlForImage(source: any) {
  return imageBuilder.image(source);
}
