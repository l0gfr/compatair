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
	sableuse: '/guides/compresseur-pour-sablage-pneumatique/',
	scie: '/guides/compresseur-pour-scie-sabre-pneumatique/',
	taraudeuse: '/guides/compresseur-pour-taraudeuse-pneumatique/',
	tronconneuse: '/guides/compresseur-pour-meuleuse-pneumatique/',
	soufflette: '/guides/soufflette-garage-securite-bruit-consommation/',
	visseuse: '/guides/compresseur-pour-visseuse-pneumatique/',
};

export function toolGuidePath(tool: Pick<ToolProfile, 'categoryId'>) {
	return toolGuideByCategoryId[tool.categoryId] ?? defaultToolGuidePath;
}
