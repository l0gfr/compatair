import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-ober-snap25-99-8102504",
	"slug": "meuleuse-ober-snap25-99-8102504",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "OBER SNAP25/99 (réf. 8102504)",
	"brand": "OBER",
	"model": "SNAP25/99",
	"mpn": "8102504",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-ober-snap25-99-8102504.svg",
		"alt": "Repères techniques : OBER SNAP25/99 (réf. 8102504)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-snap25-99",
		"label": "Référence 8102504",
		"distinguishingAttributes": {
			"reference": "8102504",
			"VELOCITÀ PERIFERICA DEL NASTRO A VUOTO (giri/min)": "1100",
			"LUNGHEZZA TOT (mm)": "390"
		}
	},
	"editorial": {
		"overview": "OBER SNAP25/99 (réf. 8102504). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"VELOCITÀ PERIFERICA DEL NASTRO A VUOTO (giri/min) : 1100.",
			"LUNGHEZZA TOT (mm) : 390.",
			"LUNGHEZZA UTILE (mm) : 40.",
			"PESO (Kg) : 2,4.",
			"ATTACCO ARIA : 3/8” GAS.",
			"TUBO ∅ min. (mm) : 10.",
			"CONSUMO ARIA (Nl/ciclo) : 700."
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
			"value": "8102504",
			"evidenceIds": [
				"october5-tools-ober-industrial-p169"
			]
		},
		{
			"label": "VELOCITÀ PERIFERICA DEL NASTRO A VUOTO (giri/min)",
			"value": "1100",
			"evidenceIds": [
				"october5-tools-ober-industrial-p169"
			]
		},
		{
			"label": "LUNGHEZZA TOT (mm)",
			"value": "390",
			"evidenceIds": [
				"october5-tools-ober-industrial-p169"
			]
		},
		{
			"label": "LUNGHEZZA UTILE (mm)",
			"value": "40",
			"evidenceIds": [
				"october5-tools-ober-industrial-p169"
			]
		},
		{
			"label": "PESO (Kg)",
			"value": "2,4",
			"evidenceIds": [
				"october5-tools-ober-industrial-p169"
			]
		},
		{
			"label": "ATTACCO ARIA",
			"value": "3/8” GAS",
			"evidenceIds": [
				"october5-tools-ober-industrial-p169"
			]
		},
		{
			"label": "TUBO ∅ min. (mm)",
			"value": "10",
			"evidenceIds": [
				"october5-tools-ober-industrial-p169"
			]
		},
		{
			"label": "CONSUMO ARIA (Nl/ciclo)",
			"value": "700",
			"evidenceIds": [
				"october5-tools-ober-industrial-p169"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-ober-industrial-p169",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=169",
			"sourceLabel": "OBER : ober-industrial, page PDF 169",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-ober-industrial-p169"
		],
		"workingPressureBar": [
			"october5-tools-ober-industrial-p169"
		],
		"demandExplanation": [
			"october5-tools-ober-industrial-p169"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
