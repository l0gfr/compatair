const product = {
	"id": "fuji-fg-25t",
	"slug": "meuleuse-fuji-fg-25t",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Fuji FG-25T",
	"brand": "Fuji",
	"model": "FG-25T",
	"mpn": "5412071446",
	"distributorSkus": [],
	"identifierAliases": [],
	"variant": {
		"familyId": "fuji-449460",
		"label": "FG-25T",
		"distinguishingAttributes": {
			"Vitesse à vide": "20000 tr/min",
			"Puissance maximale de l’outil": "220 W",
			"Capacité de la pince (mm)": "6",
			"Distance du bord à l’axe": "19.5 mm",
			"Entrée d’air": "1/4 pouce PT"
		}
	},
	"connectorSize": "Entrée 1/4 pouce PT, flexible intérieur 9,5 mm sur 5 m",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 9.5,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/fuji-fg-25t-technical.webp",
		"alt": "Repères techniques Fuji FG-25T : 252 L/min en charge, pression de travail 6,3 bar",
		"sourceUrl": "https://www.fujitools.com/en/products/5412071446",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche et la notice Fuji"
	},
	"editorial": {
		"overview": "Fuji FG-25T, référence 5412071446, présente une consommation en charge de 4,2 L/s, soit 252 L/min. La notice liée à cette fiche indique une pression de référence des performances de 6,3 bar. Vitesse à vide : 20000 tr/min. Puissance maximale de l’outil : 220 W.",
		"verifiedFacts": [
			"Vitesse à vide : 20000 tr/min.",
			"Puissance maximale de l’outil : 220 W.",
			"Capacité de la pince (mm) : 6.",
			"Distance du bord à l’axe : 19.5 mm.",
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
			"value": "20000 tr/min",
			"evidenceIds": [
				"fuji-5412071446-official"
			]
		},
		{
			"label": "Puissance maximale de l’outil",
			"value": "220 W",
			"evidenceIds": [
				"fuji-5412071446-official"
			]
		},
		{
			"label": "Capacité de la pince (mm)",
			"value": "6",
			"evidenceIds": [
				"fuji-5412071446-official"
			]
		},
		{
			"label": "Distance du bord à l’axe",
			"value": "19.5 mm",
			"evidenceIds": [
				"fuji-5412071446-official"
			]
		},
		{
			"label": "Commande",
			"value": "Button",
			"evidenceIds": [
				"fuji-5412071446-official"
			]
		},
		{
			"label": "Échappement",
			"value": "Avant",
			"evidenceIds": [
				"fuji-5412071446-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "77 mm",
			"evidenceIds": [
				"fuji-5412071446-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "0.37 kg",
			"evidenceIds": [
				"fuji-5412071446-official"
			]
		}
	],
	"evidence": [
		{
			"id": "fuji-5412071446-official",
			"sourceUrl": "https://www.fujitools.com/en/products/5412071446",
			"sourceLabel": "Fuji, fiche officielle FG-25T, réf. 5412071446",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 4.2 L/s × 60 = 252 L/min. Valeurs brutes, unités et empreinte de la fiche versionnées."
		},
		{
			"id": "fuji-5412071446-pressure-notice",
			"sourceUrl": "https://www.photos-videos.fujitools.com/content/dam/pim/itba/fuji/technical-documents/9502000247_JA_A.pdf#page=1",
			"sourceLabel": "Fuji, notice 9502000247_JA_A, page 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Notice explicitement liée à la fiche individuelle. Lecture visuelle du tableau technique : performances données à 0,63 MPa, soit 6,3 bar. Conversion SI ; équivalence approximative en kgf/cm² non réutilisée."
		}
	],
	"fieldSources": {
		"mpn": [
			"fuji-5412071446-official"
		],
		"airflowLpm": [
			"fuji-5412071446-official"
		],
		"workingPressureBar": [
			"fuji-5412071446-pressure-notice"
		],
		"connectorSize": [
			"fuji-5412071446-official"
		],
		"recommendedHose": [
			"fuji-5412071446-official"
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
		"min": 252,
		"typical": 252,
		"max": 252
	}
};

export default product;
