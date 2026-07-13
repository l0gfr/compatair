import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const guides = defineCollection({
	loader: glob({ base: './src/content/guides', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string().min(20),
		description: z.string().min(80).max(180),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		category: z.enum(['Comprendre', 'Choisir', 'Installer', 'Utiliser']),
		readingTime: z.number().int().positive(),
		featured: z.boolean().default(false),
		author: z.string().default('CompatAir'),
		reviewer: z.string().default('CompatAir'),
		relatedCalculatorTool: z.string().optional(),
		sources: z.array(z.url()).min(1),
	}),
});

export const collections = { guides };
