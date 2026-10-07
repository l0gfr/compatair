import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-ober-sm08-8100518",
	"slug": "meuleuse-ober-sm08-8100518",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "OBER SM08 (réf. 8100518)",
	"brand": "OBER",
	"model": "SM08",
	"mpn": "8100518",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-ober-sm08-8100518.svg",
		"alt": "Repères techniques : OBER SM08 (réf. 8100518)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-sm08",
		"label": "Référence 8100518",
		"distinguishingAttributes": {
			"reference": "8100518",
			"LUNGHEZZA (mm)": "187",
			"CORPO": "32"
		}
	},
	"editorial": {
		"overview": "OBER SM08 (réf. 8100518). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"LUNGHEZZA (mm) : 187.",
			"CORPO : 32.",
			"PESO (Kg) : 0,29.",
			"ATTACCO ARIA : 1/4” GAS.",
			"TUBO min. (mm) : 6.",
			"CONSUMO ARIA (Nl/ciclo) : 220."
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
			"value": "8100518",
			"evidenceIds": [
				"october5-tools-ober-industrial-p159"
			]
		},
		{
			"label": "LUNGHEZZA (mm)",
			"value": "187",
			"evidenceIds": [
				"october5-tools-ober-industrial-p159"
			]
		},
		{
			"label": "CORPO",
			"value": "32",
			"evidenceIds": [
				"october5-tools-ober-industrial-p159"
			]
		},
		{
			"label": "PESO (Kg)",
			"value": "0,29",
			"evidenceIds": [
				"october5-tools-ober-industrial-p159"
			]
		},
		{
			"label": "ATTACCO ARIA",
			"value": "1/4” GAS",
			"evidenceIds": [
				"october5-tools-ober-industrial-p159"
			]
		},
		{
			"label": "TUBO min. (mm)",
			"value": "6",
			"evidenceIds": [
				"october5-tools-ober-industrial-p159"
			]
		},
		{
			"label": "CONSUMO ARIA (Nl/ciclo)",
			"value": "220",
			"evidenceIds": [
				"october5-tools-ober-industrial-p159"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-ober-industrial-p159",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=159",
			"sourceLabel": "OBER : ober-industrial, page PDF 159",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-ober-industrial-p159"
		],
		"workingPressureBar": [
			"october5-tools-ober-industrial-p159"
		],
		"demandExplanation": [
			"october5-tools-ober-industrial-p159"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
