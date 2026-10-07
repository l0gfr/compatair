import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "stanley-fatmax-dv2-400-10-24p",
	"slug": "stanley-fatmax-dv2-400-10-24p",
	"brand": "Stanley",
	"model": "Fatmax DV2 400/10/24P",
	"mpn": "8119550STF521",
	"tankLiters": 24,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/stanley-fatmax-dv2-400-10-24p.webp",
		"alt": "Repères techniques Stanley Fatmax DV2 400/10/24P, référence 8119550STF521",
		"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_STANLEY_FATMAX_2020_EN_9990222_LR.pdf#page=17",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Stanley Fatmax DV2 400/10/24P, référence 8119550STF521 : cuve de 24 L, pression maximale publiée de 10 bar. Aucun débit FAD avec conditions de mesure complètes n’est établi dans les sources retenues ; la compatibilité pneumatique reste indéterminée. Groupe de compression publié : VDC. Groupe de compression : VDC. Nombre de cylindres : 2.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons. Puissance moteur publiée : 2,2 kW.",
			"Débit aspiré : 356 L/min, distinct du débit restitué.",
			"Alimentation publiée : 230 V / 50 Hz.",
			"Groupe de compression : VDC.",
			"Nombre de cylindres : 2.",
			"Vitesse de rotation : 2850 tr/min."
		],
		"limitations": [
			"Une valeur de débit sans pression de mesure associée ne permet pas de construire une courbe FAD. Aucun point n’est estimé.",
			"Le taux de marche continu n’est pas établi dans cette fiche. La disponibilité commerciale reste à confirmer.",
			"Données issues du stanley fatmax, catalogue compresseurs 2020, encore accessible sur le site du fabricant. La commercialisation actuelle de cette référence n’est pas confirmée.",
			"La masse et les dimensions de ce tableau concernent l’emballage, pas la machine nue."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Le tableau Stanley Fatmax, catalogue compresseurs 2020 indique « Air displacement » : 356 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne.",
			"evidenceIds": [
				"stanley-8119550stf521-20260927"
			]
		},
		{
			"label": "Équipement",
			"value": "Groupe de compression publié : VDC.",
			"evidenceIds": [
				"stanley-8119550stf521-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "VDC",
			"evidenceIds": [
				"stanley-8119550stf521-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "2",
			"evidenceIds": [
				"stanley-8119550stf521-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "2850 tr/min",
			"evidenceIds": [
				"stanley-8119550stf521-20260927"
			]
		},
		{
			"label": "Masse brute avec emballage",
			"value": "44,4 kg",
			"evidenceIds": [
				"stanley-8119550stf521-20260927"
			]
		},
		{
			"label": "Dimensions de l’emballage (L × P × H)",
			"value": "605x440x745 mm",
			"evidenceIds": [
				"stanley-8119550stf521-20260927"
			]
		},
		{
			"label": "Code commercial complémentaire",
			"value": "FMXCM0082E",
			"evidenceIds": [
				"stanley-8119550stf521-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "stanley-8119550stf521-20260927",
			"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_STANLEY_FATMAX_2020_EN_9990222_LR.pdf#page=17",
			"sourceLabel": "Stanley Fatmax, catalogue compresseurs 2020, p. 17, réf. 8119550STF521",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Le tableau Stanley Fatmax, catalogue compresseurs 2020 indique « Air displacement » : 356 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne."
		}
	],
	"fieldSources": {
		"mpn": [
			"stanley-8119550stf521-20260927"
		],
		"tankLiters": [
			"stanley-8119550stf521-20260927"
		],
		"maxPressureBar": [
			"stanley-8119550stf521-20260927"
		],
		"fadCurve": [
			"stanley-8119550stf521-20260927"
		],
		"oilType": [
			"stanley-8119550stf521-20260927"
		],
		"intakeFlowLpm": [
			"stanley-8119550stf521-20260927"
		],
		"powerKw": [
			"stanley-8119550stf521-20260927"
		],
		"voltage": [
			"stanley-8119550stf521-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 356,
	"powerKw": 2.2,
	"voltage": "230 V / 50 Hz"
};

export default product;
