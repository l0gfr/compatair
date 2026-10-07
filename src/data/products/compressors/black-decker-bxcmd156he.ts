import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "black-decker-bxcmd156he",
	"slug": "black-decker-bxcmd156he",
	"brand": "Black+Decker",
	"model": "BXCMD156HE",
	"mpn": "C6BM304BND119_",
	"tankLiters": 6,
	"maxPressureBar": 8,
	"fadCurve": [],
	"oilType": "oil-free",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/black-decker-bxcmd156he.webp",
		"alt": "Repères techniques Black+Decker BXCMD156HE, référence C6BM304BND119_",
		"sourceUrl": "https://www.nuair.pl/images/KATALOGI/Catalogog-BD.pdf#page=6",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Black+Decker BXCMD156HE, référence C6BM304BND119_ : cuve de 6 L, pression maximale publiée de 8 bar. Aucun débit FAD avec conditions de mesure complètes n’est établi dans les sources retenues ; la compatibilité pneumatique reste indéterminée. Groupe de compression : OL195. Capacité publiée sans pression de mesure : 180 l/min / 6,4 CFM.",
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
				"black-decker-c6bm304bnd119-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "OL195",
			"evidenceIds": [
				"black-decker-c6bm304bnd119-20260927"
			]
		},
		{
			"label": "Capacité publiée sans pression de mesure",
			"value": "180 l/min / 6,4 CFM",
			"evidenceIds": [
				"black-decker-c6bm304bnd119-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "3400 tr/min",
			"evidenceIds": [
				"black-decker-c6bm304bnd119-20260927"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "360x350x330 mm",
			"evidenceIds": [
				"black-decker-c6bm304bnd119-20260927"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "8,5 kg / 18,7 lb",
			"evidenceIds": [
				"black-decker-c6bm304bnd119-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "black-decker-c6bm304bnd119-20260927",
			"sourceUrl": "https://www.nuair.pl/images/KATALOGI/Catalogog-BD.pdf#page=6",
			"sourceLabel": "Black+Decker, catalogue compresseurs, version polonaise, p. 6, réf. C6BM304BND119_",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Le catalogue publie une capacité en L/min sans pression de mesure associée. Ce débit ne permet pas d’établir une courbe de débit restitué."
		}
	],
	"fieldSources": {
		"mpn": [
			"black-decker-c6bm304bnd119-20260927"
		],
		"tankLiters": [
			"black-decker-c6bm304bnd119-20260927"
		],
		"maxPressureBar": [
			"black-decker-c6bm304bnd119-20260927"
		],
		"fadCurve": [
			"black-decker-c6bm304bnd119-20260927"
		],
		"oilType": [
			"black-decker-c6bm304bnd119-20260927"
		],
		"powerKw": [
			"black-decker-c6bm304bnd119-20260927"
		],
		"voltage": [
			"black-decker-c6bm304bnd119-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 1.1,
	"voltage": "230 V / 50 Hz"
};

export default product;
