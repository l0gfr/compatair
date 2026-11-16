import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "boulonneuse-zipp-zat400dr-cmplt",
	"slug": "boulonneuse-zipp-zat400dr-cmplt",
	"categoryId": "boulonneuse",
	"category": "boulonneuse",
	"label": "ZIPP ZAT400DR-CMPLT",
	"brand": "ZIPP",
	"model": "ZAT400DR-CMPLT",
	"mpn": "ZAT400DR-CMPLT",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/boulonneuse-zipp-zat400dr-cmplt-technical-20261116-reserves.svg",
		"alt": "Repères techniques : ZIPP ZAT400DR-CMPLT",
		"sourceUrl": "https://www.airtools.com.tw/zat-pneumatic-torque-wrench/",
		"sourceLabel": "Carte technique CompatAir, documents constructeur relus le 16 novembre 2026"
	},
	"variant": {
		"familyId": "zipp-zat400dr-cmplt",
		"label": "Référence ZAT400DR-CMPLT",
		"distinguishingAttributes": {
			"reference": "ZAT400DR-CMPLT",
			"Lecture numérique": "Option d’affichage du couple et de la pression associée au suffixe DR-CMPLT",
			"Carré": "3/4 pouce",
			"Plage publiée": "44–400 ft-lb (60–540 Nm)"
		}
	},
	"editorial": {
		"overview": "La ZAT400DR-CMPLT associe la plage 60–540 Nm et le carré 3/4 pouce de la ZAT400CMPLT à la configuration d’affichage numérique du couple et de la pression. Le constructeur distingue la cote A1 avec lecture, 250,3 mm, de la cote A sans lecture, 247,2 mm. La ZAT1800CMPLT passe au carré 1 pouce et à 275–2 450 Nm. L’affichage et le choix de réaction sont des différences de configuration ; ils ne renseignent pas le débit d’air du serrage.",
		"verifiedFacts": [
			"Code ZAT400DR-CMPLT présent dans la table constructeur et le catalogue p39.",
			"Affichage optionnel associé à ZATXXXDR-CMPLT dans les annotations.",
			"Carré 3/4 pouce et masse publiée 4,6 kg."
		],
		"limitations": [
			"La fonction numérique est une configuration à confirmer sur la référence livrée, pas une hausse de couple annoncée.",
			"Les valeurs inch/mm sont conservées telles que publiées.",
			"Aucun débit ou réglage de pression de serrage n’est inventé à partir de l’affichage.",
			"Données des documents identifiés, sans essai physique CompatAir ni garantie de disponibilité de la configuration livrée."
		]
	},
	"specifications": [
		{
			"label": "Référence et carré",
			"value": "ZAT400DR-CMPLT ; 3/4 pouce",
			"evidenceIds": [
				"review:2026-11-16-reserves:boulonneuse-zipp-zat400dr-cmplt:0"
			]
		},
		{
			"label": "Plage de couple publiée",
			"value": "44–400 ft-lb (60–540 Nm)",
			"evidenceIds": [
				"review:2026-11-16-reserves:boulonneuse-zipp-zat400dr-cmplt:0"
			]
		},
		{
			"label": "Configuration de lecture",
			"value": "Affichage numérique optionnel du couple et de la pression : ZATXXXDR-CMPLT",
			"evidenceIds": [
				"review:2026-11-16-reserves:boulonneuse-zipp-zat400dr-cmplt:0"
			]
		},
		{
			"label": "Longueur avec lecture, cote A1",
			"value": "9,85 pouces (250,3 mm)",
			"evidenceIds": [
				"review:2026-11-16-reserves:boulonneuse-zipp-zat400dr-cmplt:0"
			]
		},
		{
			"label": "Longueur sans lecture, cote A",
			"value": "9,7 pouces (247,2 mm)",
			"evidenceIds": [
				"review:2026-11-16-reserves:boulonneuse-zipp-zat400dr-cmplt:0"
			]
		},
		{
			"label": "Masse publiée",
			"value": "10,2 lb (4,6 kg)",
			"evidenceIds": [
				"review:2026-11-16-reserves:boulonneuse-zipp-zat400dr-cmplt:0"
			]
		},
		{
			"label": "Consommation et point d’air",
			"value": "Aucun débit de mesure apparié publié dans cette table",
			"evidenceIds": [
				"review:2026-11-16-reserves:boulonneuse-zipp-zat400dr-cmplt:0"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p39",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=39",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 39",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reserves:boulonneuse-zipp-zat400dr-cmplt:0",
			"sourceUrl": "https://www.airtools.com.tw/zat-pneumatic-torque-wrench/",
			"sourceLabel": "ZIPP, document relu le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Page fabricant et PDF39 relus, dont annotation explicite ZATXXXDR-CMPLT, cotes A1/A et lignes ZAT400/ZAT1800. Différence utile de lecture/réglage motivée sans prétendre à un couple supérieur à ZAT400CMPLT. Moteur variable-volume inchangé et non conclusif. GET complet SHA-256 f70b2ba2213688a5cb7c81e81c163c4308b25338f01becbbfd84cb206d494b0c."
		},
		{
			"id": "review:2026-11-16-reserves:boulonneuse-zipp-zat400dr-cmplt:1",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=39",
			"sourceLabel": "ZIPP, document relu le 16 novembre 2026 (pages PDF 39)",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Page fabricant et PDF39 relus, dont annotation explicite ZATXXXDR-CMPLT, cotes A1/A et lignes ZAT400/ZAT1800. Différence utile de lecture/réglage motivée sans prétendre à un couple supérieur à ZAT400CMPLT. Moteur variable-volume inchangé et non conclusif. GET complet SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-16-reserves:boulonneuse-zipp-zat400dr-cmplt:0"
		],
		"workingPressureBar": [
			"review:2026-11-16-reserves:boulonneuse-zipp-zat400dr-cmplt:0"
		],
		"demandExplanation": [
			"review:2026-11-16-reserves:boulonneuse-zipp-zat400dr-cmplt:0"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
		"Page fabricant et PDF39 relus, dont annotation explicite ZATXXXDR-CMPLT, cotes A1/A et lignes ZAT400/ZAT1800. Différence utile de lecture/réglage motivée sans prétendre à un couple supérieur à ZAT400CMPLT. Moteur variable-volume inchangé et non conclusif."
	]
};

export default product;
