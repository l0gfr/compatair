const product = {
	"id": "fuji-fw-250p-2-bf-ec",
	"slug": "cle-a-chocs-fuji-fw-250p-2-bf-ec",
	"categoryId": "cle-a-chocs",
	"category": "Clé à chocs",
	"label": "Clé à chocs Fuji FW-250P-2 BF EC",
	"brand": "Fuji",
	"model": "FW-250P-2 BF EC",
	"mpn": "5412072395",
	"variant": {
		"familyId": "fuji-449482",
		"label": "FW-250P-2 BF EC",
		"distinguishingAttributes": {
			"Vitesse à vide": "5000 tr/min",
			"Carré d’entraînement (pouces)": "3/4",
			"Forme de la poignée": "Pistol",
			"Couple maximal en marche arrière": "1200 Nm",
			"Entrée d’air": "3/8 pouce PT"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 720,
		"typical": 720,
		"max": 720
	},
	"usagePattern": "burst",
	"connectorSize": "Entrée 3/8 pouce PT, flexible intérieur 12,7 mm sur 5 m",
	"recommendedHose": {
		"innerDiameterMm": 12.7,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/fuji-fw-250p-2-bf-ec-technical.webp",
		"alt": "Repères techniques Fuji FW-250P-2 BF EC : 720 L/min en charge, pression de travail 6,3 bar",
		"sourceUrl": "https://www.fujitools.com/en/products/5412072395",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche et la notice Fuji"
	},
	"editorial": {
		"overview": "Fuji FW-250P-2 BF EC, référence 5412072395, présente une consommation en charge de 12 L/s, soit 720 L/min. La notice liée à cette fiche indique une pression de référence des performances de 6,3 bar. Vitesse à vide : 5000 tr/min. Carré d’entraînement (pouces) : 3/4.",
		"verifiedFacts": [
			"Vitesse à vide : 5000 tr/min.",
			"Carré d’entraînement (pouces) : 3/4.",
			"Forme de la poignée : Pistol.",
			"Couple maximal en marche arrière : 1200 Nm.",
			"Entrée 3/8 pouce PT ; flexible de 12,7 mm de diamètre intérieur sur 5 m."
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
			"value": "5000 tr/min",
			"evidenceIds": [
				"fuji-5412072395-official"
			]
		},
		{
			"label": "Carré d’entraînement (pouces)",
			"value": "3/4",
			"evidenceIds": [
				"fuji-5412072395-official"
			]
		},
		{
			"label": "Forme de la poignée",
			"value": "Pistol",
			"evidenceIds": [
				"fuji-5412072395-official"
			]
		},
		{
			"label": "Couple maximal en marche arrière",
			"value": "1200 Nm",
			"evidenceIds": [
				"fuji-5412072395-official"
			]
		},
		{
			"label": "Couple de travail minimal en marche avant",
			"value": "380 Nm",
			"evidenceIds": [
				"fuji-5412072395-official"
			]
		},
		{
			"label": "Couple de travail maximal en marche avant",
			"value": "1040 Nm",
			"evidenceIds": [
				"fuji-5412072395-official"
			]
		},
		{
			"label": "Mécanisme de frappe",
			"value": "2-jaws",
			"evidenceIds": [
				"fuji-5412072395-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "228 mm",
			"evidenceIds": [
				"fuji-5412072395-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "5.3 kg",
			"evidenceIds": [
				"fuji-5412072395-official"
			]
		}
	],
	"evidence": [
		{
			"id": "fuji-5412072395-official",
			"sourceUrl": "https://www.fujitools.com/en/products/5412072395",
			"sourceLabel": "Fuji, fiche officielle FW-250P-2 BF EC, réf. 5412072395",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 12 L/s × 60 = 720 L/min. Valeurs brutes, unités et empreinte de la fiche versionnées."
		},
		{
			"id": "fuji-5412072395-pressure-notice",
			"sourceUrl": "https://files.fujitools.com/documentation-files-mv/9502000580_03.pdf#page=1",
			"sourceLabel": "Fuji, notice 9502000580, révision 03, page 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Notice rattachée au MPN exact dans le portail documentaire officiel lié par la fiche. Lecture visuelle du tableau technique : performances données à 0,63 MPa (6,3 bar)."
		}
	],
	"fieldSources": {
		"mpn": [
			"fuji-5412072395-official"
		],
		"airflowLpm": [
			"fuji-5412072395-official"
		],
		"workingPressureBar": [
			"fuji-5412072395-pressure-notice"
		],
		"connectorSize": [
			"fuji-5412072395-official"
		],
		"recommendedHose": [
			"fuji-5412072395-official"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Le filetage PT et le filetage NPT ne sont pas considérés comme interchangeables."
	]
};

export default product;
