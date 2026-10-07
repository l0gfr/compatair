import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-deprag-gds100-153w3xi-6060579a",
	"slug": "meuleuse-deprag-gds100-153w3xi-6060579a",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "DEPRAG GDS100-153W3XI (réf. 6060579A)",
	"brand": "DEPRAG",
	"model": "GDS100-153W3XI",
	"mpn": "6060579A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"recommendedHose": {
		"innerDiameterMm": 12
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-deprag-gds100-153w3xi-6060579a.svg",
		"alt": "Repères techniques : DEPRAG GDS100-153W3XI (réf. 6060579A)",
		"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "deprag-gds100-153w3xi",
		"label": "Référence 6060579A",
		"distinguishingAttributes": {
			"reference": "6060579A",
			"Puissance déclarée, kW (hp)": "1 (1.34)",
			"Vitesse à vide, tr/min": "15 300"
		}
	},
	"editorial": {
		"overview": "DEPRAG GDS100-153W3XI (réf. 6060579A). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Puissance déclarée, kW (hp) : 1 (1.34).",
			"Vitesse à vide, tr/min : 15 300.",
			"Diamètre intérieur du flexible, mm (in) : 12 (.47).",
			"Masse sans raccord d’air, kg (lbs) : 4,0 (8.82)."
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
			"value": "1 (1.34)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p9"
			]
		},
		{
			"label": "Vitesse à vide, tr/min",
			"value": "15 300",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p9"
			]
		},
		{
			"label": "Diamètre intérieur du flexible, mm (in)",
			"value": "12 (.47)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p9"
			]
		},
		{
			"label": "Masse sans raccord d’air, kg (lbs)",
			"value": "4,0 (8.82)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p9"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La page technique ne documente pas un point de consommation à pression connue.",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p9"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-deprag-industrial2024-p9",
			"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf#page=9",
			"sourceLabel": "DEPRAG, document technique officiel, page PDF 9",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 7de335b0a26e42cbb8bdc58dd6786731f8acb69bc92a8435a472f9e3e2ac3621. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-deprag-industrial2024-p9"
		],
		"workingPressureBar": [
			"october3d-tools-deprag-industrial2024-p9"
		],
		"recommendedHose": [
			"october3d-tools-deprag-industrial2024-p9"
		],
		"demandExplanation": [
			"october3d-tools-deprag-industrial2024-p9"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
