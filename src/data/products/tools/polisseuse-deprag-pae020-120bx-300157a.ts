import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "polisseuse-deprag-pae020-120bx-300157a",
	"slug": "polisseuse-deprag-pae020-120bx-300157a",
	"categoryId": "polisseuse",
	"category": "polisseuse",
	"label": "DEPRAG PAE020-120BX (réf. 300157A)",
	"brand": "DEPRAG",
	"model": "PAE020-120BX",
	"mpn": "300157A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/polisseuse-deprag-pae020-120bx-300157a.svg",
		"alt": "Repères techniques : DEPRAG PAE020-120BX (réf. 300157A)",
		"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "deprag-pae020-120bx",
		"label": "Référence 300157A",
		"distinguishingAttributes": {
			"reference": "300157A",
			"Puissance déclarée, kW (hp)": "0,20 (.27)",
			"Vitesse à vide, tr/min": "12 000"
		}
	},
	"editorial": {
		"overview": "DEPRAG PAE020-120BX (réf. 300157A). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Puissance déclarée, kW (hp) : 0,20 (.27).",
			"Vitesse à vide, tr/min : 12 000.",
			"Diamètre du disque abrasif, mm (in) : 75 (2.96).",
			"Diamètre intérieur du flexible, mm (in) : 6 (.24).",
			"Masse sans raccord d’air, kg (lbs) : 1,0 (2.2)."
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
			"value": "0,20 (.27)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p17"
			]
		},
		{
			"label": "Vitesse à vide, tr/min",
			"value": "12 000",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p17"
			]
		},
		{
			"label": "Diamètre du disque abrasif, mm (in)",
			"value": "75 (2.96)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p17"
			]
		},
		{
			"label": "Diamètre intérieur du flexible, mm (in)",
			"value": "6 (.24)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p17"
			]
		},
		{
			"label": "Masse sans raccord d’air, kg (lbs)",
			"value": "1,0 (2.2)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p17"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La page technique ne documente pas un point de consommation à pression connue.",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p17"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-deprag-industrial2024-p17",
			"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf#page=17",
			"sourceLabel": "DEPRAG, document technique officiel, page PDF 17",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 7de335b0a26e42cbb8bdc58dd6786731f8acb69bc92a8435a472f9e3e2ac3621. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-deprag-industrial2024-p17"
		],
		"workingPressureBar": [
			"october3d-tools-deprag-industrial2024-p17"
		],
		"recommendedHose": [
			"october3d-tools-deprag-industrial2024-p17"
		],
		"demandExplanation": [
			"october3d-tools-deprag-industrial2024-p17"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
