import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cisaille-zipp-zp228",
	"slug": "cisaille-zipp-zp228",
	"categoryId": "cisaille",
	"category": "cisaille",
	"label": "ZIPP ZP228",
	"brand": "ZIPP",
	"model": "ZP228",
	"mpn": "ZP228",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 104.772,
		"typical": 104.772,
		"max": 104.772
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/cisaille-zipp-zp228.webp",
		"alt": "Repères techniques : ZIPP ZP228",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zp228",
		"label": "Référence ZP228",
		"distinguishingAttributes": {
			"reference": "ZP228",
			"Vitesse à vide": "2600 tr/min",
			"Masse": "1 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZP228. La ZP228 est la cisaille à poignée pistolet de longueur 200 mm. La ZP229 est la version ciseaux de 240 mm ; la ZP227 est aussi une version ciseaux de 290 mm. Les capacités acier 1,2 mm et aluminium 1,6 mm sont distinctes et communes aux lignes du tableau.",
		"verifiedFacts": [
			"Type : Pistol-Grip Air Shear.",
			"Capacité acier : 1,2 mm.",
			"Capacité aluminium : 1,6 mm.",
			"Cadence publiée : 2 600 tr/min.",
			"Longueur : 200 mm.",
			"Masse : 1,0 kg."
		],
		"limitations": [
			"Consommation moyenne ou de régime non précisé, sans qualification maximale/en charge ni appariement de pression de mesure suffisant : aucun verdict conclusif n’en est déduit."
		]
	},
	"specifications": [
		{
			"label": "Type",
			"value": "Pistol-Grip Air Shear",
			"evidenceIds": [
				"cisaille-zipp-zp228-reserved-20261103-1"
			]
		},
		{
			"label": "Capacité acier",
			"value": "1,2 mm",
			"evidenceIds": [
				"cisaille-zipp-zp228-reserved-20261103-1"
			]
		},
		{
			"label": "Capacité aluminium",
			"value": "1,6 mm",
			"evidenceIds": [
				"cisaille-zipp-zp228-reserved-20261103-1"
			]
		},
		{
			"label": "Cadence publiée",
			"value": "2 600 tr/min",
			"evidenceIds": [
				"cisaille-zipp-zp228-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "200 mm",
			"evidenceIds": [
				"cisaille-zipp-zp228-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,0 kg",
			"evidenceIds": [
				"cisaille-zipp-zp228-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p104",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=104",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 104",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "cisaille-zipp-zp228-reserved-20261103-1",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=104",
			"sourceLabel": "ZIPP : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. La ZP228 est la cisaille à poignée pistolet de longueur 200 mm. La ZP229 est la version ciseaux de 240 mm ; la ZP227 est aussi une version ciseaux de 290 mm. Les capacités acier 1,2 mm et aluminium 1,6 mm sont distinctes et communes aux lignes du tableau."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p104"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p104"
		],
		"airflowLpm": [
			"october-b-zipp-tools-p104"
		],
		"airflowBasis": [
			"october-b-zipp-tools-p104"
		],
		"editorial": [
			"cisaille-zipp-zp228-reserved-20261103-1"
		],
		"specifications": [
			"cisaille-zipp-zp228-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation moyenne : 104,772 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
