import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "stanley-d-211-8-50",
	"slug": "stanley-d-211-8-50",
	"brand": "Stanley",
	"model": "D 211/8/50",
	"mpn": "FCDV404STN006_",
	"tankLiters": 50,
	"maxPressureBar": 8,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/stanley-d-211-8-50.webp",
		"alt": "Repères techniques Stanley D 211/8/50, référence FCDV404STN006_",
		"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_STANLEY_2020_EN_9990220_LR.pdf#page=15",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Stanley D 211/8/50, référence FCDV404STN006_ : cuve de 50 L, pression maximale publiée de 8 bar. Aucun débit FAD avec conditions de mesure complètes n’est établi dans les sources retenues ; la compatibilité pneumatique reste indéterminée. Groupe de compression publié : FC2. Groupe de compression : FC2. Nombre de cylindres : 1.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons. Puissance moteur publiée : 1,5 kW.",
			"Débit aspiré : 222 L/min, distinct du débit restitué.",
			"Alimentation publiée : 230 V / 50 Hz.",
			"Groupe de compression : FC2.",
			"Nombre de cylindres : 1.",
			"Vitesse de rotation : 2850 tr/min."
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
			"value": "Le tableau Stanley, catalogue compresseurs 2020 indique « Air displacement » : 222 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne.",
			"evidenceIds": [
				"stanley-fcdv404stn006-20260927"
			]
		},
		{
			"label": "Équipement",
			"value": "Groupe de compression publié : FC2.",
			"evidenceIds": [
				"stanley-fcdv404stn006-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "FC2",
			"evidenceIds": [
				"stanley-fcdv404stn006-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "1",
			"evidenceIds": [
				"stanley-fcdv404stn006-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "2850 tr/min",
			"evidenceIds": [
				"stanley-fcdv404stn006-20260927"
			]
		},
		{
			"label": "Masse brute avec emballage",
			"value": "33,3 kg",
			"evidenceIds": [
				"stanley-fcdv404stn006-20260927"
			]
		},
		{
			"label": "Dimensions de l’emballage (L × P × H)",
			"value": "770x310x650 mm",
			"evidenceIds": [
				"stanley-fcdv404stn006-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "stanley-fcdv404stn006-20260927",
			"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_STANLEY_2020_EN_9990220_LR.pdf#page=15",
			"sourceLabel": "Stanley, catalogue compresseurs 2020, p. 15, réf. FCDV404STN006_",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Le tableau Stanley, catalogue compresseurs 2020 indique « Air displacement » : 222 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne."
		}
	],
	"fieldSources": {
		"mpn": [
			"stanley-fcdv404stn006-20260927"
		],
		"tankLiters": [
			"stanley-fcdv404stn006-20260927"
		],
		"maxPressureBar": [
			"stanley-fcdv404stn006-20260927"
		],
		"fadCurve": [
			"stanley-fcdv404stn006-20260927"
		],
		"oilType": [
			"stanley-fcdv404stn006-20260927"
		],
		"intakeFlowLpm": [
			"stanley-fcdv404stn006-20260927"
		],
		"powerKw": [
			"stanley-fcdv404stn006-20260927"
		],
		"voltage": [
			"stanley-fcdv404stn006-20260927"
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
