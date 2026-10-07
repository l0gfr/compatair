import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "scie-deprag-ppp35ax-830503a",
	"slug": "scie-deprag-ppp35ax-830503a",
	"categoryId": "scie",
	"category": "scie",
	"label": "DEPRAG PPP35AX (réf. 830503A)",
	"brand": "DEPRAG",
	"model": "PPP35AX",
	"mpn": "830503A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"recommendedHose": {
		"innerDiameterMm": 19
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/scie-deprag-ppp35ax-830503a.svg",
		"alt": "Repères techniques : DEPRAG PPP35AX (réf. 830503A)",
		"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "deprag-ppp35ax",
		"label": "Référence 830503A",
		"distinguishingAttributes": {
			"reference": "830503A",
			"Puissance déclarée, kW (hp)": "1,1 (1.48)",
			"Cadence à vide, courses/min": "380"
		}
	},
	"editorial": {
		"overview": "DEPRAG PPP35AX (réf. 830503A). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Puissance déclarée, kW (hp) : 1,1 (1.48).",
			"Cadence à vide, courses/min : 380.",
			"Course de lame, mm (in) : 68 (2.68).",
			"Longueur maximale de lame, mm (in) : 350 (13.78).",
			"Dimensions de lame fournie, mm (in) : 300x27x1,6 (11.81x1.06x.06).",
			"Diamètre intérieur du flexible, mm (in) : 19 (.75)."
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
			"label": "Puissance déclarée, kW (hp)",
			"value": "1,1 (1.48)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p30"
			]
		},
		{
			"label": "Cadence à vide, courses/min",
			"value": "380",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p30"
			]
		},
		{
			"label": "Course de lame, mm (in)",
			"value": "68 (2.68)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p30"
			]
		},
		{
			"label": "Longueur maximale de lame, mm (in)",
			"value": "350 (13.78)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p30"
			]
		},
		{
			"label": "Dimensions de lame fournie, mm (in)",
			"value": "300x27x1,6 (11.81x1.06x.06)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p30"
			]
		},
		{
			"label": "Diamètre intérieur du flexible, mm (in)",
			"value": "19 (.75)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p30"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La page technique ne documente pas un point de consommation à pression connue.",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p30"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-deprag-industrial2024-p30",
			"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf#page=30",
			"sourceLabel": "DEPRAG, document technique officiel, page PDF 30",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 7de335b0a26e42cbb8bdc58dd6786731f8acb69bc92a8435a472f9e3e2ac3621. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-deprag-industrial2024-p30"
		],
		"workingPressureBar": [
			"october3d-tools-deprag-industrial2024-p30"
		],
		"recommendedHose": [
			"october3d-tools-deprag-industrial2024-p30"
		],
		"demandExplanation": [
			"october3d-tools-deprag-industrial2024-p30"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
