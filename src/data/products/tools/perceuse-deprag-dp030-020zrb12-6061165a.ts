import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-deprag-dp030-020zrb12-6061165a",
	"slug": "perceuse-deprag-dp030-020zrb12-6061165a",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "DEPRAG DP030-020ZRB12 (réf. 6061165A)",
	"brand": "DEPRAG",
	"model": "DP030-020ZRB12",
	"mpn": "6061165A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"recommendedHose": {
		"innerDiameterMm": 8
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-deprag-dp030-020zrb12-6061165a.svg",
		"alt": "Repères techniques : DEPRAG DP030-020ZRB12 (réf. 6061165A)",
		"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "deprag-dp030-020zrb12",
		"label": "Référence 6061165A",
		"distinguishingAttributes": {
			"reference": "6061165A",
			"Puissance déclarée, kW (hp)": "0,3 (.4)",
			"Vitesse à vide, tr/min": "2 000"
		}
	},
	"editorial": {
		"overview": "DEPRAG DP030-020ZRB12 (réf. 6061165A). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Puissance déclarée, kW (hp) : 0,3 (.4).",
			"Vitesse à vide, tr/min : 2 000.",
			"Capacité de perçage dans l’acier, mm (in) : 6 (.24).",
			"Capacité de perçage dans l’aluminium, mm (in) : 8 (.31).",
			"Diamètre intérieur du flexible, mm (in) : 8 (.31).",
			"Masse sans raccord d’air, kg (lbs) : 1,0 (2.20).",
			"Plage du mandrin, mm : 1 - 10."
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
			"value": "0,3 (.4)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p20"
			]
		},
		{
			"label": "Vitesse à vide, tr/min",
			"value": "2 000",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p20"
			]
		},
		{
			"label": "Capacité de perçage dans l’acier, mm (in)",
			"value": "6 (.24)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p20"
			]
		},
		{
			"label": "Capacité de perçage dans l’aluminium, mm (in)",
			"value": "8 (.31)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p20"
			]
		},
		{
			"label": "Diamètre intérieur du flexible, mm (in)",
			"value": "8 (.31)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p20"
			]
		},
		{
			"label": "Masse sans raccord d’air, kg (lbs)",
			"value": "1,0 (2.20)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p20"
			]
		},
		{
			"label": "Plage du mandrin, mm",
			"value": "1 - 10",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p20"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La page technique ne documente pas un point de consommation à pression connue.",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p20"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-deprag-industrial2024-p20",
			"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf#page=20",
			"sourceLabel": "DEPRAG, document technique officiel, page PDF 20",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 7de335b0a26e42cbb8bdc58dd6786731f8acb69bc92a8435a472f9e3e2ac3621. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-deprag-industrial2024-p20"
		],
		"workingPressureBar": [
			"october3d-tools-deprag-industrial2024-p20"
		],
		"recommendedHose": [
			"october3d-tools-deprag-industrial2024-p20"
		],
		"demandExplanation": [
			"october3d-tools-deprag-industrial2024-p20"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
