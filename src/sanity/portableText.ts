import { portableTextToHtml } from 'astro-sanity';
import { urlForImage } from './urlForImage';

const customComponents = {
  types: {
    // Images
    image: ({ value }: { value: any }) => {
      return `
        <picture>
          <source
            srcset="${urlForImage(value.asset).format('webp').url()}"
            type="image/webp"
          />
          <img
            class="responsive__img"
            src="${urlForImage(value.asset).url()}"
            alt="${value.alt}"
          />
        </picture>
      `;
    },
    // blocks
  },
  block: {
    h1: ({ children }: { children: any }) =>
      `<h1 class="text-3xl text-orange-500">${children}</h1>`,
    h2: ({ children }: { children: any }) =>
      `<h2 class="text-2xl text-orange-500">${children}</h2>`,
    h3: ({ children }: { children: any }) =>
      `<h3 class="text-xl text-orange-500">${children}</h3>`,
    normal: ({ children }: { children: any }) =>
      `<p class="text-black text-lg font-light ">${children}</p>`,
  },
};

export function sanityPortableText(portabletext: any) {
  return portableTextToHtml(portabletext, customComponents);
}
