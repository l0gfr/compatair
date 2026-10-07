import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-deprag-gds120-120bx-6061163a",
	"slug": "meuleuse-deprag-gds120-120bx-6061163a",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "DEPRAG GDS120-120BX (réf. 6061163A)",
	"brand": "DEPRAG",
	"model": "GDS120-120BX",
	"mpn": "6061163A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"recommendedHose": {
		"innerDiameterMm": 13
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-deprag-gds120-120bx-6061163a.svg",
		"alt": "Repères techniques : DEPRAG GDS120-120BX (réf. 6061163A)",
		"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "deprag-gds120-120bx",
		"label": "Référence 6061163A",
		"distinguishingAttributes": {
			"reference": "6061163A",
			"Puissance déclarée, kW (hp)": "1,2 (1.61)",
			"Vitesse à vide, tr/min": "12 000"
		}
	},
	"editorial": {
		"overview": "DEPRAG GDS120-120BX (réf. 6061163A). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Puissance déclarée, kW (hp) : 1,2 (1.61).",
			"Vitesse à vide, tr/min : 12 000.",
			"Diamètre intérieur du flexible, mm (in) : 13 (.51).",
			"Masse sans raccord d’air, kg (lbs) : 2,3 (5.07).",
			"Diamètre maximal de meule sur tige, mm (in) : 50 (1.97).",
			"Diamètre maximal de fraise, mm (in) : 20 (.79)."
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
			"value": "1,2 (1.61)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p9"
			]
		},
		{
			"label": "Vitesse à vide, tr/min",
			"value": "12 000",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p9"
			]
		},
		{
			"label": "Diamètre intérieur du flexible, mm (in)",
			"value": "13 (.51)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p9"
			]
		},
		{
			"label": "Masse sans raccord d’air, kg (lbs)",
			"value": "2,3 (5.07)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p9"
			]
		},
		{
			"label": "Diamètre maximal de meule sur tige, mm (in)",
			"value": "50 (1.97)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p9"
			]
		},
		{
			"label": "Diamètre maximal de fraise, mm (in)",
			"value": "20 (.79)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p9"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La page technique ne documente pas un point de consommation à pression connue.",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p9"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-deprag-industrial2024-p9",
			"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf#page=9",
			"sourceLabel": "DEPRAG, document technique officiel, page PDF 9",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 7de335b0a26e42cbb8bdc58dd6786731f8acb69bc92a8435a472f9e3e2ac3621. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-deprag-industrial2024-p9"
		],
		"workingPressureBar": [
			"october3d-tools-deprag-industrial2024-p9"
		],
		"recommendedHose": [
			"october3d-tools-deprag-industrial2024-p9"
		],
		"demandExplanation": [
			"october3d-tools-deprag-industrial2024-p9"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
