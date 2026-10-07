import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-ober-ervit33-8302063",
	"slug": "visseuse-ober-ervit33-8302063",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "OBER ERVIT33 (réf. 8302063)",
	"brand": "OBER",
	"model": "ERVIT33",
	"mpn": "8302063",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-ober-ervit33-8302063.svg",
		"alt": "Repères techniques : OBER ERVIT33 (réf. 8302063)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-ervit33",
		"label": "Référence 8302063",
		"distinguishingAttributes": {
			"reference": "8302063",
			"VELOCITÀ A VUOTO (giri/min)": "450",
			"COPPIA (Nm)": "6,5"
		}
	},
	"editorial": {
		"overview": "OBER ERVIT33 (réf. 8302063). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"VELOCITÀ A VUOTO (giri/min) : 450.",
			"COPPIA (Nm) : 6,5.",
			"LUNGHEZZA (mm) : 155.",
			"CORPO : 38.",
			"ATTACCO ARIA : 1/4”GAS.",
			"PESO (Kg) : 1,05.",
			"TUBO min. (mm) : 6.",
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
			"value": "8302063",
			"evidenceIds": [
				"october5-tools-ober-industrial-p26"
			]
		},
		{
			"label": "VELOCITÀ A VUOTO (giri/min)",
			"value": "450",
			"evidenceIds": [
				"october5-tools-ober-industrial-p26"
			]
		},
		{
			"label": "COPPIA (Nm)",
			"value": "6,5",
			"evidenceIds": [
				"october5-tools-ober-industrial-p26"
			]
		},
		{
			"label": "LUNGHEZZA (mm)",
			"value": "155",
			"evidenceIds": [
				"october5-tools-ober-industrial-p26"
			]
		},
		{
			"label": "CORPO",
			"value": "38",
			"evidenceIds": [
				"october5-tools-ober-industrial-p26"
			]
		},
		{
			"label": "ATTACCO ARIA",
			"value": "1/4”GAS",
			"evidenceIds": [
				"october5-tools-ober-industrial-p26"
			]
		},
		{
			"label": "PESO (Kg)",
			"value": "1,05",
			"evidenceIds": [
				"october5-tools-ober-industrial-p26"
			]
		},
		{
			"label": "TUBO min. (mm)",
			"value": "6",
			"evidenceIds": [
				"october5-tools-ober-industrial-p26"
			]
		},
		{
			"label": "CONSUMO ARIA (Nl/ciclo)",
			"value": "420",
			"evidenceIds": [
				"october5-tools-ober-industrial-p26"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-ober-industrial-p26",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=26",
			"sourceLabel": "OBER : ober-industrial, page PDF 26",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-ober-industrial-p26"
		],
		"workingPressureBar": [
			"october5-tools-ober-industrial-p26"
		],
		"demandExplanation": [
			"october5-tools-ober-industrial-p26"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
