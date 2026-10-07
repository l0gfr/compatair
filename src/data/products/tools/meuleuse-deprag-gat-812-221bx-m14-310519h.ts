import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-deprag-gat-812-221bx-m14-310519h",
	"slug": "meuleuse-deprag-gat-812-221bx-m14-310519h",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "DEPRAG GAT 812-221BX-M14 (réf. 310519H)",
	"brand": "DEPRAG",
	"model": "GAT 812-221BX-M14",
	"mpn": "310519H",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 2000,
		"typical": 2000,
		"max": 2000
	},
	"recommendedHose": {
		"innerDiameterMm": 13
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-deprag-gat-812-221bx-m14-310519h.svg",
		"alt": "Repères techniques : DEPRAG GAT 812-221BX-M14 (réf. 310519H)",
		"sourceUrl": "https://www.depragusa.com/files/catalogs/dcz10321.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "deprag-gat-812-221bx-m14",
		"label": "Référence 310519H",
		"distinguishingAttributes": {
			"reference": "310519H",
			"Consommation en charge déclarée": "2,0 (70.6) m3/min (cfm)",
			"Consommation à vide déclarée": "0,56 (19.8) m3/min (cfm)"
		}
	},
	"editorial": {
		"overview": "DEPRAG GAT 812-221BX-M14 (réf. 310519H). Consommation de référence en fonctionnement : 2 000 L/min à 6,3 bar.",
		"verifiedFacts": [
			"Consommation en charge déclarée : 2,0 (70.6) m3/min (cfm).",
			"Consommation à vide déclarée : 0,56 (19.8) m3/min (cfm).",
			"Vitesse à vide : 12 000 tr/min.",
			"Puissance maximale déclarée : 2,2 (2.95) kW (hp).",
			"Diamètre de disque déclaré : Ø 125 mm.",
			"Diamètre intérieur du flexible : 13 (.47) mm (in).",
			"Dimensions L×H déclarées : 299x98 (11.8x3.9) mm (in).",
			"Masse déclarée : 2,3 (5.07) kg (lbs).",
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
			"value": "2,0 (70.6) m3/min (cfm)",
			"evidenceIds": [
				"october3d-tools-deprag-cz-catalog-p6"
			]
		},
		{
			"label": "Consommation à vide déclarée",
			"value": "0,56 (19.8) m3/min (cfm)",
			"evidenceIds": [
				"october3d-tools-deprag-cz-catalog-p6"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "12 000 tr/min",
			"evidenceIds": [
				"october3d-tools-deprag-cz-catalog-p6"
			]
		},
		{
			"label": "Puissance maximale déclarée",
			"value": "2,2 (2.95) kW (hp)",
			"evidenceIds": [
				"october3d-tools-deprag-cz-catalog-p6"
			]
		},
		{
			"label": "Diamètre de disque déclaré",
			"value": "Ø 125 mm",
			"evidenceIds": [
				"october3d-tools-deprag-cz-catalog-p6"
			]
		},
		{
			"label": "Diamètre intérieur du flexible",
			"value": "13 (.47) mm (in)",
			"evidenceIds": [
				"october3d-tools-deprag-cz-catalog-p6"
			]
		},
		{
			"label": "Dimensions L×H déclarées",
			"value": "299x98 (11.8x3.9) mm (in)",
			"evidenceIds": [
				"october3d-tools-deprag-cz-catalog-p6"
			]
		},
		{
			"label": "Masse déclarée",
			"value": "2,3 (5.07) kg (lbs)",
			"evidenceIds": [
				"october3d-tools-deprag-cz-catalog-p6"
			]
		},
		{
			"label": "Fixation du disque",
			"value": "M14",
			"evidenceIds": [
				"october3d-tools-deprag-cz-catalog-p6"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "2 m3/min",
			"evidenceIds": [
				"october3d-tools-deprag-cz-catalog-p6"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Specifications at 90 psi (6,3 bar)",
			"evidenceIds": [
				"october3d-tools-deprag-cz-catalog-p6"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-deprag-cz-catalog-p6",
			"sourceUrl": "https://www.depragusa.com/files/catalogs/dcz10321.pdf#page=6",
			"sourceLabel": "DEPRAG, document technique officiel, page PDF 6",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 51abc527ebd911c1d509eaebc1e94c928a8a68b2012ad3188c2b24dbc0154952. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-deprag-cz-catalog-p6"
		],
		"workingPressureBar": [
			"october3d-tools-deprag-cz-catalog-p6"
		],
		"recommendedHose": [
			"october3d-tools-deprag-cz-catalog-p6"
		],
		"airflowLpm": [
			"october3d-tools-deprag-cz-catalog-p6"
		]
	},
	"notes": [
		"Consommation de référence en fonctionnement : 2 000 L/min à 6,3 bar."
	]
};

export default product;
