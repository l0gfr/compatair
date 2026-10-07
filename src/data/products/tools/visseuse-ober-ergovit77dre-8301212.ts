import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-ober-ergovit77dre-8301212",
	"slug": "visseuse-ober-ergovit77dre-8301212",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "OBER ERGOVIT77DRE (réf. 8301212)",
	"brand": "OBER",
	"model": "ERGOVIT77DRE",
	"mpn": "8301212",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-ober-ergovit77dre-8301212.svg",
		"alt": "Repères techniques : OBER ERGOVIT77DRE (réf. 8301212)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-ergovit77dre",
		"label": "Référence 8301212",
		"distinguishingAttributes": {
			"reference": "8301212",
			"VELOCITÀ A VUOTO (giri/min)": "310",
			"COPPIA (Nm)": "24"
		}
	},
	"editorial": {
		"overview": "OBER ERGOVIT77DRE (réf. 8301212). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"VELOCITÀ A VUOTO (giri/min) : 310.",
			"COPPIA (Nm) : 24.",
			"LUNGHEZZA (mm) : 299.",
			"CORPO : 38.",
			"ATTACCO ARIA : 1/4”GAS.",
			"PESO (Kg) : 1,25.",
			"TUBO min. (mm) : 8.",
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
			"value": "8301212",
			"evidenceIds": [
				"october5-tools-ober-industrial-p34"
			]
		},
		{
			"label": "VELOCITÀ A VUOTO (giri/min)",
			"value": "310",
			"evidenceIds": [
				"october5-tools-ober-industrial-p34"
			]
		},
		{
			"label": "COPPIA (Nm)",
			"value": "24",
			"evidenceIds": [
				"october5-tools-ober-industrial-p34"
			]
		},
		{
			"label": "LUNGHEZZA (mm)",
			"value": "299",
			"evidenceIds": [
				"october5-tools-ober-industrial-p34"
			]
		},
		{
			"label": "CORPO",
			"value": "38",
			"evidenceIds": [
				"october5-tools-ober-industrial-p34"
			]
		},
		{
			"label": "ATTACCO ARIA",
			"value": "1/4”GAS",
			"evidenceIds": [
				"october5-tools-ober-industrial-p34"
			]
		},
		{
			"label": "PESO (Kg)",
			"value": "1,25",
			"evidenceIds": [
				"october5-tools-ober-industrial-p34"
			]
		},
		{
			"label": "TUBO min. (mm)",
			"value": "8",
			"evidenceIds": [
				"october5-tools-ober-industrial-p34"
			]
		},
		{
			"label": "CONSUMO ARIA (Nl/ciclo)",
			"value": "430",
			"evidenceIds": [
				"october5-tools-ober-industrial-p34"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-ober-industrial-p34",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=34",
			"sourceLabel": "OBER : ober-industrial, page PDF 34",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-ober-industrial-p34"
		],
		"workingPressureBar": [
			"october5-tools-ober-industrial-p34"
		],
		"demandExplanation": [
			"october5-tools-ober-industrial-p34"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
