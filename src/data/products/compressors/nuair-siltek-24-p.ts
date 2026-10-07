import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "nuair-siltek-24-p",
	"slug": "nuair-siltek-24-p",
	"brand": "Nuair",
	"model": "SILTEK 24 P",
	"mpn": "B2BP404NUA",
	"tankLiters": 24,
	"maxPressureBar": 8,
	"fadCurve": [],
	"oilType": "oil-free",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/nuair-siltek-24-p.webp",
		"alt": "Repères techniques Nuair SILTEK 24 P, référence B2BP404NUA",
		"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_Nuair_Professional_2022_9990284_PL.pdf#page=21",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Nuair SILTEK 24 P, référence B2BP404NUA : cuve de 24 L, pression maximale publiée de 8 bar. Aucun débit FAD avec conditions de mesure complètes n’est établi dans les sources retenues ; la compatibilité pneumatique reste indéterminée. Groupe de compression publié : OL130S. Groupe de compression : OL130S. Nombre de cylindres : 2.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons. Puissance moteur publiée : 1,5 kW.",
			"Débit aspiré : 240 L/min, distinct du débit restitué.",
			"Alimentation publiée : 230 V / 50 Hz.",
			"Groupe de compression : OL130S.",
			"Nombre de cylindres : 2.",
			"Vitesse de rotation : 1400 tr/min."
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
			"value": "Le tableau Nuair Professional, catalogue 2022 indique « Air displacement » : 240 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne.",
			"evidenceIds": [
				"nuair-b2bp404nua-20260927"
			]
		},
		{
			"label": "Équipement",
			"value": "Groupe de compression publié : OL130S.",
			"evidenceIds": [
				"nuair-b2bp404nua-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "OL130S",
			"evidenceIds": [
				"nuair-b2bp404nua-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "2",
			"evidenceIds": [
				"nuair-b2bp404nua-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1400 tr/min",
			"evidenceIds": [
				"nuair-b2bp404nua-20260927"
			]
		},
		{
			"label": "Masse brute avec emballage",
			"value": "31 kg",
			"evidenceIds": [
				"nuair-b2bp404nua-20260927"
			]
		},
		{
			"label": "Dimensions de l’emballage (L × P × H)",
			"value": "590x430x740 mm",
			"evidenceIds": [
				"nuair-b2bp404nua-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "nuair-b2bp404nua-20260927",
			"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_Nuair_Professional_2022_9990284_PL.pdf#page=21",
			"sourceLabel": "Nuair Professional, catalogue 2022, p. 21, réf. B2BP404NUA",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Le tableau Nuair Professional, catalogue 2022 indique « Air displacement » : 240 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne."
		}
	],
	"fieldSources": {
		"mpn": [
			"nuair-b2bp404nua-20260927"
		],
		"tankLiters": [
			"nuair-b2bp404nua-20260927"
		],
		"maxPressureBar": [
			"nuair-b2bp404nua-20260927"
		],
		"fadCurve": [
			"nuair-b2bp404nua-20260927"
		],
		"oilType": [
			"nuair-b2bp404nua-20260927"
		],
		"intakeFlowLpm": [
			"nuair-b2bp404nua-20260927"
		],
		"powerKw": [
			"nuair-b2bp404nua-20260927"
		],
		"voltage": [
			"nuair-b2bp404nua-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 240,
	"powerKw": 1.5,
	"voltage": "230 V / 50 Hz"
};

export default product;
