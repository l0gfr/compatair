import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-ne-pro",
	"slug": "aircraft-ne-pro",
	"brand": "Aircraft",
	"model": "NE PRO",
	"mpn": "2402620",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "Aircraft NE PRO",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-ne-pro.webp",
		"alt": "Repères techniques Aircraft NE PRO, référence 2402620",
		"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit ; fondée sur le relevé fabricant historique conservé par CompatAir"
	},
	"editorial": {
		"overview": "Aircraft NE PRO. Le NE PRO utilise des aiguilles 3 × 125 mm à 3 800 coups/min ; le NP PRO reçoit 3 × 180 mm à 3 200 coups/min pour le même débit publié. La longueur des aiguilles et la cadence distinguent ces références. La source dit Luftbedarf ca. : les 170 L/min ne sont plus étiquetés moyens sans preuve explicite.",
		"verifiedFacts": [
			"Aiguilles : Diamètre 3 mm, longueur 125 mm.",
			"Cadence : 3 800 coups/min.",
			"Consommation approximative, régime non précisé : 170 L/min.",
			"Pression de service : 6,3 bar."
		],
		"limitations": [
			"Aucune moyenne, aucun maximum ni aucune pression de mesure supplémentaires ne sont déduits d’un simple débit approximatif ou d’une consigne de service.",
			"Source fabricant et édition identifiées ; équipement actuel à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Aiguilles",
			"value": "Diamètre 3 mm, longueur 125 mm",
			"evidenceIds": [
				"aircraft-ne-pro-reserved-20261103-1"
			]
		},
		{
			"label": "Cadence",
			"value": "3 800 coups/min",
			"evidenceIds": [
				"aircraft-ne-pro-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation approximative, régime non précisé",
			"value": "170 L/min",
			"evidenceIds": [
				"aircraft-ne-pro-reserved-20261103-1"
			]
		},
		{
			"label": "Pression de service",
			"value": "6,3 bar",
			"evidenceIds": [
				"aircraft-ne-pro-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2402620-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2402620, réf. 2402620 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 170 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue tools. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : 22da35f9dfdf45646a1c9769247d976d34730e51aa9af02d9b5f12d55257222c. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2402620-documentation-20261023",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=251",
			"sourceLabel": "AIRCRAFT / Stürmer Maschinen, AIRCRAFT Hauptkatalog 2026/27, p. 251 (article 2402620)",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : OXOMI, portail public MROSE, fournisseur Stürmer 702076. Empreinte PDF SHA-256 : 50a8d5b48033badc32fdbd2714265b1bc8d03f5b3127a33c863150e1d9a32cd9. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		},
		{
			"id": "aircraft-ne-pro-reserved-20261103-1",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=251#page=1",
			"sourceLabel": "Aircraft : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 50a8d5b48033badc32fdbd2714265b1bc8d03f5b3127a33c863150e1d9a32cd9. Le NE PRO utilise des aiguilles 3 × 125 mm à 3 800 coups/min ; le NP PRO reçoit 3 × 180 mm à 3 200 coups/min pour le même débit publié. La longueur des aiguilles et la cadence distinguent ces références. La source dit Luftbedarf ca. : les 170 L/min ne sont plus étiquetés moyens sans preuve explicite."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2402620-20260927"
		],
		"workingPressureBar": [
			"aircraft-2402620-20260927"
		],
		"airflowLpm": [
			"aircraft-2402620-20260927"
		],
		"airflowBasis": [
			"aircraft-ne-pro-reserved-20261103-1"
		],
		"editorial": [
			"aircraft-ne-pro-reserved-20261103-1"
		],
		"specifications": [
			"aircraft-ne-pro-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 170,
		"typical": 170,
		"max": 170
	},
	"airflowBasis": "unqualified"
};

export default product;
