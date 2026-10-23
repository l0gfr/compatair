import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-bp-pro-safe",
	"slug": "aircraft-bp-pro-safe",
	"brand": "Aircraft",
	"model": "BP PRO SAFE",
	"mpn": "2112128",
	"categoryId": "soufflette",
	"category": "soufflette",
	"label": "Aircraft BP PRO SAFE",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-bp-pro-safe.webp",
		"alt": "Repères techniques Aircraft BP PRO SAFE, référence 2112128",
		"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit ; fondée sur le relevé fabricant historique conservé par CompatAir"
	},
	"editorial": {
		"overview": "Aircraft BP PRO SAFE, référence 2112128. Consommation moyenne publiée : 150 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Longueur du tube de soufflage : 100 mm. Diamètre extérieur du tube : 6 mm.",
		"verifiedFacts": [
			"Pression de travail publiée : 6 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 150 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : 2112128.",
			"Longueur du tube de soufflage : 100 mm.",
			"Diamètre extérieur du tube : 6 mm.",
			"Diamètre de sortie de buse : 6.2 mm."
		],
		"limitations": [
			"Le besoin réel dépend de la charge, du cycle et des pertes de pression dans le flexible. Aucune mesure physique CompatAir.",
			"Une consommation moyenne ne constitue pas un débit maximal en usage continu. Vérifier le régime réel auprès du fabricant avant dimensionnement.",
			"Écarts entre documents fabricant : Masse approximative : relevé de fiche du 27/09/2026 = 0.14 kg ; AIRCRAFT Hauptkatalog 2026/27 = 0.2kg."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de travail publiée : 6 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"evidenceIds": [
				"aircraft-2112128-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 150 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"aircraft-2112128-20260927"
			]
		},
		{
			"label": "Longueur du tube de soufflage",
			"value": "100 mm",
			"evidenceIds": [
				"aircraft-2112128-20260927"
			]
		},
		{
			"label": "Diamètre extérieur du tube",
			"value": "6 mm",
			"evidenceIds": [
				"aircraft-2112128-20260927"
			]
		},
		{
			"label": "Diamètre de sortie de buse",
			"value": "6.2 mm",
			"evidenceIds": [
				"aircraft-2112128-20260927"
			]
		},
		{
			"label": "Masse approximative",
			"value": "0.14 kg",
			"evidenceIds": [
				"aircraft-2112128-20260927"
			]
		},
		{
			"label": "Type indiqué par le fabricant",
			"value": "Professional blow gun",
			"evidenceIds": [
				"aircraft-2112128-20260927"
			]
		},
		{
			"label": "Écart documentaire fabricant",
			"value": "Masse approximative : relevé de fiche du 27/09/2026 = 0.14 kg ; AIRCRAFT Hauptkatalog 2026/27 = 0.2kg.",
			"evidenceIds": [
				"aircraft-2112128-20260927",
				"aircraft-2112128-documentation-20261023"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2112128-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2112128, réf. 2112128 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 150 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue tools. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : 22da35f9dfdf45646a1c9769247d976d34730e51aa9af02d9b5f12d55257222c. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2112128-documentation-20261023",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=230",
			"sourceLabel": "AIRCRAFT / Stürmer Maschinen, AIRCRAFT Hauptkatalog 2026/27, p. 230 (article 2112128)",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : OXOMI, portail public MROSE, fournisseur Stürmer 702076. Empreinte PDF SHA-256 : 1f2ec51088e39fb6aeee48f870421a4417922619e7fb837d9963add6fd4939e1. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2112128-20260927"
		],
		"workingPressureBar": [
			"aircraft-2112128-20260927"
		],
		"airflowLpm": [
			"aircraft-2112128-20260927"
		],
		"airflowBasis": [
			"aircraft-2112128-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 150,
		"typical": 150,
		"max": 150
	},
	"airflowBasis": "average"
};

export default product;
