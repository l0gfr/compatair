import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "taraudeuse-zipp-zat22akh",
	"slug": "taraudeuse-zipp-zat22akh",
	"categoryId": "taraudeuse",
	"category": "taraudeuse",
	"label": "ZIPP ZAT22AKH",
	"brand": "ZIPP",
	"model": "ZAT22AKH",
	"mpn": "ZAT22AKH",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 184,
		"typical": 184,
		"max": 184
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/taraudeuse-zipp-zat22akh.webp",
		"alt": "Repères techniques : ZIPP ZAT22AKH",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zat22akh",
		"label": "Référence ZAT22AKH",
		"distinguishingAttributes": {
			"reference": "ZAT22AKH",
			"Vitesse à vide": "150 tr/min",
			"Masse": "1.72 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZAT22AKH. La ZAT22AKH couvre 3–12 mm en aluminium et 3–8 mm en fer à 150 tr/min. La ZAT415B2 couvre 1–3 mm à 1 000 tr/min. Le diamètre admissible dépend de la matière et n’est pas une capacité universelle de mandrin.",
		"verifiedFacts": [
			"Capacité de taraudage aluminium : 3–12 mm.",
			"Capacité de taraudage fer : 3–8 mm.",
			"Vitesse à vide : 150 tr/min.",
			"Longueur : 200 mm.",
			"Masse : 1,72 kg.",
			"Consommation moyenne : 184 L/min."
		],
		"limitations": [
			"Consommation moyenne ou de régime non précisé, sans qualification maximale/en charge ni appariement de pression de mesure suffisant : aucun verdict conclusif n’en est déduit."
		]
	},
	"specifications": [
		{
			"label": "Capacité de taraudage aluminium",
			"value": "3–12 mm",
			"evidenceIds": [
				"taraudeuse-zipp-zat22akh-reserved-20261103-1"
			]
		},
		{
			"label": "Capacité de taraudage fer",
			"value": "3–8 mm",
			"evidenceIds": [
				"taraudeuse-zipp-zat22akh-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "150 tr/min",
			"evidenceIds": [
				"taraudeuse-zipp-zat22akh-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "200 mm",
			"evidenceIds": [
				"taraudeuse-zipp-zat22akh-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,72 kg",
			"evidenceIds": [
				"taraudeuse-zipp-zat22akh-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation moyenne",
			"value": "184 L/min",
			"evidenceIds": [
				"taraudeuse-zipp-zat22akh-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p157",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=157",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 157",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "taraudeuse-zipp-zat22akh-reserved-20261103-1",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=157",
			"sourceLabel": "ZIPP : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. La ZAT22AKH couvre 3–12 mm en aluminium et 3–8 mm en fer à 150 tr/min. La ZAT415B2 couvre 1–3 mm à 1 000 tr/min. Le diamètre admissible dépend de la matière et n’est pas une capacité universelle de mandrin."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p157"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p157"
		],
		"airflowLpm": [
			"october-b-zipp-tools-p157"
		],
		"airflowBasis": [
			"october-b-zipp-tools-p157"
		],
		"editorial": [
			"taraudeuse-zipp-zat22akh-reserved-20261103-1"
		],
		"specifications": [
			"taraudeuse-zipp-zat22akh-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation moyenne : 184 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
