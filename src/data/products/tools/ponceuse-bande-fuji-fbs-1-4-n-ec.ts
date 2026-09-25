const product = {
	"id": "fuji-fbs-1-4-n-ec",
	"slug": "ponceuse-bande-fuji-fbs-1-4-n-ec",
	"categoryId": "ponceuse-bande",
	"category": "Ponceuse à bande pneumatique",
	"label": "Ponceuse à bande pneumatique Fuji FBS-1-4 N EC",
	"brand": "Fuji",
	"model": "FBS-1-4 N EC",
	"mpn": "5412071208",
	"distributorSkus": [],
	"identifierAliases": [],
	"variant": {
		"familyId": "fuji-449545",
		"label": "FBS-1-4 N EC",
		"distinguishingAttributes": {
			"Vitesse à vide": "1200 tr/min",
			"Puissance maximale de l’outil": "280 W",
			"Dimensions de la bande (mm)": "20x460",
			"Commande": "Safety Lever",
			"Entrée d’air": "1/4 pouce NPT"
		}
	},
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 9,5 mm sur 5 m",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 9.5,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/fuji-fbs-1-4-n-ec-technical.webp",
		"alt": "Repères techniques Fuji FBS-1-4 N EC : 570 L/min en charge, pression de travail 6,3 bar",
		"sourceUrl": "https://www.fujitools.com/en/products/5412071208",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche et la notice Fuji"
	},
	"editorial": {
		"overview": "Fuji FBS-1-4 N EC, référence 5412071208, présente une consommation en charge de 9,5 L/s, soit 570 L/min. La notice liée à cette fiche indique une pression de travail de 6,3 bar. Vitesse à vide : 1200 tr/min. Puissance maximale de l’outil : 280 W.",
		"verifiedFacts": [
			"Vitesse à vide : 1200 tr/min.",
			"Puissance maximale de l’outil : 280 W.",
			"Dimensions de la bande (mm) : 20x460.",
			"Commande : Safety Lever.",
			"Entrée 1/4 pouce NPT ; flexible de 9,5 mm de diamètre intérieur sur 5 m."
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
			"value": "1200 tr/min",
			"evidenceIds": [
				"fuji-5412071208-official"
			]
		},
		{
			"label": "Puissance maximale de l’outil",
			"value": "280 W",
			"evidenceIds": [
				"fuji-5412071208-official"
			]
		},
		{
			"label": "Dimensions de la bande (mm)",
			"value": "20x460",
			"evidenceIds": [
				"fuji-5412071208-official"
			]
		},
		{
			"label": "Commande",
			"value": "Safety Lever",
			"evidenceIds": [
				"fuji-5412071208-official"
			]
		},
		{
			"label": "Échappement",
			"value": "Arrière",
			"evidenceIds": [
				"fuji-5412071208-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "345 mm",
			"evidenceIds": [
				"fuji-5412071208-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "1.2 kg",
			"evidenceIds": [
				"fuji-5412071208-official"
			]
		}
	],
	"evidence": [
		{
			"id": "fuji-5412071208-official",
			"sourceUrl": "https://www.fujitools.com/en/products/5412071208",
			"sourceLabel": "Fuji, fiche officielle FBS-1-4 N EC, réf. 5412071208",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 9.5 L/s × 60 = 570 L/min. Valeurs brutes, unités et empreinte de la fiche versionnées."
		},
		{
			"id": "fuji-5412071208-pressure-notice",
			"sourceUrl": "https://files.fujitools.com/documentation-files-mv/9502000609_05.pdf#page=2",
			"sourceLabel": "Fuji, notice 9502000609, révision 05, page 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Notice rattachée au MPN exact dans le portail documentaire officiel lié par la fiche. Lecture visuelle : outil conçu pour 0,63 MPa (6,3 bar), à ne pas dépasser en fonctionnement."
		}
	],
	"fieldSources": {
		"mpn": [
			"fuji-5412071208-official"
		],
		"airflowLpm": [
			"fuji-5412071208-official"
		],
		"workingPressureBar": [
			"fuji-5412071208-pressure-notice"
		],
		"connectorSize": [
			"fuji-5412071208-official"
		],
		"recommendedHose": [
			"fuji-5412071208-official"
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
		"min": 570,
		"typical": 570,
		"max": 570
	}
};

export default product;
