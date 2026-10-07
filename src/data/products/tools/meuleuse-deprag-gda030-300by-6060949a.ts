import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-deprag-gda030-300by-6060949a",
	"slug": "meuleuse-deprag-gda030-300by-6060949a",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "DEPRAG GDA030-300BY (réf. 6060949A)",
	"brand": "DEPRAG",
	"model": "GDA030-300BY",
	"mpn": "6060949A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"recommendedHose": {
		"innerDiameterMm": 8
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-deprag-gda030-300by-6060949a.svg",
		"alt": "Repères techniques : DEPRAG GDA030-300BY (réf. 6060949A)",
		"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "deprag-gda030-300by",
		"label": "Référence 6060949A",
		"distinguishingAttributes": {
			"reference": "6060949A",
			"Valeur de puissance publiée, intitulé W (hp) à confirmer": "0,3 (.40)",
			"Vitesse à vide, tr/min": "30 000"
		}
	},
	"editorial": {
		"overview": "DEPRAG GDA030-300BY (réf. 6060949A). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Valeur de puissance publiée, intitulé W (hp) à confirmer : 0,3 (.40).",
			"Vitesse à vide, tr/min : 30 000.",
			"Diamètre intérieur du flexible, mm (in) : 8 (.31).",
			"Masse sans raccord d’air, kg (lbs) : 0,5 (1.10).",
			"Diamètre maximal de meule sur tige, mm (in) : 20 (.79).",
			"Diamètre maximal de fraise, mm (in) : 6 (.24)."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
			"Le tableau fournit des caractéristiques propres à cette référence, sans consommation d’air dans un régime mesuré à pression connue.",
			"Une pression générale de fonctionnement ne remplace pas un point de mesure de consommation.",
			"Les valeurs entre parenthèses sont reproduites dans l’unité alternative du document ; elles ne servent à aucune conversion automatique.",
			"Certaines lignes de puissance portent un libellé W dont la cohérence avec la valeur et les hp doit être confirmée ; cette puissance n’entre pas dans le calcul de compatibilité.",
			"Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Valeur de puissance publiée, intitulé W (hp) à confirmer",
			"value": "0,3 (.40)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p10"
			]
		},
		{
			"label": "Vitesse à vide, tr/min",
			"value": "30 000",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p10"
			]
		},
		{
			"label": "Diamètre intérieur du flexible, mm (in)",
			"value": "8 (.31)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p10"
			]
		},
		{
			"label": "Masse sans raccord d’air, kg (lbs)",
			"value": "0,5 (1.10)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p10"
			]
		},
		{
			"label": "Diamètre maximal de meule sur tige, mm (in)",
			"value": "20 (.79)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p10"
			]
		},
		{
			"label": "Diamètre maximal de fraise, mm (in)",
			"value": "6 (.24)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p10"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La page technique ne documente pas un point de consommation à pression connue.",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p10"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-deprag-industrial2024-p10",
			"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf#page=10",
			"sourceLabel": "DEPRAG, document technique officiel, page PDF 10",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 7de335b0a26e42cbb8bdc58dd6786731f8acb69bc92a8435a472f9e3e2ac3621. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-deprag-industrial2024-p10"
		],
		"workingPressureBar": [
			"october3d-tools-deprag-industrial2024-p10"
		],
		"recommendedHose": [
			"october3d-tools-deprag-industrial2024-p10"
		],
		"demandExplanation": [
			"october3d-tools-deprag-industrial2024-p10"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
