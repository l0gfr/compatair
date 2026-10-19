import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-mas8",
	"slug": "fiam-mas8",
	"brand": "Fiam",
	"model": "MAS8",
	"mpn": "134610108",
	"categoryId": "taraudeuse",
	"category": "taraudeuse",
	"label": "Fiam MAS8",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-mas8.webp",
		"alt": "Repères techniques Fiam MAS8, référence 134610108",
		"sourceUrl": "https://www.fiamgroup.com/en/products/tappers/mas8/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "MAS8 134610108 : taraudeuse à démarrage par levier et poussée, donnée pour 500 tr/min et inversion en tirant sur l’outil. La capacité de 8 mm concerne la table de taraudage acier ; elle n’est pas une capacité de coupe à transposer à toute matière. Les 9 L/s déclarés correspondent à 540 L/min à 6,3 bar.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 134610108.",
			"Vitesse à vide : 500 tr/min.",
			"Masse publiée : 0.98 kg.",
			"Dimensions publiées : Ø 40 x L 240 mm."
		],
		"limitations": [
			"Le régime de consommation n’est pas qualifié. Le même code 134 610 108 figure dans le catalogue Mannesmann DEMAG 2017 sous MAS 8. Cette archive relie 6 bar à la puissance et à la vitesse, tandis que Fiam publie les données à 6,3 bar ; l’identité de version livrée doit être confirmée, sans mélanger les points de mesure.",
			"Le couple éventuel est indicatif : l’assemblage, l’accessoire et la pression dynamique influencent le résultat.",
			"Consommation déclarée par le fabricant, sans essai indépendant ni garantie d’un maximum à tous les régimes."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"evidenceIds": [
				"fiam-134610108-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-134610108-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "500 tr/min",
			"evidenceIds": [
				"fiam-134610108-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.98 kg",
			"evidenceIds": [
				"fiam-134610108-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 40 x L 240 mm",
			"evidenceIds": [
				"fiam-134610108-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Push start + lever start",
			"evidenceIds": [
				"fiam-134610108-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-134610108-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/tappers/mas8/",
			"sourceLabel": "Fiam, fiche technique MAS8, réf. 134610108",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-134610108-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-41.pdf#page=7",
			"sourceLabel": "Fiam, brochure technique en-41, p. 7",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		},
		{
			"id": "october2-tools-mannesmann-0-p64",
			"sourceUrl": "https://www.mannesmann-demag.com/bilder-und-dateien/downloads/kataloge/md_airtools_05_2017_e.pdf?type=download#page=64",
			"sourceLabel": "ProfiToolsNext, catalogue fabricant anglais 05/2017, page PDF 64",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9de8eb77aad6c7412b390db54a16646c71c0a4f9925ddf3ddfba1048b1779f3b. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-134610108-20260926"
		],
		"workingPressureBar": [
			"fiam-134610108-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-134610108-20260926"
		],
		"airflowBasis": [
			"fiam-134610108-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 540,
		"typical": 540,
		"max": 540
	},
	"airflowBasis": "unqualified"
};

export default product;
