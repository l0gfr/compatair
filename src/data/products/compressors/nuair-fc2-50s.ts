import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "nuair-fc2-50s",
	"slug": "nuair-fc2-50s",
	"brand": "Nuair",
	"model": "FC2/50S",
	"mpn": "FCDV404NUB551_",
	"tankLiters": 50,
	"maxPressureBar": 8,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/nuair-fc2-50s.webp",
		"alt": "Repères techniques Nuair FC2/50S, référence FCDV404NUB551_",
		"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_Nuair_Professional_2022_9990284_PL.pdf#page=10",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Nuair FC2/50S, référence FCDV404NUB551_ : cuve de 50 L, pression maximale publiée de 8 bar. Aucun débit FAD avec conditions de mesure complètes n’est établi dans les sources retenues ; la compatibilité pneumatique reste indéterminée. Groupe de compression publié : FC2. Groupe de compression : FC2. Nombre de cylindres : 1.",
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
			"Données issues du nuair professional, catalogue 2022, encore accessible sur le site du fabricant. La commercialisation actuelle de cette référence n’est pas confirmée.",
			"La masse et les dimensions de ce tableau concernent l’emballage, pas la machine nue."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Le tableau Nuair Professional, catalogue 2022 indique « Air displacement » : 222 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne.",
			"evidenceIds": [
				"nuair-fcdv404nub551-20260927"
			]
		},
		{
			"label": "Équipement",
			"value": "Groupe de compression publié : FC2.",
			"evidenceIds": [
				"nuair-fcdv404nub551-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "FC2",
			"evidenceIds": [
				"nuair-fcdv404nub551-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "1",
			"evidenceIds": [
				"nuair-fcdv404nub551-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "2850 tr/min",
			"evidenceIds": [
				"nuair-fcdv404nub551-20260927"
			]
		},
		{
			"label": "Masse brute avec emballage",
			"value": "34 kg",
			"evidenceIds": [
				"nuair-fcdv404nub551-20260927"
			]
		},
		{
			"label": "Dimensions de l’emballage (L × P × H)",
			"value": "770x330x660 mm",
			"evidenceIds": [
				"nuair-fcdv404nub551-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "nuair-fcdv404nub551-20260927",
			"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_Nuair_Professional_2022_9990284_PL.pdf#page=10",
			"sourceLabel": "Nuair Professional, catalogue 2022, p. 10, réf. FCDV404NUB551_",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Le tableau Nuair Professional, catalogue 2022 indique « Air displacement » : 222 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne."
		}
	],
	"fieldSources": {
		"mpn": [
			"nuair-fcdv404nub551-20260927"
		],
		"tankLiters": [
			"nuair-fcdv404nub551-20260927"
		],
		"maxPressureBar": [
			"nuair-fcdv404nub551-20260927"
		],
		"fadCurve": [
			"nuair-fcdv404nub551-20260927"
		],
		"oilType": [
			"nuair-fcdv404nub551-20260927"
		],
		"intakeFlowLpm": [
			"nuair-fcdv404nub551-20260927"
		],
		"powerKw": [
			"nuair-fcdv404nub551-20260927"
		],
		"voltage": [
			"nuair-fcdv404nub551-20260927"
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
