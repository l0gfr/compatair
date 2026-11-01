import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-zipp-zar0818v",
	"slug": "riveteuse-zipp-zar0818v",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "ZIPP ZAR0818V",
	"brand": "ZIPP",
	"model": "ZAR0818V",
	"mpn": "ZAR0818V",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-zipp-zar0818v.webp",
		"alt": "Repères techniques : ZIPP ZAR0818V",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zar0818v",
		"label": "Référence ZAR0818V",
		"distinguishingAttributes": {
			"reference": "ZAR0818V",
			"Course publiée": "18 mm",
			"Référence constructeur": "ZAR0818V"
		}
	},
	"editorial": {
		"overview": "ZIPP ZAR0818 V. ZAR0818 est la version sans désignation Vacuum ; ZAR0818 V ajoute l’aspiration. ZAR0921 V publie 860 kgf et 19 mm, contre 800 kgf et 18 mm pour 0818 V. La table ne donne pas de volume par course pour 0818 V ; le 0,03 cu.ft de 0921 ne lui est pas transféré. Collecte des rivets : Version avec aspiration (Vacuum). Force de traction publiée : 800 kgf (1763 lbf publiés). Course : 18 mm.",
		"verifiedFacts": [
			"Course publiée : 18 mm.",
			"Référence constructeur : ZAR0818 V.",
			"Collecte des rivets : Version avec aspiration (Vacuum).",
			"Force de traction publiée : 800 kgf (1763 lbf publiés).",
			"Course : 18 mm.",
			"Embouts listés : 2,4 ; 3,2 ; 4,0 ; 4,8 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Course publiée",
			"value": "18 mm",
			"evidenceIds": [
				"october-b-zipp-tools-p49"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZAR0818 V",
			"evidenceIds": [
				"october-b-zipp-tools-p49"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "60–110 psi ; consommation absente.",
			"evidenceIds": [
				"october-b-zipp-tools-p49"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 49",
			"evidenceIds": [
				"october-b-zipp-tools-p49"
			]
		},
		{
			"label": "Collecte des rivets",
			"value": "Version avec aspiration (Vacuum)",
			"evidenceIds": [
				"riveteuse-zipp-zar0818v-reserved-20261101-1"
			]
		},
		{
			"label": "Force de traction publiée",
			"value": "800 kgf (1763 lbf publiés)",
			"evidenceIds": [
				"riveteuse-zipp-zar0818v-reserved-20261101-1"
			]
		},
		{
			"label": "Course",
			"value": "18 mm",
			"evidenceIds": [
				"riveteuse-zipp-zar0818v-reserved-20261101-1"
			]
		},
		{
			"label": "Embouts listés",
			"value": "2,4 ; 3,2 ; 4,0 ; 4,8 mm",
			"evidenceIds": [
				"riveteuse-zipp-zar0818v-reserved-20261101-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p49",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=49",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 49",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "riveteuse-zipp-zar0818v-reserved-20261101-1",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=49",
			"sourceLabel": "ZIPP : revue factuelle du 1 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-01",
			"confidence": "B",
			"notes": "Corps complet GET HTTP200 SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Passage page=49. Lecture de la référence et des configurations voisines, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p49"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p49"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p49"
		],
		"editorial": [
			"riveteuse-zipp-zar0818v-reserved-20261101-1"
		],
		"specifications": [
			"riveteuse-zipp-zar0818v-reserved-20261101-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
