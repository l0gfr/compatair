import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "gentilin-clinic-8-90",
	"slug": "gentilin-clinic-8-90",
	"brand": "Gentilin",
	"model": "CLINIC 8/90",
	"mpn": "817013001",
	"tankLiters": 90,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 5,
			"litersPerMinute": 400
		},
		{
			"pressureBar": 8,
			"litersPerMinute": 370
		}
	],
	"oilType": "oil-free",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/gentilin-clinic-8-90.webp",
		"alt": "Repères techniques Gentilin CLINIC 8/90, référence 817013001",
		"sourceUrl": "https://www.gentilinair.com/en/products/clinic-8-90",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "CLINIC 8/90, référence 817013001 en 400 V, 50 Hz : 370 L/min publiés à 8 bar, contre 285 L/min pour le CLINIC 6/90 triphasé 812313013. Le 8/90 ajoute ainsi 85 L/min au point publié avec 4 kW au lieu de 3 kW ; les deux fiches conservent une cuve de 90 L et une masse de 78 kg. L’addendum propre au 8/90 complète la notice de la gamme 6/90.",
		"verifiedFacts": [
			"Débit restitué publié : 400 L/min à 5 bar ; 370 L/min à 8 bar.",
			"Compresseur à pistons sans huile. Puissance moteur publiée : 4 kW.",
			"Débit aspiré : 660 L/min, distinct du débit restitué.",
			"Masse publiée : 78 kg.",
			"Alimentation publiée : 400 V, 50 Hz.",
			"À 5 bar, la fiche 8/90 et son addendum concordent sur 400 L/min ; la version 6/90 triphasée publie 345 L/min. Le débit aspiré de 660 L/min du 8/90 reste séparé.",
			"L’addendum du 28 octobre 2025, tableau page 6, attribue 400 L/min à 5 bar au CLINIC 8/90 et 360 L/min aux versions DRY H et HS. Ces versions avec sécheur ne sont pas fusionnées.",
			"La table du groupe complet indique Duty Class S1 100%, cuve de 90 L, 4 kW et 400 V, 50 Hz. La pression maximale de 10 bar ne devient pas un point de débit.",
			"La fiche 8/90 indique Tank Automatic Drain kit Optional, alors que la fiche 6/90 triphasée l’indique Incluso ; le contenu du devis doit suivre la référence."
		],
		"limitations": [
			"Les points proviennent de la fiche fabricant, pas d’un essai physique réalisé par CompatAir.",
			"Le taux de marche est celui déclaré par le fabricant ; les conditions de cycle et de température restent à respecter. La disponibilité commerciale reste à confirmer.",
			"Les cotes extérieures demandent un plan confirmé : la fiche donne 98,5 × 49,7 × 72,2 cm en L × l × H, l’addendum 725 × 985 × 500 mm en A × B × C avec son dessin. Les deux ordres de présentation sont conservés.",
			"Les indications acoustiques diffèrent : 74 dB(A) sur la fiche et 76 dans l’addendum, dont le libellé associe Sound Pressure Level et LwA. Aucun classement de silence n’est déduit.",
			"L’addendum est provisoire et complète le manuel 41012801 ; ses propres avertissements et conditions d’installation restent à respecter."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Débits restitués publiés séparément à 5.0 bar, 8.0 bar. Le débit aspiré est conservé dans un champ distinct.",
			"evidenceIds": [
				"gentilin-817013001-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "98,5x49,7x72,2 cm",
			"evidenceIds": [
				"gentilin-817013001-20260926"
			]
		},
		{
			"label": "Régime de service déclaré",
			"value": "S1 100%",
			"evidenceIds": [
				"gentilin-817013001-20260926"
			]
		},
		{
			"label": "Revêtement de la cuve",
			"value": "Acciaio Inox AISI 304",
			"evidenceIds": [
				"gentilin-817013001-20260926"
			]
		},
		{
			"label": "Cylindres",
			"value": "4",
			"evidenceIds": [
				"gentilin-817013001-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1.400,00 tr/min",
			"evidenceIds": [
				"gentilin-817013001-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "gentilin-817013001-20260926",
			"sourceUrl": "https://www.gentilinair.com/en/products/clinic-8-90",
			"sourceLabel": "Gentilin, fiche technique CLINIC 8/90, réf. 817013001",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débits restitués publiés séparément à 5.0 bar, 8.0 bar. Le débit aspiré est conservé dans un champ distinct."
		},
		{
			"id": "gentilin-817013001-20260926-oiltype-1",
			"sourceUrl": "https://www.gentilinair.com/en/categories/process-air",
			"sourceLabel": "Gentilin, gamme Process Air sans huile",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le fabricant décrit explicitement ses compresseurs Process Air comme sans huile ; cette référence est listée dans la sous-gamme correspondante."
		},
		{
			"id": "review-20261031-gentilin-clinic-8-90-1",
			"sourceUrl": "https://www.gentilinair.com/en/products/clinic-8-90",
			"sourceLabel": "Relecture du modèle et de son voisin, 31 octobre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "Réponse primaire complète reçue le 31 octobre 2026 ; passages déterminants relus. SHA-256 69708e5dc92fe43b9a01a41ef653f565a089fe33741f095725e51bde5126660f. Comparaison documentaire, sans essai physique CompatAir."
		},
		{
			"id": "review-20261031-gentilin-clinic-8-90-2",
			"sourceUrl": "https://www.gentilinair.com/en/products/clinic-6-90-tri",
			"sourceLabel": "Relecture du modèle et de son voisin, 31 octobre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "Réponse primaire complète reçue le 31 octobre 2026 ; passages déterminants relus. SHA-256 91a66f65eae7c1ae12935c85e0e68f518aa8655033939cc1b63cef474fa5f902. Comparaison documentaire, sans essai physique CompatAir."
		},
		{
			"id": "review-20261031-gentilin-clinic-8-90-3",
			"sourceUrl": "https://www.gentilinair.com/docs/documento-provvisorio-clinic-8-90_1778060807.pdf#page=5",
			"sourceLabel": "Relecture du modèle et de son voisin, 31 octobre 2026, pages PDF 5, 6, 8",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "Réponse primaire complète reçue le 31 octobre 2026 ; passages déterminants relus. SHA-256 20f23d37209d3788b2ade87906b9cf531620f3e06b8611c0f6a87289d20a8a4c. Comparaison documentaire, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"gentilin-817013001-20260926"
		],
		"tankLiters": [
			"gentilin-817013001-20260926"
		],
		"maxPressureBar": [
			"gentilin-817013001-20260926"
		],
		"fadCurve": [
			"gentilin-817013001-20260926"
		],
		"oilType": [
			"gentilin-817013001-20260926-oiltype-1"
		],
		"intakeFlowLpm": [
			"gentilin-817013001-20260926"
		],
		"powerKw": [
			"gentilin-817013001-20260926"
		],
		"weightKg": [
			"gentilin-817013001-20260926"
		],
		"voltage": [
			"gentilin-817013001-20260926"
		],
		"dutyCycle": [
			"gentilin-817013001-20260926"
		],
		"editorial": [
			"review-20261031-gentilin-clinic-8-90-1",
			"review-20261031-gentilin-clinic-8-90-2",
			"review-20261031-gentilin-clinic-8-90-3"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 660,
	"powerKw": 4,
	"weightKg": 78,
	"voltage": "400 V, 50 Hz",
	"dutyCycle": 1
};

export default product;
