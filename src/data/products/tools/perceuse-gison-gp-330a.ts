import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-gison-gp-330a",
	"slug": "perceuse-gison-gp-330a",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "GISON GP-330A",
	"brand": "GISON",
	"model": "GP-330A",
	"mpn": "GP-330A",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 450,
		"typical": 450,
		"max": 450
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-gison-gp-330a-technical-20261112-followup.svg",
		"alt": "Repères techniques : GISON GP-330A",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 12 novembre 2026"
	},
	"variant": {
		"familyId": "gison-gp-330a",
		"label": "Référence GP-330A",
		"distinguishingAttributes": {
			"reference": "GP-330A",
			"Masse": "0.62 kg",
			"Longueur": "175 mm"
		}
	},
	"editorial": {
		"overview": "GP-330A : perceuse droite à mandrin 1/4 pouce, vitesse maximale déclarée de 6 500 tr/min et longueur 175 mm. Les GP-330 et GP-330ST sont en mandrin 3/8 pouce à 2 500 et 2 600 tr/min, pour 225 et 218 mm. Le mandrin et le régime distinguent ces configurations.",
		"verifiedFacts": [
			"Masse : 0.62 kg.",
			"Longueur : 175 mm.",
			"Vitesse maximale publiée : 6500 tr/min.",
			"Diamètre de flexible publié : 6.5 mm.",
			"Référence constructeur : GP-330A.",
			"Type : Perceuse droite.",
			"Mandrin : 1/4 pouce."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "0.62 kg",
			"evidenceIds": [
				"october-b-gison-tools-p59"
			]
		},
		{
			"label": "Longueur",
			"value": "175 mm",
			"evidenceIds": [
				"october-b-gison-tools-p59"
			]
		},
		{
			"label": "Vitesse maximale publiée",
			"value": "6500 tr/min",
			"evidenceIds": [
				"october-b-gison-tools-p59"
			]
		},
		{
			"label": "Diamètre de flexible publié",
			"value": "6.5 mm",
			"evidenceIds": [
				"october-b-gison-tools-p59"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "GP-330A",
			"evidenceIds": [
				"october-b-gison-tools-p59"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended Air Pressure 90 psi (6.3 kg/cm2)",
			"evidenceIds": [
				"october-b-gison-tools-p59"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "GISON, catalogue pneumatique 2018–2019, page PDF 59",
			"evidenceIds": [
				"october-b-gison-tools-p59"
			]
		},
		{
			"label": "Type",
			"value": "Perceuse droite",
			"evidenceIds": [
				"review:2026-11-12-technical:perceuse-gison-gp-330a:0"
			]
		},
		{
			"label": "Mandrin",
			"value": "1/4 pouce",
			"evidenceIds": [
				"review:2026-11-12-technical:perceuse-gison-gp-330a:0"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p59",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=59",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 59",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-12-technical:perceuse-gison-gp-330a:0",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
			"sourceLabel": "GISON, document fabricant, pages PDF 59",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "GP-330A : perceuse droite à mandrin 1/4 pouce, vitesse maximale déclarée de 6 500 tr/min et longueur 175 mm. Les GP-330 et GP-330ST sont en mandrin 3/8 pouce à 2 500 et 2 600 tr/min, pour 225 et 218 mm. Le mandrin et le régime distinguent ces configurations. GET complet : SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Transcriptions historiques conservées."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p59"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p59"
		],
		"airflowLpm": [
			"october-b-gison-tools-p59"
		],
		"airflowBasis": [
			"october-b-gison-tools-p59"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 450 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
