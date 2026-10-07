import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "rolair-fc229mk103-60-hz-10-342136-bar-groupe-mobile-avec-reservoir-integre",
	"slug": "rolair-fc229mk103-60-hz-10-342136-bar-groupe-mobile-avec-reservoir-integre",
	"brand": "Rolair",
	"model": "FC229MK103",
	"variant": {
		"familyId": "rolair-fc229mk103",
		"label": "Groupe mobile avec réservoir intégré, 10,342 bar",
		"distinguishingAttributes": {
			"équipement": "Groupe mobile avec réservoir intégré",
			"pressionMaximale": "10,342 bar",
			"cuve": "109,8 L",
			"régulation": "vitesse fixe",
			"fréquence": "60 Hz"
		}
	},
	"tankLiters": 109.8,
	"maxPressureBar": 10.342136,
	"fadCurve": [
		{
			"pressureBar": 2.757903,
			"litersPerMinute": 186.891
		},
		{
			"pressureBar": 6.205282,
			"litersPerMinute": 155.743
		}
	],
	"oilType": "oil",
	"mobility": "portable",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/rolair-fc229mk103-60-hz-10-342136-bar-groupe-mobile-avec-reservoir-integre.webp",
		"alt": "Repères techniques : Rolair FC229MK103, Groupe mobile avec réservoir intégré, 10,342 bar",
		"sourceUrl": "https://www.rolair.com/sites/default/files/2026-09/FC229MK103%20Owner%27s%20Manual%20-%20Full%20Size.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe mobile avec réservoir intégré",
			"evidenceIds": [
				"october3c-rolair-fc229mk103-manual-p36"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "150 PSI relatifs",
			"evidenceIds": [
				"october3c-rolair-fc229mk103-manual-p10"
			]
		},
		{
			"label": "Air livré à 40 PSI",
			"value": "6,6 SCFM",
			"evidenceIds": [
				"october3c-rolair-fc229mk103-manual-p10"
			]
		},
		{
			"label": "Air livré à 90 PSI",
			"value": "5,5 SCFM",
			"evidenceIds": [
				"october3c-rolair-fc229mk103-manual-p10"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "109,8 L intégrés à cette configuration",
			"evidenceIds": [
				"october3c-rolair-fc229mk103-manual-p36"
			]
		},
		{
			"label": "Périmètre documentaire",
			"value": "Version 120 V 60 Hz, documentation américaine ; commercialisation en France à confirmer",
			"evidenceIds": [
				"october3c-rolair-fc229mk103-manual-p10"
			]
		}
	],
	"editorial": {
		"overview": "Rolair FC229MK103, Groupe mobile avec réservoir intégré, 10,342 bar. 186,891 L/min à 2,758 bar ; 155,743 L/min à 6,205 bar.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Configuration de stockage documentée : 109,8 L.",
			"Pression maximale de fonctionnement publiée : 10,342 bar."
		],
		"limitations": [
			"SCFM déclaré ; les conditions standard exactes ne sont pas définies dans la notice. Aucun rattachement à ISO 1217.",
			"Cycle de service du groupe complet non établi ; la tenue permanente reste indéterminée.",
			"Version américaine 120 V 60 Hz ; performances et alimentation non transposées à la version européenne 50 Hz.",
			"Seules les pressions documentées sont utilisées. Aucun débit aspiré, prolongement de courbe ou essai physique CompatAir.",
			"Configuration publiée dans la documentation citée ; disponibilité commerciale actuelle à confirmer."
		]
	},
	"evidence": [
		{
			"id": "october3c-rolair-fc229mk103-manual-p36",
			"sourceUrl": "https://www.rolair.com/sites/default/files/2026-09/FC229MK103%20Owner%27s%20Manual%20-%20Full%20Size.pdf#page=36",
			"sourceLabel": "Rolair FC229MK103, notice constructeur, page PDF 36",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 80452cfc42d75e4024106b27ad6ce6986277fe9fde77052d7fd4f9e19ede3c9f de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3c-rolair-fc229mk103-manual-p10",
			"sourceUrl": "https://www.rolair.com/sites/default/files/2026-09/FC229MK103%20Owner%27s%20Manual%20-%20Full%20Size.pdf#page=10",
			"sourceLabel": "Rolair FC229MK103, notice constructeur, page PDF 10",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 80452cfc42d75e4024106b27ad6ce6986277fe9fde77052d7fd4f9e19ede3c9f de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3c-rolair-fad-definition",
			"sourceUrl": "https://www.rolair.com/pumps",
			"sourceLabel": "Rolair Pumps, définition du débit livré",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 3c56fb38d73612ea491e69e6ab1b1dc7f256422bd2d30eb460a92d673241480f de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october3c-rolair-fc229mk103-manual-p36"
		],
		"maxPressureBar": [
			"october3c-rolair-fc229mk103-manual-p10"
		],
		"fadCurve": [
			"october3c-rolair-fc229mk103-manual-p10",
			"october3c-rolair-fad-definition"
		],
		"oilType": [
			"october3c-rolair-fc229mk103-manual-p10"
		]
	},
	"notes": [
		"Pression de mesure, pression maximale relative et pression absolue à l’entrée restent distinctes. ISO 1217 n’est revendiquée que pour les sources qui le citent."
	]
};

export default product;
