import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-senco-coilpro50",
	"slug": "agrafeuse-cloueuse-senco-coilpro50",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Senco CoilPro50",
	"brand": "Senco",
	"model": "CoilPro50",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 5,
		"max": 8
	},
	"demandExplanation": "Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-senco-coilpro50.webp",
		"alt": "Repères techniques : Senco CoilPro50",
		"sourceUrl": "https://www.senco.eu/en/products/tools/nailers/coil-nailers/p/4U2001N",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "senco-coilpro50",
		"label": "CoilPro50",
		"distinguishingAttributes": {
			"Longueur": "305 mm",
			"Largeur": "128 mm",
			"Hauteur": "285 mm"
		}
	},
	"editorial": {
		"overview": "Senco Coil Pro 50. La fiche actuelle précise la cadence 60 coups/min, absente de l’ancienne synthèse, mais ne relie pas cette consommation à une pression de mesure unique. Aucun volume par coup à 6 bar n’est reconstruit. La page distingue rouleaux fil ou plastique 16 mm et propose un déclenchement sélectionnable. Article fabricant : 4U2001N. Clous en rouleau : 32–50 mm, assemblage 16°. Capacité du magasin : 375 clous.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 63.",
			"Longueur : 305 mm.",
			"Largeur : 128 mm.",
			"Hauteur : 285 mm.",
			"Article fabricant : 4U2001N.",
			"Clous en rouleau : 32–50 mm, assemblage 16°.",
			"Capacité du magasin : 375 clous.",
			"Consommation publiée à la cadence donnée : 83,2 L/min à 60 coups/min.",
			"Plage de service publiée : 5–8 bar."
		],
		"limitations": [
			"Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner.",
			"La plage de pression utilisable reste distincte de la pression de mesure de la consommation.",
			"Caractéristiques déclarées par le fabricant. Aucun essai physique réalisé par CompatAir.",
			"La disponibilité locale, les raccords, les accessoires et la notice de sécurité de la référence livrée restent à vérifier.",
			"La fiche actuelle précise la cadence 60 coups/min, absente de l’ancienne synthèse, mais ne relie pas cette consommation à une pression de mesure unique. Aucun volume par coup à 6 bar n’est reconstruit. La page distingue rouleaux fil ou plastique 16 mm et propose un déclenchement sélectionnable."
		]
	},
	"specifications": [
		{
			"label": "Localisation du tableau",
			"value": "Page PDF 63",
			"evidenceIds": [
				"documented-d-senco-eu-p63"
			]
		},
		{
			"label": "Longueur",
			"value": "305 mm",
			"evidenceIds": [
				"documented-d-senco-eu-p63"
			]
		},
		{
			"label": "Largeur",
			"value": "128 mm",
			"evidenceIds": [
				"documented-d-senco-eu-p63"
			]
		},
		{
			"label": "Hauteur",
			"value": "285 mm",
			"evidenceIds": [
				"documented-d-senco-eu-p63"
			]
		},
		{
			"label": "Masse",
			"value": "2,0 kg",
			"evidenceIds": [
				"documented-d-senco-eu-p63"
			]
		},
		{
			"label": "Cadence et pression de mesure de la consommation",
			"value": "Non précisées dans ce tableau de catalogue",
			"evidenceIds": [
				"documented-d-senco-eu-p63"
			]
		},
		{
			"label": "Consommation déclarée, exclue du calcul",
			"value": "83 L/min",
			"evidenceIds": [
				"documented-d-senco-eu-p63"
			]
		},
		{
			"label": "Article fabricant",
			"value": "4U2001N",
			"evidenceIds": [
				"agrafeuse-cloueuse-senco-coilpro50-reserved-20261101-1"
			]
		},
		{
			"label": "Clous en rouleau",
			"value": "32–50 mm, assemblage 16°",
			"evidenceIds": [
				"agrafeuse-cloueuse-senco-coilpro50-reserved-20261101-1"
			]
		},
		{
			"label": "Capacité du magasin",
			"value": "375 clous",
			"evidenceIds": [
				"agrafeuse-cloueuse-senco-coilpro50-reserved-20261101-1"
			]
		},
		{
			"label": "Consommation publiée à la cadence donnée",
			"value": "83,2 L/min à 60 coups/min",
			"evidenceIds": [
				"agrafeuse-cloueuse-senco-coilpro50-reserved-20261101-1"
			]
		},
		{
			"label": "Plage de service publiée",
			"value": "5–8 bar",
			"evidenceIds": [
				"agrafeuse-cloueuse-senco-coilpro50-reserved-20261101-1"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-senco-eu-p63",
			"sourceUrl": "https://www.kyocera-senco.eu/wp-content/uploads/2018/11/Senco_catalogue_EN.pdf#page=63",
			"sourceLabel": "senco-eu, page PDF 63",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 486db6a8ac1ac3006777646b0c524feafaa214151ad503f0588120bef1780229. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "agrafeuse-cloueuse-senco-coilpro50-reserved-20261101-1",
			"sourceUrl": "https://www.senco.eu/en/products/tools/nailers/coil-nailers/p/4U2001N",
			"sourceLabel": "Senco : revue factuelle du 1 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-01",
			"confidence": "B",
			"notes": "Corps complet GET HTTP200 SHA-256 1c9272cea5b6ffbeb89cc6ede2e4e5d3b7e55f80cbbaf05d2bb396a272911358. Lecture de la référence et des configurations voisines, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"workingPressureBar": [
			"agrafeuse-cloueuse-senco-coilpro50-reserved-20261101-1"
		],
		"demandExplanation": [
			"documented-d-senco-eu-p63"
		],
		"editorial": [
			"agrafeuse-cloueuse-senco-coilpro50-reserved-20261101-1"
		],
		"specifications": [
			"agrafeuse-cloueuse-senco-coilpro50-reserved-20261101-1"
		],
		"image": [
			"agrafeuse-cloueuse-senco-coilpro50-reserved-20261101-1"
		]
	},
	"notes": [
		"Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner."
	]
};

export default product;
