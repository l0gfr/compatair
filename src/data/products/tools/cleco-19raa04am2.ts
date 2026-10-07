import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cleco-19raa04am2",
	"slug": "cleco-19raa04am2",
	"brand": "Cleco",
	"model": "19RAA04AM2",
	"mpn": "19RAA04AM2",
	"categoryId": "boulonneuse",
	"category": "boulonneuse",
	"label": "Cleco 19RAA04AM2",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cleco-19raa04am2.webp",
		"alt": "Repères techniques Cleco 19RAA04AM2, référence 19RAA04AM2",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=75",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Cleco 19RAA04AM2, référence 19RAA04AM2. Le tableau fabricant publie 310 L/min et une plage d’utilisation de 6,2 à 6,2 bar. Plage de couple publiée : 1.4 à 4.7 Nm. Vitesse à vide publiée : 950 tr/min.",
		"verifiedFacts": [
			"Performances publiées à 6,2 bar à l’entrée de l’outil, note de la page 75.",
			"Consommation publiée dans la colonne Air Cons. m³/min, multipliée par 1 000. Le régime de mesure n’est pas précisé dans ce tableau.",
			"Référence fabricant : 19RAA04AM2.",
			"Plage de couple publiée : 1.4 à 4.7 Nm.",
			"Vitesse à vide publiée : 950 tr/min.",
			"Longueur publiée : 305 mm."
		],
		"limitations": [
			"Données de catalogue industriel, sans essai physique CompatAir. Disponibilité et révision livrée à confirmer avec le fournisseur.",
			"Source : catalogue GI-1250-EU, édition archivée du fabricant. Vérifier la référence et la notice de la révision effectivement livrée."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Performances publiées à 6,2 bar à l’entrée de l’outil, note de la page 75.",
			"evidenceIds": [
				"cleco-19raa04am2-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée dans la colonne Air Cons. m³/min, multipliée par 1 000. Le régime de mesure n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"cleco-19raa04am2-20260926"
			]
		},
		{
			"label": "Plage de couple publiée",
			"value": "1.4 à 4.7 Nm",
			"evidenceIds": [
				"cleco-19raa04am2-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "950 tr/min",
			"evidenceIds": [
				"cleco-19raa04am2-20260926"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "305 mm",
			"evidenceIds": [
				"cleco-19raa04am2-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.8 kg",
			"evidenceIds": [
				"cleco-19raa04am2-20260926"
			]
		},
		{
			"label": "Sortie",
			"value": "Carré 1/4 pouce",
			"evidenceIds": [
				"cleco-19raa04am2-20260926"
			]
		},
		{
			"label": "Forme",
			"value": "Tête d’angle",
			"evidenceIds": [
				"cleco-19raa04am2-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "cleco-19raa04am2-20260926",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=75",
			"sourceLabel": "Cleco et Master Power, catalogue GI-1250-EU, p. 75, réf. 19RAA04AM2",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée dans la colonne Air Cons. m³/min, multipliée par 1 000. Le régime de mesure n’est pas précisé dans ce tableau."
		}
	],
	"fieldSources": {
		"mpn": [
			"cleco-19raa04am2-20260926"
		],
		"workingPressureBar": [
			"cleco-19raa04am2-20260926"
		],
		"airflowLpm": [
			"cleco-19raa04am2-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 310,
		"typical": 310,
		"max": 310
	}
};

export default product;
