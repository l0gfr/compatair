import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "stanley-fatmax-hy-227-10-50v",
	"slug": "stanley-fatmax-hy-227-10-50v",
	"brand": "Stanley",
	"model": "Fatmax HY 227/10/50V",
	"mpn": "HYDV404STF513",
	"tankLiters": 50,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/stanley-fatmax-hy-227-10-50v.webp",
		"alt": "Repères techniques Stanley Fatmax HY 227/10/50V, référence HYDV404STF513",
		"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_STANLEY_FATMAX_2020_EN_9990222_LR.pdf#page=14",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Stanley Fatmax HY 227/10/50V, référence HYDV404STF513 : cuve de 50 L, pression maximale publiée de 10 bar. Aucun débit FAD avec conditions de mesure complètes n’est établi dans les sources retenues ; la compatibilité pneumatique reste indéterminée. Groupe de compression publié : HY227. Groupe de compression : HY227. Nombre de cylindres : 1.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons. Puissance moteur publiée : 1,5 kW.",
			"Débit aspiré : 222 L/min, distinct du débit restitué.",
			"Alimentation publiée : 230 V / 50 Hz.",
			"Groupe de compression : HY227.",
			"Nombre de cylindres : 1.",
			"Vitesse de rotation : 3400 tr/min."
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
			"value": "Le tableau Stanley Fatmax, catalogue compresseurs 2020 indique « Air displacement » : 222 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne.",
			"evidenceIds": [
				"stanley-hydv404stf513-20260927"
			]
		},
		{
			"label": "Équipement",
			"value": "Groupe de compression publié : HY227.",
			"evidenceIds": [
				"stanley-hydv404stf513-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "HY227",
			"evidenceIds": [
				"stanley-hydv404stf513-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "1",
			"evidenceIds": [
				"stanley-hydv404stf513-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "3400 tr/min",
			"evidenceIds": [
				"stanley-hydv404stf513-20260927"
			]
		},
		{
			"label": "Masse brute avec emballage",
			"value": "26 kg",
			"evidenceIds": [
				"stanley-hydv404stf513-20260927"
			]
		},
		{
			"label": "Dimensions de l’emballage (L × P × H)",
			"value": "340x340x870 mm",
			"evidenceIds": [
				"stanley-hydv404stf513-20260927"
			]
		},
		{
			"label": "Code commercial complémentaire",
			"value": "FMXCM0047E",
			"evidenceIds": [
				"stanley-hydv404stf513-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "stanley-hydv404stf513-20260927",
			"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_STANLEY_FATMAX_2020_EN_9990222_LR.pdf#page=14",
			"sourceLabel": "Stanley Fatmax, catalogue compresseurs 2020, p. 14, réf. HYDV404STF513",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Le tableau Stanley Fatmax, catalogue compresseurs 2020 indique « Air displacement » : 222 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne."
		}
	],
	"fieldSources": {
		"mpn": [
			"stanley-hydv404stf513-20260927"
		],
		"tankLiters": [
			"stanley-hydv404stf513-20260927"
		],
		"maxPressureBar": [
			"stanley-hydv404stf513-20260927"
		],
		"fadCurve": [
			"stanley-hydv404stf513-20260927"
		],
		"oilType": [
			"stanley-hydv404stf513-20260927"
		],
		"intakeFlowLpm": [
			"stanley-hydv404stf513-20260927"
		],
		"powerKw": [
			"stanley-hydv404stf513-20260927"
		],
		"voltage": [
			"stanley-hydv404stf513-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 222,
	"powerKw": 1.5,
	"voltage": "230 V / 50 Hz"
};

export default product;
