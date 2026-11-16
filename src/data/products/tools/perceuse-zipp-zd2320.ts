import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-zipp-zd2320",
	"slug": "perceuse-zipp-zd2320",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "ZIPP ZD2320",
	"brand": "ZIPP",
	"model": "ZD2320",
	"mpn": "ZD2320",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau publie une consommation moyenne de 3 cfm, sans pression de mesure associée. Aucun besoin en charge n’est extrapolé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-zipp-zd2320-technical-20261116-reviews.svg",
		"alt": "Repères techniques : ZIPP ZD2320",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "zipp-zd2320",
		"label": "Référence ZD2320",
		"distinguishingAttributes": {
			"reference": "ZD2320",
			"Référence constructeur": "ZD2320",
			"Configuration publiée": "Perceuse d’angle 45°, mandrin 3 mm"
		}
	},
	"editorial": {
		"overview": "La ZD2320 est la perceuse d’angle 45° à mandrin 3 mm de la famille 0,3 hp. Elle donne 4 000 tr/min, 256 mm et 0,64 kg ; la ZD2320L prolonge le corps à 333 mm. Les ZD2328 utilisent une sortie filetée 1/4-28 et une tête à 90°. Les 3 cfm moyens ne sont pas transformés en consommation en charge ; le choix de tête et d’interface reste distinct.",
		"verifiedFacts": [
			"4 000 tr/min ; 256 mm ; 0,64 kg.",
			"Consommation moyenne : 3 cfm, pression de mesure non établie."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée.",
			"Le tableau publie une consommation moyenne de 3 cfm, sans pression de mesure associée. Aucun besoin en charge n’est extrapolé."
		]
	},
	"specifications": [
		{
			"label": "Référence constructeur",
			"value": "ZD2320",
			"evidenceIds": [
				"october-b-zipp-tools-p110"
			]
		},
		{
			"label": "Configuration publiée",
			"value": "Perceuse d’angle 45°, mandrin 3 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:perceuse-zipp-zd2320:0"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p110"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 110",
			"evidenceIds": [
				"october-b-zipp-tools-p110"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p110",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=110",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 110",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:perceuse-zipp-zd2320:0",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
			"sourceLabel": "ZIPP, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La ZD2320 est la perceuse d’angle 45° à mandrin 3 mm de la famille 0,3 hp. Elle donne 4 000 tr/min, 256 mm et 0,64 kg ; la ZD2320L prolonge le corps à 333 mm. Les ZD2328 utilisent une sortie filetée 1/4-28 et une tête à 90°. Les 3 cfm moyens ne sont pas transformés en consommation en charge ; le choix de tête et d’interface reste distinct. GET complet SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. Pages PDF lues : 110."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p110"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p110"
		],
		"demandExplanation": [
			"review:2026-11-16-reviews:perceuse-zipp-zd2320:0"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
