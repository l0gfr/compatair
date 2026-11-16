import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "aircraft-airprofi-401-90-v",
	"slug": "aircraft-airprofi-401-90-v",
	"brand": "Aircraft",
	"model": "AIRPROFI 401/90 V",
	"mpn": "2018414",
	"tankLiters": 90,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/aircraft-airprofi-401-90-v-technical-20261116-reviews.svg",
		"alt": "Repères techniques Aircraft AIRPROFI 401/90 V, référence 2018414",
		"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=48",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"editorial": {
		"overview": "L’AIRPROFI 401/90 V 2018414 associe une cuve verticale de 90 L à une alimentation 230 V. Le catalogue 2026/27 publie 600 × 600 × 1 070 mm et 66 kg ; le relevé historique indiquait 1 030 mm et 77 kg, à vérifier sur la révision livrée. Face au 401/50 P horizontal de 50 L, le stockage et l’encombrement changent, avec les mêmes 365 L/min aspirés et 266 L/min de remplissage approximatif à 6 bar. Ce dernier chiffre reste distinct d’un FAD qualifié.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons. Puissance moteur publiée : 2,2 kW.",
			"Débit aspiré : 365 L/min, distinct du débit restitué.",
			"Alimentation publiée : 230 V.",
			"Capacité de remplissage approximative : 266 l/min.",
			"Condition de remplissage publiée : à 6 bar de pression de travail.",
			"Nombre de cylindres : 2."
		],
		"limitations": [
			"Une valeur de débit sans pression de mesure associée ne permet pas de construire une courbe FAD. Aucun point n’est estimé.",
			"Le taux de marche continu n’est pas établi dans cette fiche. La disponibilité commerciale reste à confirmer.",
			"La capacité de remplissage et sa pression éventuelle ne sont pas assimilées à un débit FAD certifié. Demander les conditions d’essai et le débit utile à la pression de l’outil.",
			"Écarts entre documents fabricant : Dimensions L × l × H (mm) : relevé de fiche du 27/09/2026 = 600 × 600 × 1030 ; AIRCRAFT Hauptkatalog 2026/27 = 600 × 600 × 1070. Masse approximative (kg) : relevé de fiche du 27/09/2026 = 77 ; AIRCRAFT Hauptkatalog 2026/27 = 66."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Débit aspiré déclaré : 365 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée.",
			"evidenceIds": [
				"aircraft-2018414-20260927"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Catalogue 2026/27 : 600 × 600 × 1 070 mm ; relevé historique : 600 × 600 × 1 030 mm, révision livrée à confirmer",
			"evidenceIds": [
				"review:2026-11-16-reviews:aircraft-airprofi-401-90-v:0"
			]
		},
		{
			"label": "Capacité de remplissage approximative",
			"value": "266 l/min",
			"evidenceIds": [
				"aircraft-2018414-20260927"
			]
		},
		{
			"label": "Condition de remplissage publiée",
			"value": "à 6 bar de pression de travail",
			"evidenceIds": [
				"aircraft-2018414-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "2",
			"evidenceIds": [
				"aircraft-2018414-20260927"
			]
		},
		{
			"label": "Nombre d’étages",
			"value": "1",
			"evidenceIds": [
				"aircraft-2018414-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "HOS",
			"evidenceIds": [
				"aircraft-2018414-20260927"
			]
		},
		{
			"label": "Masse approximative publiée",
			"value": "Catalogue 2026/27 : 66 kg ; relevé historique : 77 kg, révision livrée à confirmer",
			"evidenceIds": [
				"review:2026-11-16-reviews:aircraft-airprofi-401-90-v:0"
			]
		},
		{
			"label": "Écart documentaire fabricant",
			"value": "Dimensions L × l × H (mm) : relevé de fiche du 27/09/2026 = 600 × 600 × 1030 ; AIRCRAFT Hauptkatalog 2026/27 = 600 × 600 × 1070.",
			"evidenceIds": [
				"aircraft-2018414-20260927",
				"aircraft-2018414-documentation-20261023"
			]
		},
		{
			"label": "Écart documentaire fabricant",
			"value": "Masse approximative (kg) : relevé de fiche du 27/09/2026 = 77 ; AIRCRAFT Hauptkatalog 2026/27 = 66.",
			"evidenceIds": [
				"aircraft-2018414-20260927",
				"aircraft-2018414-documentation-20261023"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2018414-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-compressors-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2018414, réf. 2018414 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Débit aspiré déclaré : 365 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue compressors. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : af866f2323db4015b11fba728e6b8c50093e8998705ae6d1920deac66f83cc62. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2018414-documentation-20261023",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=48",
			"sourceLabel": "AIRCRAFT / Stürmer Maschinen, AIRCRAFT Hauptkatalog 2026/27, p. 48 (article 2018414)",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : OXOMI, portail public MROSE, fournisseur Stürmer 702076. Empreinte PDF SHA-256 : 3917824170e53035dbe1f3eb1fbfd745f22d0ddb7009209b82efabe2ca9b1e7c. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		},
		{
			"id": "review:2026-11-16-reviews:aircraft-airprofi-401-90-v:0",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=48",
			"sourceLabel": "Aircraft, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "L’AIRPROFI 401/90 V 2018414 associe une cuve verticale de 90 L à une alimentation 230 V. Le catalogue 2026/27 publie 600 × 600 × 1 070 mm et 66 kg ; le relevé historique indiquait 1 030 mm et 77 kg, à vérifier sur la révision livrée. Face au 401/50 P horizontal de 50 L, le stockage et l’encombrement changent, avec les mêmes 365 L/min aspirés et 266 L/min de remplissage approximatif à 6 bar. Ce dernier chiffre reste distinct d’un FAD qualifié. GET complet SHA-256 3917824170e53035dbe1f3eb1fbfd745f22d0ddb7009209b82efabe2ca9b1e7c. Pages PDF lues : 1."
		},
		{
			"id": "review:2026-11-16-reviews:aircraft-airprofi-401-90-v:1",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=46",
			"sourceLabel": "Aircraft, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "L’AIRPROFI 401/90 V 2018414 associe une cuve verticale de 90 L à une alimentation 230 V. Le catalogue 2026/27 publie 600 × 600 × 1 070 mm et 66 kg ; le relevé historique indiquait 1 030 mm et 77 kg, à vérifier sur la révision livrée. Face au 401/50 P horizontal de 50 L, le stockage et l’encombrement changent, avec les mêmes 365 L/min aspirés et 266 L/min de remplissage approximatif à 6 bar. Ce dernier chiffre reste distinct d’un FAD qualifié. GET complet SHA-256 0162403973d0a2407492d73ff211eb8812261b8146dd32cb139c2342ab932ff9. Pages PDF lues : 1."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-16-reviews:aircraft-airprofi-401-90-v:0"
		],
		"tankLiters": [
			"review:2026-11-16-reviews:aircraft-airprofi-401-90-v:0"
		],
		"maxPressureBar": [
			"review:2026-11-16-reviews:aircraft-airprofi-401-90-v:0"
		],
		"fadCurve": [
			"review:2026-11-16-reviews:aircraft-airprofi-401-90-v:0"
		],
		"oilType": [
			"aircraft-2018414-20260927"
		],
		"intakeFlowLpm": [
			"review:2026-11-16-reviews:aircraft-airprofi-401-90-v:0"
		],
		"powerKw": [
			"review:2026-11-16-reviews:aircraft-airprofi-401-90-v:0"
		],
		"voltage": [
			"review:2026-11-16-reviews:aircraft-airprofi-401-90-v:0"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 365,
	"powerKw": 2.2,
	"voltage": "230 V"
};

export default product;
