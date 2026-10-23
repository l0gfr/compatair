import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-iss-mini",
	"slug": "aircraft-iss-mini",
	"brand": "Aircraft",
	"model": "ISS ½\" Mini",
	"mpn": "2401371",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Aircraft ISS ½\" Mini",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-iss-mini.webp",
		"alt": "Repères techniques Aircraft ISS ½\" Mini, référence 2401371",
		"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit ; fondée sur le relevé fabricant historique conservé par CompatAir"
	},
	"editorial": {
		"overview": "Aircraft ISS ½\" Mini, référence 2401371. Consommation moyenne publiée : 120 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Vitesse de rotation : 9000 min¯¹. Couple, rotation à droite : 520 Nm.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 120 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : 2401371.",
			"Vitesse de rotation : 9000 min¯¹.",
			"Couple, rotation à droite : 520 Nm.",
			"Nombre de positions, rotation à droite : 1."
		],
		"limitations": [
			"Le besoin réel dépend de la charge, du cycle et des pertes de pression dans le flexible. Aucune mesure physique CompatAir.",
			"Une consommation moyenne ne constitue pas un débit maximal en usage continu. Vérifier le régime réel auprès du fabricant avant dimensionnement."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"evidenceIds": [
				"aircraft-2401371-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 120 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"aircraft-2401371-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "9000 min¯¹",
			"evidenceIds": [
				"aircraft-2401371-20260927"
			]
		},
		{
			"label": "Couple, rotation à droite",
			"value": "520 Nm",
			"evidenceIds": [
				"aircraft-2401371-20260927"
			]
		},
		{
			"label": "Nombre de positions, rotation à droite",
			"value": "1",
			"evidenceIds": [
				"aircraft-2401371-20260927"
			]
		},
		{
			"label": "Couple, rotation à gauche",
			"value": "570 Nm",
			"evidenceIds": [
				"aircraft-2401371-20260927"
			]
		},
		{
			"label": "Nombre de positions, rotation à gauche",
			"value": "1",
			"evidenceIds": [
				"aircraft-2401371-20260927"
			]
		},
		{
			"label": "Couple maximal de desserrage",
			"value": "570 Nm",
			"evidenceIds": [
				"aircraft-2401371-20260927"
			]
		},
		{
			"label": "Couple maximal",
			"value": "520 Nm",
			"evidenceIds": [
				"aircraft-2401371-20260927"
			]
		},
		{
			"label": "Mandrin ou entraînement publié",
			"value": "½ \"",
			"evidenceIds": [
				"aircraft-2401371-20260927"
			]
		},
		{
			"label": "Type indiqué par le fabricant",
			"value": "Impact wrench",
			"evidenceIds": [
				"aircraft-2401371-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2401371-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2401371, réf. 2401371 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 120 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue tools. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : 22da35f9dfdf45646a1c9769247d976d34730e51aa9af02d9b5f12d55257222c. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2401371-documentation-20261023",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=240",
			"sourceLabel": "AIRCRAFT / Stürmer Maschinen, AIRCRAFT Hauptkatalog 2026/27, p. 240 (article 2401371)",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : OXOMI, portail public MROSE, fournisseur Stürmer 702076. Empreinte PDF SHA-256 : 880a84964d5fac2e1e8d1ec6572147209550ca725cde31994fff4f23b6669c20. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2401371-20260927"
		],
		"workingPressureBar": [
			"aircraft-2401371-20260927"
		],
		"airflowLpm": [
			"aircraft-2401371-20260927"
		],
		"airflowBasis": [
			"aircraft-2401371-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 120,
		"typical": 120,
		"max": 120
	},
	"airflowBasis": "average"
};

export default product;
