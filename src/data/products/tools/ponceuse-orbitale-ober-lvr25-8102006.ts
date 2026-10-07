import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-ober-lvr25-8102006",
	"slug": "ponceuse-orbitale-ober-lvr25-8102006",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "OBER LVR25 (réf. 8102006)",
	"brand": "OBER",
	"model": "LVR25",
	"mpn": "8102006",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-ober-lvr25-8102006.svg",
		"alt": "Repères techniques : OBER LVR25 (réf. 8102006)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-lvr25",
		"label": "Référence 8102006",
		"distinguishingAttributes": {
			"reference": "8102006",
			"VELOCITÀ A VUOTO (giri/min)": "10000",
			"LUNGHEZZA (mm)": "245"
		}
	},
	"editorial": {
		"overview": "OBER LVR25 (réf. 8102006). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"VELOCITÀ A VUOTO (giri/min) : 10000.",
			"LUNGHEZZA (mm) : 245.",
			"FILETTO DI ATTACCO : M8.",
			"PESO (Kg) : 1,8.",
			"ATTACCO ARIA : 3/8” GAS.",
			"TUBO ∅ min. (mm) : 10.",
			"CONSUMO ARIA (Nl/ciclo) : 650."
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
			"value": "8102006",
			"evidenceIds": [
				"october5-tools-ober-industrial-p183"
			]
		},
		{
			"label": "VELOCITÀ A VUOTO (giri/min)",
			"value": "10000",
			"evidenceIds": [
				"october5-tools-ober-industrial-p183"
			]
		},
		{
			"label": "LUNGHEZZA (mm)",
			"value": "245",
			"evidenceIds": [
				"october5-tools-ober-industrial-p183"
			]
		},
		{
			"label": "FILETTO DI ATTACCO",
			"value": "M8",
			"evidenceIds": [
				"october5-tools-ober-industrial-p183"
			]
		},
		{
			"label": "PESO (Kg)",
			"value": "1,8",
			"evidenceIds": [
				"october5-tools-ober-industrial-p183"
			]
		},
		{
			"label": "ATTACCO ARIA",
			"value": "3/8” GAS",
			"evidenceIds": [
				"october5-tools-ober-industrial-p183"
			]
		},
		{
			"label": "TUBO ∅ min. (mm)",
			"value": "10",
			"evidenceIds": [
				"october5-tools-ober-industrial-p183"
			]
		},
		{
			"label": "CONSUMO ARIA (Nl/ciclo)",
			"value": "650",
			"evidenceIds": [
				"october5-tools-ober-industrial-p183"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-ober-industrial-p183",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=183",
			"sourceLabel": "OBER : ober-industrial, page PDF 183",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-ober-industrial-p183"
		],
		"workingPressureBar": [
			"october5-tools-ober-industrial-p183"
		],
		"demandExplanation": [
			"october5-tools-ober-industrial-p183"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
