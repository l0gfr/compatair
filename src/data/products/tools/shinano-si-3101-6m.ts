import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-3101-6m",
	"slug": "shinano-si-3101-6m",
	"brand": "Shinano",
	"model": "SI-3101-6M",
	"mpn": "SI-3101-6M",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Shinano SI-3101-6M",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-3101-6m.webp",
		"alt": "Repères techniques Shinano SI-3101-6M, référence SI-3101-6M",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=12",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "SI-3101-6M : ponceuse double action de 150 mm, orbite de 5 mm et plateau Velcro M-150H. La SI-3101-6 utilise le plateau Leather P-150H, avec les mêmes 10 000 tr/min et 0,94 kg. Le maximum partagé de 6,2 L/s correspond à 372 L/min, sans pression d’essai appariée.",
		"verifiedFacts": [
			"SI-3101-6M contre SI-3101-6 : même plateau 150 mm, orbite 5 mm, 10 000 tr/min, 0,94 kg et maximum 6,2 L/s ; seul le plateau Velcro/Leather diffère dans la table partagée.",
			"La consommation ne constitue pas un point de dimensionnement tant que ses conditions de mesure ne sont pas établies."
		],
		"limitations": [
			"Le paragraphe Air Supply page 43 est une consigne d’alimentation, pas une preuve du point de mesure du maximum.",
			"Aucune aspiration intégrée n’est transférée depuis les modèles SI-3111/3113 voisins dans le catalogue."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Consigne générale : 0,63 MPa (6,3 bar) au fonctionnement. Elle ne démontre pas la pression de mesure de la consommation publiée.",
			"evidenceIds": [
				"review-20261025-shinano-si-3101-6m-s030"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale, colonne Max Air Consumption : 13.2 CFM / 6.2 L/s, soit 372 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"evidenceIds": [
				"shinano-si-3101-6m-20260926"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Plateau 150 mm, autoagrippant (Velcro) ; orbite 5 mm ; sans aspiration intégrée.",
			"evidenceIds": [
				"shinano-si-3101-6m-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "10000 tr/min",
			"evidenceIds": [
				"shinano-si-3101-6m-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.94 kg",
			"evidenceIds": [
				"shinano-si-3101-6m-20260926"
			]
		},
		{
			"label": "Consommation maximale publiée (pression de mesure non appariée)",
			"value": "372 L/min",
			"evidenceIds": [
				"review-20261025-shinano-si-3101-6m-s030"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-3101-6m-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=12",
			"sourceLabel": "Shinano, catalogue général 2025, p. 12, réf. SI-3101-6M",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 13.2 CFM / 6.2 L/s, soit 372 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-3101-6m-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "review-20261025-shinano-si-3101-6m-s030",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=12",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s030, pages PDF 12, 43",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:27.990842+00:00, SHA-256 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b. SI-3101-6M contre SI-3101-6 : même plateau 150 mm, orbite 5 mm, 10 000 tr/min, 0,94 kg et maximum 6,2 L/s ; seul le plateau Velcro/Leather diffère dans la table partagée. Limite : Le paragraphe Air Supply page 43 est une consigne d’alimentation, pas une preuve du point de mesure du maximum."
		}
	],
	"fieldSources": {
		"mpn": [
			"shinano-si-3101-6m-20260926"
		],
		"workingPressureBar": [
			"shinano-si-3101-6m-20260926-workingpressurebar-1",
			"review-20261025-shinano-si-3101-6m-s030"
		],
		"demandExplanation": [
			"review-20261025-shinano-si-3101-6m-s030"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir.",
		"Relecture proposée du 25 octobre 2026 : Le paragraphe Air Supply page 43 est une consigne d’alimentation, pas une preuve du point de mesure du maximum."
	],
	"demandExplanation": "Consommation maximale publiée de 372 L/min, sans pression de mesure explicitement appariée dans les passages lus. La consigne générale de service de 6,3 bar reste distincte de ce débit ; le profil exige un point de consommation et pression documenté avant de conclure."
};

export default product;
