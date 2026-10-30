import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "gentilin-clinic-6-90-812313013",
	"slug": "gentilin-clinic-6-90-812313013",
	"brand": "Gentilin",
	"model": "CLINIC 6/90",
	"mpn": "812313013",
	"tankLiters": 90,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 5,
			"litersPerMinute": 345
		},
		{
			"pressureBar": 8,
			"litersPerMinute": 285
		}
	],
	"oilType": "oil-free",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/gentilin-clinic-6-90-812313013.webp",
		"alt": "Repères techniques Gentilin CLINIC 6/90, référence 812313013",
		"sourceUrl": "https://www.gentilinair.com/en/products/clinic-6-90-tri",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "CLINIC 6/90 en 400 V, 50 Hz, référence 812313013 : 285 L/min restitués à 8 bar, contre 190 L/min pour le 230 V 812313012. Les deux versions ont une cuve de 90 L et une masse publiée de 78 kg. Pour choisir entre elles, vérifiez l’alimentation disponible et le débit requis à la pression de l’outil ; le nom et le volume de cuve sont identiques.",
		"verifiedFacts": [
			"Débit restitué publié : 345 L/min à 5 bar ; 285 L/min à 8 bar.",
			"Compresseur à pistons sans huile. Puissance moteur publiée : 3 kW.",
			"Débit aspiré : 480 L/min, distinct du débit restitué.",
			"Masse publiée : 78 kg.",
			"Alimentation publiée : 400 V, 50 Hz.",
			"Comparaison au même point de 8 bar : 285 L/min en 400 V contre 190 L/min en 230 V, soit 95 L/min supplémentaires et 50 % de plus dans les deux fiches fabricant.",
			"Au point de 5 bar, les fiches publient respectivement 345 et 265 L/min. Les puissances sont de 3 et 2,8 kW ; chaque valeur reste rattachée à sa version électrique.",
			"La fiche technique du produit complet 812313013 indique Duty cycle S1 100% ; cette indication ne provient pas d’une seule plaque moteur."
		],
		"limitations": [
			"Les points proviennent de la fiche fabricant, pas d’un essai physique réalisé par CompatAir.",
			"Le taux de marche est celui déclaré par le fabricant ; les conditions de cycle et de température restent à respecter. La disponibilité commerciale reste à confirmer.",
			"La disponibilité commerciale et les exigences électriques de l’installation sont à confirmer avant achat.",
			"La pression maximale de 10 bar ne documente pas un débit restitué à 10 bar. Le bilan à la pression de l’outil doit conserver les points disponibles et les conditions du groupe.",
			"La comparaison documentaire des versions électriques ne constitue pas une mesure de performance ni une validation de la pureté de l’air pour une application médicale."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Débits restitués publiés séparément à 5.0 bar, 8.0 bar. Le débit aspiré est conservé dans un champ distinct.",
			"evidenceIds": [
				"gentilin-812313013-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "98,5x49,7x72,2 cm",
			"evidenceIds": [
				"gentilin-812313013-20260926"
			]
		},
		{
			"label": "Régime de service déclaré",
			"value": "S1 100%",
			"evidenceIds": [
				"gentilin-812313013-20260926"
			]
		},
		{
			"label": "Revêtement de la cuve",
			"value": "Acciaio Inox AISI 304",
			"evidenceIds": [
				"gentilin-812313013-20260926"
			]
		},
		{
			"label": "Cylindres",
			"value": "4",
			"evidenceIds": [
				"gentilin-812313013-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1.400,00 tr/min",
			"evidenceIds": [
				"gentilin-812313013-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "gentilin-812313013-20260926",
			"sourceUrl": "https://www.gentilinair.com/en/products/clinic-6-90-tri",
			"sourceLabel": "Gentilin, fiche technique CLINIC 6/90, réf. 812313013",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débits restitués publiés séparément à 5.0 bar, 8.0 bar. Le débit aspiré est conservé dans un champ distinct."
		},
		{
			"id": "gentilin-812313013-20260926-oiltype-1",
			"sourceUrl": "https://www.gentilinair.com/docs/41012802_1778061305.pdf#page=15",
			"sourceLabel": "Gentilin, notice de la famille CLINIC DRY 6/90 HS, p. 15",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La notice liée à cette fiche déclare la compression sans huile : CLINIC 6.90 • Oil-free air compressor with 90 litres tank without dryer. / CLINIC DRY 6.90 H • Oil free air compressor with 90 litres tank with membrane dryer. / • Oil-free air compressor with 90 litres tank with membrane dryer"
		},
		{
			"id": "review-20261030-gentilin-clinic-6-90-812313013-1",
			"sourceUrl": "https://www.gentilinair.com/en/products/clinic-6-90-tri",
			"sourceLabel": "Relecture du modèle et de son voisin, 30 octobre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-30",
			"confidence": "B",
			"notes": "Réponse primaire complète relue le 30 octobre 2026 ; SHA-256 982479a5e4e81f489da8271f76d5d5a024bd53c94717fd804c21bf36d25726a4. Comparaison documentaire, sans essai physique CompatAir."
		},
		{
			"id": "review-20261030-gentilin-clinic-6-90-812313013-2",
			"sourceUrl": "https://www.gentilinair.com/en/products/clinic-6-90-mono",
			"sourceLabel": "Relecture du modèle et de son voisin, 30 octobre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-30",
			"confidence": "B",
			"notes": "Réponse primaire complète relue le 30 octobre 2026 ; SHA-256 4d250e290a71dbf46ea129beec76ec9e40bfc458498b41a27d0748ef76d804f2. Comparaison documentaire, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"gentilin-812313013-20260926"
		],
		"tankLiters": [
			"gentilin-812313013-20260926"
		],
		"maxPressureBar": [
			"gentilin-812313013-20260926"
		],
		"fadCurve": [
			"gentilin-812313013-20260926"
		],
		"oilType": [
			"gentilin-812313013-20260926-oiltype-1"
		],
		"intakeFlowLpm": [
			"gentilin-812313013-20260926"
		],
		"powerKw": [
			"gentilin-812313013-20260926"
		],
		"weightKg": [
			"gentilin-812313013-20260926"
		],
		"voltage": [
			"gentilin-812313013-20260926"
		],
		"dutyCycle": [
			"gentilin-812313013-20260926"
		],
		"editorial": [
			"review-20261030-gentilin-clinic-6-90-812313013-1",
			"review-20261030-gentilin-clinic-6-90-812313013-2"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 480,
	"powerKw": 3,
	"weightKg": 78,
	"voltage": "400 V, 50 Hz",
	"dutyCycle": 1,
	"variant": {
		"familyId": "gentilin-clinic-6-90",
		"label": "Référence 812313013",
		"distinguishingAttributes": {
			"reference": "812313013"
		}
	}
};

export default product;
