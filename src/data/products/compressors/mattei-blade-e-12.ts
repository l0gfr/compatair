import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "mattei-blade-e-12",
	"slug": "mattei-blade-e-12",
	"brand": "Mattei",
	"model": "BLADE E 12",
	"variant": {
		"familyId": "mattei-blade-e-12",
		"label": "BLADE avec sécheur externe, sans réservoir intégré",
		"distinguishingAttributes": {
			"équipement": "BLADE avec sécheur externe, sans réservoir intégré",
			"pressionMaximale": "10 bar",
			"cuve": "0 L",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 9.5,
			"litersPerMinute": 1370
		}
	],
	"dutyCycle": 1,
	"oilType": "oil",
	"powerKw": 11,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/mattei-blade-e-12.svg",
		"alt": "Repères techniques : Mattei BLADE E 12",
		"sourceUrl": "https://cdn2.hubspot.net/hubfs/4609801/MATTEI%20CORPORATE%20NEW%20WEBSITE/CATALOGHI/INGLESE/EN_COMPRESSORI%20LUBRIFICATI/EN_SERIE%20BLADE/BLADE_8-12_EN_1.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "BLADE avec sécheur externe, sans réservoir intégré",
			"evidenceIds": [
				"october3d-mattei-pdf-11-p7",
				"october3d-mattei-pdf-11-p3"
			]
		},
		{
			"label": "Plafond de la plage de fonctionnement",
			"value": "10 bar relatifs",
			"evidenceIds": [
				"october3d-mattei-pdf-11-p6"
			]
		},
		{
			"label": "Air livré à 9,5 bar",
			"value": "1 370 L/min",
			"evidenceIds": [
				"october3d-mattei-pdf-11-p7"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "0 L",
			"evidenceIds": [
				"october3d-mattei-pdf-11-p7",
				"october3d-mattei-pdf-11-p3"
			]
		},
		{
			"label": "Cycle de service déclaré",
			"value": "Service continu déclaré sous les conditions constructeur",
			"evidenceIds": [
				"october3d-mattei-pdf-11-p6"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "400 / 50 / 3",
			"evidenceIds": [
				"october3d-mattei-pdf-11-p7"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october3d-mattei-pdf-11-p7"
			]
		}
	],
	"editorial": {
		"overview": "BLADE E 12, version 10 bar à 50 Hz : 1 370 L/min à 9,5 bar, moteur de 11 kW et alimentation 400 V triphasée. Le sécheur fait partie de la version E, sans cuve intégrée. Le BLADE 12 sans sécheur annonce le même point FAD.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 0 L.",
			"Plafond conservateur de la plage de fonctionnement : 10 bar."
		],
		"limitations": [
			"Le BLADE E 12 de cette ligne pèse 346 kg et mesure 1 410 × 810 × 990 mm ; le BLADE 12 sans sécheur pèse 308 kg.",
			"Le tableau distingue les versions 50 et 60 Hz ainsi que les pressions de fabrication 8 et 10 bar.",
			"Les modes continu, automatique et modulation sont décrits par le constructeur ; le service continu dépend du mode et des conditions de la notice.",
			"Le montage SE ajoute une cuve de 270 L au sécheur. Confirmer stockage externe, traitement d’air requis et configuration livrée."
		]
	},
	"evidence": [
		{
			"id": "october3d-mattei-pdf-11-p6",
			"sourceUrl": "https://cdn2.hubspot.net/hubfs/4609801/MATTEI%20CORPORATE%20NEW%20WEBSITE/CATALOGHI/INGLESE/EN_COMPRESSORI%20LUBRIFICATI/EN_SERIE%20BLADE/BLADE_8-12_EN_1.pdf#page=6",
			"sourceLabel": "Mattei, BLADE8–12 manufacturer brochure, page PDF 6",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 af2f2664d3734e56f2b27b6dfb1d86a8b8d10b3491ab3f7813b72110cbb08e55 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-mattei-pdf-11-p7",
			"sourceUrl": "https://cdn2.hubspot.net/hubfs/4609801/MATTEI%20CORPORATE%20NEW%20WEBSITE/CATALOGHI/INGLESE/EN_COMPRESSORI%20LUBRIFICATI/EN_SERIE%20BLADE/BLADE_8-12_EN_1.pdf#page=7",
			"sourceLabel": "Mattei, BLADE8–12 manufacturer brochure, page PDF 7",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 af2f2664d3734e56f2b27b6dfb1d86a8b8d10b3491ab3f7813b72110cbb08e55 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-mattei-pdf-11-p3",
			"sourceUrl": "https://cdn2.hubspot.net/hubfs/4609801/MATTEI%20CORPORATE%20NEW%20WEBSITE/CATALOGHI/INGLESE/EN_COMPRESSORI%20LUBRIFICATI/EN_SERIE%20BLADE/BLADE_8-12_EN_1.pdf#page=3",
			"sourceLabel": "Mattei, BLADE8–12 manufacturer brochure, page PDF 3",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 af2f2664d3734e56f2b27b6dfb1d86a8b8d10b3491ab3f7813b72110cbb08e55 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"maxPressureBar": [
			"october3d-mattei-pdf-11-p6"
		],
		"fadCurve": [
			"october3d-mattei-pdf-11-p7"
		],
		"tankLiters": [
			"october3d-mattei-pdf-11-p7",
			"october3d-mattei-pdf-11-p3"
		],
		"powerKw": [
			"october3d-mattei-pdf-11-p7"
		],
		"oilType": [
			"october3d-mattei-pdf-11-p3"
		],
		"dutyCycle": [
			"october3d-mattei-pdf-11-p6"
		],
		"voltage": [
			"october3d-mattei-pdf-11-p7"
		],
		"phase": [
			"october3d-mattei-pdf-11-p7"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	],
	"voltage": "400 V, 50 Hz",
	"phase": "three-phase"
};

export default product;
