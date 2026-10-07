import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-deprag-dc020-040szc-3027201l",
	"slug": "perceuse-deprag-dc020-040szc-3027201l",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "DEPRAG DC020-040SZC (réf. 3027201L)",
	"brand": "DEPRAG",
	"model": "DC020-040SZC",
	"mpn": "3027201L",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-deprag-dc020-040szc-3027201l.svg",
		"alt": "Repères techniques : DEPRAG DC020-040SZC (réf. 3027201L)",
		"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "deprag-dc020-040szc",
		"label": "Référence 3027201L",
		"distinguishingAttributes": {
			"reference": "3027201L",
			"Vitesse à vide, tr/min": "4 000",
			"Diamètre intérieur du flexible, mm (in)": "6 (.24)"
		}
	},
	"editorial": {
		"overview": "DEPRAG DC020-040SZC (réf. 3027201L). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Vitesse à vide, tr/min : 4 000.",
			"Diamètre intérieur du flexible, mm (in) : 6 (.24).",
			"Masse sans raccord d’air, kg (lbs) : 0,8 (1.76).",
			"Capacité de perçage dans l’acier, mm (in) : 3 (.12).",
			"Capacité de perçage dans l’aluminium, mm (in) : 4,48 (.18)."
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
			"label": "Vitesse à vide, tr/min",
			"value": "4 000",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p19"
			]
		},
		{
			"label": "Diamètre intérieur du flexible, mm (in)",
			"value": "6 (.24)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p19"
			]
		},
		{
			"label": "Masse sans raccord d’air, kg (lbs)",
			"value": "0,8 (1.76)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p19"
			]
		},
		{
			"label": "Capacité de perçage dans l’acier, mm (in)",
			"value": "3 (.12)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p19"
			]
		},
		{
			"label": "Capacité de perçage dans l’aluminium, mm (in)",
			"value": "4,48 (.18)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p19"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La page technique ne documente pas un point de consommation à pression connue.",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p19"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-deprag-industrial2024-p19",
			"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf#page=19",
			"sourceLabel": "DEPRAG, document technique officiel, page PDF 19",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 7de335b0a26e42cbb8bdc58dd6786731f8acb69bc92a8435a472f9e3e2ac3621. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-deprag-industrial2024-p19"
		],
		"workingPressureBar": [
			"october3d-tools-deprag-industrial2024-p19"
		],
		"recommendedHose": [
			"october3d-tools-deprag-industrial2024-p19"
		],
		"demandExplanation": [
			"october3d-tools-deprag-industrial2024-p19"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
