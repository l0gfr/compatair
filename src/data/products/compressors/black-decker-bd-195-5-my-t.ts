import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "black-decker-bd-195-5-my-t",
	"slug": "black-decker-bd-195-5-my-t",
	"brand": "Black+Decker",
	"model": "BD 195/5-MY-T",
	"mpn": "8215320BND303",
	"tankLiters": 5,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil-free",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/black-decker-bd-195-5-my-t.webp",
		"alt": "Repères techniques Black+Decker BD 195/5-MY-T, référence 8215320BND303",
		"sourceUrl": "https://www.nuair.pl/images/KATALOGI/Catalogog-BD.pdf#page=7",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BD 195/5-MY-T, code 8215320BND303 : cuve de 5 L, groupe OL195 de 1,1 kW, maximum de 10 bar et alimentation 230 V à 50 Hz. Cette version ajoute des roues et une poignée télescopique au BD 195/5-MY. Le tableau donne 11,8 kg contre 10,7 kg pour le MY.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons sans huile. Puissance moteur publiée : 1,1 kW.",
			"Alimentation publiée : 230 V / 50 Hz.",
			"Groupe de compression : OL195.",
			"Capacité publiée sans pression de mesure : 180 l/min / 6,4 CFM.",
			"Vitesse de rotation : 3400 tr/min."
		],
		"limitations": [
			"Les deux versions publient 180 L/min sans pression de mesure ni qualification FAD ; le débit utile et le taux de marche restent à documenter.",
			"Le MY-T mesure 323 × 383 × 465 mm ; le MY, 310 × 335 × 445 mm. Les accessoires indiqués pour les deux sont une soufflette et un tuyau spiralé de 5 m.",
			"Le choix T porte sur le transport et l’encombrement ; les valeurs publiées de cuve, de puissance et de capacité sont communes. Disponibilité actuelle à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Le catalogue publie une capacité en L/min sans pression de mesure associée. Ce débit ne permet pas d’établir une courbe de débit restitué.",
			"evidenceIds": [
				"black-decker-8215320bnd303-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "OL195",
			"evidenceIds": [
				"black-decker-8215320bnd303-20260927"
			]
		},
		{
			"label": "Capacité publiée sans pression de mesure",
			"value": "180 l/min / 6,4 CFM",
			"evidenceIds": [
				"black-decker-8215320bnd303-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "3400 tr/min",
			"evidenceIds": [
				"black-decker-8215320bnd303-20260927"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "323x383x465 mm",
			"evidenceIds": [
				"black-decker-8215320bnd303-20260927"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "11,8 kg / 26 lb",
			"evidenceIds": [
				"black-decker-8215320bnd303-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "black-decker-8215320bnd303-20260927",
			"sourceUrl": "https://www.nuair.pl/images/KATALOGI/Catalogog-BD.pdf#page=7",
			"sourceLabel": "Black+Decker, catalogue compresseurs, version polonaise, p. 7, réf. 8215320BND303",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Le catalogue publie une capacité en L/min sans pression de mesure associée. Ce débit ne permet pas d’établir une courbe de débit restitué."
		}
	],
	"fieldSources": {
		"mpn": [
			"black-decker-8215320bnd303-20260927"
		],
		"tankLiters": [
			"black-decker-8215320bnd303-20260927"
		],
		"maxPressureBar": [
			"black-decker-8215320bnd303-20260927"
		],
		"fadCurve": [
			"black-decker-8215320bnd303-20260927"
		],
		"oilType": [
			"black-decker-8215320bnd303-20260927"
		],
		"powerKw": [
			"black-decker-8215320bnd303-20260927"
		],
		"voltage": [
			"black-decker-8215320bnd303-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 1.1,
	"voltage": "230 V / 50 Hz"
};

export default product;
