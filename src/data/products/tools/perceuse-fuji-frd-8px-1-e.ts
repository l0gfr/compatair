const product = {
	"id": "fuji-frd-8px-1-e",
	"slug": "perceuse-fuji-frd-8px-1-e",
	"categoryId": "perceuse",
	"category": "Perceuse pneumatique",
	"label": "Perceuse pneumatique Fuji FRD-8PX-1 E",
	"brand": "Fuji",
	"model": "FRD-8PX-1 E",
	"mpn": "5412053363",
	"variant": {
		"familyId": "fuji-449505",
		"label": "FRD-8PX-1 E",
		"distinguishingAttributes": {
			"Vitesse à vide": "2600 tr/min",
			"Puissance maximale de l’outil": "440 W",
			"Capacité maximale du mandrin (mm)": "8",
			"Montage du mandrin": "3/8-24UNF",
			"Entrée d’air": "1/4 pouce PT"
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
	"usagePattern": "intermittent",
	"connectorSize": "Entrée 1/4 pouce PT, flexible intérieur 10 mm sur 5 m",
	"recommendedHose": {
		"innerDiameterMm": 10,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/fuji-frd-8px-1-e-technical.webp",
		"alt": "Repères techniques Fuji FRD-8PX-1 E : 780 L/min en charge, pression de travail 6,3 bar",
		"sourceUrl": "https://www.fujitools.com/en/products/5412053363",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche et la notice Fuji"
	},
	"editorial": {
		"overview": "Fuji FRD-8PX-1 E, référence 5412053363, présente une consommation en charge de 13 L/s, soit 780 L/min. La notice liée à cette fiche indique une pression de travail de 6,3 bar. Vitesse à vide : 2600 tr/min. Puissance maximale de l’outil : 440 W.",
		"verifiedFacts": [
			"Vitesse à vide : 2600 tr/min.",
			"Puissance maximale de l’outil : 440 W.",
			"Capacité maximale du mandrin (mm) : 8.",
			"Montage du mandrin : 3/8-24UNF.",
			"Entrée 1/4 pouce PT ; flexible de 10 mm de diamètre intérieur sur 5 m."
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
			"value": "2600 tr/min",
			"evidenceIds": [
				"fuji-5412053363-official"
			]
		},
		{
			"label": "Puissance maximale de l’outil",
			"value": "440 W",
			"evidenceIds": [
				"fuji-5412053363-official"
			]
		},
		{
			"label": "Capacité maximale du mandrin (mm)",
			"value": "8",
			"evidenceIds": [
				"fuji-5412053363-official"
			]
		},
		{
			"label": "Montage du mandrin",
			"value": "3/8-24UNF",
			"evidenceIds": [
				"fuji-5412053363-official"
			]
		},
		{
			"label": "Forme de la poignée",
			"value": "Pistol",
			"evidenceIds": [
				"fuji-5412053363-official"
			]
		},
		{
			"label": "Distance du bord à l’axe",
			"value": "25 mm",
			"evidenceIds": [
				"fuji-5412053363-official"
			]
		},
		{
			"label": "Couple de calage",
			"value": "5.9 Nm",
			"evidenceIds": [
				"fuji-5412053363-official"
			]
		},
		{
			"label": "Commande",
			"value": "Trigger",
			"evidenceIds": [
				"fuji-5412053363-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "1.7 kg",
			"evidenceIds": [
				"fuji-5412053363-official"
			]
		}
	],
	"evidence": [
		{
			"id": "fuji-5412053363-official",
			"sourceUrl": "https://www.fujitools.com/en/products/5412053363",
			"sourceLabel": "Fuji, fiche officielle FRD-8PX-1 E, réf. 5412053363",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 13 L/s × 60 = 780 L/min. Valeurs brutes, unités et empreinte de la fiche versionnées."
		},
		{
			"id": "fuji-5412053363-pressure-notice",
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
			"fuji-5412053363-official"
		],
		"airflowLpm": [
			"fuji-5412053363-official"
		],
		"workingPressureBar": [
			"fuji-5412053363-pressure-notice"
		],
		"connectorSize": [
			"fuji-5412053363-official"
		],
		"recommendedHose": [
			"fuji-5412053363-official"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Le filetage PT et le filetage NPT ne sont pas considérés comme interchangeables."
	]
};

export default product;
