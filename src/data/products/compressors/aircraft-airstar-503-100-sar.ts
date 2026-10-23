import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "aircraft-airstar-503-100-sar",
	"slug": "aircraft-airstar-503-100-sar",
	"brand": "Aircraft",
	"model": "AIRSTAR 503/100 SAR",
	"mpn": "2009531SAR",
	"tankLiters": 100,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/aircraft-airstar-503-100-sar.webp",
		"alt": "Repères techniques Aircraft AIRSTAR 503/100 SAR, référence 2009531SAR",
		"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-compressors-2026-09-27.json",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit ; fondée sur le relevé fabricant historique conservé par CompatAir"
	},
	"editorial": {
		"overview": "Aircraft AIRSTAR 503/100 SAR, référence 2009531SAR : cuve de 100 L, pression maximale publiée de 10 bar. Aucun débit FAD avec conditions de mesure complètes n’est établi dans les sources retenues ; la compatibilité pneumatique reste indéterminée. Capacité de remplissage approximative : 400 l/min. Condition de remplissage publiée : à 6 bar de pression de travail.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons. Puissance moteur publiée : 3 kW.",
			"Débit aspiré : 510 L/min, distinct du débit restitué.",
			"Alimentation publiée : 400 V.",
			"Capacité de remplissage approximative : 400 l/min.",
			"Condition de remplissage publiée : à 6 bar de pression de travail.",
			"Nombre de cylindres : 2."
		],
		"limitations": [
			"Une valeur de débit sans pression de mesure associée ne permet pas de construire une courbe FAD. Aucun point n’est estimé.",
			"Le taux de marche continu n’est pas établi dans cette fiche. La disponibilité commerciale reste à confirmer.",
			"La capacité de remplissage et sa pression éventuelle ne sont pas assimilées à un débit FAD certifié. Demander les conditions d’essai et le débit utile à la pression de l’outil.",
			"Écarts entre documents fabricant : Puissance (kW, qualification à confirmer) : relevé de fiche du 27/09/2026 = 3 ; AIRCRAFT Hauptkatalog 2026/27 = 3,7. Masse approximative (kg) : relevé de fiche du 27/09/2026 = 78,2 ; AIRCRAFT Hauptkatalog 2026/27 = 81,5."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Débit aspiré déclaré : 510 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée.",
			"evidenceIds": [
				"aircraft-2009531sar-20260927"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "1125 mm × 540 mm × 925 mm (L × l × H, approximatives)",
			"evidenceIds": [
				"aircraft-2009531sar-20260927"
			]
		},
		{
			"label": "Capacité de remplissage approximative",
			"value": "400 l/min",
			"evidenceIds": [
				"aircraft-2009531sar-20260927"
			]
		},
		{
			"label": "Condition de remplissage publiée",
			"value": "à 6 bar de pression de travail",
			"evidenceIds": [
				"aircraft-2009531sar-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "2",
			"evidenceIds": [
				"aircraft-2009531sar-20260927"
			]
		},
		{
			"label": "Nombre d’étages",
			"value": "1",
			"evidenceIds": [
				"aircraft-2009531sar-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "HOS",
			"evidenceIds": [
				"aircraft-2009531sar-20260927"
			]
		},
		{
			"label": "Masse approximative publiée",
			"value": "78,2 kg",
			"evidenceIds": [
				"aircraft-2009531sar-20260927"
			]
		},
		{
			"label": "Écart documentaire fabricant",
			"value": "Puissance (kW, qualification à confirmer) : relevé de fiche du 27/09/2026 = 3 ; AIRCRAFT Hauptkatalog 2026/27 = 3,7.",
			"evidenceIds": [
				"aircraft-2009531sar-20260927",
				"aircraft-2009531sar-documentation-20261023"
			]
		},
		{
			"label": "Écart documentaire fabricant",
			"value": "Masse approximative (kg) : relevé de fiche du 27/09/2026 = 78,2 ; AIRCRAFT Hauptkatalog 2026/27 = 81,5.",
			"evidenceIds": [
				"aircraft-2009531sar-20260927",
				"aircraft-2009531sar-documentation-20261023"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2009531sar-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-compressors-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2009531SAR, réf. 2009531SAR ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Débit aspiré déclaré : 510 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue compressors. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : af866f2323db4015b11fba728e6b8c50093e8998705ae6d1920deac66f83cc62. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2009531sar-documentation-20261023",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=44",
			"sourceLabel": "AIRCRAFT / Stürmer Maschinen, AIRCRAFT Hauptkatalog 2026/27, p. 44 (article 2009531SAR)",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : OXOMI, portail public MROSE, fournisseur Stürmer 702076. Empreinte PDF SHA-256 : 8aec14b296608c6dcca05167f02574f9d298fea3adf0307cf8e0e6d0d35b2c61. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2009531sar-20260927"
		],
		"tankLiters": [
			"aircraft-2009531sar-20260927"
		],
		"maxPressureBar": [
			"aircraft-2009531sar-20260927"
		],
		"fadCurve": [
			"aircraft-2009531sar-20260927"
		],
		"oilType": [
			"aircraft-2009531sar-20260927"
		],
		"intakeFlowLpm": [
			"aircraft-2009531sar-20260927"
		],
		"powerKw": [
			"aircraft-2009531sar-20260927"
		],
		"voltage": [
			"aircraft-2009531sar-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 510,
	"powerKw": 3,
	"voltage": "400 V"
};

export default product;
