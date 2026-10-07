import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "marteau-a-river-deprag-hc010-hr14d-2103441b",
	"slug": "marteau-a-river-deprag-hc010-hr14d-2103441b",
	"categoryId": "marteau-a-river",
	"category": "marteau-a-river",
	"label": "DEPRAG HC010-HR14D (réf. 2103441B)",
	"brand": "DEPRAG",
	"model": "HC010-HR14D",
	"mpn": "2103441B",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/marteau-a-river-deprag-hc010-hr14d-2103441b.svg",
		"alt": "Repères techniques : DEPRAG HC010-HR14D (réf. 2103441B)",
		"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "deprag-hc010-hr14d",
		"label": "Référence 2103441B",
		"distinguishingAttributes": {
			"reference": "2103441B",
			"Emmanchement du burin, mm": "Ø-hex. 14,3/12,5x50",
			"Fréquence des impacts, impacts/min": "3 000"
		}
	},
	"editorial": {
		"overview": "DEPRAG HC010-HR14D (réf. 2103441B). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Emmanchement du burin, mm : Ø-hex. 14,3/12,5x50.",
			"Fréquence des impacts, impacts/min : 3 000.",
			"Diamètre de rivet aluminium, mm (in) : 5 (.20).",
			"Diamètre de rivet acier, mm (in) : 3 (.12).",
			"Diamètre intérieur du flexible, mm (in) : 10 (.39)."
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
			"value": "Ø-hex. 14,3/12,5x50",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p23"
			]
		},
		{
			"label": "Fréquence des impacts, impacts/min",
			"value": "3 000",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p23"
			]
		},
		{
			"label": "Diamètre de rivet aluminium, mm (in)",
			"value": "5 (.20)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p23"
			]
		},
		{
			"label": "Diamètre de rivet acier, mm (in)",
			"value": "3 (.12)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p23"
			]
		},
		{
			"label": "Diamètre intérieur du flexible, mm (in)",
			"value": "10 (.39)",
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
