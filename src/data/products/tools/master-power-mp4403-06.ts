import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "master-power-mp4403-06",
	"slug": "master-power-mp4403-06",
	"brand": "Master Power",
	"model": "MP4403-06",
	"mpn": "MP4403-06",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Master Power MP4403-06",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/master-power-mp4403-06.webp",
		"alt": "Repères techniques Master Power MP4403-06, référence MP4403-06",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=56",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "MP4403-06 : ponceuse sans aspiration, plateau de 6 pouces et orbite de 3/32 pouce, contre 5 pouces pour la MP4403-05. Les deux lignes donnent 12 000 tr/min et la même consommation de série de 0,43 m³/min à 6,2 bar, soit 430 L/min. La surface et les consommables changent, sans différence de besoin d’air démontrée.",
		"verifiedFacts": [
			"Note General de la page 56 : performances mesurées à 6,2 bar à l’entrée de l’outil.",
			"Note de la série : Air consumption 0.43 m³/min, soit 430 L/min. Le régime maximum ou moyen n’est pas précisé.",
			"Référence fabricant : MP4403-06.",
			"Diamètre du plateau publié : 6 pouces.",
			"Orbite publiée : 3/32 pouce.",
			"Vitesse publiée : 12 000 tr/min."
		],
		"limitations": [
			"Le régime de consommation n’est pas précisé. La ligne non-vacuum de ces références ne doit pas être confondue avec les titres central vacuum des lignes suivantes.",
			"Catalogue GI-1250-EU archivé : disponibilité et équipement à confirmer avec le fournisseur.",
			"Pas de mesure physique CompatAir."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Note General de la page 56 : performances mesurées à 6,2 bar à l’entrée de l’outil.",
			"evidenceIds": [
				"master-power-mp4403-06-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Note de la série : Air consumption 0.43 m³/min, soit 430 L/min. Le régime maximum ou moyen n’est pas précisé.",
			"evidenceIds": [
				"master-power-mp4403-06-20260926"
			]
		},
		{
			"label": "Diamètre du plateau publié",
			"value": "6 pouces",
			"evidenceIds": [
				"master-power-mp4403-06-20260926"
			]
		},
		{
			"label": "Orbite publiée",
			"value": "3/32 pouce",
			"evidenceIds": [
				"master-power-mp4403-06-20260926"
			]
		},
		{
			"label": "Vitesse publiée",
			"value": "12 000 tr/min",
			"evidenceIds": [
				"master-power-mp4403-06-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.76 kg",
			"evidenceIds": [
				"master-power-mp4403-06-20260926"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "139.19 mm",
			"evidenceIds": [
				"master-power-mp4403-06-20260926"
			]
		},
		{
			"label": "Fixation du plateau",
			"value": "5/16-24",
			"evidenceIds": [
				"master-power-mp4403-06-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "master-power-mp4403-06-20260926",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=56",
			"sourceLabel": "Cleco et Master Power, catalogue GI-1250-EU, p. 56, réf. MP4403-06",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Note de la série : Air consumption 0.43 m³/min, soit 430 L/min. Le régime maximum ou moyen n’est pas précisé."
		},
		{
			"id": "master-power-mp4403-05-20260926",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=56",
			"sourceLabel": "Cleco et Master Power, catalogue GI-1250-EU, p. 56, réf. MP4403-05",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Note de la série : Air consumption 0.43 m³/min, soit 430 L/min. Le régime maximum ou moyen n’est pas précisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"master-power-mp4403-06-20260926"
		],
		"workingPressureBar": [
			"master-power-mp4403-06-20260926"
		],
		"airflowLpm": [
			"master-power-mp4403-06-20260926"
		],
		"airflowBasis": [
			"master-power-mp4403-06-20260926"
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
