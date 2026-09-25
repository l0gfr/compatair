const product = {
	"id": "fuji-fg-26hl-20n-6",
	"slug": "meuleuse-fuji-fg-26hl-20n-6",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Fuji FG-26HL-20N 6",
	"brand": "Fuji",
	"model": "FG-26HL-20N 6",
	"mpn": "5412105960",
	"distributorSkus": [],
	"identifierAliases": [],
	"variant": {
		"familyId": "fuji-449532",
		"label": "FG-26HL-20N 6",
		"distinguishingAttributes": {
			"Vitesse à vide": "24000 tr/min",
			"Puissance maximale de l’outil": "290 W",
			"Capacité de la pince (mm)": "6",
			"Distance du bord à l’axe": "19 mm",
			"Entrée d’air": "1/4 pouce PT"
		}
	},
	"connectorSize": "Entrée 1/4 pouce PT, flexible intérieur 9,5 mm sur 5 m",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 9.5,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/fuji-fg-26hl-20n-6-technical.webp",
		"alt": "Repères techniques Fuji FG-26HL-20N 6 : 588 L/min en charge, pression de travail 6,3 bar",
		"sourceUrl": "https://www.fujitools.com/en/products/5412105960",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche et la notice Fuji"
	},
	"editorial": {
		"overview": "Fuji FG-26HL-20N 6, référence 5412105960, présente une consommation en charge de 9,8 L/s, soit 588 L/min. La notice liée à cette fiche indique une pression de travail de 6,3 bar. Vitesse à vide : 24000 tr/min. Puissance maximale de l’outil : 290 W.",
		"verifiedFacts": [
			"Vitesse à vide : 24000 tr/min.",
			"Puissance maximale de l’outil : 290 W.",
			"Capacité de la pince (mm) : 6.",
			"Distance du bord à l’axe : 19 mm.",
			"Entrée 1/4 pouce PT ; flexible de 9,5 mm de diamètre intérieur sur 5 m."
		],
		"limitations": [
			"La consommation en charge provient de la fiche individuelle. La notice liée par le fabricant indique une pression de travail de 6,3 bar ; la fiche ne fournit pas de courbe de consommation selon la pression.",
			"Le calcul conserve le débit en charge publié, sans facteur arbitraire réduisant le besoin pour un usage intermittent.",
			"Le diamètre intérieur de flexible publié concerne une longueur de 5 m. Une installation plus longue nécessite de vérifier sa perte de pression.",
			"Le catalogue international distingue des raccords et équipements selon les marchés. La disponibilité en France et la conformité de la référence livrée restent à confirmer auprès du fournisseur."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "24000 tr/min",
			"evidenceIds": [
				"fuji-5412105960-official"
			]
		},
		{
			"label": "Puissance maximale de l’outil",
			"value": "290 W",
			"evidenceIds": [
				"fuji-5412105960-official"
			]
		},
		{
			"label": "Capacité de la pince (mm)",
			"value": "6",
			"evidenceIds": [
				"fuji-5412105960-official"
			]
		},
		{
			"label": "Distance du bord à l’axe",
			"value": "19 mm",
			"evidenceIds": [
				"fuji-5412105960-official"
			]
		},
		{
			"label": "Commande",
			"value": "Commande rotative",
			"evidenceIds": [
				"fuji-5412105960-official"
			]
		},
		{
			"label": "Échappement",
			"value": "Latéral",
			"evidenceIds": [
				"fuji-5412105960-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "273 mm",
			"evidenceIds": [
				"fuji-5412105960-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "0.79 kg",
			"evidenceIds": [
				"fuji-5412105960-official"
			]
		}
	],
	"evidence": [
		{
			"id": "fuji-5412105960-official",
			"sourceUrl": "https://www.fujitools.com/en/products/5412105960",
			"sourceLabel": "Fuji, fiche officielle FG-26HL-20N 6, réf. 5412105960",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 9.8 L/s × 60 = 588 L/min. Valeurs brutes, unités et empreinte de la fiche versionnées."
		},
		{
			"id": "fuji-5412105960-pressure-notice",
			"sourceUrl": "https://www.photos-videos.fujitools.com/content/dam/pim/itba/fuji/technical-documents/update2025/fa-20-4-423/9502000609_05.pdf#page=2",
			"sourceLabel": "Fuji, notice 9502000609, révision 05, page 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Notice explicitement liée à la fiche individuelle. Lecture visuelle : outil conçu pour 0,63 MPa (6,3 bar), à ne pas dépasser en fonctionnement."
		}
	],
	"fieldSources": {
		"mpn": [
			"fuji-5412105960-official"
		],
		"airflowLpm": [
			"fuji-5412105960-official"
		],
		"workingPressureBar": [
			"fuji-5412105960-pressure-notice"
		],
		"connectorSize": [
			"fuji-5412105960-official"
		],
		"recommendedHose": [
			"fuji-5412105960-official"
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
		"min": 588,
		"typical": 588,
		"max": 588
	}
};

export default product;
