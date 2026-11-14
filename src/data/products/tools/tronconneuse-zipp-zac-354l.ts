import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "tronconneuse-zipp-zac-354l",
	"slug": "tronconneuse-zipp-zac-354l",
	"categoryId": "tronconneuse",
	"category": "tronconneuse",
	"label": "ZIPP ZAC-354L",
	"brand": "ZIPP",
	"model": "ZAC-354L",
	"mpn": "ZAC-354L",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/tronconneuse-zipp-zac-354l-technical-20261112-followup.svg",
		"alt": "Repères techniques : ZIPP ZAC-354L",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 12 novembre 2026"
	},
	"variant": {
		"familyId": "zipp-zac-354l",
		"label": "Référence ZAC-354L",
		"distinguishingAttributes": {
			"reference": "ZAC-354L",
			"Vitesse à vide": "16000 tr/min",
			"Masse": "1.3 kg"
		}
	},
	"editorial": {
		"overview": "ZAC354L : tronçonneuse d’angle allongée pour disque de 3 pouces, 16 000 tr/min, longueur 290 mm et masse 1,3 kg. La 354 courte mesure 220 mm pour 1,2 kg ; la 30540 reçoit 4 pouces à 14 000 tr/min et mesure 345 mm. Les 3,5 cfm moyens restent hors calcul en charge.",
		"verifiedFacts": [
			"Vitesse à vide : 16000 tr/min.",
			"Masse : 1.3 kg.",
			"Référence constructeur : ZAC-354L."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "16000 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p120"
			]
		},
		{
			"label": "Masse",
			"value": "1.3 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p120"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZAC-354L",
			"evidenceIds": [
				"october-b-zipp-tools-p120"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p120"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "99,109 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p120"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 120",
			"evidenceIds": [
				"october-b-zipp-tools-p120"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p120",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=120",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 120",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-12-technical:tronconneuse-zipp-zac-354l:0",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
			"sourceLabel": "ZIPP, document fabricant, pages PDF 120",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "ZAC354Ltronçonneuseangleallongéedisque3pouces290mm1,3kgvs354courte220mm1,2kg/30540disque4pouces345mm14000tr/min.16000tr/minet3,5cfmmoyenne,aucunpointpression ; ajouter allongement/disque. GET complet : SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. Historique conservé."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p120"
		],
		"workingPressureBar": [
			"review:2026-11-12-technical:tronconneuse-zipp-zac-354l:0"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p120"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
