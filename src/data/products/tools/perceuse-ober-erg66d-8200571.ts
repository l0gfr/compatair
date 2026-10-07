import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-ober-erg66d-8200571",
	"slug": "perceuse-ober-erg66d-8200571",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "OBER ERG66D (réf. 8200571)",
	"brand": "OBER",
	"model": "ERG66D",
	"mpn": "8200571",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-ober-erg66d-8200571.svg",
		"alt": "Repères techniques : OBER ERG66D (réf. 8200571)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-erg66d",
		"label": "Référence 8200571",
		"distinguishingAttributes": {
			"reference": "8200571",
			"VELOCITÀ A VUOTO (giri/min)": "2550",
			"LUNGHEZZA (mm)": "230"
		}
	},
	"editorial": {
		"overview": "OBER ERG66D (réf. 8200571). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"VELOCITÀ A VUOTO (giri/min) : 2550.",
			"LUNGHEZZA (mm) : 230.",
			"CORPO : 41.",
			"PESO (Kg) : 1.",
			"ATTACCO ARIA : 1/4” GAS.",
			"CONSUMO ARIA (Nl/ciclo) : 260.",
			"TUBO min. (mm) : 6.",
			"ATTACCO MANDRINO : 3/8”x24."
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
			"value": "8200571",
			"evidenceIds": [
				"october5-tools-ober-industrial-p91"
			]
		},
		{
			"label": "VELOCITÀ A VUOTO (giri/min)",
			"value": "2550",
			"evidenceIds": [
				"october5-tools-ober-industrial-p91"
			]
		},
		{
			"label": "LUNGHEZZA (mm)",
			"value": "230",
			"evidenceIds": [
				"october5-tools-ober-industrial-p91"
			]
		},
		{
			"label": "CORPO",
			"value": "41",
			"evidenceIds": [
				"october5-tools-ober-industrial-p91"
			]
		},
		{
			"label": "PESO (Kg)",
			"value": "1",
			"evidenceIds": [
				"october5-tools-ober-industrial-p91"
			]
		},
		{
			"label": "ATTACCO ARIA",
			"value": "1/4” GAS",
			"evidenceIds": [
				"october5-tools-ober-industrial-p91"
			]
		},
		{
			"label": "CONSUMO ARIA (Nl/ciclo)",
			"value": "260",
			"evidenceIds": [
				"october5-tools-ober-industrial-p91"
			]
		},
		{
			"label": "TUBO min. (mm)",
			"value": "6",
			"evidenceIds": [
				"october5-tools-ober-industrial-p91"
			]
		},
		{
			"label": "ATTACCO MANDRINO",
			"value": "3/8”x24",
			"evidenceIds": [
				"october5-tools-ober-industrial-p91"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-ober-industrial-p91",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=91",
			"sourceLabel": "OBER : ober-industrial, page PDF 91",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-ober-industrial-p91"
		],
		"workingPressureBar": [
			"october5-tools-ober-industrial-p91"
		],
		"demandExplanation": [
			"october5-tools-ober-industrial-p91"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
