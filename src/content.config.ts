import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { guideAudienceIds, guideMetierIds, guideSeriesIds } from './domain/editorial-taxonomy';

const guides = defineCollection({
	loader: glob({ base: './src/content/guides', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string().min(20),
		seoTitle: z.string().min(20).max(60).optional(),
		description: z.string().min(80).max(180),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		category: z.enum(['Comprendre', 'Choisir', 'Installer', 'Utiliser']),
		audiences: z.array(z.enum(guideAudienceIds)).min(1),
		metiers: z.array(z.enum(guideMetierIds)).default([]),
		readingTime: z.number().int().positive(),
		featured: z.boolean().default(false),
		author: z.string().default('CompatAir'),
		reviewStatus: z.enum(['internal', 'external']).default('internal'),
		reviewer: z.string().min(2).optional(),
		reviewerRole: z.string().min(2).optional(),
		relatedCalculatorTool: z.string().optional(),
		series: z.enum(guideSeriesIds).optional(),
		relatedGuides: z.array(z.string().regex(/^[a-z0-9-]+$/)).max(6).default([]),
		sources: z.array(z.url()).min(1),
	}).superRefine((guide, context) => {
		if (new Set(guide.audiences).size !== guide.audiences.length) {
			context.addIssue({ code: 'custom', message: 'Une audience ne peut apparaître qu’une fois.', path: ['audiences'] });
		}
		if (new Set(guide.metiers).size !== guide.metiers.length) {
			context.addIssue({ code: 'custom', message: 'Un métier ne peut apparaître qu’une fois.', path: ['metiers'] });
		}
		if (guide.reviewStatus === 'external' && (!guide.reviewer || !guide.reviewerRole)) {
			context.addIssue({ code: 'custom', message: 'Une revue externe exige un relecteur nommé et son rôle.', path: ['reviewer'] });
		}
		if (guide.reviewStatus === 'internal' && (guide.reviewer || guide.reviewerRole)) {
			context.addIssue({ code: 'custom', message: 'Un relecteur nommé exige le statut external.', path: ['reviewStatus'] });
		}
	}),
});

export const collections = { guides };
