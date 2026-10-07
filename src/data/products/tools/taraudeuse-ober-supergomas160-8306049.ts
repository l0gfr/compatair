import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "taraudeuse-ober-supergomas160-8306049",
	"slug": "taraudeuse-ober-supergomas160-8306049",
	"categoryId": "taraudeuse",
	"category": "taraudeuse",
	"label": "OBER SUPERGOMAS160 (réf. 8306049)",
	"brand": "OBER",
	"model": "SUPERGOMAS160",
	"mpn": "8306049",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/taraudeuse-ober-supergomas160-8306049.svg",
		"alt": "Repères techniques : OBER SUPERGOMAS160 (réf. 8306049)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-supergomas160",
		"label": "Référence 8306049",
		"distinguishingAttributes": {
			"reference": "8306049",
			"VELOCITÀ A VUOTO (giri/min)": "260",
			"LUNGHEZZA (mm)": "208"
		}
	},
	"editorial": {
		"overview": "OBER SUPERGOMAS160 (réf. 8306049). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"VELOCITÀ A VUOTO (giri/min) : 260.",
			"LUNGHEZZA (mm) : 208.",
			"CORPO : 40.",
			"PESO (Kg) : 1,15.",
			"ATTACCO ARIA : 1/4” GAS.",
			"TUBO min. (mm) : 12.",
			"CONSUMO ARIA (Nl/ciclo) : 600.",
			"ATTACCO MANDRINO : B12."
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
			"value": "8306049",
			"evidenceIds": [
				"october5-tools-ober-industrial-p139"
			]
		},
		{
			"label": "VELOCITÀ A VUOTO (giri/min)",
			"value": "260",
			"evidenceIds": [
				"october5-tools-ober-industrial-p139"
			]
		},
		{
			"label": "LUNGHEZZA (mm)",
			"value": "208",
			"evidenceIds": [
				"october5-tools-ober-industrial-p139"
			]
		},
		{
			"label": "CORPO",
			"value": "40",
			"evidenceIds": [
				"october5-tools-ober-industrial-p139"
			]
		},
		{
			"label": "PESO (Kg)",
			"value": "1,15",
			"evidenceIds": [
				"october5-tools-ober-industrial-p139"
			]
		},
		{
			"label": "ATTACCO ARIA",
			"value": "1/4” GAS",
			"evidenceIds": [
				"october5-tools-ober-industrial-p139"
			]
		},
		{
			"label": "TUBO min. (mm)",
			"value": "12",
			"evidenceIds": [
				"october5-tools-ober-industrial-p139"
			]
		},
		{
			"label": "CONSUMO ARIA (Nl/ciclo)",
			"value": "600",
			"evidenceIds": [
				"october5-tools-ober-industrial-p139"
			]
		},
		{
			"label": "ATTACCO MANDRINO",
			"value": "B12",
			"evidenceIds": [
				"october5-tools-ober-industrial-p139"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-ober-industrial-p139",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=139",
			"sourceLabel": "OBER : ober-industrial, page PDF 139",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-ober-industrial-p139"
		],
		"workingPressureBar": [
			"october5-tools-ober-industrial-p139"
		],
		"demandExplanation": [
			"october5-tools-ober-industrial-p139"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
