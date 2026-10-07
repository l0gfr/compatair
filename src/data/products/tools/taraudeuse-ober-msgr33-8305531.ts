import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "taraudeuse-ober-msgr33-8305531",
	"slug": "taraudeuse-ober-msgr33-8305531",
	"categoryId": "taraudeuse",
	"category": "taraudeuse",
	"label": "OBER MSGR33 (réf. 8305531)",
	"brand": "OBER",
	"model": "MSGR33",
	"mpn": "8305531",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/taraudeuse-ober-msgr33-8305531.svg",
		"alt": "Repères techniques : OBER MSGR33 (réf. 8305531)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-msgr33",
		"label": "Référence 8305531",
		"distinguishingAttributes": {
			"reference": "8305531",
			"VELOCITÀ A VUOTO (giri/min)": "650",
			"LUNGHEZZA (mm)": "297"
		}
	},
	"editorial": {
		"overview": "OBER MSGR33 (réf. 8305531). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"VELOCITÀ A VUOTO (giri/min) : 650.",
			"LUNGHEZZA (mm) : 297.",
			"CORPO : 43.",
			"PESO (Kg) : 1,5.",
			"ATTACCO ARIA : 1/4” GAS.",
			"TUBO min. (mm) : 10.",
			"CONSUMO ARIA (Nl/ciclo) : 600.",
			"ATTACCO RAPIDO : 19 (Gr. 1 DIN 238)."
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
			"value": "8305531",
			"evidenceIds": [
				"october5-tools-ober-industrial-p136"
			]
		},
		{
			"label": "VELOCITÀ A VUOTO (giri/min)",
			"value": "650",
			"evidenceIds": [
				"october5-tools-ober-industrial-p136"
			]
		},
		{
			"label": "LUNGHEZZA (mm)",
			"value": "297",
			"evidenceIds": [
				"october5-tools-ober-industrial-p136"
			]
		},
		{
			"label": "CORPO",
			"value": "43",
			"evidenceIds": [
				"october5-tools-ober-industrial-p136"
			]
		},
		{
			"label": "PESO (Kg)",
			"value": "1,5",
			"evidenceIds": [
				"october5-tools-ober-industrial-p136"
			]
		},
		{
			"label": "ATTACCO ARIA",
			"value": "1/4” GAS",
			"evidenceIds": [
				"october5-tools-ober-industrial-p136"
			]
		},
		{
			"label": "TUBO min. (mm)",
			"value": "10",
			"evidenceIds": [
				"october5-tools-ober-industrial-p136"
			]
		},
		{
			"label": "CONSUMO ARIA (Nl/ciclo)",
			"value": "600",
			"evidenceIds": [
				"october5-tools-ober-industrial-p136"
			]
		},
		{
			"label": "ATTACCO RAPIDO",
			"value": "19 (Gr. 1 DIN 238)",
			"evidenceIds": [
				"october5-tools-ober-industrial-p136"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-ober-industrial-p136",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=136",
			"sourceLabel": "OBER : ober-industrial, page PDF 136",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-ober-industrial-p136"
		],
		"workingPressureBar": [
			"october5-tools-ober-industrial-p136"
		],
		"demandExplanation": [
			"october5-tools-ober-industrial-p136"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
