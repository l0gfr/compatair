import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-ober-all-black-8302573",
	"slug": "cle-a-chocs-ober-all-black-8302573",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "OBER ALL BLACK (réf. 8302573)",
	"brand": "OBER",
	"model": "ALL BLACK",
	"mpn": "8302573",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-ober-all-black-8302573.svg",
		"alt": "Repères techniques : OBER ALL BLACK (réf. 8302573)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-all-black",
		"label": "Référence 8302573",
		"distinguishingAttributes": {
			"reference": "8302573",
			"VELOCITÀ A VUOTO (giri/min)": "9500",
			"COPPIA (Nm)": "680"
		}
	},
	"editorial": {
		"overview": "OBER ALL BLACK (réf. 8302573). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"VELOCITÀ A VUOTO (giri/min) : 9500.",
			"COPPIA (Nm) : 680.",
			"LUNGHEZZA (mm) : 122.",
			"ATTACCO ARIA : 1/4”GAS.",
			"PESO (Kg) : 1,6.",
			"TUBO min. (mm) : 10.",
			"ATTACCO QUADRO : 1/2”.",
			"CONSUMO ARIA (Nl/ciclo) : -."
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
			"value": "8302573",
			"evidenceIds": [
				"october5-tools-ober-industrial-p48"
			]
		},
		{
			"label": "VELOCITÀ A VUOTO (giri/min)",
			"value": "9500",
			"evidenceIds": [
				"october5-tools-ober-industrial-p48"
			]
		},
		{
			"label": "COPPIA (Nm)",
			"value": "680",
			"evidenceIds": [
				"october5-tools-ober-industrial-p48"
			]
		},
		{
			"label": "LUNGHEZZA (mm)",
			"value": "122",
			"evidenceIds": [
				"october5-tools-ober-industrial-p48"
			]
		},
		{
			"label": "ATTACCO ARIA",
			"value": "1/4”GAS",
			"evidenceIds": [
				"october5-tools-ober-industrial-p48"
			]
		},
		{
			"label": "PESO (Kg)",
			"value": "1,6",
			"evidenceIds": [
				"october5-tools-ober-industrial-p48"
			]
		},
		{
			"label": "TUBO min. (mm)",
			"value": "10",
			"evidenceIds": [
				"october5-tools-ober-industrial-p48"
			]
		},
		{
			"label": "ATTACCO QUADRO",
			"value": "1/2”",
			"evidenceIds": [
				"october5-tools-ober-industrial-p48"
			]
		},
		{
			"label": "CONSUMO ARIA (Nl/ciclo)",
			"value": "-",
			"evidenceIds": [
				"october5-tools-ober-industrial-p48"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-ober-industrial-p48",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=48",
			"sourceLabel": "OBER : ober-industrial, page PDF 48",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-ober-industrial-p48"
		],
		"workingPressureBar": [
			"october5-tools-ober-industrial-p48"
		],
		"demandExplanation": [
			"october5-tools-ober-industrial-p48"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
