import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "aircraft-airbau-652-100-b-pro",
	"slug": "aircraft-airbau-652-100-b-pro",
	"brand": "Aircraft",
	"model": "AIRBAU 652/100 B PRO",
	"mpn": "2006530",
	"tankLiters": 100,
	"maxPressureBar": 14,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/aircraft-airbau-652-100-b-pro.webp",
		"alt": "Repères techniques Aircraft AIRBAU 652/100 B PRO, référence 2006530",
		"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-compressors-2026-09-27.json",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit ; fondée sur le relevé fabricant historique conservé par CompatAir"
	},
	"editorial": {
		"overview": "AIRBAU 652/100 B PRO, article 2006530 : groupe thermique quatre temps de 6,7 kW, deux étages, cuve de 100 L et maximum de 14 bar. Aircraft publie environ 480 L/min de remplissage à 6 bar et 642 L/min aspirés. L’AIRBAU 480/90 B voisin possède 90 L et un maximum de 10 bar.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons. Puissance moteur publiée : 6,7 kW.",
			"Débit aspiré : 642 L/min, distinct du débit restitué.",
			"Capacité de remplissage approximative : 480 l/min.",
			"Condition de remplissage publiée : à 6 bar de pression de travail.",
			"Nombre de cylindres : 2."
		],
		"limitations": [
			"La pression de remplissage est publiée : 6 bar. La qualification FAD et les conditions d’essai de ce débit restent à obtenir.",
			"Le taux de marche reste inconnu. La motorisation thermique demande le respect des conditions de ventilation, d’installation et d’entretien.",
			"Les 121 kg et 1 050 × 500 × 1 060 mm sont des valeurs approximatives de la fiche. Les capacités des deux références ne sont pas fusionnées.",
			"Écarts entre documents fabricant : Puissance (kW, qualification à confirmer) : relevé de fiche du 27/09/2026 = 6,7 ; AIRCRAFT Hauptkatalog 2026/27 = 5,1."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Débit aspiré déclaré : 642 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée.",
			"evidenceIds": [
				"aircraft-2006530-20260927"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "1050 mm × 500 mm × 1060 mm (L × l × H, approximatives)",
			"evidenceIds": [
				"aircraft-2006530-20260927"
			]
		},
		{
			"label": "Capacité de remplissage approximative",
			"value": "480 l/min",
			"evidenceIds": [
				"aircraft-2006530-20260927"
			]
		},
		{
			"label": "Condition de remplissage publiée",
			"value": "à 6 bar de pression de travail",
			"evidenceIds": [
				"aircraft-2006530-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "2",
			"evidenceIds": [
				"aircraft-2006530-20260927"
			]
		},
		{
			"label": "Nombre d’étages",
			"value": "2",
			"evidenceIds": [
				"aircraft-2006530-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "HOS",
			"evidenceIds": [
				"aircraft-2006530-20260927"
			]
		},
		{
			"label": "Motorisation publiée",
			"value": "1 cylinder / 4-stroke engine",
			"evidenceIds": [
				"aircraft-2006530-20260927"
			]
		},
		{
			"label": "Masse approximative publiée",
			"value": "121 kg",
			"evidenceIds": [
				"aircraft-2006530-20260927"
			]
		},
		{
			"label": "Écart documentaire fabricant",
			"value": "Puissance (kW, qualification à confirmer) : relevé de fiche du 27/09/2026 = 6,7 ; AIRCRAFT Hauptkatalog 2026/27 = 5,1.",
			"evidenceIds": [
				"aircraft-2006530-20260927",
				"aircraft-2006530-documentation-20261023"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2006530-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-compressors-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2006530, réf. 2006530 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Débit aspiré déclaré : 642 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue compressors. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : af866f2323db4015b11fba728e6b8c50093e8998705ae6d1920deac66f83cc62. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2006530-documentation-20261023",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=40",
			"sourceLabel": "AIRCRAFT / Stürmer Maschinen, AIRCRAFT Hauptkatalog 2026/27, p. 40 (article 2006530)",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : OXOMI, portail public MROSE, fournisseur Stürmer 702076. Empreinte PDF SHA-256 : 459fa28d36714ede124eafc3c47a489c5b11835c1a264ded8f7f4073d64822a3. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2006530-20260927"
		],
		"tankLiters": [
			"aircraft-2006530-20260927"
		],
		"maxPressureBar": [
			"aircraft-2006530-20260927"
		],
		"fadCurve": [
			"aircraft-2006530-20260927"
		],
		"oilType": [
			"aircraft-2006530-20260927"
		],
		"intakeFlowLpm": [
			"aircraft-2006530-20260927"
		],
		"powerKw": [
			"aircraft-2006530-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 642,
	"powerKw": 6.7
};

export default product;
