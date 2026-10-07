import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-deprag-ga-810-050bx-6061139a",
	"slug": "meuleuse-deprag-ga-810-050bx-6061139a",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "DEPRAG GA 810-050BX (réf. 6061139A)",
	"brand": "DEPRAG",
	"model": "GA 810-050BX",
	"mpn": "6061139A",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 350,
		"typical": 350,
		"max": 350
	},
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-deprag-ga-810-050bx-6061139a.svg",
		"alt": "Repères techniques : DEPRAG GA 810-050BX (réf. 6061139A)",
		"sourceUrl": "https://www.depragusa.com/files/catalogs/dcz10321.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "deprag-ga-810-050bx",
		"label": "Référence 6061139A",
		"distinguishingAttributes": {
			"reference": "6061139A",
			"Consommation en charge déclarée": "0,35 (12.4) m3/min (cfm)",
			"Consommation à vide déclarée": "0,85 (30.0) m3/min (cfm)"
		}
	},
	"editorial": {
		"overview": "DEPRAG GA 810-050BX (réf. 6061139A). Consommation de référence en fonctionnement : 350 L/min à 6,3 bar.",
		"verifiedFacts": [
			"Consommation en charge déclarée : 0,35 (12.4) m3/min (cfm).",
			"Consommation à vide déclarée : 0,85 (30.0) m3/min (cfm).",
			"Vitesse à vide : 15 300 tr/min.",
			"Puissance maximale déclarée : 0,5 (.67) kW (hp).",
			"Diamètre de disque déclaré : Ø 100 mm (4\").",
			"Diamètre intérieur du flexible : 10 (.39) mm (in).",
			"Dimensions L×H déclarées : 236x72 (9.3x2.8) mm (in).",
			"Masse déclarée : 1,3 (2.87) kg (lbs).",
			"Fixation du disque : M14."
		],
		"limitations": [
			"La demande au point documenté n’est réduite par aucun facteur de marche implicite.",
			"Le document constructeur reste hébergé officiellement ; sa date d’édition et la disponibilité commerciale actuelle de cette version ne sont pas établies.",
			"Les unités métriques et impériales sont conservées telles que publiées ; aucune condition thermodynamique n’est ajoutée.",
			"Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Consommation en charge déclarée",
			"value": "0,35 (12.4) m3/min (cfm)",
			"evidenceIds": [
				"october3d-tools-deprag-cz-catalog-p4"
			]
		},
		{
			"label": "Consommation à vide déclarée",
			"value": "0,85 (30.0) m3/min (cfm)",
			"evidenceIds": [
				"october3d-tools-deprag-cz-catalog-p4"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "15 300 tr/min",
			"evidenceIds": [
				"october3d-tools-deprag-cz-catalog-p4"
			]
		},
		{
			"label": "Puissance maximale déclarée",
			"value": "0,5 (.67) kW (hp)",
			"evidenceIds": [
				"october3d-tools-deprag-cz-catalog-p4"
			]
		},
		{
			"label": "Diamètre de disque déclaré",
			"value": "Ø 100 mm (4\")",
			"evidenceIds": [
				"october3d-tools-deprag-cz-catalog-p4"
			]
		},
		{
			"label": "Diamètre intérieur du flexible",
			"value": "10 (.39) mm (in)",
			"evidenceIds": [
				"october3d-tools-deprag-cz-catalog-p4"
			]
		},
		{
			"label": "Dimensions L×H déclarées",
			"value": "236x72 (9.3x2.8) mm (in)",
			"evidenceIds": [
				"october3d-tools-deprag-cz-catalog-p4"
			]
		},
		{
			"label": "Masse déclarée",
			"value": "1,3 (2.87) kg (lbs)",
			"evidenceIds": [
				"october3d-tools-deprag-cz-catalog-p4"
			]
		},
		{
			"label": "Fixation du disque",
			"value": "M14",
			"evidenceIds": [
				"october3d-tools-deprag-cz-catalog-p4"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "0.35 m3/min",
			"evidenceIds": [
				"october3d-tools-deprag-cz-catalog-p4"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Specifications at 90 psi (6,3 bar)",
			"evidenceIds": [
				"october3d-tools-deprag-cz-catalog-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-deprag-cz-catalog-p4",
			"sourceUrl": "https://www.depragusa.com/files/catalogs/dcz10321.pdf#page=4",
			"sourceLabel": "DEPRAG, document technique officiel, page PDF 4",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 51abc527ebd911c1d509eaebc1e94c928a8a68b2012ad3188c2b24dbc0154952. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-deprag-cz-catalog-p4"
		],
		"workingPressureBar": [
			"october3d-tools-deprag-cz-catalog-p4"
		],
		"recommendedHose": [
			"october3d-tools-deprag-cz-catalog-p4"
		],
		"airflowLpm": [
			"october3d-tools-deprag-cz-catalog-p4"
		]
	},
	"notes": [
		"Consommation de référence en fonctionnement : 350 L/min à 6,3 bar."
	]
};

export default product;
