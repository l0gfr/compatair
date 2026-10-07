import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-deprag-hc057-hr20b-6060010b",
	"slug": "burineur-deprag-hc057-hr20b-6060010b",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "DEPRAG HC057-HR20B (réf. 6060010B)",
	"brand": "DEPRAG",
	"model": "HC057-HR20B",
	"mpn": "6060010B",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"recommendedHose": {
		"innerDiameterMm": 13
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-deprag-hc057-hr20b-6060010b.svg",
		"alt": "Repères techniques : DEPRAG HC057-HR20B (réf. 6060010B)",
		"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "deprag-hc057-hr20b",
		"label": "Référence 6060010B",
		"distinguishingAttributes": {
			"reference": "6060010B",
			"Emmanchement du burin, mm": "hex. Ø 20/17x60",
			"Fréquence des impacts, impacts/min": "2 100"
		}
	},
	"editorial": {
		"overview": "DEPRAG HC057-HR20B (réf. 6060010B). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Emmanchement du burin, mm : hex. Ø 20/17x60.",
			"Fréquence des impacts, impacts/min : 2 100.",
			"Diamètre intérieur du flexible, mm (in) : 13 (.51)."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
			"Le tableau fournit des caractéristiques propres à cette référence, sans consommation d’air dans un régime mesuré à pression connue.",
			"Une pression générale de fonctionnement ne remplace pas un point de mesure de consommation.",
			"Les valeurs entre parenthèses sont reproduites dans l’unité alternative du document ; elles ne servent à aucune conversion automatique.",
			"Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Emmanchement du burin, mm",
			"value": "hex. Ø 20/17x60",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p23"
			]
		},
		{
			"label": "Fréquence des impacts, impacts/min",
			"value": "2 100",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p23"
			]
		},
		{
			"label": "Diamètre intérieur du flexible, mm (in)",
			"value": "13 (.51)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p23"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La page technique ne documente pas un point de consommation à pression connue.",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p23"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-deprag-industrial2024-p23",
			"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf#page=23",
			"sourceLabel": "DEPRAG, document technique officiel, page PDF 23",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 7de335b0a26e42cbb8bdc58dd6786731f8acb69bc92a8435a472f9e3e2ac3621. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-deprag-industrial2024-p23"
		],
		"workingPressureBar": [
			"october3d-tools-deprag-industrial2024-p23"
		],
		"recommendedHose": [
			"october3d-tools-deprag-industrial2024-p23"
		],
		"demandExplanation": [
			"october3d-tools-deprag-industrial2024-p23"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
