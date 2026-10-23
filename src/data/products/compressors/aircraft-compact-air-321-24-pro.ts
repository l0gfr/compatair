import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "aircraft-compact-air-321-24-pro",
	"slug": "aircraft-compact-air-321-24-pro",
	"brand": "Aircraft",
	"model": "COMPACT-AIR 321/24 PRO",
	"mpn": "2005352",
	"tankLiters": 24,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/aircraft-compact-air-321-24-pro.webp",
		"alt": "Repères techniques Aircraft COMPACT-AIR 321/24 PRO, référence 2005352",
		"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-compressors-2026-09-27.json",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit ; fondée sur le relevé fabricant historique conservé par CompatAir"
	},
	"editorial": {
		"overview": "Aircraft COMPACT-AIR 321/24 PRO, référence 2005352 : cuve de 24 L, pression maximale publiée de 10 bar. Aucun débit FAD avec conditions de mesure complètes n’est établi dans les sources retenues ; la compatibilité pneumatique reste indéterminée. Capacité de remplissage approximative : 240 l/min. Condition de remplissage publiée : à 6 bar de pression de travail.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons. Puissance moteur publiée : 2,2 kW.",
			"Débit aspiré : 310 L/min, distinct du débit restitué.",
			"Alimentation publiée : 230 V.",
			"Capacité de remplissage approximative : 240 l/min.",
			"Condition de remplissage publiée : à 6 bar de pression de travail.",
			"Nombre de cylindres : 2."
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
			"value": "Débit aspiré déclaré : 310 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée.",
			"evidenceIds": [
				"aircraft-2005352-20260927"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "600 mm × 640 mm × 980 mm (L × l × H, approximatives)",
			"evidenceIds": [
				"aircraft-2005352-20260927"
			]
		},
		{
			"label": "Capacité de remplissage approximative",
			"value": "240 l/min",
			"evidenceIds": [
				"aircraft-2005352-20260927"
			]
		},
		{
			"label": "Condition de remplissage publiée",
			"value": "à 6 bar de pression de travail",
			"evidenceIds": [
				"aircraft-2005352-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "2",
			"evidenceIds": [
				"aircraft-2005352-20260927"
			]
		},
		{
			"label": "Nombre d’étages",
			"value": "1",
			"evidenceIds": [
				"aircraft-2005352-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "HOS",
			"evidenceIds": [
				"aircraft-2005352-20260927"
			]
		},
		{
			"label": "Masse approximative publiée",
			"value": "51 kg",
			"evidenceIds": [
				"aircraft-2005352-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2005352-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-compressors-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2005352, réf. 2005352 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Débit aspiré déclaré : 310 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue compressors. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : af866f2323db4015b11fba728e6b8c50093e8998705ae6d1920deac66f83cc62. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2005352-documentation-20261023",
			"sourceUrl": "https://drehen-fraesen-bohren.de/dokumente/Betriebsanleitung-Aircraft-COMPACT-AIR-321-24PRO_DE.pdf#page=6",
			"sourceLabel": "AIRCRAFT Kompressorenbau und Maschinenhandel GmbH, Notice 2020-11-11, version 1.01, p. 6 (article 2005352)",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : retailer-mirror-drehen-fraesen-bohren. Empreinte PDF SHA-256 : 8bb68056287d4a2d475ed61d4d6ac7869103caa0879f579dd1a36b86aaab4af2. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2005352-20260927"
		],
		"tankLiters": [
			"aircraft-2005352-20260927"
		],
		"maxPressureBar": [
			"aircraft-2005352-20260927"
		],
		"fadCurve": [
			"aircraft-2005352-20260927"
		],
		"oilType": [
			"aircraft-2005352-20260927"
		],
		"intakeFlowLpm": [
			"aircraft-2005352-20260927"
		],
		"powerKw": [
			"aircraft-2005352-20260927"
		],
		"voltage": [
			"aircraft-2005352-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 310,
	"powerKw": 2.2,
	"voltage": "230 V"
};

export default product;
