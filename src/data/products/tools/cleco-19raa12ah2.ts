import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cleco-19raa12ah2",
	"slug": "cleco-19raa12ah2",
	"brand": "Cleco",
	"model": "19RAA12AH2",
	"mpn": "19RAA12AH2",
	"categoryId": "boulonneuse",
	"category": "boulonneuse",
	"label": "Cleco 19RAA12AH2",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cleco-19raa12ah2-20261106.svg",
		"alt": "Repères techniques Cleco 19RAA12AH2, référence 19RAA12AH2",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=75",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Cleco 19RAA12AH2, référence 19RAA12AH2. Le tableau fabricant publie 310 L/min et une plage d’utilisation de 6,2 à 6,2 bar. Plage de couple publiée : 2.0 à 11.3 Nm. Vitesse à vide publiée : 200 tr/min.",
		"verifiedFacts": [
			"Performances publiées à 6,2 bar à l’entrée de l’outil, note de la page 75.",
			"Consommation publiée dans la colonne Air Cons. m³/min, multipliée par 1 000. Le régime de mesure n’est pas précisé dans ce tableau.",
			"Référence fabricant : 19RAA12AH2.",
			"Plage de couple publiée : 2.0 à 11.3 Nm.",
			"Vitesse à vide publiée : 200 tr/min.",
			"Longueur publiée : 326 mm."
		],
		"limitations": [
			"Données de catalogue industriel, sans essai physique CompatAir. Disponibilité et révision livrée à confirmer avec le fournisseur.",
			"Le fabricant avertit qu’au-delà de 5,7 Nm, la durée de vie de la broche ou du carré peut se dégrader sur cette variante.",
			"Source : catalogue GI-1250-EU, édition archivée du fabricant. Vérifier la référence et la notice de la révision effectivement livrée.",
			"Le régime de consommation publié est non précisé. Cette valeur reste documentaire et le moteur renvoie insufficient_data."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Performances publiées à 6,2 bar à l’entrée de l’outil, note de la page 75.",
			"evidenceIds": [
				"cleco-19raa12ah2-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée dans la colonne Air Cons. m³/min, multipliée par 1 000. Le régime de mesure n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"cleco-19raa12ah2-20260926"
			]
		},
		{
			"label": "Plage de couple publiée",
			"value": "2.0 à 11.3 Nm",
			"evidenceIds": [
				"cleco-19raa12ah2-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "200 tr/min",
			"evidenceIds": [
				"cleco-19raa12ah2-20260926"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "326 mm",
			"evidenceIds": [
				"cleco-19raa12ah2-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.9 kg",
			"evidenceIds": [
				"cleco-19raa12ah2-20260926"
			]
		},
		{
			"label": "Sortie",
			"value": "Carré 1/4 pouce",
			"evidenceIds": [
				"cleco-19raa12ah2-20260926"
			]
		},
		{
			"label": "Forme",
			"value": "Tête d’angle",
			"evidenceIds": [
				"cleco-19raa12ah2-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "cleco-19raa12ah2-20260926",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=75",
			"sourceLabel": "Cleco et Master Power, catalogue GI-1250-EU, p. 75, réf. 19RAA12AH2",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée dans la colonne Air Cons. m³/min, multipliée par 1 000. Le régime de mesure n’est pas précisé dans ce tableau."
		},
		{
			"id": "review:2026-11-06-followup:cleco-19raa12ah2:1",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=75",
			"sourceLabel": "Cleco, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "P75 :19RAA12AH2,200rpm,2,0–11,3Nm avec ressortstandard,326mm/0,9kg et0,31m³min. La branche avec ressortfort est3,4–11,3Nm, les19RAS sont distincts. Le régime n’est pas qualifié, donc310Lmin ne doit pas produire une conclusion en charge. SHA-256 du document complet : 8668d5e77a6b2469dc9b9012841e65bbfb947234a8087faa6fdd90384b3babac."
		}
	],
	"fieldSources": {
		"mpn": [
			"cleco-19raa12ah2-20260926"
		],
		"workingPressureBar": [
			"cleco-19raa12ah2-20260926"
		],
		"airflowLpm": [
			"cleco-19raa12ah2-20260926"
		],
		"airflowBasis": [
			"review:2026-11-06-followup:cleco-19raa12ah2:1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 310,
		"typical": 310,
		"max": 310
	},
	"airflowBasis": "unqualified"
};

export default product;
