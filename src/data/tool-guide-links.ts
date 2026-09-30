import type { ToolProfile } from '../domain/catalog';

export const defaultToolGuidePath = '/guides/pression-travail-6-3-bar-outils-pneumatiques/';

export const toolGuideByCategoryId: Partial<Record<ToolProfile['categoryId'], `/guides/${string}/`>> = {
	'agrafeuse-cloueuse': '/guides/compresseur-pour-agrafeuse-cloueuse-pneumatique/',
	'cle-a-chocs': '/guides/compresseur-pour-cle-a-chocs-pneumatique/',
	'cle-a-impulsions': '/guides/cle-a-impulsions-ou-cle-a-chocs-air-comprime/',
	'cle-a-cliquet': '/guides/compresseur-pour-cle-a-cliquet-pneumatique/',
	cisaille: '/guides/compresseur-pour-cisaille-grignoteuse-pneumatique/',
	'derouilleur-a-aiguilles': '/guides/compresseur-pour-derouilleur-a-aiguilles/',
	gonflage: '/guides/compresseur-pour-gonfler-pneus/',
	graveur: '/guides/compresseur-pour-graveur-pneumatique-cp9361/',
	grignoteuse: '/guides/compresseur-pour-cisaille-grignoteuse-pneumatique/',
	'lime-bande': '/guides/compresseur-ponceuse-bande-lime-polisseuse-pneumatique/',
	meuleuse: '/guides/compresseur-pour-meuleuse-pneumatique/',
	'marteau-a-river': '/guides/compresseur-pour-marteau-a-river-pneumatique/',
	perceuse: '/guides/compresseur-pour-perceuse-pneumatique/',
	'pistolet-cartouche': '/guides/pistolet-cartouche-pneumatique-colle-mastic/',
	'pistolet-peinture-hvlp': '/guides/compresseur-pour-pistolet-peinture-hvlp/',
	'pistolet-peinture-lvlp': '/guides/pistolet-lvlp-vs-hvlp-compresseur/',
	polisseuse: '/guides/compresseur-ponceuse-bande-lime-polisseuse-pneumatique/',
	'ponceuse-bande': '/guides/compresseur-ponceuse-bande-lime-polisseuse-pneumatique/',
	'ponceuse-orbitale': '/guides/compresseur-pour-ponceuse-pneumatique/',
	'ponceuse-vibrante': '/guides/compresseur-pour-ponceuse-pneumatique/',
	'ponceuse-rotative': '/guides/compresseur-pour-ponceuse-pneumatique/',
	riveteuse: '/guides/compresseur-pour-riveteuse-pneumatique/',
	sableuse: '/guides/compresseur-pour-sablage-pneumatique/',
	scie: '/guides/compresseur-pour-scie-sabre-pneumatique/',
	taraudeuse: '/guides/compresseur-pour-taraudeuse-pneumatique/',
	tronconneuse: '/guides/compresseur-pour-tronconneuse-pneumatique/',
	soufflette: '/guides/soufflette-garage-securite-bruit-consommation/',
	visseuse: '/guides/compresseur-pour-visseuse-pneumatique/',
};

export const toolGuideById: Record<string, `/guides/${string}/`> = {
	"perceuse-top-cat-300d3mk-8250-d3-8": "/guides/renner-rs-pro-7-5-11-0-deux-perceuses-top-cat/",
	"meuleuse-uryu-ug-25na-50062": "/guides/uryu-ug25na-6mm-quart-pouce-collet-codes/",
	"meuleuse-uryu-ug-25na-50072": "/guides/uryu-ug25na-6mm-quart-pouce-collet-codes/",
	"meuleuse-uryu-ug-38n-50512": "/guides/uryu-ug38n-ug38nl-meuleuse-longue-debit/",
	"meuleuse-uryu-ug-38nl-50712": "/guides/uryu-ug38n-ug38nl-meuleuse-longue-debit/",
	"visseuse-uryu-us-lt10b-47362": "/guides/uryu-us-lt10b-visseuse-faible-couple-air/",
	"cle-a-cliquet-uryu-urw-6-20052": "/guides/uryu-urw6-pression-recommandee-couple-6-bar/",
	"cle-a-chocs-npk-nw-2800p-r-20735": "/guides/npk-nw2800p-r-4r-enclume-longue/",
	"cle-a-chocs-npk-nw-2800p-4r-20748": "/guides/npk-nw2800p-r-4r-enclume-longue/",
	"cle-a-chocs-npk-nw-3500gb-p-25853": "/guides/npk-nw3500gb-6p-version-longue-debit/",
	"cle-a-chocs-npk-nw-3500gb-6p-25854": "/guides/npk-nw3500gb-6p-version-longue-debit/",
	"perceuse-top-cat-400d3mk-5500-d1-2": "/guides/top-cat-300d-400d-compresseur-combi-xp/",
	"meuleuse-top-cat-400ehskd-7-20000-1-4": "/guides/top-cat-400eh-meuleuse-extension-7-36-pouces/",
	"meuleuse-top-cat-400ehskd-36-20000-1-4": "/guides/top-cat-400eh-meuleuse-extension-7-36-pouces/"
};

export function toolGuidePath(tool: Pick<ToolProfile, 'categoryId'> & Partial<Pick<ToolProfile, 'id'>>) {
	return (tool.id ? toolGuideById[tool.id] : undefined) ?? toolGuideByCategoryId[tool.categoryId] ?? defaultToolGuidePath;
}
