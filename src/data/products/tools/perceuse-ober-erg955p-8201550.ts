import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-ober-erg955p-8201550",
	"slug": "perceuse-ober-erg955p-8201550",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "OBER ERG955P (réf. 8201550)",
	"brand": "OBER",
	"model": "ERG955P",
	"mpn": "8201550",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-ober-erg955p-8201550.svg",
		"alt": "Repères techniques : OBER ERG955P (réf. 8201550)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-erg955p",
		"label": "Référence 8201550",
		"distinguishingAttributes": {
			"reference": "8201550",
			"VELOCITÀ A VUOTO (giri/min)": "2600",
			"LUNGHEZZA X ALTEZZA (mm)": "202 x 74"
		}
	},
	"editorial": {
		"overview": "OBER ERG955P (réf. 8201550). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"VELOCITÀ A VUOTO (giri/min) : 2600.",
			"LUNGHEZZA X ALTEZZA (mm) : 202 x 74.",
			"CORPO : 41.",
			"PESO (Kg) : 0,99.",
			"ATTACCO ARIA : 1/4” GAS.",
			"CONSUMO ARIA (Nl/ciclo) : 260.",
			"TUBO min. (mm) : 6."
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
			"value": "8201550",
			"evidenceIds": [
				"october5-tools-ober-industrial-p107"
			]
		},
		{
			"label": "VELOCITÀ A VUOTO (giri/min)",
			"value": "2600",
			"evidenceIds": [
				"october5-tools-ober-industrial-p107"
			]
		},
		{
			"label": "LUNGHEZZA X ALTEZZA (mm)",
			"value": "202 x 74",
			"evidenceIds": [
				"october5-tools-ober-industrial-p107"
			]
		},
		{
			"label": "CORPO",
			"value": "41",
			"evidenceIds": [
				"october5-tools-ober-industrial-p107"
			]
		},
		{
			"label": "PESO (Kg)",
			"value": "0,99",
			"evidenceIds": [
				"october5-tools-ober-industrial-p107"
			]
		},
		{
			"label": "ATTACCO ARIA",
			"value": "1/4” GAS",
			"evidenceIds": [
				"october5-tools-ober-industrial-p107"
			]
		},
		{
			"label": "CONSUMO ARIA (Nl/ciclo)",
			"value": "260",
			"evidenceIds": [
				"october5-tools-ober-industrial-p107"
			]
		},
		{
			"label": "TUBO min. (mm)",
			"value": "6",
			"evidenceIds": [
				"october5-tools-ober-industrial-p107"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-ober-industrial-p107",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=107",
			"sourceLabel": "OBER : ober-industrial, page PDF 107",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-ober-industrial-p107"
		],
		"workingPressureBar": [
			"october5-tools-ober-industrial-p107"
		],
		"demandExplanation": [
			"october5-tools-ober-industrial-p107"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
