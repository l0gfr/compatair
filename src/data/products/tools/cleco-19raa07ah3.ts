import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cleco-19raa07ah3",
	"slug": "cleco-19raa07ah3",
	"brand": "Cleco",
	"model": "19RAA07AH3",
	"mpn": "19RAA07AH3",
	"categoryId": "boulonneuse",
	"category": "boulonneuse",
	"label": "Cleco 19RAA07AH3",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cleco-19raa07ah3.webp",
		"alt": "Repères techniques Cleco 19RAA07AH3, référence 19RAA07AH3",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=75",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "19RAA07AH3 : tête d’angle à carré 3/8 pouce, 500 tr/min et corps de 326 mm. La 19RAA06AH3 atteint 850 tr/min avec un corps de 316 mm. La plage globale publiée est de 1,5 à 6,8 Nm ; avec le ressort standard, elle reste à 1,5–5,4 Nm. Les 0,31 m³/min sont mesurés à 6,2 bar sans régime de charge précisé.",
		"verifiedFacts": [
			"19RAA07AH3 contre 19RAA06AH3 : 500 contre 850 tr/min et longueur 326 contre 316 mm. Plages globales 1,5–6,8 contre 1,5–6,0 Nm ; les deux annoncent 1,5–5,4 Nm avec le ressort standard.",
			"Le régime de la consommation publiée n’est pas précisé ; cette valeur n’est pas assimilée à un maximum de travail."
		],
		"limitations": [
			"La plage globale ne remplace pas la plage obtenue avec le ressort standard.",
			"Le catalogue avertit qu’une application au-dessus de 5,7 Nm peut dégrader la durée de vie de la broche ; cette limite d’usage ne doit pas être masquée par la borne 6,8 Nm."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Performances publiées à 6,2 bar à l’entrée de l’outil, note de la page 75.",
			"evidenceIds": [
				"cleco-19raa07ah3-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée dans la colonne Air Cons. m³/min, multipliée par 1 000. Le régime de mesure n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"cleco-19raa07ah3-20260926"
			]
		},
		{
			"label": "Plage de couple publiée",
			"value": "1.5 à 6.8 Nm",
			"evidenceIds": [
				"cleco-19raa07ah3-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "500 tr/min",
			"evidenceIds": [
				"cleco-19raa07ah3-20260926"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "326 mm",
			"evidenceIds": [
				"cleco-19raa07ah3-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.9 kg",
			"evidenceIds": [
				"cleco-19raa07ah3-20260926"
			]
		},
		{
			"label": "Sortie",
			"value": "Carré 3/8 pouce",
			"evidenceIds": [
				"cleco-19raa07ah3-20260926"
			]
		},
		{
			"label": "Forme",
			"value": "Tête d’angle",
			"evidenceIds": [
				"cleco-19raa07ah3-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "cleco-19raa07ah3-20260926",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=75",
			"sourceLabel": "Cleco et Master Power, catalogue GI-1250-EU, p. 75, réf. 19RAA07AH3",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée dans la colonne Air Cons. m³/min, multipliée par 1 000. Le régime de mesure n’est pas précisé dans ce tableau."
		},
		{
			"id": "review-20261025-cleco-19raa07ah3-s031",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=75",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s031, pages PDF 75",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:28.474428+00:00, SHA-256 8668d5e77a6b2469dc9b9012841e65bbfb947234a8087faa6fdd90384b3babac. 19RAA07AH3 contre 19RAA06AH3 : 500 contre 850 tr/min et longueur 326 contre 316 mm. Plages globales 1,5–6,8 contre 1,5–6,0 Nm ; les deux annoncent 1,5–5,4 Nm avec le ressort standard. Limite : Ajouter airflowBasis=unqualified et distinguer la plage globale de la plage avec ressort standard."
		}
	],
	"fieldSources": {
		"mpn": [
			"cleco-19raa07ah3-20260926"
		],
		"workingPressureBar": [
			"cleco-19raa07ah3-20260926"
		],
		"airflowLpm": [
			"cleco-19raa07ah3-20260926",
			"review-20261025-cleco-19raa07ah3-s031"
		],
		"airflowBasis": [
			"review-20261025-cleco-19raa07ah3-s031"
		],
		"connectorSize": [
			"review-20261025-cleco-19raa07ah3-s031"
		],
		"recommendedHose": [
			"review-20261025-cleco-19raa07ah3-s031"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir.",
		"Relecture proposée du 25 octobre 2026 : Ajouter airflowBasis=unqualified et distinguer la plage globale de la plage avec ressort standard."
	],
	"airflowLpm": {
		"min": 310,
		"typical": 310,
		"max": 310
	},
	"airflowBasis": "unqualified",
	"connectorSize": "1/8\" NPT",
	"recommendedHose": {
		"innerDiameterMm": 4.7625
	}
};

export default product;
