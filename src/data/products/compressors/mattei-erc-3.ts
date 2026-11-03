import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "mattei-erc-3",
	"slug": "mattei-erc-3",
	"brand": "Mattei",
	"model": "ERC 3",
	"variant": {
		"familyId": "mattei-erc-3",
		"label": "Groupe Classic sur socle sans réservoir",
		"distinguishingAttributes": {
			"équipement": "Groupe Classic sur socle sans réservoir",
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
			"litersPerMinute": 320
		}
	],
	"oilType": "oil",
	"powerKw": 3,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/mattei-erc-3.svg",
		"alt": "Repères techniques : Mattei ERC 3",
		"sourceUrl": "https://4609801.fs1.hubspotusercontent-na1.net/hubfs/4609801/MATTEI%20CORPORATE%20NEW%20WEBSITE/CATALOGHI/INGLESE/EN_COMPRESSORI%20LUBRIFICATI/EN_SERIE%20CLASSIC/Classic_Range_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe Classic sur socle sans réservoir",
			"evidenceIds": [
				"october3d-mattei-pdf-03-p14",
				"october3d-mattei-pdf-03-p4"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "10 bar relatifs",
			"evidenceIds": [
				"october3d-mattei-pdf-03-p6"
			]
		},
		{
			"label": "Air livré à 9,5 bar",
			"value": "320 L/min",
			"evidenceIds": [
				"october3d-mattei-pdf-03-p14"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "0 L",
			"evidenceIds": [
				"october3d-mattei-pdf-03-p14",
				"october3d-mattei-pdf-03-p4"
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
		},
		{
			"label": "Configuration",
			"value": "ERC 3 au sol, 50 Hz",
			"evidenceIds": [
				"mattei-erc-3-reserved-20261103-1"
			]
		},
		{
			"label": "FAD à 9,5 bar",
			"value": "0,32 m³/min",
			"evidenceIds": [
				"mattei-erc-3-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance",
			"value": "3 kW",
			"evidenceIds": [
				"mattei-erc-3-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "55 kg",
			"evidenceIds": [
				"mattei-erc-3-reserved-20261103-1"
			]
		},
		{
			"label": "Alimentation",
			"value": "400 V / 3 phases / 50 Hz",
			"evidenceIds": [
				"mattei-erc-3-reserved-20261103-1"
			]
		},
		{
			"label": "Mesure",
			"value": "ISO 1217 annexe C",
			"evidenceIds": [
				"mattei-erc-3-reserved-20261103-1"
			]
		}
	],
	"editorial": {
		"overview": "Mattei ERC 3. La ERC 3 au sol pèse 55 kg. ERCS 3 : même débit avec cuve 90 L, masse 85 kg. Le tableau distingue les versions 8/10/13 bar et précise les mesures respectives à 7,5/9,5/12,5 bar ; la table 60 Hz est une autre configuration.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 0 L.",
			"Pression maximale de fonctionnement publiée : 10 bar.",
			"Configuration : ERC 3 au sol, 50 Hz.",
			"FAD à 9,5 bar : 0,32 m³/min.",
			"Puissance : 3 kW.",
			"Masse : 55 kg.",
			"Alimentation : 400 V / 3 phases / 50 Hz.",
			"Mesure : ISO 1217 annexe C."
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
			"id": "october3d-mattei-pdf-03-p4",
			"sourceUrl": "https://4609801.fs1.hubspotusercontent-na1.net/hubfs/4609801/MATTEI%20CORPORATE%20NEW%20WEBSITE/CATALOGHI/INGLESE/EN_COMPRESSORI%20LUBRIFICATI/EN_SERIE%20CLASSIC/Classic_Range_EN.pdf#page=4",
			"sourceLabel": "Mattei Classic, brochure constructeur, page PDF 4",
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
		},
		{
			"id": "mattei-erc-3-reserved-20261103-1",
			"sourceUrl": "https://4609801.fs1.hubspotusercontent-na1.net/hubfs/4609801/MATTEI%20CORPORATE%20NEW%20WEBSITE/CATALOGHI/INGLESE/EN_COMPRESSORI%20LUBRIFICATI/EN_SERIE%20CLASSIC/Classic_Range_EN.pdf#page=14",
			"sourceLabel": "Mattei : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 db466718453e214d4ec391d1efb9788f63bc90284ff8146cedb3d41cc46274c2. La ERC 3 au sol pèse 55 kg. ERCS 3 : même débit avec cuve 90 L, masse 85 kg. Le tableau distingue les versions 8/10/13 bar et précise les mesures respectives à 7,5/9,5/12,5 bar ; la table 60 Hz est une autre configuration."
		}
	],
	"fieldSources": {
		"maxPressureBar": [
			"october3d-mattei-pdf-03-p6"
		],
		"tankLiters": [
			"october3d-mattei-pdf-03-p14",
			"october3d-mattei-pdf-03-p4"
		],
		"fadCurve": [
			"october3d-mattei-pdf-03-p14"
		],
		"powerKw": [
			"october3d-mattei-pdf-03-p14"
		],
		"oilType": [
			"october3d-mattei-pdf-03-p3"
		],
		"weightKg": [
			"mattei-erc-3-reserved-20261103-1"
		],
		"phase": [
			"mattei-erc-3-reserved-20261103-1"
		],
		"voltage": [
			"mattei-erc-3-reserved-20261103-1"
		],
		"editorial": [
			"mattei-erc-3-reserved-20261103-1"
		],
		"specifications": [
			"mattei-erc-3-reserved-20261103-1"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	],
	"weightKg": 55,
	"phase": "three-phase",
	"voltage": "400 V / 50 Hz"
};

export default product;
