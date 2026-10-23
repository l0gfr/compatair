import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-np-2-pro",
	"slug": "aircraft-np-2-pro",
	"brand": "Aircraft",
	"model": "NP-2 PRO",
	"mpn": "2402655",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "Aircraft NP-2 PRO",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-np-2-pro.webp",
		"alt": "Repères techniques Aircraft NP-2 PRO, référence 2402655",
		"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit ; fondée sur le relevé fabricant historique conservé par CompatAir"
	},
	"editorial": {
		"overview": "Aircraft NP-2 PRO, référence 2402655. Consommation moyenne publiée : 28,3 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Cadence de frappe : 3300 min¯¹. Longueur des aiguilles : 115 mm.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 28,3 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : 2402655.",
			"Cadence de frappe : 3300 min¯¹.",
			"Longueur des aiguilles : 115 mm.",
			"Diamètre des aiguilles : 3 mm."
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
				"aircraft-2402655-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 28,3 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"aircraft-2402655-20260927"
			]
		},
		{
			"label": "Cadence de frappe",
			"value": "3300 min¯¹",
			"evidenceIds": [
				"aircraft-2402655-20260927"
			]
		},
		{
			"label": "Longueur des aiguilles",
			"value": "115 mm",
			"evidenceIds": [
				"aircraft-2402655-20260927"
			]
		},
		{
			"label": "Diamètre des aiguilles",
			"value": "3 mm",
			"evidenceIds": [
				"aircraft-2402655-20260927"
			]
		},
		{
			"label": "Longueur approximative",
			"value": "223 mm",
			"evidenceIds": [
				"aircraft-2402655-20260927"
			]
		},
		{
			"label": "Largeur approximative",
			"value": "56 mm",
			"evidenceIds": [
				"aircraft-2402655-20260927"
			]
		},
		{
			"label": "Hauteur approximative",
			"value": "166 mm",
			"evidenceIds": [
				"aircraft-2402655-20260927"
			]
		},
		{
			"label": "Masse approximative",
			"value": "1.4 kg",
			"evidenceIds": [
				"aircraft-2402655-20260927"
			]
		},
		{
			"label": "Type indiqué par le fabricant",
			"value": "Needle scaler",
			"evidenceIds": [
				"aircraft-2402655-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2402655-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2402655, réf. 2402655 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 28,3 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue tools. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : 22da35f9dfdf45646a1c9769247d976d34730e51aa9af02d9b5f12d55257222c. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2402655-documentation-20261023",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=252",
			"sourceLabel": "AIRCRAFT / Stürmer Maschinen, AIRCRAFT Hauptkatalog 2026/27, p. 252 (article 2402655)",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : OXOMI, portail public MROSE, fournisseur Stürmer 702076. Empreinte PDF SHA-256 : fd02886d9a63a7365987f77ba447ece86511ef9de5f18b5629a84c0d7c07480b. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2402655-20260927"
		],
		"workingPressureBar": [
			"aircraft-2402655-20260927"
		],
		"airflowLpm": [
			"aircraft-2402655-20260927"
		],
		"airflowBasis": [
			"aircraft-2402655-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 28.3,
		"typical": 28.3,
		"max": 28.3
	},
	"airflowBasis": "average"
};

export default product;
