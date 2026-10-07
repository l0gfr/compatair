import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "stanley-dn-200-8-6",
	"slug": "stanley-dn-200-8-6",
	"brand": "Stanley",
	"model": "DN 200/8/6",
	"mpn": "C6BB304STN039_",
	"tankLiters": 6,
	"maxPressureBar": 8,
	"fadCurve": [],
	"oilType": "oil-free",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/stanley-dn-200-8-6.webp",
		"alt": "Repères techniques Stanley DN 200/8/6, référence C6BB304STN039_",
		"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_STANLEY_2020_EN_9990220_LR.pdf#page=13",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Stanley DN 200/8/6, référence C6BB304STN039_ : cuve de 6 L, pression maximale publiée de 8 bar. Aucun débit FAD avec conditions de mesure complètes n’est établi dans les sources retenues ; la compatibilité pneumatique reste indéterminée. Groupe de compression publié : OL195. Groupe de compression : OL195. Nombre de cylindres : 1.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons. Puissance moteur publiée : 1,1 kW.",
			"Débit aspiré : 180 L/min, distinct du débit restitué.",
			"Alimentation publiée : 230 V / 50 Hz.",
			"Groupe de compression : OL195.",
			"Nombre de cylindres : 1.",
			"Vitesse de rotation : 3400 tr/min."
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
			"value": "Le tableau Stanley, catalogue compresseurs 2020 indique « Air displacement » : 180 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne.",
			"evidenceIds": [
				"stanley-c6bb304stn039-20260927"
			]
		},
		{
			"label": "Équipement",
			"value": "Groupe de compression publié : OL195.",
			"evidenceIds": [
				"stanley-c6bb304stn039-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "OL195",
			"evidenceIds": [
				"stanley-c6bb304stn039-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "1",
			"evidenceIds": [
				"stanley-c6bb304stn039-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "3400 tr/min",
			"evidenceIds": [
				"stanley-c6bb304stn039-20260927"
			]
		},
		{
			"label": "Masse brute avec emballage",
			"value": "10 kg",
			"evidenceIds": [
				"stanley-c6bb304stn039-20260927"
			]
		},
		{
			"label": "Dimensions de l’emballage (L × P × H)",
			"value": "356x315x375 mm",
			"evidenceIds": [
				"stanley-c6bb304stn039-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "stanley-c6bb304stn039-20260927",
			"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_STANLEY_2020_EN_9990220_LR.pdf#page=13",
			"sourceLabel": "Stanley, catalogue compresseurs 2020, p. 13, réf. C6BB304STN039_",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Le tableau Stanley, catalogue compresseurs 2020 indique « Air displacement » : 180 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne."
		}
	],
	"fieldSources": {
		"mpn": [
			"stanley-c6bb304stn039-20260927"
		],
		"tankLiters": [
			"stanley-c6bb304stn039-20260927"
		],
		"maxPressureBar": [
			"stanley-c6bb304stn039-20260927"
		],
		"fadCurve": [
			"stanley-c6bb304stn039-20260927"
		],
		"oilType": [
			"stanley-c6bb304stn039-20260927"
		],
		"intakeFlowLpm": [
			"stanley-c6bb304stn039-20260927"
		],
		"powerKw": [
			"stanley-c6bb304stn039-20260927"
		],
		"voltage": [
			"stanley-c6bb304stn039-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 180,
	"powerKw": 1.1,
	"voltage": "230 V / 50 Hz"
};

export default product;
