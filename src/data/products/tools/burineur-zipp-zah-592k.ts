import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-zipp-zah-592k",
	"slug": "burineur-zipp-zah-592k",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "ZIPP ZAH-592K",
	"brand": "ZIPP",
	"model": "ZAH-592K",
	"mpn": "ZAH-592K",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "Le ZAH-592 du coffret publie 430 L/min en moyenne. Ce régime ne permet pas le dimensionnement continu et la pression de service ne constitue pas une mesure en charge.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-zipp-zah-592k-technical-20261116-reviews.svg",
		"alt": "Repères techniques : ZIPP ZAH-592K",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "zipp-zah-592k",
		"label": "Référence ZAH-592K",
		"distinguishingAttributes": {
			"reference": "ZAH-592K",
			"Référence constructeur": "ZAH-592K",
			"Configuration publiée": "Coffret ZAH-592, ressort 192913 et cinq burins listés"
		}
	},
	"editorial": {
		"overview": "Le ZAH-592K est le coffret du burineur à emmanchement rond ZAH-592 ; le 592HK utilise la variante hexagonale. Le coffret ajoute le ressort de retenue et les burins listés, sans constituer un nouveau mécanisme. Le 592 publie 4 000 coups/min et 50 mm de course, contre 3 000 et 66 mm pour le 593. Les 430 L/min sont moyens ; aucun débit continu n’en est calculé.",
		"verifiedFacts": [
			"Emmanchement rond 10,2 mm ; course 50 mm ; 4 000 coups/min.",
			"Consommation moyenne du ZAH-592 : 430 L/min, hors calcul continu."
		],
		"limitations": [
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée.",
			"Le ZAH-592 du coffret publie 430 L/min en moyenne. Ce régime ne permet pas le dimensionnement continu et la pression de service ne constitue pas une mesure en charge."
		]
	},
	"specifications": [
		{
			"label": "Référence constructeur",
			"value": "ZAH-592K",
			"evidenceIds": [
				"october-b-zipp-tools-p88"
			]
		},
		{
			"label": "Configuration publiée",
			"value": "Coffret ZAH-592, ressort 192913 et cinq burins listés",
			"evidenceIds": [
				"review:2026-11-16-reviews:burineur-zipp-zah-592k:0"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Operating Air Pressure: 90psi/6.2",
			"evidenceIds": [
				"october-b-zipp-tools-p88"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 88",
			"evidenceIds": [
				"october-b-zipp-tools-p88"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p88",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=88",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 88",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:burineur-zipp-zah-592k:0",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
			"sourceLabel": "ZIPP, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Le ZAH-592K est le coffret du burineur à emmanchement rond ZAH-592 ; le 592HK utilise la variante hexagonale. Le coffret ajoute le ressort de retenue et les burins listés, sans constituer un nouveau mécanisme. Le 592 publie 4 000 coups/min et 50 mm de course, contre 3 000 et 66 mm pour le 593. Les 430 L/min sont moyens ; aucun débit continu n’en est calculé. GET complet SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. Pages PDF lues : 88."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p88"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p88"
		],
		"demandExplanation": [
			"review:2026-11-16-reviews:burineur-zipp-zah-592k:0"
		]
	},
	"notes": [
		"La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance."
	]
};

export default product;
