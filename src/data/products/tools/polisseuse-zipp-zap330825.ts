import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "polisseuse-zipp-zap330825",
	"slug": "polisseuse-zipp-zap330825",
	"categoryId": "polisseuse",
	"category": "polisseuse",
	"label": "ZIPP ZAP330825",
	"brand": "ZIPP",
	"model": "ZAP330825",
	"mpn": "ZAP330825",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/polisseuse-zipp-zap330825-technical-20261116-reviews.svg",
		"alt": "Repères techniques : ZIPP ZAP330825",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "zipp-zap330825",
		"label": "Référence ZAP330825",
		"distinguishingAttributes": {
			"reference": "ZAP330825",
			"Vitesse à vide": "2400 tr/min",
			"Masse": "1 kg"
		}
	},
	"editorial": {
		"overview": "La ZAP330825 est la version 2 400 tr/min de la polisseuse d’angle 0,5 hp, contre 4 000 pour la ZAP3308. La ZAP30825 conserve la vitesse réduite avec un moteur de 1 hp. Le tableau donne un filetage 5/16-24, un corps de 225 mm et 1 kg. Les 3,5 cfm sont moyens, sans pression de mesure établie pour cette référence.",
		"verifiedFacts": [
			"Vitesse à vide : 2400 tr/min.",
			"Masse : 1 kg.",
			"Référence constructeur : ZAP330825."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "2400 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p135"
			]
		},
		{
			"label": "Masse",
			"value": "1 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p135"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZAP330825",
			"evidenceIds": [
				"october-b-zipp-tools-p135"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p135"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "99,109 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p135"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 135",
			"evidenceIds": [
				"october-b-zipp-tools-p135"
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
			"id": "review:2026-11-16-reviews:polisseuse-zipp-zap330825:0",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
			"sourceLabel": "ZIPP, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La ZAP330825 est la version 2 400 tr/min de la polisseuse d’angle 0,5 hp, contre 4 000 pour la ZAP3308. La ZAP30825 conserve la vitesse réduite avec un moteur de 1 hp. Le tableau donne un filetage 5/16-24, un corps de 225 mm et 1 kg. Les 3,5 cfm sont moyens, sans pression de mesure établie pour cette référence. GET complet SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. Pages PDF lues : 135."
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
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
