import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pince-coupante-pneumatique-nile-mr3m",
	"slug": "pince-coupante-pneumatique-nile-mr3m",
	"categoryId": "pince-coupante-pneumatique",
	"category": "pince-coupante-pneumatique",
	"label": "Nile MR3M",
	"brand": "Nile",
	"model": "MR3M",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pince-coupante-pneumatique-nile-mr3m.svg",
		"alt": "Repères techniques : Nile MR3M",
		"sourceUrl": "https://muromototekko.com/wp/wp-content/themes/muromototekko/assets/pdf/catalog2018.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "nile-mr3m",
		"label": "Modèle MR3M, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "MR3M",
			"Longueur (mm)": "101",
			"Masse sans lame (g)": "70"
		}
	},
	"editorial": {
		"overview": "Nile MR3M. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Longueur (mm) : 101.",
			"Masse sans lame (g) : 70.",
			"Section de poignée (mm) : 20.",
			"Consommation (cm³/course), référence de volume non indiquée : 31.",
			"Effort approximatif (N) : 773.",
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
			"label": "Longueur (mm)",
			"value": "101",
			"evidenceIds": [
				"october5-tools-nile-2018-p17"
			]
		},
		{
			"label": "Masse sans lame (g)",
			"value": "70",
			"evidenceIds": [
				"october5-tools-nile-2018-p17"
			]
		},
		{
			"label": "Section de poignée (mm)",
			"value": "20",
			"evidenceIds": [
				"october5-tools-nile-2018-p17"
			]
		},
		{
			"label": "Consommation (cm³/course), référence de volume non indiquée",
			"value": "31",
			"evidenceIds": [
				"october5-tools-nile-2018-p17"
			]
		},
		{
			"label": "Effort approximatif (N)",
			"value": "773",
			"evidenceIds": [
				"october5-tools-nile-2018-p17"
			]
		},
		{
			"label": "Plage de pression (MPa)",
			"value": "0.4~0.5",
			"evidenceIds": [
				"october5-tools-nile-2018-p17"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-nile-2018-p17",
			"sourceUrl": "https://muromototekko.com/wp/wp-content/themes/muromototekko/assets/pdf/catalog2018.pdf#page=17",
			"sourceLabel": "Nile : nile-2018, page PDF 17",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 bb8167a334ce062d9e67e8f7ba6f774c9ce4de906b8b4d69c97ebfe1c0f8dfe2. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-nile-2018-p17"
		],
		"workingPressureBar": [
			"october5-tools-nile-2018-p17"
		],
		"demandExplanation": [
			"october5-tools-nile-2018-p17"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
