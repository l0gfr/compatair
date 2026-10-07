import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-ober-ergon911m-8201555",
	"slug": "perceuse-ober-ergon911m-8201555",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "OBER ERGON911M (réf. 8201555)",
	"brand": "OBER",
	"model": "ERGON911M",
	"mpn": "8201555",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-ober-ergon911m-8201555.svg",
		"alt": "Repères techniques : OBER ERGON911M (réf. 8201555)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-ergon911m",
		"label": "Référence 8201555",
		"distinguishingAttributes": {
			"reference": "8201555",
			"VELOCITÀ A VUOTO (giri/min)": "1000",
			"LUNGHEZZA X ALTEZZA (mm)": "262 x 117"
		}
	},
	"editorial": {
		"overview": "OBER ERGON911M (réf. 8201555). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"VELOCITÀ A VUOTO (giri/min) : 1000.",
			"LUNGHEZZA X ALTEZZA (mm) : 262 x 117.",
			"CORPO : 43.",
			"PESO (Kg) : 1,55.",
			"ATTACCO ARIA : 1/4” GAS.",
			"CONSUMO ARIA (Nl/ciclo) : 430.",
			"TUBO min. (mm) : 8.",
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
			"value": "8201555",
			"evidenceIds": [
				"october5-tools-ober-industrial-p108"
			]
		},
		{
			"label": "VELOCITÀ A VUOTO (giri/min)",
			"value": "1000",
			"evidenceIds": [
				"october5-tools-ober-industrial-p108"
			]
		},
		{
			"label": "LUNGHEZZA X ALTEZZA (mm)",
			"value": "262 x 117",
			"evidenceIds": [
				"october5-tools-ober-industrial-p108"
			]
		},
		{
			"label": "CORPO",
			"value": "43",
			"evidenceIds": [
				"october5-tools-ober-industrial-p108"
			]
		},
		{
			"label": "PESO (Kg)",
			"value": "1,55",
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
			"value": "430",
			"evidenceIds": [
				"october5-tools-ober-industrial-p108"
			]
		},
		{
			"label": "TUBO min. (mm)",
			"value": "8",
			"evidenceIds": [
				"october5-tools-ober-industrial-p108"
			]
		},
		{
			"label": "ATTACCO MANDRINO",
			"value": "3/8”x24",
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
