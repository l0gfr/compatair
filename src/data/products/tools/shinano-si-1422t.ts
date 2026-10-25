import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-1422t",
	"slug": "shinano-si-1422t",
	"brand": "Shinano",
	"model": "SI-1422T",
	"mpn": "SI-1422T",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Shinano SI-1422T",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-1422t.webp",
		"alt": "Repères techniques Shinano SI-1422T, référence SI-1422T",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=4",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "SI-1422T : clé à chocs 1/2 pouce à enclume prolongée de 2 pouces. Elle annonce 480 Nm maximum et 2,65 kg ; la SI-1420T standard donne 500 Nm et 2,55 kg. Le régime à vide reste de 6 000 tr/min et le maximum publié de 11,3 L/s pour les deux versions.",
		"verifiedFacts": [
			"SI-1422T à enclume prolongée de 2 pouces contre SI-1420T : 480 contre 500 Nm maximum, 2,65 contre 2,55 kg ; mêmes 6 000 tr/min et maximum de 11,3 L/s.",
			"La consommation ne constitue pas un point de dimensionnement tant que ses conditions de mesure ne sont pas établies."
		],
		"limitations": [
			"678 L/min reste hors calcul : la consigne générale de 6,3 bar n’appaire pas la pression de mesure du maximum.",
			"Les 480 Nm maximum et la plage de travail 0–360 Nm sont deux informations distinctes."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Consigne générale : 0,63 MPa (6,3 bar) au fonctionnement. Elle ne démontre pas la pression de mesure de la consommation publiée.",
			"evidenceIds": [
				"review-20261025-shinano-si-1422t-s030"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 24 CFM / 11.3 L/s. Conversion du maximum publié : 11.3 × 60 = 678 L/min.",
			"evidenceIds": [
				"shinano-si-1422t-20260926"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "480 Nm",
			"evidenceIds": [
				"shinano-si-1422t-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "6 000 tr/min",
			"evidenceIds": [
				"shinano-si-1422t-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2,65 kg",
			"evidenceIds": [
				"shinano-si-1422t-20260926"
			]
		},
		{
			"label": "Consommation maximale publiée (pression de mesure non appariée)",
			"value": "678 L/min",
			"evidenceIds": [
				"review-20261025-shinano-si-1422t-s030"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-1422t-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=4",
			"sourceLabel": "Shinano, catalogue général 2025, p. 4, réf. SI-1422T",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 24 CFM / 11.3 L/s. Conversion du maximum publié : 11.3 × 60 = 678 L/min."
		},
		{
			"id": "shinano-si-1422t-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "review-20261025-shinano-si-1422t-s030",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=4",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s030, pages PDF 4, 43",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:27.990842+00:00, SHA-256 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b. SI-1422T à enclume prolongée de 2 pouces contre SI-1420T : 480 contre 500 Nm maximum, 2,65 contre 2,55 kg ; mêmes 6 000 tr/min et maximum de 11,3 L/s. Limite : 678 L/min reste hors calcul : la consigne générale de 6,3 bar n’appaire pas la pression de mesure du maximum."
		}
	],
	"fieldSources": {
		"mpn": [
			"shinano-si-1422t-20260926"
		],
		"workingPressureBar": [
			"shinano-si-1422t-20260926-workingpressurebar-1",
			"review-20261025-shinano-si-1422t-s030"
		],
		"demandExplanation": [
			"review-20261025-shinano-si-1422t-s030"
		],
		"connectorSize": [
			"review-20261025-shinano-si-1422t-s030"
		],
		"recommendedHose": [
			"review-20261025-shinano-si-1422t-s030"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir.",
		"Relecture proposée du 25 octobre 2026 : 678 L/min reste hors calcul : la consigne générale de 6,3 bar n’appaire pas la pression de mesure du maximum."
	],
	"connectorSize": "1/4\"",
	"demandExplanation": "Consommation maximale publiée de 678 L/min, sans pression de mesure explicitement appariée dans les passages lus. La consigne générale de service de 6,3 bar reste distincte de ce débit ; le profil exige un point de consommation et pression documenté avant de conclure.",
	"recommendedHose": {
		"innerDiameterMm": 10
	}
};

export default product;
