import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-max-cn890f3",
	"slug": "agrafeuse-cloueuse-max-cn890f3",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "MAX CN890F3",
	"brand": "MAX",
	"model": "CN890F3",
	"mpn": "CN890F3",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 6.895,
		"typical": 6.895,
		"max": 6.895
	},
	"airPerActionLiters": 3.115,
	"actionLabel": "cycle de pose",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-max-cn890f3.webp",
		"alt": "Repères techniques : MAX CN890F3",
		"sourceUrl": "https://www.maxusacorp.com/wp-content/uploads/CN890F3_SellSheet.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "max-cn890f3",
		"label": "Référence CN890F3",
		"distinguishingAttributes": {
			"reference": "CN890F3",
			"Masse publiée": "8.4 lb",
			"Capacité du magasin": "300 clous"
		}
	},
	"editorial": {
		"overview": "MAX CN890F3. Volume déclaré : 3,115 L par cycle à 6,895 bar ; la cadence doit être renseignée. Masse publiée : 8.4 lb. Capacité du magasin : 300 clous.",
		"verifiedFacts": [
			"Masse publiée : 8.4 lb.",
			"Capacité du magasin : 300 clous.",
			"Clous en rouleau : 15 degrés, assemblage métallique.",
			"Longueur des clous : 2 à 3-1/2 pouces."
		],
		"limitations": [
			"Une cadence déclarée permet le calcul moyen ; la pointe instantanée de déclenchement reste distincte.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "8.4 lb",
			"evidenceIds": [
				"october2-tools-max-cn890-sell-p2"
			]
		},
		{
			"label": "Capacité du magasin",
			"value": "300 clous",
			"evidenceIds": [
				"october2-tools-max-cn890-sell-p2"
			]
		},
		{
			"label": "Clous en rouleau",
			"value": "15 degrés, assemblage métallique",
			"evidenceIds": [
				"october2-tools-max-cn890-sell-p2"
			]
		},
		{
			"label": "Longueur des clous",
			"value": "2 à 3-1/2 pouces",
			"evidenceIds": [
				"october2-tools-max-cn890-sell-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "100 psi : point de consommation du manuel fabricant, page PDF 5 ; la brochure imprime « 100 ps ».",
			"evidenceIds": [
				"october2-tools-max-cn890-sell-p2",
				"october2-tools-max-cn890f3-manual-p5"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "0.11 ft3/cycle",
			"evidenceIds": [
				"october2-tools-max-cn890-sell-p2",
				"october2-tools-max-cn890f3-manual-p5"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-max-cn890-sell-p2",
			"sourceUrl": "https://www.maxusacorp.com/wp-content/uploads/CN890F3_SellSheet.pdf#page=2",
			"sourceLabel": "MAX USA, brochure du modèle max-cn890-sell, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : e231c0a03bcbec9b1af0b02176884069dca895e7103efd256b13a5d9acf0d190. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "october2-tools-max-cn890f3-manual-p5",
			"sourceUrl": "https://www.maxusacorp.com/wp-content/uploads/%E3%80%90%E5%AE%8C%E6%88%90%E7%89%88%E3%80%91_CN890F_5L_c6_250822_MAX.pdf#page=5",
			"sourceLabel": "MAX USA, manuel commun des cloueurs CN, anglais, page PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 158f081891729d5e86313ad16b99ed0ab724afec6c05fc26ffa7c9dd84ad0fd8. Document complémentaire de la référence exacte, sans essai CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-max-cn890-sell-p2"
		],
		"workingPressureBar": [
			"october2-tools-max-cn890-sell-p2",
			"october2-tools-max-cn890f3-manual-p5"
		],
		"airPerActionLiters": [
			"october2-tools-max-cn890-sell-p2",
			"october2-tools-max-cn890f3-manual-p5"
		],
		"actionLabel": [
			"october2-tools-max-cn890-sell-p2",
			"october2-tools-max-cn890f3-manual-p5"
		]
	},
	"notes": [
		"Volume déclaré : 3,115 L par cycle à 6,895 bar ; la cadence doit être renseignée."
	]
};

export default product;
