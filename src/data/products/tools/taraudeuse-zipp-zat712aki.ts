import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "taraudeuse-zipp-zat712aki",
	"slug": "taraudeuse-zipp-zat712aki",
	"categoryId": "taraudeuse",
	"category": "taraudeuse",
	"label": "ZIPP ZAT712AKI",
	"brand": "ZIPP",
	"model": "ZAT712AKI",
	"mpn": "ZAT712AKI",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 198,
		"typical": 198,
		"max": 198
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/taraudeuse-zipp-zat712aki-technical-20261116-reviews.svg",
		"alt": "Repères techniques : ZIPP ZAT712AKI",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "zipp-zat712aki",
		"label": "Référence ZAT712AKI",
		"distinguishingAttributes": {
			"reference": "ZAT712AKI",
			"Vitesse à vide": "150 tr/min",
			"Masse": "1.77 kg"
		}
	},
	"editorial": {
		"overview": "La ZAT712AKI est une taraudeuse à échappement dans la poignée, pour M6–M12 dans l’aluminium et M6–M8 dans le fer. Elle publie 150 tr/min et 245 mm, contre 1 000 tr/min pour la ZAT415B2 et une autre capacité. Les 198 L/min sont moyens, à distinguer d’une consommation en charge. L’en-tête de pression de 90 psi ne suffit pas à transformer cette moyenne en demande continue.",
		"verifiedFacts": [
			"Vitesse à vide : 150 tr/min.",
			"Masse : 1.77 kg.",
			"Référence constructeur : ZAT712AKI."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "150 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p157"
			]
		},
		{
			"label": "Masse",
			"value": "1.77 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p157"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZAT712AKI",
			"evidenceIds": [
				"october-b-zipp-tools-p157"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Specification(air pressure at 90psi, 6.2",
			"evidenceIds": [
				"october-b-zipp-tools-p157"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 157",
			"evidenceIds": [
				"october-b-zipp-tools-p157"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p157",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=157",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 157",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:taraudeuse-zipp-zat712aki:0",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
			"sourceLabel": "ZIPP, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La ZAT712AKI est une taraudeuse à échappement dans la poignée, pour M6–M12 dans l’aluminium et M6–M8 dans le fer. Elle publie 150 tr/min et 245 mm, contre 1 000 tr/min pour la ZAT415B2 et une autre capacité. Les 198 L/min sont moyens, à distinguer d’une consommation en charge. L’en-tête de pression de 90 psi ne suffit pas à transformer cette moyenne en demande continue. GET complet SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. Pages PDF lues : 157."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p157"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p157"
		],
		"airflowLpm": [
			"october-b-zipp-tools-p157"
		],
		"airflowBasis": [
			"october-b-zipp-tools-p157"
		]
	},
	"notes": [
		"Consommation moyenne : 198 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
