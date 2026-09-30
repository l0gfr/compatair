const product = {
	"id": "fuji-fw-190p-1-bf-ec",
	"slug": "cle-a-chocs-fuji-fw-190p-1-bf-ec",
	"categoryId": "cle-a-chocs",
	"category": "Clé à chocs",
	"label": "Clé à chocs Fuji FW-190P-1 BF EC",
	"brand": "Fuji",
	"model": "FW-190P-1 BF EC",
	"mpn": "5412104404",
	"variant": {
		"familyId": "fuji-449531",
		"label": "FW-190P-1 BF EC",
		"distinguishingAttributes": {
			"Vitesse à vide": "5500 tr/min",
			"Carré d’entraînement (pouces)": "3/4",
			"Forme de la poignée": "Pistol",
			"Couple maximal en marche arrière": "620 Nm",
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
		"min": 516,
		"typical": 516,
		"max": 516
	},
	"usagePattern": "burst",
	"connectorSize": "Entrée 1/4 pouce PT, flexible intérieur 9,5 mm sur 5 m",
	"recommendedHose": {
		"innerDiameterMm": 9.5,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/fuji-fw-190p-1-bf-ec-technical.webp",
		"alt": "Repères techniques Fuji FW-190P-1 BF EC : 516 L/min en charge, pression de travail 6,3 bar",
		"sourceUrl": "https://www.fujitools.com/en/products/5412104404",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche et la notice Fuji"
	},
	"editorial": {
		"overview": "Fuji FW-190P-1 BF EC, référence 5412104404, présente une consommation en charge de 8,6 L/s, soit 516 L/min. La notice liée à cette fiche indique une pression de référence des performances de 6,3 bar. Vitesse à vide : 5500 tr/min. Carré d’entraînement (pouces) : 3/4.",
		"verifiedFacts": [
			"Vitesse à vide : 5500 tr/min.",
			"Carré d’entraînement (pouces) : 3/4.",
			"Forme de la poignée : Pistol.",
			"Couple maximal en marche arrière : 620 Nm.",
			"Entrée 1/4 pouce PT ; flexible de 9,5 mm de diamètre intérieur sur 5 m."
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
			"value": "5500 tr/min",
			"evidenceIds": [
				"fuji-5412104404-official"
			]
		},
		{
			"label": "Carré d’entraînement (pouces)",
			"value": "3/4",
			"evidenceIds": [
				"fuji-5412104404-official"
			]
		},
		{
			"label": "Forme de la poignée",
			"value": "Pistol",
			"evidenceIds": [
				"fuji-5412104404-official"
			]
		},
		{
			"label": "Couple maximal en marche arrière",
			"value": "620 Nm",
			"evidenceIds": [
				"fuji-5412104404-official"
			]
		},
		{
			"label": "Couple de travail minimal en marche avant",
			"value": "240 Nm",
			"evidenceIds": [
				"fuji-5412104404-official"
			]
		},
		{
			"label": "Couple de travail maximal en marche avant",
			"value": "560 Nm",
			"evidenceIds": [
				"fuji-5412104404-official"
			]
		},
		{
			"label": "Mécanisme de frappe",
			"value": "Pinless rocking dog",
			"evidenceIds": [
				"fuji-5412104404-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "241 mm",
			"evidenceIds": [
				"fuji-5412104404-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "4.5 kg",
			"evidenceIds": [
				"fuji-5412104404-official"
			]
		}
	],
	"evidence": [
		{
			"id": "fuji-5412104404-official",
			"sourceUrl": "https://www.fujitools.com/en/products/5412104404",
			"sourceLabel": "Fuji, fiche officielle FW-190P-1 BF EC, réf. 5412104404",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 8.6 L/s × 60 = 516 L/min. Valeurs brutes, unités et empreinte de la fiche versionnées."
		},
		{
			"id": "fuji-5412104404-pressure-notice",
			"sourceUrl": "https://files.fujitools.com/documentation-files-mv/9502000938_02.pdf#page=1",
			"sourceLabel": "Fuji, notice 9502000938, révision 02, page 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Notice rattachée au MPN exact dans le portail documentaire officiel lié par la fiche. Lecture visuelle du tableau technique : performances données à 0,63 MPa (6,3 bar)."
		}
	],
	"fieldSources": {
		"mpn": [
			"fuji-5412104404-official"
		],
		"airflowLpm": [
			"fuji-5412104404-official"
		],
		"workingPressureBar": [
			"fuji-5412104404-pressure-notice"
		],
		"connectorSize": [
			"fuji-5412104404-official"
		],
		"recommendedHose": [
			"fuji-5412104404-official"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Le filetage PT et le filetage NPT ne sont pas considérés comme interchangeables."
	]
};

export default product;
