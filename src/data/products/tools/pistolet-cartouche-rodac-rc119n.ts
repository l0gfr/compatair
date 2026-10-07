import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-cartouche-rodac-rc119n",
	"slug": "pistolet-cartouche-rodac-rc119n",
	"categoryId": "pistolet-cartouche",
	"category": "pistolet-cartouche",
	"label": "RODAC RC119N",
	"brand": "RODAC",
	"model": "RC119N",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-cartouche-rodac-rc119n.svg",
		"alt": "Repères techniques : RODAC RC119N",
		"sourceUrl": "https://www.sam-outillage.fr/data/pages/fr-fr/doc/SAM-OUTILLAGE-CATALOGUE-RODAC-POWERFUL-DEALS-2024-FR.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rodac-rc119n",
		"label": "Modèle RC119N, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "RC119N",
			"Longueur / CM": "55",
			"Masse / KG": "1,4"
		}
	},
	"editorial": {
		"overview": "RODAC RC119N. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Longueur / CM : 55.",
			"Masse / KG : 1,4.",
			"Capacité : 310 ML cartouches ;300/400 ML sachets."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"Le débit publié est conservé dans sa cellule source. Le catalogue ne donne pas de régime de fonctionnement ni de pression d’essai associée ; aucun débit continu n’est déduit.",
			"Les références coffret BC / SET et les consommables ne sont pas comptées comme outils supplémentaires.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Longueur / CM",
			"value": "55",
			"evidenceIds": [
				"october5-tools-rodac-2024-p15"
			]
		},
		{
			"label": "Masse / KG",
			"value": "1,4",
			"evidenceIds": [
				"october5-tools-rodac-2024-p15"
			]
		},
		{
			"label": "Capacité",
			"value": "310 ML cartouches ;300/400 ML sachets",
			"evidenceIds": [
				"october5-tools-rodac-2024-p15"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-rodac-2024-p15",
			"sourceUrl": "https://www.sam-outillage.fr/data/pages/fr-fr/doc/SAM-OUTILLAGE-CATALOGUE-RODAC-POWERFUL-DEALS-2024-FR.pdf#page=15",
			"sourceLabel": "RODAC par SAM Outillage, catalogue2024 français, page PDF 15",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 8a6c7604b757281f5b4455273785b873757c55367046204619308ae9f35da613. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-rodac-2024-p15"
		],
		"workingPressureBar": [
			"october5-tools-rodac-2024-p15"
		],
		"demandExplanation": [
			"october5-tools-rodac-2024-p15"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
