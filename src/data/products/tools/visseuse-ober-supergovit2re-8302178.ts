import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-ober-supergovit2re-8302178",
	"slug": "visseuse-ober-supergovit2re-8302178",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "OBER SUPERGOVIT2RE (réf. 8302178)",
	"brand": "OBER",
	"model": "SUPERGOVIT2RE",
	"mpn": "8302178",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-ober-supergovit2re-8302178.svg",
		"alt": "Repères techniques : OBER SUPERGOVIT2RE (réf. 8302178)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-supergovit2re",
		"label": "Référence 8302178",
		"distinguishingAttributes": {
			"reference": "8302178",
			"VELOCITÀ A VUOTO (giri/min)": "1700",
			"COPPIA (Nm)": "8"
		}
	},
	"editorial": {
		"overview": "OBER SUPERGOVIT2RE (réf. 8302178). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"VELOCITÀ A VUOTO (giri/min) : 1700.",
			"COPPIA (Nm) : 8.",
			"LUNGHEZZA (mm) : 227.",
			"CORPO : 44.",
			"ATTACCO ARIA : 1/4”GAS.",
			"PESO (Kg) : 1,3.",
			"TUBO min. (mm) : 8.",
			"CONSUMO ARIA (Nl/ciclo) : 750."
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
			"value": "8302178",
			"evidenceIds": [
				"october5-tools-ober-industrial-p37"
			]
		},
		{
			"label": "VELOCITÀ A VUOTO (giri/min)",
			"value": "1700",
			"evidenceIds": [
				"october5-tools-ober-industrial-p37"
			]
		},
		{
			"label": "COPPIA (Nm)",
			"value": "8",
			"evidenceIds": [
				"october5-tools-ober-industrial-p37"
			]
		},
		{
			"label": "LUNGHEZZA (mm)",
			"value": "227",
			"evidenceIds": [
				"october5-tools-ober-industrial-p37"
			]
		},
		{
			"label": "CORPO",
			"value": "44",
			"evidenceIds": [
				"october5-tools-ober-industrial-p37"
			]
		},
		{
			"label": "ATTACCO ARIA",
			"value": "1/4”GAS",
			"evidenceIds": [
				"october5-tools-ober-industrial-p37"
			]
		},
		{
			"label": "PESO (Kg)",
			"value": "1,3",
			"evidenceIds": [
				"october5-tools-ober-industrial-p37"
			]
		},
		{
			"label": "TUBO min. (mm)",
			"value": "8",
			"evidenceIds": [
				"october5-tools-ober-industrial-p37"
			]
		},
		{
			"label": "CONSUMO ARIA (Nl/ciclo)",
			"value": "750",
			"evidenceIds": [
				"october5-tools-ober-industrial-p37"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-ober-industrial-p37",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=37",
			"sourceLabel": "OBER : ober-industrial, page PDF 37",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-ober-industrial-p37"
		],
		"workingPressureBar": [
			"october5-tools-ober-industrial-p37"
		],
		"demandExplanation": [
			"october5-tools-ober-industrial-p37"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
