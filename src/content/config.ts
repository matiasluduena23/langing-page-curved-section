import { defineCollection, z } from "astro:content";

const postCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    text: z.string(),
    imgSrc: z.string(),
    imgAlt: z.string(),
  }),
});

export const collections = {
  posts: postCollection,
};