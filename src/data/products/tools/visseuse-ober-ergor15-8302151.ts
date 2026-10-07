import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-ober-ergor15-8302151",
	"slug": "visseuse-ober-ergor15-8302151",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "OBER ERGOR15 (réf. 8302151)",
	"brand": "OBER",
	"model": "ERGOR15",
	"mpn": "8302151",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-ober-ergor15-8302151.svg",
		"alt": "Repères techniques : OBER ERGOR15 (réf. 8302151)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-ergor15",
		"label": "Référence 8302151",
		"distinguishingAttributes": {
			"reference": "8302151",
			"VELOCITÀ A VUOTO (giri/min)": "2400",
			"COPPIA (Nm)": "2,5"
		}
	},
	"editorial": {
		"overview": "OBER ERGOR15 (réf. 8302151). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"VELOCITÀ A VUOTO (giri/min) : 2400.",
			"COPPIA (Nm) : 2,5.",
			"LUNGHEZZA (mm) : 162.",
			"CORPO : 38.",
			"ATTACCO ARIA : 1/4”GAS.",
			"PESO (Kg) : 1.",
			"TUBO min. (mm) : 8.",
			"CONSUMO ARIA (Nl/ciclo) : 640."
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
			"value": "8302151",
			"evidenceIds": [
				"october5-tools-ober-industrial-p39"
			]
		},
		{
			"label": "VELOCITÀ A VUOTO (giri/min)",
			"value": "2400",
			"evidenceIds": [
				"october5-tools-ober-industrial-p39"
			]
		},
		{
			"label": "COPPIA (Nm)",
			"value": "2,5",
			"evidenceIds": [
				"october5-tools-ober-industrial-p39"
			]
		},
		{
			"label": "LUNGHEZZA (mm)",
			"value": "162",
			"evidenceIds": [
				"october5-tools-ober-industrial-p39"
			]
		},
		{
			"label": "CORPO",
			"value": "38",
			"evidenceIds": [
				"october5-tools-ober-industrial-p39"
			]
		},
		{
			"label": "ATTACCO ARIA",
			"value": "1/4”GAS",
			"evidenceIds": [
				"october5-tools-ober-industrial-p39"
			]
		},
		{
			"label": "PESO (Kg)",
			"value": "1",
			"evidenceIds": [
				"october5-tools-ober-industrial-p39"
			]
		},
		{
			"label": "TUBO min. (mm)",
			"value": "8",
			"evidenceIds": [
				"october5-tools-ober-industrial-p39"
			]
		},
		{
			"label": "CONSUMO ARIA (Nl/ciclo)",
			"value": "640",
			"evidenceIds": [
				"october5-tools-ober-industrial-p39"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-ober-industrial-p39",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=39",
			"sourceLabel": "OBER : ober-industrial, page PDF 39",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-ober-industrial-p39"
		],
		"workingPressureBar": [
			"october5-tools-ober-industrial-p39"
		],
		"demandExplanation": [
			"october5-tools-ober-industrial-p39"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
