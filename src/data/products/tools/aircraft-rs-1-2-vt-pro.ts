import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-rs-1-2-vt-pro",
	"slug": "aircraft-rs-1-2-vt-pro",
	"brand": "Aircraft",
	"model": "RS 1/2\" VT PRO",
	"mpn": "2401565",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Aircraft RS 1/2\" VT PRO",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-rs-1-2-vt-pro.webp",
		"alt": "Repères techniques Aircraft RS 1/2\" VT PRO, référence 2401565",
		"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-pneumatic-tools/rs-12-vt-pro-2401565/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Aircraft RS 1/2\" VT PRO, référence 2401565. Consommation moyenne publiée : 124 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Diamètre intérieur du flexible : 13 mm. Vitesse de rotation : 150 min¯¹.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 124 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : 2401565.",
			"Diamètre intérieur du flexible : 13 mm.",
			"Vitesse de rotation : 150 min¯¹.",
			"Mandrin ou entraînement publié : ½ \"."
		],
		"limitations": [
			"Le besoin réel dépend de la charge, du cycle et des pertes de pression dans le flexible. Aucune mesure physique CompatAir.",
			"Une consommation moyenne ne constitue pas un débit maximal en usage continu. Vérifier le régime réel auprès du fabricant avant dimensionnement."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"evidenceIds": [
				"aircraft-2401565-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 124 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"aircraft-2401565-20260927"
			]
		},
		{
			"label": "Diamètre intérieur du flexible",
			"value": "13 mm",
			"evidenceIds": [
				"aircraft-2401565-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "150 min¯¹",
			"evidenceIds": [
				"aircraft-2401565-20260927"
			]
		},
		{
			"label": "Mandrin ou entraînement publié",
			"value": "½ \"",
			"evidenceIds": [
				"aircraft-2401565-20260927"
			]
		},
		{
			"label": "Couple maximal de serrage",
			"value": "68 Nm",
			"evidenceIds": [
				"aircraft-2401565-20260927"
			]
		},
		{
			"label": "Couple maximal de desserrage",
			"value": "68 Nm",
			"evidenceIds": [
				"aircraft-2401565-20260927"
			]
		},
		{
			"label": "Longueur approximative",
			"value": "256 mm",
			"evidenceIds": [
				"aircraft-2401565-20260927"
			]
		},
		{
			"label": "Largeur approximative",
			"value": "47,8 mm",
			"evidenceIds": [
				"aircraft-2401565-20260927"
			]
		},
		{
			"label": "Hauteur approximative",
			"value": "56.3 mm",
			"evidenceIds": [
				"aircraft-2401565-20260927"
			]
		},
		{
			"label": "Type indiqué par le fabricant",
			"value": "Ratchet screwdriver",
			"evidenceIds": [
				"aircraft-2401565-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2401565-20260927",
			"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-pneumatic-tools/rs-12-vt-pro-2401565/",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2401565, réf. 2401565",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 124 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2401565-20260927"
		],
		"workingPressureBar": [
			"aircraft-2401565-20260927"
		],
		"airflowLpm": [
			"aircraft-2401565-20260927"
		],
		"airflowBasis": [
			"aircraft-2401565-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 124,
		"typical": 124,
		"max": 124
	},
	"airflowBasis": "average"
};

export default product;
