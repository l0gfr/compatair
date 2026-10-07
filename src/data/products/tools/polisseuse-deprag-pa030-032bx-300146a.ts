import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "polisseuse-deprag-pa030-032bx-300146a",
	"slug": "polisseuse-deprag-pa030-032bx-300146a",
	"categoryId": "polisseuse",
	"category": "polisseuse",
	"label": "DEPRAG PA030-032BX (réf. 300146A)",
	"brand": "DEPRAG",
	"model": "PA030-032BX",
	"mpn": "300146A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/polisseuse-deprag-pa030-032bx-300146a.svg",
		"alt": "Repères techniques : DEPRAG PA030-032BX (réf. 300146A)",
		"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "deprag-pa030-032bx",
		"label": "Référence 300146A",
		"distinguishingAttributes": {
			"reference": "300146A",
			"Puissance déclarée, kW (hp)": "0,30 (.40)",
			"Vitesse à vide, tr/min": "3 200"
		}
	},
	"editorial": {
		"overview": "DEPRAG PA030-032BX (réf. 300146A). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Puissance déclarée, kW (hp) : 0,30 (.40).",
			"Vitesse à vide, tr/min : 3 200.",
			"Diamètre du plateau en caoutchouc, mm : 120 (4.72).",
			"Diamètre intérieur du flexible, mm (in) : 6 (.24).",
			"Masse sans raccord d’air, kg (lbs) : 0,8 (1.76)."
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
			"value": "0,30 (.40)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p16"
			]
		},
		{
			"label": "Vitesse à vide, tr/min",
			"value": "3 200",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p16"
			]
		},
		{
			"label": "Diamètre du plateau en caoutchouc, mm",
			"value": "120 (4.72)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p16"
			]
		},
		{
			"label": "Diamètre intérieur du flexible, mm (in)",
			"value": "6 (.24)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p16"
			]
		},
		{
			"label": "Masse sans raccord d’air, kg (lbs)",
			"value": "0,8 (1.76)",
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
