import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-ober-supergon13v-8201088",
	"slug": "perceuse-ober-supergon13v-8201088",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "OBER SUPERGON13V (réf. 8201088)",
	"brand": "OBER",
	"model": "SUPERGON13V",
	"mpn": "8201088",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-ober-supergon13v-8201088.svg",
		"alt": "Repères techniques : OBER SUPERGON13V (réf. 8201088)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-supergon13v",
		"label": "Référence 8201088",
		"distinguishingAttributes": {
			"reference": "8201088",
			"VELOCITÀ A VUOTO (giri/min)": "820",
			"LUNGHEZZA (mm)": "255"
		}
	},
	"editorial": {
		"overview": "OBER SUPERGON13V (réf. 8201088). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"VELOCITÀ A VUOTO (giri/min) : 820.",
			"LUNGHEZZA (mm) : 255.",
			"CORPO : 42.",
			"PESO (Kg) : 1,72.",
			"ATTACCO ARIA : 1/4” GAS.",
			"CONSUMO ARIA (Nl/ciclo) : 720.",
			"TUBO min. (mm) : 8.",
			"ATTACCO MANDRINO : 1/2”x20."
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
			"value": "8201088",
			"evidenceIds": [
				"october5-tools-ober-industrial-p101"
			]
		},
		{
			"label": "VELOCITÀ A VUOTO (giri/min)",
			"value": "820",
			"evidenceIds": [
				"october5-tools-ober-industrial-p101"
			]
		},
		{
			"label": "LUNGHEZZA (mm)",
			"value": "255",
			"evidenceIds": [
				"october5-tools-ober-industrial-p101"
			]
		},
		{
			"label": "CORPO",
			"value": "42",
			"evidenceIds": [
				"october5-tools-ober-industrial-p101"
			]
		},
		{
			"label": "PESO (Kg)",
			"value": "1,72",
			"evidenceIds": [
				"october5-tools-ober-industrial-p101"
			]
		},
		{
			"label": "ATTACCO ARIA",
			"value": "1/4” GAS",
			"evidenceIds": [
				"october5-tools-ober-industrial-p101"
			]
		},
		{
			"label": "CONSUMO ARIA (Nl/ciclo)",
			"value": "720",
			"evidenceIds": [
				"october5-tools-ober-industrial-p101"
			]
		},
		{
			"label": "TUBO min. (mm)",
			"value": "8",
			"evidenceIds": [
				"october5-tools-ober-industrial-p101"
			]
		},
		{
			"label": "ATTACCO MANDRINO",
			"value": "1/2”x20",
			"evidenceIds": [
				"october5-tools-ober-industrial-p101"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-ober-industrial-p101",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=101",
			"sourceLabel": "OBER : ober-industrial, page PDF 101",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-ober-industrial-p101"
		],
		"workingPressureBar": [
			"october5-tools-ober-industrial-p101"
		],
		"demandExplanation": [
			"october5-tools-ober-industrial-p101"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
