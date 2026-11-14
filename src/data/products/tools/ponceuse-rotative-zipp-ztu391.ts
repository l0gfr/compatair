import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-rotative-zipp-ztu391",
	"slug": "ponceuse-rotative-zipp-ztu391",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "ZIPP ZTU391",
	"brand": "ZIPP",
	"model": "ZTU391",
	"mpn": "ZTU391",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-rotative-zipp-ztu391-technical-20261112-followup.svg",
		"alt": "Repères techniques : ZIPP ZTU391",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 12 novembre 2026"
	},
	"variant": {
		"familyId": "zipp-ztu391",
		"label": "Référence ZTU391",
		"distinguishingAttributes": {
			"reference": "ZTU391",
			"Vitesse à vide": "4000 tr/min",
			"Masse": "1.2 kg"
		}
	},
	"editorial": {
		"overview": "ZTU391 : outil de ponçage de 0,5 HP sans aspiration intégrée, 4 000 tr/min, broche 9 mm, longueur 254 mm et masse 1,2 kg. Le 391C se raccorde à une aspiration centralisée ; le 391S utilise une aspiration autonome. La moyenne de 3,5 cfm reste non dimensionnante.",
		"verifiedFacts": [
			"Vitesse à vide : 4000 tr/min.",
			"Masse : 1.2 kg.",
			"Référence constructeur : ZTU391."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "4000 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p127"
			]
		},
		{
			"label": "Masse",
			"value": "1.2 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p127"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZTU391",
			"evidenceIds": [
				"october-b-zipp-tools-p127"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p127"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "99,109 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p127"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 127",
			"evidenceIds": [
				"october-b-zipp-tools-p127"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p127",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=127",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 127",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-12-technical:ponceuse-rotative-zipp-ztu391:0",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
			"sourceLabel": "ZIPP, document fabricant, pages PDF 127",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "ZTU391sansaspiration,391Ccentralisée,391Sautonome, mêmes0,5HP4000tr/min254mm1,2kgbroche9mm. Fonction aspiration omise ; ajouter sans inférer nouvelle identité depuis seul coffret.3,5cfmmoyenne hors calcul. GET complet : SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. Historique conservé."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p127"
		],
		"workingPressureBar": [
			"review:2026-11-12-technical:ponceuse-rotative-zipp-ztu391:0"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p127"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
