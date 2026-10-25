import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-3007",
	"slug": "shinano-si-3007",
	"brand": "Shinano",
	"model": "SI-3007",
	"mpn": "SI-3007",
	"categoryId": "ponceuse-vibrante",
	"category": "ponceuse-vibrante",
	"label": "Shinano SI-3007",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-3007.webp",
		"alt": "Repères techniques Shinano SI-3007, référence SI-3007",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=13",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "SI-3007 : ponceuse à plateau rectangulaire de 95 × 175 mm, orbite de 5 mm et papier de 100 × 180 mm. La SI-3007M conserve les 11 000 tr/min et la masse de 1,82 kg, avec un plateau autoagrippant. Le catalogue partage entre elles un maximum de 7,9 L/s.",
		"verifiedFacts": [
			"SI-3007 contre SI-3007M : même plateau 95 × 175 mm, orbite 5 mm, 11 000 tr/min, 1,82 kg et maximum 7,9 L/s ; la M désigne le plateau autoagrippant plutôt que le plateau Leather/à fixation mécanique de la version standard.",
			"La consommation ne constitue pas un point de dimensionnement tant que ses conditions de mesure ne sont pas établies."
		],
		"limitations": [
			"474 L/min est publié hors calcul : pression d’essai du maximum non appariée."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Consigne générale : 0,63 MPa (6,3 bar) au fonctionnement. Elle ne démontre pas la pression de mesure de la consommation publiée.",
			"evidenceIds": [
				"review-20261025-shinano-si-3007-s030"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 16.8 CFM / 7.9 L/s. Conversion du maximum publié : 7.9 × 60 = 474 L/min.",
			"evidenceIds": [
				"shinano-si-3007-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "11 000 tr/min",
			"evidenceIds": [
				"shinano-si-3007-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,82 kg",
			"evidenceIds": [
				"shinano-si-3007-20260926"
			]
		},
		{
			"label": "Consommation maximale publiée (pression de mesure non appariée)",
			"value": "474 L/min",
			"evidenceIds": [
				"review-20261025-shinano-si-3007-s030"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-3007-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=13",
			"sourceLabel": "Shinano, catalogue général 2025, p. 13, réf. SI-3007",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 16.8 CFM / 7.9 L/s. Conversion du maximum publié : 7.9 × 60 = 474 L/min."
		},
		{
			"id": "shinano-si-3007-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "review-20261025-shinano-si-3007-s030",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=13",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s030, pages PDF 13, 43",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:27.990842+00:00, SHA-256 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b. SI-3007 contre SI-3007M : même plateau 95 × 175 mm, orbite 5 mm, 11 000 tr/min, 1,82 kg et maximum 7,9 L/s ; la M désigne le plateau autoagrippant plutôt que le plateau Leather/à fixation mécanique de la version standard. Limite : 474 L/min est publié hors calcul : pression d’essai du maximum non appariée."
		}
	],
	"fieldSources": {
		"mpn": [
			"shinano-si-3007-20260926"
		],
		"workingPressureBar": [
			"shinano-si-3007-20260926-workingpressurebar-1",
			"review-20261025-shinano-si-3007-s030"
		],
		"demandExplanation": [
			"review-20261025-shinano-si-3007-s030"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir.",
		"Relecture proposée du 25 octobre 2026 : 474 L/min est publié hors calcul : pression d’essai du maximum non appariée."
	],
	"demandExplanation": "Consommation maximale publiée de 474 L/min, sans pression de mesure explicitement appariée dans les passages lus. La consigne générale de service de 6,3 bar reste distincte de ce débit ; le profil exige un point de consommation et pression documenté avant de conclure."
};

export default product;
