import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "boge-slf-181-3-10-bar-insonorisation-standard",
	"slug": "boge-slf-181-3-10-bar-insonorisation-standard",
	"brand": "BOGE",
	"model": "SLF 181-3",
	"variant": {
		"familyId": "boge-slf-181-3",
		"label": "10 bar, insonorisation standard ; 10 bar",
		"distinguishingAttributes": {
			"configuration": "S-3, insonorisation standard",
			"pression": "10 bar",
			"cuve": "0 L"
		}
	},
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"powerKw": 132,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/boge-slf-181-3-10-bar-insonorisation-standard-technical-20261116-reviews.svg",
		"alt": "Repères techniques : BOGE SLF 181-3, 10 bar, insonorisation standard",
		"sourceUrl": "https://www.boge.com/f/287325279136465/x/55679246a0/boge-datenblatt-schraubenkompressor-s-3.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"specifications": [
		{
			"label": "Localisation du tableau",
			"value": "Page PDF 1",
			"evidenceIds": [
				"documented-d-boge-s3-current-p1"
			]
		},
		{
			"label": "Configuration",
			"value": "S-3, insonorisation standard",
			"evidenceIds": [
				"documented-d-boge-s3-current-p1"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "3150 × 1910 × 2140 mm",
			"evidenceIds": [
				"documented-d-boge-s3-current-p1"
			]
		},
		{
			"label": "Conditions du débit",
			"value": "Effective delivery is associated with maximum pressure in the table; measurement pressure not separately established.",
			"evidenceIds": [
				"documented-d-boge-s3-current-p1"
			]
		},
		{
			"label": "Débit minimal de modulation publié",
			"value": "7 970 L/min ; condition du tableau conservée séparément",
			"evidenceIds": [
				"documented-d-boge-s3-current-p1"
			]
		},
		{
			"label": "Débit effectif publié, pression de mesure à confirmer",
			"value": "19 650 L/min ; aucun point FAD attribué à la pression maximale",
			"evidenceIds": [
				"documented-d-boge-s3-current-p1"
			]
		}
	],
	"editorial": {
		"overview": "Le SLF 181-3 en version 10 bar publie une plage de livraison effective de 7,97 à 19,65 m³/min. Les versions 7,5 et 13 bar du même groupe annoncent respectivement 8,12–22,77 et 7,68–16,08 m³/min. La puissance principale reste 132 kW, avec un ventilateur de 4 kW séparé. La pression de mesure du débit et le taux de marche du groupe ne sont pas établis ; le calcul reste non conclusif.",
		"verifiedFacts": [
			"Le SLF 181-3 en version 10 bar publie une plage de livraison effective de 7,97 à 19,65 m³/min.",
			"Les versions 7,5 et 13 bar du même groupe annoncent respectivement 8,12–22,77 et 7,68–16,08 m³/min."
		],
		"limitations": [
			"La disponibilité actuelle et le contenu de la configuration livrée restent à confirmer.",
			"Le maximum de pression n’est pas assimilé à une pression de mesure du FAD. Le verdict reste insufficient_data.",
			"La classe de qualité d’air du réseau, les pertes de pression et le refroidissement nécessitent une vérification sur l’installation."
		]
	},
	"evidence": [
		{
			"id": "documented-d-boge-s3-current-p1",
			"sourceUrl": "https://www.boge.com/f/287325279136465/x/55679246a0/boge-datenblatt-schraubenkompressor-s-3.pdf#page=1",
			"sourceLabel": "boge-s3-current, page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 516b7e8e9ad6af00cbdea1444d9394ba099b039f5d01c72db9c295211d69ef27. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "documented-d-boge-s3-duty",
			"sourceUrl": "https://www.boge.com/en-us/products/compressors/screw-compressors/",
			"sourceLabel": "boge-s3-duty, page constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 721b071d19957929d82543cb2851fa494476c228f6440fe41e5ee21bcc5e038c. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "review:2026-11-16-reviews:boge-slf-181-3-10-bar-insonorisation-standard:0",
			"sourceUrl": "https://www.boge.com/f/287325279136465/x/55679246a0/boge-datenblatt-schraubenkompressor-s-3.pdf",
			"sourceLabel": "BOGE, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Le SLF 181-3 en version 10 bar publie une plage de livraison effective de 7,97 à 19,65 m³/min. Les versions 7,5 et 13 bar du même groupe annoncent respectivement 8,12–22,77 et 7,68–16,08 m³/min. La puissance principale reste 132 kW, avec un ventilateur de 4 kW séparé. La pression de mesure du débit et le taux de marche du groupe ne sont pas établis ; le calcul reste non conclusif. GET complet SHA-256 516b7e8e9ad6af00cbdea1444d9394ba099b039f5d01c72db9c295211d69ef27. Pages PDF lues : 1."
		}
	],
	"fieldSources": {
		"maxPressureBar": [
			"documented-d-boge-s3-current-p1"
		],
		"powerKw": [
			"documented-d-boge-s3-current-p1"
		],
		"fadCurve": [
			"documented-d-boge-s3-current-p1"
		],
		"oilType": [
			"documented-d-boge-s3-current-p1"
		]
	},
	"notes": [
		"Configuration et unités vérifiées dans la ligne de la page 1."
	]
};

export default product;
