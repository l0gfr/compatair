import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-rodac-rc293h",
	"slug": "burineur-rodac-rc293h",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "RODAC RC293H",
	"brand": "RODAC",
	"model": "RC293H",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-rodac-rc293h.svg",
		"alt": "Repères techniques : RODAC RC293H",
		"sourceUrl": "https://www.sam-outillage.fr/data/pages/fr-fr/doc/SAM-OUTILLAGE-CATALOGUE-RODAC-POWERFUL-DEALS-2024-FR.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rodac-rc293h",
		"label": "Modèle RC293H, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "RC293H",
			"Cadence / BPM": "3.200",
			"Masse / KG": "2,56"
		}
	},
	"editorial": {
		"overview": "RODAC RC293H. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Cadence / BPM : 3.200.",
			"Masse / KG : 2,56."
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
			"label": "Cadence / BPM",
			"value": "3.200",
			"evidenceIds": [
				"october5-tools-rodac-2024-p14"
			]
		},
		{
			"label": "Masse / KG",
			"value": "2,56",
			"evidenceIds": [
				"october5-tools-rodac-2024-p14"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-rodac-2024-p14",
			"sourceUrl": "https://www.sam-outillage.fr/data/pages/fr-fr/doc/SAM-OUTILLAGE-CATALOGUE-RODAC-POWERFUL-DEALS-2024-FR.pdf#page=14",
			"sourceLabel": "RODAC par SAM Outillage, catalogue2024 français, page PDF 14",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 8a6c7604b757281f5b4455273785b873757c55367046204619308ae9f35da613. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-rodac-2024-p14"
		],
		"workingPressureBar": [
			"october5-tools-rodac-2024-p14"
		],
		"demandExplanation": [
			"october5-tools-rodac-2024-p14"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
