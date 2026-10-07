import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "nuair-gvm-24-pcm",
	"slug": "nuair-gvm-24-pcm",
	"brand": "Nuair",
	"model": "GVM/24 PCM",
	"mpn": "3BXA504NUA",
	"tankLiters": 24,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/nuair-gvm-24-pcm.webp",
		"alt": "Repères techniques Nuair GVM/24 PCM, référence 3BXA504NUA",
		"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_Nuair_Professional_2022_9990284_PL.pdf#page=30",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Nuair GVM/24 PCM, référence 3BXA504NUA : cuve de 24 L, pression maximale publiée de 10 bar. Aucun débit FAD avec conditions de mesure complètes n’est établi dans les sources retenues ; la compatibilité pneumatique reste indéterminée. Groupe de compression publié : GVM. Groupe de compression : GVM. Nombre de cylindres : 2V.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons. Puissance moteur publiée : 2,2 kW.",
			"Débit aspiré : 350 L/min, distinct du débit restitué.",
			"Alimentation publiée : 230 V / 50 Hz.",
			"Groupe de compression : GVM.",
			"Nombre de cylindres : 2V.",
			"Vitesse de rotation : 1450 tr/min."
		],
		"limitations": [
			"Une valeur de débit sans pression de mesure associée ne permet pas de construire une courbe FAD. Aucun point n’est estimé.",
			"Le taux de marche continu n’est pas établi dans cette fiche. La disponibilité commerciale reste à confirmer.",
			"Données issues du nuair professional, catalogue 2022, encore accessible sur le site du fabricant. La commercialisation actuelle de cette référence n’est pas confirmée.",
			"La masse et les dimensions de ce tableau concernent l’emballage, pas la machine nue."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Le tableau Nuair Professional, catalogue 2022 indique « Air displacement » : 350 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne.",
			"evidenceIds": [
				"nuair-3bxa504nua-20260927"
			]
		},
		{
			"label": "Équipement",
			"value": "Groupe de compression publié : GVM.",
			"evidenceIds": [
				"nuair-3bxa504nua-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "GVM",
			"evidenceIds": [
				"nuair-3bxa504nua-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "2V",
			"evidenceIds": [
				"nuair-3bxa504nua-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1450 tr/min",
			"evidenceIds": [
				"nuair-3bxa504nua-20260927"
			]
		},
		{
			"label": "Masse brute avec emballage",
			"value": "56 kg",
			"evidenceIds": [
				"nuair-3bxa504nua-20260927"
			]
		},
		{
			"label": "Dimensions de l’emballage (L × P × H)",
			"value": "640x530x780 mm",
			"evidenceIds": [
				"nuair-3bxa504nua-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "nuair-3bxa504nua-20260927",
			"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_Nuair_Professional_2022_9990284_PL.pdf#page=30",
			"sourceLabel": "Nuair Professional, catalogue 2022, p. 30, réf. 3BXA504NUA",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Le tableau Nuair Professional, catalogue 2022 indique « Air displacement » : 350 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne."
		}
	],
	"fieldSources": {
		"mpn": [
			"nuair-3bxa504nua-20260927"
		],
		"tankLiters": [
			"nuair-3bxa504nua-20260927"
		],
		"maxPressureBar": [
			"nuair-3bxa504nua-20260927"
		],
		"fadCurve": [
			"nuair-3bxa504nua-20260927"
		],
		"oilType": [
			"nuair-3bxa504nua-20260927"
		],
		"intakeFlowLpm": [
			"nuair-3bxa504nua-20260927"
		],
		"powerKw": [
			"nuair-3bxa504nua-20260927"
		],
		"voltage": [
			"nuair-3bxa504nua-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 350,
	"powerKw": 2.2,
	"voltage": "230 V / 50 Hz"
};

export default product;
