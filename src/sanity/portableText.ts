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
            alt="${value.altText}"
          />
        </picture>
        <p class="text-center font-light text-xs text-black">${value?.caption}</p>
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
    normal: ({ children }: { children: any }) => {
      const modifiedChildren = children.replace(
        // LITTLE HACCKY
        /(<a\b[^>]*>.*?<\/a>)/g,
        '<u class="text-blue-500 underline">$1</u>',
      );
      return `<p class="text-black text-lg font-light">${modifiedChildren}</p>`;
    },
  },
};

export function sanityPortableText(portabletext: any) {
  return portableTextToHtml(portabletext, customComponents);
}
