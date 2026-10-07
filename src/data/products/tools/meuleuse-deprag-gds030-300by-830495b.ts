import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-deprag-gds030-300by-830495b",
	"slug": "meuleuse-deprag-gds030-300by-830495b",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "DEPRAG GDS030-300BY (réf. 830495B)",
	"brand": "DEPRAG",
	"model": "GDS030-300BY",
	"mpn": "830495B",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-deprag-gds030-300by-830495b.svg",
		"alt": "Repères techniques : DEPRAG GDS030-300BY (réf. 830495B)",
		"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "deprag-gds030-300by",
		"label": "Référence 830495B",
		"distinguishingAttributes": {
			"reference": "830495B",
			"Puissance déclarée, kW (hp)": "0,3 (.4)",
			"Vitesse à vide, tr/min": "30 000"
		}
	},
	"editorial": {
		"overview": "DEPRAG GDS030-300BY (réf. 830495B). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Puissance déclarée, kW (hp) : 0,3 (.4).",
			"Vitesse à vide, tr/min : 30 000.",
			"Diamètre intérieur du flexible, mm (in) : 6 (.24).",
			"Masse sans raccord d’air, kg (lbs) : 0,4 (.88).",
			"Diamètre maximal de meule sur tige, mm (in) : 20 (.79).",
			"Diamètre maximal de fraise, mm (in) : 6 (.24)."
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
				"october3d-tools-deprag-industrial2024-p6"
			]
		},
		{
			"label": "Vitesse à vide, tr/min",
			"value": "30 000",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p6"
			]
		},
		{
			"label": "Diamètre intérieur du flexible, mm (in)",
			"value": "6 (.24)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p6"
			]
		},
		{
			"label": "Masse sans raccord d’air, kg (lbs)",
			"value": "0,4 (.88)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p6"
			]
		},
		{
			"label": "Diamètre maximal de meule sur tige, mm (in)",
			"value": "20 (.79)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p6"
			]
		},
		{
			"label": "Diamètre maximal de fraise, mm (in)",
			"value": "6 (.24)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p6"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La page technique ne documente pas un point de consommation à pression connue.",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p6"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-deprag-industrial2024-p6",
			"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf#page=6",
			"sourceLabel": "DEPRAG, document technique officiel, page PDF 6",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 7de335b0a26e42cbb8bdc58dd6786731f8acb69bc92a8435a472f9e3e2ac3621. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-deprag-industrial2024-p6"
		],
		"workingPressureBar": [
			"october3d-tools-deprag-industrial2024-p6"
		],
		"recommendedHose": [
			"october3d-tools-deprag-industrial2024-p6"
		],
		"demandExplanation": [
			"october3d-tools-deprag-industrial2024-p6"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
