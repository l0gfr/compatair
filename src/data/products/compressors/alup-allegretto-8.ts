import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "alup-allegretto-8",
	"slug": "alup-allegretto-8",
	"brand": "ALUP",
	"model": "Allegretto 8",
	"variant": {
		"familyId": "alup-allegretto-8",
		"label": "Groupe sur socle sans réservoir de stockage intégré",
		"distinguishingAttributes": {
			"équipement": "Groupe sur socle sans réservoir de stockage intégré",
			"pressionMaximale": "10 bar",
			"cuve": "0 L"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 9.5,
			"litersPerMinute": 1056.667
		}
	],
	"oilType": "oil",
	"powerKw": 7,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/alup-allegretto-8.svg",
		"alt": "Repères techniques : ALUP Allegretto 8",
		"sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/ivr/allegretto-8-14/leaflets/Alup_Sonetto8-20_Allegretto8-14_leaflet_6999640670_EN_LR.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration",
			"value": "Allegretto 8 sur socle",
			"evidenceIds": [
				"alup-allegretto-8-reserved-20261103-1"
			]
		},
		{
			"label": "FAD maximal à 9,5 bar",
			"value": "63,4 m³/h ; colonne arrondie 17,6 L/s",
			"evidenceIds": [
				"alup-allegretto-8-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance",
			"value": "7,5 kW",
			"evidenceIds": [
				"alup-allegretto-8-reserved-20261103-1"
			]
		},
		{
			"label": "Masse au sol",
			"value": "193 kg",
			"evidenceIds": [
				"alup-allegretto-8-reserved-20261103-1"
			]
		},
		{
			"label": "Dimensions L×W×H",
			"value": "1 000 × 655 × 1 062 mm",
			"evidenceIds": [
				"alup-allegretto-8-reserved-20261103-1"
			]
		},
		{
			"label": "Mesure",
			"value": "ISO 1217 annexe C",
			"evidenceIds": [
				"alup-allegretto-8-reserved-20261103-1"
			]
		}
	],
	"editorial": {
		"overview": "ALUP Allegretto 8. La Allegretto 8 sur socle pèse 193 kg, contre 332 kg avec cuve 270 L et sécheur. Le maximum publié est 63,4 m³/h à 9,5 bar ; la Allegretto 11 donne 88,2 m³/h au même point. La colonne minimale à 7 bar contient des unités incohérentes (21,2 m³/h et 5,2 L/s) : aucune plage de modulation n’en est calculée.",
		"verifiedFacts": [
			"Configuration : Allegretto 8 sur socle.",
			"FAD maximal à 9,5 bar : 63,4 m³/h ; colonne arrondie 17,6 L/s.",
			"Puissance : 7,5 kW.",
			"Masse au sol : 193 kg.",
			"Dimensions L×W×H : 1 000 × 655 × 1 062 mm.",
			"Mesure : ISO 1217 annexe C."
		],
		"limitations": [
			"La fiche HTML reste inaccessible ; la brochure complète accessible documente cette ligne exacte.",
			"Le minimum à 7 bar contient une incohérence de conversion ; il reste exclu du moteur.",
			"10 bar est la pression de référence de la configuration, distincte de la mesure FAD à 9,5 bar."
		]
	},
	"evidence": [
		{
			"id": "october3d-alup-extra-21",
			"sourceUrl": "https://www.alup.com/en-international/products/screw-compressors/variable-speed/allegretto-8-14",
			"sourceLabel": "ALUP, documentation constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 76521d2c0c66290bd95b939825a1f39e9453046594c864f951d07e509d9fe64e de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-alup-pdf-extra-03-p8",
			"sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/ivr/allegretto-8-14/leaflets/Alup_Sonetto8-20_Allegretto8-14_leaflet_6999640670_EN_LR.pdf#page=8",
			"sourceLabel": "ALUP, documentation constructeur, page PDF 8",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 8efff91c3dd0111e59a712f8064be251e0efd37d5e42d137a7167d2f2a69cc43 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-alup-pdf-extra-03-p2",
			"sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/ivr/allegretto-8-14/leaflets/Alup_Sonetto8-20_Allegretto8-14_leaflet_6999640670_EN_LR.pdf#page=2",
			"sourceLabel": "ALUP, documentation constructeur, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 8efff91c3dd0111e59a712f8064be251e0efd37d5e42d137a7167d2f2a69cc43 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "alup-allegretto-8-reserved-20261103-1",
			"sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/ivr/allegretto-8-14/leaflets/Alup_Sonetto8-20_Allegretto8-14_leaflet_6999640670_EN_LR.pdf#page=8",
			"sourceLabel": "ALUP : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 8efff91c3dd0111e59a712f8064be251e0efd37d5e42d137a7167d2f2a69cc43. La Allegretto 8 sur socle pèse 193 kg, contre 332 kg avec cuve 270 L et sécheur. Le maximum publié est 63,4 m³/h à 9,5 bar ; la Allegretto 11 donne 88,2 m³/h au même point. La colonne minimale à 7 bar contient des unités incohérentes (21,2 m³/h et 5,2 L/s) : aucune plage de modulation n’en est calculée."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october3d-alup-pdf-extra-03-p8"
		],
		"oilType": [
			"october3d-alup-pdf-extra-03-p2"
		],
		"maxPressureBar": [
			"alup-allegretto-8-reserved-20261103-1"
		],
		"fadCurve": [
			"october3d-alup-pdf-extra-03-p8"
		],
		"powerKw": [
			"october3d-alup-pdf-extra-03-p8"
		],
		"weightKg": [
			"alup-allegretto-8-reserved-20261103-1"
		],
		"maxPressureBasis": [
			"alup-allegretto-8-reserved-20261103-1"
		],
		"editorial": [
			"alup-allegretto-8-reserved-20261103-1"
		],
		"specifications": [
			"alup-allegretto-8-reserved-20261103-1"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	],
	"weightKg": 193,
	"maxPressureBasis": "selected-working-pressure-ceiling"
};

export default product;
