import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "mattei-erc-1",
	"slug": "mattei-erc-1",
	"brand": "Mattei",
	"model": "ERC 1",
	"variant": {
		"familyId": "mattei-erc-1",
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
			"litersPerMinute": 160
		}
	],
	"oilType": "oil",
	"powerKw": 1.5,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/mattei-erc-1.svg",
		"alt": "Repères techniques : Mattei ERC 1",
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
			"value": "160 L/min",
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
			"value": "230/1",
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
			"label": "Puissance corrigée par relecture de la ligne ERC 1, 50 Hz",
			"value": "1,5 kW / 2 hp",
			"evidenceIds": [
				"review-20261028-mattei-erc-1-1"
			]
		}
	],
	"editorial": {
		"overview": "Mattei ERC 1 : puissance publiée de 1,5 kW et FAD de 160 L/min à 9,5 bar pour la version 10 bar, en 50 Hz. L’ERC 3 publie 320 L/min au même point avec 3 kW. La brochure distingue les alimentations 230 V monophasée et 400 V triphasée de l’ERC 1 ; l’ERC 3 est présenté en 400 V triphasé. La version électrique doit figurer sur le devis.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 0 L.",
			"Pression maximale de fonctionnement publiée : 10 bar.",
			"Puissance de l’ERC 1 dans les deux lignes 50 Hz : 1,5 kW, soit 2 hp dans le tableau.",
			"La note du tableau fixe la pression de travail à 9,5 bar pour les versions 10 bar ; ISO 1217, annexe C."
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
			"id": "review-20261028-mattei-erc-1-1",
			"sourceUrl": "https://4609801.fs1.hubspotusercontent-na1.net/hubfs/4609801/MATTEI%20CORPORATE%20NEW%20WEBSITE/CATALOGHI/INGLESE/EN_COMPRESSORI%20LUBRIFICATI/EN_SERIE%20CLASSIC/Classic_Range_EN.pdf#page=14",
			"sourceLabel": "Relecture du modèle et de son voisin, 28 octobre 2026, pages PDF 14",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-28",
			"confidence": "B",
			"notes": "Réponse primaire complète relue le 28 octobre 2026 ; SHA-256 db466718453e214d4ec391d1efb9788f63bc90284ff8146cedb3d41cc46274c2. Comparaison documentaire, sans essai physique CompatAir."
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
			"october3d-mattei-pdf-03-p14",
			"review-20261028-mattei-erc-1-1"
		],
		"oilType": [
			"october3d-mattei-pdf-03-p3"
		],
		"editorial": [
			"review-20261028-mattei-erc-1-1"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
