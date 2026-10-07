import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cisaille-nile-am10",
	"slug": "cisaille-nile-am10",
	"categoryId": "cisaille",
	"category": "cisaille",
	"label": "Nile AM10",
	"brand": "Nile",
	"model": "AM10",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cisaille-nile-am10.svg",
		"alt": "Repères techniques : Nile AM10",
		"sourceUrl": "https://muromototekko.com/wp/wp-content/themes/muromototekko/assets/pdf/catalog2018.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "nile-am10",
		"label": "Modèle AM10, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "AM10",
			"Masse sans lame (g)": "296",
			"Dimension A (mm)": "109"
		}
	},
	"editorial": {
		"overview": "Nile AM10. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Masse sans lame (g) : 296.",
			"Dimension A (mm) : 109.",
			"Dimension B (mm) : 36."
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
			"value": "296",
			"evidenceIds": [
				"october5-tools-nile-2018-p42"
			]
		},
		{
			"label": "Dimension A (mm)",
			"value": "109",
			"evidenceIds": [
				"october5-tools-nile-2018-p42"
			]
		},
		{
			"label": "Dimension B (mm)",
			"value": "36",
			"evidenceIds": [
				"october5-tools-nile-2018-p42"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-nile-2018-p42",
			"sourceUrl": "https://muromototekko.com/wp/wp-content/themes/muromototekko/assets/pdf/catalog2018.pdf#page=42",
			"sourceLabel": "Nile : nile-2018, page PDF 42",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 bb8167a334ce062d9e67e8f7ba6f774c9ce4de906b8b4d69c97ebfe1c0f8dfe2. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-nile-2018-p42"
		],
		"workingPressureBar": [
			"october5-tools-nile-2018-p42"
		],
		"demandExplanation": [
			"october5-tools-nile-2018-p42"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
