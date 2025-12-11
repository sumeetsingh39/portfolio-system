import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const project = defineCollection({
  schema: z.object({
    name: z.string(),
    description: z.string(),
    url: z.string().url(),
    tech: z.array(z.string()).default([]),
    status: z
      .enum(["wip", "stable", "archived", "down", "internal"])
      .default("stable"),
    year: z.string(),
    draft: z.boolean().default(false),
    caseStudy: z.boolean().default(false),
  }),
});

export const collections = { blog, project };
