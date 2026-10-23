import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "aircraft-airprofi-980-500-10-of-h-pro",
	"slug": "aircraft-airprofi-980-500-10-of-h-pro",
	"brand": "Aircraft",
	"model": "AIRPROFI 980/500/10 OF H PRO",
	"mpn": "2025450",
	"tankLiters": 500,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil-free",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/aircraft-airprofi-980-500-10-of-h-pro.webp",
		"alt": "Repères techniques Aircraft AIRPROFI 980/500/10 OF H PRO, référence 2025450",
		"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-compressors-2026-09-27.json",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit ; fondée sur le relevé fabricant historique conservé par CompatAir"
	},
	"editorial": {
		"overview": "Aircraft AIRPROFI 980/500/10 OF H PRO, référence 2025450 : cuve de 500 L, pression maximale publiée de 10 bar. Aucun débit FAD avec conditions de mesure complètes n’est établi dans les sources retenues ; la compatibilité pneumatique reste indéterminée. Nombre de cylindres : 4. Nombre d’étages : 1.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons. Puissance moteur publiée : 5 kW.",
			"Débit aspiré : 980 L/min, distinct du débit restitué.",
			"Alimentation publiée : 400 V.",
			"Nombre de cylindres : 4.",
			"Nombre d’étages : 1.",
			"Groupe de compression : HOS."
		],
		"limitations": [
			"Une valeur de débit sans pression de mesure associée ne permet pas de construire une courbe FAD. Aucun point n’est estimé.",
			"Le taux de marche continu n’est pas établi dans cette fiche. La disponibilité commerciale reste à confirmer.",
			"La capacité de remplissage et sa pression éventuelle ne sont pas assimilées à un débit FAD certifié. Demander les conditions d’essai et le débit utile à la pression de l’outil.",
			"Écarts entre documents fabricant : Débit aspiré (L/min) : relevé de fiche du 27/09/2026 = 980 ; AIRCRAFT Hauptkatalog 2026/27 = 905. Puissance (kW, qualification à confirmer) : relevé de fiche du 27/09/2026 = 5 ; AIRCRAFT Hauptkatalog 2026/27 = 5,5. Étages de compression : relevé de fiche du 27/09/2026 = 1 ; AIRCRAFT Hauptkatalog 2026/27 = 2."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Débit aspiré déclaré : 980 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée.",
			"evidenceIds": [
				"aircraft-2025450-20260927"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "1810 mm × 600 mm × 1160 mm (L × l × H, approximatives)",
			"evidenceIds": [
				"aircraft-2025450-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "4",
			"evidenceIds": [
				"aircraft-2025450-20260927"
			]
		},
		{
			"label": "Nombre d’étages",
			"value": "1",
			"evidenceIds": [
				"aircraft-2025450-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "HOS",
			"evidenceIds": [
				"aircraft-2025450-20260927"
			]
		},
		{
			"label": "Motorisation publiée",
			"value": "Electric motor",
			"evidenceIds": [
				"aircraft-2025450-20260927"
			]
		},
		{
			"label": "Masse approximative publiée",
			"value": "318 kg",
			"evidenceIds": [
				"aircraft-2025450-20260927"
			]
		},
		{
			"label": "Écart documentaire fabricant",
			"value": "Débit aspiré (L/min) : relevé de fiche du 27/09/2026 = 980 ; AIRCRAFT Hauptkatalog 2026/27 = 905.",
			"evidenceIds": [
				"aircraft-2025450-20260927",
				"aircraft-2025450-documentation-20261023"
			]
		},
		{
			"label": "Écart documentaire fabricant",
			"value": "Puissance (kW, qualification à confirmer) : relevé de fiche du 27/09/2026 = 5 ; AIRCRAFT Hauptkatalog 2026/27 = 5,5.",
			"evidenceIds": [
				"aircraft-2025450-20260927",
				"aircraft-2025450-documentation-20261023"
			]
		},
		{
			"label": "Écart documentaire fabricant",
			"value": "Étages de compression : relevé de fiche du 27/09/2026 = 1 ; AIRCRAFT Hauptkatalog 2026/27 = 2.",
			"evidenceIds": [
				"aircraft-2025450-20260927",
				"aircraft-2025450-documentation-20261023"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2025450-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-compressors-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2025450, réf. 2025450 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Débit aspiré déclaré : 980 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue compressors. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : af866f2323db4015b11fba728e6b8c50093e8998705ae6d1920deac66f83cc62. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2025450-documentation-20261023",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=53",
			"sourceLabel": "AIRCRAFT / Stürmer Maschinen, AIRCRAFT Hauptkatalog 2026/27, p. 53 (article 2025450)",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : OXOMI, portail public MROSE, fournisseur Stürmer 702076. Empreinte PDF SHA-256 : e23fb0d04b5e02e5cff6ecf49c4f2ee74d4f1fb8d646d095c1e29c318754a44a. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2025450-20260927"
		],
		"tankLiters": [
			"aircraft-2025450-20260927"
		],
		"maxPressureBar": [
			"aircraft-2025450-20260927"
		],
		"fadCurve": [
			"aircraft-2025450-20260927"
		],
		"oilType": [
			"aircraft-2025450-20260927"
		],
		"intakeFlowLpm": [
			"aircraft-2025450-20260927"
		],
		"powerKw": [
			"aircraft-2025450-20260927"
		],
		"voltage": [
			"aircraft-2025450-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 980,
	"powerKw": 5,
	"voltage": "400 V"
};

export default product;
