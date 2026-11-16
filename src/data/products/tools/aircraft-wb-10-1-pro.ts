import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-wb-10-1-pro",
	"slug": "aircraft-wb-10-1-pro",
	"brand": "Aircraft",
	"model": "WB 10-1 PRO",
	"mpn": "2404120",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Aircraft WB 10-1 PRO",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-wb-10-1-pro-technical-20261116-reviews.svg",
		"alt": "Repères techniques Aircraft WB 10-1 PRO, référence 2404120",
		"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=245",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"editorial": {
		"overview": "Aircraft WB 10-1 PRO : perceuse d’angle de 214 mm, 1,2 kg et 1 400 tr/min. Le BM-C 10 PRO possède une forme pistolet et tourne à 2 000 tr/min ; la capacité acier de 10 mm ne suffit donc pas à choisir la même géométrie. Le débit moyen de 175 L/min reste non dimensionnant.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 175 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : 2404120.",
			"Capacité de perçage dans l’acier : 10 mm.",
			"Capacité de perçage dans le bois : 20 mm.",
			"Vitesse de rotation : 1400 min¯¹.",
			"Forme : Perceuse d’angle.",
			"Capacités acier / bois : 10 / 20 mm.",
			"Vitesse / couple : 1 400 tr/min / 5 Nm.",
			"Dimensions approximatives : 214 × 43,5 × 91,5 mm.",
			"Consommation moyenne explicite : 175 L/min."
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
				"aircraft-2404120-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 175 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"aircraft-2404120-20260927"
			]
		},
		{
			"label": "Capacité de perçage dans l’acier",
			"value": "10 mm",
			"evidenceIds": [
				"aircraft-2404120-20260927"
			]
		},
		{
			"label": "Capacité de perçage dans le bois",
			"value": "20 mm",
			"evidenceIds": [
				"aircraft-2404120-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1400 min¯¹",
			"evidenceIds": [
				"aircraft-2404120-20260927"
			]
		},
		{
			"label": "Couple publié",
			"value": "5 Nm",
			"evidenceIds": [
				"aircraft-2404120-20260927"
			]
		},
		{
			"label": "Longueur approximative",
			"value": "214 mm",
			"evidenceIds": [
				"aircraft-2404120-20260927"
			]
		},
		{
			"label": "Largeur approximative",
			"value": "43.5 mm",
			"evidenceIds": [
				"aircraft-2404120-20260927"
			]
		},
		{
			"label": "Hauteur approximative",
			"value": "91.5 mm",
			"evidenceIds": [
				"aircraft-2404120-20260927"
			]
		},
		{
			"label": "Masse approximative",
			"value": "1,2 kg",
			"evidenceIds": [
				"aircraft-2404120-20260927"
			]
		},
		{
			"label": "Type indiqué par le fabricant",
			"value": "Angle drill",
			"evidenceIds": [
				"aircraft-2404120-20260927"
			]
		},
		{
			"label": "Forme",
			"value": "Perceuse d’angle",
			"evidenceIds": [
				"review:2026-11-16-reviews:aircraft-wb-10-1-pro:0"
			]
		},
		{
			"label": "Capacités acier / bois",
			"value": "10 / 20 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:aircraft-wb-10-1-pro:0"
			]
		},
		{
			"label": "Vitesse / couple",
			"value": "1 400 tr/min / 5 Nm",
			"evidenceIds": [
				"review:2026-11-16-reviews:aircraft-wb-10-1-pro:0"
			]
		},
		{
			"label": "Dimensions approximatives",
			"value": "214 × 43,5 × 91,5 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:aircraft-wb-10-1-pro:0"
			]
		},
		{
			"label": "Consommation moyenne explicite",
			"value": "175 L/min",
			"evidenceIds": [
				"review:2026-11-16-reviews:aircraft-wb-10-1-pro:0"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2404120-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2404120, réf. 2404120 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 175 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue tools. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : 22da35f9dfdf45646a1c9769247d976d34730e51aa9af02d9b5f12d55257222c. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2404120-documentation-20261023",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=245",
			"sourceLabel": "AIRCRAFT / Stürmer Maschinen, AIRCRAFT Hauptkatalog 2026/27, p. 245 (article 2404120)",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : OXOMI, portail public MROSE, fournisseur Stürmer 702076. Empreinte PDF SHA-256 : 527567fc8a4c727b8d4e799507260aa310d26decb7e15621f040b3df4e71c8bb. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		},
		{
			"id": "review:2026-11-16-reviews:aircraft-wb-10-1-pro:0",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=245",
			"sourceLabel": "Aircraft, document constructeur relu le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Aircraft WB 10-1 PRO : perceuse d’angle de 214 mm, 1,2 kg et 1 400 tr/min. Le BM-C 10 PRO possède une forme pistolet et tourne à 2 000 tr/min ; la capacité acier de 10 mm ne suffit donc pas à choisir la même géométrie. Le débit moyen de 175 L/min reste non dimensionnant. GET complet SHA-256 527567fc8a4c727b8d4e799507260aa310d26decb7e15621f040b3df4e71c8bb. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2404120-20260927"
		],
		"workingPressureBar": [
			"aircraft-2404120-20260927"
		],
		"airflowLpm": [
			"aircraft-2404120-20260927"
		],
		"airflowBasis": [
			"aircraft-2404120-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 175,
		"typical": 175,
		"max": 175
	},
	"airflowBasis": "average"
};

export default product;
