import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "nuair-b3800b-270-ct4",
	"slug": "nuair-b3800b-270-ct4",
	"brand": "Nuair",
	"model": "B3800B/270 CT4",
	"mpn": "36NC601NUB035",
	"tankLiters": 270,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/nuair-b3800b-270-ct4.webp",
		"alt": "Repères techniques Nuair B3800B/270 CT4, référence 36NC601NUB035",
		"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_Nuair_Professional_2022_9990284_PL.pdf#page=13",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Nuair B3800B/270 CT4, référence 36NC601NUB035 : cuve de 270 L, pression maximale publiée de 10 bar. Aucun débit FAD avec conditions de mesure complètes n’est établi dans les sources retenues ; la compatibilité pneumatique reste indéterminée. Groupe de compression publié : B3800B. Groupe de compression : B3800B. Nombre de cylindres : 2.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons. Puissance moteur publiée : 3 kW.",
			"Débit aspiré : 480 L/min, distinct du débit restitué.",
			"Alimentation publiée : 400 V / 50 Hz.",
			"Groupe de compression : B3800B.",
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
			"value": "Le tableau Nuair Professional, catalogue 2022 indique « Air displacement » : 480 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne.",
			"evidenceIds": [
				"nuair-36nc601nub035-20260927"
			]
		},
		{
			"label": "Équipement",
			"value": "Groupe de compression publié : B3800B.",
			"evidenceIds": [
				"nuair-36nc601nub035-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "B3800B",
			"evidenceIds": [
				"nuair-36nc601nub035-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "2",
			"evidenceIds": [
				"nuair-36nc601nub035-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1400 tr/min",
			"evidenceIds": [
				"nuair-36nc601nub035-20260927"
			]
		},
		{
			"label": "Masse brute avec emballage",
			"value": "142 kg",
			"evidenceIds": [
				"nuair-36nc601nub035-20260927"
			]
		},
		{
			"label": "Dimensions de l’emballage (L × P × H)",
			"value": "1640x560x1190 mm",
			"evidenceIds": [
				"nuair-36nc601nub035-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "nuair-36nc601nub035-20260927",
			"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_Nuair_Professional_2022_9990284_PL.pdf#page=13",
			"sourceLabel": "Nuair Professional, catalogue 2022, p. 13, réf. 36NC601NUB035",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Le tableau Nuair Professional, catalogue 2022 indique « Air displacement » : 480 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne."
		}
	],
	"fieldSources": {
		"mpn": [
			"nuair-36nc601nub035-20260927"
		],
		"tankLiters": [
			"nuair-36nc601nub035-20260927"
		],
		"maxPressureBar": [
			"nuair-36nc601nub035-20260927"
		],
		"fadCurve": [
			"nuair-36nc601nub035-20260927"
		],
		"oilType": [
			"nuair-36nc601nub035-20260927"
		],
		"intakeFlowLpm": [
			"nuair-36nc601nub035-20260927"
		],
		"powerKw": [
			"nuair-36nc601nub035-20260927"
		],
		"voltage": [
			"nuair-36nc601nub035-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 480,
	"powerKw": 3,
	"voltage": "400 V / 50 Hz"
};

export default product;
