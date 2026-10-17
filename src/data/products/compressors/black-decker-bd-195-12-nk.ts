import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "black-decker-bd-195-12-nk",
	"slug": "black-decker-bd-195-12-nk",
	"brand": "Black+Decker",
	"model": "BD 195/12-NK",
	"mpn": "NKBN304BND309",
	"tankLiters": 12,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil-free",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/black-decker-bd-195-12-nk.webp",
		"alt": "Repères techniques Black+Decker BD 195/12-NK, référence NKBN304BND309",
		"sourceUrl": "https://www.nuair.pl/images/KATALOGI/Catalogog-BD.pdf#page=8",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BD 195/12-NK, article NKBN304BND309 : 12 L, 10 bar, groupe OL195, 1,1 kW et 13 kg publiés. Sur la même page, le BD 195/6-NK possède 6 L et un maximum de 8 bar. Le catalogue annonce 180 L/min pour les deux versions, sans qualifier ce chiffre comme FAD sous pression.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons sans huile. Puissance moteur publiée : 1,1 kW.",
			"Alimentation publiée : 230 V / 50 Hz.",
			"Groupe de compression : OL195.",
			"Capacité publiée sans pression de mesure : 180 l/min / 6,4 CFM.",
			"Vitesse de rotation : 3400 tr/min."
		],
		"limitations": [
			"Les 180 L/min ne sont pas attribués à une pression d’essai et ne permettent pas de conclure pour une clé à chocs ou une ponceuse précise.",
			"Le passage de 6 à 12 L documente une différence de stockage et de pression maximale ; le catalogue ne démontre pas un débit utile supérieur pour le 12 L.",
			"Le taux de marche et la disponibilité commerciale actuelle de cette édition restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Le catalogue publie une capacité en L/min sans pression de mesure associée. Ce débit ne permet pas d’établir une courbe de débit restitué.",
			"evidenceIds": [
				"black-decker-nkbn304bnd309-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "OL195",
			"evidenceIds": [
				"black-decker-nkbn304bnd309-20260927"
			]
		},
		{
			"label": "Capacité publiée sans pression de mesure",
			"value": "180 l/min / 6,4 CFM",
			"evidenceIds": [
				"black-decker-nkbn304bnd309-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "3400 tr/min",
			"evidenceIds": [
				"black-decker-nkbn304bnd309-20260927"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "420x250x440 mm",
			"evidenceIds": [
				"black-decker-nkbn304bnd309-20260927"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "13 kg / 28,6 lb",
			"evidenceIds": [
				"black-decker-nkbn304bnd309-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "black-decker-nkbn304bnd309-20260927",
			"sourceUrl": "https://www.nuair.pl/images/KATALOGI/Catalogog-BD.pdf#page=8",
			"sourceLabel": "Black+Decker, catalogue compresseurs, version polonaise, p. 8, réf. NKBN304BND309",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Le catalogue publie une capacité en L/min sans pression de mesure associée. Ce débit ne permet pas d’établir une courbe de débit restitué."
		}
	],
	"fieldSources": {
		"mpn": [
			"black-decker-nkbn304bnd309-20260927"
		],
		"tankLiters": [
			"black-decker-nkbn304bnd309-20260927"
		],
		"maxPressureBar": [
			"black-decker-nkbn304bnd309-20260927"
		],
		"fadCurve": [
			"black-decker-nkbn304bnd309-20260927"
		],
		"oilType": [
			"black-decker-nkbn304bnd309-20260927"
		],
		"powerKw": [
			"black-decker-nkbn304bnd309-20260927"
		],
		"voltage": [
			"black-decker-nkbn304bnd309-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 1.1,
	"voltage": "230 V / 50 Hz"
};

export default product;
