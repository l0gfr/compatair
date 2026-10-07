import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "derouilleur-a-aiguilles-deprag-sn10-831124a",
	"slug": "derouilleur-a-aiguilles-deprag-sn10-831124a",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "DEPRAG SN10 (réf. 831124A)",
	"brand": "DEPRAG",
	"model": "SN10",
	"mpn": "831124A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/derouilleur-a-aiguilles-deprag-sn10-831124a.svg",
		"alt": "Repères techniques : DEPRAG SN10 (réf. 831124A)",
		"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "deprag-sn10",
		"label": "Référence 831124A",
		"distinguishingAttributes": {
			"reference": "831124A",
			"Nombre d’aiguilles": "29",
			"Dimensions des aiguilles, mm (in)": "Ø 2x150 (Ø.08x5.91)"
		}
	},
	"editorial": {
		"overview": "DEPRAG SN10 (réf. 831124A). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Nombre d’aiguilles : 29.",
			"Dimensions des aiguilles, mm (in) : Ø 2x150 (Ø.08x5.91).",
			"Fréquence des impacts, impacts/min : 4 000.",
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
			"label": "Nombre d’aiguilles",
			"value": "29",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p25"
			]
		},
		{
			"label": "Dimensions des aiguilles, mm (in)",
			"value": "Ø 2x150 (Ø.08x5.91)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p25"
			]
		},
		{
			"label": "Fréquence des impacts, impacts/min",
			"value": "4 000",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p25"
			]
		},
		{
			"label": "Diamètre intérieur du flexible, mm (in)",
			"value": "10 (.39)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p25"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La page technique ne documente pas un point de consommation à pression connue.",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p25"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-deprag-industrial2024-p25",
			"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf#page=25",
			"sourceLabel": "DEPRAG, document technique officiel, page PDF 25",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 7de335b0a26e42cbb8bdc58dd6786731f8acb69bc92a8435a472f9e3e2ac3621. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-deprag-industrial2024-p25"
		],
		"workingPressureBar": [
			"october3d-tools-deprag-industrial2024-p25"
		],
		"recommendedHose": [
			"october3d-tools-deprag-industrial2024-p25"
		],
		"demandExplanation": [
			"october3d-tools-deprag-industrial2024-p25"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
