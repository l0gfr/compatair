import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-np-pro",
	"slug": "aircraft-np-pro",
	"brand": "Aircraft",
	"model": "NP PRO",
	"mpn": "2402640",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "Aircraft NP PRO",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-np-pro-technical-20261116-reviews.svg",
		"alt": "Repères techniques Aircraft NP PRO, référence 2402640",
		"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=251",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"editorial": {
		"overview": "Aircraft NP PRO : aiguilles de 3 × 180 mm et 3 200 coups/min, contre 3 × 125 mm et 3 800 coups/min pour le NE PRO. Le catalogue indique 170 L/min approximatifs pour les deux, sans les qualifier de moyens. La longueur et la cadence différencient ces décapeurs ; la consommation reste hors calcul en charge.",
		"verifiedFacts": [
			"Aiguilles : Diamètre 3 mm, longueur 180 mm.",
			"Cadence : 3 200 coups/min.",
			"Masse approximative : 2,6 kg.",
			"Pression de service / raccord : 6,3 bar / 1/4 pouce.",
			"Consommation approximative, régime non précisé : 170 L/min.",
			"Vibrations déclarées : 17 m/s²."
		],
		"limitations": [
			"La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne.",
			"Documents fabricant de versions identifiées ; disponibilité et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Aiguilles",
			"value": "Diamètre 3 mm, longueur 180 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:aircraft-np-pro:0"
			]
		},
		{
			"label": "Cadence",
			"value": "3 200 coups/min",
			"evidenceIds": [
				"review:2026-11-16-reviews:aircraft-np-pro:0"
			]
		},
		{
			"label": "Masse approximative",
			"value": "2,6 kg",
			"evidenceIds": [
				"review:2026-11-16-reviews:aircraft-np-pro:0"
			]
		},
		{
			"label": "Pression de service / raccord",
			"value": "6,3 bar / 1/4 pouce",
			"evidenceIds": [
				"review:2026-11-16-reviews:aircraft-np-pro:0"
			]
		},
		{
			"label": "Consommation approximative, régime non précisé",
			"value": "170 L/min",
			"evidenceIds": [
				"review:2026-11-16-reviews:aircraft-np-pro:0"
			]
		},
		{
			"label": "Vibrations déclarées",
			"value": "17 m/s²",
			"evidenceIds": [
				"review:2026-11-16-reviews:aircraft-np-pro:0"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2402640-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2402640, réf. 2402640 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 170 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue tools. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : 22da35f9dfdf45646a1c9769247d976d34730e51aa9af02d9b5f12d55257222c. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2402640-documentation-20261023",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=251",
			"sourceLabel": "AIRCRAFT / Stürmer Maschinen, AIRCRAFT Hauptkatalog 2026/27, p. 251 (article 2402640)",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : OXOMI, portail public MROSE, fournisseur Stürmer 702076. Empreinte PDF SHA-256 : 50a8d5b48033badc32fdbd2714265b1bc8d03f5b3127a33c863150e1d9a32cd9. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		},
		{
			"id": "review:2026-11-16-reviews:aircraft-np-pro:0",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=251",
			"sourceLabel": "Aircraft, document constructeur relu le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Aircraft NP PRO : aiguilles de 3 × 180 mm et 3 200 coups/min, contre 3 × 125 mm et 3 800 coups/min pour le NE PRO. Le catalogue indique 170 L/min approximatifs pour les deux, sans les qualifier de moyens. La longueur et la cadence différencient ces décapeurs ; la consommation reste hors calcul en charge. GET complet SHA-256 50a8d5b48033badc32fdbd2714265b1bc8d03f5b3127a33c863150e1d9a32cd9. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-16-reviews:aircraft-np-pro:0"
		],
		"demandExplanation": [
			"review:2026-11-16-reviews:aircraft-np-pro:0"
		],
		"workingPressureBar": [
			"review:2026-11-16-reviews:aircraft-np-pro:0"
		]
	},
	"notes": [
		"La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne."
	],
	"demandExplanation": "La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne."
};

export default product;
