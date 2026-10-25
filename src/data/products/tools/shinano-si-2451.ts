import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-2451",
	"slug": "shinano-si-2451",
	"brand": "Shinano",
	"model": "SI-2451",
	"mpn": "SI-2451",
	"categoryId": "polisseuse",
	"category": "polisseuse",
	"label": "Shinano SI-2451",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-2451.webp",
		"alt": "Repères techniques Shinano SI-2451, référence SI-2451",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=18",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "SI-2451 : polisseuse à rotation simple, plateau de 180 mm et broche mâle 5/8-11 UNC. Elle tourne à 2 300 tr/min pour 482 W et 2,13 kg. La SI-2400 conserve le même format de plateau, à 2 000 tr/min, 511 W et 2,24 kg. Le maximum d’air publié passe de 11,3 à 11,0 L/s.",
		"verifiedFacts": [
			"SI-2451 et SI-2400 : même plateau 180 mm et broche mâle 5/8-11 UNC ; 2 300 contre 2 000 tr/min, 482 contre 511 W et 2,13 contre 2,24 kg. Maxima 11,0 contre 11,3 L/s.",
			"La consommation ne constitue pas un point de dimensionnement tant que ses conditions de mesure ne sont pas établies."
		],
		"limitations": [
			"660 L/min convertis depuis 11 L/s ne forment pas un point de fonctionnement à 6,3 bar démontré.",
			"Aucun rendement de polissage ou résultat de surface n’est déduit de la seule vitesse."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Consigne générale : 0,63 MPa (6,3 bar) au fonctionnement. Elle ne démontre pas la pression de mesure de la consommation publiée.",
			"evidenceIds": [
				"review-20261025-shinano-si-2451-s030"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale, colonne Max Air Consumption : 23.4 CFM / 11 L/s, soit 660 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"evidenceIds": [
				"shinano-si-2451-20260926"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Rotation simple ; plateau 180 mm ; broche mâle 5/8-11 UNC.",
			"evidenceIds": [
				"shinano-si-2451-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "2300 tr/min",
			"evidenceIds": [
				"shinano-si-2451-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2.13 kg",
			"evidenceIds": [
				"shinano-si-2451-20260926"
			]
		},
		{
			"label": "Consommation maximale publiée (pression de mesure non appariée)",
			"value": "660 L/min",
			"evidenceIds": [
				"review-20261025-shinano-si-2451-s030"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-2451-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=18",
			"sourceLabel": "Shinano, catalogue général 2025, p. 18, réf. SI-2451",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 23.4 CFM / 11 L/s, soit 660 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-2451-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "review-20261025-shinano-si-2451-s030",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=18",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s030, pages PDF 18, 43",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:27.990842+00:00, SHA-256 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b. SI-2451 et SI-2400 : même plateau 180 mm et broche mâle 5/8-11 UNC ; 2 300 contre 2 000 tr/min, 482 contre 511 W et 2,13 contre 2,24 kg. Maxima 11,0 contre 11,3 L/s. Limite : 660 L/min convertis depuis 11 L/s ne forment pas un point de fonctionnement à 6,3 bar démontré."
		}
	],
	"fieldSources": {
		"mpn": [
			"shinano-si-2451-20260926"
		],
		"workingPressureBar": [
			"shinano-si-2451-20260926-workingpressurebar-1",
			"review-20261025-shinano-si-2451-s030"
		],
		"demandExplanation": [
			"review-20261025-shinano-si-2451-s030"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir.",
		"Relecture proposée du 25 octobre 2026 : 660 L/min convertis depuis 11 L/s ne forment pas un point de fonctionnement à 6,3 bar démontré."
	],
	"demandExplanation": "Consommation maximale publiée de 660 L/min, sans pression de mesure explicitement appariée dans les passages lus. La consigne générale de service de 6,3 bar reste distincte de ce débit ; le profil exige un point de consommation et pression documenté avant de conclure."
};

export default product;
