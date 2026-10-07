import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "grignoteuse-rodac-rc4005",
	"slug": "grignoteuse-rodac-rc4005",
	"categoryId": "grignoteuse",
	"category": "grignoteuse",
	"label": "RODAC RC4005",
	"brand": "RODAC",
	"model": "RC4005",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/grignoteuse-rodac-rc4005.svg",
		"alt": "Repères techniques : RODAC RC4005",
		"sourceUrl": "https://www.sam-outillage.fr/data/pages/fr-fr/doc/SAM-OUTILLAGE-CATALOGUE-RODAC-POWERFUL-DEALS-2024-FR.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rodac-rc4005",
		"label": "Modèle RC4005, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "RC4005",
			"Capacité / MM": "1,25",
			"Longueur / CM": "18"
		}
	},
	"editorial": {
		"overview": "RODAC RC4005. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Capacité / MM : 1,25.",
			"Longueur / CM : 18.",
			"Masse / KG : 0,9."
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
			"label": "Capacité / MM",
			"value": "1,25",
			"evidenceIds": [
				"october5-tools-rodac-2024-p18"
			]
		},
		{
			"label": "Longueur / CM",
			"value": "18",
			"evidenceIds": [
				"october5-tools-rodac-2024-p18"
			]
		},
		{
			"label": "Masse / KG",
			"value": "0,9",
			"evidenceIds": [
				"october5-tools-rodac-2024-p18"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-rodac-2024-p18",
			"sourceUrl": "https://www.sam-outillage.fr/data/pages/fr-fr/doc/SAM-OUTILLAGE-CATALOGUE-RODAC-POWERFUL-DEALS-2024-FR.pdf#page=18",
			"sourceLabel": "RODAC par SAM Outillage, catalogue2024 français, page PDF 18",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 8a6c7604b757281f5b4455273785b873757c55367046204619308ae9f35da613. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-rodac-2024-p18"
		],
		"workingPressureBar": [
			"october5-tools-rodac-2024-p18"
		],
		"demandExplanation": [
			"october5-tools-rodac-2024-p18"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
