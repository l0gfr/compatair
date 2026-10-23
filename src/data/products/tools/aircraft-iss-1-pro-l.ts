import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-iss-1-pro-l",
	"slug": "aircraft-iss-1-pro-l",
	"brand": "Aircraft",
	"model": "ISS 1\" PRO L",
	"mpn": "2401495",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Aircraft ISS 1\" PRO L",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-iss-1-pro-l.webp",
		"alt": "Repères techniques Aircraft ISS 1\" PRO L, référence 2401495",
		"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit ; fondée sur le relevé fabricant historique conservé par CompatAir"
	},
	"editorial": {
		"overview": "Aircraft ISS 1\" PRO L, référence 2401495. Consommation moyenne publiée : 405 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Diamètre intérieur du flexible : 13 mm. Vitesse de rotation : 6000 min¯¹.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 405 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : 2401495.",
			"Diamètre intérieur du flexible : 13 mm.",
			"Vitesse de rotation : 6000 min¯¹.",
			"Mandrin ou entraînement publié : 1 \"."
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
				"aircraft-2401495-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 405 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"aircraft-2401495-20260927"
			]
		},
		{
			"label": "Diamètre intérieur du flexible",
			"value": "13 mm",
			"evidenceIds": [
				"aircraft-2401495-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "6000 min¯¹",
			"evidenceIds": [
				"aircraft-2401495-20260927"
			]
		},
		{
			"label": "Mandrin ou entraînement publié",
			"value": "1 \"",
			"evidenceIds": [
				"aircraft-2401495-20260927"
			]
		},
		{
			"label": "Couple maximal de serrage",
			"value": "2441 Nm",
			"evidenceIds": [
				"aircraft-2401495-20260927"
			]
		},
		{
			"label": "Couple maximal de desserrage",
			"value": "3389 Nm",
			"evidenceIds": [
				"aircraft-2401495-20260927"
			]
		},
		{
			"label": "Longueur approximative",
			"value": "492 mm",
			"evidenceIds": [
				"aircraft-2401495-20260927"
			]
		},
		{
			"label": "Largeur approximative",
			"value": "116 mm",
			"evidenceIds": [
				"aircraft-2401495-20260927"
			]
		},
		{
			"label": "Hauteur approximative",
			"value": "175 mm",
			"evidenceIds": [
				"aircraft-2401495-20260927"
			]
		},
		{
			"label": "Type indiqué par le fabricant",
			"value": "Impact wrench",
			"evidenceIds": [
				"aircraft-2401495-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2401495-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2401495, réf. 2401495 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 405 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue tools. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : 22da35f9dfdf45646a1c9769247d976d34730e51aa9af02d9b5f12d55257222c. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2401495-documentation-20261023",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=239",
			"sourceLabel": "AIRCRAFT / Stürmer Maschinen, AIRCRAFT Hauptkatalog 2026/27, p. 239 (article 2401495)",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : OXOMI, portail public MROSE, fournisseur Stürmer 702076. Empreinte PDF SHA-256 : ce01fe8e9602f08edb86c6bc98f59d7dca1cbb3e622f24218a434a4e2af51070. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2401495-20260927"
		],
		"workingPressureBar": [
			"aircraft-2401495-20260927"
		],
		"airflowLpm": [
			"aircraft-2401495-20260927"
		],
		"airflowBasis": [
			"aircraft-2401495-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 405,
		"typical": 405,
		"max": 405
	},
	"airflowBasis": "average"
};

export default product;
