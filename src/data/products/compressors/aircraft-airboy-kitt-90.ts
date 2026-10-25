import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "aircraft-airboy-kitt-90",
	"slug": "aircraft-airboy-kitt-90",
	"brand": "Aircraft",
	"model": "AIRBOY KITT 90",
	"mpn": "2001237",
	"tankLiters": 2.4,
	"maxPressureBar": 15,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/aircraft-airboy-kitt-90.webp",
		"alt": "Repères techniques Aircraft AIRBOY KITT 90, référence 2001237",
		"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-compressors-2026-09-27.json",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit ; fondée sur le relevé fabricant historique conservé par CompatAir"
	},
	"editorial": {
		"overview": "L’AIRBOY KITT 90, article 2001237, privilégie un maximum publié de 15 bar avec une cuve de 2,4 L et un moteur de 0,6 kW. L’AIRBOY 262 E, article 2001247, conserve 2,4 L mais annonce 10 bar et 1,5 kW. Le catalogue donne environ 49 et 155 L/min de remplissage à 6 bar. Cette différence aide à distinguer pression maximale et vitesse de remplissage ; elle ne prouve pas une capacité d’alimentation continue d’un outil.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons. Puissance moteur publiée : 0,6 kW.",
			"Débit aspiré : 85 L/min, distinct du débit restitué.",
			"Alimentation publiée : 230 V.",
			"Capacité de remplissage approximative : 49 l/min.",
			"Condition de remplissage publiée : à 6 bar de pression de travail.",
			"Nombre de cylindres : 1."
		],
		"limitations": [
			"La pression du remplissage est connue :6 bar. Sa qualification FAD et les conditions complètes d’essai restent à obtenir ; les courbes FAD ne sont pas reconstituées.",
			"Le débit aspiré 85 L/min du KITT90 est distinct du remplissage 49 L/min. Aucun des deux n’est introduit comme FAD.",
			"Le taux de marche reste inconnu. Le petit réservoir 2,4 L ne constitue pas une preuve d’autonomie au poste.",
			"Le PDF lu contient une page extraite, correspondant à la page 31 du catalogue ; les identités exactes sont vérifiées dans ce tableau."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Débit aspiré déclaré : 85 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée.",
			"evidenceIds": [
				"aircraft-2001237-20260927"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "510 mm × 270 mm × 400 mm (L × l × H, approximatives)",
			"evidenceIds": [
				"aircraft-2001237-20260927"
			]
		},
		{
			"label": "Capacité de remplissage approximative",
			"value": "49 l/min",
			"evidenceIds": [
				"aircraft-2001237-20260927"
			]
		},
		{
			"label": "Condition de remplissage publiée",
			"value": "à 6 bar de pression de travail",
			"evidenceIds": [
				"aircraft-2001237-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "1",
			"evidenceIds": [
				"aircraft-2001237-20260927"
			]
		},
		{
			"label": "Nombre d’étages",
			"value": "1",
			"evidenceIds": [
				"aircraft-2001237-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "HOS",
			"evidenceIds": [
				"aircraft-2001237-20260927"
			]
		},
		{
			"label": "Masse approximative publiée",
			"value": "21 kg",
			"evidenceIds": [
				"aircraft-2001237-20260927"
			]
		},
		{
			"label": "Comparaison documentée et limite de choix",
			"value": "Comparer deux petits réservoirs 2,4 L en séparant priorité à la pression et capacité de remplissage, sans transformer le remplissage en FAD.",
			"evidenceIds": [
				"review-20261025-s071-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2001237-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-compressors-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2001237, réf. 2001237 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Débit aspiré déclaré : 85 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue compressors. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : af866f2323db4015b11fba728e6b8c50093e8998705ae6d1920deac66f83cc62. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2001237-documentation-20261023",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=31",
			"sourceLabel": "AIRCRAFT / Stürmer Maschinen, AIRCRAFT Hauptkatalog 2026/27, p. 31 (article 2001237)",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : OXOMI, portail public MROSE, fournisseur Stürmer 702076. Empreinte PDF SHA-256 : 22bf634228622553d64fea92bd8aa8365896bafadc5209c4b4b51ca9c062e78a. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		},
		{
			"id": "review-20261025-s071-p1",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=31",
			"sourceLabel": "Aircraft, relecture primaire du 25 octobre 2026, s071, page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 22bf634228622553d64fea92bd8aa8365896bafadc5209c4b4b51ca9c062e78a. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir. PDF extrait : page PDF1 correspondant à la page31 du catalogue."
		}
	],
	"fieldSources": {
		"mpn": [
			"review-20261025-s071-p1"
		],
		"tankLiters": [
			"review-20261025-s071-p1"
		],
		"maxPressureBar": [
			"review-20261025-s071-p1"
		],
		"oilType": [
			"aircraft-2001237-20260927"
		],
		"intakeFlowLpm": [
			"review-20261025-s071-p1"
		],
		"powerKw": [
			"review-20261025-s071-p1"
		],
		"voltage": [
			"review-20261025-s071-p1"
		],
		"fadCurve": [
			"review-20261025-s071-p1"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 85,
	"powerKw": 0.6,
	"voltage": "230 V"
};

export default product;
