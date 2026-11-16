import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "m7-ne-321",
	"slug": "m7-ne-321",
	"brand": "M7",
	"model": "NE-321",
	"mpn": "NE-321",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "M7 NE-321",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/m7-ne-321-technical-20261116-reviews.svg",
		"alt": "Repères techniques M7 NE-321, référence NE-321",
		"sourceUrl": "https://www.mighty-seven.com/product/123",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"editorial": {
		"overview": "La NE-321 est un cliquet 3/8 pouce de 265 mm, à 160 tr/min. La fiche sépare la plage de travail 13,5–47 Nm du maximum de 68 Nm ; la gamme comprend aussi des modèles courts, pour lesquels l’accès et le bras de levier changent. Les 113,28 L/min sont explicitement moyens. Le moteur garde un résultat non conclusif plutôt que de les traiter comme une consommation continue.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 113,28 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : NE-321.",
			"Carré d’entraînement : 3/8\".",
			"Plage de couple publiée : 10-35 (FT-LB) / 13.5-47 (Nm).",
			"Couple maximal publié : 50 (FT-LB) / 68 (Nm)."
		],
		"limitations": [
			"Le besoin réel dépend de la charge, du cycle et des pertes de pression dans le flexible. Aucune mesure physique CompatAir.",
			"Une consommation moyenne ne constitue pas un débit maximal en usage continu. Vérifier le régime réel auprès du fabricant avant dimensionnement.",
			"Les valeurs acoustiques et vibratoires sont celles de cette fiche ; leurs protocoles et incertitudes ne sont pas détaillés ici."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"evidenceIds": [
				"m7-ne-321-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 113,28 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"m7-ne-321-20260927"
			]
		},
		{
			"label": "Carré d’entraînement",
			"value": "3/8\"",
			"evidenceIds": [
				"m7-ne-321-20260927"
			]
		},
		{
			"label": "Plage de couple publiée",
			"value": "10-35 (FT-LB) / 13.5-47 (Nm)",
			"evidenceIds": [
				"m7-ne-321-20260927"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "50 (FT-LB) / 68 (Nm)",
			"evidenceIds": [
				"m7-ne-321-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "160 (R.P.M)",
			"evidenceIds": [
				"m7-ne-321-20260927"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "10-3/8\" / 265 (mm)",
			"evidenceIds": [
				"m7-ne-321-20260927"
			]
		},
		{
			"label": "Flexible recommandé",
			"value": "3/8\"",
			"evidenceIds": [
				"m7-ne-321-20260927"
			]
		},
		{
			"label": "Raccord d’air",
			"value": "1/4\"",
			"evidenceIds": [
				"m7-ne-321-20260927"
			]
		},
		{
			"label": "Masse nette publiée",
			"value": "1.04 kg",
			"evidenceIds": [
				"m7-ne-321-20260927"
			]
		},
		{
			"label": "Pression acoustique publiée (protocole non précisé)",
			"value": "91.0 (dBA)",
			"evidenceIds": [
				"m7-ne-321-20260927"
			]
		},
		{
			"label": "Vibrations publiées (incertitude non précisée)",
			"value": "3.9 (m/s²)",
			"evidenceIds": [
				"m7-ne-321-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "m7-ne-321-20260927",
			"sourceUrl": "https://www.mighty-seven.com/product/123",
			"sourceLabel": "M7, fiche technique constructeur NE-321, réf. NE-321",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 113,28 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		},
		{
			"id": "review:2026-11-16-reviews:m7-ne-321:0",
			"sourceUrl": "https://www.mighty-seven.com/product/123",
			"sourceLabel": "M7, document constructeur relu le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La NE-321 est un cliquet 3/8 pouce de 265 mm, à 160 tr/min. La fiche sépare la plage de travail 13,5–47 Nm du maximum de 68 Nm ; la gamme comprend aussi des modèles courts, pour lesquels l’accès et le bras de levier changent. Les 113,28 L/min sont explicitement moyens. Le moteur garde un résultat non conclusif plutôt que de les traiter comme une consommation continue. GET complet SHA-256 1298bdac30885832dbbf485ad3759e7393c59c96d50f1266d3f5684f43b3e8d5. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
		}
	],
	"fieldSources": {
		"mpn": [
			"m7-ne-321-20260927"
		],
		"workingPressureBar": [
			"m7-ne-321-20260927"
		],
		"airflowLpm": [
			"m7-ne-321-20260927"
		],
		"airflowBasis": [
			"m7-ne-321-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 113.28,
		"typical": 113.28,
		"max": 113.28
	},
	"airflowBasis": "average"
};

export default product;
