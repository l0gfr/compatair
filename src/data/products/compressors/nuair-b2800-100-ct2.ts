import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "nuair-b2800-100-ct2",
	"slug": "nuair-b2800-100-ct2",
	"brand": "Nuair",
	"model": "B2800/100 CT2",
	"mpn": "28FC441NUB013",
	"tankLiters": 100,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/nuair-b2800-100-ct2.webp",
		"alt": "Repères techniques Nuair B2800/100 CT2, référence 28FC441NUB013",
		"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_Nuair_Professional_2022_9990284_PL.pdf#page=12",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "B2800/100 CT2, code 28FC441NUB013 : 100 L, 1,5 kW et alimentation 400 V à 50 Hz. Le B2800/100 CM2 voisin fonctionne en 230 V ; les deux lignes donnent le groupe B2800, 1 250 tr/min et 255 L/min aspirés.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons. Puissance moteur publiée : 1,5 kW.",
			"Débit aspiré : 255 L/min, distinct du débit restitué.",
			"Alimentation publiée : 400 V / 50 Hz.",
			"Groupe de compression : B2800.",
			"Nombre de cylindres : 2.",
			"Vitesse de rotation : 1250 tr/min."
		],
		"limitations": [
			"La différence documentée entre CT2 et CM2 porte notamment sur l’alimentation ; vérifier le raccordement et la variante commandée.",
			"Le catalogue 2022 fournit l’aspiration, sans FAD sous pression ni taux de marche exploitable.",
			"Les 62 kg et 1 030 × 440 × 850 mm concernent l’emballage, en largeur × profondeur × hauteur. L’implantation de la machine nue et sa disponibilité restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Le tableau Nuair Professional, catalogue 2022 indique « Air displacement » : 255 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne.",
			"evidenceIds": [
				"nuair-28fc441nub013-20260927"
			]
		},
		{
			"label": "Équipement",
			"value": "Groupe de compression publié : B2800.",
			"evidenceIds": [
				"nuair-28fc441nub013-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "B2800",
			"evidenceIds": [
				"nuair-28fc441nub013-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "2",
			"evidenceIds": [
				"nuair-28fc441nub013-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1250 tr/min",
			"evidenceIds": [
				"nuair-28fc441nub013-20260927"
			]
		},
		{
			"label": "Masse brute avec emballage",
			"value": "62 kg",
			"evidenceIds": [
				"nuair-28fc441nub013-20260927"
			]
		},
		{
			"label": "Dimensions de l’emballage (largeur × profondeur × hauteur)",
			"value": "1030x440x850 mm",
			"evidenceIds": [
				"nuair-28fc441nub013-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "nuair-28fc441nub013-20260927",
			"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_Nuair_Professional_2022_9990284_PL.pdf#page=12",
			"sourceLabel": "Nuair Professional, catalogue 2022, p. 12, réf. 28FC441NUB013",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Le tableau Nuair Professional, catalogue 2022 indique « Air displacement » : 255 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne."
		}
	],
	"fieldSources": {
		"mpn": [
			"nuair-28fc441nub013-20260927"
		],
		"tankLiters": [
			"nuair-28fc441nub013-20260927"
		],
		"maxPressureBar": [
			"nuair-28fc441nub013-20260927"
		],
		"fadCurve": [
			"nuair-28fc441nub013-20260927"
		],
		"oilType": [
			"nuair-28fc441nub013-20260927"
		],
		"intakeFlowLpm": [
			"nuair-28fc441nub013-20260927"
		],
		"powerKw": [
			"nuair-28fc441nub013-20260927"
		],
		"voltage": [
			"nuair-28fc441nub013-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 255,
	"powerKw": 1.5,
	"voltage": "400 V / 50 Hz"
};

export default product;
