import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "mattei-blade-se-12",
	"slug": "mattei-blade-se-12",
	"brand": "Mattei",
	"model": "BLADE SE 12",
	"variant": {
		"familyId": "mattei-blade-se-12",
		"label": "BLADE sur réservoir 270 L avec sécheur",
		"distinguishingAttributes": {
			"équipement": "BLADE sur réservoir 270 L avec sécheur",
			"pressionMaximale": "10 bar",
			"cuve": "270 L",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 270,
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
		"src": "/images/products/mattei-blade-se-12.svg",
		"alt": "Repères techniques : Mattei BLADE SE 12",
		"sourceUrl": "https://cdn2.hubspot.net/hubfs/4609801/MATTEI%20CORPORATE%20NEW%20WEBSITE/CATALOGHI/INGLESE/EN_COMPRESSORI%20LUBRIFICATI/EN_SERIE%20BLADE/BLADE_8-12_EN_1.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "BLADE sur réservoir 270 L avec sécheur",
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
			"value": "270 L",
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
				"october3d-mattei-pdf-11-p6"
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
		"overview": "Mattei BLADE SE 12. 1 370 L/min à 9,5 bar. BLADE sur réservoir 270 L avec sécheur.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 270 L.",
			"Plafond conservateur de la plage de fonctionnement : 10 bar."
		],
		"limitations": [
			"Service continu déclaré dans les modes de commande décrits ; réglages et installation de la notice à respecter.",
			"La version 10 bar est retenue ; FAD à9,5 bar, sans fusion avec 8 bar ou 60 Hz.",
			"Seules les pressions documentées sont utilisées. Aucun débit aspiré, prolongement de courbe ou essai physique CompatAir.",
			"Installation et disponibilité en France à confirmer selon l’alimentation et le raccordement publiés."
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
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
