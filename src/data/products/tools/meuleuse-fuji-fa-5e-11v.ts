const product = {
	"id": "fuji-fa-5e-11v",
	"slug": "meuleuse-fuji-fa-5e-11v",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Fuji FA-5E-11V",
	"brand": "Fuji",
	"model": "FA-5E-11V",
	"mpn": "5412071137",
	"distributorSkus": [],
	"identifierAliases": [],
	"variant": {
		"familyId": "fuji-478828",
		"label": "FA-5E-11V",
		"distinguishingAttributes": {
			"Vitesse à vide": "7600 tr/min",
			"Puissance maximale de l’outil": "956 W",
			"Filetage de sortie": "W1/2-16",
			"Diamètre du disque (mm)": "180",
			"Entrée d’air": "3/8 pouce PT"
		}
	},
	"connectorSize": "Entrée 3/8 pouce PT, flexible intérieur 10 mm sur 5 m",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/fuji-fa-5e-11v-technical.webp",
		"alt": "Repères techniques Fuji FA-5E-11V : 960 L/min en charge, pression de travail 6,3 bar",
		"sourceUrl": "https://www.fujitools.com/en/products/5412071137",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche et la notice Fuji"
	},
	"editorial": {
		"overview": "Fuji FA-5E-11V, référence 5412071137, présente une consommation en charge de 16 L/s, soit 960 L/min. La notice liée à cette fiche indique une pression de référence des performances de 6,3 bar. Vitesse à vide : 7600 tr/min. Puissance maximale de l’outil : 956 W.",
		"verifiedFacts": [
			"Vitesse à vide : 7600 tr/min.",
			"Puissance maximale de l’outil : 956 W.",
			"Filetage de sortie : W1/2-16.",
			"Diamètre du disque (mm) : 180.",
			"Entrée 3/8 pouce PT ; flexible de 10 mm de diamètre intérieur sur 5 m."
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
			"value": "7600 tr/min",
			"evidenceIds": [
				"fuji-5412071137-official"
			]
		},
		{
			"label": "Puissance maximale de l’outil",
			"value": "956 W",
			"evidenceIds": [
				"fuji-5412071137-official"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "W1/2-16",
			"evidenceIds": [
				"fuji-5412071137-official"
			]
		},
		{
			"label": "Diamètre du disque (mm)",
			"value": "180",
			"evidenceIds": [
				"fuji-5412071137-official"
			]
		},
		{
			"label": "Alésage de l’abrasif",
			"value": "22 mm",
			"evidenceIds": [
				"fuji-5412071137-official"
			]
		},
		{
			"label": "Distance du bord à l’axe",
			"value": "22.5 mm",
			"evidenceIds": [
				"fuji-5412071137-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "214 mm",
			"evidenceIds": [
				"fuji-5412071137-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "2.25 kg",
			"evidenceIds": [
				"fuji-5412071137-official"
			]
		}
	],
	"evidence": [
		{
			"id": "fuji-5412071137-official",
			"sourceUrl": "https://www.fujitools.com/en/products/5412071137",
			"sourceLabel": "Fuji, fiche officielle FA-5E-11V, réf. 5412071137",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 16 L/s × 60 = 960 L/min. Valeurs brutes, unités et empreinte de la fiche versionnées."
		},
		{
			"id": "fuji-5412071137-pressure-notice",
			"sourceUrl": "https://www.photos-videos.fujitools.com/content/dam/pim/itba/fuji/technical-documents/9502000287_JA_A.pdf#page=1",
			"sourceLabel": "Fuji, notice 9502000287_JA_A, page 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Notice explicitement liée à la fiche individuelle. Lecture visuelle du tableau technique : performances données à 0,63 MPa, soit 6,3 bar. Conversion SI ; équivalence approximative en kgf/cm² non réutilisée."
		}
	],
	"fieldSources": {
		"mpn": [
			"fuji-5412071137-official"
		],
		"airflowLpm": [
			"fuji-5412071137-official"
		],
		"workingPressureBar": [
			"fuji-5412071137-pressure-notice"
		],
		"connectorSize": [
			"fuji-5412071137-official"
		],
		"recommendedHose": [
			"fuji-5412071137-official"
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
		"min": 960,
		"typical": 960,
		"max": 960
	}
};

export default product;
