import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-deprag-smp140-3-4-xex-6061105a",
	"slug": "cle-a-chocs-deprag-smp140-3-4-xex-6061105a",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "DEPRAG SMP140-3/4\"XEX (réf. 6061105A)",
	"brand": "DEPRAG",
	"model": "SMP140-3/4\"XEX",
	"mpn": "6061105A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"recommendedHose": {
		"innerDiameterMm": 16
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-deprag-smp140-3-4-xex-6061105a.svg",
		"alt": "Repères techniques : DEPRAG SMP140-3/4\"XEX (réf. 6061105A)",
		"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "deprag-smp140-3-4-xex",
		"label": "Référence 6061105A",
		"distinguishingAttributes": {
			"reference": "6061105A",
			"Dimensions de vis visées": "M16 - M30",
			"Couple maximal déclaré, Nm": "1 400"
		}
	},
	"editorial": {
		"overview": "DEPRAG SMP140-3/4\"XEX (réf. 6061105A). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Dimensions de vis visées : M16 - M30.",
			"Couple maximal déclaré, Nm : 1 400.",
			"Vitesse à vide, tr/min : 4 600.",
			"Fréquence des impacts, Hz : 14.",
			"Carré d’entraînement, pouces : 3/4\".",
			"Diamètre intérieur du flexible, mm (in) : 16 (.63)."
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
			"label": "Dimensions de vis visées",
			"value": "M16 - M30",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p31"
			]
		},
		{
			"label": "Couple maximal déclaré, Nm",
			"value": "1 400",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p31"
			]
		},
		{
			"label": "Vitesse à vide, tr/min",
			"value": "4 600",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p31"
			]
		},
		{
			"label": "Fréquence des impacts, Hz",
			"value": "14",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p31"
			]
		},
		{
			"label": "Carré d’entraînement, pouces",
			"value": "3/4\"",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p31"
			]
		},
		{
			"label": "Diamètre intérieur du flexible, mm (in)",
			"value": "16 (.63)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p31"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La page technique ne documente pas un point de consommation à pression connue.",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p31"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-deprag-industrial2024-p31",
			"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf#page=31",
			"sourceLabel": "DEPRAG, document technique officiel, page PDF 31",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 7de335b0a26e42cbb8bdc58dd6786731f8acb69bc92a8435a472f9e3e2ac3621. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-deprag-industrial2024-p31"
		],
		"workingPressureBar": [
			"october3d-tools-deprag-industrial2024-p31"
		],
		"recommendedHose": [
			"october3d-tools-deprag-industrial2024-p31"
		],
		"demandExplanation": [
			"october3d-tools-deprag-industrial2024-p31"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
