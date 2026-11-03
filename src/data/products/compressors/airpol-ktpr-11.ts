import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "airpol-ktpr-11",
	"slug": "airpol-ktpr-11",
	"brand": "Airpol",
	"model": "KTPR 11",
	"variant": {
		"familyId": "airpol-ktpr-11",
		"label": "Groupe Airpol sur réservoir 500 L avec sécheur et filtres",
		"distinguishingAttributes": {
			"équipement": "Groupe Airpol sur réservoir 500 L avec sécheur et filtres",
			"pressionMaximale": "10 bar",
			"cuve": "500 L",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 500,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"powerKw": 11,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpol-ktpr-11.svg",
		"alt": "Repères techniques : Airpol KTPR 11",
		"sourceUrl": "https://airpol.com.pl/wp-content/uploads/2022/05/Airpol-KTPR-from-55-kW-up-to-15-kW-up-to-10-bar.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration",
			"value": "Variateur Ultra Speed, cuve 500 L, sécheur et filtres",
			"evidenceIds": [
				"airpol-ktpr-11-reserved-20261103-1"
			]
		},
		{
			"label": "Capacité min–max à 1,0 MPa",
			"value": "17–90 m³/h",
			"evidenceIds": [
				"airpol-ktpr-11-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance",
			"value": "11 kW",
			"evidenceIds": [
				"airpol-ktpr-11-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "445 kg",
			"evidenceIds": [
				"airpol-ktpr-11-reserved-20261103-1"
			]
		},
		{
			"label": "Dimensions L×W×H",
			"value": "1 912 × 660 × 1560 mm",
			"evidenceIds": [
				"airpol-ktpr-11-reserved-20261103-1"
			]
		},
		{
			"label": "Alimentation",
			"value": "400 V / 3 phases / 50 Hz",
			"evidenceIds": [
				"airpol-ktpr-11-reserved-20261103-1"
			]
		}
	],
	"editorial": {
		"overview": "Airpol KTPR 11. La KTPR 11 annonce 17–90 m³/h à 1,0 MPa. Le précédent point unique reprenait le minimum de modulation, pas le maximum. La KTPR 11 donne 17–90 m³/h et la KTPR 15 donne 52–120 m³/h à cette pression. Sans conditions de référence FAD explicites, la plage reste documentaire et le calcul est indéterminé.",
		"verifiedFacts": [
			"Configuration : Variateur Ultra Speed, cuve 500 L, sécheur et filtres.",
			"Capacité min–max à 1,0 MPa : 17–90 m³/h.",
			"Puissance : 11 kW.",
			"Masse : 445 kg.",
			"Dimensions L×W×H : 1 912 × 660 × 1560 mm.",
			"Alimentation : 400 V / 3 phases / 50 Hz."
		],
		"limitations": [
			"Capacité variable conservée en m³/h avec pression explicite ; conditions de référence FAD non précisées. Aucun point unique de régime permanent inventé.",
			"Anciennes valeurs minimales conservées dans l’historique, retirées du calcul."
		]
	},
	"evidence": [
		{
			"id": "october3d-airpol-pdf-027-p5",
			"sourceUrl": "https://airpol.com.pl/wp-content/uploads/2022/05/Airpol-KTPR-from-55-kW-up-to-15-kW-up-to-10-bar.pdf#page=5",
			"sourceLabel": "Airpol, manufacturer technical documentation, page PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 0f1b8b561932c75ca40dfcf5840760ebcceda6e597e8e4dfbe561111583fb6ec de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-airpol-screw-p13",
			"sourceUrl": "https://airpol.com.pl/wp-content/uploads/2022/05/Airpol-screw-compressors.pdf#page=13",
			"sourceLabel": "Airpol, screw compressor legacy brochure with ISO1217 capacity tables, page PDF 13",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 93fb6c0baf7deedc619234c8c63575d9edfeab652447ffc07e673ddb9c7cbdd8 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-airpol-pdf-027-p11",
			"sourceUrl": "https://airpol.com.pl/wp-content/uploads/2022/05/Airpol-KTPR-from-55-kW-up-to-15-kW-up-to-10-bar.pdf#page=11",
			"sourceLabel": "Airpol, manufacturer technical documentation, page PDF 11",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 0f1b8b561932c75ca40dfcf5840760ebcceda6e597e8e4dfbe561111583fb6ec de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "airpol-ktpr-11-reserved-20261103-1",
			"sourceUrl": "https://airpol.com.pl/wp-content/uploads/2022/05/Airpol-KTPR-from-55-kW-up-to-15-kW-up-to-10-bar.pdf#page=5",
			"sourceLabel": "Airpol : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 0f1b8b561932c75ca40dfcf5840760ebcceda6e597e8e4dfbe561111583fb6ec. La KTPR 11 annonce 17–90 m³/h à 1,0 MPa. Le précédent point unique reprenait le minimum de modulation, pas le maximum. La KTPR 11 donne 17–90 m³/h et la KTPR 15 donne 52–120 m³/h à cette pression. Sans conditions de référence FAD explicites, la plage reste documentaire et le calcul est indéterminé."
		}
	],
	"fieldSources": {
		"maxPressureBar": [
			"october3d-airpol-pdf-027-p5"
		],
		"fadCurve": [
			"airpol-ktpr-11-reserved-20261103-1"
		],
		"tankLiters": [
			"october3d-airpol-pdf-027-p5"
		],
		"oilType": [
			"october3d-airpol-pdf-027-p11"
		],
		"powerKw": [
			"airpol-ktpr-11-reserved-20261103-1"
		],
		"weightKg": [
			"airpol-ktpr-11-reserved-20261103-1"
		],
		"phase": [
			"airpol-ktpr-11-reserved-20261103-1"
		],
		"voltage": [
			"airpol-ktpr-11-reserved-20261103-1"
		],
		"editorial": [
			"airpol-ktpr-11-reserved-20261103-1"
		],
		"specifications": [
			"airpol-ktpr-11-reserved-20261103-1"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	],
	"weightKg": 445,
	"phase": "three-phase",
	"voltage": "400 V / 50 Hz"
};

export default product;
