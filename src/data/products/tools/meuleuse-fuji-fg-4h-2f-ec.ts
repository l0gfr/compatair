const product = {
	"id": "fuji-fg-4h-2f-ec",
	"slug": "meuleuse-fuji-fg-4h-2f-ec",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Fuji FG-4H-2F EC",
	"brand": "Fuji",
	"model": "FG-4H-2F EC",
	"mpn": "5412071539",
	"variant": {
		"familyId": "fuji-449561",
		"label": "FG-4H-2F EC",
		"distinguishingAttributes": {
			"Vitesse à vide": "9500 tr/min",
			"Puissance maximale de l’outil": "690 W",
			"Filetage de sortie": "W1/2-12",
			"Diamètre du disque (mm)": "100",
			"Entrée d’air": "3/8 pouce PT"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 780,
		"typical": 780,
		"max": 780
	},
	"usagePattern": "continuous",
	"connectorSize": "Entrée 3/8 pouce PT, flexible intérieur 12,7 mm sur 5 m",
	"recommendedHose": {
		"innerDiameterMm": 12.7,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/fuji-fg-4h-2f-ec-technical.webp",
		"alt": "Repères techniques Fuji FG-4H-2F EC : 780 L/min en charge, pression de travail 6,3 bar",
		"sourceUrl": "https://www.fujitools.com/en/products/5412071539",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche et la notice Fuji"
	},
	"editorial": {
		"overview": "Fuji FG-4H-2F EC, référence 5412071539, présente une consommation en charge de 13 L/s, soit 780 L/min. La notice liée à cette fiche indique une pression de référence des performances de 6,3 bar. Vitesse à vide : 9500 tr/min. Puissance maximale de l’outil : 690 W.",
		"verifiedFacts": [
			"Vitesse à vide : 9500 tr/min.",
			"Puissance maximale de l’outil : 690 W.",
			"Filetage de sortie : W1/2-12.",
			"Diamètre du disque (mm) : 100.",
			"Entrée 3/8 pouce PT ; flexible de 12,7 mm de diamètre intérieur sur 5 m."
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
			"label": "Vitesse à vide",
			"value": "9500 tr/min",
			"evidenceIds": [
				"fuji-5412071539-official"
			]
		},
		{
			"label": "Puissance maximale de l’outil",
			"value": "690 W",
			"evidenceIds": [
				"fuji-5412071539-official"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "W1/2-12",
			"evidenceIds": [
				"fuji-5412071539-official"
			]
		},
		{
			"label": "Diamètre du disque (mm)",
			"value": "100",
			"evidenceIds": [
				"fuji-5412071539-official"
			]
		},
		{
			"label": "Épaisseur du disque (mm)",
			"value": "19",
			"evidenceIds": [
				"fuji-5412071539-official"
			]
		},
		{
			"label": "Type d’abrasif",
			"value": "Type 1",
			"evidenceIds": [
				"fuji-5412071539-official"
			]
		},
		{
			"label": "Distance du bord à l’axe",
			"value": "26 mm",
			"evidenceIds": [
				"fuji-5412071539-official"
			]
		},
		{
			"label": "Échappement",
			"value": "Latéral",
			"evidenceIds": [
				"fuji-5412071539-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "414 mm",
			"evidenceIds": [
				"fuji-5412071539-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "2.3 kg",
			"evidenceIds": [
				"fuji-5412071539-official"
			]
		}
	],
	"evidence": [
		{
			"id": "fuji-5412071539-official",
			"sourceUrl": "https://www.fujitools.com/en/products/5412071539",
			"sourceLabel": "Fuji, fiche officielle FG-4H-2F EC, réf. 5412071539",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 13 L/s × 60 = 780 L/min. Valeurs brutes, unités et empreinte de la fiche versionnées."
		},
		{
			"id": "fuji-5412071539-pressure-notice",
			"sourceUrl": "https://files.fujitools.com/documentation-files-mv/9502000455_01.pdf#page=1",
			"sourceLabel": "Fuji, notice 9502000455, révision 01, page 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Notice rattachée au MPN exact dans le portail documentaire officiel lié par la fiche. Lecture visuelle du tableau technique : performances données à 0,63 MPa (6,3 bar)."
		}
	],
	"fieldSources": {
		"mpn": [
			"fuji-5412071539-official"
		],
		"airflowLpm": [
			"fuji-5412071539-official"
		],
		"workingPressureBar": [
			"fuji-5412071539-pressure-notice"
		],
		"connectorSize": [
			"fuji-5412071539-official"
		],
		"recommendedHose": [
			"fuji-5412071539-official"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Le filetage PT et le filetage NPT ne sont pas considérés comme interchangeables."
	]
};

export default product;
