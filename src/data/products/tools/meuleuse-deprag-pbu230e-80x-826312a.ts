import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-deprag-pbu230e-80x-826312a",
	"slug": "meuleuse-deprag-pbu230e-80x-826312a",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "DEPRAG PBU230E-80X (réf. 826312A)",
	"brand": "DEPRAG",
	"model": "PBU230E-80X",
	"mpn": "826312A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"recommendedHose": {
		"innerDiameterMm": 16
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-deprag-pbu230e-80x-826312a.svg",
		"alt": "Repères techniques : DEPRAG PBU230E-80X (réf. 826312A)",
		"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "deprag-pbu230e-80x",
		"label": "Référence 826312A",
		"distinguishingAttributes": {
			"reference": "826312A",
			"Puissance déclarée, kW (hp)": "2,35 (3.15)",
			"Vitesse à vide, tr/min": "6 600"
		}
	},
	"editorial": {
		"overview": "DEPRAG PBU230E-80X (réf. 826312A). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Puissance déclarée, kW (hp) : 2,35 (3.15).",
			"Vitesse à vide, tr/min : 6 600.",
			"Diamètre intérieur du flexible, mm (in) : 16 (.63).",
			"Masse sans raccord d’air, kg (lbs) : 5,5 (12.13).",
			"Diamètres extérieur et intérieur du disque, mm (in) : 230/22,23 (9.06/.87).",
			"Épaisseur maximale du disque, mm (in) : 10 (.39).",
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
			"value": "2,35 (3.15)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p12"
			]
		},
		{
			"label": "Vitesse à vide, tr/min",
			"value": "6 600",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p12"
			]
		},
		{
			"label": "Diamètre intérieur du flexible, mm (in)",
			"value": "16 (.63)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p12"
			]
		},
		{
			"label": "Masse sans raccord d’air, kg (lbs)",
			"value": "5,5 (12.13)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p12"
			]
		},
		{
			"label": "Diamètres extérieur et intérieur du disque, mm (in)",
			"value": "230/22,23 (9.06/.87)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p12"
			]
		},
		{
			"label": "Épaisseur maximale du disque, mm (in)",
			"value": "10 (.39)",
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
