import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "black-decker-bd-195-cubo",
	"slug": "black-decker-bd-195-cubo",
	"brand": "Black+Decker",
	"model": "BD 195 - CUBO",
	"mpn": "8215340BND701_",
	"tankLiters": 0,
	"maxPressureBar": 8,
	"fadCurve": [],
	"oilType": "oil-free",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/black-decker-bd-195-cubo.webp",
		"alt": "Repères techniques Black+Decker BD 195 - CUBO, référence 8215340BND701_",
		"sourceUrl": "https://www.nuair.pl/images/KATALOGI/Catalogog-BD.pdf#page=6",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Le BD 195 CUBO, code 8215340BND701, est le choix compact de ce duo : 7 kg et aucune cuve intégrée, contre 10,1 kg et 6 L pour le BD 195/6-NK. Les deux utilisent le groupe OL195 de 1,1 kW en 230 V à 50 Hz, avec un maximum de 8 bar. Le CUBO réduit le poids à transporter ; le 6-NK ajoute une réserve d’air. Pour choisir une clé à chocs ou une ponceuse, il reste à obtenir le débit restitué à la pression de travail : les 180 L/min du catalogue sont publiés sans cette condition.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons sans huile. Puissance moteur publiée : 1,1 kW.",
			"Alimentation publiée : 230 V / 50 Hz.",
			"Groupe de compression : OL195.",
			"Capacité publiée sans pression de mesure : 180 l/min / 6,4 CFM.",
			"Vitesse de rotation : 3400 tr/min."
		],
		"limitations": [
			"Une valeur de débit sans pression de mesure associée ne permet pas de construire une courbe FAD. Aucun point n’est estimé.",
			"Le taux de marche continu n’est pas établi dans cette fiche. La disponibilité commerciale reste à confirmer.",
			"Édition du catalogue et disponibilité commerciale actuelle non établies. Le débit non qualifié n’est pas utilisé pour valider une compatibilité."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Le catalogue publie une capacité en L/min sans pression de mesure associée. Ce débit ne permet pas d’établir une courbe de débit restitué.",
			"evidenceIds": [
				"black-decker-8215340bnd701-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "OL195",
			"evidenceIds": [
				"black-decker-8215340bnd701-20260927"
			]
		},
		{
			"label": "Capacité publiée sans pression de mesure",
			"value": "180 l/min / 6,4 CFM",
			"evidenceIds": [
				"black-decker-8215340bnd701-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "3400 tr/min",
			"evidenceIds": [
				"black-decker-8215340bnd701-20260927"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "285x290x295 mm",
			"evidenceIds": [
				"black-decker-8215340bnd701-20260927"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "7 kg / 15,4 lb",
			"evidenceIds": [
				"black-decker-8215340bnd701-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "black-decker-8215340bnd701-20260927",
			"sourceUrl": "https://www.nuair.pl/images/KATALOGI/Catalogog-BD.pdf#page=6",
			"sourceLabel": "Black+Decker, catalogue compresseurs, version polonaise, p. 6, réf. 8215340BND701_",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Le catalogue publie une capacité en L/min sans pression de mesure associée. Ce débit ne permet pas d’établir une courbe de débit restitué."
		},
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
			"black-decker-8215340bnd701-20260927"
		],
		"tankLiters": [
			"black-decker-8215340bnd701-20260927"
		],
		"maxPressureBar": [
			"black-decker-8215340bnd701-20260927"
		],
		"fadCurve": [
			"black-decker-8215340bnd701-20260927"
		],
		"oilType": [
			"black-decker-8215340bnd701-20260927"
		],
		"powerKw": [
			"black-decker-8215340bnd701-20260927"
		],
		"voltage": [
			"black-decker-8215340bnd701-20260927"
		],
		"editorial": [
			"black-decker-8215340bnd701-20260927"
		],
		"specifications": [
			"black-decker-8215340bnd701-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 1.1,
	"voltage": "230 V / 50 Hz"
};

export default product;
