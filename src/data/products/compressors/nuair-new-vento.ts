import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "nuair-new-vento",
	"slug": "nuair-new-vento",
	"brand": "Nuair",
	"model": "NEW VENTO",
	"mpn": "C6BB304NUB552_",
	"tankLiters": 6,
	"maxPressureBar": 8,
	"fadCurve": [],
	"oilType": "oil-free",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/nuair-new-vento.webp",
		"alt": "Repères techniques Nuair NEW VENTO, référence C6BB304NUB552_",
		"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_Nuair_Professional_2022_9990284_PL.pdf#page=8",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Nuair NEW VENTO, référence C6BB304NUB552_ : cuve de 6 L, pression maximale publiée de 8 bar. Aucun débit FAD avec conditions de mesure complètes n’est établi dans les sources retenues ; la compatibilité pneumatique reste indéterminée. Groupe de compression publié : OL195. Groupe de compression : OL195. Nombre de cylindres : 1.",
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
			"Données issues du nuair professional, catalogue 2022, encore accessible sur le site du fabricant. La commercialisation actuelle de cette référence n’est pas confirmée.",
			"La masse et les dimensions de ce tableau concernent l’emballage, pas la machine nue."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Le tableau Nuair Professional, catalogue 2022 indique « Air displacement » : 180 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne.",
			"evidenceIds": [
				"nuair-c6bb304nub552-20260927"
			]
		},
		{
			"label": "Équipement",
			"value": "Groupe de compression publié : OL195.",
			"evidenceIds": [
				"nuair-c6bb304nub552-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "OL195",
			"evidenceIds": [
				"nuair-c6bb304nub552-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "1",
			"evidenceIds": [
				"nuair-c6bb304nub552-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "3400 tr/min",
			"evidenceIds": [
				"nuair-c6bb304nub552-20260927"
			]
		},
		{
			"label": "Masse brute avec emballage",
			"value": "10 kg",
			"evidenceIds": [
				"nuair-c6bb304nub552-20260927"
			]
		},
		{
			"label": "Dimensions de l’emballage (L × P × H)",
			"value": "360x320x370 mm",
			"evidenceIds": [
				"nuair-c6bb304nub552-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "nuair-c6bb304nub552-20260927",
			"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_Nuair_Professional_2022_9990284_PL.pdf#page=8",
			"sourceLabel": "Nuair Professional, catalogue 2022, p. 8, réf. C6BB304NUB552_",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Le tableau Nuair Professional, catalogue 2022 indique « Air displacement » : 180 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne."
		}
	],
	"fieldSources": {
		"mpn": [
			"nuair-c6bb304nub552-20260927"
		],
		"tankLiters": [
			"nuair-c6bb304nub552-20260927"
		],
		"maxPressureBar": [
			"nuair-c6bb304nub552-20260927"
		],
		"fadCurve": [
			"nuair-c6bb304nub552-20260927"
		],
		"oilType": [
			"nuair-c6bb304nub552-20260927"
		],
		"intakeFlowLpm": [
			"nuair-c6bb304nub552-20260927"
		],
		"powerKw": [
			"nuair-c6bb304nub552-20260927"
		],
		"voltage": [
			"nuair-c6bb304nub552-20260927"
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
