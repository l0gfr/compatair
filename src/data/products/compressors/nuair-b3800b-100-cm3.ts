import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "nuair-b3800b-100-cm3",
	"slug": "nuair-b3800b-100-cm3",
	"brand": "Nuair",
	"model": "B3800B/100 CM3",
	"mpn": "36FA504NUB007",
	"tankLiters": 100,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/nuair-b3800b-100-cm3.webp",
		"alt": "Repères techniques Nuair B3800B/100 CM3, référence 36FA504NUB007",
		"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_Nuair_Professional_2022_9990284_PL.pdf#page=13",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Nuair B3800B/100 CM3, référence 36FA504NUB007 : cuve de 100 L, pression maximale publiée de 10 bar. Aucun débit FAD avec conditions de mesure complètes n’est établi dans les sources retenues ; la compatibilité pneumatique reste indéterminée. Groupe de compression publié : B3800B. Groupe de compression : B3800B. Nombre de cylindres : 2.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons. Puissance moteur publiée : 2,2 kW.",
			"Débit aspiré : 390 L/min, distinct du débit restitué.",
			"Alimentation publiée : 230 V / 50 Hz.",
			"Groupe de compression : B3800B.",
			"Nombre de cylindres : 2.",
			"Vitesse de rotation : 1100 tr/min."
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
			"value": "Le tableau Nuair Professional, catalogue 2022 indique « Air displacement » : 390 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne.",
			"evidenceIds": [
				"nuair-36fa504nub007-20260927"
			]
		},
		{
			"label": "Équipement",
			"value": "Groupe de compression publié : B3800B.",
			"evidenceIds": [
				"nuair-36fa504nub007-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "B3800B",
			"evidenceIds": [
				"nuair-36fa504nub007-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "2",
			"evidenceIds": [
				"nuair-36fa504nub007-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1100 tr/min",
			"evidenceIds": [
				"nuair-36fa504nub007-20260927"
			]
		},
		{
			"label": "Masse brute avec emballage",
			"value": "73 kg",
			"evidenceIds": [
				"nuair-36fa504nub007-20260927"
			]
		},
		{
			"label": "Dimensions de l’emballage (L × P × H)",
			"value": "1030x440x920 mm",
			"evidenceIds": [
				"nuair-36fa504nub007-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "nuair-36fa504nub007-20260927",
			"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_Nuair_Professional_2022_9990284_PL.pdf#page=13",
			"sourceLabel": "Nuair Professional, catalogue 2022, p. 13, réf. 36FA504NUB007",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Le tableau Nuair Professional, catalogue 2022 indique « Air displacement » : 390 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne."
		}
	],
	"fieldSources": {
		"mpn": [
			"nuair-36fa504nub007-20260927"
		],
		"tankLiters": [
			"nuair-36fa504nub007-20260927"
		],
		"maxPressureBar": [
			"nuair-36fa504nub007-20260927"
		],
		"fadCurve": [
			"nuair-36fa504nub007-20260927"
		],
		"oilType": [
			"nuair-36fa504nub007-20260927"
		],
		"intakeFlowLpm": [
			"nuair-36fa504nub007-20260927"
		],
		"powerKw": [
			"nuair-36fa504nub007-20260927"
		],
		"voltage": [
			"nuair-36fa504nub007-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 390,
	"powerKw": 2.2,
	"voltage": "230 V / 50 Hz"
};

export default product;
