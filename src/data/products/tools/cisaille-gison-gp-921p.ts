import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cisaille-gison-gp-921p",
	"slug": "cisaille-gison-gp-921p",
	"categoryId": "perceuse",
	"category": "Perceuse pneumatique",
	"label": "Perceuse à dépointer GISON GP-921P",
	"brand": "GISON",
	"model": "GP-921P",
	"mpn": "GP-921P",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 560,
		"typical": 560,
		"max": 560
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/cisaille-gison-gp-921p.webp",
		"alt": "Repères techniques : GISON GP-921P",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-921p",
		"label": "Référence GP-921P",
		"distinguishingAttributes": {
			"reference": "GP-921P",
			"Masse": "1.20 kg",
			"Longueur": "250 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-921P : perceuse à dépointer. Capacité 8 mm, 1800 tr/min, longueur 250 mm et masse 1,20 kg. Consommation en charge à documenter.",
		"verifiedFacts": [
			"Perceuse à dépointer. Capacité 8 mm, 1800 tr/min, longueur 250 mm et masse 1,20 kg.",
			"Masse : 1.20 kg.",
			"Longueur : 250 mm.",
			"Vitesse à vide : 1800 tr/min.",
			"Référence constructeur : GP-921P."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "1.20 kg",
			"evidenceIds": [
				"october-b-gison-tools-p80"
			]
		},
		{
			"label": "Longueur",
			"value": "250 mm",
			"evidenceIds": [
				"october-b-gison-tools-p80"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1800 tr/min",
			"evidenceIds": [
				"october-b-gison-tools-p80"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "GP-921P",
			"evidenceIds": [
				"october-b-gison-tools-p80"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended Air Pressure 90 psi (6.3 kg/cm2)",
			"evidenceIds": [
				"october-b-gison-tools-p80"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "GISON, catalogue pneumatique 2018–2019, page PDF 80",
			"evidenceIds": [
				"october-b-gison-tools-p80"
			]
		},
		{
			"label": "Fonction et configuration",
			"value": "Capacité 8 mm, 1800 tr/min, longueur 250 mm et masse 1,20 kg.",
			"evidenceIds": [
				"review:2026-11-06-followup:cisaille-gison-gp-921p:1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p80",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=80",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 80",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-06-followup:cisaille-gison-gp-921p:1",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=80",
			"sourceLabel": "GISON, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Lecture visuelle page PDF 80 : Air Spot Drill, capacité 8 mm, 1800 tr/min, 250 mm et 1,20 kg, contre GP-921A 1400 tr/min et 310 mm. La catégorie cisaille est erronée ; conserver identité et URL historique, corriger l'usage vers perceuse à dépointer. SHA-256 du document complet : a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p80"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p80"
		],
		"airflowLpm": [
			"october-b-gison-tools-p80"
		],
		"airflowBasis": [
			"october-b-gison-tools-p80"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 560 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
