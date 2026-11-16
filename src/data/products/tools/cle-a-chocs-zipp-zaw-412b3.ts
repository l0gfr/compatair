import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-zipp-zaw-412b3",
	"slug": "cle-a-chocs-zipp-zaw-412b3",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "ZIPP ZAW-412B3",
	"brand": "ZIPP",
	"model": "ZAW-412B3",
	"mpn": "ZAW-412B3",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 127,
		"typical": 127,
		"max": 127
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-zipp-zaw-412b3-technical-20261116-reviews.svg",
		"alt": "Repères techniques : ZIPP ZAW-412B3",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "zipp-zaw-412b3",
		"label": "Référence ZAW-412B3",
		"distinguishingAttributes": {
			"reference": "ZAW-412B3",
			"Vitesse à vide": "11000 tr/min",
			"Masse": "0.68 kg"
		}
	},
	"editorial": {
		"overview": "La ZAW-412B3 utilise un carré 3/8 pouce, contre 1/4 pouce pour la B2, avec le même mécanisme à deux marteaux et échappement latéral. Les deux donnent 11 000 tr/min, 27 Nm de travail et 35 Nm maximum pour 178 mm. La ZAW-417B passe à l’échappement arrière et à un autre couple. Les 127 L/min publiés sont moyens, hors calcul de consommation continue.",
		"verifiedFacts": [
			"Vitesse à vide : 11000 tr/min.",
			"Masse : 0.68 kg.",
			"Référence constructeur : ZAW-412B3."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "11000 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p9"
			]
		},
		{
			"label": "Masse",
			"value": "0.68 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p9"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZAW-412B3",
			"evidenceIds": [
				"october-b-zipp-tools-p9"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Operating Air Pressure: 90(6.2",
			"evidenceIds": [
				"october-b-zipp-tools-p9"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 9",
			"evidenceIds": [
				"october-b-zipp-tools-p9"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p9",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=9",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 9",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:cle-a-chocs-zipp-zaw-412b3:0",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
			"sourceLabel": "ZIPP, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La ZAW-412B3 utilise un carré 3/8 pouce, contre 1/4 pouce pour la B2, avec le même mécanisme à deux marteaux et échappement latéral. Les deux donnent 11 000 tr/min, 27 Nm de travail et 35 Nm maximum pour 178 mm. La ZAW-417B passe à l’échappement arrière et à un autre couple. Les 127 L/min publiés sont moyens, hors calcul de consommation continue. GET complet SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. Pages PDF lues : 9."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p9"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p9"
		],
		"airflowLpm": [
			"october-b-zipp-tools-p9"
		],
		"airflowBasis": [
			"october-b-zipp-tools-p9"
		]
	},
	"notes": [
		"Consommation moyenne : 127 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
