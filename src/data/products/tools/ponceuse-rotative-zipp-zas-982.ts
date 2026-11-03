import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-rotative-zipp-zas-982",
	"slug": "ponceuse-rotative-zipp-zas-982",
	"categoryId": "polisseuse",
	"category": "ponceuse-rotative",
	"label": "ZIPP ZAS-982",
	"brand": "ZIPP",
	"model": "ZAS-982",
	"mpn": "ZAS-982",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-rotative-zipp-zas-982.webp",
		"alt": "Repères techniques : ZIPP ZAS-982",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zas-982",
		"label": "Référence ZAS-982",
		"distinguishingAttributes": {
			"reference": "ZAS-982",
			"Vitesse à vide": "4500 tr/min",
			"Masse": "2.3 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZAS-982. La ZAS-982 est nommée polisseuse d’angle 7 pouces par le constructeur, à 4 500 tr/min. La ZAS-983 donne 2 500 tr/min pour le même encombrement et la même masse. La catégorie est corrigée en polisseuse ; le filetage livré doit être confirmé parmi les deux montages publiés.",
		"verifiedFacts": [
			"Désignation constructeur : Angle Polisher 7 pouces.",
			"Vitesse à vide : 4 500 tr/min.",
			"Filetages proposés : 5/8 pouce–11 ou M14 × 2.",
			"Longueur : 328 mm.",
			"Masse : 2,3 kg."
		],
		"limitations": [
			"Consommation moyenne ou de régime non précisé, sans qualification maximale/en charge ni appariement de pression de mesure suffisant : aucun verdict conclusif n’en est déduit."
		]
	},
	"specifications": [
		{
			"label": "Désignation constructeur",
			"value": "Angle Polisher 7 pouces",
			"evidenceIds": [
				"ponceuse-rotative-zipp-zas-982-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "4 500 tr/min",
			"evidenceIds": [
				"ponceuse-rotative-zipp-zas-982-reserved-20261103-1"
			]
		},
		{
			"label": "Filetages proposés",
			"value": "5/8 pouce–11 ou M14 × 2",
			"evidenceIds": [
				"ponceuse-rotative-zipp-zas-982-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "328 mm",
			"evidenceIds": [
				"ponceuse-rotative-zipp-zas-982-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "2,3 kg",
			"evidenceIds": [
				"ponceuse-rotative-zipp-zas-982-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p136",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=136",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 136",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "ponceuse-rotative-zipp-zas-982-reserved-20261103-1",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=136",
			"sourceLabel": "ZIPP : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. La ZAS-982 est nommée polisseuse d’angle 7 pouces par le constructeur, à 4 500 tr/min. La ZAS-983 donne 2 500 tr/min pour le même encombrement et la même masse. La catégorie est corrigée en polisseuse ; le filetage livré doit être confirmé parmi les deux montages publiés."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p136"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p136"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p136"
		],
		"categoryId": [
			"ponceuse-rotative-zipp-zas-982-reserved-20261103-1"
		],
		"editorial": [
			"ponceuse-rotative-zipp-zas-982-reserved-20261103-1"
		],
		"specifications": [
			"ponceuse-rotative-zipp-zas-982-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
