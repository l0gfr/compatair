import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-1251",
	"slug": "shinano-si-1251",
	"brand": "Shinano",
	"model": "SI-1251",
	"mpn": "SI-1251",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Shinano SI-1251",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-1251.webp",
		"alt": "Repères techniques Shinano SI-1251, référence SI-1251",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=9",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "SI-1251 : clé à cliquet compacte à carré 1/4 pouce, 45 Nm maximum et plage de travail annoncée de 0 à 33 Nm. La SI-1252 conserve le corps de 0,56 kg et les 200 tr/min, avec un carré 3/8 pouce et 47 Nm maximum. Les deux tableaux donnent 6,8 L/s au maximum.",
		"verifiedFacts": [
			"SI-1251 et SI-1252 : carrés 1/4 et 3/8 pouce, couples maximaux 45 et 47 Nm, même vitesse de 200 tr/min, même masse de 0,56 kg et même maximum de 6,8 L/s.",
			"La consommation ne constitue pas un point de dimensionnement tant que ses conditions de mesure ne sont pas établies."
		],
		"limitations": [
			"408 L/min est une conversion du maximum, dont la pression d’essai n’est pas reliée au tableau.",
			"La consigne d’alimentation de 6,3 bar ne précise pas la pression de mesure des maxima de consommation de ces deux références."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Consigne générale : 0,63 MPa (6,3 bar) au fonctionnement. Elle ne démontre pas la pression de mesure de la consommation publiée.",
			"evidenceIds": [
				"review-20261025-shinano-si-1251-s030"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 14.4 CFM / 6.8 L/s. Conversion du maximum publié : 6.8 × 60 = 408 L/min.",
			"evidenceIds": [
				"shinano-si-1251-20260926"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "45 Nm",
			"evidenceIds": [
				"shinano-si-1251-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "200 tr/min",
			"evidenceIds": [
				"shinano-si-1251-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,56 kg",
			"evidenceIds": [
				"shinano-si-1251-20260926"
			]
		},
		{
			"label": "Consommation maximale publiée (pression de mesure non appariée)",
			"value": "408 L/min",
			"evidenceIds": [
				"review-20261025-shinano-si-1251-s030"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-1251-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=9",
			"sourceLabel": "Shinano, catalogue général 2025, p. 9, réf. SI-1251",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 14.4 CFM / 6.8 L/s. Conversion du maximum publié : 6.8 × 60 = 408 L/min."
		},
		{
			"id": "shinano-si-1251-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "review-20261025-shinano-si-1251-s030",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=9",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s030, pages PDF 9, 43",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:27.990842+00:00, SHA-256 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b. SI-1251 et SI-1252 : carrés 1/4 et 3/8 pouce, couples maximaux 45 et 47 Nm, même vitesse de 200 tr/min, même masse de 0,56 kg et même maximum de 6,8 L/s. Limite : 408 L/min est une conversion du maximum, dont la pression d’essai n’est pas reliée au tableau."
		}
	],
	"fieldSources": {
		"mpn": [
			"shinano-si-1251-20260926"
		],
		"workingPressureBar": [
			"shinano-si-1251-20260926-workingpressurebar-1",
			"review-20261025-shinano-si-1251-s030"
		],
		"demandExplanation": [
			"review-20261025-shinano-si-1251-s030"
		],
		"connectorSize": [
			"review-20261025-shinano-si-1251-s030"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir.",
		"Relecture proposée du 25 octobre 2026 : 408 L/min est une conversion du maximum, dont la pression d’essai n’est pas reliée au tableau."
	],
	"connectorSize": "1/4\"",
	"demandExplanation": "Consommation maximale publiée de 408 L/min, sans pression de mesure explicitement appariée dans les passages lus. La consigne générale de service de 6,3 bar reste distincte de ce débit ; le profil exige un point de consommation et pression documenté avant de conclure."
};

export default product;
