import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-deprag-pbu115c-80z-826309a",
	"slug": "meuleuse-deprag-pbu115c-80z-826309a",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "DEPRAG PBU115C-80Z (réf. 826309A)",
	"brand": "DEPRAG",
	"model": "PBU115C-80Z",
	"mpn": "826309A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-deprag-pbu115c-80z-826309a.svg",
		"alt": "Repères techniques : DEPRAG PBU115C-80Z (réf. 826309A)",
		"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "deprag-pbu115c-80z",
		"label": "Référence 826309A",
		"distinguishingAttributes": {
			"reference": "826309A",
			"Puissance déclarée, kW (hp)": "0,5 (.67)",
			"Vitesse à vide, tr/min": "13 200"
		}
	},
	"editorial": {
		"overview": "DEPRAG PBU115C-80Z (réf. 826309A). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Puissance déclarée, kW (hp) : 0,5 (.67).",
			"Vitesse à vide, tr/min : 13 200.",
			"Diamètre intérieur du flexible, mm (in) : 10 (.39).",
			"Masse sans raccord d’air, kg (lbs) : 1,9 (4.19).",
			"Diamètres extérieur et intérieur du disque, mm (in) : 115/22,23 (4.53/.87).",
			"Épaisseur maximale du disque, mm (in) : 8 (.31).",
			"Vitesse périphérique maximale, m/s : 80."
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
				"october3d-tools-deprag-industrial2024-p12"
			]
		},
		{
			"label": "Vitesse à vide, tr/min",
			"value": "13 200",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p12"
			]
		},
		{
			"label": "Diamètre intérieur du flexible, mm (in)",
			"value": "10 (.39)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p12"
			]
		},
		{
			"label": "Masse sans raccord d’air, kg (lbs)",
			"value": "1,9 (4.19)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p12"
			]
		},
		{
			"label": "Diamètres extérieur et intérieur du disque, mm (in)",
			"value": "115/22,23 (4.53/.87)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p12"
			]
		},
		{
			"label": "Épaisseur maximale du disque, mm (in)",
			"value": "8 (.31)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p12"
			]
		},
		{
			"label": "Vitesse périphérique maximale, m/s",
			"value": "80",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p12"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La page technique ne documente pas un point de consommation à pression connue.",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p12"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-deprag-industrial2024-p12",
			"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf#page=12",
			"sourceLabel": "DEPRAG, document technique officiel, page PDF 12",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 7de335b0a26e42cbb8bdc58dd6786731f8acb69bc92a8435a472f9e3e2ac3621. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-deprag-industrial2024-p12"
		],
		"workingPressureBar": [
			"october3d-tools-deprag-industrial2024-p12"
		],
		"recommendedHose": [
			"october3d-tools-deprag-industrial2024-p12"
		],
		"demandExplanation": [
			"october3d-tools-deprag-industrial2024-p12"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
