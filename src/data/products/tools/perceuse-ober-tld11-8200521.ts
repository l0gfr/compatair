import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-ober-tld11-8200521",
	"slug": "perceuse-ober-tld11-8200521",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "OBER TLD11 (réf. 8200521)",
	"brand": "OBER",
	"model": "TLD11",
	"mpn": "8200521",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-ober-tld11-8200521.svg",
		"alt": "Repères techniques : OBER TLD11 (réf. 8200521)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-tld11",
		"label": "Référence 8200521",
		"distinguishingAttributes": {
			"reference": "8200521",
			"VELOCITÀ A VUOTO (giri/min)": "5200",
			"LUNGHEZZA (mm)": "212"
		}
	},
	"editorial": {
		"overview": "OBER TLD11 (réf. 8200521). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"VELOCITÀ A VUOTO (giri/min) : 5200.",
			"LUNGHEZZA (mm) : 212.",
			"CORPO : 31.",
			"PESO (Kg) : 0,5.",
			"ATTACCO ARIA : 1/4” GAS.",
			"CONSUMO ARIA (Nl/ciclo) : 190.",
			"TUBO min. (mm) : 6.",
			"ATTACCO MANDRINO : B10."
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
			"value": "8200521",
			"evidenceIds": [
				"october5-tools-ober-industrial-p90"
			]
		},
		{
			"label": "VELOCITÀ A VUOTO (giri/min)",
			"value": "5200",
			"evidenceIds": [
				"october5-tools-ober-industrial-p90"
			]
		},
		{
			"label": "LUNGHEZZA (mm)",
			"value": "212",
			"evidenceIds": [
				"october5-tools-ober-industrial-p90"
			]
		},
		{
			"label": "CORPO",
			"value": "31",
			"evidenceIds": [
				"october5-tools-ober-industrial-p90"
			]
		},
		{
			"label": "PESO (Kg)",
			"value": "0,5",
			"evidenceIds": [
				"october5-tools-ober-industrial-p90"
			]
		},
		{
			"label": "ATTACCO ARIA",
			"value": "1/4” GAS",
			"evidenceIds": [
				"october5-tools-ober-industrial-p90"
			]
		},
		{
			"label": "CONSUMO ARIA (Nl/ciclo)",
			"value": "190",
			"evidenceIds": [
				"october5-tools-ober-industrial-p90"
			]
		},
		{
			"label": "TUBO min. (mm)",
			"value": "6",
			"evidenceIds": [
				"october5-tools-ober-industrial-p90"
			]
		},
		{
			"label": "ATTACCO MANDRINO",
			"value": "B10",
			"evidenceIds": [
				"october5-tools-ober-industrial-p90"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-ober-industrial-p90",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=90",
			"sourceLabel": "OBER : ober-industrial, page PDF 90",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-ober-industrial-p90"
		],
		"workingPressureBar": [
			"october5-tools-ober-industrial-p90"
		],
		"demandExplanation": [
			"october5-tools-ober-industrial-p90"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
