const product = {
	"id": "fuji-frd-6ph-5-ec",
	"slug": "perceuse-fuji-frd-6ph-5-ec",
	"categoryId": "perceuse",
	"category": "Perceuse pneumatique",
	"label": "Perceuse pneumatique Fuji FRD-6PH-5 EC",
	"brand": "Fuji",
	"model": "FRD-6PH-5 EC",
	"mpn": "5412103147",
	"variant": {
		"familyId": "fuji-449439",
		"label": "FRD-6PH-5 EC",
		"distinguishingAttributes": {
			"Vitesse à vide": "1300 tr/min",
			"Puissance maximale de l’outil": "320 W",
			"Capacité maximale du mandrin (mm)": "10",
			"Montage du mandrin": "Jacobs Taper 2S",
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
	"connectorSize": "Entrée 1/4 pouce PT, flexible intérieur 10 mm sur 5 m",
	"recommendedHose": {
		"innerDiameterMm": 10,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/fuji-frd-6ph-5-ec-technical.webp",
		"alt": "Repères techniques Fuji FRD-6PH-5 EC : 600 L/min en charge, pression de travail 6,3 bar",
		"sourceUrl": "https://www.fujitools.com/en/products/5412103147",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche et la notice Fuji"
	},
	"editorial": {
		"overview": "Fuji FRD-6PH-5 EC, référence 5412103147, présente une consommation en charge de 10 L/s, soit 600 L/min. La notice liée à cette fiche indique une pression de référence des performances de 6,3 bar. Vitesse à vide : 1300 tr/min. Puissance maximale de l’outil : 320 W.",
		"verifiedFacts": [
			"Vitesse à vide : 1300 tr/min.",
			"Puissance maximale de l’outil : 320 W.",
			"Capacité maximale du mandrin (mm) : 10.",
			"Montage du mandrin : Jacobs Taper 2S.",
			"Entrée 1/4 pouce PT ; flexible de 10 mm de diamètre intérieur sur 5 m."
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
			"value": "1300 tr/min",
			"evidenceIds": [
				"fuji-5412103147-official"
			]
		},
		{
			"label": "Puissance maximale de l’outil",
			"value": "320 W",
			"evidenceIds": [
				"fuji-5412103147-official"
			]
		},
		{
			"label": "Capacité maximale du mandrin (mm)",
			"value": "10",
			"evidenceIds": [
				"fuji-5412103147-official"
			]
		},
		{
			"label": "Montage du mandrin",
			"value": "Jacobs Taper 2S",
			"evidenceIds": [
				"fuji-5412103147-official"
			]
		},
		{
			"label": "Forme de la poignée",
			"value": "Pistol",
			"evidenceIds": [
				"fuji-5412103147-official"
			]
		},
		{
			"label": "Distance du bord à l’axe",
			"value": "21 mm",
			"evidenceIds": [
				"fuji-5412103147-official"
			]
		},
		{
			"label": "Couple de calage",
			"value": "7.5 Nm",
			"evidenceIds": [
				"fuji-5412103147-official"
			]
		},
		{
			"label": "Commande",
			"value": "Trigger",
			"evidenceIds": [
				"fuji-5412103147-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "1.4 kg",
			"evidenceIds": [
				"fuji-5412103147-official"
			]
		}
	],
	"evidence": [
		{
			"id": "fuji-5412103147-official",
			"sourceUrl": "https://www.fujitools.com/en/products/5412103147",
			"sourceLabel": "Fuji, fiche officielle FRD-6PH-5 EC, réf. 5412103147",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 10 L/s × 60 = 600 L/min. Valeurs brutes, unités et empreinte de la fiche versionnées."
		},
		{
			"id": "fuji-5412103147-pressure-notice",
			"sourceUrl": "https://files.fujitools.com/documentation-files-mv/9502000552_03.pdf#page=1",
			"sourceLabel": "Fuji, notice 9502000552, révision 03, page 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Notice rattachée au MPN exact dans le portail documentaire officiel lié par la fiche. Lecture visuelle du tableau technique : performances données à 0,63 MPa (6,3 bar)."
		}
	],
	"fieldSources": {
		"mpn": [
			"fuji-5412103147-official"
		],
		"airflowLpm": [
			"fuji-5412103147-official"
		],
		"workingPressureBar": [
			"fuji-5412103147-pressure-notice"
		],
		"connectorSize": [
			"fuji-5412103147-official"
		],
		"recommendedHose": [
			"fuji-5412103147-official"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Le filetage PT et le filetage NPT ne sont pas considérés comme interchangeables."
	]
};

export default product;
