import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-ober-sel102-8100519",
	"slug": "meuleuse-ober-sel102-8100519",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "OBER SEL102 (réf. 8100519)",
	"brand": "OBER",
	"model": "SEL102",
	"mpn": "8100519",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-ober-sel102-8100519.svg",
		"alt": "Repères techniques : OBER SEL102 (réf. 8100519)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-sel102",
		"label": "Référence 8100519",
		"distinguishingAttributes": {
			"reference": "8100519",
			"LUNGHEZZA (mm)": "157",
			"CORPO": "30"
		}
	},
	"editorial": {
		"overview": "OBER SEL102 (réf. 8100519). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"LUNGHEZZA (mm) : 157.",
			"CORPO : 30.",
			"PESO (Kg) : 0,25.",
			"ATTACCO ARIA : 1/4” GAS.",
			"TUBO min. (mm) : 6.",
			"CONSUMO ARIA (Nl/ciclo) : 220."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"Le tableau imprime « CONSUMO ARIA (Nl/ciclo) », y compris pour des outils rotatifs : cette cellule ambiguë n’est pas convertie en L/min et ne permet pas un verdict de débit.",
			"La pression de mesure n’est pas associée à la consommation de cette colonne. La disponibilité actuelle reste à confirmer.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "CODICE",
			"value": "8100519",
			"evidenceIds": [
				"october5-tools-ober-industrial-p158"
			]
		},
		{
			"label": "LUNGHEZZA (mm)",
			"value": "157",
			"evidenceIds": [
				"october5-tools-ober-industrial-p158"
			]
		},
		{
			"label": "CORPO",
			"value": "30",
			"evidenceIds": [
				"october5-tools-ober-industrial-p158"
			]
		},
		{
			"label": "PESO (Kg)",
			"value": "0,25",
			"evidenceIds": [
				"october5-tools-ober-industrial-p158"
			]
		},
		{
			"label": "ATTACCO ARIA",
			"value": "1/4” GAS",
			"evidenceIds": [
				"october5-tools-ober-industrial-p158"
			]
		},
		{
			"label": "TUBO min. (mm)",
			"value": "6",
			"evidenceIds": [
				"october5-tools-ober-industrial-p158"
			]
		},
		{
			"label": "CONSUMO ARIA (Nl/ciclo)",
			"value": "220",
			"evidenceIds": [
				"october5-tools-ober-industrial-p158"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-ober-industrial-p158",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=158",
			"sourceLabel": "OBER : ober-industrial, page PDF 158",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-ober-industrial-p158"
		],
		"workingPressureBar": [
			"october5-tools-ober-industrial-p158"
		],
		"demandExplanation": [
			"october5-tools-ober-industrial-p158"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
