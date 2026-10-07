import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-deprag-gs508-120bx-6061228a",
	"slug": "meuleuse-deprag-gs508-120bx-6061228a",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "DEPRAG GS508-120BX (réf. 6061228A)",
	"brand": "DEPRAG",
	"model": "GS508-120BX",
	"mpn": "6061228A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"recommendedHose": {
		"innerDiameterMm": 13
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-deprag-gs508-120bx-6061228a.svg",
		"alt": "Repères techniques : DEPRAG GS508-120BX (réf. 6061228A)",
		"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "deprag-gs508-120bx",
		"label": "Référence 6061228A",
		"distinguishingAttributes": {
			"reference": "6061228A",
			"Puissance déclarée, kW (hp)": "1,2 (1.61)",
			"Vitesse à vide, tr/min": "12 000"
		}
	},
	"editorial": {
		"overview": "DEPRAG GS508-120BX (réf. 6061228A). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Puissance déclarée, kW (hp) : 1,2 (1.61).",
			"Vitesse à vide, tr/min : 12 000.",
			"Diamètre intérieur du flexible, mm (in) : 13 (.51).",
			"Masse sans raccord d’air, kg (lbs) : 2,2 (4.9).",
			"Vitesse périphérique maximale, m/s (ft/s) : 50 (164).",
			"Diamètres extérieur et intérieur, mm (in) : 80/20 (3\"/.79).",
			"Largeur de meule, mm (in) : 20÷25 (.79÷.98)."
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
				"october3d-tools-deprag-industrial2024-p11"
			]
		},
		{
			"label": "Vitesse à vide, tr/min",
			"value": "12 000",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p11"
			]
		},
		{
			"label": "Diamètre intérieur du flexible, mm (in)",
			"value": "13 (.51)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p11"
			]
		},
		{
			"label": "Masse sans raccord d’air, kg (lbs)",
			"value": "2,2 (4.9)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p11"
			]
		},
		{
			"label": "Vitesse périphérique maximale, m/s (ft/s)",
			"value": "50 (164)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p11"
			]
		},
		{
			"label": "Diamètres extérieur et intérieur, mm (in)",
			"value": "80/20 (3\"/.79)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p11"
			]
		},
		{
			"label": "Largeur de meule, mm (in)",
			"value": "20÷25 (.79÷.98)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p11"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La page technique ne documente pas un point de consommation à pression connue.",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p11"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-deprag-industrial2024-p11",
			"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf#page=11",
			"sourceLabel": "DEPRAG, document technique officiel, page PDF 11",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 7de335b0a26e42cbb8bdc58dd6786731f8acb69bc92a8435a472f9e3e2ac3621. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-deprag-industrial2024-p11"
		],
		"workingPressureBar": [
			"october3d-tools-deprag-industrial2024-p11"
		],
		"recommendedHose": [
			"october3d-tools-deprag-industrial2024-p11"
		],
		"demandExplanation": [
			"october3d-tools-deprag-industrial2024-p11"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
