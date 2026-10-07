import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-deprag-hc007-r10p-2104091a",
	"slug": "burineur-deprag-hc007-r10p-2104091a",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "DEPRAG HC007-R10P (réf. 2104091A)",
	"brand": "DEPRAG",
	"model": "HC007-R10P",
	"mpn": "2104091A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-deprag-hc007-r10p-2104091a.svg",
		"alt": "Repères techniques : DEPRAG HC007-R10P (réf. 2104091A)",
		"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "deprag-hc007-r10p",
		"label": "Référence 2104091A",
		"distinguishingAttributes": {
			"reference": "2104091A",
			"Emmanchement du burin, mm": "Ø 10,3x36",
			"Fréquence des impacts, impacts/min": "4 000"
		}
	},
	"editorial": {
		"overview": "DEPRAG HC007-R10P (réf. 2104091A). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Emmanchement du burin, mm : Ø 10,3x36.",
			"Fréquence des impacts, impacts/min : 4 000.",
			"Diamètre intérieur du flexible, mm (in) : 6 (.24)."
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
			"value": "Ø 10,3x36",
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
