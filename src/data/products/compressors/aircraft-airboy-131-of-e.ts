import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "aircraft-airboy-131-of-e",
	"slug": "aircraft-airboy-131-of-e",
	"brand": "Aircraft",
	"model": "AIRBOY 131 OF E",
	"mpn": "2001225",
	"tankLiters": 6,
	"maxPressureBar": 8,
	"fadCurve": [],
	"oilType": "oil-free",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/aircraft-airboy-131-of-e.webp",
		"alt": "Repères techniques Aircraft AIRBOY 131 OF E, référence 2001225",
		"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-compressors-2026-09-27.json",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit ; fondée sur le relevé fabricant historique conservé par CompatAir"
	},
	"editorial": {
		"overview": "AIRBOY 131 OF E, article 2001225 : cuve de 6 L, maximum de 8 bar, moteur de 0,6 kW et masse approximative de 15,9 kg. Aircraft publie environ 45 L/min de remplissage à 6 bar. L’AIRBOY 186 OF E annonce 90 L/min de remplissage à la même pression pour 1,1 kW et environ 9,2 kg.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons. Puissance moteur publiée : 0,6 kW.",
			"Débit aspiré : 107 L/min, distinct du débit restitué.",
			"Alimentation publiée : 230 V.",
			"Capacité de remplissage approximative : 45 l/min.",
			"Condition de remplissage publiée : à 6 bar de pression de travail.",
			"Nombre de cylindres : 2."
		],
		"limitations": [
			"La pression de remplissage est publiée : 6 bar. La qualification FAD et les conditions complètes d’essai restent à obtenir ; le débit aspiré distinct est de 107 L/min.",
			"Le 131 donne Lp 49 dB(A) à 1 m selon DIN 45635 T13 et Lw 71 dB(A) selon DIN EN ISO 3744. Ces deux grandeurs acoustiques ne se comparent pas directement.",
			"Le taux de marche reste inconnu. Les deux modèles de 6 L se distinguent par le groupe, la masse et le remplissage, sans verdict soutenu déduit de ces seuls chiffres."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Débit aspiré déclaré : 107 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée.",
			"evidenceIds": [
				"aircraft-2001225-20260927"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "345 mm × 340 mm × 315 mm (L × l × H, approximatives)",
			"evidenceIds": [
				"aircraft-2001225-20260927"
			]
		},
		{
			"label": "Capacité de remplissage approximative",
			"value": "45 l/min",
			"evidenceIds": [
				"aircraft-2001225-20260927"
			]
		},
		{
			"label": "Condition de remplissage publiée",
			"value": "à 6 bar de pression de travail",
			"evidenceIds": [
				"aircraft-2001225-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "2",
			"evidenceIds": [
				"aircraft-2001225-20260927"
			]
		},
		{
			"label": "Nombre d’étages",
			"value": "1",
			"evidenceIds": [
				"aircraft-2001225-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "WDS",
			"evidenceIds": [
				"aircraft-2001225-20260927"
			]
		},
		{
			"label": "Masse approximative publiée",
			"value": "15,9 kg",
			"evidenceIds": [
				"aircraft-2001225-20260927"
			]
		},
		{
			"label": "Pression acoustique Lp publiée",
			"value": "49 dB(A) à 1 m, DIN 45635 T13",
			"evidenceIds": [
				"aircraft-2001225-20260927"
			]
		},
		{
			"label": "Puissance acoustique Lw publiée",
			"value": "71 dB(A), DIN EN ISO 3744",
			"evidenceIds": [
				"aircraft-2001225-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2001225-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-compressors-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2001225, réf. 2001225 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Débit aspiré déclaré : 107 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue compressors. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : af866f2323db4015b11fba728e6b8c50093e8998705ae6d1920deac66f83cc62. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2001230-20260927-review-20261019-for-aircraft-airboy-131-of-e",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-compressors-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2001230, réf. 2001230 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-19",
			"confidence": "A",
			"notes": "Fiche voisine consultée en HTTPS le 19 octobre 2026 ; SHA-256 du corps : 49205fb1229863e6dd05baa6be184764800d5c78f88439891ae5f25931ccd26d. Configurations comparées séparément. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue compressors. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : af866f2323db4015b11fba728e6b8c50093e8998705ae6d1920deac66f83cc62. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2001225-documentation-20261023",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=18",
			"sourceLabel": "AIRCRAFT / Stürmer Maschinen, AIRCRAFT Hauptkatalog 2026/27, p. 18 (article 2001225)",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : OXOMI, portail public MROSE, fournisseur Stürmer 702076. Empreinte PDF SHA-256 : e6a138f0979326fc81595d305c5cb777f851161a03a529abb8c3b1efb6033f79. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2001225-20260927"
		],
		"tankLiters": [
			"aircraft-2001225-20260927"
		],
		"maxPressureBar": [
			"aircraft-2001225-20260927"
		],
		"fadCurve": [
			"aircraft-2001225-20260927"
		],
		"oilType": [
			"aircraft-2001225-20260927"
		],
		"intakeFlowLpm": [
			"aircraft-2001225-20260927"
		],
		"powerKw": [
			"aircraft-2001225-20260927"
		],
		"voltage": [
			"aircraft-2001225-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 107,
	"powerKw": 0.6,
	"voltage": "230 V"
};

export default product;
