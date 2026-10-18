import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-gaa-209",
	"slug": "biax-gaa-209",
	"brand": "BIAX",
	"model": "GAA 209",
	"mpn": "150600705",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "BIAX GAA 209",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-gaa-209.webp",
		"alt": "Repères techniques BIAX GAA 209, référence 150600705",
		"sourceUrl": "https://biax.de/wp-content/uploads/2025/02/BIAX_Schrauber_DE.pdf#page=12",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "GAA 209 : visseuse à aspiration de vis, sortie hexagonale de 3 mm et 900 tr/min, contre 500 pour la GAA 205. La plage publiée est de 0,02 à 1,0 Nm. Les deux déclarent 150 L/min à 6 bar, sans qualification du régime de charge.",
		"verifiedFacts": [
			"Le catalogue prescrit un fonctionnement à 6 bar dans la page de cette famille.",
			"Consommation publiée dans la ligne Luftverbrauch en L/min ; le régime de charge n’est pas détaillé.",
			"Référence fabricant : 150600705.",
			"Vitesse à vide publiée : 900 tr/min.",
			"Masse publiée : 150 g."
		],
		"limitations": [
			"Ce débit ne valide pas une demande continue, même avec un compresseur largement dimensionné.",
			"La fonction d’aspiration et le porte-embout doivent convenir à la vis et au poste ; le chiffre de couple n’est pas un protocole de réglage."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue prescrit un fonctionnement à 6 bar dans la page de cette famille.",
			"evidenceIds": [
				"biax-150600705-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée dans la ligne Luftverbrauch en L/min ; le régime de charge n’est pas détaillé.",
			"evidenceIds": [
				"biax-150600705-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "900 tr/min",
			"evidenceIds": [
				"biax-150600705-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "150 g",
			"evidenceIds": [
				"biax-150600705-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150600705-20260926",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/02/BIAX_Schrauber_DE.pdf#page=12",
			"sourceLabel": "BIAX, catalogue des visseuses pneumatiques, p. 12, réf. 150600705",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée dans la ligne Luftverbrauch en L/min ; le régime de charge n’est pas détaillé."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150600705-20260926"
		],
		"workingPressureBar": [
			"biax-150600705-20260926"
		],
		"airflowLpm": [
			"biax-150600705-20260926"
		],
		"airflowBasis": [
			"biax-150600705-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 150,
		"typical": 150,
		"max": 150
	},
	"airflowBasis": "unqualified"
};

export default product;
