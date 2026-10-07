import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "scie-ober-satt300-8401003",
	"slug": "scie-ober-satt300-8401003",
	"categoryId": "scie",
	"category": "scie",
	"label": "OBER SATT300 (réf. 8401003)",
	"brand": "OBER",
	"model": "SATT300",
	"mpn": "8401003",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/scie-ober-satt300-8401003.svg",
		"alt": "Repères techniques : OBER SATT300 (réf. 8401003)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-satt300",
		"label": "Référence 8401003",
		"distinguishingAttributes": {
			"reference": "8401003",
			"LUNGHEZZA (mm)": "282",
			"CORPO": "39"
		}
	},
	"editorial": {
		"overview": "OBER SATT300 (réf. 8401003). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"LUNGHEZZA (mm) : 282.",
			"CORPO : 39.",
			"PESO (Kg) : 0,5.",
			"ATTACCO ARIA : 1/4” GAS.",
			"TUBO ∅ min. (mm) : 6.",
			"CONSUMO ARIA (Nl/ciclo) : 250."
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
			"value": "8401003",
			"evidenceIds": [
				"october5-tools-ober-industrial-p188"
			]
		},
		{
			"label": "LUNGHEZZA (mm)",
			"value": "282",
			"evidenceIds": [
				"october5-tools-ober-industrial-p188"
			]
		},
		{
			"label": "CORPO",
			"value": "39",
			"evidenceIds": [
				"october5-tools-ober-industrial-p188"
			]
		},
		{
			"label": "PESO (Kg)",
			"value": "0,5",
			"evidenceIds": [
				"october5-tools-ober-industrial-p188"
			]
		},
		{
			"label": "ATTACCO ARIA",
			"value": "1/4” GAS",
			"evidenceIds": [
				"october5-tools-ober-industrial-p188"
			]
		},
		{
			"label": "TUBO ∅ min. (mm)",
			"value": "6",
			"evidenceIds": [
				"october5-tools-ober-industrial-p188"
			]
		},
		{
			"label": "CONSUMO ARIA (Nl/ciclo)",
			"value": "250",
			"evidenceIds": [
				"october5-tools-ober-industrial-p188"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-ober-industrial-p188",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=188",
			"sourceLabel": "OBER : ober-industrial, page PDF 188",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-ober-industrial-p188"
		],
		"workingPressureBar": [
			"october5-tools-ober-industrial-p188"
		],
		"demandExplanation": [
			"october5-tools-ober-industrial-p188"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
