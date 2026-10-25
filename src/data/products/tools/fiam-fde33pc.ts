import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-fde33pc",
	"slug": "fiam-fde33pc",
	"brand": "Fiam",
	"model": "FDE33PC",
	"mpn": "124611562",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Fiam FDE33PC",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-fde33pc.webp",
		"alt": "Repères techniques Fiam FDE33PC, référence 124611562",
		"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fde33pc/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "FDE33PC, commande 124611562 : perceuse pistolet à mandrin à clé de 1 à 10 mm, 3 300 tr/min et 10 L/s publiés. La FDE26PC conserve le même format et le même débit annoncé, à 2 600 tr/min. La fiche actuelle donne 0,95 kg ; le catalogue détaille 0,945 kg.",
		"verifiedFacts": [
			"FDE33PC et FDE26PC : mandrin à clé de 1–10 mm et même format 38 × 200 × 155 mm ; vitesses 3 300 et 2 600 tr/min, même consommation de 10 L/s. La fiche HTML arrondit la masse à 0,95 kg ; le catalogue indique 0,945 kg.",
			"Le régime de la consommation publiée n’est pas précisé ; cette valeur n’est pas assimilée à un maximum de travail."
		],
		"limitations": [
			"Les données sont publiées à 6,3 bar, sans qualification du régime des 10 L/s.",
			"La note de masse est un écart de précision publié, pas une preuve de changement de version.",
			"Aucun diamètre de perçage dans un matériau donné n’est garanti depuis la seule capacité du mandrin."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"evidenceIds": [
				"fiam-124611562-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-124611562-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "3300 tr/min",
			"evidenceIds": [
				"fiam-124611562-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.95 kg",
			"evidenceIds": [
				"fiam-124611562-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 38 x L 200 x H 155 mm",
			"evidenceIds": [
				"fiam-124611562-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Push button",
			"evidenceIds": [
				"fiam-124611562-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-124611562-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fde33pc/",
			"sourceLabel": "Fiam, fiche technique FDE33PC, réf. 124611562",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-124611562-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-34.pdf#page=13",
			"sourceLabel": "Fiam, brochure technique en-34, p. 13",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		},
		{
			"id": "review-20261025-fiam-fde33pc-s051",
			"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fde33pc/",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s051, section technique de la référence",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:37.179871+00:00, SHA-256 f5eb666c3ecffb5bd5b8dcdf0fc92e7bf5584deeed09d6b9e35990b37ea05d82. FDE33PC et FDE26PC : mandrin à clé de 1–10 mm et même format 38 × 200 × 155 mm ; vitesses 3 300 et 2 600 tr/min, même consommation de 10 L/s. La fiche HTML arrondit la masse à 0,95 kg ; le catalogue indique 0,945 kg. Limite : Les données sont publiées à 6,3 bar, sans qualification du régime des 10 L/s ; ajouter airflowBasis=unqualified."
		},
		{
			"id": "review-20261025-fiam-fde33pc-s052",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-34.pdf#page=13",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s052, pages PDF 13",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:37.272656+00:00, SHA-256 4bc7b8a199880ed886511848f97c3d61ae9b8a50dbb5f0f0318dddc819dcbf62. FDE33PC et FDE26PC : mandrin à clé de 1–10 mm et même format 38 × 200 × 155 mm ; vitesses 3 300 et 2 600 tr/min, même consommation de 10 L/s. La fiche HTML arrondit la masse à 0,95 kg ; le catalogue indique 0,945 kg. Limite : Les données sont publiées à 6,3 bar, sans qualification du régime des 10 L/s ; ajouter airflowBasis=unqualified."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-124611562-20260926"
		],
		"workingPressureBar": [
			"fiam-124611562-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-124611562-20260926",
			"review-20261025-fiam-fde33pc-s051",
			"review-20261025-fiam-fde33pc-s052"
		],
		"airflowBasis": [
			"review-20261025-fiam-fde33pc-s051",
			"review-20261025-fiam-fde33pc-s052"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir.",
		"Relecture proposée du 25 octobre 2026 : Les données sont publiées à 6,3 bar, sans qualification du régime des 10 L/s ; ajouter airflowBasis=unqualified."
	],
	"airflowLpm": {
		"min": 600,
		"typical": 600,
		"max": 600
	},
	"airflowBasis": "unqualified"
};

export default product;
