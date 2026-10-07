import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-deprag-hc012-h14b-831332a",
	"slug": "burineur-deprag-hc012-h14b-831332a",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "DEPRAG HC012-H14B (réf. 831332A)",
	"brand": "DEPRAG",
	"model": "HC012-H14B",
	"mpn": "831332A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"recommendedHose": {
		"innerDiameterMm": 8
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-deprag-hc012-h14b-831332a.svg",
		"alt": "Repères techniques : DEPRAG HC012-H14B (réf. 831332A)",
		"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "deprag-hc012-h14b",
		"label": "Référence 831332A",
		"distinguishingAttributes": {
			"reference": "831332A",
			"Emmanchement du burin, mm": "hex. 14x25",
			"Fréquence des impacts, impacts/min": "4 500"
		}
	},
	"editorial": {
		"overview": "DEPRAG HC012-H14B (réf. 831332A). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Emmanchement du burin, mm : hex. 14x25.",
			"Fréquence des impacts, impacts/min : 4 500.",
			"Diamètre intérieur du flexible, mm (in) : 8 (.31)."
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
			"value": "hex. 14x25",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p23"
			]
		},
		{
			"label": "Fréquence des impacts, impacts/min",
			"value": "4 500",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p23"
			]
		},
		{
			"label": "Diamètre intérieur du flexible, mm (in)",
			"value": "8 (.31)",
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
