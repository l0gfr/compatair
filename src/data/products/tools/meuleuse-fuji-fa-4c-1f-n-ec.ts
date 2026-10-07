import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fuji-fa-4c-1f-n-ec",
	"slug": "meuleuse-fuji-fa-4c-1f-n-ec",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Fuji FA-4C-1F N EC",
	"brand": "Fuji",
	"model": "FA-4C-1F N EC",
	"mpn": "5412071126",
	"variant": {
		"familyId": "fuji-449497",
		"label": "FA-4C-1F N EC",
		"distinguishingAttributes": {
			"Vitesse à vide": "13500 tr/min",
			"Puissance maximale de l’outil": "550 W",
			"Filetage de sortie": "M8",
			"Diamètre du disque (mm)": "100",
			"Entrée d’air": "3/8 pouce NPT"
		}
	},
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
	},
	"usagePattern": "continuous",
	"connectorSize": "Entrée 3/8 pouce NPT, flexible intérieur 10 mm sur 5 m",
	"recommendedHose": {
		"innerDiameterMm": 10,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/fuji-fa-4c-1f-n-ec-technical.webp",
		"alt": "Repères techniques Fuji FA-4C-1F N EC : 1 260 L/min en charge, pression de travail 6,3 bar",
		"sourceUrl": "https://www.fujitools.com/en/products/5412071126",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche et la notice Fuji"
	},
	"editorial": {
		"overview": "Fuji FA-4C-1F N EC, référence 5412071126, présente une consommation en charge de 21 L/s, soit 1 260 L/min. La notice liée à cette fiche indique une pression de référence des performances de 6,3 bar. Vitesse à vide : 13500 tr/min. Puissance maximale de l’outil : 550 W.",
		"verifiedFacts": [
			"Vitesse à vide : 13500 tr/min.",
			"Puissance maximale de l’outil : 550 W.",
			"Filetage de sortie : M8.",
			"Diamètre du disque (mm) : 100.",
			"Entrée 3/8 pouce NPT ; flexible de 10 mm de diamètre intérieur sur 5 m."
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
			"value": "13500 tr/min",
			"evidenceIds": [
				"fuji-5412071126-official"
			]
		},
		{
			"label": "Puissance maximale de l’outil",
			"value": "550 W",
			"evidenceIds": [
				"fuji-5412071126-official"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "M8",
			"evidenceIds": [
				"fuji-5412071126-official"
			]
		},
		{
			"label": "Diamètre du disque (mm)",
			"value": "100",
			"evidenceIds": [
				"fuji-5412071126-official"
			]
		},
		{
			"label": "Alésage de l’abrasif",
			"value": "15.8 mm",
			"evidenceIds": [
				"fuji-5412071126-official"
			]
		},
		{
			"label": "Type d’abrasif",
			"value": "Type 27",
			"evidenceIds": [
				"fuji-5412071126-official"
			]
		},
		{
			"label": "Distance du bord à l’axe",
			"value": "26 mm",
			"evidenceIds": [
				"fuji-5412071126-official"
			]
		},
		{
			"label": "Commande",
			"value": "Levier de sécurité",
			"evidenceIds": [
				"fuji-5412071126-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "240 mm",
			"evidenceIds": [
				"fuji-5412071126-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "1.9 kg",
			"evidenceIds": [
				"fuji-5412071126-official"
			]
		}
	],
	"evidence": [
		{
			"id": "fuji-5412071126-official",
			"sourceUrl": "https://www.fujitools.com/en/products/5412071126",
			"sourceLabel": "Fuji, fiche officielle FA-4C-1F N EC, réf. 5412071126",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 21 L/s × 60 = 1260 L/min. Valeurs brutes, unités et empreinte de la fiche versionnées."
		},
		{
			"id": "fuji-5412071126-pressure-notice",
			"sourceUrl": "https://files.fujitools.com/documentation-files-mv/9502000382_02.pdf#page=1",
			"sourceLabel": "Fuji, notice 9502000382, révision 02, page 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Notice rattachée au MPN exact dans le portail documentaire officiel lié par la fiche. Lecture visuelle du tableau technique : performances données à 0,63 MPa (6,3 bar)."
		}
	],
	"fieldSources": {
		"mpn": [
			"fuji-5412071126-official"
		],
		"airflowLpm": [
			"fuji-5412071126-official"
		],
		"workingPressureBar": [
			"fuji-5412071126-pressure-notice"
		],
		"connectorSize": [
			"fuji-5412071126-official"
		],
		"recommendedHose": [
			"fuji-5412071126-official"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Le filetage PT et le filetage NPT ne sont pas considérés comme interchangeables."
	]
};

export default product;
