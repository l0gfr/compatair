import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "taraudeuse-ober-ermas88-8306035",
	"slug": "taraudeuse-ober-ermas88-8306035",
	"categoryId": "taraudeuse",
	"category": "taraudeuse",
	"label": "OBER ERMAS88 (réf. 8306035)",
	"brand": "OBER",
	"model": "ERMAS88",
	"mpn": "8306035",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/taraudeuse-ober-ermas88-8306035.svg",
		"alt": "Repères techniques : OBER ERMAS88 (réf. 8306035)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-ermas88",
		"label": "Référence 8306035",
		"distinguishingAttributes": {
			"reference": "8306035",
			"VELOCITÀ A VUOTO (giri/min), a destra": "370",
			"VELOCITÀ A VUOTO (giri/min), a sinistra": "740"
		}
	},
	"editorial": {
		"overview": "OBER ERMAS88 (réf. 8306035). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"VELOCITÀ A VUOTO (giri/min), a destra : 370.",
			"VELOCITÀ A VUOTO (giri/min), a sinistra : 740.",
			"LUNGHEZZA (mm) : 225.",
			"CORPO : 38.",
			"PESO (Kg) : 1,4.",
			"ATTACCO ARIA : 1/4” GAS.",
			"TUBO min. (mm) : 8.",
			"CONSUMO ARIA (Nl/ciclo) : 450.",
			"ATTACCO MANDRINO : B10."
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
			"value": "8306035",
			"evidenceIds": [
				"october5-tools-ober-industrial-p132"
			]
		},
		{
			"label": "VELOCITÀ A VUOTO (giri/min), a destra",
			"value": "370",
			"evidenceIds": [
				"october5-tools-ober-industrial-p132"
			]
		},
		{
			"label": "VELOCITÀ A VUOTO (giri/min), a sinistra",
			"value": "740",
			"evidenceIds": [
				"october5-tools-ober-industrial-p132"
			]
		},
		{
			"label": "LUNGHEZZA (mm)",
			"value": "225",
			"evidenceIds": [
				"october5-tools-ober-industrial-p132"
			]
		},
		{
			"label": "CORPO",
			"value": "38",
			"evidenceIds": [
				"october5-tools-ober-industrial-p132"
			]
		},
		{
			"label": "PESO (Kg)",
			"value": "1,4",
			"evidenceIds": [
				"october5-tools-ober-industrial-p132"
			]
		},
		{
			"label": "ATTACCO ARIA",
			"value": "1/4” GAS",
			"evidenceIds": [
				"october5-tools-ober-industrial-p132"
			]
		},
		{
			"label": "TUBO min. (mm)",
			"value": "8",
			"evidenceIds": [
				"october5-tools-ober-industrial-p132"
			]
		},
		{
			"label": "CONSUMO ARIA (Nl/ciclo)",
			"value": "450",
			"evidenceIds": [
				"october5-tools-ober-industrial-p132"
			]
		},
		{
			"label": "ATTACCO MANDRINO",
			"value": "B10",
			"evidenceIds": [
				"october5-tools-ober-industrial-p132"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-ober-industrial-p132",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=132",
			"sourceLabel": "OBER : ober-industrial, page PDF 132",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-ober-industrial-p132"
		],
		"workingPressureBar": [
			"october5-tools-ober-industrial-p132"
		],
		"demandExplanation": [
			"october5-tools-ober-industrial-p132"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
