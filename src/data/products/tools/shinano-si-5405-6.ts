import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-5405-6",
	"slug": "shinano-si-5405-6",
	"brand": "Shinano",
	"model": "SI-5405-6",
	"mpn": "SI-5405-6",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Shinano SI-5405-6",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-5405-6.webp",
		"alt": "Repères techniques Shinano SI-5405-6, référence SI-5405-6",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=23",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "SI-5405-6 : perceuse réversible à mandrin de 13 mm, 600 tr/min et couple maximal annoncé de 10,58 Nm. La SI-5405 de 10 mm atteint 1 500 tr/min et pèse 1,08 kg, contre 1,41 kg pour la version -6. Les tableaux donnent des maxima d’air différents : 6,5 et 6,8 L/s.",
		"verifiedFacts": [
			"SI-5405-6 contre SI-5405 : mandrins 13 et 10 mm, vitesse 600 contre 1 500 tr/min, puissance 186 contre 197 W et masse 1,41 contre 1,08 kg. Maxima 6,5 contre 6,8 L/s.",
			"La consommation ne constitue pas un point de dimensionnement tant que ses conditions de mesure ne sont pas établies."
		],
		"limitations": [
			"390 L/min reste une consommation maximale déclarée sans pression de mesure appariée.",
			"Le suffixe -6 n’est pas déduit d’une convention générale : la capacité 13 mm est vérifiée sur cette ligne exacte."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Consigne générale : 0,63 MPa (6,3 bar) au fonctionnement. Elle ne démontre pas la pression de mesure de la consommation publiée.",
			"evidenceIds": [
				"review-20261025-shinano-si-5405-6-s030"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 13.8 CFM / 6.5 L/s. Conversion du maximum publié : 6.5 × 60 = 390 L/min.",
			"evidenceIds": [
				"shinano-si-5405-6-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "600 tr/min",
			"evidenceIds": [
				"shinano-si-5405-6-20260926"
			]
		},
		{
			"label": "Capacité du mandrin",
			"value": "13 mm",
			"evidenceIds": [
				"shinano-si-5405-6-20260926"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "10.58 Nm",
			"evidenceIds": [
				"shinano-si-5405-6-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,41 kg",
			"evidenceIds": [
				"shinano-si-5405-6-20260926"
			]
		},
		{
			"label": "Consommation maximale publiée (pression de mesure non appariée)",
			"value": "390 L/min",
			"evidenceIds": [
				"review-20261025-shinano-si-5405-6-s030"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-5405-6-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=23",
			"sourceLabel": "Shinano, catalogue général 2025, p. 23, réf. SI-5405-6",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 13.8 CFM / 6.5 L/s. Conversion du maximum publié : 6.5 × 60 = 390 L/min."
		},
		{
			"id": "shinano-si-5405-6-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "review-20261025-shinano-si-5405-6-s030",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=23",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s030, pages PDF 23, 43",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:27.990842+00:00, SHA-256 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b. SI-5405-6 contre SI-5405 : mandrins 13 et 10 mm, vitesse 600 contre 1 500 tr/min, puissance 186 contre 197 W et masse 1,41 contre 1,08 kg. Maxima 6,5 contre 6,8 L/s. Limite : 390 L/min reste une consommation maximale déclarée sans pression de mesure appariée."
		}
	],
	"fieldSources": {
		"mpn": [
			"shinano-si-5405-6-20260926"
		],
		"workingPressureBar": [
			"shinano-si-5405-6-20260926-workingpressurebar-1",
			"review-20261025-shinano-si-5405-6-s030"
		],
		"demandExplanation": [
			"review-20261025-shinano-si-5405-6-s030"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir.",
		"Relecture proposée du 25 octobre 2026 : 390 L/min reste une consommation maximale déclarée sans pression de mesure appariée."
	],
	"demandExplanation": "Consommation maximale publiée de 390 L/min, sans pression de mesure explicitement appariée dans les passages lus. La consigne générale de service de 6,3 bar reste distincte de ce débit ; le profil exige un point de consommation et pression documenté avant de conclure."
};

export default product;
