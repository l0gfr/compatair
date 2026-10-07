import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-ober-grey-black-8302574",
	"slug": "cle-a-chocs-ober-grey-black-8302574",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "OBER GREY BLACK (réf. 8302574)",
	"brand": "OBER",
	"model": "GREY BLACK",
	"mpn": "8302574",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-ober-grey-black-8302574.svg",
		"alt": "Repères techniques : OBER GREY BLACK (réf. 8302574)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-grey-black",
		"label": "Référence 8302574",
		"distinguishingAttributes": {
			"reference": "8302574",
			"VELOCITÀ A VUOTO (giri/min)": "3500",
			"COPPIA (Nm)": "2441"
		}
	},
	"editorial": {
		"overview": "OBER GREY BLACK (réf. 8302574). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"VELOCITÀ A VUOTO (giri/min) : 3500.",
			"COPPIA (Nm) : 2441.",
			"LUNGHEZZA (mm) : 300.",
			"ATTACCO ARIA : 1/2”GAS.",
			"PESO (Kg) : 9,6.",
			"TUBO min. (mm) : 13.",
			"ATTACCO QUADRO : 1”.",
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
			"value": "8302574",
			"evidenceIds": [
				"october5-tools-ober-industrial-p51"
			]
		},
		{
			"label": "VELOCITÀ A VUOTO (giri/min)",
			"value": "3500",
			"evidenceIds": [
				"october5-tools-ober-industrial-p51"
			]
		},
		{
			"label": "COPPIA (Nm)",
			"value": "2441",
			"evidenceIds": [
				"october5-tools-ober-industrial-p51"
			]
		},
		{
			"label": "LUNGHEZZA (mm)",
			"value": "300",
			"evidenceIds": [
				"october5-tools-ober-industrial-p51"
			]
		},
		{
			"label": "ATTACCO ARIA",
			"value": "1/2”GAS",
			"evidenceIds": [
				"october5-tools-ober-industrial-p51"
			]
		},
		{
			"label": "PESO (Kg)",
			"value": "9,6",
			"evidenceIds": [
				"october5-tools-ober-industrial-p51"
			]
		},
		{
			"label": "TUBO min. (mm)",
			"value": "13",
			"evidenceIds": [
				"october5-tools-ober-industrial-p51"
			]
		},
		{
			"label": "ATTACCO QUADRO",
			"value": "1”",
			"evidenceIds": [
				"october5-tools-ober-industrial-p51"
			]
		},
		{
			"label": "CONSUMO ARIA (Nl/ciclo)",
			"value": "-",
			"evidenceIds": [
				"october5-tools-ober-industrial-p51"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-ober-industrial-p51",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=51",
			"sourceLabel": "OBER : ober-industrial, page PDF 51",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-ober-industrial-p51"
		],
		"workingPressureBar": [
			"october5-tools-ober-industrial-p51"
		],
		"demandExplanation": [
			"october5-tools-ober-industrial-p51"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
