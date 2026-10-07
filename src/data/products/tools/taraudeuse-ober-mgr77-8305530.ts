import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "taraudeuse-ober-mgr77-8305530",
	"slug": "taraudeuse-ober-mgr77-8305530",
	"categoryId": "taraudeuse",
	"category": "taraudeuse",
	"label": "OBER MGR77 (réf. 8305530)",
	"brand": "OBER",
	"model": "MGR77",
	"mpn": "8305530",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/taraudeuse-ober-mgr77-8305530.svg",
		"alt": "Repères techniques : OBER MGR77 (réf. 8305530)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-mgr77",
		"label": "Référence 8305530",
		"distinguishingAttributes": {
			"reference": "8305530",
			"VELOCITÀ A VUOTO (giri/min)": "310",
			"LUNGHEZZA (mm)": "272"
		}
	},
	"editorial": {
		"overview": "OBER MGR77 (réf. 8305530). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"VELOCITÀ A VUOTO (giri/min) : 310.",
			"LUNGHEZZA (mm) : 272.",
			"CORPO : 43.",
			"PESO (Kg) : 1,44.",
			"ATTACCO ARIA : 1/4” GAS.",
			"TUBO min. (mm) : 8.",
			"CONSUMO ARIA (Nl/ciclo) : 430.",
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
			"value": "8305530",
			"evidenceIds": [
				"october5-tools-ober-industrial-p135"
			]
		},
		{
			"label": "VELOCITÀ A VUOTO (giri/min)",
			"value": "310",
			"evidenceIds": [
				"october5-tools-ober-industrial-p135"
			]
		},
		{
			"label": "LUNGHEZZA (mm)",
			"value": "272",
			"evidenceIds": [
				"october5-tools-ober-industrial-p135"
			]
		},
		{
			"label": "CORPO",
			"value": "43",
			"evidenceIds": [
				"october5-tools-ober-industrial-p135"
			]
		},
		{
			"label": "PESO (Kg)",
			"value": "1,44",
			"evidenceIds": [
				"october5-tools-ober-industrial-p135"
			]
		},
		{
			"label": "ATTACCO ARIA",
			"value": "1/4” GAS",
			"evidenceIds": [
				"october5-tools-ober-industrial-p135"
			]
		},
		{
			"label": "TUBO min. (mm)",
			"value": "8",
			"evidenceIds": [
				"october5-tools-ober-industrial-p135"
			]
		},
		{
			"label": "CONSUMO ARIA (Nl/ciclo)",
			"value": "430",
			"evidenceIds": [
				"october5-tools-ober-industrial-p135"
			]
		},
		{
			"label": "ATTACCO RAPIDO",
			"value": "19 (Gr. 1 DIN 238)",
			"evidenceIds": [
				"october5-tools-ober-industrial-p135"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-ober-industrial-p135",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=135",
			"sourceLabel": "OBER : ober-industrial, page PDF 135",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-ober-industrial-p135"
		],
		"workingPressureBar": [
			"october5-tools-ober-industrial-p135"
		],
		"demandExplanation": [
			"october5-tools-ober-industrial-p135"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
