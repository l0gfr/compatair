import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-tts-pro",
	"slug": "aircraft-tts-pro",
	"brand": "Aircraft",
	"model": "TTS PRO",
	"mpn": "2403485",
	"categoryId": "tronconneuse",
	"category": "tronconneuse",
	"label": "Aircraft TTS PRO",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-tts-pro.webp",
		"alt": "Repères techniques Aircraft TTS PRO, référence 2403485",
		"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit ; fondée sur le relevé fabricant historique conservé par CompatAir"
	},
	"editorial": {
		"overview": "Aircraft TTS PRO, référence 2403485. Consommation moyenne publiée : 252 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Diamètre intérieur du flexible : 10 mm. Diamètre de disque : 100 mm.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 252 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : 2403485.",
			"Diamètre intérieur du flexible : 10 mm.",
			"Diamètre de disque : 100 mm.",
			"Longueur approximative : 371 mm."
		],
		"limitations": [
			"Le besoin réel dépend de la charge, du cycle et des pertes de pression dans le flexible. Aucune mesure physique CompatAir.",
			"Une consommation moyenne ne constitue pas un débit maximal en usage continu. Vérifier le régime réel auprès du fabricant avant dimensionnement.",
			"La brochure AIRCRAFT automne/hiver 2026/27 publie 252 L/min moyens ; le catalogue général 2026/27 indique 113 L/min sans préciser le régime. Ces déclarations restent distinctes."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"evidenceIds": [
				"aircraft-2403485-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 252 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"aircraft-2403485-20260927"
			]
		},
		{
			"label": "Diamètre intérieur du flexible",
			"value": "10 mm",
			"evidenceIds": [
				"aircraft-2403485-20260927"
			]
		},
		{
			"label": "Diamètre de disque",
			"value": "100 mm",
			"evidenceIds": [
				"aircraft-2403485-20260927"
			]
		},
		{
			"label": "Longueur approximative",
			"value": "371 mm",
			"evidenceIds": [
				"aircraft-2403485-20260927"
			]
		},
		{
			"label": "Largeur approximative",
			"value": "112 mm",
			"evidenceIds": [
				"aircraft-2403485-20260927"
			]
		},
		{
			"label": "Hauteur approximative",
			"value": "73.9 mm",
			"evidenceIds": [
				"aircraft-2403485-20260927"
			]
		},
		{
			"label": "Masse approximative",
			"value": "1.7 kg",
			"evidenceIds": [
				"aircraft-2403485-20260927"
			]
		},
		{
			"label": "Type indiqué par le fabricant",
			"value": "Extended corner grinderExtended corner grinder",
			"evidenceIds": [
				"aircraft-2403485-20260927"
			]
		},
		{
			"label": "Écart documentaire fabricant",
			"value": "La brochure AIRCRAFT automne/hiver 2026/27 publie 252 L/min moyens ; le catalogue général 2026/27 indique 113 L/min sans préciser le régime. Ces déclarations restent distinctes.",
			"evidenceIds": [
				"aircraft-2403485-20260927",
				"aircraft-2403485-documentation-20261023",
				"aircraft-2403485-documentation-20261023-catalogue"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2403485-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2403485, réf. 2403485 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 252 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue tools. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : 22da35f9dfdf45646a1c9769247d976d34730e51aa9af02d9b5f12d55257222c. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2403485-documentation-20261023",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10716868&portal=3001205&pageNumber=65",
			"sourceLabel": "AIRCRAFT / Stürmer Maschinen, AIRCRAFT Autumn/Winter 2026/27, p. 65 (article 2403485)",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : OXOMI, portail public MROSE, fournisseur Stürmer 702076. Empreinte PDF SHA-256 : 8d8b4452ce53979e2e91252d647205847a25f6d85cbde3cf557cc5831ac4f20d. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		},
		{
			"id": "aircraft-2403485-documentation-20261023-catalogue",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=259",
			"sourceLabel": "Aircraft, catalogue fabricant 2026/27, p. 259 (déclaration divergente, article 2403485)",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Catalogue fabricant consulté le 23/10/2026, régime de consommation non précisé. PDF SHA-256 : e7f584596b5d6968e6b4ae4c86e6455b548001fe4fd5ff37b9c5262bc6659134. Cette déclaration reste distincte du débit moyen publié dans la notice ou brochure."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2403485-20260927"
		],
		"workingPressureBar": [
			"aircraft-2403485-20260927"
		],
		"airflowLpm": [
			"aircraft-2403485-20260927"
		],
		"airflowBasis": [
			"aircraft-2403485-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 252,
		"typical": 252,
		"max": 252
	},
	"airflowBasis": "average"
};

export default product;
