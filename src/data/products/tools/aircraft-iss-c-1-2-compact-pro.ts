const product = {
	"id": "aircraft-iss-c-1-2-compact-pro",
	"slug": "aircraft-iss-c-1-2-compact-pro",
	"brand": "Aircraft",
	"model": "ISS-C 1/2\" Compact PRO",
	"mpn": "2401470",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Aircraft ISS-C 1/2\" Compact PRO",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-iss-c-1-2-compact-pro.webp",
		"alt": "Repères techniques Aircraft ISS-C 1/2\" Compact PRO, référence 2401470",
		"sourceUrl": "https://www.mystuermer.com/MeDaPro/Rohdaten/Dokumente/Betriebsanleitung_de/AC_2401470_BA_ISS-C_1_2_Compact_PRO_DE.pdf#page=4",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Aircraft ISS-C 1/2\" Compact PRO, référence 2401470. Consommation moyenne publiée : 128 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Vitesse de rotation : 11000 min¯¹.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 128 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : 2401470.",
			"Vitesse de rotation : 11000 min¯¹.",
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
				"aircraft-2401470-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 128 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"aircraft-2401470-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "11000 min¯¹",
			"evidenceIds": [
				"aircraft-2401470-20260927"
			]
		},
		{
			"label": "Mandrin ou entraînement publié",
			"value": "½ \"",
			"evidenceIds": [
				"aircraft-2401470-20260927"
			]
		},
		{
			"label": "Couple maximal de serrage",
			"value": "624 Nm",
			"evidenceIds": [
				"aircraft-2401470-20260927"
			]
		},
		{
			"label": "Couple maximal de desserrage",
			"value": "1302 Nm",
			"evidenceIds": [
				"aircraft-2401470-20260927"
			]
		},
		{
			"label": "Longueur approximative",
			"value": "153 mm",
			"evidenceIds": [
				"aircraft-2401470-20260927"
			]
		},
		{
			"label": "Largeur approximative",
			"value": "56 mm",
			"evidenceIds": [
				"aircraft-2401470-20260927"
			]
		},
		{
			"label": "Hauteur approximative",
			"value": "191.6 mm",
			"evidenceIds": [
				"aircraft-2401470-20260927"
			]
		},
		{
			"label": "Type indiqué par le fabricant",
			"value": "Industrial Impact Wrench",
			"evidenceIds": [
				"aircraft-2401470-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2401470-20260927",
			"sourceUrl": "https://www.mystuermer.com/MeDaPro/Rohdaten/Dokumente/Betriebsanleitung_de/AC_2401470_BA_ISS-C_1_2_Compact_PRO_DE.pdf#page=4",
			"sourceLabel": "Aircraft, notice ISS-C 1/2\" Compact PRO, référence 2401470, édition du 11 juillet 2019, page PDF 4",
			"sourceType": "manual",
			"retrievedAt": "2026-10-02",
			"confidence": "A",
			"notes": "La notice confirme 128 L/min de consommation moyenne et 6,2 bar à l’entrée de l’outil. Le diamètre de flexible de l’ancienne fiche n’est pas repris dans ce document et est retiré. SHA-256 de la réponse : 7714b203bb4ca100caa62840245b02ebd9667fd6f31326b459901d8beaa90d7c"
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2401470-20260927"
		],
		"workingPressureBar": [
			"aircraft-2401470-20260927"
		],
		"airflowLpm": [
			"aircraft-2401470-20260927"
		],
		"airflowBasis": [
			"aircraft-2401470-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 128,
		"typical": 128,
		"max": 128
	},
	"airflowBasis": "average"
};

export default product;
