import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "stanley-sxcms2050he",
	"slug": "stanley-sxcms2050he",
	"brand": "Stanley",
	"model": "SXCMS2050HE",
	"mpn": "B2DC404STN707",
	"tankLiters": 50,
	"maxPressureBar": 8,
	"fadCurve": [],
	"oilType": "oil-free",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/stanley-sxcms2050he.webp",
		"alt": "Repères techniques Stanley SXCMS2050HE, référence B2DC404STN707",
		"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_STANLEY_2020_EN_9990220_LR.pdf#page=9",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Stanley SXCMS2050HE, référence B2DC404STN707 : cuve de 50 L, pression maximale publiée de 8 bar. Aucun débit FAD avec conditions de mesure complètes n’est établi dans les sources retenues ; la compatibilité pneumatique reste indéterminée. Groupe de compression publié : OL130S. Groupe de compression : OL130S. Nombre de cylindres : 2.",
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
			"Données issues du stanley, catalogue compresseurs 2020, encore accessible sur le site du fabricant. La commercialisation actuelle de cette référence n’est pas confirmée.",
			"La masse et les dimensions de ce tableau concernent l’emballage, pas la machine nue."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Le tableau Stanley, catalogue compresseurs 2020 indique « Air displacement » : 240 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne.",
			"evidenceIds": [
				"stanley-b2dc404stn707-20260927"
			]
		},
		{
			"label": "Équipement",
			"value": "Groupe de compression publié : OL130S.",
			"evidenceIds": [
				"stanley-b2dc404stn707-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "OL130S",
			"evidenceIds": [
				"stanley-b2dc404stn707-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "2",
			"evidenceIds": [
				"stanley-b2dc404stn707-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1400 tr/min",
			"evidenceIds": [
				"stanley-b2dc404stn707-20260927"
			]
		},
		{
			"label": "Masse brute avec emballage",
			"value": "37,7 kg",
			"evidenceIds": [
				"stanley-b2dc404stn707-20260927"
			]
		},
		{
			"label": "Dimensions de l’emballage (L × P × H)",
			"value": "755x330x665 mm",
			"evidenceIds": [
				"stanley-b2dc404stn707-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "stanley-b2dc404stn707-20260927",
			"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_STANLEY_2020_EN_9990220_LR.pdf#page=9",
			"sourceLabel": "Stanley, catalogue compresseurs 2020, p. 9, réf. B2DC404STN707",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Le tableau Stanley, catalogue compresseurs 2020 indique « Air displacement » : 240 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne."
		}
	],
	"fieldSources": {
		"mpn": [
			"stanley-b2dc404stn707-20260927"
		],
		"tankLiters": [
			"stanley-b2dc404stn707-20260927"
		],
		"maxPressureBar": [
			"stanley-b2dc404stn707-20260927"
		],
		"fadCurve": [
			"stanley-b2dc404stn707-20260927"
		],
		"oilType": [
			"stanley-b2dc404stn707-20260927"
		],
		"intakeFlowLpm": [
			"stanley-b2dc404stn707-20260927"
		],
		"powerKw": [
			"stanley-b2dc404stn707-20260927"
		],
		"voltage": [
			"stanley-b2dc404stn707-20260927"
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
