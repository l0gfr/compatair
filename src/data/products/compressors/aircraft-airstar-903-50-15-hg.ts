import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "aircraft-airstar-903-50-15-hg",
	"slug": "aircraft-airstar-903-50-15-hg",
	"brand": "Aircraft",
	"model": "AIRSTAR 903/50/15 HG",
	"mpn": "2028725",
	"tankLiters": 50,
	"maxPressureBar": 15,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/aircraft-airstar-903-50-15-hg.webp",
		"alt": "Repères techniques Aircraft AIRSTAR 903/50/15 HG, référence 2028725",
		"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-compressors-2026-09-27.json",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit ; fondée sur le relevé fabricant historique conservé par CompatAir"
	},
	"editorial": {
		"overview": "Aircraft AIRSTAR 903/50/15 HG, référence 2028725 : cuve de 50 L, pression maximale publiée de 15 bar. Aucun débit FAD avec conditions de mesure complètes n’est établi dans les sources retenues ; la compatibilité pneumatique reste indéterminée. Capacité de remplissage approximative : 740 l/min. Nombre de cylindres : 2.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons. Puissance moteur publiée : 8,7 kW.",
			"Débit aspiré : 900 L/min, distinct du débit restitué.",
			"Capacité de remplissage approximative : 740 l/min.",
			"Nombre de cylindres : 2.",
			"Nombre d’étages : 2."
		],
		"limitations": [
			"Une valeur de débit sans pression de mesure associée ne permet pas de construire une courbe FAD. Aucun point n’est estimé.",
			"Le taux de marche continu n’est pas établi dans cette fiche. La disponibilité commerciale reste à confirmer.",
			"La capacité de remplissage et sa pression éventuelle ne sont pas assimilées à un débit FAD certifié. Demander les conditions d’essai et le débit utile à la pression de l’outil."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Débit aspiré déclaré : 900 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée.",
			"evidenceIds": [
				"aircraft-2028725-20260927"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "1250 mm × 600 mm × 1150 mm (L × l × H, approximatives)",
			"evidenceIds": [
				"aircraft-2028725-20260927"
			]
		},
		{
			"label": "Capacité de remplissage approximative",
			"value": "740 l/min",
			"evidenceIds": [
				"aircraft-2028725-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "2",
			"evidenceIds": [
				"aircraft-2028725-20260927"
			]
		},
		{
			"label": "Nombre d’étages",
			"value": "2",
			"evidenceIds": [
				"aircraft-2028725-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "HOS",
			"evidenceIds": [
				"aircraft-2028725-20260927"
			]
		},
		{
			"label": "Masse approximative publiée",
			"value": "186 kg",
			"evidenceIds": [
				"aircraft-2028725-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2028725-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-compressors-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2028725, réf. 2028725 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Débit aspiré déclaré : 900 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue compressors. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : af866f2323db4015b11fba728e6b8c50093e8998705ae6d1920deac66f83cc62. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2028725-documentation-20261023",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=41",
			"sourceLabel": "AIRCRAFT / Stürmer Maschinen, AIRCRAFT Hauptkatalog 2026/27, p. 41 (article 2028725)",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : OXOMI, portail public MROSE, fournisseur Stürmer 702076. Empreinte PDF SHA-256 : 0c729dfc092a39a11ae9495e2af58ed26bd33fd7796d726c7638cb4cc2e1904d. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2028725-20260927"
		],
		"tankLiters": [
			"aircraft-2028725-20260927"
		],
		"maxPressureBar": [
			"aircraft-2028725-20260927"
		],
		"fadCurve": [
			"aircraft-2028725-20260927"
		],
		"oilType": [
			"aircraft-2028725-20260927"
		],
		"intakeFlowLpm": [
			"aircraft-2028725-20260927"
		],
		"powerKw": [
			"aircraft-2028725-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 900,
	"powerKw": 8.7
};

export default product;
