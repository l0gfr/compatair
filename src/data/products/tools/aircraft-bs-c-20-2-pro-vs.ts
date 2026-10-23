import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-bs-c-20-2-pro-vs",
	"slug": "aircraft-bs-c-20-2-pro-vs",
	"brand": "Aircraft",
	"model": "BS-C 20-2 PRO VS",
	"mpn": "2403772",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "Aircraft BS-C 20-2 PRO VS",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-bs-c-20-2-pro-vs.webp",
		"alt": "Repères techniques Aircraft BS-C 20-2 PRO VS, référence 2403772",
		"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit ; fondée sur le relevé fabricant historique conservé par CompatAir"
	},
	"editorial": {
		"overview": "Aircraft BS-C 20-2 PRO VS, référence 2403772. Consommation moyenne publiée : 270 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Longueur de bande : 520 mm. Largeur de bande : 20 mm.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 270 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : 2403772.",
			"Longueur de bande : 520 mm.",
			"Largeur de bande : 20 mm.",
			"Longueur approximative : 390 mm."
		],
		"limitations": [
			"Le besoin réel dépend de la charge, du cycle et des pertes de pression dans le flexible. Aucune mesure physique CompatAir.",
			"Une consommation moyenne ne constitue pas un débit maximal en usage continu. Vérifier le régime réel auprès du fabricant avant dimensionnement.",
			"Écarts entre documents fabricant : Longueur de bande : relevé de fiche du 27/09/2026 = 520 mm ; AIRCRAFT Hauptkatalog 2026/27 = 330mm.",
			"Le tableau du catalogue 2026/27 indique une bande de 330 mm ; les accessoires de la même page indiquent 520 mm, comme le relevé de la fiche du 27/09/2026. Longueur à confirmer avant commande."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"evidenceIds": [
				"aircraft-2403772-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 270 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"aircraft-2403772-20260927"
			]
		},
		{
			"label": "Longueur de bande",
			"value": "520 mm",
			"evidenceIds": [
				"aircraft-2403772-20260927"
			]
		},
		{
			"label": "Largeur de bande",
			"value": "20 mm",
			"evidenceIds": [
				"aircraft-2403772-20260927"
			]
		},
		{
			"label": "Longueur approximative",
			"value": "390 mm",
			"evidenceIds": [
				"aircraft-2403772-20260927"
			]
		},
		{
			"label": "Largeur approximative",
			"value": "120 mm",
			"evidenceIds": [
				"aircraft-2403772-20260927"
			]
		},
		{
			"label": "Hauteur approximative",
			"value": "90 mm",
			"evidenceIds": [
				"aircraft-2403772-20260927"
			]
		},
		{
			"label": "Masse approximative",
			"value": "1.5 kg",
			"evidenceIds": [
				"aircraft-2403772-20260927"
			]
		},
		{
			"label": "Type indiqué par le fabricant",
			"value": "Belt sander",
			"evidenceIds": [
				"aircraft-2403772-20260927"
			]
		},
		{
			"label": "Écart documentaire fabricant",
			"value": "Longueur de bande : relevé de fiche du 27/09/2026 = 520 mm ; AIRCRAFT Hauptkatalog 2026/27 = 330mm.",
			"evidenceIds": [
				"aircraft-2403772-20260927",
				"aircraft-2403772-documentation-20261023"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2403772-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2403772, réf. 2403772 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 270 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue tools. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : 22da35f9dfdf45646a1c9769247d976d34730e51aa9af02d9b5f12d55257222c. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2403772-documentation-20261023",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=265",
			"sourceLabel": "AIRCRAFT / Stürmer Maschinen, AIRCRAFT Hauptkatalog 2026/27, p. 265 (article 2403772)",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : OXOMI, portail public MROSE, fournisseur Stürmer 702076. Empreinte PDF SHA-256 : 158cd83471fda3ebcfd7706ed5f391ee72fdaf3a2a7881066d30139b88104996. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2403772-20260927"
		],
		"workingPressureBar": [
			"aircraft-2403772-20260927"
		],
		"airflowLpm": [
			"aircraft-2403772-20260927"
		],
		"airflowBasis": [
			"aircraft-2403772-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 270,
		"typical": 270,
		"max": 270
	},
	"airflowBasis": "average"
};

export default product;
