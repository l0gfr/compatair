import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "lime-alternative-deprag-fs905-630by-6061238a",
	"slug": "lime-alternative-deprag-fs905-630by-6061238a",
	"categoryId": "lime-alternative",
	"category": "lime-alternative",
	"label": "DEPRAG FS905-630BY (réf. 6061238A)",
	"brand": "DEPRAG",
	"model": "FS905-630BY",
	"mpn": "6061238A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/lime-alternative-deprag-fs905-630by-6061238a.svg",
		"alt": "Repères techniques : DEPRAG FS905-630BY (réf. 6061238A)",
		"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "deprag-fs905-630by",
		"label": "Référence 6061238A",
		"distinguishingAttributes": {
			"reference": "6061238A",
			"Cadence à vide, courses/min": "6 300",
			"Longueur de course, mm (in)": "9 (.35)"
		}
	},
	"editorial": {
		"overview": "DEPRAG FS905-630BY (réf. 6061238A). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Cadence à vide, courses/min : 6 300.",
			"Longueur de course, mm (in) : 9 (.35).",
			"Dimensions de queue de lime, mm (in) : 5 (.20).",
			"Diamètre intérieur du flexible, mm (in) : 6 (.24)."
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
			"label": "Cadence à vide, courses/min",
			"value": "6 300",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p32"
			]
		},
		{
			"label": "Longueur de course, mm (in)",
			"value": "9 (.35)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p32"
			]
		},
		{
			"label": "Dimensions de queue de lime, mm (in)",
			"value": "5 (.20)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p32"
			]
		},
		{
			"label": "Diamètre intérieur du flexible, mm (in)",
			"value": "6 (.24)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p32"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La page technique ne documente pas un point de consommation à pression connue.",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p32"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-deprag-industrial2024-p32",
			"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf#page=32",
			"sourceLabel": "DEPRAG, document technique officiel, page PDF 32",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 7de335b0a26e42cbb8bdc58dd6786731f8acb69bc92a8435a472f9e3e2ac3621. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-deprag-industrial2024-p32"
		],
		"workingPressureBar": [
			"october3d-tools-deprag-industrial2024-p32"
		],
		"recommendedHose": [
			"october3d-tools-deprag-industrial2024-p32"
		],
		"demandExplanation": [
			"october3d-tools-deprag-industrial2024-p32"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
