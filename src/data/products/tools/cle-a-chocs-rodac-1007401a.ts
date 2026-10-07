import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-rodac-1007401a",
	"slug": "cle-a-chocs-rodac-1007401a",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "RODAC 1007401A",
	"brand": "RODAC",
	"model": "1007401A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-rodac-1007401a.svg",
		"alt": "Repères techniques : RODAC 1007401A",
		"sourceUrl": "https://www.sam-outillage.fr/data/pages/fr-fr/doc/SAM-OUTILLAGE-CATALOGUE-RODAC-POWERFUL-DEALS-2024-FR.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rodac-1007401a",
		"label": "Modèle 1007401A, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "1007401A",
			"Carré": "1’’",
			"Couple / NM": "3.800"
		}
	},
	"editorial": {
		"overview": "RODAC 1007401A. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Carré : 1’’.",
			"Couple / NM : 3.800.",
			"Vitesse / RPM : 4.100.",
			"Masse / KG : 8.9."
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
			"value": "1’’",
			"evidenceIds": [
				"october5-tools-rodac-2024-p6"
			]
		},
		{
			"label": "Couple / NM",
			"value": "3.800",
			"evidenceIds": [
				"october5-tools-rodac-2024-p6"
			]
		},
		{
			"label": "Vitesse / RPM",
			"value": "4.100",
			"evidenceIds": [
				"october5-tools-rodac-2024-p6"
			]
		},
		{
			"label": "Masse / KG",
			"value": "8.9",
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
