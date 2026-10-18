import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "master-power-mp4400-35",
	"slug": "master-power-mp4400-35",
	"brand": "Master Power",
	"model": "MP4400-35",
	"mpn": "MP4400-35",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Master Power MP4400-35",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/master-power-mp4400-35.webp",
		"alt": "Repères techniques Master Power MP4400-35, référence MP4400-35",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=56",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "MP4400-35 : ponceuse de 5 pouces à orbite de 3/16 pouce, 12 000 tr/min, longueur de 179,32 mm et masse de 0,75 kg. La MP4400-15 voisine est plus longue et plus lourde, avec les mêmes 430 L/min déclarés à 6,2 bar.",
		"verifiedFacts": [
			"Note General de la page 56 : performances mesurées à 6,2 bar à l’entrée de l’outil.",
			"Note de la série : Air consumption 0.43 m³/min, soit 430 L/min. Le régime maximum ou moyen n’est pas précisé.",
			"Référence fabricant : MP4400-35.",
			"Diamètre du plateau publié : 5 pouces.",
			"Orbite publiée : 3/16 pouce.",
			"Vitesse publiée : 12 000 tr/min."
		],
		"limitations": [
			"La page répète le titre central vacuum pour plusieurs suffixes ; le système d’aspiration exact doit être confirmé sans attribuer une fonction au seul suffixe.",
			"Le régime de consommation n’est pas qualifié : les 430 L/min ne garantissent pas une utilisation continue."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Note General de la page 56 : performances mesurées à 6,2 bar à l’entrée de l’outil.",
			"evidenceIds": [
				"master-power-mp4400-35-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Note de la série : Air consumption 0.43 m³/min, soit 430 L/min. Le régime maximum ou moyen n’est pas précisé.",
			"evidenceIds": [
				"master-power-mp4400-35-20260926"
			]
		},
		{
			"label": "Diamètre du plateau publié",
			"value": "5 pouces",
			"evidenceIds": [
				"master-power-mp4400-35-20260926"
			]
		},
		{
			"label": "Orbite publiée",
			"value": "3/16 pouce",
			"evidenceIds": [
				"master-power-mp4400-35-20260926"
			]
		},
		{
			"label": "Vitesse publiée",
			"value": "12 000 tr/min",
			"evidenceIds": [
				"master-power-mp4400-35-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.75 kg",
			"evidenceIds": [
				"master-power-mp4400-35-20260926"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "179.32 mm",
			"evidenceIds": [
				"master-power-mp4400-35-20260926"
			]
		},
		{
			"label": "Fixation du plateau",
			"value": "5/16-24",
			"evidenceIds": [
				"master-power-mp4400-35-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "master-power-mp4400-35-20260926",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=56",
			"sourceLabel": "Cleco et Master Power, catalogue GI-1250-EU, p. 56, réf. MP4400-35",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Note de la série : Air consumption 0.43 m³/min, soit 430 L/min. Le régime maximum ou moyen n’est pas précisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"master-power-mp4400-35-20260926"
		],
		"workingPressureBar": [
			"master-power-mp4400-35-20260926"
		],
		"airflowLpm": [
			"master-power-mp4400-35-20260926"
		],
		"airflowBasis": [
			"master-power-mp4400-35-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 430,
		"typical": 430,
		"max": 430
	},
	"airflowBasis": "unqualified"
};

export default product;
