import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-ober-mac2da-8501103",
	"slug": "burineur-ober-mac2da-8501103",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "OBER MAC2DA (réf. 8501103)",
	"brand": "OBER",
	"model": "MAC2DA",
	"mpn": "8501103",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-ober-mac2da-8501103.svg",
		"alt": "Repères techniques : OBER MAC2DA (réf. 8501103)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-mac2da",
		"label": "Référence 8501103",
		"distinguishingAttributes": {
			"reference": "8501103",
			"ATTACCO UTENSILE (ESAGONALE)(mm)": "9",
			"LUNGHEZZA (mm)": "302"
		}
	},
	"editorial": {
		"overview": "OBER MAC2DA (réf. 8501103). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"ATTACCO UTENSILE (ESAGONALE)(mm) : 9.",
			"LUNGHEZZA (mm) : 302.",
			"CORPO : 38.",
			"PESO (Kg) : 1,5.",
			"ATTACCO ARIA : 1/4” GAS.",
			"TUBO ∅ min. (mm) : 6.",
			"CONSUMO ARIA (Nl/ciclo) : 240."
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
			"value": "8501103",
			"evidenceIds": [
				"october5-tools-ober-industrial-p184"
			]
		},
		{
			"label": "ATTACCO UTENSILE (ESAGONALE)(mm)",
			"value": "9",
			"evidenceIds": [
				"october5-tools-ober-industrial-p184"
			]
		},
		{
			"label": "LUNGHEZZA (mm)",
			"value": "302",
			"evidenceIds": [
				"october5-tools-ober-industrial-p184"
			]
		},
		{
			"label": "CORPO",
			"value": "38",
			"evidenceIds": [
				"october5-tools-ober-industrial-p184"
			]
		},
		{
			"label": "PESO (Kg)",
			"value": "1,5",
			"evidenceIds": [
				"october5-tools-ober-industrial-p184"
			]
		},
		{
			"label": "ATTACCO ARIA",
			"value": "1/4” GAS",
			"evidenceIds": [
				"october5-tools-ober-industrial-p184"
			]
		},
		{
			"label": "TUBO ∅ min. (mm)",
			"value": "6",
			"evidenceIds": [
				"october5-tools-ober-industrial-p184"
			]
		},
		{
			"label": "CONSUMO ARIA (Nl/ciclo)",
			"value": "240",
			"evidenceIds": [
				"october5-tools-ober-industrial-p184"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-ober-industrial-p184",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=184",
			"sourceLabel": "OBER : ober-industrial, page PDF 184",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-ober-industrial-p184"
		],
		"workingPressureBar": [
			"october5-tools-ober-industrial-p184"
		],
		"demandExplanation": [
			"october5-tools-ober-industrial-p184"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
