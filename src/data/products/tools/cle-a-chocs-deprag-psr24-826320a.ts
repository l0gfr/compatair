import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-deprag-psr24-826320a",
	"slug": "cle-a-chocs-deprag-psr24-826320a",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "DEPRAG PSR24 (réf. 826320A)",
	"brand": "DEPRAG",
	"model": "PSR24",
	"mpn": "826320A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-deprag-psr24-826320a.svg",
		"alt": "Repères techniques : DEPRAG PSR24 (réf. 826320A)",
		"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "deprag-psr24",
		"label": "Référence 826320A",
		"distinguishingAttributes": {
			"reference": "826320A",
			"Dimensions de vis visées": "M14 - M24",
			"Couple maximal déclaré, Nm (ft.lbs)": "680 (502)"
		}
	},
	"editorial": {
		"overview": "DEPRAG PSR24 (réf. 826320A). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Dimensions de vis visées : M14 - M24.",
			"Couple maximal déclaré, Nm (ft.lbs) : 680 (502).",
			"Vitesse à vide, tr/min : 16 500.",
			"Fréquence des impacts, Hz : 16.",
			"Diamètre intérieur du flexible, mm (in) : 10 (.39)."
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
			"label": "Dimensions de vis visées",
			"value": "M14 - M24",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p22"
			]
		},
		{
			"label": "Couple maximal déclaré, Nm (ft.lbs)",
			"value": "680 (502)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p22"
			]
		},
		{
			"label": "Vitesse à vide, tr/min",
			"value": "16 500",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p22"
			]
		},
		{
			"label": "Fréquence des impacts, Hz",
			"value": "16",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p22"
			]
		},
		{
			"label": "Diamètre intérieur du flexible, mm (in)",
			"value": "10 (.39)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p22"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La page technique ne documente pas un point de consommation à pression connue.",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p22"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-deprag-industrial2024-p22",
			"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf#page=22",
			"sourceLabel": "DEPRAG, document technique officiel, page PDF 22",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 7de335b0a26e42cbb8bdc58dd6786731f8acb69bc92a8435a472f9e3e2ac3621. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-deprag-industrial2024-p22"
		],
		"workingPressureBar": [
			"october3d-tools-deprag-industrial2024-p22"
		],
		"recommendedHose": [
			"october3d-tools-deprag-industrial2024-p22"
		],
		"demandExplanation": [
			"october3d-tools-deprag-industrial2024-p22"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
