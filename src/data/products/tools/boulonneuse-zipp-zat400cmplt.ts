import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "boulonneuse-zipp-zat400cmplt",
	"slug": "boulonneuse-zipp-zat400cmplt",
	"categoryId": "boulonneuse",
	"category": "boulonneuse",
	"label": "ZIPP ZAT400CMPLT",
	"brand": "ZIPP",
	"model": "ZAT400CMPLT",
	"mpn": "ZAT400CMPLT",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/boulonneuse-zipp-zat400cmplt-technical-20261112-followup.svg",
		"alt": "Repères techniques : ZIPP ZAT400CMPLT",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 12 novembre 2026"
	},
	"variant": {
		"familyId": "zipp-zat400cmplt",
		"label": "Référence ZAT400CMPLT",
		"distinguishingAttributes": {
			"reference": "ZAT400CMPLT",
			"Masse": "4.6 kg",
			"Référence constructeur": "ZAT400CMPLT"
		}
	},
	"editorial": {
		"overview": "ZAT400CMPLT : multiplicateur de couple à carré 3/4 pouce, plage publiée 60–540 Nm et masse 4,6 kg. Le ZAT800CMPLT couvre 120–1 100 Nm ; les versions DR ajoutent un afficheur. La consommation d’air de cette configuration reste à documenter.",
		"verifiedFacts": [
			"Masse : 4.6 kg.",
			"Référence constructeur : ZAT400CMPLT."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "4.6 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p39"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZAT400CMPLT",
			"evidenceIds": [
				"october-b-zipp-tools-p39"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p39"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 39",
			"evidenceIds": [
				"october-b-zipp-tools-p39"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p39",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=39",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 39",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-12-technical:boulonneuse-zipp-zat400cmplt:0",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
			"sourceLabel": "ZIPP, document fabricant, pages PDF 39",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "Ajouter le couple60–540Nm, carré3/4 et absence de lecture numérique, distinct800CMPLT120–1100Nm et400DRavec afficheur. Masse4,6kg confirmée mais seule elle n’explicite pas la fonction. Aucun débit ni point de pression publié. GET complet : SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. Historique conservé."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p39"
		],
		"workingPressureBar": [
			"review:2026-11-12-technical:boulonneuse-zipp-zat400cmplt:0"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p39"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
