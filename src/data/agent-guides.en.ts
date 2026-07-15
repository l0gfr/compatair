export type EnglishAgentGuide = {
	sourceId: string;
	title: string;
	description: string;
	bodyMarkdown: string;
	sourceUrls: string[];
	translationStatus: 'machine_translated_unreviewed' | 'human_reviewed';
};

// Generated translations remain explicitly unreviewed until a human promotes each record.
// The publication manifest exposes both total and reviewed coverage.
let generated: EnglishAgentGuide[] = [];
try {
	generated = (await import('./agent-guides.en.generated.json')).default as EnglishAgentGuide[];
} catch {
	// A clean checkout without generated translations remains valid and reports zero coverage.
}
export const englishAgentGuides = generated;
