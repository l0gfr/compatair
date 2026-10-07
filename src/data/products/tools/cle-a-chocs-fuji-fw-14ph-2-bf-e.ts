import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fuji-fw-14ph-2-bf-e",
	"slug": "cle-a-chocs-fuji-fw-14ph-2-bf-e",
	"categoryId": "cle-a-chocs",
	"category": "Clé à chocs",
	"label": "Clé à chocs Fuji FW-14PH-2 BF E",
	"brand": "Fuji",
	"model": "FW-14PH-2 BF E",
	"mpn": "5412053542",
	"variant": {
		"familyId": "fuji-449578",
		"label": "FW-14PH-2 BF E",
		"distinguishingAttributes": {
			"Vitesse à vide": "7500 tr/min",
			"Carré d’entraînement (pouces)": "1/2",
			"Forme de la poignée": "Pistol",
			"Couple maximal en marche arrière": "180 Nm",
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
		"min": 594,
		"typical": 594,
		"max": 594
	},
	"usagePattern": "burst",
	"connectorSize": "Entrée 1/4 pouce PT, flexible intérieur 9,5 mm sur 5 m",
	"recommendedHose": {
		"innerDiameterMm": 9.5,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/fuji-fw-14ph-2-bf-e-technical.webp",
		"alt": "Repères techniques Fuji FW-14PH-2 BF E : 594 L/min en charge, pression de travail 6,3 bar",
		"sourceUrl": "https://www.fujitools.com/en/products/5412053542",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche et la notice Fuji"
	},
	"editorial": {
		"overview": "Fuji FW-14PH-2 BF E, référence 5412053542, présente une consommation en charge de 9,9 L/s, soit 594 L/min. La notice liée à cette fiche indique une pression de travail de 6,3 bar. Vitesse à vide : 7500 tr/min. Carré d’entraînement (pouces) : 1/2.",
		"verifiedFacts": [
			"Vitesse à vide : 7500 tr/min.",
			"Carré d’entraînement (pouces) : 1/2.",
			"Forme de la poignée : Pistol.",
			"Couple maximal en marche arrière : 180 Nm.",
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
			"value": "7500 tr/min",
			"evidenceIds": [
				"fuji-5412053542-official"
			]
		},
		{
			"label": "Carré d’entraînement (pouces)",
			"value": "1/2",
			"evidenceIds": [
				"fuji-5412053542-official"
			]
		},
		{
			"label": "Forme de la poignée",
			"value": "Pistol",
			"evidenceIds": [
				"fuji-5412053542-official"
			]
		},
		{
			"label": "Couple maximal en marche arrière",
			"value": "180 Nm",
			"evidenceIds": [
				"fuji-5412053542-official"
			]
		},
		{
			"label": "Couple de travail minimal en marche avant",
			"value": "100 Nm",
			"evidenceIds": [
				"fuji-5412053542-official"
			]
		},
		{
			"label": "Couple de travail maximal en marche avant",
			"value": "160 Nm",
			"evidenceIds": [
				"fuji-5412053542-official"
			]
		},
		{
			"label": "Mécanisme de frappe",
			"value": "Double marteau",
			"evidenceIds": [
				"fuji-5412053542-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "202 mm",
			"evidenceIds": [
				"fuji-5412053542-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "2.56 kg",
			"evidenceIds": [
				"fuji-5412053542-official"
			]
		}
	],
	"evidence": [
		{
			"id": "fuji-5412053542-official",
			"sourceUrl": "https://www.fujitools.com/en/products/5412053542",
			"sourceLabel": "Fuji, fiche officielle FW-14PH-2 BF E, réf. 5412053542",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 9.9 L/s × 60 = 594 L/min. Valeurs brutes, unités et empreinte de la fiche versionnées."
		},
		{
			"id": "fuji-5412053542-pressure-notice",
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
			"fuji-5412053542-official"
		],
		"airflowLpm": [
			"fuji-5412053542-official"
		],
		"workingPressureBar": [
			"fuji-5412053542-pressure-notice"
		],
		"connectorSize": [
			"fuji-5412053542-official"
		],
		"recommendedHose": [
			"fuji-5412053542-official"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Le filetage PT et le filetage NPT ne sont pas considérés comme interchangeables."
	]
};

export default product;
