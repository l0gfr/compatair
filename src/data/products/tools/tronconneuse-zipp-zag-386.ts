import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "tronconneuse-zipp-zag-386",
	"slug": "tronconneuse-zipp-zag-386",
	"categoryId": "tronconneuse",
	"category": "tronconneuse",
	"label": "ZIPP ZAG-386",
	"brand": "ZIPP",
	"model": "ZAG-386",
	"mpn": "ZAG-386",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La table publie 4 cfm moyens et une pression de service de 6,3 kg/cm², sans pression de mesure de consommation explicitement appariée. La puissance reste contradictoire entre titre et tableau.",
	"confidence": "B",
	"image": {
		"src": "/images/products/tronconneuse-zipp-zag-386-technical-20261116-reserves.svg",
		"alt": "Repères techniques : ZIPP ZAG-386",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, documents constructeur relus le 16 novembre 2026"
	},
	"variant": {
		"familyId": "zipp-zag-386",
		"label": "Référence ZAG-386",
		"distinguishingAttributes": {
			"reference": "ZAG-386",
			"Disque": "3 pouces",
			"Vitesse à vide": "18 000 tr/min",
			"Puissance": "0,5 / 0,82 HP, divergence publiée"
		}
	},
	"editorial": {
		"overview": "La ZAG-386 reçoit un disque de 3 pouces et publie une vitesse à vide de 18 000 tr/min. La ZAG-387 passe à 4 pouces et 14 000 tr/min, avec une masse supérieure, 0,93 contre 0,83 kg. Le changement de diamètre impose de vérifier l’accessoire et sa vitesse admissible pour la référence livrée. La puissance de la 386 reste non qualifiée : 0,5 HP dans le titre, 0,82 dans la table ; les 4 cfm moyens ne servent pas au calcul d’alimentation.",
		"verifiedFacts": [
			"Ligne ZAG386 du catalogue p124 : disque 3 pouces, 18 000 tr/min et masse 0,83 kg.",
			"Dimensions publiées 225 × 115 × 105 mm.",
			"Ligne ZAG387 comparée dans le même tableau."
		],
		"limitations": [
			"La puissance ne peut pas être ramenée à une valeur unique à partir de ce document.",
			"La vitesse à vide publiée ne dispense pas de la notice et du contrôle de l’accessoire monté.",
			"Aucun débit en charge ou volume normal n’est dérivé des 4 cfm moyens.",
			"Données des documents identifiés, sans essai physique CompatAir ni garantie de disponibilité de la configuration livrée."
		]
	},
	"specifications": [
		{
			"label": "Disque et vitesse à vide",
			"value": "3 pouces ; 18 000 tr/min",
			"evidenceIds": [
				"review:2026-11-16-reserves:tronconneuse-zipp-zag-386:0"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "225 × 115 × 105 mm",
			"evidenceIds": [
				"review:2026-11-16-reserves:tronconneuse-zipp-zag-386:0"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,83 kg",
			"evidenceIds": [
				"review:2026-11-16-reserves:tronconneuse-zipp-zag-386:0"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4 cfm, sans convention de référence détaillée",
			"evidenceIds": [
				"review:2026-11-16-reserves:tronconneuse-zipp-zag-386:0"
			]
		},
		{
			"label": "Pression publiée",
			"value": "6,3 kg/cm², consigne de service distincte de la pression de mesure du débit",
			"evidenceIds": [
				"review:2026-11-16-reserves:tronconneuse-zipp-zag-386:0"
			]
		},
		{
			"label": "Puissance contradictoire, non qualifiée",
			"value": "0,5 HP dans le titre ; 0,82 HP dans la table",
			"evidenceIds": [
				"review:2026-11-16-reserves:tronconneuse-zipp-zag-386:0"
			]
		},
		{
			"label": "Comparaison de format",
			"value": "ZAG387 : disque 4 pouces, 14 000 tr/min et masse 0,93 kg",
			"evidenceIds": [
				"review:2026-11-16-reserves:tronconneuse-zipp-zag-386:0"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p124",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=124",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 124",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reserves:tronconneuse-zipp-zag-386:0",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=124",
			"sourceLabel": "ZIPP, document relu le 16 novembre 2026 (pages PDF 124)",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Table p124 et titre relus avec ZAG387. Le couple diamètre/vitesse et la masse constituent la différence utile ; la puissance contradictoire reste une réserve visible non dimensionnante. L’ancienne conversion de 4 cfm en 113,267 L/min n’est pas réutilisée comme mesure ni revendiquée comme nouveau fait. GET complet SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-16-reserves:tronconneuse-zipp-zag-386:0"
		],
		"workingPressureBar": [
			"review:2026-11-16-reserves:tronconneuse-zipp-zag-386:0"
		],
		"demandExplanation": [
			"review:2026-11-16-reserves:tronconneuse-zipp-zag-386:0"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
		"Table p124 et titre relus avec ZAG387. Le couple diamètre/vitesse et la masse constituent la différence utile ; la puissance contradictoire reste une réserve visible non dimensionnante. L’ancienne conversion de 4 cfm en 113,267 L/min n’est pas réutilisée comme mesure ni revendiquée comme nouveau fait."
	]
};

export default product;
