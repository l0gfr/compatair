import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-ober-supergovit3sa-8302279",
	"slug": "visseuse-ober-supergovit3sa-8302279",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "OBER SUPERGOVIT3SA (réf. 8302279)",
	"brand": "OBER",
	"model": "SUPERGOVIT3SA",
	"mpn": "8302279",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-ober-supergovit3sa-8302279.svg",
		"alt": "Repères techniques : OBER SUPERGOVIT3SA (réf. 8302279)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-supergovit3sa",
		"label": "Référence 8302279",
		"distinguishingAttributes": {
			"reference": "8302279",
			"VELOCITÀ A VUOTO (giri/min)": "670",
			"COPPIA (Nm)": "20"
		}
	},
	"editorial": {
		"overview": "OBER SUPERGOVIT3SA (réf. 8302279). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"VELOCITÀ A VUOTO (giri/min) : 670.",
			"COPPIA (Nm) : 20.",
			"LUNGHEZZA (mm) : 180.",
			"CORPO : 44.",
			"ATTACCO ARIA : 1/4”GAS.",
			"PESO (Kg) : 1,17.",
			"TUBO min. (mm) : 8.",
			"CONSUMO ARIA (Nl/ciclo) : 750."
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
			"value": "8302279",
			"evidenceIds": [
				"october5-tools-ober-industrial-p43"
			]
		},
		{
			"label": "VELOCITÀ A VUOTO (giri/min)",
			"value": "670",
			"evidenceIds": [
				"october5-tools-ober-industrial-p43"
			]
		},
		{
			"label": "COPPIA (Nm)",
			"value": "20",
			"evidenceIds": [
				"october5-tools-ober-industrial-p43"
			]
		},
		{
			"label": "LUNGHEZZA (mm)",
			"value": "180",
			"evidenceIds": [
				"october5-tools-ober-industrial-p43"
			]
		},
		{
			"label": "CORPO",
			"value": "44",
			"evidenceIds": [
				"october5-tools-ober-industrial-p43"
			]
		},
		{
			"label": "ATTACCO ARIA",
			"value": "1/4”GAS",
			"evidenceIds": [
				"october5-tools-ober-industrial-p43"
			]
		},
		{
			"label": "PESO (Kg)",
			"value": "1,17",
			"evidenceIds": [
				"october5-tools-ober-industrial-p43"
			]
		},
		{
			"label": "TUBO min. (mm)",
			"value": "8",
			"evidenceIds": [
				"october5-tools-ober-industrial-p43"
			]
		},
		{
			"label": "CONSUMO ARIA (Nl/ciclo)",
			"value": "750",
			"evidenceIds": [
				"october5-tools-ober-industrial-p43"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-ober-industrial-p43",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=43",
			"sourceLabel": "OBER : ober-industrial, page PDF 43",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-ober-industrial-p43"
		],
		"workingPressureBar": [
			"october5-tools-ober-industrial-p43"
		],
		"demandExplanation": [
			"october5-tools-ober-industrial-p43"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
