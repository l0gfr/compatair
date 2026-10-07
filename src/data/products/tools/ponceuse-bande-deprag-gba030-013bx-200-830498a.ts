import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-bande-deprag-gba030-013bx-200-830498a",
	"slug": "ponceuse-bande-deprag-gba030-013bx-200-830498a",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "DEPRAG GBA030-013BX-200 (réf. 830498A)",
	"brand": "DEPRAG",
	"model": "GBA030-013BX-200",
	"mpn": "830498A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"recommendedHose": {
		"innerDiameterMm": 8
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-bande-deprag-gba030-013bx-200-830498a.svg",
		"alt": "Repères techniques : DEPRAG GBA030-013BX-200 (réf. 830498A)",
		"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "deprag-gba030-013bx-200",
		"label": "Référence 830498A",
		"distinguishingAttributes": {
			"reference": "830498A",
			"Puissance déclarée, kW (hp)": "0,3 (.4)",
			"Vitesse à vide, tr/min": "20 000"
		}
	},
	"editorial": {
		"overview": "DEPRAG GBA030-013BX-200 (réf. 830498A). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Puissance déclarée, kW (hp) : 0,3 (.4).",
			"Vitesse à vide, tr/min : 20 000.",
			"Diamètre intérieur du flexible, mm (in) : 8 (.32).",
			"Masse sans raccord d’air, kg (lbs) : 0,9 (1.98).",
			"Vitesse de bande, m/s (ft/s) : 19 (62.34)."
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
				"october3d-tools-deprag-industrial2024-p14"
			]
		},
		{
			"label": "Vitesse à vide, tr/min",
			"value": "20 000",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p14"
			]
		},
		{
			"label": "Diamètre intérieur du flexible, mm (in)",
			"value": "8 (.32)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p14"
			]
		},
		{
			"label": "Masse sans raccord d’air, kg (lbs)",
			"value": "0,9 (1.98)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p14"
			]
		},
		{
			"label": "Vitesse de bande, m/s (ft/s)",
			"value": "19 (62.34)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p14"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La page technique ne documente pas un point de consommation à pression connue.",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p14"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-deprag-industrial2024-p14",
			"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf#page=14",
			"sourceLabel": "DEPRAG, document technique officiel, page PDF 14",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 7de335b0a26e42cbb8bdc58dd6786731f8acb69bc92a8435a472f9e3e2ac3621. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-deprag-industrial2024-p14"
		],
		"workingPressureBar": [
			"october3d-tools-deprag-industrial2024-p14"
		],
		"recommendedHose": [
			"october3d-tools-deprag-industrial2024-p14"
		],
		"demandExplanation": [
			"october3d-tools-deprag-industrial2024-p14"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
