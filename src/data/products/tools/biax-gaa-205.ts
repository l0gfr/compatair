import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-gaa-205",
	"slug": "biax-gaa-205",
	"brand": "BIAX",
	"model": "GAA 205",
	"mpn": "150600720",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "BIAX GAA 205",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-gaa-205.webp",
		"alt": "Repères techniques BIAX GAA 205, référence 150600720",
		"sourceUrl": "https://biax.de/wp-content/uploads/2025/02/BIAX_Schrauber_DE.pdf#page=12",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "La GAA 205 est une visseuse à aspiration intégrée des vis, à 500 tr/min, contre 900 pour la GAA 209. Les deux publient 150 L/min à 6 bar dans le tableau, sans régime de charge qualifié. Ce nombre ne permet donc pas un verdict de fonctionnement continu, même si l’outil est plus lent.",
		"verifiedFacts": [
			"Le catalogue prescrit un fonctionnement à 6 bar dans la page de cette famille.",
			"Consommation publiée dans la ligne Luftverbrauch en L/min ; le régime de charge n’est pas détaillé.",
			"Référence fabricant : 150600720.",
			"Vitesse à vide publiée : 500 tr/min.",
			"Masse publiée : 150 g.",
			"La plage de couple de la GAA 205 est de 0,04 à 1,1 Nm ; celle de la GAA 209 est de 0,02 à 1,0 Nm. Les deux pèsent 150 g et reçoivent une empreinte A3 hexagonale de 3 mm.",
			"La douille d’aspiration se choisit selon le diamètre de tête de vis, son passage intérieur et le porte-embout. Le catalogue donne des références distinctes : l’aspiration ne valide pas à elle seule la combinaison vis/embout."
		],
		"limitations": [
			"Le réglage du couple dépend de l’assemblage et des ressorts prévus par le fabricant.",
			"L’aspiration des vis et les équipements auxiliaires peuvent demander un dimensionnement séparé.",
			"La valeur de 150 L/min reste documentaire, avec airflowBasis unqualified ; aucune moyenne ni consommation maximale en charge ne lui est attribuée."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue prescrit un fonctionnement à 6 bar dans la page de cette famille.",
			"evidenceIds": [
				"biax-150600720-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée dans la ligne Luftverbrauch en L/min ; le régime de charge n’est pas détaillé.",
			"evidenceIds": [
				"biax-150600720-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "500 tr/min",
			"evidenceIds": [
				"biax-150600720-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "150 g",
			"evidenceIds": [
				"biax-150600720-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150600720-20260926",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/02/BIAX_Schrauber_DE.pdf#page=12",
			"sourceLabel": "BIAX, catalogue des visseuses pneumatiques, p. 12, réf. 150600720",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée dans la ligne Luftverbrauch en L/min ; le régime de charge n’est pas détaillé."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150600720-20260926"
		],
		"workingPressureBar": [
			"biax-150600720-20260926"
		],
		"airflowLpm": [
			"biax-150600720-20260926"
		],
		"airflowBasis": [
			"biax-150600720-20260926"
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
