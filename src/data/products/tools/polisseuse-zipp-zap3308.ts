import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "polisseuse-zipp-zap3308",
	"slug": "polisseuse-zipp-zap3308",
	"categoryId": "polisseuse",
	"category": "polisseuse",
	"label": "ZIPP ZAP3308",
	"brand": "ZIPP",
	"model": "ZAP3308",
	"mpn": "ZAP3308",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/polisseuse-zipp-zap3308-technical-20261112-followup.svg",
		"alt": "Repères techniques : ZIPP ZAP3308",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 12 novembre 2026"
	},
	"variant": {
		"familyId": "zipp-zap3308",
		"label": "Référence ZAP3308",
		"distinguishingAttributes": {
			"reference": "ZAP3308",
			"Vitesse à vide": "4000 tr/min",
			"Masse": "1 kg"
		}
	},
	"editorial": {
		"overview": "ZAP3308 : polisseuse d’angle de 0,5 HP, 4 000 tr/min, broche 5/16 pouce–24, longueur 225 mm et masse 1 kg. La ZAP308 est une version 1 HP ; la 330825 est à 2 400 tr/min. Les 3,5 cfm moyens publiés ne définissent pas un besoin maximal en charge.",
		"verifiedFacts": [
			"Vitesse à vide : 4000 tr/min.",
			"Masse : 1 kg.",
			"Référence constructeur : ZAP3308."
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
			"value": "ZAP3308",
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
			"id": "review:2026-11-12-technical:polisseuse-zipp-zap3308:0",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
			"sourceLabel": "ZIPP, document fabricant, pages PDF 135",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "ZAP3308polisseuseangle0,5HP4000tr/minbroche5/16-24,225mm1kg,3,5cfmmoyenne ;ZAP3081HP4,1cfm mêmes4000,3308252400. Ajouter puissance et montage pour distinguer les capacités sans inventer point d’air. GET complet : SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. Historique conservé."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p135"
		],
		"workingPressureBar": [
			"review:2026-11-12-technical:polisseuse-zipp-zap3308:0"
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
