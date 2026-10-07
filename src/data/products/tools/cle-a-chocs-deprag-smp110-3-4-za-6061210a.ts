import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-deprag-smp110-3-4-za-6061210a",
	"slug": "cle-a-chocs-deprag-smp110-3-4-za-6061210a",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "DEPRAG SMP110-3/4\"ZA (réf. 6061210A)",
	"brand": "DEPRAG",
	"model": "SMP110-3/4\"ZA",
	"mpn": "6061210A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"recommendedHose": {
		"innerDiameterMm": 12
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-deprag-smp110-3-4-za-6061210a.svg",
		"alt": "Repères techniques : DEPRAG SMP110-3/4\"ZA (réf. 6061210A)",
		"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "deprag-smp110-3-4-za",
		"label": "Référence 6061210A",
		"distinguishingAttributes": {
			"reference": "6061210A",
			"Dimensions de vis visées": "M10 - M30",
			"Couple maximal déclaré, Nm (ft.lbs)": "1 100 (811)"
		}
	},
	"editorial": {
		"overview": "DEPRAG SMP110-3/4\"ZA (réf. 6061210A). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Dimensions de vis visées : M10 - M30.",
			"Couple maximal déclaré, Nm (ft.lbs) : 1 100 (811).",
			"Plage de couple de travail, Nm (ft.lbs) : 150 - 920 (111 - 679).",
			"Vitesse à vide, tr/min : 6 000.",
			"Fréquence des impacts, Hz : 15.",
			"Diamètre intérieur du flexible, mm (in) : 12 (.47)."
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
			"value": "M10 - M30",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p22"
			]
		},
		{
			"label": "Couple maximal déclaré, Nm (ft.lbs)",
			"value": "1 100 (811)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p22"
			]
		},
		{
			"label": "Plage de couple de travail, Nm (ft.lbs)",
			"value": "150 - 920 (111 - 679)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p22"
			]
		},
		{
			"label": "Vitesse à vide, tr/min",
			"value": "6 000",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p22"
			]
		},
		{
			"label": "Fréquence des impacts, Hz",
			"value": "15",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p22"
			]
		},
		{
			"label": "Diamètre intérieur du flexible, mm (in)",
			"value": "12 (.47)",
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
