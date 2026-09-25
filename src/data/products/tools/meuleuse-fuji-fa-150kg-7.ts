const product = {
	"id": "fuji-fa-150kg-7",
	"slug": "meuleuse-fuji-fa-150kg-7",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Fuji FA-150KG-7",
	"brand": "Fuji",
	"model": "FA-150KG-7",
	"mpn": "5412052241",
	"distributorSkus": [],
	"identifierAliases": [],
	"variant": {
		"familyId": "fuji-449529",
		"label": "FA-150KG-7",
		"distinguishingAttributes": {
			"Vitesse à vide": "5500 tr/min",
			"Puissance maximale de l’outil": "900 W",
			"Filetage de sortie": "W1/2-16(F)",
			"Alésage de l’abrasif": "16 mm",
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
		"src": "/images/products/fuji-fa-150kg-7-technical.webp",
		"alt": "Repères techniques Fuji FA-150KG-7 : 1 140 L/min en charge, pression de travail 6,3 bar",
		"sourceUrl": "https://www.fujitools.com/en/products/5412052241",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche et la notice Fuji"
	},
	"editorial": {
		"overview": "Fuji FA-150KG-7, référence 5412052241, présente une consommation en charge de 19 L/s, soit 1 140 L/min. La notice liée à cette fiche indique une pression de travail de 6,3 bar. Vitesse à vide : 5500 tr/min. Puissance maximale de l’outil : 900 W.",
		"verifiedFacts": [
			"Vitesse à vide : 5500 tr/min.",
			"Puissance maximale de l’outil : 900 W.",
			"Filetage de sortie : W1/2-16(F).",
			"Alésage de l’abrasif : 16 mm.",
			"Entrée 3/8 pouce PT ; flexible de 12,7 mm de diamètre intérieur sur 5 m."
		],
		"limitations": [
			"La consommation en charge provient de la fiche individuelle. La notice liée par le fabricant indique une pression de travail de 6,3 bar ; la fiche ne fournit pas de courbe de consommation selon la pression.",
			"Le calcul conserve le débit en charge publié, sans facteur arbitraire réduisant le besoin pour un usage intermittent.",
			"Le diamètre intérieur de flexible publié concerne une longueur de 5 m. Une installation plus longue nécessite de vérifier sa perte de pression.",
			"Le catalogue international distingue des raccords et équipements selon les marchés. La disponibilité en France et la conformité de la référence livrée restent à confirmer auprès du fournisseur.",
			"À vide, la fiche publie 1 440 L/min. Ce débit dépasse le seuil en charge : couvrir ce dernier ne garantit pas une marche à vide prolongée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "5500 tr/min",
			"evidenceIds": [
				"fuji-5412052241-official"
			]
		},
		{
			"label": "Puissance maximale de l’outil",
			"value": "900 W",
			"evidenceIds": [
				"fuji-5412052241-official"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "W1/2-16(F)",
			"evidenceIds": [
				"fuji-5412052241-official"
			]
		},
		{
			"label": "Alésage de l’abrasif",
			"value": "16 mm",
			"evidenceIds": [
				"fuji-5412052241-official"
			]
		},
		{
			"label": "Dimension de la brosse",
			"value": "125 mm",
			"evidenceIds": [
				"fuji-5412052241-official"
			]
		},
		{
			"label": "Commande",
			"value": "Commande rotative",
			"evidenceIds": [
				"fuji-5412052241-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "245 mm",
			"evidenceIds": [
				"fuji-5412052241-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "1.8 kg",
			"evidenceIds": [
				"fuji-5412052241-official"
			]
		},
		{
			"label": "Consommation à vide, distincte du débit en charge",
			"value": "1 440 L/min",
			"evidenceIds": [
				"fuji-5412052241-official"
			]
		}
	],
	"evidence": [
		{
			"id": "fuji-5412052241-official",
			"sourceUrl": "https://www.fujitools.com/en/products/5412052241",
			"sourceLabel": "Fuji, fiche officielle FA-150KG-7, réf. 5412052241",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 19 L/s × 60 = 1140 L/min. Valeurs brutes, unités et empreinte de la fiche versionnées."
		},
		{
			"id": "fuji-5412052241-pressure-notice",
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
			"fuji-5412052241-official"
		],
		"airflowLpm": [
			"fuji-5412052241-official"
		],
		"workingPressureBar": [
			"fuji-5412052241-pressure-notice"
		],
		"connectorSize": [
			"fuji-5412052241-official"
		],
		"recommendedHose": [
			"fuji-5412052241-official"
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
		"min": 1140,
		"typical": 1140,
		"max": 1140
	}
};

export default product;
