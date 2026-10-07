import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pince-coupante-pneumatique-nile-ms3g",
	"slug": "pince-coupante-pneumatique-nile-ms3g",
	"categoryId": "pince-coupante-pneumatique",
	"category": "pince-coupante-pneumatique",
	"label": "Nile MS3G",
	"brand": "Nile",
	"model": "MS3G",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pince-coupante-pneumatique-nile-ms3g.svg",
		"alt": "Repères techniques : Nile MS3G",
		"sourceUrl": "https://muromototekko.com/wp/wp-content/themes/muromototekko/assets/pdf/catalog2018.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "nile-ms3g",
		"label": "Modèle MS3G, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "MS3G",
			"Masse sans lame (g)": "75",
			"Consommation (cm³/course), référence de volume non indiquée": "31"
		}
	},
	"editorial": {
		"overview": "Nile MS3G. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Masse sans lame (g) : 75.",
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
			"label": "Masse sans lame (g)",
			"value": "75",
			"evidenceIds": [
				"october5-tools-nile-2018-p22"
			]
		},
		{
			"label": "Consommation (cm³/course), référence de volume non indiquée",
			"value": "31",
			"evidenceIds": [
				"october5-tools-nile-2018-p22"
			]
		},
		{
			"label": "Effort approximatif (N)",
			"value": "773",
			"evidenceIds": [
				"october5-tools-nile-2018-p22"
			]
		},
		{
			"label": "Plage de pression (MPa)",
			"value": "0.4~0.5",
			"evidenceIds": [
				"october5-tools-nile-2018-p22"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-nile-2018-p22",
			"sourceUrl": "https://muromototekko.com/wp/wp-content/themes/muromototekko/assets/pdf/catalog2018.pdf#page=22",
			"sourceLabel": "Nile : nile-2018, page PDF 22",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 bb8167a334ce062d9e67e8f7ba6f774c9ce4de906b8b4d69c97ebfe1c0f8dfe2. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-nile-2018-p22"
		],
		"workingPressureBar": [
			"october5-tools-nile-2018-p22"
		],
		"demandExplanation": [
			"october5-tools-nile-2018-p22"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
