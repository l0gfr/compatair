import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-ober-ervit22sa-8302271",
	"slug": "visseuse-ober-ervit22sa-8302271",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "OBER ERVIT22SA (réf. 8302271)",
	"brand": "OBER",
	"model": "ERVIT22SA",
	"mpn": "8302271",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-ober-ervit22sa-8302271.svg",
		"alt": "Repères techniques : OBER ERVIT22SA (réf. 8302271)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-ervit22sa",
		"label": "Référence 8302271",
		"distinguishingAttributes": {
			"reference": "8302271",
			"VELOCITÀ A VUOTO (giri/min)": "1100",
			"COPPIA (Nm)": "3,6"
		}
	},
	"editorial": {
		"overview": "OBER ERVIT22SA (réf. 8302271). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"VELOCITÀ A VUOTO (giri/min) : 1100.",
			"COPPIA (Nm) : 3,6.",
			"LUNGHEZZA (mm) : 143.",
			"CORPO : 38.",
			"ATTACCO ARIA : 1/4”GAS.",
			"PESO (Kg) : 0,85.",
			"TUBO min. (mm) : 8.",
			"CONSUMO ARIA (Nl/ciclo) : 420."
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
			"value": "8302271",
			"evidenceIds": [
				"october5-tools-ober-industrial-p41"
			]
		},
		{
			"label": "VELOCITÀ A VUOTO (giri/min)",
			"value": "1100",
			"evidenceIds": [
				"october5-tools-ober-industrial-p41"
			]
		},
		{
			"label": "COPPIA (Nm)",
			"value": "3,6",
			"evidenceIds": [
				"october5-tools-ober-industrial-p41"
			]
		},
		{
			"label": "LUNGHEZZA (mm)",
			"value": "143",
			"evidenceIds": [
				"october5-tools-ober-industrial-p41"
			]
		},
		{
			"label": "CORPO",
			"value": "38",
			"evidenceIds": [
				"october5-tools-ober-industrial-p41"
			]
		},
		{
			"label": "ATTACCO ARIA",
			"value": "1/4”GAS",
			"evidenceIds": [
				"october5-tools-ober-industrial-p41"
			]
		},
		{
			"label": "PESO (Kg)",
			"value": "0,85",
			"evidenceIds": [
				"october5-tools-ober-industrial-p41"
			]
		},
		{
			"label": "TUBO min. (mm)",
			"value": "8",
			"evidenceIds": [
				"october5-tools-ober-industrial-p41"
			]
		},
		{
			"label": "CONSUMO ARIA (Nl/ciclo)",
			"value": "420",
			"evidenceIds": [
				"october5-tools-ober-industrial-p41"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-ober-industrial-p41",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=41",
			"sourceLabel": "OBER : ober-industrial, page PDF 41",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-ober-industrial-p41"
		],
		"workingPressureBar": [
			"october5-tools-ober-industrial-p41"
		],
		"demandExplanation": [
			"october5-tools-ober-industrial-p41"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
