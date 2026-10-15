import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "gentilin-ac400-20",
	"slug": "gentilin-ac400-20",
	"brand": "Gentilin",
	"model": "AC400/20",
	"mpn": "816705001",
	"tankLiters": 20,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 5,
			"litersPerMinute": 185
		},
		{
			"pressureBar": 8,
			"litersPerMinute": 130
		}
	],
	"oilType": "oil-free",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/gentilin-ac400-20.webp",
		"alt": "Repères techniques Gentilin AC400/20, référence 816705001",
		"sourceUrl": "https://www.gentilinair.com/en/products/ac400-20",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Le Gentilin AC400/20 publie 130 L/min restitués à 8 bar avec une cuve de 20 L. Le choix doit distinguer ce débit des 250 L/min aspirés et tenir compte d’un conflit de régime de service entre la fiche produit et la notice liée, qui impose une confirmation fabricant avant usage prolongé.",
		"verifiedFacts": [
			"Débit restitué publié : 185 L/min à 5 bar ; 130 L/min à 8 bar.",
			"Compresseur à pistons sans huile. Puissance moteur publiée : 1,5 kW.",
			"Débit aspiré : 250 L/min, distinct du débit restitué.",
			"Masse publiée : 15 kg.",
			"Alimentation publiée : 230 V, 50 Hz.",
			"Au même point de 8 bar, la fiche AC400/20 publie 130 L/min, contre 60 L/min pour l’AC200/05 : écart calculé de 70 L/min. Les cuves font respectivement 20 et 5 L ; la réserve quadruplée ne multiplie pas le débit permanent par quatre.",
			"L’AC400/20 affiche 1,5 kW, contre 0,9 kW pour l’AC200/05. Les deux fiches donnent un débit à 5 bar distinct : 185 et 115 L/min. Un résultat interpolé à 6,3 bar serait un calcul entre ces points, pas une mesure publiée."
		],
		"limitations": [
			"Les points proviennent de la fiche fabricant, pas d’un essai physique réalisé par CompatAir.",
			"La disponibilité commerciale et les exigences électriques de l’installation sont à confirmer avant achat.",
			"La fiche AC400/20 indique S3 70 %, tandis que le tableau de la notice EVO 41024001 d’avril 2026, page 6, indique un cycle de travail de 100 %. La donnée calculable de taux de marche est retirée : confirmer la génération et son régime auprès de Gentilin avant un besoin continu.",
			"La notice affiche aussi un FAD de 205 L/min sans pression de mesure dans ce tableau. Cette valeur ne remplace pas les points Air Delivery de la fiche, 185 L/min à 5 bar et 130 L/min à 8 bar. Une conclusion de compatibilité continue reste insuffisamment documentée."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Débits restitués publiés séparément à 5.0 bar, 8.0 bar. Le débit aspiré est conservé dans un champ distinct.",
			"evidenceIds": [
				"gentilin-816705001-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "44x25x52 cm",
			"evidenceIds": [
				"gentilin-816705001-20260926"
			]
		},
		{
			"label": "Régime de service déclaré",
			"value": "Conflit documentaire : fiche S3 70 % ; notice EVO 04/2026, p. 6 : 100 %. Régime de la version exacte à confirmer ; aucune valeur retenue pour le calcul.",
			"evidenceIds": [
				"gentilin-816705001-20260926",
				"gentilin-ac400-20-manual-review-20261015"
			]
		},
		{
			"label": "Revêtement de la cuve",
			"value": "Alluminio",
			"evidenceIds": [
				"gentilin-816705001-20260926"
			]
		},
		{
			"label": "Cylindres",
			"value": "4",
			"evidenceIds": [
				"gentilin-816705001-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1.705,00 tr/min",
			"evidenceIds": [
				"gentilin-816705001-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "gentilin-816705001-20260926",
			"sourceUrl": "https://www.gentilinair.com/en/products/ac400-20",
			"sourceLabel": "Gentilin, fiche technique AC400/20, réf. 816705001",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débits restitués publiés séparément à 5.0 bar, 8.0 bar. Le débit aspiré est conservé dans un champ distinct."
		},
		{
			"id": "gentilin-816705001-20260926-oiltype-1",
			"sourceUrl": "https://www.gentilinair.com/docs/41024001-compressed_1775720906.pdf#page=6",
			"sourceLabel": "Gentilin, notice de la famille DC100/05, p. 6",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La notice liée à cette fiche déclare la compression sans huile : Tipologia Oil-free (utilizzo intensivo)"
		},
		{
			"id": "gentilin-ac400-20-manual-review-20261015",
			"sourceUrl": "https://www.gentilinair.com/docs/41024001-compressed_1775720906.pdf#page=6",
			"sourceLabel": "Gentilin, notice EVO 41024001, 04/2026, tableau AC400/20 p. 6",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-15",
			"confidence": "A",
			"notes": "AC400/20 : huile absente, 20 L, 15 kg, 185 L/min à 5 bar ; 100 % de cycle de travail, en conflit avec la fiche S3 70 %. FAD 205 L/min non associé à une pression dans ce tableau, non substitué à la courbe."
		},
		{
			"id": "gentilin-ac400-20-comparison-review-20261015",
			"sourceUrl": "https://www.gentilinair.com/en/products/ac200-05",
			"sourceLabel": "Gentilin, fiche AC200/05 comparée au même point de pression",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-15",
			"confidence": "A",
			"notes": "Voisin : Air Delivery 115 L/min à 5 bar et 60 L/min à 8 bar, cuve 5 L, 0,9 kW. Comparaison de données déclarées, pas essai de rendement."
		}
	],
	"fieldSources": {
		"mpn": [
			"gentilin-816705001-20260926"
		],
		"tankLiters": [
			"gentilin-816705001-20260926"
		],
		"maxPressureBar": [
			"gentilin-816705001-20260926"
		],
		"fadCurve": [
			"gentilin-816705001-20260926"
		],
		"oilType": [
			"gentilin-816705001-20260926-oiltype-1"
		],
		"intakeFlowLpm": [
			"gentilin-816705001-20260926"
		],
		"powerKw": [
			"gentilin-816705001-20260926"
		],
		"weightKg": [
			"gentilin-816705001-20260926"
		],
		"voltage": [
			"gentilin-816705001-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 250,
	"powerKw": 1.5,
	"weightKg": 15,
	"voltage": "230 V, 50 Hz"
};

export default product;
