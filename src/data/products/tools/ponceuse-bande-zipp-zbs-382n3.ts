import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-bande-zipp-zbs-382n3",
	"slug": "ponceuse-bande-zipp-zbs-382n3",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "ZIPP ZBS-382N3",
	"brand": "ZIPP",
	"model": "ZBS-382N3",
	"mpn": "ZBS-382N3",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-bande-zipp-zbs-382n3-technical-20261112-followup.svg",
		"alt": "Repères techniques : ZIPP ZBS-382N3",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 12 novembre 2026"
	},
	"variant": {
		"familyId": "zipp-zbs-382n3",
		"label": "Référence ZBS-382N3",
		"distinguishingAttributes": {
			"reference": "ZBS-382N3",
			"Vitesse à vide": "17000 tr/min",
			"Masse": "0.94 kg"
		}
	},
	"editorial": {
		"overview": "ZBS382N3 : ponceuse à bande 13 × 457 mm avec galet en acier, 17 000 tr/min, longueur 390 mm et masse 0,94 kg. La 382N utilise 10 × 330 mm dans un corps de 326 mm ; la 382N1 utilise 6 × 457 mm pour 1,3 kg. Les 4 cfm moyens ne suffisent pas au calcul en charge.",
		"verifiedFacts": [
			"Vitesse à vide : 17000 tr/min.",
			"Masse : 0.94 kg.",
			"Référence constructeur : ZBS-382N3."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "17000 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p133"
			]
		},
		{
			"label": "Masse",
			"value": "0.94 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p133"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZBS-382N3",
			"evidenceIds": [
				"october-b-zipp-tools-p133"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p133"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "113,267 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p133"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 133",
			"evidenceIds": [
				"october-b-zipp-tools-p133"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p133",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=133",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 133",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-14-technical:ponceuse-bande-zipp-zbs-382n3:0",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
			"sourceLabel": "ZIPP, document fabricant, pages PDF 133",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-14",
			"confidence": "B",
			"notes": "Relecture du 14 novembre : ZBS-382N3, bande 13 × 457 mm ; ZBS-382N1, bande 6 × 457 mm, 390 mm et 1,3 kg. La préparation du 12 avait fusionné le suffixe N1 et le chiffre 6. Moyenne 4 cfm conservée hors calcul en charge. GET complet : SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. Historique antérieur conservé."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p133"
		],
		"workingPressureBar": [
			"review:2026-11-14-technical:ponceuse-bande-zipp-zbs-382n3:0"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p133"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
