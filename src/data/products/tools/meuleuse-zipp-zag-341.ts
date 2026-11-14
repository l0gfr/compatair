import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-zipp-zag-341",
	"slug": "meuleuse-zipp-zag-341",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "ZIPP ZAG-341",
	"brand": "ZIPP",
	"model": "ZAG-341",
	"mpn": "ZAG-341",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-zipp-zag-341-technical-20261112-followup.svg",
		"alt": "Repères techniques : ZIPP ZAG-341",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 12 novembre 2026"
	},
	"variant": {
		"familyId": "zipp-zag-341",
		"label": "Référence ZAG-341",
		"distinguishingAttributes": {
			"reference": "ZAG-341",
			"Vitesse à vide": "15000 tr/min",
			"Masse": "0.7 kg"
		}
	},
	"editorial": {
		"overview": "ZAG341 : meuleuse d’angle pour disque de 2 pouces, 15 000 tr/min, longueur 178 mm et masse 0,7 kg. Les ZDG231 et ZDG301 sont des meuleuses droites à pince, à 25 000 et 23 000 tr/min. Le format d’abrasif et la géométrie les distinguent ; les 3,5 cfm moyens restent hors dimensionnement.",
		"verifiedFacts": [
			"Vitesse à vide : 15000 tr/min.",
			"Masse : 0.7 kg.",
			"Référence constructeur : ZAG-341."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "15000 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p114"
			]
		},
		{
			"label": "Masse",
			"value": "0.7 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p114"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZAG-341",
			"evidenceIds": [
				"october-b-zipp-tools-p114"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p114"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "99,109 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p114"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 114",
			"evidenceIds": [
				"october-b-zipp-tools-p114"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p114",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=114",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 114",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-12-technical:meuleuse-zipp-zag-341:0",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
			"sourceLabel": "ZIPP, document fabricant, pages PDF 114",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "ZAG341 est meuleuse d’angle pour disque2pouces,15000tr/min178mm0,7kg. Les voisinesZDG231/301 sont meuleuses droites à pinces et vitesses25000/23000 ; ajouter disque/fonction,3,5cfmmoyenne reste documentaire sans pression. GET complet : SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. Historique conservé."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p114"
		],
		"workingPressureBar": [
			"review:2026-11-12-technical:meuleuse-zipp-zag-341:0"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p114"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
