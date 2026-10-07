import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-rodac-rc2775",
	"slug": "cle-a-chocs-rodac-rc2775",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "RODAC RC2775",
	"brand": "RODAC",
	"model": "RC2775",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-rodac-rc2775.svg",
		"alt": "Repères techniques : RODAC RC2775",
		"sourceUrl": "https://www.sam-outillage.fr/data/pages/fr-fr/doc/SAM-OUTILLAGE-CATALOGUE-RODAC-POWERFUL-DEALS-2024-FR.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rodac-rc2775",
		"label": "Modèle RC2775, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "RC2775",
			"Carré": "1/2’’",
			"Couple / NM": "1.054"
		}
	},
	"editorial": {
		"overview": "RODAC RC2775. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Carré : 1/2’’.",
			"Couple / NM : 1.054.",
			"Vitesse / RPM : 9.000.",
			"Masse / KG : 2."
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
			"label": "Carré",
			"value": "1/2’’",
			"evidenceIds": [
				"october5-tools-rodac-2024-p6"
			]
		},
		{
			"label": "Couple / NM",
			"value": "1.054",
			"evidenceIds": [
				"october5-tools-rodac-2024-p6"
			]
		},
		{
			"label": "Vitesse / RPM",
			"value": "9.000",
			"evidenceIds": [
				"october5-tools-rodac-2024-p6"
			]
		},
		{
			"label": "Masse / KG",
			"value": "2",
			"evidenceIds": [
				"october5-tools-rodac-2024-p6"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-rodac-2024-p6",
			"sourceUrl": "https://www.sam-outillage.fr/data/pages/fr-fr/doc/SAM-OUTILLAGE-CATALOGUE-RODAC-POWERFUL-DEALS-2024-FR.pdf#page=6",
			"sourceLabel": "RODAC par SAM Outillage, catalogue2024 français, page PDF 6",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 8a6c7604b757281f5b4455273785b873757c55367046204619308ae9f35da613. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-rodac-2024-p6"
		],
		"workingPressureBar": [
			"october5-tools-rodac-2024-p6"
		],
		"demandExplanation": [
			"october5-tools-rodac-2024-p6"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
