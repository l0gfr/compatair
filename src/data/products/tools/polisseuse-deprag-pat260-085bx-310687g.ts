import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "polisseuse-deprag-pat260-085bx-310687g",
	"slug": "polisseuse-deprag-pat260-085bx-310687g",
	"categoryId": "polisseuse",
	"category": "polisseuse",
	"label": "DEPRAG PAT260-085BX (réf. 310687G)",
	"brand": "DEPRAG",
	"model": "PAT260-085BX",
	"mpn": "310687G",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"recommendedHose": {
		"innerDiameterMm": 13
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/polisseuse-deprag-pat260-085bx-310687g.svg",
		"alt": "Repères techniques : DEPRAG PAT260-085BX (réf. 310687G)",
		"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "deprag-pat260-085bx",
		"label": "Référence 310687G",
		"distinguishingAttributes": {
			"reference": "310687G",
			"Puissance déclarée, kW (hp)": "2,6 (3.5)",
			"Vitesse à vide, tr/min": "8 500"
		}
	},
	"editorial": {
		"overview": "DEPRAG PAT260-085BX (réf. 310687G). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Puissance déclarée, kW (hp) : 2,6 (3.5).",
			"Vitesse à vide, tr/min : 8 500.",
			"Diamètre du plateau en caoutchouc, mm : 180 (7.09).",
			"Diamètre intérieur du flexible, mm (in) : 13 (.51).",
			"Masse sans raccord d’air, kg (lbs) : 2,2 (4.85)."
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
			"value": "2,6 (3.5)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p16"
			]
		},
		{
			"label": "Vitesse à vide, tr/min",
			"value": "8 500",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p16"
			]
		},
		{
			"label": "Diamètre du plateau en caoutchouc, mm",
			"value": "180 (7.09)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p16"
			]
		},
		{
			"label": "Diamètre intérieur du flexible, mm (in)",
			"value": "13 (.51)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p16"
			]
		},
		{
			"label": "Masse sans raccord d’air, kg (lbs)",
			"value": "2,2 (4.85)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p16"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La page technique ne documente pas un point de consommation à pression connue.",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p16"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-deprag-industrial2024-p16",
			"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf#page=16",
			"sourceLabel": "DEPRAG, document technique officiel, page PDF 16",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 7de335b0a26e42cbb8bdc58dd6786731f8acb69bc92a8435a472f9e3e2ac3621. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-deprag-industrial2024-p16"
		],
		"workingPressureBar": [
			"october3d-tools-deprag-industrial2024-p16"
		],
		"recommendedHose": [
			"october3d-tools-deprag-industrial2024-p16"
		],
		"demandExplanation": [
			"october3d-tools-deprag-industrial2024-p16"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
