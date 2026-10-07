import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cisaille-deprag-s16-320y-3240971c",
	"slug": "cisaille-deprag-s16-320y-3240971c",
	"categoryId": "cisaille",
	"category": "cisaille",
	"label": "DEPRAG S16-320Y (réf. 3240971C)",
	"brand": "DEPRAG",
	"model": "S16-320Y",
	"mpn": "3240971C",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cisaille-deprag-s16-320y-3240971c.svg",
		"alt": "Repères techniques : DEPRAG S16-320Y (réf. 3240971C)",
		"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "deprag-s16-320y",
		"label": "Référence 3240971C",
		"distinguishingAttributes": {
			"reference": "3240971C",
			"Puissance déclarée, kW (hp)": "0,32 (.43)",
			"Épaisseur maximale acier à 400 N/mm², mm (in)": "1,6 (.06)"
		}
	},
	"editorial": {
		"overview": "DEPRAG S16-320Y (réf. 3240971C). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Puissance déclarée, kW (hp) : 0,32 (.43).",
			"Épaisseur maximale acier à 400 N/mm², mm (in) : 1,6 (.06).",
			"Épaisseur maximale acier à 600 N/mm², mm (in) : 1,2 (.05).",
			"Épaisseur maximale acier à 800 N/mm², mm (in) : 1 (.04).",
			"Épaisseur maximale aluminium à 250 N/mm², mm (in) : 2 (.08).",
			"Rayon minimal de coupe, mm (in) : 15 (.59).",
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
			"label": "Puissance déclarée, kW (hp)",
			"value": "0,32 (.43)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p26"
			]
		},
		{
			"label": "Épaisseur maximale acier à 400 N/mm², mm (in)",
			"value": "1,6 (.06)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p26"
			]
		},
		{
			"label": "Épaisseur maximale acier à 600 N/mm², mm (in)",
			"value": "1,2 (.05)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p26"
			]
		},
		{
			"label": "Épaisseur maximale acier à 800 N/mm², mm (in)",
			"value": "1 (.04)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p26"
			]
		},
		{
			"label": "Épaisseur maximale aluminium à 250 N/mm², mm (in)",
			"value": "2 (.08)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p26"
			]
		},
		{
			"label": "Rayon minimal de coupe, mm (in)",
			"value": "15 (.59)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p26"
			]
		},
		{
			"label": "Diamètre intérieur du flexible, mm (in)",
			"value": "6 (.24)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p26"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La page technique ne documente pas un point de consommation à pression connue.",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p26"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-deprag-industrial2024-p26",
			"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf#page=26",
			"sourceLabel": "DEPRAG, document technique officiel, page PDF 26",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 7de335b0a26e42cbb8bdc58dd6786731f8acb69bc92a8435a472f9e3e2ac3621. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-deprag-industrial2024-p26"
		],
		"workingPressureBar": [
			"october3d-tools-deprag-industrial2024-p26"
		],
		"recommendedHose": [
			"october3d-tools-deprag-industrial2024-p26"
		],
		"demandExplanation": [
			"october3d-tools-deprag-industrial2024-p26"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
