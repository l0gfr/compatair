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
		"overview": "SI-3101-6M : ponceuse double action de 150 mm avec plateau autoagrippant M-150H. La nomenclature V5 sépare les plateaux 6 pouces M-150H/P-150H des 5 pouces M-125H/P-125H, associés aux SI-3101(M). Vérifier à la fois le diamètre et la fixation évite de commander le plateau de l’autre version ; l’orbite publiée reste de 5 mm.",
		"verifiedFacts": [
			"SI-3101-6M contre SI-3101-6 : même plateau 150 mm, orbite 5 mm, 10 000 tr/min, 0,94 kg et maximum 6,2 L/s ; seul le plateau Velcro/Leather diffère dans la table partagée.",
			"La consommation ne constitue pas un point de dimensionnement tant que ses conditions de mesure ne sont pas établies.",
			"Nomenclature V5 de juillet 2022 : M-150H, 6 pouces Velcro, et P-150H, 6 pouces Leather, pour SI-3101-6(M).",
			"Les M-125H et P-125H de 5 pouces sont repérés pour SI-3101(M), pas comme plateaux standard de la SI-3101-6M."
		],
		"limitations": [
			"Le paragraphe Air Supply page 43 est une consigne d’alimentation, pas une preuve du point de mesure du maximum.",
			"Aucune aspiration intégrée n’est transférée depuis les modèles SI-3111/3113 voisins dans le catalogue.",
			"La nomenclature de juillet 2022 ne certifie pas à elle seule l’interchangeabilité de tous les plateaux ni une conversion de diamètre."
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
		},
		{
			"label": "Plateau autoagrippant 6 pouces",
			"value": "M-150H, repère 48 de la nomenclature",
			"evidenceIds": [
				"reserved-followup-20261025-shinano-si-3101-6m-1"
			]
		},
		{
			"label": "Autre fixation en 6 pouces",
			"value": "P-150H Leather, repère 51",
			"evidenceIds": [
				"reserved-followup-20261025-shinano-si-3101-6m-1"
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
		},
		{
			"id": "reserved-followup-20261025-shinano-si-3101-6m-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/2022/09/SI-3101-6_V5.pdf#page=1",
			"sourceLabel": "Relecture ciblée de la référence, des variantes et des pièces, 25 octobre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Document lu le 25 octobre 2026 ; réponse SHA-256 bb4e987863b48c091f547c1857a88125fb8b209493bf9b8b9254cd452110f913. Portée : identité, références de pièces et limites décrites dans la fiche. Aucun essai physique CompatAir."
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
		],
		"editorial": [
			"reserved-followup-20261025-shinano-si-3101-6m-1"
		],
		"specifications": [
			"reserved-followup-20261025-shinano-si-3101-6m-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir.",
		"Relecture proposée du 25 octobre 2026 : Le paragraphe Air Supply page 43 est une consigne d’alimentation, pas une preuve du point de mesure du maximum."
	],
	"demandExplanation": "Consommation maximale publiée de 372 L/min, sans pression de mesure explicitement appariée dans les passages lus. La consigne générale de service de 6,3 bar reste distincte de ce débit ; le profil exige un point de consommation et pression documenté avant de conclure."
};

export default product;
