import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-senco-finishpro21lxp",
	"slug": "agrafeuse-cloueuse-senco-finishpro21lxp",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Senco FinishPro21LXP",
	"brand": "Senco",
	"model": "FinishPro21LXP",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La notice NFD8F8L8M de 2013 donne 1,1 SCFM pour 60 cycles/min. Elle ne relie pas cette consommation à une pression de mesure identifiée ; aucun volume par tir n’est calculé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-senco-finishpro21lxp-technical-20261116-reserves.svg",
		"alt": "Repères techniques : Senco FinishPro21LXP",
		"sourceUrl": "https://www.senco.com/wp-content/uploads/2021/05/finishpro23lxp_man.pdf",
		"sourceLabel": "Carte technique CompatAir, documents constructeur relus le 16 novembre 2026"
	},
	"variant": {
		"familyId": "senco-finishpro21lxp",
		"label": "FinishPro21LXP",
		"distinguishingAttributes": {
			"Configuration documentaire": "Notice NFD8F8L8M, novembre 2013",
			"Capacité du magasin": "200 pointes",
			"Diamètre publié des pointes": "0,033 pouce (0,84 mm)"
		}
	},
	"editorial": {
		"overview": "La notice Senco de novembre 2013 distingue la FinishPro21LXP par son magasin de 200 pointes et ses pointes de 0,84 mm, contre 100 pointes de 0,64 mm pour les 23LXP et 23SXP. Les longueurs listées vont de 15 à 50 mm pour la 21LXP. La cadence de l’exemple de consommation est bien publiée, 60 cycles/min ; la pression de mesure manque encore. Les dimensions de cette notice diffèrent de l’ancien catalogue européen : la configuration et sa révision doivent être identifiées avant achat.",
		"verifiedFacts": [
			"Colonne FinishPro21LXP de la notice, p10 : 200 pointes et masse 1,43 kg.",
			"Page 11 : diamètre publié 0,84 mm et liste de longueurs 15–50 mm.",
			"Consommation publiée à 60 cycles/min, sans pression de mesure appariée."
		],
		"limitations": [
			"Les caractéristiques décrivent la notice de 2013, pas une garantie de version commerciale actuelle.",
			"Les dimensions européennes historiques et celles de cette notice ne sont pas fusionnées.",
			"L’ancienne plage en bar n’est pas conservée dans le moteur faute de correspondance documentée avec la table relue.",
			"Données des documents identifiés, sans essai physique CompatAir ni garantie de disponibilité de la configuration livrée."
		]
	},
	"specifications": [
		{
			"label": "Document applicable à la comparaison",
			"value": "Notice NFD8F8L8M de novembre 2013, modèles 21LXP/23LXP/23SXP",
			"evidenceIds": [
				"review:2026-11-16-reserves:agrafeuse-cloueuse-senco-finishpro21lxp:0"
			]
		},
		{
			"label": "Consommation et cadence publiées, hors calcul",
			"value": "1,1 SCFM pour 60 cycles/min ; tableau métrique 31,1 avec unité imprimée « litre »",
			"evidenceIds": [
				"review:2026-11-16-reserves:agrafeuse-cloueuse-senco-finishpro21lxp:0"
			]
		},
		{
			"label": "Plage de pression imprimée",
			"value": "60–110 ; unité non explicitée dans cette table multilingue, pas de normalisation en bar",
			"evidenceIds": [
				"review:2026-11-16-reserves:agrafeuse-cloueuse-senco-finishpro21lxp:0"
			]
		},
		{
			"label": "Magasin",
			"value": "Une bande / 200 pointes",
			"evidenceIds": [
				"review:2026-11-16-reserves:agrafeuse-cloueuse-senco-finishpro21lxp:0"
			]
		},
		{
			"label": "Pointes documentées",
			"value": "Diamètre 0,033 pouce (0,84 mm), longueurs listées 15, 22, 25, 30, 40 et 50 mm",
			"evidenceIds": [
				"review:2026-11-16-reserves:agrafeuse-cloueuse-senco-finishpro21lxp:0"
			]
		},
		{
			"label": "Dimensions et masse de cette notice",
			"value": "258 × 66 × 229 mm ; 1,43 kg",
			"evidenceIds": [
				"review:2026-11-16-reserves:agrafeuse-cloueuse-senco-finishpro21lxp:0"
			]
		},
		{
			"label": "Dimensions de la transcription européenne historique, non revalidées",
			"value": "200 × 44 × 226 mm dans l’ancien catalogue devenu 404 ; la révision livrée reste à identifier.",
			"evidenceIds": [
				"documented-d-senco-eu-p45"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-senco-eu-p45",
			"sourceUrl": "https://www.kyocera-senco.eu/wp-content/uploads/2018/11/Senco_catalogue_EN.pdf#page=45",
			"sourceLabel": "senco-eu, page PDF 45",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 486db6a8ac1ac3006777646b0c524feafaa214151ad503f0588120bef1780229. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "review:2026-11-16-reserves:agrafeuse-cloueuse-senco-finishpro21lxp:0",
			"sourceUrl": "https://www.senco.com/wp-content/uploads/2021/05/finishpro23lxp_man.pdf",
			"sourceLabel": "Senco, document relu le 16 novembre 2026 (pages PDF 1, 2, 10, 11)",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Notice complète relue p1/2/10/11 et colonnes des deux voisines. Cadence désormais documentée, mais aucune pression de mesure ni volume par tir inventés. La version documentaire est explicite ; les différences de pointes et de magasin constituent l’apport propre. Source européenne 404 et dimensions historiques conservées. GET complet SHA-256 da8e7b17dafcdb1b6cfc1e21d46e96bc9d0f9b78af54eb99cec83b04eaa0bf65."
		}
	],
	"fieldSources": {
		"workingPressureBar": [
			"review:2026-11-16-reserves:agrafeuse-cloueuse-senco-finishpro21lxp:0"
		],
		"demandExplanation": [
			"review:2026-11-16-reserves:agrafeuse-cloueuse-senco-finishpro21lxp:0"
		]
	},
	"notes": [
		"Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner.",
		"Notice complète relue p1/2/10/11 et colonnes des deux voisines. Cadence désormais documentée, mais aucune pression de mesure ni volume par tir inventés. La version documentaire est explicite ; les différences de pointes et de magasin constituent l’apport propre. Source européenne 404 et dimensions historiques conservées."
	]
};

export default product;
