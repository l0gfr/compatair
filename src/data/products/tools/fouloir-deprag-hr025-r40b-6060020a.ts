import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fouloir-deprag-hr025-r40b-6060020a",
	"slug": "fouloir-deprag-hr025-r40b-6060020a",
	"categoryId": "fouloir",
	"category": "fouloir",
	"label": "DEPRAG HR025-R40B (réf. 6060020A)",
	"brand": "DEPRAG",
	"model": "HR025-R40B",
	"mpn": "6060020A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fouloir-deprag-hr025-r40b-6060020a-technical-20261115-followup.svg",
		"alt": "Repères techniques : DEPRAG HR025-R40B (réf. 6060020A)",
		"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 15 novembre 2026"
	},
	"variant": {
		"familyId": "deprag-hr025-r40b",
		"label": "Référence 6060020A",
		"distinguishingAttributes": {
			"reference": "6060020A",
			"Fréquence des impacts, impacts/min": "1 200",
			"Course du piston, mm (in)": "80 (3.15)"
		}
	},
	"editorial": {
		"overview": "Le fouloir HR025-R40B est prévu pour le travail sur table et les petites surfaces, notamment les petites boîtes à noyaux. Il associe une course de 80 mm à 1 200 coups/min pour 2,5 kg. Les HR042/069-MK2B ont un cône Morse 2 et une course de 120 mm ; ce montage n’est pas attribué au HR025.",
		"verifiedFacts": [
			"Fréquence des impacts, impacts/min : 1 200.",
			"Course du piston, mm (in) : 80 (3.15).",
			"Diamètre du piston, mm (in) : 20 (.63).",
			"Diamètre intérieur du flexible, mm (in) : 10 (.39).",
			"Masse hors raccord d’air : 2,5 kg.",
			"Montage Morse : Non indiqué pour HR025-R40B ; ne pas reprendre le cône 2 des HR042/069.",
			"Divergence d’unité dans le document : Diamètre piston imprimé : 20 mm (.63 in), conversion non concordante ; ne pas convertir automatiquement."
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
			"label": "Fréquence des impacts, impacts/min",
			"value": "1 200",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p24"
			]
		},
		{
			"label": "Course du piston, mm (in)",
			"value": "80 (3.15)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p24"
			]
		},
		{
			"label": "Diamètre du piston, mm (in)",
			"value": "20 (.63)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p24"
			]
		},
		{
			"label": "Diamètre intérieur du flexible, mm (in)",
			"value": "10 (.39)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p24"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La page technique ne documente pas un point de consommation à pression connue.",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p24"
			]
		},
		{
			"label": "Masse hors raccord d’air",
			"value": "2,5 kg",
			"evidenceIds": [
				"review:2026-11-12-technical:fouloir-deprag-hr025-r40b-6060020a:0"
			]
		},
		{
			"label": "Montage Morse",
			"value": "Non indiqué pour HR025-R40B ; ne pas reprendre le cône 2 des HR042/069",
			"evidenceIds": [
				"review:2026-11-12-technical:fouloir-deprag-hr025-r40b-6060020a:0"
			]
		},
		{
			"label": "Divergence d’unité dans le document",
			"value": "Diamètre piston imprimé : 20 mm (.63 in), conversion non concordante ; ne pas convertir automatiquement",
			"evidenceIds": [
				"review:2026-11-12-technical:fouloir-deprag-hr025-r40b-6060020a:0"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-deprag-industrial2024-p24",
			"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf#page=24",
			"sourceLabel": "DEPRAG, document technique officiel, page PDF 24",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 7de335b0a26e42cbb8bdc58dd6786731f8acb69bc92a8435a472f9e3e2ac3621. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-12-technical:fouloir-deprag-hr025-r40b-6060020a:0",
			"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf",
			"sourceLabel": "DEPRAG, document fabricant, pages PDF 24",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "Le fouloir HR025-R40B est prévu pour le travail sur table et les petites surfaces, notamment les petites boîtes à noyaux. Il associe une course de 80 mm à 1 200 coups/min pour 2,5 kg. Les HR042/069-MK2B ont un cône Morse 2 et une course de 120 mm ; ce montage n’est pas attribué au HR025. GET complet : SHA-256 7de335b0a26e42cbb8bdc58dd6786731f8acb69bc92a8435a472f9e3e2ac3621. Historique conservé."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-deprag-industrial2024-p24"
		],
		"workingPressureBar": [
			"review:2026-11-12-technical:fouloir-deprag-hr025-r40b-6060020a:0"
		],
		"recommendedHose": [
			"october3d-tools-deprag-industrial2024-p24"
		],
		"demandExplanation": [
			"october3d-tools-deprag-industrial2024-p24"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
