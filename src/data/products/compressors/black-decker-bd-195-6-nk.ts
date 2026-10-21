import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "black-decker-bd-195-6-nk",
	"slug": "black-decker-bd-195-6-nk",
	"brand": "Black+Decker",
	"model": "BD 195/6-NK",
	"mpn": "NKBB304BND308",
	"tankLiters": 6,
	"maxPressureBar": 8,
	"fadCurve": [],
	"oilType": "oil-free",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/black-decker-bd-195-6-nk.webp",
		"alt": "Repères techniques Black+Decker BD 195/6-NK, référence NKBB304BND308",
		"sourceUrl": "https://www.nuair.pl/images/KATALOGI/Catalogog-BD.pdf#page=8",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BD 195/6-NK, code NKBB304BND308 : cuve de 6 L, maximum de 8 bar et groupe OL195 de 1,1 kW sans huile, en 230 V à 50 Hz. Le catalogue donne 10,1 kg et 375 × 262 × 400 mm. Le BD 195/12-NK possède 12 L, atteint 10 bar et indique 13 kg.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons sans huile. Puissance moteur publiée : 1,1 kW.",
			"Alimentation publiée : 230 V / 50 Hz.",
			"Groupe de compression : OL195.",
			"Capacité publiée sans pression de mesure : 180 l/min / 6,4 CFM.",
			"Vitesse de rotation : 3400 tr/min."
		],
		"limitations": [
			"Les deux références publient une capacité de 180 L/min sans pression de mesure ni qualification FAD. Le volume de cuve et la pression maximale ne documentent pas le débit utile à l’outil.",
			"Le 12 L porte le code NKBN304BND309 et mesure 420 × 250 × 440 mm. Sa capacité de stockage et son encombrement diffèrent du 6 L.",
			"Le taux de marche, l’édition du catalogue et la commercialisation actuelle restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Le catalogue publie une capacité en L/min sans pression de mesure associée. Ce débit ne permet pas d’établir une courbe de débit restitué.",
			"evidenceIds": [
				"black-decker-nkbb304bnd308-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "OL195",
			"evidenceIds": [
				"black-decker-nkbb304bnd308-20260927"
			]
		},
		{
			"label": "Capacité publiée sans pression de mesure",
			"value": "180 l/min / 6,4 CFM",
			"evidenceIds": [
				"black-decker-nkbb304bnd308-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "3400 tr/min",
			"evidenceIds": [
				"black-decker-nkbb304bnd308-20260927"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "375x262x400 mm",
			"evidenceIds": [
				"black-decker-nkbb304bnd308-20260927"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "10,1 kg / 22,2 lb",
			"evidenceIds": [
				"black-decker-nkbb304bnd308-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "black-decker-nkbb304bnd308-20260927",
			"sourceUrl": "https://www.nuair.pl/images/KATALOGI/Catalogog-BD.pdf#page=8",
			"sourceLabel": "Black+Decker, catalogue compresseurs, version polonaise, p. 8, réf. NKBB304BND308",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Le catalogue publie une capacité en L/min sans pression de mesure associée. Ce débit ne permet pas d’établir une courbe de débit restitué."
		}
	],
	"fieldSources": {
		"mpn": [
			"black-decker-nkbb304bnd308-20260927"
		],
		"tankLiters": [
			"black-decker-nkbb304bnd308-20260927"
		],
		"maxPressureBar": [
			"black-decker-nkbb304bnd308-20260927"
		],
		"fadCurve": [
			"black-decker-nkbb304bnd308-20260927"
		],
		"oilType": [
			"black-decker-nkbb304bnd308-20260927"
		],
		"powerKw": [
			"black-decker-nkbb304bnd308-20260927"
		],
		"voltage": [
			"black-decker-nkbb304bnd308-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 1.1,
	"voltage": "230 V / 50 Hz"
};

export default product;
