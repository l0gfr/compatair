import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "graveur-ober-g-4-8501106",
	"slug": "graveur-ober-g-4-8501106",
	"categoryId": "graveur",
	"category": "graveur",
	"label": "OBER G-4 (réf. 8501106)",
	"brand": "OBER",
	"model": "G-4",
	"mpn": "8501106",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/graveur-ober-g-4-8501106.svg",
		"alt": "Repères techniques : OBER G-4 (réf. 8501106)",
		"sourceUrl": "https://www.ober.it/download/13ALd55cbw",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ober-g-4",
		"label": "Référence 8501106",
		"distinguishingAttributes": {
			"reference": "8501106",
			"LUNGHEZZA DELLA CORSA(mm)": "1",
			"LUNGHEZZA (mm)": "140"
		}
	},
	"editorial": {
		"overview": "OBER G-4 (réf. 8501106). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"LUNGHEZZA DELLA CORSA(mm) : 1.",
			"LUNGHEZZA (mm) : 140.",
			"CORPO : 20.",
			"PESO (Kg) : 0,15.",
			"ATTACCO ARIA : 1/4” GAS.",
			"TUBO ∅ min. (mm) : 6.",
			"CONSUMO ARIA (Nl/ciclo) : 360."
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
			"value": "8501106",
			"evidenceIds": [
				"october5-tools-ober-industrial-p187"
			]
		},
		{
			"label": "LUNGHEZZA DELLA CORSA(mm)",
			"value": "1",
			"evidenceIds": [
				"october5-tools-ober-industrial-p187"
			]
		},
		{
			"label": "LUNGHEZZA (mm)",
			"value": "140",
			"evidenceIds": [
				"october5-tools-ober-industrial-p187"
			]
		},
		{
			"label": "CORPO",
			"value": "20",
			"evidenceIds": [
				"october5-tools-ober-industrial-p187"
			]
		},
		{
			"label": "PESO (Kg)",
			"value": "0,15",
			"evidenceIds": [
				"october5-tools-ober-industrial-p187"
			]
		},
		{
			"label": "ATTACCO ARIA",
			"value": "1/4” GAS",
			"evidenceIds": [
				"october5-tools-ober-industrial-p187"
			]
		},
		{
			"label": "TUBO ∅ min. (mm)",
			"value": "6",
			"evidenceIds": [
				"october5-tools-ober-industrial-p187"
			]
		},
		{
			"label": "CONSUMO ARIA (Nl/ciclo)",
			"value": "360",
			"evidenceIds": [
				"october5-tools-ober-industrial-p187"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-ober-industrial-p187",
			"sourceUrl": "https://www.ober.it/download/13ALd55cbw#page=187",
			"sourceLabel": "OBER : ober-industrial, page PDF 187",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 b33909f1fd8dabd20bb04efacb1bff64894a3989ef835b32c0aa8ba2e02b1beb. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-ober-industrial-p187"
		],
		"workingPressureBar": [
			"october5-tools-ober-industrial-p187"
		],
		"demandExplanation": [
			"october5-tools-ober-industrial-p187"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
