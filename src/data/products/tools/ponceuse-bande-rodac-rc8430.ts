import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-bande-rodac-rc8430",
	"slug": "ponceuse-bande-rodac-rc8430",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "RODAC RC8430",
	"brand": "RODAC",
	"model": "RC8430",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-bande-rodac-rc8430.svg",
		"alt": "Repères techniques : RODAC RC8430",
		"sourceUrl": "https://www.sam-outillage.fr/data/pages/fr-fr/doc/SAM-OUTILLAGE-CATALOGUE-RODAC-POWERFUL-DEALS-2024-FR.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rodac-rc8430",
		"label": "Modèle RC8430, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "RC8430",
			"Vitesse / RPM": "18.000",
			"Plateau ou bande / MM": "10x328"
		}
	},
	"editorial": {
		"overview": "RODAC RC8430. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Vitesse / RPM : 18.000.",
			"Plateau ou bande / MM : 10x328.",
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
			"label": "Vitesse / RPM",
			"value": "18.000",
			"evidenceIds": [
				"october5-tools-rodac-2024-p22"
			]
		},
		{
			"label": "Plateau ou bande / MM",
			"value": "10x328",
			"evidenceIds": [
				"october5-tools-rodac-2024-p22"
			]
		},
		{
			"label": "Masse / KG",
			"value": "0,9",
			"evidenceIds": [
				"october5-tools-rodac-2024-p22"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-rodac-2024-p22",
			"sourceUrl": "https://www.sam-outillage.fr/data/pages/fr-fr/doc/SAM-OUTILLAGE-CATALOGUE-RODAC-POWERFUL-DEALS-2024-FR.pdf#page=22",
			"sourceLabel": "RODAC par SAM Outillage, catalogue2024 français, page PDF 22",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 8a6c7604b757281f5b4455273785b873757c55367046204619308ae9f35da613. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-rodac-2024-p22"
		],
		"workingPressureBar": [
			"october5-tools-rodac-2024-p22"
		],
		"demandExplanation": [
			"october5-tools-rodac-2024-p22"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
