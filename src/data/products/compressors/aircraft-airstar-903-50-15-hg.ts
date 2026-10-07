import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "aircraft-airstar-903-50-15-hg",
	"slug": "aircraft-airstar-903-50-15-hg",
	"brand": "Aircraft",
	"model": "AIRSTAR 903/50/15 HG",
	"mpn": "2028725",
	"tankLiters": 50,
	"maxPressureBar": 15,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/aircraft-airstar-903-50-15-hg.webp",
		"alt": "Repères techniques Aircraft AIRSTAR 903/50/15 HG, référence 2028725",
		"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-piston-compressors/airstar-9035015-hg-2028725/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Aircraft AIRSTAR 903/50/15 HG, référence 2028725 : cuve de 50 L, pression maximale publiée de 15 bar. Aucun débit FAD avec conditions de mesure complètes n’est établi dans les sources retenues ; la compatibilité pneumatique reste indéterminée. Capacité de remplissage approximative : 740 l/min. Nombre de cylindres : 2.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons. Puissance moteur publiée : 8,7 kW.",
			"Débit aspiré : 900 L/min, distinct du débit restitué.",
			"Capacité de remplissage approximative : 740 l/min.",
			"Nombre de cylindres : 2.",
			"Nombre d’étages : 2."
		],
		"limitations": [
			"Une valeur de débit sans pression de mesure associée ne permet pas de construire une courbe FAD. Aucun point n’est estimé.",
			"Le taux de marche continu n’est pas établi dans cette fiche. La disponibilité commerciale reste à confirmer.",
			"La capacité de remplissage et sa pression éventuelle ne sont pas assimilées à un débit FAD certifié. Demander les conditions d’essai et le débit utile à la pression de l’outil."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Débit aspiré déclaré : 900 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée.",
			"evidenceIds": [
				"aircraft-2028725-20260927"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "1250 mm × 600 mm × 1150 mm (L × l × H, approximatives)",
			"evidenceIds": [
				"aircraft-2028725-20260927"
			]
		},
		{
			"label": "Capacité de remplissage approximative",
			"value": "740 l/min",
			"evidenceIds": [
				"aircraft-2028725-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "2",
			"evidenceIds": [
				"aircraft-2028725-20260927"
			]
		},
		{
			"label": "Nombre d’étages",
			"value": "2",
			"evidenceIds": [
				"aircraft-2028725-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "HOS",
			"evidenceIds": [
				"aircraft-2028725-20260927"
			]
		},
		{
			"label": "Masse approximative publiée",
			"value": "186 kg",
			"evidenceIds": [
				"aircraft-2028725-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2028725-20260927",
			"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-piston-compressors/airstar-9035015-hg-2028725/",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2028725, réf. 2028725",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Débit aspiré déclaré : 900 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2028725-20260927"
		],
		"tankLiters": [
			"aircraft-2028725-20260927"
		],
		"maxPressureBar": [
			"aircraft-2028725-20260927"
		],
		"fadCurve": [
			"aircraft-2028725-20260927"
		],
		"oilType": [
			"aircraft-2028725-20260927"
		],
		"intakeFlowLpm": [
			"aircraft-2028725-20260927"
		],
		"powerKw": [
			"aircraft-2028725-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 900,
	"powerKw": 8.7
};

export default product;
