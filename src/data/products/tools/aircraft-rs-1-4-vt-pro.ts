import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-rs-1-4-vt-pro",
	"slug": "aircraft-rs-1-4-vt-pro",
	"brand": "Aircraft",
	"model": "RS 1/4\" VT PRO",
	"mpn": "2401560",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Aircraft RS 1/4\" VT PRO",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-rs-1-4-vt-pro.webp",
		"alt": "Repères techniques Aircraft RS 1/4\" VT PRO, référence 2401560",
		"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit ; fondée sur le relevé fabricant historique conservé par CompatAir"
	},
	"editorial": {
		"overview": "Aircraft RS 1/4\" VT PRO, référence 2401560. Consommation moyenne publiée : 122 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Diamètre intérieur du flexible : 13 mm. Vitesse de rotation : 200 min¯¹.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 122 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : 2401560.",
			"Diamètre intérieur du flexible : 13 mm.",
			"Vitesse de rotation : 200 min¯¹.",
			"Mandrin ou entraînement publié : ¼ \"."
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
				"aircraft-2401560-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 122 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"aircraft-2401560-20260927"
			]
		},
		{
			"label": "Diamètre intérieur du flexible",
			"value": "13 mm",
			"evidenceIds": [
				"aircraft-2401560-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "200 min¯¹",
			"evidenceIds": [
				"aircraft-2401560-20260927"
			]
		},
		{
			"label": "Mandrin ou entraînement publié",
			"value": "¼ \"",
			"evidenceIds": [
				"aircraft-2401560-20260927"
			]
		},
		{
			"label": "Couple maximal de serrage",
			"value": "41 Nm",
			"evidenceIds": [
				"aircraft-2401560-20260927"
			]
		},
		{
			"label": "Couple maximal de desserrage",
			"value": "41 Nm",
			"evidenceIds": [
				"aircraft-2401560-20260927"
			]
		},
		{
			"label": "Longueur approximative",
			"value": "196 mm",
			"evidenceIds": [
				"aircraft-2401560-20260927"
			]
		},
		{
			"label": "Largeur approximative",
			"value": "40.8 mm",
			"evidenceIds": [
				"aircraft-2401560-20260927"
			]
		},
		{
			"label": "Hauteur approximative",
			"value": "49 mm",
			"evidenceIds": [
				"aircraft-2401560-20260927"
			]
		},
		{
			"label": "Type indiqué par le fabricant",
			"value": "Ratchet screwdriver",
			"evidenceIds": [
				"aircraft-2401560-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2401560-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2401560, réf. 2401560 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 122 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue tools. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : 22da35f9dfdf45646a1c9769247d976d34730e51aa9af02d9b5f12d55257222c. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2401560-documentation-20261023",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=255",
			"sourceLabel": "AIRCRAFT / Stürmer Maschinen, AIRCRAFT Hauptkatalog 2026/27, p. 255 (article 2401560)",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : OXOMI, portail public MROSE, fournisseur Stürmer 702076. Empreinte PDF SHA-256 : ac23fe023c6135a0a0d0cd0e0a47b3310f846a7a6c6e3f370ed32d1d7327f99d. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2401560-20260927"
		],
		"workingPressureBar": [
			"aircraft-2401560-20260927"
		],
		"airflowLpm": [
			"aircraft-2401560-20260927"
		],
		"airflowBasis": [
			"aircraft-2401560-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 122,
		"typical": 122,
		"max": 122
	},
	"airflowBasis": "average"
};

export default product;
