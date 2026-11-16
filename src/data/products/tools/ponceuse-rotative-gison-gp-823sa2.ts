import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-rotative-gison-gp-823sa2",
	"slug": "ponceuse-rotative-gison-gp-823sa2",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "GISON GP-823SA2",
	"brand": "GISON",
	"model": "GP-823SA2",
	"mpn": "GP-823SA2",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 490,
		"typical": 490,
		"max": 490
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-rotative-gison-gp-823sa2-technical-20261116-reviews.svg",
		"alt": "Repères techniques : GISON GP-823SA2",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "gison-gp-823sa2",
		"label": "Référence GP-823SA2",
		"distinguishingAttributes": {
			"reference": "GP-823SA2",
			"Masse": "0.37 kg",
			"Longueur": "115 mm"
		}
	},
	"editorial": {
		"overview": "La GP-823SA2 est une mini-ponceuse rotative sans engrenage, plateau 2 pouces et vitesse de 24 000 tr/min. La SA3 passe à 3 pouces et 18 000 tr/min ; la GP-823SB reste à 2 pouces mais tourne à 15 000 tr/min. Le corps de la SA2 mesure 115 mm pour 0,37 kg. Les 0,49 m³/min du tableau n’ont pas de régime établi et restent hors dimensionnement.",
		"verifiedFacts": [
			"Masse : 0.37 kg.",
			"Longueur : 115 mm.",
			"Diamètre de flexible publié : 5.0 mm.",
			"Référence constructeur : GP-823SA2."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "0.37 kg",
			"evidenceIds": [
				"october-b-gison-tools-p44"
			]
		},
		{
			"label": "Longueur",
			"value": "115 mm",
			"evidenceIds": [
				"october-b-gison-tools-p44"
			]
		},
		{
			"label": "Diamètre de flexible publié",
			"value": "5.0 mm",
			"evidenceIds": [
				"october-b-gison-tools-p44"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "GP-823SA2",
			"evidenceIds": [
				"october-b-gison-tools-p44"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended Air Pressure 90 psi (6.3 kg/cm2)",
			"evidenceIds": [
				"october-b-gison-tools-p44"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "GISON, catalogue pneumatique 2018–2019, page PDF 44",
			"evidenceIds": [
				"october-b-gison-tools-p44"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p44",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=44",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 44",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:ponceuse-rotative-gison-gp-823sa2:0",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
			"sourceLabel": "GISON, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La GP-823SA2 est une mini-ponceuse rotative sans engrenage, plateau 2 pouces et vitesse de 24 000 tr/min. La SA3 passe à 3 pouces et 18 000 tr/min ; la GP-823SB reste à 2 pouces mais tourne à 15 000 tr/min. Le corps de la SA2 mesure 115 mm pour 0,37 kg. Les 0,49 m³/min du tableau n’ont pas de régime établi et restent hors dimensionnement. GET complet SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Pages PDF lues : 44."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p44"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p44"
		],
		"airflowLpm": [
			"october-b-gison-tools-p44"
		],
		"airflowBasis": [
			"october-b-gison-tools-p44"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 490 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
