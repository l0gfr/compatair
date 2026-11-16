import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-zipp-zos-214-n5",
	"slug": "ponceuse-orbitale-zipp-zos-214-n5",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "ZIPP ZOS-214-N5",
	"brand": "ZIPP",
	"model": "ZOS-214-N5",
	"mpn": "ZOS-214-N5",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau publie une consommation moyenne de 1,6 cfm, sans pression de mesure associée. Aucun besoin en charge n’est extrapolé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-zipp-zos-214-n5-technical-20261116-reviews.svg",
		"alt": "Repères techniques : ZIPP ZOS-214-N5",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "zipp-zos-214-n5",
		"label": "Référence ZOS-214-N5",
		"distinguishingAttributes": {
			"reference": "ZOS-214-N5",
			"Référence constructeur": "ZOS-214-N5",
			"Configuration publiée": "Non-Vacuum ; plateau 125 mm ; orbite 5 mm"
		}
	},
	"editorial": {
		"overview": "La ZOS-214-N5 est une ponceuse orbitale sans aspiration, plateau 125 mm et orbite 5 mm. La N6 passe à 150 mm, la C5 ajoute l’aspiration centrale et la S5 l’aspiration autonome. Le tableau groupé donne 11 000 tr/min et 0,9 kg ; les séries ZOS3 utilisent une orbite de 2,5 mm. Les 1,6 cfm moyens restent documentaires, sans pression de mesure appariée.",
		"verifiedFacts": [
			"11 000 tr/min ; masse 0,9 kg.",
			"Consommation moyenne : 1,6 cfm, pression de mesure non établie."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée.",
			"Le tableau publie une consommation moyenne de 1,6 cfm, sans pression de mesure associée. Aucun besoin en charge n’est extrapolé."
		]
	},
	"specifications": [
		{
			"label": "Référence constructeur",
			"value": "ZOS-214-N5",
			"evidenceIds": [
				"october-b-zipp-tools-p140"
			]
		},
		{
			"label": "Configuration publiée",
			"value": "Non-Vacuum ; plateau 125 mm ; orbite 5 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:ponceuse-orbitale-zipp-zos-214-n5:0"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p140"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 140",
			"evidenceIds": [
				"october-b-zipp-tools-p140"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p140",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=140",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 140",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:ponceuse-orbitale-zipp-zos-214-n5:0",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
			"sourceLabel": "ZIPP, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La ZOS-214-N5 est une ponceuse orbitale sans aspiration, plateau 125 mm et orbite 5 mm. La N6 passe à 150 mm, la C5 ajoute l’aspiration centrale et la S5 l’aspiration autonome. Le tableau groupé donne 11 000 tr/min et 0,9 kg ; les séries ZOS3 utilisent une orbite de 2,5 mm. Les 1,6 cfm moyens restent documentaires, sans pression de mesure appariée. GET complet SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. Pages PDF lues : 140."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p140"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p140"
		],
		"demandExplanation": [
			"review:2026-11-16-reviews:ponceuse-orbitale-zipp-zos-214-n5:0"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
