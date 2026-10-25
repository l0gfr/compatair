import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-1166a",
	"slug": "shinano-si-1166a",
	"brand": "Shinano",
	"model": "SI-1166A",
	"mpn": "SI-1166A",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Shinano SI-1166A",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-1166a.webp",
		"alt": "Repères techniques Shinano SI-1166A, référence SI-1166A",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=8",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "SI-1166A : visseuse pistolet à embrayage réglable, couple de travail 1,5–5 Nm et vitesse à vide de 2 000 tr/min. La SI-1166-8A monte à 9 Nm mais tourne à 800 tr/min. Les maxima déclarés sont respectivement de 9,9 et 9,3 L/s ; ils restent hors calcul tant que leur pression de mesure n’est pas établie.",
		"verifiedFacts": [
			"SI-1166A contre SI-1166-8A : couple maximal 5 contre 9 Nm, vitesse 2 000 contre 800 tr/min, masse 1,18 contre 1,35 kg. Max Air Consumption 9,9 contre 9,3 L/s ; la pression de mesure de ces maxima n’est pas appariée.",
			"La consommation ne constitue pas un point de dimensionnement tant que ses conditions de mesure ne sont pas établies."
		],
		"limitations": [
			"La prescription générale de 0,63 MPa page 43 concerne l’alimentation ; elle ne constitue pas la pression d’essai du maximum page 8.",
			"Publier 594 L/min comme conversion du maximum déclaré, sans point FAD requis ni réduction par une moyenne."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Consigne générale : 0,63 MPa (6,3 bar) au fonctionnement. Elle ne démontre pas la pression de mesure de la consommation publiée.",
			"evidenceIds": [
				"review-20261025-shinano-si-1166a-s030"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 21 CFM / 9.9 L/s. Conversion du maximum publié : 9.9 × 60 = 594 L/min.",
			"evidenceIds": [
				"shinano-si-1166a-20260926"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "5.0 Nm",
			"evidenceIds": [
				"shinano-si-1166a-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "2 000 tr/min",
			"evidenceIds": [
				"shinano-si-1166a-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,18 kg",
			"evidenceIds": [
				"shinano-si-1166a-20260926"
			]
		},
		{
			"label": "Consommation maximale publiée (pression de mesure non appariée)",
			"value": "594 L/min",
			"evidenceIds": [
				"review-20261025-shinano-si-1166a-s030"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-1166a-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=8",
			"sourceLabel": "Shinano, catalogue général 2025, p. 8, réf. SI-1166A",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 21 CFM / 9.9 L/s. Conversion du maximum publié : 9.9 × 60 = 594 L/min."
		},
		{
			"id": "shinano-si-1166a-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "review-20261025-shinano-si-1166a-s030",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=8",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s030, pages PDF 8, 43",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:27.990842+00:00, SHA-256 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b. SI-1166A contre SI-1166-8A : couple maximal 5 contre 9 Nm, vitesse 2 000 contre 800 tr/min, masse 1,18 contre 1,35 kg. Max Air Consumption 9,9 contre 9,3 L/s ; la pression de mesure de ces maxima n’est pas appariée. Limite : La prescription générale de 0,63 MPa page 43 concerne l’alimentation ; elle ne constitue pas la pression d’essai du maximum page 8."
		}
	],
	"fieldSources": {
		"mpn": [
			"shinano-si-1166a-20260926"
		],
		"workingPressureBar": [
			"shinano-si-1166a-20260926-workingpressurebar-1",
			"review-20261025-shinano-si-1166a-s030"
		],
		"demandExplanation": [
			"review-20261025-shinano-si-1166a-s030"
		],
		"connectorSize": [
			"review-20261025-shinano-si-1166a-s030"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir.",
		"Relecture proposée du 25 octobre 2026 : La prescription générale de 0,63 MPa page 43 concerne l’alimentation ; elle ne constitue pas la pression d’essai du maximum page 8."
	],
	"connectorSize": "1/4\"",
	"demandExplanation": "Consommation maximale publiée de 594 L/min, sans pression de mesure explicitement appariée dans les passages lus. La consigne générale de service de 6,3 bar reste distincte de ce débit ; le profil exige un point de consommation et pression documenté avant de conclure."
};

export default product;
