const product = {
	"id": "rolair-fcol22ls6-60-hz-12-065825-bar-groupe-mobile-avec-reservoir-integre",
	"slug": "rolair-fcol22ls6-60-hz-12-065825-bar-groupe-mobile-avec-reservoir-integre",
	"brand": "Rolair",
	"model": "FCOL22LS6",
	"variant": {
		"familyId": "rolair-fcol22ls6",
		"label": "Groupe mobile avec réservoir intégré, 12,066 bar",
		"distinguishingAttributes": {
			"équipement": "Groupe mobile avec réservoir intégré",
			"pressionMaximale": "12,066 bar",
			"cuve": "20,8 L",
			"régulation": "vitesse fixe",
			"fréquence": "60 Hz"
		}
	},
	"tankLiters": 20.8,
	"maxPressureBar": 12.065825,
	"fadCurve": [
		{
			"pressureBar": 6.205282,
			"litersPerMinute": 141.584
		}
	],
	"dutyCycle": 0.5,
	"oilType": "oil-free",
	"mobility": "portable",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/rolair-fcol22ls6-60-hz-12-065825-bar-groupe-mobile-avec-reservoir-integre.webp",
		"alt": "Repères techniques : Rolair FCOL22LS6, Groupe mobile avec réservoir intégré, 12,066 bar",
		"sourceUrl": "https://www.rolair.com/sites/default/files/2026-09/FCOL22LS6%20Owner%27s%20Manual.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe mobile avec réservoir intégré",
			"evidenceIds": [
				"october3c-rolair-fcol22ls6-manual-p32"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "175 PSI relatifs",
			"evidenceIds": [
				"october3c-rolair-fcol22ls6-manual-p10"
			]
		},
		{
			"label": "Air livré à 90 PSI",
			"value": "5 SCFM",
			"evidenceIds": [
				"october3c-rolair-fcol22ls6-manual-p10"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "20,8 L intégrés à cette configuration",
			"evidenceIds": [
				"october3c-rolair-fcol22ls6-manual-p32"
			]
		},
		{
			"label": "Cycle de service déclaré",
			"value": "S3/50%, cinq minutes ON et cinq minutes OFF",
			"evidenceIds": [
				"october3c-rolair-fcol22ls6-manual-p10"
			]
		},
		{
			"label": "Périmètre documentaire",
			"value": "Version 120 V 60 Hz, documentation américaine ; commercialisation en France à confirmer",
			"evidenceIds": [
				"october3c-rolair-fcol22ls6-manual-p10"
			]
		}
	],
	"editorial": {
		"overview": "Rolair FCOL22LS6, Groupe mobile avec réservoir intégré, 12,066 bar. 141,584 L/min à 6,205 bar.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Configuration de stockage documentée : 20,8 L.",
			"Pression maximale de fonctionnement publiée : 12,066 bar."
		],
		"limitations": [
			"SCFM déclaré ; les conditions standard exactes ne sont pas définies dans la notice. Aucun rattachement à ISO 1217.",
			"Régime S3 déclaré : cinq minutes de marche suivies de cinq minutes d’arrêt. La limite 50% ne représente pas un service continu.",
			"Version américaine 120 V 60 Hz ; performances et alimentation non transposées à la version européenne 50 Hz.",
			"Seules les pressions documentées sont utilisées. Aucun débit aspiré, prolongement de courbe ou essai physique CompatAir.",
			"Configuration publiée dans la documentation citée ; disponibilité commerciale actuelle à confirmer.",
			"La page espagnole 54 de la notice comporte des valeurs contradictoires pour pression et lubrification ; seules les spécifications anglaises page 10, corroborées en français page 32, sont retenues."
		]
	},
	"evidence": [
		{
			"id": "october3c-rolair-fcol22ls6-manual-p32",
			"sourceUrl": "https://www.rolair.com/sites/default/files/2026-09/FCOL22LS6%20Owner%27s%20Manual.pdf#page=32",
			"sourceLabel": "Rolair FCOL22LS6, notice constructeur, page PDF 32",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 6fe4877f8c0cb40b8248449997691a71308838db59568aa11a6837eca0efdb40 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3c-rolair-fcol22ls6-manual-p10",
			"sourceUrl": "https://www.rolair.com/sites/default/files/2026-09/FCOL22LS6%20Owner%27s%20Manual.pdf#page=10",
			"sourceLabel": "Rolair FCOL22LS6, notice constructeur, page PDF 10",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 6fe4877f8c0cb40b8248449997691a71308838db59568aa11a6837eca0efdb40 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
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
			"october3c-rolair-fcol22ls6-manual-p32"
		],
		"maxPressureBar": [
			"october3c-rolair-fcol22ls6-manual-p10"
		],
		"fadCurve": [
			"october3c-rolair-fcol22ls6-manual-p10",
			"october3c-rolair-fad-definition"
		],
		"oilType": [
			"october3c-rolair-fcol22ls6-manual-p10"
		],
		"dutyCycle": [
			"october3c-rolair-fcol22ls6-manual-p10"
		]
	},
	"notes": [
		"Pression de mesure, pression maximale relative et pression absolue à l’entrée restent distinctes. ISO 1217 n’est revendiquée que pour les sources qui le citent."
	]
};

export default product;
