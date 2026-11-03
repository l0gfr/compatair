import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "polisseuse-zipp-zap308",
	"slug": "polisseuse-zipp-zap308",
	"categoryId": "polisseuse",
	"category": "polisseuse",
	"label": "ZIPP ZAP308",
	"brand": "ZIPP",
	"model": "ZAP308",
	"mpn": "ZAP308",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/polisseuse-zipp-zap308.webp",
		"alt": "Repères techniques : ZIPP ZAP308",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zap308",
		"label": "Référence ZAP308",
		"distinguishingAttributes": {
			"reference": "ZAP308",
			"Vitesse à vide": "4000 tr/min",
			"Masse": "1 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZAP308. La ZAP308 donne 4 000 tr/min avec moteur 1,0 hp ; la ZAP30825 donne 2 400 tr/min avec le même arbre 5/16 pouce–24. La ZAP3308 annonce aussi 4 000 tr/min mais 0,5 hp et 3,5 cfm moyens, contre 4,1 ici. Les adaptateurs de plateau restent à choisir selon le filetage.",
		"verifiedFacts": [
			"Filetage broche : 5/16 pouce–24.",
			"Puissance publiée : 1,0 hp.",
			"Vitesse à vide : 4 000 tr/min.",
			"Longueur : 225 mm.",
			"Masse : 1,0 kg.",
			"Consommation moyenne documentaire : 4,1 cfm."
		],
		"limitations": [
			"Consommation moyenne ou de régime non précisé, sans qualification maximale/en charge ni appariement de pression de mesure suffisant : aucun verdict conclusif n’en est déduit."
		]
	},
	"specifications": [
		{
			"label": "Filetage broche",
			"value": "5/16 pouce–24",
			"evidenceIds": [
				"polisseuse-zipp-zap308-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "1,0 hp",
			"evidenceIds": [
				"polisseuse-zipp-zap308-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "4 000 tr/min",
			"evidenceIds": [
				"polisseuse-zipp-zap308-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "225 mm",
			"evidenceIds": [
				"polisseuse-zipp-zap308-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,0 kg",
			"evidenceIds": [
				"polisseuse-zipp-zap308-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation moyenne documentaire",
			"value": "4,1 cfm",
			"evidenceIds": [
				"polisseuse-zipp-zap308-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p135",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=135",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 135",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "polisseuse-zipp-zap308-reserved-20261103-1",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=135",
			"sourceLabel": "ZIPP : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. La ZAP308 donne 4 000 tr/min avec moteur 1,0 hp ; la ZAP30825 donne 2 400 tr/min avec le même arbre 5/16 pouce–24. La ZAP3308 annonce aussi 4 000 tr/min mais 0,5 hp et 3,5 cfm moyens, contre 4,1 ici. Les adaptateurs de plateau restent à choisir selon le filetage."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p135"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p135"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p135"
		],
		"editorial": [
			"polisseuse-zipp-zap308-reserved-20261103-1"
		],
		"specifications": [
			"polisseuse-zipp-zap308-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
