import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-deprag-gds050-120wxi-6061009a",
	"slug": "meuleuse-deprag-gds050-120wxi-6061009a",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "DEPRAG GDS050-120WXI (réf. 6061009A)",
	"brand": "DEPRAG",
	"model": "GDS050-120WXI",
	"mpn": "6061009A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-deprag-gds050-120wxi-6061009a.svg",
		"alt": "Repères techniques : DEPRAG GDS050-120WXI (réf. 6061009A)",
		"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "deprag-gds050-120wxi",
		"label": "Référence 6061009A",
		"distinguishingAttributes": {
			"reference": "6061009A",
			"Puissance déclarée, kW (hp)": "0,5 (.67)",
			"Vitesse à vide, tr/min": "12 000"
		}
	},
	"editorial": {
		"overview": "DEPRAG GDS050-120WXI (réf. 6061009A). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Puissance déclarée, kW (hp) : 0,5 (.67).",
			"Vitesse à vide, tr/min : 12 000.",
			"Diamètre intérieur du flexible, mm (in) : 10 (.39).",
			"Masse sans raccord d’air, kg (lbs) : 1,0 (2.2).",
			"Diamètre maximal de meule sur tige, mm (in) : 32 (1.26).",
			"Diamètre maximal de fraise, mm (in) : 16 (.63)."
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
			"value": "0,5 (.67)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p7"
			]
		},
		{
			"label": "Vitesse à vide, tr/min",
			"value": "12 000",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p7"
			]
		},
		{
			"label": "Diamètre intérieur du flexible, mm (in)",
			"value": "10 (.39)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p7"
			]
		},
		{
			"label": "Masse sans raccord d’air, kg (lbs)",
			"value": "1,0 (2.2)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p7"
			]
		},
		{
			"label": "Diamètre maximal de meule sur tige, mm (in)",
			"value": "32 (1.26)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p7"
			]
		},
		{
			"label": "Diamètre maximal de fraise, mm (in)",
			"value": "16 (.63)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p7"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La page technique ne documente pas un point de consommation à pression connue.",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p7"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-deprag-industrial2024-p7",
			"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf#page=7",
			"sourceLabel": "DEPRAG, document technique officiel, page PDF 7",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 7de335b0a26e42cbb8bdc58dd6786731f8acb69bc92a8435a472f9e3e2ac3621. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-deprag-industrial2024-p7"
		],
		"workingPressureBar": [
			"october3d-tools-deprag-industrial2024-p7"
		],
		"recommendedHose": [
			"october3d-tools-deprag-industrial2024-p7"
		],
		"demandExplanation": [
			"october3d-tools-deprag-industrial2024-p7"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
