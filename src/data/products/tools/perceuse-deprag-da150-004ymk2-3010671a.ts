import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-deprag-da150-004ymk2-3010671a",
	"slug": "perceuse-deprag-da150-004ymk2-3010671a",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "DEPRAG DA150-004YMK2 (réf. 3010671A)",
	"brand": "DEPRAG",
	"model": "DA150-004YMK2",
	"mpn": "3010671A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"recommendedHose": {
		"innerDiameterMm": 15
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-deprag-da150-004ymk2-3010671a.svg",
		"alt": "Repères techniques : DEPRAG DA150-004YMK2 (réf. 3010671A)",
		"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "deprag-da150-004ymk2",
		"label": "Référence 3010671A",
		"distinguishingAttributes": {
			"reference": "3010671A",
			"Puissance déclarée, kW (hp)": "1,5 (2.01)",
			"Vitesse à vide, tr/min": "400"
		}
	},
	"editorial": {
		"overview": "DEPRAG DA150-004YMK2 (réf. 3010671A). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Puissance déclarée, kW (hp) : 1,5 (2.01).",
			"Vitesse à vide, tr/min : 400.",
			"Capacité de perçage dans l’acier, mm (in) : 23 (.91).",
			"Capacité d’alésage, mm (in) : 18 (.71).",
			"Diamètre intérieur du flexible, mm (in) : 15 (.59).",
			"Masse sans raccord d’air, kg (lbs) : 8,3 (18.30)."
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
			"value": "1,5 (2.01)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p19"
			]
		},
		{
			"label": "Vitesse à vide, tr/min",
			"value": "400",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p19"
			]
		},
		{
			"label": "Capacité de perçage dans l’acier, mm (in)",
			"value": "23 (.91)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p19"
			]
		},
		{
			"label": "Capacité d’alésage, mm (in)",
			"value": "18 (.71)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p19"
			]
		},
		{
			"label": "Diamètre intérieur du flexible, mm (in)",
			"value": "15 (.59)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p19"
			]
		},
		{
			"label": "Masse sans raccord d’air, kg (lbs)",
			"value": "8,3 (18.30)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p19"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La page technique ne documente pas un point de consommation à pression connue.",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p19"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-deprag-industrial2024-p19",
			"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf#page=19",
			"sourceLabel": "DEPRAG, document technique officiel, page PDF 19",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 7de335b0a26e42cbb8bdc58dd6786731f8acb69bc92a8435a472f9e3e2ac3621. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-deprag-industrial2024-p19"
		],
		"workingPressureBar": [
			"october3d-tools-deprag-industrial2024-p19"
		],
		"recommendedHose": [
			"october3d-tools-deprag-industrial2024-p19"
		],
		"demandExplanation": [
			"october3d-tools-deprag-industrial2024-p19"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
