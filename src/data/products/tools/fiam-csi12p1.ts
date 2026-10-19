import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-csi12p1",
	"slug": "fiam-csi12p1",
	"brand": "Fiam",
	"model": "CSI12P1",
	"mpn": "114820522",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Fiam CSI12P1",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-csi12p1.webp",
		"alt": "Repères techniques Fiam CSI12P1, référence 114820522",
		"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-67.pdf#page=4",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "CSI12P1 114820522 : version pistolet, 1 900 tr/min et couple recommandé de 25–40 Nm. La CSI12 droite publie 2 200 tr/min et 30–40 Nm. Les deux donnent 6 L/s à vide, soit 360 L/min à 6,3 bar ; cette mesure ne devient pas un maximum en charge.",
		"verifiedFacts": [
			"Les valeurs de la brochure sont données à 6,3 bar (ISO 2787), pression recommandée.",
			"La brochure publie 6 L/s à vide (Idle air consumption), soit 360 L/min après conversion × 60.",
			"Référence fabricant : 114820522.",
			"Vitesse à vide : 1900 tr/min.",
			"Masse publiée : 1.19 kg."
		],
		"limitations": [
			"Le couple conseillé dépend du joint réel. Le régime à vide reste explicitement hors d’un verdict concluant sur l’alimentation en charge.",
			"Les caractéristiques proviennent de la brochure fabricant, la fiche HTML ne renseignant pas la consommation.",
			"Une consommation à vide n’est pas une mesure de tous les régimes en charge."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Les valeurs de la brochure sont données à 6,3 bar (ISO 2787), pression recommandée.",
			"evidenceIds": [
				"fiam-114820522-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La brochure publie 6 L/s à vide (Idle air consumption), soit 360 L/min après conversion × 60.",
			"evidenceIds": [
				"fiam-114820522-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1900 tr/min",
			"evidenceIds": [
				"fiam-114820522-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.19 kg",
			"evidenceIds": [
				"fiam-114820522-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-114820522-20260926",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-67.pdf#page=4",
			"sourceLabel": "Fiam, brochure technique en-67, p. 4, réf. 114820522",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La brochure publie 6 L/s à vide (Idle air consumption), soit 360 L/min après conversion × 60."
		},
		{
			"id": "fiam-114820522-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-67.pdf#page=4",
			"sourceLabel": "Fiam, brochure technique en-67, p. 4",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Note explicitant les performances mesurées à 6,3 bar dans la brochure de la famille."
		},
		{
			"id": "fiam-114820112-20260926",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-67.pdf#page=4",
			"sourceLabel": "Fiam, brochure technique en-67, p. 4, réf. 114820112",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La brochure publie 6 L/s à vide (Idle air consumption), soit 360 L/min après conversion × 60."
		},
		{
			"id": "fiam-114820112-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-67.pdf#page=4",
			"sourceLabel": "Fiam, brochure technique en-67, p. 4",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Note explicitant les performances mesurées à 6,3 bar dans la brochure de la famille."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-114820522-20260926"
		],
		"workingPressureBar": [
			"fiam-114820522-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-114820522-20260926"
		],
		"airflowBasis": [
			"fiam-114820522-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 360,
		"typical": 360,
		"max": 360
	},
	"airflowBasis": "free-speed"
};

export default product;
