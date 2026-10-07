import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-ober-ervit22dre-8301216",
	"slug": "visseuse-ober-ervit22dre-8301216",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "OBER ERVIT22DRE (réf. 8301216)",
	"brand": "OBER",
	"model": "ERVIT22DRE",
	"mpn": "8301216",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-ober-ervit22dre-8301216.svg",
		"alt": "Repères techniques : OBER ERVIT22DRE (réf. 8301216)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-ervit22dre",
		"label": "Référence 8301216",
		"distinguishingAttributes": {
			"reference": "8301216",
			"VELOCITÀ A VUOTO (giri/min)": "900",
			"COPPIA (Nm)": "3"
		}
	},
	"editorial": {
		"overview": "OBER ERVIT22DRE (réf. 8301216). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"VELOCITÀ A VUOTO (giri/min) : 900.",
			"COPPIA (Nm) : 3.",
			"LUNGHEZZA (mm) : 290.",
			"CORPO : 38.",
			"ATTACCO ARIA : 1/4”GAS.",
			"PESO (Kg) : 1,09.",
			"TUBO min. (mm) : 6.",
			"CONSUMO ARIA (Nl/ciclo) : 260."
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
			"value": "8301216",
			"evidenceIds": [
				"october5-tools-ober-industrial-p33"
			]
		},
		{
			"label": "VELOCITÀ A VUOTO (giri/min)",
			"value": "900",
			"evidenceIds": [
				"october5-tools-ober-industrial-p33"
			]
		},
		{
			"label": "COPPIA (Nm)",
			"value": "3",
			"evidenceIds": [
				"october5-tools-ober-industrial-p33"
			]
		},
		{
			"label": "LUNGHEZZA (mm)",
			"value": "290",
			"evidenceIds": [
				"october5-tools-ober-industrial-p33"
			]
		},
		{
			"label": "CORPO",
			"value": "38",
			"evidenceIds": [
				"october5-tools-ober-industrial-p33"
			]
		},
		{
			"label": "ATTACCO ARIA",
			"value": "1/4”GAS",
			"evidenceIds": [
				"october5-tools-ober-industrial-p33"
			]
		},
		{
			"label": "PESO (Kg)",
			"value": "1,09",
			"evidenceIds": [
				"october5-tools-ober-industrial-p33"
			]
		},
		{
			"label": "TUBO min. (mm)",
			"value": "6",
			"evidenceIds": [
				"october5-tools-ober-industrial-p33"
			]
		},
		{
			"label": "CONSUMO ARIA (Nl/ciclo)",
			"value": "260",
			"evidenceIds": [
				"october5-tools-ober-industrial-p33"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-ober-industrial-p33",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=33",
			"sourceLabel": "OBER : ober-industrial, page PDF 33",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-ober-industrial-p33"
		],
		"workingPressureBar": [
			"october5-tools-ober-industrial-p33"
		],
		"demandExplanation": [
			"october5-tools-ober-industrial-p33"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
