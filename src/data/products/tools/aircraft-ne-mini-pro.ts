import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-ne-mini-pro",
	"slug": "aircraft-ne-mini-pro",
	"brand": "Aircraft",
	"model": "NE Mini PRO",
	"mpn": "2402650",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "Aircraft NE Mini PRO",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-ne-mini-pro.webp",
		"alt": "Repères techniques Aircraft NE Mini PRO, référence 2402650",
		"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit ; fondée sur le relevé fabricant historique conservé par CompatAir"
	},
	"editorial": {
		"overview": "Aircraft NE Mini PRO, référence 2402650. Consommation moyenne publiée : 48 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Diamètre intérieur du flexible : 6.35 mm. Cadence de frappe : 3000 min¯¹.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 48 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : 2402650.",
			"Diamètre intérieur du flexible : 6.35 mm.",
			"Cadence de frappe : 3000 min¯¹.",
			"Longueur des aiguilles : 81.5 mm."
		],
		"limitations": [
			"Le besoin réel dépend de la charge, du cycle et des pertes de pression dans le flexible. Aucune mesure physique CompatAir.",
			"Une consommation moyenne ne constitue pas un débit maximal en usage continu. Vérifier le régime réel auprès du fabricant avant dimensionnement.",
			"Écarts entre documents fabricant : Masse approximative : relevé de fiche du 27/09/2026 = 0.48 kg ; AIRCRAFT Hauptkatalog 2026/27 = 0.5kg.",
			"La moyenne de 48 L/min n’est pas une consommation maximale ; les treize aiguilles de 1,4 mm et le flexible de 2 m restent propres à la NE Mini PRO."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"evidenceIds": [
				"aircraft-2402650-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 48 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"aircraft-2402650-20260927"
			]
		},
		{
			"label": "Diamètre intérieur du flexible",
			"value": "6.35 mm",
			"evidenceIds": [
				"aircraft-2402650-20260927"
			]
		},
		{
			"label": "Cadence de frappe",
			"value": "3000 min¯¹",
			"evidenceIds": [
				"aircraft-2402650-20260927"
			]
		},
		{
			"label": "Longueur des aiguilles",
			"value": "81.5 mm",
			"evidenceIds": [
				"aircraft-2402650-20260927"
			]
		},
		{
			"label": "Diamètre des aiguilles",
			"value": "1,4 mm",
			"evidenceIds": [
				"aircraft-2402650-20260927"
			]
		},
		{
			"label": "Longueur approximative",
			"value": "235.6 mm",
			"evidenceIds": [
				"aircraft-2402650-20260927"
			]
		},
		{
			"label": "Largeur approximative",
			"value": "26.6 mm",
			"evidenceIds": [
				"aircraft-2402650-20260927"
			]
		},
		{
			"label": "Hauteur approximative",
			"value": "59 mm",
			"evidenceIds": [
				"aircraft-2402650-20260927"
			]
		},
		{
			"label": "Masse approximative",
			"value": "0.48 kg",
			"evidenceIds": [
				"aircraft-2402650-20260927"
			]
		},
		{
			"label": "Type indiqué par le fabricant",
			"value": "Needle scaler",
			"evidenceIds": [
				"aircraft-2402650-20260927"
			]
		},
		{
			"label": "Écart documentaire fabricant",
			"value": "Masse approximative : relevé de fiche du 27/09/2026 = 0.48 kg ; AIRCRAFT Hauptkatalog 2026/27 = 0.5kg.",
			"evidenceIds": [
				"aircraft-2402650-20260927",
				"aircraft-2402650-documentation-20261023"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2402650-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2402650, réf. 2402650 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 48 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue tools. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : 22da35f9dfdf45646a1c9769247d976d34730e51aa9af02d9b5f12d55257222c. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2402650-documentation-20261023",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=251",
			"sourceLabel": "AIRCRAFT / Stürmer Maschinen, AIRCRAFT Hauptkatalog 2026/27, p. 251 (article 2402650)",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : OXOMI, portail public MROSE, fournisseur Stürmer 702076. Empreinte PDF SHA-256 : 50a8d5b48033badc32fdbd2714265b1bc8d03f5b3127a33c863150e1d9a32cd9. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		},
		{
			"id": "aircraft-ne-mini-pro-reserved-20261031-1",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=251",
			"sourceLabel": "Aircraft NE Mini PRO : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 50a8d5b48033badc32fdbd2714265b1bc8d03f5b3127a33c863150e1d9a32cd9. La ligne Aircraft propre à cette référence emploie explicitement une consommation moyenne. Conserver cette moyenne comme observation documentaire, avec la portée de pression indiquée par la table."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2402650-20260927"
		],
		"workingPressureBar": [
			"aircraft-2402650-20260927"
		],
		"airflowLpm": [
			"aircraft-2402650-20260927"
		],
		"airflowBasis": [
			"aircraft-2402650-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 48,
		"typical": 48,
		"max": 48
	},
	"airflowBasis": "average"
};

export default product;
