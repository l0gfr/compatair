import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-deprag-dp060-060zp3-8-6061155b",
	"slug": "perceuse-deprag-dp060-060zp3-8-6061155b",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "DEPRAG DP060-060ZP3/8\" (réf. 6061155B)",
	"brand": "DEPRAG",
	"model": "DP060-060ZP3/8\"",
	"mpn": "6061155B",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-deprag-dp060-060zp3-8-6061155b.svg",
		"alt": "Repères techniques : DEPRAG DP060-060ZP3/8\" (réf. 6061155B)",
		"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "deprag-dp060-060zp3-8",
		"label": "Référence 6061155B",
		"distinguishingAttributes": {
			"reference": "6061155B",
			"Puissance déclarée, kW (hp)": "0,6 (.8)",
			"Vitesse à vide, tr/min": "6 000"
		}
	},
	"editorial": {
		"overview": "DEPRAG DP060-060ZP3/8\" (réf. 6061155B). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Puissance déclarée, kW (hp) : 0,6 (.8).",
			"Vitesse à vide, tr/min : 6 000.",
			"Capacité de perçage dans l’acier, mm (in) : 10 (.39).",
			"Capacité de perçage dans l’aluminium, mm (in) : 10 (.39).",
			"Diamètre intérieur du flexible, mm (in) : 10 (.39).",
			"Masse sans raccord d’air, kg (lbs) : 1,1 (2.65).",
			"Plage du mandrin, mm : 0,8 - 10."
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
			"value": "0,6 (.8)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p20"
			]
		},
		{
			"label": "Vitesse à vide, tr/min",
			"value": "6 000",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p20"
			]
		},
		{
			"label": "Capacité de perçage dans l’acier, mm (in)",
			"value": "10 (.39)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p20"
			]
		},
		{
			"label": "Capacité de perçage dans l’aluminium, mm (in)",
			"value": "10 (.39)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p20"
			]
		},
		{
			"label": "Diamètre intérieur du flexible, mm (in)",
			"value": "10 (.39)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p20"
			]
		},
		{
			"label": "Masse sans raccord d’air, kg (lbs)",
			"value": "1,1 (2.65)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p20"
			]
		},
		{
			"label": "Plage du mandrin, mm",
			"value": "0,8 - 10",
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
