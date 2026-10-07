import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-ober-erg988m-8201542",
	"slug": "perceuse-ober-erg988m-8201542",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "OBER ERG988M (réf. 8201542)",
	"brand": "OBER",
	"model": "ERG988M",
	"mpn": "8201542",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-ober-erg988m-8201542.svg",
		"alt": "Repères techniques : OBER ERG988M (réf. 8201542)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-erg988m",
		"label": "Référence 8201542",
		"distinguishingAttributes": {
			"reference": "8201542",
			"VELOCITÀ A VUOTO (giri/min)": "660",
			"LUNGHEZZA X ALTEZZA (mm)": "227 x 124"
		}
	},
	"editorial": {
		"overview": "OBER ERG988M (réf. 8201542). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"VELOCITÀ A VUOTO (giri/min) : 660.",
			"LUNGHEZZA X ALTEZZA (mm) : 227 x 124.",
			"CORPO : 41.",
			"PESO (Kg) : 1,25.",
			"ATTACCO ARIA : 1/4” GAS.",
			"CONSUMO ARIA (Nl/ciclo) : 260.",
			"TUBO min. (mm) : 6.",
			"ATTACCO MANDRINO : B12."
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
			"value": "8201542",
			"evidenceIds": [
				"october5-tools-ober-industrial-p108"
			]
		},
		{
			"label": "VELOCITÀ A VUOTO (giri/min)",
			"value": "660",
			"evidenceIds": [
				"october5-tools-ober-industrial-p108"
			]
		},
		{
			"label": "LUNGHEZZA X ALTEZZA (mm)",
			"value": "227 x 124",
			"evidenceIds": [
				"october5-tools-ober-industrial-p108"
			]
		},
		{
			"label": "CORPO",
			"value": "41",
			"evidenceIds": [
				"october5-tools-ober-industrial-p108"
			]
		},
		{
			"label": "PESO (Kg)",
			"value": "1,25",
			"evidenceIds": [
				"october5-tools-ober-industrial-p108"
			]
		},
		{
			"label": "ATTACCO ARIA",
			"value": "1/4” GAS",
			"evidenceIds": [
				"october5-tools-ober-industrial-p108"
			]
		},
		{
			"label": "CONSUMO ARIA (Nl/ciclo)",
			"value": "260",
			"evidenceIds": [
				"october5-tools-ober-industrial-p108"
			]
		},
		{
			"label": "TUBO min. (mm)",
			"value": "6",
			"evidenceIds": [
				"october5-tools-ober-industrial-p108"
			]
		},
		{
			"label": "ATTACCO MANDRINO",
			"value": "B12",
			"evidenceIds": [
				"october5-tools-ober-industrial-p108"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-ober-industrial-p108",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=108",
			"sourceLabel": "OBER : ober-industrial, page PDF 108",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-ober-industrial-p108"
		],
		"workingPressureBar": [
			"october5-tools-ober-industrial-p108"
		],
		"demandExplanation": [
			"october5-tools-ober-industrial-p108"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
