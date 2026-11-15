import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-deprag-hc007-hr12p-2104091b",
	"slug": "burineur-deprag-hc007-hr12p-2104091b",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "DEPRAG HC007-HR12P (réf. 2104091B)",
	"brand": "DEPRAG",
	"model": "HC007-HR12P",
	"mpn": "2104091B",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-deprag-hc007-hr12p-2104091b-technical-20261115-followup.svg",
		"alt": "Repères techniques : DEPRAG HC007-HR12P (réf. 2104091B)",
		"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 15 novembre 2026"
	},
	"variant": {
		"familyId": "deprag-hc007-hr12p",
		"label": "Référence 2104091B",
		"distinguishingAttributes": {
			"reference": "2104091B",
			"Emmanchement du burin, mm": "Ø-hex. 11,7/10x36",
			"Fréquence des impacts, impacts/min": "4 000"
		}
	},
	"editorial": {
		"overview": "Le HC007-HR12P est un petit burineur à poignée pistolet, 4 000 coups/min et 0,7 kg hors raccord. Sa queue Ø-hex. 11,7/10×36 diffère de la queue ronde Ø10,3×36 du HC007-R10P. Le HC010-H10B est droit, avec queue hexagonale 10×25 et 9 000 coups/min.",
		"verifiedFacts": [
			"Emmanchement du burin, mm : Ø-hex. 11,7/10x36.",
			"Fréquence des impacts, impacts/min : 4 000.",
			"Diamètre intérieur du flexible, mm (in) : 6 (.24).",
			"Masse hors raccord d’air : 0,7 kg.",
			"Forme : Poignée pistolet ; capuchon de protection."
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
			"value": "Ø-hex. 11,7/10x36",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p23"
			]
		},
		{
			"label": "Fréquence des impacts, impacts/min",
			"value": "4 000",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p23"
			]
		},
		{
			"label": "Diamètre intérieur du flexible, mm (in)",
			"value": "6 (.24)",
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
		},
		{
			"label": "Masse hors raccord d’air",
			"value": "0,7 kg",
			"evidenceIds": [
				"review:2026-11-12-technical:burineur-deprag-hc007-hr12p-2104091b:0"
			]
		},
		{
			"label": "Forme",
			"value": "Poignée pistolet ; capuchon de protection",
			"evidenceIds": [
				"review:2026-11-12-technical:burineur-deprag-hc007-hr12p-2104091b:0"
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
		},
		{
			"id": "review:2026-11-12-technical:burineur-deprag-hc007-hr12p-2104091b:0",
			"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf",
			"sourceLabel": "DEPRAG, document fabricant, pages PDF 23",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "Le HC007-HR12P est un petit burineur à poignée pistolet, 4 000 coups/min et 0,7 kg hors raccord. Sa queue Ø-hex. 11,7/10×36 diffère de la queue ronde Ø10,3×36 du HC007-R10P. Le HC010-H10B est droit, avec queue hexagonale 10×25 et 9 000 coups/min. GET complet : SHA-256 7de335b0a26e42cbb8bdc58dd6786731f8acb69bc92a8435a472f9e3e2ac3621. Historique conservé."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-deprag-industrial2024-p23"
		],
		"workingPressureBar": [
			"review:2026-11-12-technical:burineur-deprag-hc007-hr12p-2104091b:0"
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
