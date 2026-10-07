import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-ober-sm0-8100502",
	"slug": "meuleuse-ober-sm0-8100502",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "OBER SM0 (réf. 8100502)",
	"brand": "OBER",
	"model": "SM0",
	"mpn": "8100502",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-ober-sm0-8100502.svg",
		"alt": "Repères techniques : OBER SM0 (réf. 8100502)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-sm0",
		"label": "Référence 8100502",
		"distinguishingAttributes": {
			"reference": "8100502",
			"LUNGHEZZA (mm)": "195",
			"CORPO": "26"
		}
	},
	"editorial": {
		"overview": "OBER SM0 (réf. 8100502). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"LUNGHEZZA (mm) : 195.",
			"CORPO : 26.",
			"PESO (Kg) : 0,31.",
			"ATTACCO ARIA : 1/4” GAS.",
			"TUBO min. (mm) : 6.",
			"CONSUMO ARIA (Nl/ciclo) : 200."
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
			"value": "8100502",
			"evidenceIds": [
				"october5-tools-ober-industrial-p157"
			]
		},
		{
			"label": "LUNGHEZZA (mm)",
			"value": "195",
			"evidenceIds": [
				"october5-tools-ober-industrial-p157"
			]
		},
		{
			"label": "CORPO",
			"value": "26",
			"evidenceIds": [
				"october5-tools-ober-industrial-p157"
			]
		},
		{
			"label": "PESO (Kg)",
			"value": "0,31",
			"evidenceIds": [
				"october5-tools-ober-industrial-p157"
			]
		},
		{
			"label": "ATTACCO ARIA",
			"value": "1/4” GAS",
			"evidenceIds": [
				"october5-tools-ober-industrial-p157"
			]
		},
		{
			"label": "TUBO min. (mm)",
			"value": "6",
			"evidenceIds": [
				"october5-tools-ober-industrial-p157"
			]
		},
		{
			"label": "CONSUMO ARIA (Nl/ciclo)",
			"value": "200",
			"evidenceIds": [
				"october5-tools-ober-industrial-p157"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-ober-industrial-p157",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=157",
			"sourceLabel": "OBER : ober-industrial, page PDF 157",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-ober-industrial-p157"
		],
		"workingPressureBar": [
			"october5-tools-ober-industrial-p157"
		],
		"demandExplanation": [
			"october5-tools-ober-industrial-p157"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
