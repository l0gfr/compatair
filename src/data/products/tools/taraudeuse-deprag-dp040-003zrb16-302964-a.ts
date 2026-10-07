import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "taraudeuse-deprag-dp040-003zrb16-302964-a",
	"slug": "taraudeuse-deprag-dp040-003zrb16-302964-a",
	"categoryId": "taraudeuse",
	"category": "taraudeuse",
	"label": "DEPRAG DP040-003ZRB16 (réf. 302964 A)",
	"brand": "DEPRAG",
	"model": "DP040-003ZRB16",
	"mpn": "302964 A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/taraudeuse-deprag-dp040-003zrb16-302964-a.svg",
		"alt": "Repères techniques : DEPRAG DP040-003ZRB16 (réf. 302964 A)",
		"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "deprag-dp040-003zrb16",
		"label": "Référence 302964 A",
		"distinguishingAttributes": {
			"reference": "302964 A",
			"Puissance déclarée, kW (hp)": "0,4 (.54)",
			"Vitesse à vide en rotation droite, tr/min": "300"
		}
	},
	"editorial": {
		"overview": "DEPRAG DP040-003ZRB16 (réf. 302964 A). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Puissance déclarée, kW (hp) : 0,4 (.54).",
			"Vitesse à vide en rotation droite, tr/min : 300.",
			"Vitesse à vide en rotation gauche, tr/min : 250.",
			"Taraudage dans l’acier : M14.",
			"Taraudage dans l’aluminium : M14.",
			"Diamètre intérieur du flexible, mm (in) : 10 (.39).",
			"Masse sans raccord d’air, kg (lbs) : 2,4 (5.29).",
			"Capacité du porte-taraud, mm : 3 - 9."
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
			"value": "0,4 (.54)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p21"
			]
		},
		{
			"label": "Vitesse à vide en rotation droite, tr/min",
			"value": "300",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p21"
			]
		},
		{
			"label": "Vitesse à vide en rotation gauche, tr/min",
			"value": "250",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p21"
			]
		},
		{
			"label": "Taraudage dans l’acier",
			"value": "M14",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p21"
			]
		},
		{
			"label": "Taraudage dans l’aluminium",
			"value": "M14",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p21"
			]
		},
		{
			"label": "Diamètre intérieur du flexible, mm (in)",
			"value": "10 (.39)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p21"
			]
		},
		{
			"label": "Masse sans raccord d’air, kg (lbs)",
			"value": "2,4 (5.29)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p21"
			]
		},
		{
			"label": "Capacité du porte-taraud, mm",
			"value": "3 - 9",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p21"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La page technique ne documente pas un point de consommation à pression connue.",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p21"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-deprag-industrial2024-p21",
			"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf#page=21",
			"sourceLabel": "DEPRAG, document technique officiel, page PDF 21",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 7de335b0a26e42cbb8bdc58dd6786731f8acb69bc92a8435a472f9e3e2ac3621. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-deprag-industrial2024-p21"
		],
		"workingPressureBar": [
			"october3d-tools-deprag-industrial2024-p21"
		],
		"recommendedHose": [
			"october3d-tools-deprag-industrial2024-p21"
		],
		"demandExplanation": [
			"october3d-tools-deprag-industrial2024-p21"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
