import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-ober-ergon100v-8201089",
	"slug": "perceuse-ober-ergon100v-8201089",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "OBER ERGON100V (réf. 8201089)",
	"brand": "OBER",
	"model": "ERGON100V",
	"mpn": "8201089",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-ober-ergon100v-8201089.svg",
		"alt": "Repères techniques : OBER ERGON100V (réf. 8201089)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-ergon100v",
		"label": "Référence 8201089",
		"distinguishingAttributes": {
			"reference": "8201089",
			"VELOCITÀ A VUOTO (giri/min)": "2300",
			"LUNGHEZZA (mm)": "192"
		}
	},
	"editorial": {
		"overview": "OBER ERGON100V (réf. 8201089). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"VELOCITÀ A VUOTO (giri/min) : 2300.",
			"LUNGHEZZA (mm) : 192.",
			"CORPO : 38.",
			"PESO (Kg) : 1,14.",
			"ATTACCO ARIA : 1/4” GAS.",
			"CONSUMO ARIA (Nl/ciclo) : 650.",
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
			"value": "8201089",
			"evidenceIds": [
				"october5-tools-ober-industrial-p98"
			]
		},
		{
			"label": "VELOCITÀ A VUOTO (giri/min)",
			"value": "2300",
			"evidenceIds": [
				"october5-tools-ober-industrial-p98"
			]
		},
		{
			"label": "LUNGHEZZA (mm)",
			"value": "192",
			"evidenceIds": [
				"october5-tools-ober-industrial-p98"
			]
		},
		{
			"label": "CORPO",
			"value": "38",
			"evidenceIds": [
				"october5-tools-ober-industrial-p98"
			]
		},
		{
			"label": "PESO (Kg)",
			"value": "1,14",
			"evidenceIds": [
				"october5-tools-ober-industrial-p98"
			]
		},
		{
			"label": "ATTACCO ARIA",
			"value": "1/4” GAS",
			"evidenceIds": [
				"october5-tools-ober-industrial-p98"
			]
		},
		{
			"label": "CONSUMO ARIA (Nl/ciclo)",
			"value": "650",
			"evidenceIds": [
				"october5-tools-ober-industrial-p98"
			]
		},
		{
			"label": "TUBO min. (mm)",
			"value": "8",
			"evidenceIds": [
				"october5-tools-ober-industrial-p98"
			]
		},
		{
			"label": "ATTACCO MANDRINO",
			"value": "3/8”x24",
			"evidenceIds": [
				"october5-tools-ober-industrial-p98"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-ober-industrial-p98",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=98",
			"sourceLabel": "OBER : ober-industrial, page PDF 98",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-ober-industrial-p98"
		],
		"workingPressureBar": [
			"october5-tools-ober-industrial-p98"
		],
		"demandExplanation": [
			"october5-tools-ober-industrial-p98"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
