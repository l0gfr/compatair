import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cleco-55phh603",
	"slug": "cleco-55phh603",
	"brand": "Cleco",
	"model": "55PHH603",
	"mpn": "55PHH603",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Cleco 55PHH603",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cleco-55phh603-technical-20261116-reviews.svg",
		"alt": "Repères techniques Cleco 55PHH603, référence 55PHH603",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"editorial": {
		"overview": "La 55PHH603 est l’outil à impulsions sans arrêt automatique, carré 3/8 pouce, de 30 à 55 Nm et 6 000 tr/min à vide. La 55PTHH403 ajoute l’arrêt automatique et tourne à 4 000 tr/min. À 6 bar, le tableau sépare 750 L/min à vide et 600 L/min en charge pour la PHH : seul le second régime est retenu dans le calcul en charge.",
		"verifiedFacts": [
			"Performances publiées à 6 bar à l’entrée de l’outil, note de la page 86.",
			"Référence fabricant : 55PHH603.",
			"Plage de couple publiée : 30 à 55 Nm.",
			"Vitesse à vide publiée : 6000 tr/min.",
			"Consommation à vide publiée : 750.0 L/min."
		],
		"limitations": [
			"Données de catalogue industriel, sans essai physique CompatAir. Disponibilité et révision livrée à confirmer avec le fournisseur.",
			"Source : catalogue GI-1250-EU, édition archivée du fabricant. Vérifier la référence et la notice de la révision effectivement livrée.",
			"Le tableau distingue 750 L/min à vide et 600 L/min en charge, à 6 bar. Le champ de dimensionnement utilise exclusivement les 600 L/min en charge."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Performances publiées à 6 bar à l’entrée de l’outil, note de la page 86.",
			"evidenceIds": [
				"cleco-55phh603-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Le tableau distingue 750 L/min à vide et 600 L/min en charge, à 6 bar. Le champ de dimensionnement utilise exclusivement les 600 L/min en charge.",
			"evidenceIds": [
				"cleco-55phh603-20260926"
			]
		},
		{
			"label": "Plage de couple publiée",
			"value": "30 à 55 Nm",
			"evidenceIds": [
				"cleco-55phh603-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "6000 tr/min",
			"evidenceIds": [
				"cleco-55phh603-20260926"
			]
		},
		{
			"label": "Consommation à vide publiée",
			"value": "750.0 L/min",
			"evidenceIds": [
				"cleco-55phh603-20260926"
			]
		},
		{
			"label": "Consommation en charge publiée",
			"value": "600.0 L/min",
			"evidenceIds": [
				"cleco-55phh603-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.12 kg",
			"evidenceIds": [
				"cleco-55phh603-20260926"
			]
		},
		{
			"label": "Sortie",
			"value": "3/8” Sq.Dr.",
			"evidenceIds": [
				"cleco-55phh603-20260926"
			]
		},
		{
			"label": "Arrêt automatique",
			"value": "Non (PHH)",
			"evidenceIds": [
				"cleco-55phh603-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "cleco-55phh603-20260926",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=86",
			"sourceLabel": "Cleco et Master Power, catalogue GI-1250-EU, p. 86, réf. 55PHH603",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le tableau distingue 750 L/min à vide et 600 L/min en charge à 6 bar. Le calcul conserve la plus élevée des deux valeurs publiées (750 L/min), sans cycle de travail supposé."
		},
		{
			"id": "review:2026-11-16-reviews:cleco-55phh603:0",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf",
			"sourceLabel": "Cleco, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La 55PHH603 est l’outil à impulsions sans arrêt automatique, carré 3/8 pouce, de 30 à 55 Nm et 6 000 tr/min à vide. La 55PTHH403 ajoute l’arrêt automatique et tourne à 4 000 tr/min. À 6 bar, le tableau sépare 750 L/min à vide et 600 L/min en charge pour la PHH : seul le second régime est retenu dans le calcul en charge. GET complet SHA-256 8668d5e77a6b2469dc9b9012841e65bbfb947234a8087faa6fdd90384b3babac. Pages PDF lues : 86."
		}
	],
	"fieldSources": {
		"mpn": [
			"cleco-55phh603-20260926"
		],
		"workingPressureBar": [
			"cleco-55phh603-20260926"
		],
		"airflowLpm": [
			"review:2026-11-16-reviews:cleco-55phh603:0"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 600,
		"typical": 600,
		"max": 600
	}
};

export default product;
