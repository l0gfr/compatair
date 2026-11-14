import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gison-gp-8240c",
	"slug": "meuleuse-gison-gp-8240c",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GISON GP-8240C",
	"brand": "GISON",
	"model": "GP-8240C",
	"mpn": "GP-8240C",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 230,
		"typical": 230,
		"max": 230
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gison-gp-8240c-technical-20261112-followup.svg",
		"alt": "Repères techniques : GISON GP-8240C",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 12 novembre 2026"
	},
	"variant": {
		"familyId": "gison-gp-8240c",
		"label": "Référence GP-8240C",
		"distinguishingAttributes": {
			"reference": "GP-8240C",
			"Masse": "0.23 kg",
			"Longueur": "132 mm"
		}
	},
	"editorial": {
		"overview": "GP-8240C : micro-meuleuse à palettes composites, pince de 3 mm (1/8 pouce dans le tableau), 54 000 tr/min et 0,23 kg. La GP-8240B partage ces dimensions et cette vitesse ; la mention de palettes composites distingue la C. La GP-8240D accepte 3 et 6 mm à 35 000 tr/min.",
		"verifiedFacts": [
			"Masse : 0.23 kg.",
			"Longueur : 132 mm.",
			"Vitesse maximale publiée : 54000 tr/min.",
			"Diamètre de flexible publié : 5 mm.",
			"Référence constructeur : GP-8240C.",
			"Pince publiée : 3 mm (1/8 pouce).",
			"Palettes : Composites, Composite Blade."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "0.23 kg",
			"evidenceIds": [
				"october-b-gison-tools-p33"
			]
		},
		{
			"label": "Longueur",
			"value": "132 mm",
			"evidenceIds": [
				"october-b-gison-tools-p33"
			]
		},
		{
			"label": "Vitesse maximale publiée",
			"value": "54000 tr/min",
			"evidenceIds": [
				"october-b-gison-tools-p33"
			]
		},
		{
			"label": "Diamètre de flexible publié",
			"value": "5 mm",
			"evidenceIds": [
				"october-b-gison-tools-p33"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "GP-8240C",
			"evidenceIds": [
				"october-b-gison-tools-p33"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended Air Pressure 90 psi (6.3 kg/cm2)",
			"evidenceIds": [
				"october-b-gison-tools-p33"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "GISON, catalogue pneumatique 2018–2019, page PDF 33",
			"evidenceIds": [
				"october-b-gison-tools-p33"
			]
		},
		{
			"label": "Pince publiée",
			"value": "3 mm (1/8 pouce)",
			"evidenceIds": [
				"review:2026-11-12-technical:meuleuse-gison-gp-8240c:0"
			]
		},
		{
			"label": "Palettes",
			"value": "Composites, Composite Blade",
			"evidenceIds": [
				"review:2026-11-12-technical:meuleuse-gison-gp-8240c:0"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p33",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=33",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 33",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-12-technical:meuleuse-gison-gp-8240c:0",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
			"sourceLabel": "GISON, document fabricant, pages PDF 33",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "GP-8240C : micro-meuleuse à palettes composites, pince de 3 mm (1/8 pouce dans le tableau), 54 000 tr/min et 0,23 kg. La GP-8240B partage ces dimensions et cette vitesse ; la mention de palettes composites distingue la C. La GP-8240D accepte 3 et 6 mm à 35 000 tr/min. GET complet : SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Transcriptions historiques conservées."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p33"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p33"
		],
		"airflowLpm": [
			"october-b-gison-tools-p33"
		],
		"airflowBasis": [
			"october-b-gison-tools-p33"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 230 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
