import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "stanley-fatmax-s-244-8-6",
	"slug": "stanley-fatmax-s-244-8-6",
	"brand": "Stanley",
	"model": "Fatmax S 244/8/6",
	"mpn": "B4BA304STF556",
	"tankLiters": 6,
	"maxPressureBar": 8,
	"fadCurve": [],
	"oilType": "oil-free",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/stanley-fatmax-s-244-8-6.webp",
		"alt": "Repères techniques Stanley Fatmax S 244/8/6, référence B4BA304STF556",
		"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_STANLEY_FATMAX_2020_EN_9990222_LR.pdf#page=9",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Stanley Fatmax S 244/8/6, référence B4BA304STF556 : cuve de 6 L, pression maximale publiée de 8 bar. Aucun débit FAD avec conditions de mesure complètes n’est établi dans les sources retenues ; la compatibilité pneumatique reste indéterminée. Groupe de compression publié : OL244. Groupe de compression : OL244. Nombre de cylindres : 1.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons. Puissance moteur publiée : 1,1 kW.",
			"Débit aspiré : 130 L/min, distinct du débit restitué.",
			"Alimentation publiée : 230 V / 50 Hz.",
			"Groupe de compression : OL244.",
			"Nombre de cylindres : 1.",
			"Vitesse de rotation : 1450 tr/min."
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
			"value": "Le tableau Stanley Fatmax, catalogue compresseurs 2020 indique « Air displacement » : 130 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne.",
			"evidenceIds": [
				"stanley-b4ba304stf556-20260927"
			]
		},
		{
			"label": "Équipement",
			"value": "Groupe de compression publié : OL244.",
			"evidenceIds": [
				"stanley-b4ba304stf556-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "OL244",
			"evidenceIds": [
				"stanley-b4ba304stf556-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "1",
			"evidenceIds": [
				"stanley-b4ba304stf556-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1450 tr/min",
			"evidenceIds": [
				"stanley-b4ba304stf556-20260927"
			]
		},
		{
			"label": "Masse brute avec emballage",
			"value": "24 kg",
			"evidenceIds": [
				"stanley-b4ba304stf556-20260927"
			]
		},
		{
			"label": "Dimensions de l’emballage (L × P × H)",
			"value": "457x423x422 mm",
			"evidenceIds": [
				"stanley-b4ba304stf556-20260927"
			]
		},
		{
			"label": "Code commercial complémentaire",
			"value": "FMXCM0050E",
			"evidenceIds": [
				"stanley-b4ba304stf556-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "stanley-b4ba304stf556-20260927",
			"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_STANLEY_FATMAX_2020_EN_9990222_LR.pdf#page=9",
			"sourceLabel": "Stanley Fatmax, catalogue compresseurs 2020, p. 9, réf. B4BA304STF556",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Le tableau Stanley Fatmax, catalogue compresseurs 2020 indique « Air displacement » : 130 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne."
		}
	],
	"fieldSources": {
		"mpn": [
			"stanley-b4ba304stf556-20260927"
		],
		"tankLiters": [
			"stanley-b4ba304stf556-20260927"
		],
		"maxPressureBar": [
			"stanley-b4ba304stf556-20260927"
		],
		"fadCurve": [
			"stanley-b4ba304stf556-20260927"
		],
		"oilType": [
			"stanley-b4ba304stf556-20260927"
		],
		"intakeFlowLpm": [
			"stanley-b4ba304stf556-20260927"
		],
		"powerKw": [
			"stanley-b4ba304stf556-20260927"
		],
		"voltage": [
			"stanley-b4ba304stf556-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 130,
	"powerKw": 1.1,
	"voltage": "230 V / 50 Hz"
};

export default product;
