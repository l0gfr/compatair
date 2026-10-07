import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pince-coupante-pneumatique-nile-cp30xm",
	"slug": "pince-coupante-pneumatique-nile-cp30xm",
	"categoryId": "pince-coupante-pneumatique",
	"category": "pince-coupante-pneumatique",
	"label": "Nile CP30XM",
	"brand": "Nile",
	"model": "CP30XM",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pince-coupante-pneumatique-nile-cp30xm.svg",
		"alt": "Repères techniques : Nile CP30XM",
		"sourceUrl": "https://muromototekko.com/wp/wp-content/themes/muromototekko/assets/pdf/catalog2018.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "nile-cp30xm",
		"label": "Modèle CP30XM, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "CP30XM",
			"Longueur (mm)": "259",
			"Masse sans lame (g)": "940"
		}
	},
	"editorial": {
		"overview": "Nile CP30XM. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Longueur (mm) : 259.",
			"Masse sans lame (g) : 940.",
			"Section de poignée (mm) : 56.",
			"Consommation (cm³/course), référence de volume non indiquée : 956.",
			"Effort approximatif (N) : 5,807.",
			"Plage de pression (MPa) : 0.5~0.6."
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
			"value": "259",
			"evidenceIds": [
				"october5-tools-nile-2018-p19"
			]
		},
		{
			"label": "Masse sans lame (g)",
			"value": "940",
			"evidenceIds": [
				"october5-tools-nile-2018-p19"
			]
		},
		{
			"label": "Section de poignée (mm)",
			"value": "56",
			"evidenceIds": [
				"october5-tools-nile-2018-p19"
			]
		},
		{
			"label": "Consommation (cm³/course), référence de volume non indiquée",
			"value": "956",
			"evidenceIds": [
				"october5-tools-nile-2018-p19"
			]
		},
		{
			"label": "Effort approximatif (N)",
			"value": "5,807",
			"evidenceIds": [
				"october5-tools-nile-2018-p19"
			]
		},
		{
			"label": "Plage de pression (MPa)",
			"value": "0.5~0.6",
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
