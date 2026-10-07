import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-ober-ergocri307-8305047",
	"slug": "visseuse-ober-ergocri307-8305047",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "OBER ERGOCRI307 (réf. 8305047)",
	"brand": "OBER",
	"model": "ERGOCRI307",
	"mpn": "8305047",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-ober-ergocri307-8305047.svg",
		"alt": "Repères techniques : OBER ERGOCRI307 (réf. 8305047)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-ergocri307",
		"label": "Référence 8305047",
		"distinguishingAttributes": {
			"reference": "8305047",
			"VELOCITÀ A VUOTO (giri/min)": "150",
			"COPPIA (Nm)": "15"
		}
	},
	"editorial": {
		"overview": "OBER ERGOCRI307 (réf. 8305047). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"VELOCITÀ A VUOTO (giri/min) : 150.",
			"COPPIA (Nm) : 15.",
			"LUNGHEZZA (mm) : 340.",
			"CORPO : 43.",
			"ATTACCO ARIA : 1/4”GAS.",
			"PESO (Kg) : 1,45.",
			"TUBO min. (mm) : 8.",
			"ATTACCO ESAGONALE : 7.",
			"CONSUMO ARIA (Nl/ciclo) : 430."
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
			"value": "8305047",
			"evidenceIds": [
				"october5-tools-ober-industrial-p44"
			]
		},
		{
			"label": "VELOCITÀ A VUOTO (giri/min)",
			"value": "150",
			"evidenceIds": [
				"october5-tools-ober-industrial-p44"
			]
		},
		{
			"label": "COPPIA (Nm)",
			"value": "15",
			"evidenceIds": [
				"october5-tools-ober-industrial-p44"
			]
		},
		{
			"label": "LUNGHEZZA (mm)",
			"value": "340",
			"evidenceIds": [
				"october5-tools-ober-industrial-p44"
			]
		},
		{
			"label": "CORPO",
			"value": "43",
			"evidenceIds": [
				"october5-tools-ober-industrial-p44"
			]
		},
		{
			"label": "ATTACCO ARIA",
			"value": "1/4”GAS",
			"evidenceIds": [
				"october5-tools-ober-industrial-p44"
			]
		},
		{
			"label": "PESO (Kg)",
			"value": "1,45",
			"evidenceIds": [
				"october5-tools-ober-industrial-p44"
			]
		},
		{
			"label": "TUBO min. (mm)",
			"value": "8",
			"evidenceIds": [
				"october5-tools-ober-industrial-p44"
			]
		},
		{
			"label": "ATTACCO ESAGONALE",
			"value": "7",
			"evidenceIds": [
				"october5-tools-ober-industrial-p44"
			]
		},
		{
			"label": "CONSUMO ARIA (Nl/ciclo)",
			"value": "430",
			"evidenceIds": [
				"october5-tools-ober-industrial-p44"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-ober-industrial-p44",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=44",
			"sourceLabel": "OBER : ober-industrial, page PDF 44",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-ober-industrial-p44"
		],
		"workingPressureBar": [
			"october5-tools-ober-industrial-p44"
		],
		"demandExplanation": [
			"october5-tools-ober-industrial-p44"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
