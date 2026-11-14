import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "derouilleur-a-aiguilles-gison-gp-851b",
	"slug": "derouilleur-a-aiguilles-gison-gp-851b",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "GISON GP-851B",
	"brand": "GISON",
	"model": "GP-851B",
	"mpn": "GP-851B",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 210,
		"typical": 210,
		"max": 210
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/derouilleur-a-aiguilles-gison-gp-851b-technical-20261112-followup.svg",
		"alt": "Repères techniques : GISON GP-851B",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 12 novembre 2026"
	},
	"variant": {
		"familyId": "gison-gp-851b",
		"label": "Référence GP-851B",
		"distinguishingAttributes": {
			"reference": "GP-851B",
			"Masse": "2.60 kg",
			"Longueur": "250 mm"
		}
	},
	"editorial": {
		"overview": "GP-851B : dérouilleur à 19 aiguilles de 3 mm et 3 700 coups/min, longueur 250 mm et masse 2,60 kg. La GP-851 est la configuration de 460 mm à deux fonctions. La longueur et la configuration d’aiguilles restent des critères distincts du débit.",
		"verifiedFacts": [
			"Masse : 2.60 kg.",
			"Longueur : 250 mm.",
			"Référence constructeur : GP-851B.",
			"Aiguilles : 19 × 3 mm.",
			"Cadence : 3 700 coups/min."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "2.60 kg",
			"evidenceIds": [
				"october-b-gison-tools-p53"
			]
		},
		{
			"label": "Longueur",
			"value": "250 mm",
			"evidenceIds": [
				"october-b-gison-tools-p53"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "GP-851B",
			"evidenceIds": [
				"october-b-gison-tools-p53"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended Air Pressure 90 psi (6.3 kg/cm2)",
			"evidenceIds": [
				"october-b-gison-tools-p53"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "GISON, catalogue pneumatique 2018–2019, page PDF 53",
			"evidenceIds": [
				"october-b-gison-tools-p53"
			]
		},
		{
			"label": "Aiguilles",
			"value": "19 × 3 mm",
			"evidenceIds": [
				"review:2026-11-14-technical:derouilleur-a-aiguilles-gison-gp-851b:0"
			]
		},
		{
			"label": "Cadence",
			"value": "3 700 coups/min",
			"evidenceIds": [
				"review:2026-11-14-technical:derouilleur-a-aiguilles-gison-gp-851b:0"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p53",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=53",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 53",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-14-technical:derouilleur-a-aiguilles-gison-gp-851b:0",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
			"sourceLabel": "GISON, document fabricant, pages PDF 53",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-14",
			"confidence": "B",
			"notes": "Relecture du 14 novembre des pages PDF 53 et 54 : GP-851B, 19 aiguilles de 3 mm, 3700 coups/min, 250 mm, 2,60 kg ; GP-851 à deux fonctions, 460 mm. La comparaison publiée se limite à cette référence explicite : le suffixe imprimé I de la configuration de 290 mm ne devient pas un chiffre 1. GET complet : SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Historique antérieur conservé."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p53"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p53"
		],
		"airflowLpm": [
			"october-b-gison-tools-p53"
		],
		"airflowBasis": [
			"october-b-gison-tools-p53"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 210 L/min ; pression publiée : 6,205 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
