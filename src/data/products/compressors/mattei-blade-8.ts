import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "mattei-blade-8",
	"slug": "mattei-blade-8",
	"brand": "Mattei",
	"model": "BLADE 8",
	"variant": {
		"familyId": "mattei-blade-8",
		"label": "BLADE sans réservoir intégré",
		"distinguishingAttributes": {
			"équipement": "BLADE sans réservoir intégré",
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
			"litersPerMinute": 995
		}
	],
	"dutyCycle": 1,
	"oilType": "oil",
	"powerKw": 7.5,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/mattei-blade-8.svg",
		"alt": "Repères techniques : Mattei BLADE 8",
		"sourceUrl": "https://cdn2.hubspot.net/hubfs/4609801/MATTEI%20CORPORATE%20NEW%20WEBSITE/CATALOGHI/INGLESE/EN_COMPRESSORI%20LUBRIFICATI/EN_SERIE%20BLADE/BLADE_8-12_EN_1.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "BLADE sans réservoir intégré",
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
			"value": "995 L/min",
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
			"value": "400 V, 50 Hz, triphasé",
			"evidenceIds": [
				"october3d-mattei-pdf-11-p7"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october3d-mattei-pdf-11-p6"
			]
		}
	],
	"editorial": {
		"overview": "BLADE 8 sur socle, version 10 bar à 50 Hz : 995 L/min à 9,5 bar, moteur de 7,5 kW, alimentation 400 V triphasée. La version BLADE S 8 conserve ce point FAD avec une cuve intégrée de 270 L ; le BLADE 8 étudié demande un stockage externe.",
		"verifiedFacts": [
			"Le tableau qualifie le FAD selon ISO 1217 annexe C et sépare la pression de référence de 9,5 bar de la version 10 bar.",
			"La technologie est à palettes rotatives ; les modes continu, automatique et modulation sont décrits par le constructeur.",
			"La ligne BLADE 8 à 50 Hz publie 270 kg et des dimensions de 1 180 × 760 × 990 mm."
		],
		"limitations": [
			"La version 60 Hz et la version de pression 8 bar ont leurs propres valeurs : elles ne complètent pas cette courbe.",
			"Le service continu dépend du mode de commande et des conditions de la notice. Il ne signifie pas production constante à toute charge.",
			"Le choix entre BLADE, S, E et SE porte sur le stockage et le séchage livrés ; confirmer ces options et la qualité d’air nécessaire au poste."
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
