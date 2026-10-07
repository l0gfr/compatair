import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fuji-fg-25d-2-6-e",
	"slug": "meuleuse-fuji-fg-25d-2-6-e",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Fuji FG-25D-2 6 E",
	"brand": "Fuji",
	"model": "FG-25D-2 6 E",
	"mpn": "5412052762",
	"variant": {
		"familyId": "fuji-449509",
		"label": "FG-25D-2 6 E",
		"distinguishingAttributes": {
			"Vitesse à vide": "24000 tr/min",
			"Puissance maximale de l’outil": "240 W",
			"Capacité de la pince (mm)": "6",
			"Distance du bord à l’axe": "19.5 mm",
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
		"min": 402,
		"typical": 402,
		"max": 402
	},
	"usagePattern": "continuous",
	"connectorSize": "Entrée 1/4 pouce PT, flexible intérieur 9,5 mm sur 5 m",
	"recommendedHose": {
		"innerDiameterMm": 9.5,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/fuji-fg-25d-2-6-e-technical.webp",
		"alt": "Repères techniques Fuji FG-25D-2 6 E : 402 L/min en charge, pression de travail 6,3 bar",
		"sourceUrl": "https://www.fujitools.com/en/products/5412052762",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche et la notice Fuji"
	},
	"editorial": {
		"overview": "Fuji FG-25D-2 6 E, référence 5412052762, présente une consommation en charge de 6,7 L/s, soit 402 L/min. La notice liée à cette fiche indique une pression de travail de 6,3 bar. Vitesse à vide : 24000 tr/min. Puissance maximale de l’outil : 240 W.",
		"verifiedFacts": [
			"Vitesse à vide : 24000 tr/min.",
			"Puissance maximale de l’outil : 240 W.",
			"Capacité de la pince (mm) : 6.",
			"Distance du bord à l’axe : 19.5 mm.",
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
				"fuji-5412052762-official"
			]
		},
		{
			"label": "Puissance maximale de l’outil",
			"value": "240 W",
			"evidenceIds": [
				"fuji-5412052762-official"
			]
		},
		{
			"label": "Capacité de la pince (mm)",
			"value": "6",
			"evidenceIds": [
				"fuji-5412052762-official"
			]
		},
		{
			"label": "Distance du bord à l’axe",
			"value": "19.5 mm",
			"evidenceIds": [
				"fuji-5412052762-official"
			]
		},
		{
			"label": "Commande",
			"value": "Commande rotative",
			"evidenceIds": [
				"fuji-5412052762-official"
			]
		},
		{
			"label": "Échappement",
			"value": "Latéral",
			"evidenceIds": [
				"fuji-5412052762-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "202 mm",
			"evidenceIds": [
				"fuji-5412052762-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "0.78 kg",
			"evidenceIds": [
				"fuji-5412052762-official"
			]
		}
	],
	"evidence": [
		{
			"id": "fuji-5412052762-official",
			"sourceUrl": "https://www.fujitools.com/en/products/5412052762",
			"sourceLabel": "Fuji, fiche officielle FG-25D-2 6 E, réf. 5412052762",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 6.7 L/s × 60 = 402 L/min. Valeurs brutes, unités et empreinte de la fiche versionnées."
		},
		{
			"id": "fuji-5412052762-pressure-notice",
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
			"fuji-5412052762-official"
		],
		"airflowLpm": [
			"fuji-5412052762-official"
		],
		"workingPressureBar": [
			"fuji-5412052762-pressure-notice"
		],
		"connectorSize": [
			"fuji-5412052762-official"
		],
		"recommendedHose": [
			"fuji-5412052762-official"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Le filetage PT et le filetage NPT ne sont pas considérés comme interchangeables."
	]
};

export default product;
