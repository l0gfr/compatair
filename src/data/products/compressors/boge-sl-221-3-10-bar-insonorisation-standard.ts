import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "boge-sl-221-3-10-bar-insonorisation-standard",
	"slug": "boge-sl-221-3-10-bar-insonorisation-standard",
	"brand": "BOGE",
	"model": "SL 221-3",
	"variant": {
		"familyId": "boge-sl-221-3",
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
	"powerKw": 160,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/boge-sl-221-3-10-bar-insonorisation-standard-technical-20261116-followup.svg",
		"alt": "Repères techniques : BOGE SL 221-3, 10 bar, insonorisation standard",
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
			"value": "3100 × 1910 × 2140 mm",
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
			"label": "Débit effectif publié, pression de mesure à confirmer",
			"value": "22 700 L/min ; aucun point FAD attribué à la pression maximale",
			"evidenceIds": [
				"documented-d-boge-s3-current-p1"
			]
		}
	],
	"editorial": {
		"overview": "Le SL 221-3 standard associe 160 kW et une pression maximale de 10 bar dans un châssis 3 100 × 1 910 × 2 140 mm. Le SL 181-3 annonce aussi 22,70 m³/min, avec 132 kW et un maximum de 7,5 bar. Ces débits effectifs restent documentaires : leur pression de mesure n’est pas établie séparément, donc le calcul reste non conclusif.",
		"verifiedFacts": [
			"Dimensions publiées : 3100 × 1910 × 2140 mm.",
			"Puissance moteur publiée : 160 kW."
		],
		"limitations": [
			"La disponibilité actuelle et le contenu de la configuration livrée restent à confirmer.",
			"Le maximum de pression n’est pas assimilé à une pression de mesure du FAD. Le verdict reste insufficient_data.",
			"La classe de qualité d’air du réseau, les pertes de pression et le refroidissement nécessitent une vérification sur l’installation.",
			"Le service continu de gamme ne quantifie pas le taux de marche du groupe complet. Conserver les données de débit et leurs limites de pression ; aucun service moteur ne remplace ce taux.",
			"Le volume de stockage de cette configuration n’est pas qualifié dans le tableau."
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
			"id": "review:2026-11-16-technical:boge-sl-221-3-10-bar-insonorisation-standard:0",
			"sourceUrl": "https://www.boge.com/f/287325279136465/x/55679246a0/boge-datenblatt-schraubenkompressor-s-3.pdf",
			"sourceLabel": "BOGE, document constructeur vérifié le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Le SL 221-3 standard associe 160 kW et une pression maximale de 10 bar dans un châssis 3 100 × 1 910 × 2 140 mm. Le SL 181-3 annonce aussi 22,70 m³/min, avec 132 kW et un maximum de 7,5 bar. Ces débits effectifs restent documentaires : leur pression de mesure n’est pas établie séparément, donc le calcul reste non conclusif. GET complet SHA-256 516b7e8e9ad6af00cbdea1444d9394ba099b039f5d01c72db9c295211d69ef27. Pages PDF lues : 1."
		},
		{
			"id": "review:2026-11-16-technical:boge-sl-221-3-10-bar-insonorisation-standard:1",
			"sourceUrl": "https://www.boge.com/en-us/products/compressors/screw-compressors/",
			"sourceLabel": "BOGE, document constructeur vérifié le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Le SL 221-3 standard associe 160 kW et une pression maximale de 10 bar dans un châssis 3 100 × 1 910 × 2 140 mm. Le SL 181-3 annonce aussi 22,70 m³/min, avec 132 kW et un maximum de 7,5 bar. Ces débits effectifs restent documentaires : leur pression de mesure n’est pas établie séparément, donc le calcul reste non conclusif. GET complet SHA-256 ec9cf5cbd51a323d685ada3cf8cd61a2c5d7f363e08c25d99f6de223fdd804bf. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
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
