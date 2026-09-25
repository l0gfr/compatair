const product = {
	"id": "fuji-fg-5h-1-e",
	"slug": "meuleuse-fuji-fg-5h-1-e",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Fuji FG-5H-1 E",
	"brand": "Fuji",
	"model": "FG-5H-1 E",
	"mpn": "5412052864",
	"distributorSkus": [],
	"identifierAliases": [],
	"variant": {
		"familyId": "fuji-449449",
		"label": "FG-5H-1 E",
		"distinguishingAttributes": {
			"Vitesse à vide": "7600 tr/min",
			"Puissance maximale de l’outil": "960 W",
			"Filetage de sortie": "W1/2-12",
			"Diamètre du disque (mm)": "125",
			"Entrée d’air": "3/8 pouce PT"
		}
	},
	"connectorSize": "Entrée 3/8 pouce PT, flexible intérieur 12,7 mm sur 5 m",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 12.7,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/fuji-fg-5h-1-e-technical.webp",
		"alt": "Repères techniques Fuji FG-5H-1 E : 960 L/min en charge, pression de travail 6,3 bar",
		"sourceUrl": "https://www.fujitools.com/en/products/5412052864",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche et la notice Fuji"
	},
	"editorial": {
		"overview": "Fuji FG-5H-1 E, référence 5412052864, présente une consommation en charge de 16 L/s, soit 960 L/min. La notice liée à cette fiche indique une pression de travail de 6,3 bar. Vitesse à vide : 7600 tr/min. Puissance maximale de l’outil : 960 W.",
		"verifiedFacts": [
			"Vitesse à vide : 7600 tr/min.",
			"Puissance maximale de l’outil : 960 W.",
			"Filetage de sortie : W1/2-12.",
			"Diamètre du disque (mm) : 125.",
			"Entrée 3/8 pouce PT ; flexible de 12,7 mm de diamètre intérieur sur 5 m."
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
			"value": "7600 tr/min",
			"evidenceIds": [
				"fuji-5412052864-official"
			]
		},
		{
			"label": "Puissance maximale de l’outil",
			"value": "960 W",
			"evidenceIds": [
				"fuji-5412052864-official"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "W1/2-12",
			"evidenceIds": [
				"fuji-5412052864-official"
			]
		},
		{
			"label": "Diamètre du disque (mm)",
			"value": "125",
			"evidenceIds": [
				"fuji-5412052864-official"
			]
		},
		{
			"label": "Épaisseur du disque (mm)",
			"value": "19",
			"evidenceIds": [
				"fuji-5412052864-official"
			]
		},
		{
			"label": "Type d’abrasif",
			"value": "Type 1",
			"evidenceIds": [
				"fuji-5412052864-official"
			]
		},
		{
			"label": "Distance du bord à l’axe",
			"value": "29 mm",
			"evidenceIds": [
				"fuji-5412052864-official"
			]
		},
		{
			"label": "Échappement",
			"value": "Latéral",
			"evidenceIds": [
				"fuji-5412052864-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "405 mm",
			"evidenceIds": [
				"fuji-5412052864-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "2.7 kg",
			"evidenceIds": [
				"fuji-5412052864-official"
			]
		}
	],
	"evidence": [
		{
			"id": "fuji-5412052864-official",
			"sourceUrl": "https://www.fujitools.com/en/products/5412052864",
			"sourceLabel": "Fuji, fiche officielle FG-5H-1 E, réf. 5412052864",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 16 L/s × 60 = 960 L/min. Valeurs brutes, unités et empreinte de la fiche versionnées."
		},
		{
			"id": "fuji-5412052864-pressure-notice",
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
			"fuji-5412052864-official"
		],
		"airflowLpm": [
			"fuji-5412052864-official"
		],
		"workingPressureBar": [
			"fuji-5412052864-pressure-notice"
		],
		"connectorSize": [
			"fuji-5412052864-official"
		],
		"recommendedHose": [
			"fuji-5412052864-official"
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
		"min": 960,
		"typical": 960,
		"max": 960
	}
};

export default product;
