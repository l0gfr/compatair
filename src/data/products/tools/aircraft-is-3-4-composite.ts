import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-is-3-4-composite",
	"slug": "aircraft-is-3-4-composite",
	"brand": "Aircraft",
	"model": "IS 3/4\" Composite",
	"mpn": "2401260",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Aircraft IS 3/4\" Composite",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-is-3-4-composite.webp",
		"alt": "Repères techniques Aircraft IS 3/4\" Composite, référence 2401260",
		"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit ; fondée sur le relevé fabricant historique conservé par CompatAir"
	},
	"editorial": {
		"overview": "Aircraft IS 3/4\" Composite. La ligne Aircraft propre à cette référence emploie explicitement une consommation moyenne. Conserver cette moyenne comme observation documentaire, avec la portée de pression indiquée par la table. La moyenne de 269 L/min et le besoin approximatif de 510 L/min sont publiés avec une pression maximale de 6,3 bar, sans point de mesure apparié. Ces colonnes restent documentaires. Référence fabricant : 2401260. Nombre de positions, rotation à droite : 3-stage adjustable. Couple, rotation à gauche : 1220 nm. Mandrin ou entraînement publié : Square ¾ \".",
		"verifiedFacts": [
			"Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Référence fabricant : 2401260.",
			"Nombre de positions, rotation à droite : 3-stage adjustable.",
			"Couple, rotation à gauche : 1220 nm.",
			"Mandrin ou entraînement publié : Square ¾ \".",
			"Valeur documentaire conservée : 269 L/min. La moyenne de 269 L/min et le besoin approximatif de 510 L/min sont publiés avec une pression maximale de 6,3 bar, sans point de mesure apparié. Ces colonnes restent documentaires."
		],
		"limitations": [
			"Le besoin réel dépend de la charge, du cycle et des pertes de pression dans le flexible. Aucune mesure physique CompatAir.",
			"Une consommation moyenne ne constitue pas un débit maximal en usage continu. Vérifier le régime réel auprès du fabricant avant dimensionnement.",
			"La moyenne de 269 L/min et le besoin approximatif de 510 L/min sont publiés avec une pression maximale de 6,3 bar, sans point de mesure apparié. Ces colonnes restent documentaires.",
			"Le tableau indique une pression maximale de 6,3 bar et une moyenne de 269 L/min. Le besoin d’air approximatif de 510 L/min y figure aussi ; ces deux colonnes restent distinctes."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"evidenceIds": [
				"aircraft-2401260-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Valeur documentaire conservée : 269 L/min. La moyenne de 269 L/min et le besoin approximatif de 510 L/min sont publiés avec une pression maximale de 6,3 bar, sans point de mesure apparié. Ces colonnes restent documentaires.",
			"evidenceIds": [
				"aircraft-is-3-4-composite-reserved-20261031-1"
			]
		},
		{
			"label": "Nombre de positions, rotation à droite",
			"value": "3-stage adjustable",
			"evidenceIds": [
				"aircraft-2401260-20260927"
			]
		},
		{
			"label": "Couple, rotation à gauche",
			"value": "1220 nm",
			"evidenceIds": [
				"aircraft-2401260-20260927"
			]
		},
		{
			"label": "Mandrin ou entraînement publié",
			"value": "Square ¾ \"",
			"evidenceIds": [
				"aircraft-2401260-20260927"
			]
		},
		{
			"label": "Couple maximal de serrage",
			"value": "1800 Nm",
			"evidenceIds": [
				"aircraft-2401260-20260927"
			]
		},
		{
			"label": "Couple maximal de desserrage",
			"value": "2300 Nm",
			"evidenceIds": [
				"aircraft-2401260-20260927"
			]
		},
		{
			"label": "Masse approximative",
			"value": "3.2 kg",
			"evidenceIds": [
				"aircraft-2401260-20260927"
			]
		},
		{
			"label": "Type indiqué par le fabricant",
			"value": "Industrial impact wrench 3/4 \"",
			"evidenceIds": [
				"aircraft-2401260-20260927"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":269,\"typical\":269,\"max\":269},\"workingPressureBar\":{\"min\":6.3,\"typical\":6.3,\"max\":6.3}}",
			"evidenceIds": [
				"aircraft-2401260-20260927",
				"aircraft-is-3-4-composite-reserved-20261031-1"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2401260-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2401260, réf. 2401260 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 269 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue tools. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : 22da35f9dfdf45646a1c9769247d976d34730e51aa9af02d9b5f12d55257222c. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2401260-documentation-20261023",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=238",
			"sourceLabel": "AIRCRAFT / Stürmer Maschinen, AIRCRAFT Hauptkatalog 2026/27, p. 238 (article 2401260)",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : OXOMI, portail public MROSE, fournisseur Stürmer 702076. Empreinte PDF SHA-256 : d9ebfdd5d488d57ea9899cb401fe2e3eac4abd10b89a9fd015c5f9af0cdfa920. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		},
		{
			"id": "aircraft-is-3-4-composite-reserved-20261031-1",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=238",
			"sourceLabel": "Aircraft IS 3/4\" Composite : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 d9ebfdd5d488d57ea9899cb401fe2e3eac4abd10b89a9fd015c5f9af0cdfa920. La ligne Aircraft propre à cette référence emploie explicitement une consommation moyenne. Conserver cette moyenne comme observation documentaire, avec la portée de pression indiquée par la table. La moyenne de 269 L/min et le besoin approximatif de 510 L/min sont publiés avec une pression maximale de 6,3 bar, sans point de mesure apparié. Ces colonnes restent documentaires."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2401260-20260927"
		],
		"workingPressureBar": [
			"aircraft-is-3-4-composite-reserved-20261031-1"
		],
		"demandModel": [
			"aircraft-is-3-4-composite-reserved-20261031-1"
		],
		"demandExplanation": [
			"aircraft-is-3-4-composite-reserved-20261031-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "La moyenne de 269 L/min et le besoin approximatif de 510 L/min sont publiés avec une pression maximale de 6,3 bar, sans point de mesure apparié. Ces colonnes restent documentaires."
};

export default product;
