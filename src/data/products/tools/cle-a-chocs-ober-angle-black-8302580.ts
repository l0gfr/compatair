import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-ober-angle-black-8302580",
	"slug": "cle-a-chocs-ober-angle-black-8302580",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "OBER ANGLE BLACK (réf. 8302580)",
	"brand": "OBER",
	"model": "ANGLE BLACK",
	"mpn": "8302580",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-ober-angle-black-8302580.svg",
		"alt": "Repères techniques : OBER ANGLE BLACK (réf. 8302580)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-angle-black",
		"label": "Référence 8302580",
		"distinguishingAttributes": {
			"reference": "8302580",
			"VELOCITÀ A VUOTO (giri/min)": "9000",
			"COPPIA (Nm)": "680"
		}
	},
	"editorial": {
		"overview": "OBER ANGLE BLACK (réf. 8302580). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"VELOCITÀ A VUOTO (giri/min) : 9000.",
			"COPPIA (Nm) : 680.",
			"LUNGHEZZA (mm) : 265.",
			"ATTACCO ARIA : 1/4”GAS.",
			"PESO (Kg) : 1,20.",
			"TUBO min. (mm) : 10.",
			"CONSUMO ARIA (Nl/ciclo) : -."
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
			"value": "8302580",
			"evidenceIds": [
				"october5-tools-ober-industrial-p49"
			]
		},
		{
			"label": "VELOCITÀ A VUOTO (giri/min)",
			"value": "9000",
			"evidenceIds": [
				"october5-tools-ober-industrial-p49"
			]
		},
		{
			"label": "COPPIA (Nm)",
			"value": "680",
			"evidenceIds": [
				"october5-tools-ober-industrial-p49"
			]
		},
		{
			"label": "LUNGHEZZA (mm)",
			"value": "265",
			"evidenceIds": [
				"october5-tools-ober-industrial-p49"
			]
		},
		{
			"label": "ATTACCO ARIA",
			"value": "1/4”GAS",
			"evidenceIds": [
				"october5-tools-ober-industrial-p49"
			]
		},
		{
			"label": "PESO (Kg)",
			"value": "1,20",
			"evidenceIds": [
				"october5-tools-ober-industrial-p49"
			]
		},
		{
			"label": "TUBO min. (mm)",
			"value": "10",
			"evidenceIds": [
				"october5-tools-ober-industrial-p49"
			]
		},
		{
			"label": "CONSUMO ARIA (Nl/ciclo)",
			"value": "-",
			"evidenceIds": [
				"october5-tools-ober-industrial-p49"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-ober-industrial-p49",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=49",
			"sourceLabel": "OBER : ober-industrial, page PDF 49",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-ober-industrial-p49"
		],
		"workingPressureBar": [
			"october5-tools-ober-industrial-p49"
		],
		"demandExplanation": [
			"october5-tools-ober-industrial-p49"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
