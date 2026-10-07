import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fuji-frd-5s-1f-wo-c-ec",
	"slug": "perceuse-fuji-frd-5s-1f-wo-c-ec",
	"categoryId": "perceuse",
	"category": "Perceuse pneumatique",
	"label": "Perceuse pneumatique Fuji FRD-5S-1F WO C EC",
	"brand": "Fuji",
	"model": "FRD-5S-1F WO C EC",
	"mpn": "5412072180",
	"variant": {
		"familyId": "fuji-449570",
		"label": "FRD-5S-1F WO C EC",
		"distinguishingAttributes": {
			"Vitesse à vide": "3200 tr/min",
			"Puissance maximale de l’outil": "180 W",
			"Capacité maximale du mandrin (mm)": "6.5",
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
		"min": 600,
		"typical": 600,
		"max": 600
	},
	"usagePattern": "intermittent",
	"connectorSize": "Entrée 1/4 pouce PT, flexible intérieur 6,3 mm sur 5 m",
	"recommendedHose": {
		"innerDiameterMm": 6.3,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/fuji-frd-5s-1f-wo-c-ec-technical.webp",
		"alt": "Repères techniques Fuji FRD-5S-1F WO C EC : 600 L/min en charge, pression de travail 6,3 bar",
		"sourceUrl": "https://www.fujitools.com/en/products/5412072180",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche et la notice Fuji"
	},
	"editorial": {
		"overview": "Fuji FRD-5S-1F WO C EC, référence 5412072180, présente une consommation en charge de 10 L/s, soit 600 L/min. La notice liée à cette fiche indique une pression de travail de 6,3 bar. Vitesse à vide : 3200 tr/min. Puissance maximale de l’outil : 180 W.",
		"verifiedFacts": [
			"Vitesse à vide : 3200 tr/min.",
			"Puissance maximale de l’outil : 180 W.",
			"Capacité maximale du mandrin (mm) : 6.5.",
			"Montage du mandrin : 3/8-24UNF.",
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
			"value": "3200 tr/min",
			"evidenceIds": [
				"fuji-5412072180-official"
			]
		},
		{
			"label": "Puissance maximale de l’outil",
			"value": "180 W",
			"evidenceIds": [
				"fuji-5412072180-official"
			]
		},
		{
			"label": "Capacité maximale du mandrin (mm)",
			"value": "6.5",
			"evidenceIds": [
				"fuji-5412072180-official"
			]
		},
		{
			"label": "Montage du mandrin",
			"value": "3/8-24UNF",
			"evidenceIds": [
				"fuji-5412072180-official"
			]
		},
		{
			"label": "Forme de la poignée",
			"value": "Straight handle",
			"evidenceIds": [
				"fuji-5412072180-official"
			]
		},
		{
			"label": "Distance du bord à l’axe",
			"value": "18.5 mm",
			"evidenceIds": [
				"fuji-5412072180-official"
			]
		},
		{
			"label": "Couple de calage",
			"value": "2 Nm",
			"evidenceIds": [
				"fuji-5412072180-official"
			]
		},
		{
			"label": "Commande",
			"value": "Levier de sécurité",
			"evidenceIds": [
				"fuji-5412072180-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "0.6 kg",
			"evidenceIds": [
				"fuji-5412072180-official"
			]
		}
	],
	"evidence": [
		{
			"id": "fuji-5412072180-official",
			"sourceUrl": "https://www.fujitools.com/en/products/5412072180",
			"sourceLabel": "Fuji, fiche officielle FRD-5S-1F WO C EC, réf. 5412072180",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 10 L/s × 60 = 600 L/min. Valeurs brutes, unités et empreinte de la fiche versionnées."
		},
		{
			"id": "fuji-5412072180-pressure-notice",
			"sourceUrl": "https://files.fujitools.com/documentation-files-mv/9502000362_09.pdf#page=2",
			"sourceLabel": "Fuji, notice 9502000362, révision 09, page 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Notice rattachée au MPN exact dans le portail documentaire officiel lié par la fiche. Lecture visuelle : pression de travail 0,63 MPa. Conversion SI : 6,3 bar ; équivalence approximative en kgf/cm² de la notice non réutilisée."
		}
	],
	"fieldSources": {
		"mpn": [
			"fuji-5412072180-official"
		],
		"airflowLpm": [
			"fuji-5412072180-official"
		],
		"workingPressureBar": [
			"fuji-5412072180-pressure-notice"
		],
		"connectorSize": [
			"fuji-5412072180-official"
		],
		"recommendedHose": [
			"fuji-5412072180-official"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Le filetage PT et le filetage NPT ne sont pas considérés comme interchangeables."
	]
};

export default product;
