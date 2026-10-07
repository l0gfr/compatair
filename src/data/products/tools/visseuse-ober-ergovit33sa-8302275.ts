import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-ober-ergovit33sa-8302275",
	"slug": "visseuse-ober-ergovit33sa-8302275",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "OBER ERGOVIT33SA (réf. 8302275)",
	"brand": "OBER",
	"model": "ERGOVIT33SA",
	"mpn": "8302275",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-ober-ergovit33sa-8302275.svg",
		"alt": "Repères techniques : OBER ERGOVIT33SA (réf. 8302275)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-ergovit33sa",
		"label": "Référence 8302275",
		"distinguishingAttributes": {
			"reference": "8302275",
			"VELOCITÀ A VUOTO (giri/min)": "670",
			"COPPIA (Nm)": "8,8"
		}
	},
	"editorial": {
		"overview": "OBER ERGOVIT33SA (réf. 8302275). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"VELOCITÀ A VUOTO (giri/min) : 670.",
			"COPPIA (Nm) : 8,8.",
			"LUNGHEZZA (mm) : 150.",
			"CORPO : 38.",
			"ATTACCO ARIA : 1/4”GAS.",
			"PESO (Kg) : 0,9.",
			"TUBO min. (mm) : 8.",
			"CONSUMO ARIA (Nl/ciclo) : 680."
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
			"value": "8302275",
			"evidenceIds": [
				"october5-tools-ober-industrial-p42"
			]
		},
		{
			"label": "VELOCITÀ A VUOTO (giri/min)",
			"value": "670",
			"evidenceIds": [
				"october5-tools-ober-industrial-p42"
			]
		},
		{
			"label": "COPPIA (Nm)",
			"value": "8,8",
			"evidenceIds": [
				"october5-tools-ober-industrial-p42"
			]
		},
		{
			"label": "LUNGHEZZA (mm)",
			"value": "150",
			"evidenceIds": [
				"october5-tools-ober-industrial-p42"
			]
		},
		{
			"label": "CORPO",
			"value": "38",
			"evidenceIds": [
				"october5-tools-ober-industrial-p42"
			]
		},
		{
			"label": "ATTACCO ARIA",
			"value": "1/4”GAS",
			"evidenceIds": [
				"october5-tools-ober-industrial-p42"
			]
		},
		{
			"label": "PESO (Kg)",
			"value": "0,9",
			"evidenceIds": [
				"october5-tools-ober-industrial-p42"
			]
		},
		{
			"label": "TUBO min. (mm)",
			"value": "8",
			"evidenceIds": [
				"october5-tools-ober-industrial-p42"
			]
		},
		{
			"label": "CONSUMO ARIA (Nl/ciclo)",
			"value": "680",
			"evidenceIds": [
				"october5-tools-ober-industrial-p42"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-ober-industrial-p42",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=42",
			"sourceLabel": "OBER : ober-industrial, page PDF 42",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-ober-industrial-p42"
		],
		"workingPressureBar": [
			"october5-tools-ober-industrial-p42"
		],
		"demandExplanation": [
			"october5-tools-ober-industrial-p42"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
