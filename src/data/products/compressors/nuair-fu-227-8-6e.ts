import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "nuair-fu-227-8-6e",
	"slug": "nuair-fu-227-8-6e",
	"brand": "Nuair",
	"model": "FU-227/8/6E",
	"mpn": "HYBE404NUA",
	"tankLiters": 6,
	"maxPressureBar": 8,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/nuair-fu-227-8-6e.webp",
		"alt": "Repères techniques Nuair FU-227/8/6E, référence HYBE404NUA",
		"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_Nuair_Professional_2022_9990284_PL.pdf#page=28",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Nuair FU-227/8/6E, référence HYBE404NUA : cuve de 6 L, pression maximale publiée de 8 bar. Aucun débit FAD avec conditions de mesure complètes n’est établi dans les sources retenues ; la compatibilité pneumatique reste indéterminée. Groupe de compression publié : HY227. Groupe de compression : HY227. Nombre de cylindres : 1.",
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
			"Données issues du nuair professional, catalogue 2022, encore accessible sur le site du fabricant. La commercialisation actuelle de cette référence n’est pas confirmée.",
			"La masse et les dimensions de ce tableau concernent l’emballage, pas la machine nue."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Le tableau Nuair Professional, catalogue 2022 indique « Air displacement » : 222 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne.",
			"evidenceIds": [
				"nuair-hybe404nua-20260927"
			]
		},
		{
			"label": "Équipement",
			"value": "Groupe de compression publié : HY227.",
			"evidenceIds": [
				"nuair-hybe404nua-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "HY227",
			"evidenceIds": [
				"nuair-hybe404nua-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "1",
			"evidenceIds": [
				"nuair-hybe404nua-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "3400 tr/min",
			"evidenceIds": [
				"nuair-hybe404nua-20260927"
			]
		},
		{
			"label": "Masse brute avec emballage",
			"value": "16 kg",
			"evidenceIds": [
				"nuair-hybe404nua-20260927"
			]
		},
		{
			"label": "Dimensions de l’emballage (L × P × H)",
			"value": "440x230x425 mm",
			"evidenceIds": [
				"nuair-hybe404nua-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "nuair-hybe404nua-20260927",
			"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_Nuair_Professional_2022_9990284_PL.pdf#page=28",
			"sourceLabel": "Nuair Professional, catalogue 2022, p. 28, réf. HYBE404NUA",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Le tableau Nuair Professional, catalogue 2022 indique « Air displacement » : 222 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne."
		}
	],
	"fieldSources": {
		"mpn": [
			"nuair-hybe404nua-20260927"
		],
		"tankLiters": [
			"nuair-hybe404nua-20260927"
		],
		"maxPressureBar": [
			"nuair-hybe404nua-20260927"
		],
		"fadCurve": [
			"nuair-hybe404nua-20260927"
		],
		"oilType": [
			"nuair-hybe404nua-20260927"
		],
		"intakeFlowLpm": [
			"nuair-hybe404nua-20260927"
		],
		"powerKw": [
			"nuair-hybe404nua-20260927"
		],
		"voltage": [
			"nuair-hybe404nua-20260927"
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
