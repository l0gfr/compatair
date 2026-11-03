import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-zipp-zar0921",
	"slug": "riveteuse-zipp-zar0921",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "ZIPP ZAR0921",
	"brand": "ZIPP",
	"model": "ZAR0921",
	"mpn": "ZAR0921",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-zipp-zar0921.webp",
		"alt": "Repères techniques : ZIPP ZAR0921",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zar0921",
		"label": "Référence ZAR0921",
		"distinguishingAttributes": {
			"reference": "ZAR0921",
			"Course publiée": "19 mm",
			"Référence constructeur": "ZAR0921"
		}
	},
	"editorial": {
		"overview": "ZIPP ZAR0921. La ZAR0921 et la ZAR0921V partagent 19 mm de course et 1,4 kg ; le V ajoute l’aspiration. La ZAR0818 donne 18 mm et 1,5 kg. Le volume moyen par course 0,03 pied cube n’est pas un débit par minute, et la plage 60–90 psi ne fournit pas un point de mesure unique.",
		"verifiedFacts": [
			"Type : ZAR0921 sans aspiration Vacuum.",
			"Course : 19 mm.",
			"Masse : 1,4 kg.",
			"Traction publiée : 860 kgf (1 896 lbf).",
			"Diamètres de nez équipés : 2,4 / 3,2 / 4,0 / 4,8 mm.",
			"Consommation moyenne par course : 0,03 cu.ft/stroke ; pression de mesure non unique."
		],
		"limitations": [
			"Consommation moyenne ou de régime non précisé, sans qualification maximale/en charge ni appariement de pression de mesure suffisant : aucun verdict conclusif n’en est déduit."
		]
	},
	"specifications": [
		{
			"label": "Type",
			"value": "ZAR0921 sans aspiration Vacuum",
			"evidenceIds": [
				"riveteuse-zipp-zar0921-reserved-20261103-1"
			]
		},
		{
			"label": "Course",
			"value": "19 mm",
			"evidenceIds": [
				"riveteuse-zipp-zar0921-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,4 kg",
			"evidenceIds": [
				"riveteuse-zipp-zar0921-reserved-20261103-1"
			]
		},
		{
			"label": "Traction publiée",
			"value": "860 kgf (1 896 lbf)",
			"evidenceIds": [
				"riveteuse-zipp-zar0921-reserved-20261103-1"
			]
		},
		{
			"label": "Diamètres de nez équipés",
			"value": "2,4 / 3,2 / 4,0 / 4,8 mm",
			"evidenceIds": [
				"riveteuse-zipp-zar0921-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation moyenne par course",
			"value": "0,03 cu.ft/stroke ; pression de mesure non unique",
			"evidenceIds": [
				"riveteuse-zipp-zar0921-reserved-20261103-1"
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
			"id": "riveteuse-zipp-zar0921-reserved-20261103-1",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=49",
			"sourceLabel": "ZIPP : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. La ZAR0921 et la ZAR0921V partagent 19 mm de course et 1,4 kg ; le V ajoute l’aspiration. La ZAR0818 donne 18 mm et 1,5 kg. Le volume moyen par course 0,03 pied cube n’est pas un débit par minute, et la plage 60–90 psi ne fournit pas un point de mesure unique."
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
			"riveteuse-zipp-zar0921-reserved-20261103-1"
		],
		"specifications": [
			"riveteuse-zipp-zar0921-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
