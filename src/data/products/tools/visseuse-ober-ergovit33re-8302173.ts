import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-ober-ergovit33re-8302173",
	"slug": "visseuse-ober-ergovit33re-8302173",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "OBER ERGOVIT33RE (réf. 8302173)",
	"brand": "OBER",
	"model": "ERGOVIT33RE",
	"mpn": "8302173",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-ober-ergovit33re-8302173.svg",
		"alt": "Repères techniques : OBER ERGOVIT33RE (réf. 8302173)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-ergovit33re",
		"label": "Référence 8302173",
		"distinguishingAttributes": {
			"reference": "8302173",
			"VELOCITÀ A VUOTO (giri/min)": "670",
			"COPPIA (Nm)": "8,8"
		}
	},
	"editorial": {
		"overview": "OBER ERGOVIT33RE (réf. 8302173). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"VELOCITÀ A VUOTO (giri/min) : 670.",
			"COPPIA (Nm) : 8,8.",
			"LUNGHEZZA (mm) : 223.",
			"CORPO : 38.",
			"ATTACCO ARIA : 1/4”GAS.",
			"PESO (Kg) : 1,3.",
			"TUBO min. (mm) : 8.",
			"CONSUMO ARIA (Nl/ciclo) : 680."
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
			"value": "8302173",
			"evidenceIds": [
				"october5-tools-ober-industrial-p36"
			]
		},
		{
			"label": "VELOCITÀ A VUOTO (giri/min)",
			"value": "670",
			"evidenceIds": [
				"october5-tools-ober-industrial-p36"
			]
		},
		{
			"label": "COPPIA (Nm)",
			"value": "8,8",
			"evidenceIds": [
				"october5-tools-ober-industrial-p36"
			]
		},
		{
			"label": "LUNGHEZZA (mm)",
			"value": "223",
			"evidenceIds": [
				"october5-tools-ober-industrial-p36"
			]
		},
		{
			"label": "CORPO",
			"value": "38",
			"evidenceIds": [
				"october5-tools-ober-industrial-p36"
			]
		},
		{
			"label": "ATTACCO ARIA",
			"value": "1/4”GAS",
			"evidenceIds": [
				"october5-tools-ober-industrial-p36"
			]
		},
		{
			"label": "PESO (Kg)",
			"value": "1,3",
			"evidenceIds": [
				"october5-tools-ober-industrial-p36"
			]
		},
		{
			"label": "TUBO min. (mm)",
			"value": "8",
			"evidenceIds": [
				"october5-tools-ober-industrial-p36"
			]
		},
		{
			"label": "CONSUMO ARIA (Nl/ciclo)",
			"value": "680",
			"evidenceIds": [
				"october5-tools-ober-industrial-p36"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-ober-industrial-p36",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=36",
			"sourceLabel": "OBER : ober-industrial, page PDF 36",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-ober-industrial-p36"
		],
		"workingPressureBar": [
			"october5-tools-ober-industrial-p36"
		],
		"demandExplanation": [
			"october5-tools-ober-industrial-p36"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
