import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "tronconneuse-universal-tool-ut8725-20",
	"slug": "tronconneuse-universal-tool-ut8725-20",
	"categoryId": "tronconneuse",
	"category": "tronconneuse",
	"label": "Universal Tool UT8725-20",
	"brand": "Universal Tool",
	"model": "UT8725-20",
	"mpn": "UT8725-20",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "Consommation documentaire présente dans la fiche, mais régime/unité ou pression de mesure insuffisamment qualifiés pour le calcul.",
	"connectorSize": "1/4-in. (Air Inlet  (NPT / BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/tronconneuse-universal-tool-ut8725-20.webp",
		"alt": "Repères techniques : Universal Tool UT8725-20",
		"sourceUrl": "https://continentaltoolgroup.com/product/straight-cut-off-tool/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "universal-tool-ut8725-20",
		"label": "Référence UT8725-20",
		"distinguishingAttributes": {
			"reference": "UT8725-20",
			"Masse publiée": "0.82 kg",
			"Longueur publiée": "190 mm"
		}
	},
	"editorial": {
		"overview": "Universal Tool UT8725-20. La UT8725-20 est la tronçonneuse droite de 190 mm à 20 000 tr/min ; la UT8726 est plus courte, 171 mm. La fiche publie une consommation moyenne 4 sous le libellé Avg. Air Cons (CMF), anciennement omise ; l’unité typographiée n’est pas corrigée silencieusement. Les colonnes 0,7 HP et 0,32 kW sont discordantes, sans puissance alternative supposée.",
		"verifiedFacts": [
			"Type : Tronçonneuse droite à échappement arrière.",
			"Vitesse : 20 000 tr/min.",
			"Longueur : 190 mm.",
			"Puissance, colonnes source : 0,7 HP / 0,32 kW.",
			"Consommation moyenne publiée : 4 CMF, libellé littéral du champ constructeur."
		],
		"limitations": [
			"Régime et pression de mesure non suffisamment documentés ; les valeurs restent hors calcul conclusif.",
			"Les colonnes contradictoires éventuelles restent attribuées à la source, sans correction devinée."
		]
	},
	"specifications": [
		{
			"label": "Type",
			"value": "Tronçonneuse droite à échappement arrière",
			"evidenceIds": [
				"tronconneuse-universal-tool-ut8725-20-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse",
			"value": "20 000 tr/min",
			"evidenceIds": [
				"tronconneuse-universal-tool-ut8725-20-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "190 mm",
			"evidenceIds": [
				"tronconneuse-universal-tool-ut8725-20-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance, colonnes source",
			"value": "0,7 HP / 0,32 kW",
			"evidenceIds": [
				"tronconneuse-universal-tool-ut8725-20-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation moyenne publiée",
			"value": "4 CMF, libellé littéral du champ constructeur",
			"evidenceIds": [
				"tronconneuse-universal-tool-ut8725-20-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-112-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/straight-cut-off-tool/",
			"sourceLabel": "Universal Tool, fiche fabricant de la référence UT8725-20",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 1bd8f62cfd55e8b6bc91dd722ddf6b2b9973f749af3af4b2cbdee0ed215baf93. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "tronconneuse-universal-tool-ut8725-20-reserved-20261103-1",
			"sourceUrl": "https://continentaltoolgroup.com/product/straight-cut-off-tool/",
			"sourceLabel": "Universal Tool : revue factuelle du 3 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 4ac2925055ab01acb1b30ad8bc707d63bcc145ac5378e9a18566ea9a19511555. La UT8725-20 est la tronçonneuse droite de 190 mm à 20 000 tr/min ; la UT8726 est plus courte, 171 mm. La fiche publie une consommation moyenne 4 sous le libellé Avg. Air Cons (CMF), anciennement omise ; l’unité typographiée n’est pas corrigée silencieusement. Les colonnes 0,7 HP et 0,32 kW sont discordantes, sans puissance alternative supposée."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-112-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-112-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-112-p1"
		],
		"demandExplanation": [
			"tronconneuse-universal-tool-ut8725-20-reserved-20261103-1"
		],
		"editorial": [
			"tronconneuse-universal-tool-ut8725-20-reserved-20261103-1"
		],
		"specifications": [
			"tronconneuse-universal-tool-ut8725-20-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
