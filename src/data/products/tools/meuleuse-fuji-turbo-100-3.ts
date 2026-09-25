const product = {
	"id": "fuji-turbo-100-3",
	"slug": "meuleuse-fuji-turbo-100-3",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Fuji TURBO-100 3",
	"brand": "Fuji",
	"model": "TURBO-100 3",
	"mpn": "5412075664",
	"distributorSkus": [],
	"identifierAliases": [],
	"variant": {
		"familyId": "fuji-449542",
		"label": "TURBO-100 3",
		"distinguishingAttributes": {
			"Capacité de la pince (mm)": "3",
			"Distance du bord à l’axe": "15.5 mm",
			"Commande": "Commande rotative",
			"Échappement": "Avant",
			"Entrée d’air": "1/8 pouce PT"
		}
	},
	"connectorSize": "Entrée 1/8 pouce PT, flexible intérieur 4 mm sur 5 m",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 4,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/fuji-turbo-100-3-technical.webp",
		"alt": "Repères techniques Fuji TURBO-100 3 : 282 L/min en charge, pression de travail 6,3 bar",
		"sourceUrl": "https://www.fujitools.com/en/products/5412075664",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche et la notice Fuji"
	},
	"editorial": {
		"overview": "Fuji TURBO-100 3, référence 5412075664, présente une consommation en charge de 4,7 L/s, soit 282 L/min. La notice liée à cette fiche indique une pression de référence des performances de 6,3 bar. Capacité de la pince (mm) : 3. Distance du bord à l’axe : 15.5 mm.",
		"verifiedFacts": [
			"Capacité de la pince (mm) : 3.",
			"Distance du bord à l’axe : 15.5 mm.",
			"Commande : Commande rotative.",
			"Échappement : Avant.",
			"Entrée 1/8 pouce PT ; flexible de 4 mm de diamètre intérieur sur 5 m."
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
			"label": "Capacité de la pince (mm)",
			"value": "3",
			"evidenceIds": [
				"fuji-5412075664-official"
			]
		},
		{
			"label": "Distance du bord à l’axe",
			"value": "15.5 mm",
			"evidenceIds": [
				"fuji-5412075664-official"
			]
		},
		{
			"label": "Commande",
			"value": "Commande rotative",
			"evidenceIds": [
				"fuji-5412075664-official"
			]
		},
		{
			"label": "Échappement",
			"value": "Avant",
			"evidenceIds": [
				"fuji-5412075664-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "153 mm",
			"evidenceIds": [
				"fuji-5412075664-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "0.25 kg",
			"evidenceIds": [
				"fuji-5412075664-official"
			]
		}
	],
	"evidence": [
		{
			"id": "fuji-5412075664-official",
			"sourceUrl": "https://www.fujitools.com/en/products/5412075664",
			"sourceLabel": "Fuji, fiche officielle TURBO-100 3, réf. 5412075664",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 4.7 L/s × 60 = 282 L/min. Valeurs brutes, unités et empreinte de la fiche versionnées."
		},
		{
			"id": "fuji-5412075664-pressure-notice",
			"sourceUrl": "https://www.photos-videos.fujitools.com/content/dam/pim/itba/fuji/technical-documents/9502000244_JA_A.pdf#page=1",
			"sourceLabel": "Fuji, notice 9502000244_JA_A, page 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Notice explicitement liée à la fiche individuelle. Lecture visuelle du tableau technique : performances données à 0,63 MPa, soit 6,3 bar. Conversion SI ; équivalence approximative en kgf/cm² non réutilisée."
		}
	],
	"fieldSources": {
		"mpn": [
			"fuji-5412075664-official"
		],
		"airflowLpm": [
			"fuji-5412075664-official"
		],
		"workingPressureBar": [
			"fuji-5412075664-pressure-notice"
		],
		"connectorSize": [
			"fuji-5412075664-official"
		],
		"recommendedHose": [
			"fuji-5412075664-official"
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
		"min": 282,
		"typical": 282,
		"max": 282
	}
};

export default product;
