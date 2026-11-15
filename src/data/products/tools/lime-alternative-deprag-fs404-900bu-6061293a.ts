import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "lime-alternative-deprag-fs404-900bu-6061293a",
	"slug": "lime-alternative-deprag-fs404-900bu-6061293a",
	"categoryId": "lime-alternative",
	"category": "lime-alternative",
	"label": "DEPRAG FS404-900BU (réf. 6061293A)",
	"brand": "DEPRAG",
	"model": "FS404-900BU",
	"mpn": "6061293A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/lime-alternative-deprag-fs404-900bu-6061293a-technical-20261115-followup.svg",
		"alt": "Repères techniques : DEPRAG FS404-900BU (réf. 6061293A)",
		"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 15 novembre 2026"
	},
	"variant": {
		"familyId": "deprag-fs404-900bu",
		"label": "Référence 6061293A",
		"distinguishingAttributes": {
			"reference": "6061293A",
			"Cadence à vide, courses/min": "9 000",
			"Longueur de course, mm (in)": "4 (.16)"
		}
	},
	"editorial": {
		"overview": "La lime alternative FS404-900BU utilise une queue de 3 mm et une course courte de 4 mm à 9 000 courses/min. La FS905-630BY passe à une queue de 5 mm, course de 9 mm et 6 300 courses/min. Ce choix modifie le montage et le déplacement de la lime, sans permettre de déduire sa consommation.",
		"verifiedFacts": [
			"Cadence à vide, courses/min : 9 000.",
			"Longueur de course, mm (in) : 4 (.16).",
			"Dimensions de queue de lime, mm (in) : 3 (.12).",
			"Diamètre intérieur du flexible, mm (in) : 6 (.24).",
			"Masse hors raccord d’air : 0,4 kg.",
			"Applications documentées : Ébavurage, limage, meulage fin et rodage."
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
			"value": "9 000",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p32"
			]
		},
		{
			"label": "Longueur de course, mm (in)",
			"value": "4 (.16)",
			"evidenceIds": [
				"october3d-tools-deprag-industrial2024-p32"
			]
		},
		{
			"label": "Dimensions de queue de lime, mm (in)",
			"value": "3 (.12)",
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
		},
		{
			"label": "Masse hors raccord d’air",
			"value": "0,4 kg",
			"evidenceIds": [
				"review:2026-11-12-technical:lime-alternative-deprag-fs404-900bu-6061293a:0"
			]
		},
		{
			"label": "Applications documentées",
			"value": "Ébavurage, limage, meulage fin et rodage",
			"evidenceIds": [
				"review:2026-11-12-technical:lime-alternative-deprag-fs404-900bu-6061293a:0"
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
		},
		{
			"id": "review:2026-11-12-technical:lime-alternative-deprag-fs404-900bu-6061293a:0",
			"sourceUrl": "https://www.depragindustrial.cz/files/eshop/products-dokumenty/deprag_complete_product_line_24__en.pdf",
			"sourceLabel": "DEPRAG, document fabricant, pages PDF 32",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "La lime alternative FS404-900BU utilise une queue de 3 mm et une course courte de 4 mm à 9 000 courses/min. La FS905-630BY passe à une queue de 5 mm, course de 9 mm et 6 300 courses/min. Ce choix modifie le montage et le déplacement de la lime, sans permettre de déduire sa consommation. GET complet : SHA-256 7de335b0a26e42cbb8bdc58dd6786731f8acb69bc92a8435a472f9e3e2ac3621. Historique conservé."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-deprag-industrial2024-p32"
		],
		"workingPressureBar": [
			"review:2026-11-12-technical:lime-alternative-deprag-fs404-900bu-6061293a:0"
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
