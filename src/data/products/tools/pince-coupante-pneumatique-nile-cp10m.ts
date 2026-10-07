import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pince-coupante-pneumatique-nile-cp10m",
	"slug": "pince-coupante-pneumatique-nile-cp10m",
	"categoryId": "pince-coupante-pneumatique",
	"category": "pince-coupante-pneumatique",
	"label": "Nile CP10M",
	"brand": "Nile",
	"model": "CP10M",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pince-coupante-pneumatique-nile-cp10m.svg",
		"alt": "Repères techniques : Nile CP10M",
		"sourceUrl": "https://muromototekko.com/wp/wp-content/themes/muromototekko/assets/pdf/catalog2018.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "nile-cp10m",
		"label": "Modèle CP10M, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "CP10M",
			"Longueur (mm)": "113",
			"Masse sans lame (g)": "220"
		}
	},
	"editorial": {
		"overview": "Nile CP10M. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Longueur (mm) : 113.",
			"Masse sans lame (g) : 220.",
			"Section de poignée (mm) : 36.",
			"Consommation (cm³/course), référence de volume non indiquée : 116.",
			"Effort approximatif (N) : 675.",
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
			"value": "113",
			"evidenceIds": [
				"october5-tools-nile-2018-p19"
			]
		},
		{
			"label": "Masse sans lame (g)",
			"value": "220",
			"evidenceIds": [
				"october5-tools-nile-2018-p19"
			]
		},
		{
			"label": "Section de poignée (mm)",
			"value": "36",
			"evidenceIds": [
				"october5-tools-nile-2018-p19"
			]
		},
		{
			"label": "Consommation (cm³/course), référence de volume non indiquée",
			"value": "116",
			"evidenceIds": [
				"october5-tools-nile-2018-p19"
			]
		},
		{
			"label": "Effort approximatif (N)",
			"value": "675",
			"evidenceIds": [
				"october5-tools-nile-2018-p19"
			]
		},
		{
			"label": "Plage de pression (MPa)",
			"value": "0.4~0.5",
			"evidenceIds": [
				"october5-tools-nile-2018-p19"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-nile-2018-p19",
			"sourceUrl": "https://muromototekko.com/wp/wp-content/themes/muromototekko/assets/pdf/catalog2018.pdf#page=19",
			"sourceLabel": "Nile : nile-2018, page PDF 19",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 bb8167a334ce062d9e67e8f7ba6f774c9ce4de906b8b4d69c97ebfe1c0f8dfe2. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-nile-2018-p19"
		],
		"workingPressureBar": [
			"october5-tools-nile-2018-p19"
		],
		"demandExplanation": [
			"october5-tools-nile-2018-p19"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
