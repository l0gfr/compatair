import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pince-coupante-pneumatique-nile-ms20v",
	"slug": "pince-coupante-pneumatique-nile-ms20v",
	"categoryId": "pince-coupante-pneumatique",
	"category": "pince-coupante-pneumatique",
	"label": "Nile MS20V",
	"brand": "Nile",
	"model": "MS20V",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pince-coupante-pneumatique-nile-ms20v.svg",
		"alt": "Repères techniques : Nile MS20V",
		"sourceUrl": "https://muromototekko.com/wp/wp-content/themes/muromototekko/assets/pdf/catalog2018.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "nile-ms20v",
		"label": "Modèle MS20V, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "MS20V",
			"Masse sans lame (g)": "650",
			"Consommation (cm³/course), référence de volume non indiquée": "340"
		}
	},
	"editorial": {
		"overview": "Nile MS20V. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Masse sans lame (g) : 650.",
			"Consommation (cm³/course), référence de volume non indiquée : 340.",
			"Effort approximatif (N) : 3,335.",
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
			"label": "Masse sans lame (g)",
			"value": "650",
			"evidenceIds": [
				"october5-tools-nile-2018-p24"
			]
		},
		{
			"label": "Consommation (cm³/course), référence de volume non indiquée",
			"value": "340",
			"evidenceIds": [
				"october5-tools-nile-2018-p24"
			]
		},
		{
			"label": "Effort approximatif (N)",
			"value": "3,335",
			"evidenceIds": [
				"october5-tools-nile-2018-p24"
			]
		},
		{
			"label": "Plage de pression (MPa)",
			"value": "0.5~0.6",
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
