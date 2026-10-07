import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pince-coupante-pneumatique-nile-ms10v",
	"slug": "pince-coupante-pneumatique-nile-ms10v",
	"categoryId": "pince-coupante-pneumatique",
	"category": "pince-coupante-pneumatique",
	"label": "Nile MS10V",
	"brand": "Nile",
	"model": "MS10V",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pince-coupante-pneumatique-nile-ms10v.svg",
		"alt": "Repères techniques : Nile MS10V",
		"sourceUrl": "https://muromototekko.com/wp/wp-content/themes/muromototekko/assets/pdf/catalog2018.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "nile-ms10v",
		"label": "Modèle MS10V, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "MS10V",
			"Masse sans lame (g)": "345",
			"Consommation (cm³/course), référence de volume non indiquée": "107"
		}
	},
	"editorial": {
		"overview": "Nile MS10V. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Masse sans lame (g) : 345.",
			"Consommation (cm³/course), référence de volume non indiquée : 107.",
			"Effort approximatif (N) : 1,387.",
			"Plage de pression (MPa) : 0.4~0.5."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"Les cm³/course ne sont pas explicitement référencés aux conditions normales ; aucune conversion en débit continu n’est faite. Pour les outils rotatifs, la pression et le régime du débit ne sont pas liés par le tableau.",
			"Les lames et autres accessoires sont exclus ; disponibilité et notice de la version livrée à confirmer.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Masse sans lame (g)",
			"value": "345",
			"evidenceIds": [
				"october5-tools-nile-2018-p24"
			]
		},
		{
			"label": "Consommation (cm³/course), référence de volume non indiquée",
			"value": "107",
			"evidenceIds": [
				"october5-tools-nile-2018-p24"
			]
		},
		{
			"label": "Effort approximatif (N)",
			"value": "1,387",
			"evidenceIds": [
				"october5-tools-nile-2018-p24"
			]
		},
		{
			"label": "Plage de pression (MPa)",
			"value": "0.4~0.5",
			"evidenceIds": [
				"october5-tools-nile-2018-p24"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-nile-2018-p24",
			"sourceUrl": "https://muromototekko.com/wp/wp-content/themes/muromototekko/assets/pdf/catalog2018.pdf#page=24",
			"sourceLabel": "Nile : nile-2018, page PDF 24",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 bb8167a334ce062d9e67e8f7ba6f774c9ce4de906b8b4d69c97ebfe1c0f8dfe2. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-nile-2018-p24"
		],
		"workingPressureBar": [
			"october5-tools-nile-2018-p24"
		],
		"demandExplanation": [
			"october5-tools-nile-2018-p24"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
