const product = {
	"id": "fuji-fg-06-1-1-8",
	"slug": "meuleuse-fuji-fg-06-1-1-8",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Fuji FG-06-1 1/8",
	"brand": "Fuji",
	"model": "FG-06-1 1/8",
	"mpn": "5412052687",
	"distributorSkus": [],
	"identifierAliases": [],
	"variant": {
		"familyId": "fuji-449556",
		"label": "FG-06-1 1/8",
		"distinguishingAttributes": {
			"Vitesse à vide": "60000 tr/min",
			"Puissance maximale de l’outil": "90 W",
			"Capacité de la pince (mm)": "3",
			"Distance du bord à l’axe": "8.5 mm",
			"Entrée d’air": "1/4 pouce PT"
		}
	},
	"connectorSize": "Entrée 1/4 pouce PT, flexible intérieur 4 mm sur 5 m",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 4,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/fuji-fg-06-1-1-8-technical.webp",
		"alt": "Repères techniques Fuji FG-06-1 1/8 : 168 L/min en charge, pression de travail 6,3 bar",
		"sourceUrl": "https://www.fujitools.com/en/products/5412052687",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche et la notice Fuji"
	},
	"editorial": {
		"overview": "Fuji FG-06-1 1/8, référence 5412052687, présente une consommation en charge de 2,8 L/s, soit 168 L/min. La notice liée à cette fiche indique une pression de travail de 6,3 bar. Vitesse à vide : 60000 tr/min. Puissance maximale de l’outil : 90 W.",
		"verifiedFacts": [
			"Vitesse à vide : 60000 tr/min.",
			"Puissance maximale de l’outil : 90 W.",
			"Capacité de la pince (mm) : 3.",
			"Distance du bord à l’axe : 8.5 mm.",
			"Entrée 1/4 pouce PT ; flexible de 4 mm de diamètre intérieur sur 5 m."
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
			"value": "60000 tr/min",
			"evidenceIds": [
				"fuji-5412052687-official"
			]
		},
		{
			"label": "Puissance maximale de l’outil",
			"value": "90 W",
			"evidenceIds": [
				"fuji-5412052687-official"
			]
		},
		{
			"label": "Capacité de la pince (mm)",
			"value": "3",
			"evidenceIds": [
				"fuji-5412052687-official"
			]
		},
		{
			"label": "Distance du bord à l’axe",
			"value": "8.5 mm",
			"evidenceIds": [
				"fuji-5412052687-official"
			]
		},
		{
			"label": "Commande",
			"value": "Commande rotative",
			"evidenceIds": [
				"fuji-5412052687-official"
			]
		},
		{
			"label": "Échappement",
			"value": "Arrière",
			"evidenceIds": [
				"fuji-5412052687-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "153 mm",
			"evidenceIds": [
				"fuji-5412052687-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "0.15 kg",
			"evidenceIds": [
				"fuji-5412052687-official"
			]
		}
	],
	"evidence": [
		{
			"id": "fuji-5412052687-official",
			"sourceUrl": "https://www.fujitools.com/en/products/5412052687",
			"sourceLabel": "Fuji, fiche officielle FG-06-1 1/8, réf. 5412052687",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 2.8 L/s × 60 = 168 L/min. Valeurs brutes, unités et empreinte de la fiche versionnées."
		},
		{
			"id": "fuji-5412052687-pressure-notice",
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
			"fuji-5412052687-official"
		],
		"airflowLpm": [
			"fuji-5412052687-official"
		],
		"workingPressureBar": [
			"fuji-5412052687-pressure-notice"
		],
		"connectorSize": [
			"fuji-5412052687-official"
		],
		"recommendedHose": [
			"fuji-5412052687-official"
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
		"min": 168,
		"typical": 168,
		"max": 168
	}
};

export default product;
