const product = {
	"id": "fuji-fg-3hl-1-n",
	"slug": "meuleuse-fuji-fg-3hl-1-n",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Fuji FG-3HL-1 N",
	"brand": "Fuji",
	"model": "FG-3HL-1 N",
	"mpn": "5412052835",
	"distributorSkus": [],
	"identifierAliases": [],
	"variant": {
		"familyId": "fuji-449558",
		"label": "FG-3HL-1 N",
		"distinguishingAttributes": {
			"Vitesse à vide": "12000 tr/min",
			"Puissance maximale de l’outil": "520 W",
			"Filetage de sortie": "W3/8-16",
			"Diamètre du disque (mm)": "65",
			"Entrée d’air": "3/8 pouce NPT"
		}
	},
	"connectorSize": "Entrée 3/8 pouce NPT, flexible intérieur 9,5 mm sur 5 m",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 9.5,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/fuji-fg-3hl-1-n-technical.webp",
		"alt": "Repères techniques Fuji FG-3HL-1 N : 552 L/min en charge, pression de travail 6,3 bar",
		"sourceUrl": "https://www.fujitools.com/en/products/5412052835",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche et la notice Fuji"
	},
	"editorial": {
		"overview": "Fuji FG-3HL-1 N, référence 5412052835, présente une consommation en charge de 9,2 L/s, soit 552 L/min. La notice liée à cette fiche indique une pression de travail de 6,3 bar. Vitesse à vide : 12000 tr/min. Puissance maximale de l’outil : 520 W.",
		"verifiedFacts": [
			"Vitesse à vide : 12000 tr/min.",
			"Puissance maximale de l’outil : 520 W.",
			"Filetage de sortie : W3/8-16.",
			"Diamètre du disque (mm) : 65.",
			"Entrée 3/8 pouce NPT ; flexible de 9,5 mm de diamètre intérieur sur 5 m."
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
			"value": "12000 tr/min",
			"evidenceIds": [
				"fuji-5412052835-official"
			]
		},
		{
			"label": "Puissance maximale de l’outil",
			"value": "520 W",
			"evidenceIds": [
				"fuji-5412052835-official"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "W3/8-16",
			"evidenceIds": [
				"fuji-5412052835-official"
			]
		},
		{
			"label": "Diamètre du disque (mm)",
			"value": "65",
			"evidenceIds": [
				"fuji-5412052835-official"
			]
		},
		{
			"label": "Épaisseur du disque (mm)",
			"value": "13",
			"evidenceIds": [
				"fuji-5412052835-official"
			]
		},
		{
			"label": "Type d’abrasif",
			"value": "Type 1",
			"evidenceIds": [
				"fuji-5412052835-official"
			]
		},
		{
			"label": "Distance du bord à l’axe",
			"value": "24 mm",
			"evidenceIds": [
				"fuji-5412052835-official"
			]
		},
		{
			"label": "Échappement",
			"value": "Latéral",
			"evidenceIds": [
				"fuji-5412052835-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "522 mm",
			"evidenceIds": [
				"fuji-5412052835-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "1.8 kg",
			"evidenceIds": [
				"fuji-5412052835-official"
			]
		}
	],
	"evidence": [
		{
			"id": "fuji-5412052835-official",
			"sourceUrl": "https://www.fujitools.com/en/products/5412052835",
			"sourceLabel": "Fuji, fiche officielle FG-3HL-1 N, réf. 5412052835",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 9.2 L/s × 60 = 552 L/min. Valeurs brutes, unités et empreinte de la fiche versionnées."
		},
		{
			"id": "fuji-5412052835-pressure-notice",
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
			"fuji-5412052835-official"
		],
		"airflowLpm": [
			"fuji-5412052835-official"
		],
		"workingPressureBar": [
			"fuji-5412052835-pressure-notice"
		],
		"connectorSize": [
			"fuji-5412052835-official"
		],
		"recommendedHose": [
			"fuji-5412052835-official"
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
