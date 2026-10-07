import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-deprag-gs315-240bx-6061141a",
	"slug": "meuleuse-deprag-gs315-240bx-6061141a",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "DEPRAG GS315-240BX (réf. 6061141A)",
	"brand": "DEPRAG",
	"model": "GS315-240BX",
	"mpn": "6061141A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"recommendedHose": {
		"innerDiameterMm": 16
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-deprag-gs315-240bx-6061141a.svg",
		"alt": "Repères techniques : DEPRAG GS315-240BX (réf. 6061141A)",
		"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "deprag-gs315-240bx",
		"label": "Référence 6061141A",
		"distinguishingAttributes": {
			"reference": "6061141A",
			"Puissance déclarée, kW (hp)": "2,4 (3.22)",
			"Vitesse à vide, tr/min": "4 000"
		}
	},
	"editorial": {
		"overview": "DEPRAG GS315-240BX (réf. 6061141A). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Puissance déclarée, kW (hp) : 2,4 (3.22).",
			"Vitesse à vide, tr/min : 4 000.",
			"Diamètre intérieur du flexible, mm (in) : 16 (.63).",
			"Masse sans raccord d’air, kg (lbs) : 6,5 (14.3).",
			"Vitesse périphérique maximale, m/s (ft/s) : 32 (105).",
			"Diamètres extérieur et intérieur, mm (in) : 150/20 (6\"/.79).",
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
			"value": "2,4 (3.22)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p11"
			]
		},
		{
			"label": "Vitesse à vide, tr/min",
			"value": "4 000",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p11"
			]
		},
		{
			"label": "Diamètre intérieur du flexible, mm (in)",
			"value": "16 (.63)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p11"
			]
		},
		{
			"label": "Masse sans raccord d’air, kg (lbs)",
			"value": "6,5 (14.3)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p11"
			]
		},
		{
			"label": "Vitesse périphérique maximale, m/s (ft/s)",
			"value": "32 (105)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p11"
			]
		},
		{
			"label": "Diamètres extérieur et intérieur, mm (in)",
			"value": "150/20 (6\"/.79)",
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
