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
		reviewStatus: z.enum(['internal', 'external']).default('internal'),
		reviewer: z.string().min(2).optional(),
		reviewerRole: z.string().min(2).optional(),
		relatedCalculatorTool: z.string().optional(),
		sources: z.array(z.url()).min(1),
	}).superRefine((guide, context) => {
		if (guide.reviewStatus === 'external' && (!guide.reviewer || !guide.reviewerRole)) {
			context.addIssue({ code: 'custom', message: 'Une revue externe exige un relecteur nommé et son rôle.', path: ['reviewer'] });
		}
		if (guide.reviewStatus === 'internal' && (guide.reviewer || guide.reviewerRole)) {
			context.addIssue({ code: 'custom', message: 'Un relecteur nommé exige le statut external.', path: ['reviewStatus'] });
		}
	}),
});

export const collections = { guides };
