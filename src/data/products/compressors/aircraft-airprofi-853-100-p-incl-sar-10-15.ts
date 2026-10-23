import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "aircraft-airprofi-853-100-p-incl-sar-10-15",
	"slug": "aircraft-airprofi-853-100-p-incl-sar-10-15",
	"brand": "Aircraft",
	"model": "AIRPROFI 853/100 P incl. SAR 10/15",
	"mpn": "2018831.2SAR",
	"tankLiters": 100,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/aircraft-airprofi-853-100-p-incl-sar-10-15.webp",
		"alt": "Repères techniques Aircraft AIRPROFI 853/100 P incl. SAR 10/15, référence 2018831.2SAR",
		"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-compressors-2026-09-27.json",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit ; fondée sur le relevé fabricant historique conservé par CompatAir"
	},
	"editorial": {
		"overview": "Aircraft AIRPROFI 853/100 P incl. SAR 10/15, référence 2018831.2SAR : cuve de 100 L, pression maximale publiée de 10 bar. Aucun débit FAD avec conditions de mesure complètes n’est établi dans les sources retenues ; la compatibilité pneumatique reste indéterminée. Capacité de remplissage approximative : 680 l/min. Condition de remplissage publiée : à 6 bar de pression de travail.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons. Puissance moteur publiée : 5,5 kW.",
			"Débit aspiré : 850 L/min, distinct du débit restitué.",
			"Alimentation publiée : 400 V.",
			"Capacité de remplissage approximative : 680 l/min.",
			"Condition de remplissage publiée : à 6 bar de pression de travail.",
			"Nombre de cylindres : 2."
		],
		"limitations": [
			"Une valeur de débit sans pression de mesure associée ne permet pas de construire une courbe FAD. Aucun point n’est estimé.",
			"Le taux de marche continu n’est pas établi dans cette fiche. La disponibilité commerciale reste à confirmer.",
			"La capacité de remplissage et sa pression éventuelle ne sont pas assimilées à un débit FAD certifié. Demander les conditions d’essai et le débit utile à la pression de l’outil.",
			"Compresseur de base AIRPROFI853/100P2018831.2 uniquement; le kit2018831.2SAR est identifié dans le relevé fabricant historique, sans confirmation courante du kit."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Débit aspiré déclaré : 850 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée.",
			"evidenceIds": [
				"aircraft-2018831-2sar-20260927"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "1275 mm × 480 mm × 1015 mm (L × l × H, approximatives)",
			"evidenceIds": [
				"aircraft-2018831-2sar-20260927"
			]
		},
		{
			"label": "Capacité de remplissage approximative",
			"value": "680 l/min",
			"evidenceIds": [
				"aircraft-2018831-2sar-20260927"
			]
		},
		{
			"label": "Condition de remplissage publiée",
			"value": "à 6 bar de pression de travail",
			"evidenceIds": [
				"aircraft-2018831-2sar-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "2",
			"evidenceIds": [
				"aircraft-2018831-2sar-20260927"
			]
		},
		{
			"label": "Nombre d’étages",
			"value": "2",
			"evidenceIds": [
				"aircraft-2018831-2sar-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "HOS",
			"evidenceIds": [
				"aircraft-2018831-2sar-20260927"
			]
		},
		{
			"label": "Masse approximative publiée",
			"value": "112 kg",
			"evidenceIds": [
				"aircraft-2018831-2sar-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2018831-2sar-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-compressors-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2018831.2SAR, réf. 2018831.2SAR ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Débit aspiré déclaré : 850 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue compressors. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : af866f2323db4015b11fba728e6b8c50093e8998705ae6d1920deac66f83cc62. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2018831-2sar-documentation-20261023",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=47",
			"sourceLabel": "AIRCRAFT / Stürmer, catalogue 2026/27, p. 47 : AIRPROFI 853/100 P, article 2018831.2 (compresseur de base du kit SAR)",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document consulté le 23/10/2026. Périmètre : compresseur de base AIRPROFI853/100P2018831.2 uniquement; le kit2018831.2SAR est identifié dans le relevé fabricant historique, sans confirmation courante du kit. PDF SHA-256 : 8544306e40e04cbcc3e1f4ee86577108fc9409292151d9cd67567f124dd282b2."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2018831-2sar-20260927"
		],
		"tankLiters": [
			"aircraft-2018831-2sar-20260927"
		],
		"maxPressureBar": [
			"aircraft-2018831-2sar-20260927"
		],
		"fadCurve": [
			"aircraft-2018831-2sar-20260927"
		],
		"oilType": [
			"aircraft-2018831-2sar-20260927"
		],
		"intakeFlowLpm": [
			"aircraft-2018831-2sar-20260927"
		],
		"powerKw": [
			"aircraft-2018831-2sar-20260927"
		],
		"voltage": [
			"aircraft-2018831-2sar-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 850,
	"powerKw": 5.5,
	"voltage": "400 V"
};

export default product;
