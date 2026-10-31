import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cleco-19raa09ah3",
	"slug": "cleco-19raa09ah3",
	"brand": "Cleco",
	"model": "19RAA09AH3",
	"mpn": "19RAA09AH3",
	"categoryId": "boulonneuse",
	"category": "boulonneuse",
	"label": "Cleco 19RAA09AH3",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cleco-19raa09ah3.webp",
		"alt": "Repères techniques Cleco 19RAA09AH3, référence 19RAA09AH3",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=75",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Cleco 19RAA09AH3. Le catalogue GI-1250-EU rattache les performances à 6,2 bar, mais ne qualifie pas les 310 L/min de maximum ni de consommation en charge. Cette valeur reste documentaire et le verdict reste indéterminé. Performances publiées à 6,2 bar à l’entrée de l’outil, note de la page 75. Référence fabricant : 19RAA09AH3. Plage de couple publiée : 2.0 à 8.5 Nm. Vitesse à vide publiée : 500 tr/min. Longueur publiée : 326 mm.",
		"verifiedFacts": [
			"Performances publiées à 6,2 bar à l’entrée de l’outil, note de la page 75.",
			"Référence fabricant : 19RAA09AH3.",
			"Plage de couple publiée : 2.0 à 8.5 Nm.",
			"Vitesse à vide publiée : 500 tr/min.",
			"Longueur publiée : 326 mm.",
			"Consommation de régime non précisé publiée : 310 L/min."
		],
		"limitations": [
			"Données de catalogue industriel, sans essai physique CompatAir. Disponibilité et révision livrée à confirmer avec le fournisseur.",
			"Source : catalogue GI-1250-EU, édition archivée du fabricant. Vérifier la référence et la notice de la révision effectivement livrée.",
			"Le catalogue GI-1250-EU rattache les performances à 6,2 bar, mais ne qualifie pas les 310 L/min de maximum ni de consommation en charge. Cette valeur reste documentaire et le verdict reste indéterminé."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Performances publiées à 6,2 bar à l’entrée de l’outil, note de la page 75.",
			"evidenceIds": [
				"cleco-19raa09ah3-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation de régime non précisé publiée : 310 L/min.",
			"evidenceIds": [
				"cleco-19raa09ah3-reserved-20261031-1"
			]
		},
		{
			"label": "Plage de couple publiée",
			"value": "2.0 à 8.5 Nm",
			"evidenceIds": [
				"cleco-19raa09ah3-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "500 tr/min",
			"evidenceIds": [
				"cleco-19raa09ah3-20260926"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "326 mm",
			"evidenceIds": [
				"cleco-19raa09ah3-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.9 kg",
			"evidenceIds": [
				"cleco-19raa09ah3-20260926"
			]
		},
		{
			"label": "Sortie",
			"value": "Carré 3/8 pouce",
			"evidenceIds": [
				"cleco-19raa09ah3-20260926"
			]
		},
		{
			"label": "Forme",
			"value": "Tête d’angle",
			"evidenceIds": [
				"cleco-19raa09ah3-20260926"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":310,\"typical\":310,\"max\":310},\"workingPressureBar\":{\"min\":6.2,\"typical\":6.2,\"max\":6.2}}",
			"evidenceIds": [
				"cleco-19raa09ah3-20260926",
				"cleco-19raa09ah3-reserved-20261031-1"
			]
		}
	],
	"evidence": [
		{
			"id": "cleco-19raa09ah3-20260926",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=75",
			"sourceLabel": "Cleco et Master Power, catalogue GI-1250-EU, p. 75, réf. 19RAA09AH3",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée dans la colonne Air Cons. m³/min, multipliée par 1 000. Le régime de mesure n’est pas précisé dans ce tableau."
		},
		{
			"id": "cleco-19raa09ah3-reserved-20261031-1",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=75",
			"sourceLabel": "Cleco 19RAA09AH3 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 8668d5e77a6b2469dc9b9012841e65bbfb947234a8087faa6fdd90384b3babac. Le catalogue GI-1250-EU rattache les performances à 6,2 bar, mais ne qualifie pas les 310 L/min de maximum ni de consommation en charge. Cette valeur reste documentaire et le verdict reste indéterminé."
		}
	],
	"fieldSources": {
		"mpn": [
			"cleco-19raa09ah3-20260926"
		],
		"workingPressureBar": [
			"cleco-19raa09ah3-20260926"
		],
		"airflowLpm": [
			"cleco-19raa09ah3-20260926"
		],
		"airflowBasis": [
			"cleco-19raa09ah3-reserved-20261031-1"
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
