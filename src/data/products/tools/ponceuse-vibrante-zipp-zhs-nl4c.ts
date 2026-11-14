import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-vibrante-zipp-zhs-nl4c",
	"slug": "ponceuse-vibrante-zipp-zhs-nl4c",
	"categoryId": "ponceuse-vibrante",
	"category": "ponceuse-vibrante",
	"label": "ZIPP ZHS-NL4C",
	"brand": "ZIPP",
	"model": "ZHS-NL4C",
	"mpn": "ZHS-NL4C",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-vibrante-zipp-zhs-nl4c-technical-20261112-followup.svg",
		"alt": "Repères techniques : ZIPP ZHS-NL4C",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 12 novembre 2026"
	},
	"variant": {
		"familyId": "zipp-zhs-nl4c",
		"label": "Référence ZHS-NL4C",
		"distinguishingAttributes": {
			"reference": "ZHS-NL4C",
			"Vitesse à vide": "8500 tr/min",
			"Masse": "1.5 kg"
		}
	},
	"editorial": {
		"overview": "ZHSNL4C : ponceuse de 0,5 HP sans aspiration, fixation d’abrasif à pinces, orbite 5 mm et 8 500 tr/min pour 1,5 kg. La ZHSNL4 sans C est publiée à 7 500 tr/min dans une autre table. La fixation et le régime identifient la configuration ; la moyenne de 3 cfm reste hors calcul en charge.",
		"verifiedFacts": [
			"Vitesse à vide : 8500 tr/min.",
			"Masse : 1.5 kg.",
			"Référence constructeur : ZHS-NL4C."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "8500 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p146"
			]
		},
		{
			"label": "Masse",
			"value": "1.5 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p146"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZHS-NL4C",
			"evidenceIds": [
				"october-b-zipp-tools-p146"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Pression de consommation non établie sur cette page.",
			"evidenceIds": [
				"october-b-zipp-tools-p146"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "84,951 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p146"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 146",
			"evidenceIds": [
				"october-b-zipp-tools-p146"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p146",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=146",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 146",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-12-technical:ponceuse-vibrante-zipp-zhs-nl4c:0",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
			"sourceLabel": "ZIPP, document fabricant, pages PDF 146",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "ZHSNL4C0,5HPsansaspirationfixationpinces,orbite5mm8500tr/min1,5kg. Ne pas confondreZHSNL4sansC7500tr/min de la page voisine ; expliciter variante de commande/formegénération et ne pasinventer identité du suffixeA.3cfmmoyenne sans pression. GET complet : SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. Historique conservé."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p146"
		],
		"workingPressureBar": [
			"review:2026-11-12-technical:ponceuse-vibrante-zipp-zhs-nl4c:0"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p146"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
