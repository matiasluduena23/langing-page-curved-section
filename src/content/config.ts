import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    text: z.string(),
    imgSrc: image(),
    imgAlt: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};