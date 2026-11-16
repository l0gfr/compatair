import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-gison-gp-937rd",
	"slug": "ponceuse-orbitale-gison-gp-937rd",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "GISON GP-937RD",
	"brand": "GISON",
	"model": "GP-937RD",
	"mpn": "GP-937RD",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 420,
		"typical": 420,
		"max": 420
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-gison-gp-937rd-technical-20261116-reviews.svg",
		"alt": "Repères techniques : GISON GP-937RD",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "gison-gp-937rd",
		"label": "Référence GP-937RD",
		"distinguishingAttributes": {
			"reference": "GP-937RD",
			"Masse": "1.10 kg",
			"Longueur": "122 mm"
		}
	},
	"editorial": {
		"overview": "La GP-937RD est une ponceuse à aspiration autonome, plateaux 5 ou 6 pouces et orbite 2,5 mm. La GP-937R n’intègre pas l’aspiration ; la GP-934RD passe à une orbite de 10 mm et un corps de 240 mm. La RD mesure 122 mm pour 1,10 kg à 9 000 tr/min. Les 0,42 m³/min publiés restent hors calcul de compatibilité faute de régime établi.",
		"verifiedFacts": [
			"Masse : 1.10 kg.",
			"Longueur : 122 mm.",
			"Vitesse à vide : 9000 tr/min.",
			"Diamètre de flexible publié : 6.5 mm.",
			"Référence constructeur : GP-937RD."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "1.10 kg",
			"evidenceIds": [
				"october-b-gison-tools-p37"
			]
		},
		{
			"label": "Longueur",
			"value": "122 mm",
			"evidenceIds": [
				"october-b-gison-tools-p37"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "9000 tr/min",
			"evidenceIds": [
				"october-b-gison-tools-p37"
			]
		},
		{
			"label": "Diamètre de flexible publié",
			"value": "6.5 mm",
			"evidenceIds": [
				"october-b-gison-tools-p37"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "GP-937RD",
			"evidenceIds": [
				"october-b-gison-tools-p37"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended Air Pressure 90 psi (6.3 kg/cm2)",
			"evidenceIds": [
				"october-b-gison-tools-p37"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "GISON, catalogue pneumatique 2018–2019, page PDF 37",
			"evidenceIds": [
				"october-b-gison-tools-p37"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p37",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=37",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 37",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:ponceuse-orbitale-gison-gp-937rd:0",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
			"sourceLabel": "GISON, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La GP-937RD est une ponceuse à aspiration autonome, plateaux 5 ou 6 pouces et orbite 2,5 mm. La GP-937R n’intègre pas l’aspiration ; la GP-934RD passe à une orbite de 10 mm et un corps de 240 mm. La RD mesure 122 mm pour 1,10 kg à 9 000 tr/min. Les 0,42 m³/min publiés restent hors calcul de compatibilité faute de régime établi. GET complet SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Pages PDF lues : 37."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p37"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p37"
		],
		"airflowLpm": [
			"october-b-gison-tools-p37"
		],
		"airflowBasis": [
			"october-b-gison-tools-p37"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 420 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
