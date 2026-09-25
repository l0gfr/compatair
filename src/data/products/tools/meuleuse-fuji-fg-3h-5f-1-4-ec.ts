const product = {
	"id": "fuji-fg-3h-5f-1-4-ec",
	"slug": "meuleuse-fuji-fg-3h-5f-1-4-ec",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Fuji FG-3H-5F 1-4 EC",
	"brand": "Fuji",
	"model": "FG-3H-5F 1-4 EC",
	"mpn": "5412071518",
	"distributorSkus": [],
	"identifierAliases": [],
	"variant": {
		"familyId": "fuji-449527",
		"label": "FG-3H-5F 1-4 EC",
		"distinguishingAttributes": {
			"Puissance maximale de l’outil": "52 W",
			"Capacité de la pince (mm)": "6.35",
			"Distance du bord à l’axe": "24 mm",
			"Commande": "Levier de sécurité",
			"Entrée d’air": "3/8 pouce PT"
		}
	},
	"connectorSize": "Entrée 3/8 pouce PT, flexible intérieur 9,5 mm sur 5 m",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 9.5,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/fuji-fg-3h-5f-1-4-ec-technical.webp",
		"alt": "Repères techniques Fuji FG-3H-5F 1-4 EC : 552 L/min en charge, pression de travail 6,3 bar",
		"sourceUrl": "https://www.fujitools.com/en/products/5412071518",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche et la notice Fuji"
	},
	"editorial": {
		"overview": "Fuji FG-3H-5F 1-4 EC, référence 5412071518, présente une consommation en charge de 9,2 L/s, soit 552 L/min. La notice liée à cette fiche indique une pression de référence des performances de 6,3 bar. Puissance maximale de l’outil : 52 W. Capacité de la pince (mm) : 6.35.",
		"verifiedFacts": [
			"Puissance maximale de l’outil : 52 W.",
			"Capacité de la pince (mm) : 6.35.",
			"Distance du bord à l’axe : 24 mm.",
			"Commande : Levier de sécurité.",
			"Entrée 3/8 pouce PT ; flexible de 9,5 mm de diamètre intérieur sur 5 m."
		],
		"limitations": [
			"La consommation en charge provient de la fiche individuelle. La notice liée par le fabricant indique une pression de référence des performances de 6,3 bar ; la fiche ne fournit pas de courbe de consommation selon la pression.",
			"Le calcul conserve le débit en charge publié, sans facteur arbitraire réduisant le besoin pour un usage intermittent.",
			"Le diamètre intérieur de flexible publié concerne une longueur de 5 m. Une installation plus longue nécessite de vérifier sa perte de pression.",
			"Le catalogue international distingue des raccords et équipements selon les marchés. La disponibilité en France et la conformité de la référence livrée restent à confirmer auprès du fournisseur."
		]
	},
	"specifications": [
		{
			"label": "Puissance maximale de l’outil",
			"value": "52 W",
			"evidenceIds": [
				"fuji-5412071518-official"
			]
		},
		{
			"label": "Capacité de la pince (mm)",
			"value": "6.35",
			"evidenceIds": [
				"fuji-5412071518-official"
			]
		},
		{
			"label": "Distance du bord à l’axe",
			"value": "24 mm",
			"evidenceIds": [
				"fuji-5412071518-official"
			]
		},
		{
			"label": "Commande",
			"value": "Levier de sécurité",
			"evidenceIds": [
				"fuji-5412071518-official"
			]
		},
		{
			"label": "Échappement",
			"value": "Latéral",
			"evidenceIds": [
				"fuji-5412071518-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "367 mm",
			"evidenceIds": [
				"fuji-5412071518-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "1.46 kg",
			"evidenceIds": [
				"fuji-5412071518-official"
			]
		}
	],
	"evidence": [
		{
			"id": "fuji-5412071518-official",
			"sourceUrl": "https://www.fujitools.com/en/products/5412071518",
			"sourceLabel": "Fuji, fiche officielle FG-3H-5F 1-4 EC, réf. 5412071518",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 9.2 L/s × 60 = 552 L/min. Valeurs brutes, unités et empreinte de la fiche versionnées."
		},
		{
			"id": "fuji-5412071518-pressure-notice",
			"sourceUrl": "https://files.fujitools.com/documentation-files-mv/9502000452_04.pdf#page=1",
			"sourceLabel": "Fuji, notice 9502000452, révision 04, page 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Notice rattachée au MPN exact dans le portail documentaire officiel lié par la fiche. Lecture visuelle du tableau technique : performances données à 0,63 MPa (6,3 bar)."
		}
	],
	"fieldSources": {
		"mpn": [
			"fuji-5412071518-official"
		],
		"airflowLpm": [
			"fuji-5412071518-official"
		],
		"workingPressureBar": [
			"fuji-5412071518-pressure-notice"
		],
		"connectorSize": [
			"fuji-5412071518-official"
		],
		"recommendedHose": [
			"fuji-5412071518-official"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Le filetage PT et le filetage NPT ne sont pas considérés comme interchangeables."
	],
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 552,
		"typical": 552,
		"max": 552
	}
};

export default product;
