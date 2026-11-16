import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-srs-1-2-ht-pro",
	"slug": "aircraft-srs-1-2-ht-pro",
	"brand": "Aircraft",
	"model": "SRS 1/2\" HT PRO",
	"mpn": "2401570",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Aircraft SRS 1/2\" HT PRO",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-srs-1-2-ht-pro-technical-20261116-reviews.svg",
		"alt": "Repères techniques Aircraft SRS 1/2\" HT PRO, référence 2401570",
		"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=255",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"editorial": {
		"overview": "Aircraft SRS 1/2 HT PRO : cliquet à chocs carré 1/2 pouce, réglage progressif au manche, 600 tr/min et 106 Nm en serrage comme en desserrage. Le RS 1/2 VT PRO atteint 150 tr/min et 68 Nm. Les 90 L/min explicitement moyens restent hors dimensionnement continu.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 90 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : 2401570.",
			"Diamètre intérieur du flexible : 13 mm.",
			"Vitesse de rotation : 600 min¯¹.",
			"Mandrin ou entraînement publié : ½ \".",
			"Carré : 1/2 pouce.",
			"Vitesse : 600 tr/min.",
			"Couples maximaux serrage / desserrage : 106 / 106 Nm.",
			"Dimensions / masse approximatives : 280 × 45,5 × 56,3 mm / 1,3 kg.",
			"Consommation moyenne explicite : 90 L/min."
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
				"aircraft-2401570-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 90 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"aircraft-2401570-20260927"
			]
		},
		{
			"label": "Diamètre intérieur du flexible",
			"value": "13 mm",
			"evidenceIds": [
				"aircraft-2401570-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "600 min¯¹",
			"evidenceIds": [
				"aircraft-2401570-20260927"
			]
		},
		{
			"label": "Mandrin ou entraînement publié",
			"value": "½ \"",
			"evidenceIds": [
				"aircraft-2401570-20260927"
			]
		},
		{
			"label": "Couple maximal de serrage",
			"value": "106 Nm",
			"evidenceIds": [
				"aircraft-2401570-20260927"
			]
		},
		{
			"label": "Couple maximal de desserrage",
			"value": "106 Nm",
			"evidenceIds": [
				"aircraft-2401570-20260927"
			]
		},
		{
			"label": "Longueur approximative",
			"value": "280 mm",
			"evidenceIds": [
				"aircraft-2401570-20260927"
			]
		},
		{
			"label": "Largeur approximative",
			"value": "45,5 mm",
			"evidenceIds": [
				"aircraft-2401570-20260927"
			]
		},
		{
			"label": "Hauteur approximative",
			"value": "56.3 mm",
			"evidenceIds": [
				"aircraft-2401570-20260927"
			]
		},
		{
			"label": "Type indiqué par le fabricant",
			"value": "Impact ratchet",
			"evidenceIds": [
				"aircraft-2401570-20260927"
			]
		},
		{
			"label": "Carré",
			"value": "1/2 pouce",
			"evidenceIds": [
				"review:2026-11-16-reviews:aircraft-srs-1-2-ht-pro:0"
			]
		},
		{
			"label": "Vitesse",
			"value": "600 tr/min",
			"evidenceIds": [
				"review:2026-11-16-reviews:aircraft-srs-1-2-ht-pro:0"
			]
		},
		{
			"label": "Couples maximaux serrage / desserrage",
			"value": "106 / 106 Nm",
			"evidenceIds": [
				"review:2026-11-16-reviews:aircraft-srs-1-2-ht-pro:0"
			]
		},
		{
			"label": "Dimensions / masse approximatives",
			"value": "280 × 45,5 × 56,3 mm / 1,3 kg",
			"evidenceIds": [
				"review:2026-11-16-reviews:aircraft-srs-1-2-ht-pro:0"
			]
		},
		{
			"label": "Consommation moyenne explicite",
			"value": "90 L/min",
			"evidenceIds": [
				"review:2026-11-16-reviews:aircraft-srs-1-2-ht-pro:0"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2401570-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2401570, réf. 2401570 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 90 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue tools. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : 22da35f9dfdf45646a1c9769247d976d34730e51aa9af02d9b5f12d55257222c. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2401570-documentation-20261023",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=255",
			"sourceLabel": "AIRCRAFT / Stürmer Maschinen, AIRCRAFT Hauptkatalog 2026/27, p. 255 (article 2401570)",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : OXOMI, portail public MROSE, fournisseur Stürmer 702076. Empreinte PDF SHA-256 : ac23fe023c6135a0a0d0cd0e0a47b3310f846a7a6c6e3f370ed32d1d7327f99d. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		},
		{
			"id": "review:2026-11-16-reviews:aircraft-srs-1-2-ht-pro:0",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=255",
			"sourceLabel": "Aircraft, document constructeur relu le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Aircraft SRS 1/2 HT PRO : cliquet à chocs carré 1/2 pouce, réglage progressif au manche, 600 tr/min et 106 Nm en serrage comme en desserrage. Le RS 1/2 VT PRO atteint 150 tr/min et 68 Nm. Les 90 L/min explicitement moyens restent hors dimensionnement continu. GET complet SHA-256 ac23fe023c6135a0a0d0cd0e0a47b3310f846a7a6c6e3f370ed32d1d7327f99d. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2401570-20260927"
		],
		"workingPressureBar": [
			"aircraft-2401570-20260927"
		],
		"airflowLpm": [
			"aircraft-2401570-20260927"
		],
		"airflowBasis": [
			"aircraft-2401570-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 90,
		"typical": 90,
		"max": 90
	},
	"airflowBasis": "average"
};

export default product;
