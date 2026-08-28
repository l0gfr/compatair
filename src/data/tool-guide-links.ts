import type { ToolProfile } from '../domain/catalog';

export const defaultToolGuidePath = '/guides/pression-travail-6-3-bar-outils-pneumatiques/';

export const toolGuideByCategoryId: Partial<Record<ToolProfile['categoryId'], `/guides/${string}/`>> = {
	'agrafeuse-cloueuse': '/guides/compresseur-pour-agrafeuse-cloueuse-pneumatique/',
	'cle-a-chocs': '/guides/compresseur-pour-cle-a-chocs-pneumatique/',
	'cle-a-cliquet': '/guides/compresseur-pour-cle-a-cliquet-pneumatique/',
	cisaille: '/guides/compresseur-pour-cisaille-grignoteuse-pneumatique/',
	'derouilleur-a-aiguilles': '/guides/compresseur-pour-derouilleur-a-aiguilles/',
	gonflage: '/guides/compresseur-pour-gonfler-pneus/',
	grignoteuse: '/guides/compresseur-pour-cisaille-grignoteuse-pneumatique/',
	meuleuse: '/guides/compresseur-pour-meuleuse-pneumatique/',
	'pistolet-cartouche': '/guides/pistolet-cartouche-pneumatique-colle-mastic/',
	'pistolet-peinture-hvlp': '/guides/compresseur-pour-pistolet-peinture-hvlp/',
	'pistolet-peinture-lvlp': '/guides/pistolet-lvlp-vs-hvlp-compresseur/',
	'ponceuse-orbitale': '/guides/compresseur-pour-ponceuse-pneumatique/',
	sableuse: '/guides/compresseur-pour-sablage-pneumatique/',
	scie: '/guides/compresseur-pour-scie-sabre-pneumatique/',
	soufflette: '/guides/soufflette-garage-securite-bruit-consommation/',
	visseuse: '/guides/compresseur-pour-visseuse-pneumatique/',
};

export function toolGuidePath(tool: Pick<ToolProfile, 'categoryId'>) {
	return toolGuideByCategoryId[tool.categoryId] ?? defaultToolGuidePath;
}
