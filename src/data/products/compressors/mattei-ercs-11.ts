import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "mattei-ercs-11",
	"slug": "mattei-ercs-11",
	"brand": "Mattei",
	"model": "ERCS 11",
	"variant": {
		"familyId": "mattei-ercs-11",
		"label": "Groupe Classic sur réservoir 270 L",
		"distinguishingAttributes": {
			"équipement": "Groupe Classic sur réservoir 270 L",
			"pressionMaximale": "13 bar",
			"cuve": "270 L",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 270,
	"maxPressureBar": 13,
	"fadCurve": [
		{
			"pressureBar": 12.5,
			"litersPerMinute": 1350
		}
	],
	"oilType": "oil",
	"powerKw": 11,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/mattei-ercs-11.svg",
		"alt": "Repères techniques : Mattei ERCS 11",
		"sourceUrl": "https://4609801.fs1.hubspotusercontent-na1.net/hubfs/4609801/MATTEI%20CORPORATE%20NEW%20WEBSITE/CATALOGHI/INGLESE/EN_COMPRESSORI%20LUBRIFICATI/EN_SERIE%20CLASSIC/Classic_Range_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe Classic sur réservoir 270 L",
			"evidenceIds": [
				"october3d-mattei-pdf-03-p14"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "13 bar relatifs",
			"evidenceIds": [
				"october3d-mattei-pdf-03-p6"
			]
		},
		{
			"label": "Air livré à 12,5 bar",
			"value": "1 350 L/min",
			"evidenceIds": [
				"october3d-mattei-pdf-03-p14"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "270 L",
			"evidenceIds": [
				"october3d-mattei-pdf-03-p14"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "400/3",
			"evidenceIds": [
				"october3d-mattei-pdf-03-p6"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october3d-mattei-pdf-03-p6"
			]
		}
	],
	"editorial": {
		"overview": "Mattei ERCS 11. 1 350 L/min à 12,5 bar. Groupe Classic sur réservoir 270 L.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 270 L.",
			"Pression maximale de fonctionnement publiée : 13 bar."
		],
		"limitations": [
			"La pression FAD est inférieure de 0,5 bar au maximum de la version ; ces deux valeurs restent distinctes.",
			"Aucun cycle de service du groupe complet publié dans la brochure retenue.",
			"La brochure Classic affiche 175 psig face à 13 bar ; le maximum SI explicite est conservé et cette contre-valeur impériale est exclue.",
			"Cycle de service non établi ; la tenue permanente reste indéterminée.",
			"Seules les pressions documentées sont utilisées. Aucun débit aspiré, prolongement de courbe ou essai physique CompatAir.",
			"Installation et disponibilité en France à confirmer selon l’alimentation et le raccordement publiés."
		]
	},
	"evidence": [
		{
			"id": "october3d-mattei-pdf-03-p6",
			"sourceUrl": "https://4609801.fs1.hubspotusercontent-na1.net/hubfs/4609801/MATTEI%20CORPORATE%20NEW%20WEBSITE/CATALOGHI/INGLESE/EN_COMPRESSORI%20LUBRIFICATI/EN_SERIE%20CLASSIC/Classic_Range_EN.pdf#page=6",
			"sourceLabel": "Mattei Classic, brochure constructeur, page PDF 6",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 db466718453e214d4ec391d1efb9788f63bc90284ff8146cedb3d41cc46274c2 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-mattei-pdf-03-p14",
			"sourceUrl": "https://4609801.fs1.hubspotusercontent-na1.net/hubfs/4609801/MATTEI%20CORPORATE%20NEW%20WEBSITE/CATALOGHI/INGLESE/EN_COMPRESSORI%20LUBRIFICATI/EN_SERIE%20CLASSIC/Classic_Range_EN.pdf#page=14",
			"sourceLabel": "Mattei Classic, brochure constructeur, page PDF 14",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 db466718453e214d4ec391d1efb9788f63bc90284ff8146cedb3d41cc46274c2 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-mattei-pdf-03-p3",
			"sourceUrl": "https://4609801.fs1.hubspotusercontent-na1.net/hubfs/4609801/MATTEI%20CORPORATE%20NEW%20WEBSITE/CATALOGHI/INGLESE/EN_COMPRESSORI%20LUBRIFICATI/EN_SERIE%20CLASSIC/Classic_Range_EN.pdf#page=3",
			"sourceLabel": "Mattei Classic, brochure constructeur, page PDF 3",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 db466718453e214d4ec391d1efb9788f63bc90284ff8146cedb3d41cc46274c2 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"maxPressureBar": [
			"october3d-mattei-pdf-03-p6"
		],
		"tankLiters": [
			"october3d-mattei-pdf-03-p14"
		],
		"fadCurve": [
			"october3d-mattei-pdf-03-p14"
		],
		"powerKw": [
			"october3d-mattei-pdf-03-p14"
		],
		"oilType": [
			"october3d-mattei-pdf-03-p3"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
