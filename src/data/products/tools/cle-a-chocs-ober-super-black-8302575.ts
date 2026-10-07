import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-ober-super-black-8302575",
	"slug": "cle-a-chocs-ober-super-black-8302575",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "OBER SUPER BLACK (réf. 8302575)",
	"brand": "OBER",
	"model": "SUPER BLACK",
	"mpn": "8302575",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-ober-super-black-8302575.svg",
		"alt": "Repères techniques : OBER SUPER BLACK (réf. 8302575)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-super-black",
		"label": "Référence 8302575",
		"distinguishingAttributes": {
			"reference": "8302575",
			"VELOCITÀ A VUOTO (giri/min)": "6000",
			"COPPIA (Nm)": "1492"
		}
	},
	"editorial": {
		"overview": "OBER SUPER BLACK (réf. 8302575). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"VELOCITÀ A VUOTO (giri/min) : 6000.",
			"COPPIA (Nm) : 1492.",
			"LUNGHEZZA (mm) : 207.",
			"ATTACCO ARIA : 1/4”GAS.",
			"PESO (Kg) : 4,20.",
			"TUBO min. (mm) : 12.",
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
			"value": "8302575",
			"evidenceIds": [
				"october5-tools-ober-industrial-p50"
			]
		},
		{
			"label": "VELOCITÀ A VUOTO (giri/min)",
			"value": "6000",
			"evidenceIds": [
				"october5-tools-ober-industrial-p50"
			]
		},
		{
			"label": "COPPIA (Nm)",
			"value": "1492",
			"evidenceIds": [
				"october5-tools-ober-industrial-p50"
			]
		},
		{
			"label": "LUNGHEZZA (mm)",
			"value": "207",
			"evidenceIds": [
				"october5-tools-ober-industrial-p50"
			]
		},
		{
			"label": "ATTACCO ARIA",
			"value": "1/4”GAS",
			"evidenceIds": [
				"october5-tools-ober-industrial-p50"
			]
		},
		{
			"label": "PESO (Kg)",
			"value": "4,20",
			"evidenceIds": [
				"october5-tools-ober-industrial-p50"
			]
		},
		{
			"label": "TUBO min. (mm)",
			"value": "12",
			"evidenceIds": [
				"october5-tools-ober-industrial-p50"
			]
		},
		{
			"label": "CONSUMO ARIA (Nl/ciclo)",
			"value": "-",
			"evidenceIds": [
				"october5-tools-ober-industrial-p50"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-ober-industrial-p50",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=50",
			"sourceLabel": "OBER : ober-industrial, page PDF 50",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-ober-industrial-p50"
		],
		"workingPressureBar": [
			"october5-tools-ober-industrial-p50"
		],
		"demandExplanation": [
			"october5-tools-ober-industrial-p50"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
