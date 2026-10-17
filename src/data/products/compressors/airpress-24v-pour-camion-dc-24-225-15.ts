import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "airpress-24v-pour-camion-dc-24-225-15",
	"slug": "airpress-24v-pour-camion-dc-24-225-15",
	"brand": "Airpress",
	"model": "24V pour camion DC 24-225/15",
	"mpn": "36588",
	"tankLiters": 15,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil-free",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-24v-pour-camion-dc-24-225-15.webp",
		"alt": "Repères techniques Airpress 24V pour camion DC 24-225/15, référence 36588",
		"sourceUrl": "https://airpress.fr/compresseur-24v-pour-camion-dc-24-225-15-silencieux-sans-huile-10-bar-0-75-ch-0-55-kw-180-l-min-15-l-36588",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Le DC 24-225/15, article 36588, fonctionne en 24 V et possède une cuve de 15 L. Airpress annonce 225 L/min aspirés et une sortie estimée de 180 L/min, avec un cycle marche/repos de 20/80. Le voisin 36587 fonctionne en 12 V et annonce une sortie estimée de 144 L/min.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à pistons. Puissance moteur publiée : 0,55 kW.",
			"Débit aspiré : 225 L/min, distinct du débit restitué.",
			"Alimentation publiée : 24 V."
		],
		"limitations": [
			"Les 180 L/min sont une estimation fabricant sans pression d’essai précisée : ils ne constituent pas un point FAD à 10 bar.",
			"Le cycle 20/80 impose une utilisation intermittente. Sa fenêtre de référence ne permet pas de déduire un nombre de minutes de marche.",
			"Les versions 12 V et 24 V sont distinctes ; alimentation, raccordement à la batterie et intensité admissible doivent être vérifiés pour la référence commandée."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "La sortie annoncée à 180 L/min est explicitement qualifiée d’estimation par Airpress. La pression d’essai n’est pas précisée ; la courbe FAD reste vide.",
			"evidenceIds": [
				"airpress-36588-20260926"
			]
		},
		{
			"label": "Débit de sortie estimé ; pression d’essai non précisée",
			"value": "180 L/min 3 L/s",
			"evidenceIds": [
				"airpress-36588-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "20/80",
			"evidenceIds": [
				"airpress-36588-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "20 kg",
			"evidenceIds": [
				"airpress-36588-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-36588-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement direct 1:1",
			"evidenceIds": [
				"airpress-36588-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-36588-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-24v-pour-camion-dc-24-225-15-silencieux-sans-huile-10-bar-0-75-ch-0-55-kw-180-l-min-15-l-36588",
			"sourceLabel": "Airpress, fiche technique 36588, réf. 36588",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		},
		{
			"id": "review-20261017-airpress-36587",
			"sourceUrl": "https://airpress.fr/compresseur-silencieux-sans-huile-dc-12-180-15-10-bar-0-75-ch-0-55-kw-144-l-min-15-l-12-v-36587",
			"sourceLabel": "Airpress, DC 12-180/15, article 36587",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-17",
			"confidence": "B",
			"notes": "Lecture ciblée du 17 octobre 2026, SHA-256 d2e3a823558d44e28c6d1e29a634770417d9cb3ab014c7197c626cb8beccb27c."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-36588-20260926"
		],
		"tankLiters": [
			"airpress-36588-20260926"
		],
		"maxPressureBar": [
			"airpress-36588-20260926"
		],
		"fadCurve": [
			"airpress-36588-20260926"
		],
		"oilType": [
			"airpress-36588-20260926"
		],
		"intakeFlowLpm": [
			"airpress-36588-20260926"
		],
		"powerKw": [
			"airpress-36588-20260926"
		],
		"voltage": [
			"airpress-36588-20260926"
		],
		"ean": [
			"airpress-36588-20260926"
		],
		"dutyCycle": [
			"airpress-36588-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 225,
	"powerKw": 0.55,
	"voltage": "24 V",
	"ean": "8712418274295",
	"dutyCycle": 0.2
};

export default product;
