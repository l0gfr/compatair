const product = {
	"id": "fuji-fg-13-1f-3",
	"slug": "meuleuse-fuji-fg-13-1f-3",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Fuji FG-13-1F 3",
	"brand": "Fuji",
	"model": "FG-13-1F 3",
	"mpn": "5412052717",
	"distributorSkus": [],
	"identifierAliases": [],
	"variant": {
		"familyId": "fuji-449441",
		"label": "FG-13-1F 3",
		"distinguishingAttributes": {
			"Vitesse à vide": "30000 tr/min",
			"Puissance maximale de l’outil": "140 W",
			"Capacité de la pince (mm)": "3",
			"Distance du bord à l’axe": "16 mm",
			"Entrée d’air": "1/4 pouce PT"
		}
	},
	"connectorSize": "Entrée 1/4 pouce PT, flexible intérieur 6,3 mm sur 5 m",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 6.3,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/fuji-fg-13-1f-3-technical.webp",
		"alt": "Repères techniques Fuji FG-13-1F 3 : 252 L/min en charge, pression de travail 6,3 bar",
		"sourceUrl": "https://www.fujitools.com/en/products/5412052717",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche et la notice Fuji"
	},
	"editorial": {
		"overview": "Fuji FG-13-1F 3, référence 5412052717, présente une consommation en charge de 4,2 L/s, soit 252 L/min. La notice liée à cette fiche indique une pression de travail de 6,3 bar. Vitesse à vide : 30000 tr/min. Puissance maximale de l’outil : 140 W.",
		"verifiedFacts": [
			"Vitesse à vide : 30000 tr/min.",
			"Puissance maximale de l’outil : 140 W.",
			"Capacité de la pince (mm) : 3.",
			"Distance du bord à l’axe : 16 mm.",
			"Entrée 1/4 pouce PT ; flexible de 6,3 mm de diamètre intérieur sur 5 m."
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
			"value": "30000 tr/min",
			"evidenceIds": [
				"fuji-5412052717-official"
			]
		},
		{
			"label": "Puissance maximale de l’outil",
			"value": "140 W",
			"evidenceIds": [
				"fuji-5412052717-official"
			]
		},
		{
			"label": "Capacité de la pince (mm)",
			"value": "3",
			"evidenceIds": [
				"fuji-5412052717-official"
			]
		},
		{
			"label": "Distance du bord à l’axe",
			"value": "16 mm",
			"evidenceIds": [
				"fuji-5412052717-official"
			]
		},
		{
			"label": "Commande",
			"value": "Levier de sécurité",
			"evidenceIds": [
				"fuji-5412052717-official"
			]
		},
		{
			"label": "Échappement",
			"value": "Latéral",
			"evidenceIds": [
				"fuji-5412052717-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "158 mm",
			"evidenceIds": [
				"fuji-5412052717-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "0.37 kg",
			"evidenceIds": [
				"fuji-5412052717-official"
			]
		}
	],
	"evidence": [
		{
			"id": "fuji-5412052717-official",
			"sourceUrl": "https://www.fujitools.com/en/products/5412052717",
			"sourceLabel": "Fuji, fiche officielle FG-13-1F 3, réf. 5412052717",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 4.2 L/s × 60 = 252 L/min. Valeurs brutes, unités et empreinte de la fiche versionnées."
		},
		{
			"id": "fuji-5412052717-pressure-notice",
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
			"fuji-5412052717-official"
		],
		"airflowLpm": [
			"fuji-5412052717-official"
		],
		"workingPressureBar": [
			"fuji-5412052717-pressure-notice"
		],
		"connectorSize": [
			"fuji-5412052717-official"
		],
		"recommendedHose": [
			"fuji-5412052717-official"
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
		"min": 252,
		"typical": 252,
		"max": 252
	}
};

export default product;
