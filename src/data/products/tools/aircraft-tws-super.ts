import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-tws-super",
	"slug": "aircraft-tws-super",
	"brand": "Aircraft",
	"model": "TWS Super",
	"mpn": "2403491",
	"categoryId": "tronconneuse",
	"category": "tronconneuse",
	"label": "Aircraft TWS Super",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-tws-super.webp",
		"alt": "Repères techniques Aircraft TWS Super, référence 2403491",
		"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit ; fondée sur le relevé fabricant historique conservé par CompatAir"
	},
	"editorial": {
		"overview": "Aircraft TWS Super. La TWS Super est l’outil de tronçonnage 100 mm, associé au disque 2403495 de 100 × 1,2 × 9,6 mm. La TTS PRO est le modèle profond/allongé de 371 mm avec réglage de protecteur. La ligne 14 000 porte une unité min⁻¹, malgré le libellé allemand Drehmoment : ce n’est pas un couple en Nm. Les 480 L/min restent approximatifs et de régime non précisé.",
		"verifiedFacts": [
			"Disque de tronçonnage : 100 mm.",
			"Accessoire indiqué : 100 × 1,2 × 9,6 mm, code 2403495.",
			"Vitesse, unité min⁻¹ du tableau : 14 000 tr/min.",
			"Masse approximative : 1,4 kg.",
			"Consommation approximative, régime non précisé : 480 L/min."
		],
		"limitations": [
			"Aucune moyenne, aucun maximum ni aucune pression de mesure supplémentaires ne sont déduits d’un simple débit approximatif ou d’une consigne de service.",
			"Source fabricant et édition identifiées ; équipement actuel à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Disque de tronçonnage",
			"value": "100 mm",
			"evidenceIds": [
				"aircraft-tws-super-reserved-20261103-1"
			]
		},
		{
			"label": "Accessoire indiqué",
			"value": "100 × 1,2 × 9,6 mm, code 2403495",
			"evidenceIds": [
				"aircraft-tws-super-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse, unité min⁻¹ du tableau",
			"value": "14 000 tr/min",
			"evidenceIds": [
				"aircraft-tws-super-reserved-20261103-1"
			]
		},
		{
			"label": "Masse approximative",
			"value": "1,4 kg",
			"evidenceIds": [
				"aircraft-tws-super-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation approximative, régime non précisé",
			"value": "480 L/min",
			"evidenceIds": [
				"aircraft-tws-super-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2403491-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2403491, réf. 2403491 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 480 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue tools. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : 22da35f9dfdf45646a1c9769247d976d34730e51aa9af02d9b5f12d55257222c. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2403491-documentation-20261023",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=259",
			"sourceLabel": "AIRCRAFT / Stürmer Maschinen, AIRCRAFT Hauptkatalog 2026/27, p. 259 (article 2403491)",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : OXOMI, portail public MROSE, fournisseur Stürmer 702076. Empreinte PDF SHA-256 : e7f584596b5d6968e6b4ae4c86e6455b548001fe4fd5ff37b9c5262bc6659134. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		},
		{
			"id": "aircraft-tws-super-reserved-20261103-1",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=259#page=1",
			"sourceLabel": "Aircraft : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 e7f584596b5d6968e6b4ae4c86e6455b548001fe4fd5ff37b9c5262bc6659134. La TWS Super est l’outil de tronçonnage 100 mm, associé au disque 2403495 de 100 × 1,2 × 9,6 mm. La TTS PRO est le modèle profond/allongé de 371 mm avec réglage de protecteur. La ligne 14 000 porte une unité min⁻¹, malgré le libellé allemand Drehmoment : ce n’est pas un couple en Nm. Les 480 L/min restent approximatifs et de régime non précisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2403491-20260927"
		],
		"workingPressureBar": [
			"aircraft-2403491-20260927"
		],
		"airflowLpm": [
			"aircraft-2403491-20260927"
		],
		"airflowBasis": [
			"aircraft-tws-super-reserved-20261103-1"
		],
		"editorial": [
			"aircraft-tws-super-reserved-20261103-1"
		],
		"specifications": [
			"aircraft-tws-super-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 480,
		"typical": 480,
		"max": 480
	},
	"airflowBasis": "unqualified"
};

export default product;
