const product = {
	"id": "fuji-fa-9c-4m-n",
	"slug": "meuleuse-fuji-fa-9c-4m-n",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Fuji FA-9C-4M N",
	"brand": "Fuji",
	"model": "FA-9C-4M N",
	"mpn": "5412052387",
	"distributorSkus": [],
	"identifierAliases": [],
	"variant": {
		"familyId": "fuji-449563",
		"label": "FA-9C-4M N",
		"distinguishingAttributes": {
			"Vitesse à vide": "5900 tr/min",
			"Puissance maximale de l’outil": "1620 W",
			"Filetage de sortie": "5/8-11 UNC",
			"Diamètre du disque (mm)": "230",
			"Entrée d’air": "3/8 pouce NPT"
		}
	},
	"connectorSize": "Entrée 3/8 pouce NPT, flexible intérieur 12 mm sur 5 m",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 12,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/fuji-fa-9c-4m-n-technical.webp",
		"alt": "Repères techniques Fuji FA-9C-4M N : 1 260 L/min en charge, pression de travail 6,3 bar",
		"sourceUrl": "https://www.fujitools.com/en/products/5412052387",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche et la notice Fuji"
	},
	"editorial": {
		"overview": "Fuji FA-9C-4M N, référence 5412052387, présente une consommation en charge de 21 L/s, soit 1 260 L/min. La notice liée à cette fiche indique une pression de travail de 6,3 bar. Vitesse à vide : 5900 tr/min. Puissance maximale de l’outil : 1620 W.",
		"verifiedFacts": [
			"Vitesse à vide : 5900 tr/min.",
			"Puissance maximale de l’outil : 1620 W.",
			"Filetage de sortie : 5/8-11 UNC.",
			"Diamètre du disque (mm) : 230.",
			"Entrée 3/8 pouce NPT ; flexible de 12 mm de diamètre intérieur sur 5 m."
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
			"value": "5900 tr/min",
			"evidenceIds": [
				"fuji-5412052387-official"
			]
		},
		{
			"label": "Puissance maximale de l’outil",
			"value": "1620 W",
			"evidenceIds": [
				"fuji-5412052387-official"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "5/8-11 UNC",
			"evidenceIds": [
				"fuji-5412052387-official"
			]
		},
		{
			"label": "Diamètre du disque (mm)",
			"value": "230",
			"evidenceIds": [
				"fuji-5412052387-official"
			]
		},
		{
			"label": "Alésage de l’abrasif",
			"value": "22.2 mm",
			"evidenceIds": [
				"fuji-5412052387-official"
			]
		},
		{
			"label": "Type d’abrasif",
			"value": "Type 27",
			"evidenceIds": [
				"fuji-5412052387-official"
			]
		},
		{
			"label": "Distance du bord à l’axe",
			"value": "30 mm",
			"evidenceIds": [
				"fuji-5412052387-official"
			]
		},
		{
			"label": "Commande",
			"value": "Levier de sécurité",
			"evidenceIds": [
				"fuji-5412052387-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "385 mm",
			"evidenceIds": [
				"fuji-5412052387-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "4.8 kg",
			"evidenceIds": [
				"fuji-5412052387-official"
			]
		}
	],
	"evidence": [
		{
			"id": "fuji-5412052387-official",
			"sourceUrl": "https://www.fujitools.com/en/products/5412052387",
			"sourceLabel": "Fuji, fiche officielle FA-9C-4M N, réf. 5412052387",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 21 L/s × 60 = 1260 L/min. Valeurs brutes, unités et empreinte de la fiche versionnées."
		},
		{
			"id": "fuji-5412052387-pressure-notice",
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
			"fuji-5412052387-official"
		],
		"airflowLpm": [
			"fuji-5412052387-official"
		],
		"workingPressureBar": [
			"fuji-5412052387-pressure-notice"
		],
		"connectorSize": [
			"fuji-5412052387-official"
		],
		"recommendedHose": [
			"fuji-5412052387-official"
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
		"min": 1260,
		"typical": 1260,
		"max": 1260
	}
};

export default product;
