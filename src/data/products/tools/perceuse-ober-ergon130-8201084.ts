import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-ober-ergon130-8201084",
	"slug": "perceuse-ober-ergon130-8201084",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "OBER ERGON130 (réf. 8201084)",
	"brand": "OBER",
	"model": "ERGON130",
	"mpn": "8201084",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-ober-ergon130-8201084.svg",
		"alt": "Repères techniques : OBER ERGON130 (réf. 8201084)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-ergon130",
		"label": "Référence 8201084",
		"distinguishingAttributes": {
			"reference": "8201084",
			"VELOCITÀ A VUOTO (giri/min)": "580",
			"LUNGHEZZA (mm)": "246"
		}
	},
	"editorial": {
		"overview": "OBER ERGON130 (réf. 8201084). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"VELOCITÀ A VUOTO (giri/min) : 580.",
			"LUNGHEZZA (mm) : 246.",
			"CORPO : 40.",
			"PESO (Kg) : 1,45.",
			"ATTACCO ARIA : 1/4” GAS.",
			"CONSUMO ARIA (Nl/ciclo) : 650.",
			"TUBO min. (mm) : 8.",
			"ATTACCO MANDRINO : 1/2”x20."
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
			"value": "8201084",
			"evidenceIds": [
				"october5-tools-ober-industrial-p100"
			]
		},
		{
			"label": "VELOCITÀ A VUOTO (giri/min)",
			"value": "580",
			"evidenceIds": [
				"october5-tools-ober-industrial-p100"
			]
		},
		{
			"label": "LUNGHEZZA (mm)",
			"value": "246",
			"evidenceIds": [
				"october5-tools-ober-industrial-p100"
			]
		},
		{
			"label": "CORPO",
			"value": "40",
			"evidenceIds": [
				"october5-tools-ober-industrial-p100"
			]
		},
		{
			"label": "PESO (Kg)",
			"value": "1,45",
			"evidenceIds": [
				"october5-tools-ober-industrial-p100"
			]
		},
		{
			"label": "ATTACCO ARIA",
			"value": "1/4” GAS",
			"evidenceIds": [
				"october5-tools-ober-industrial-p100"
			]
		},
		{
			"label": "CONSUMO ARIA (Nl/ciclo)",
			"value": "650",
			"evidenceIds": [
				"october5-tools-ober-industrial-p100"
			]
		},
		{
			"label": "TUBO min. (mm)",
			"value": "8",
			"evidenceIds": [
				"october5-tools-ober-industrial-p100"
			]
		},
		{
			"label": "ATTACCO MANDRINO",
			"value": "1/2”x20",
			"evidenceIds": [
				"october5-tools-ober-industrial-p100"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-ober-industrial-p100",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=100",
			"sourceLabel": "OBER : ober-industrial, page PDF 100",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-ober-industrial-p100"
		],
		"workingPressureBar": [
			"october5-tools-ober-industrial-p100"
		],
		"demandExplanation": [
			"october5-tools-ober-industrial-p100"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
