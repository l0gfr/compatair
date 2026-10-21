import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cleco-120pthh304",
	"slug": "cleco-120pthh304",
	"brand": "Cleco",
	"model": "120PTHH304",
	"mpn": "120PTHH304",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Cleco 120PTHH304",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cleco-120pthh304.webp",
		"alt": "Repères techniques Cleco 120PTHH304, référence 120PTHH304",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=86",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "120PTHH304 : outil à impulsions avec arrêt automatique, carré de 1/2 pouce, 75–120 Nm et 3 000 tr/min à vide. Le 120PHH554 voisin est sans arrêt automatique et tourne à 5 500 tr/min. À 6 bar, le PTHH sépare 400 L/min à vide et 800 en charge ; le PHH donne 900 et 800. Le mécanisme d’arrêt et la séquence de serrage distinguent le choix avant le bilan d’air.",
		"verifiedFacts": [
			"Performances publiées à 6 bar à l’entrée de l’outil, note de la page 86.",
			"Le tableau distingue 400 L/min à vide et 800 L/min en charge à 6 bar. Le calcul conserve la plus élevée des deux valeurs publiées (800 L/min), sans cycle de travail supposé.",
			"Référence fabricant : 120PTHH304.",
			"Plage de couple publiée : 75 à 120 Nm.",
			"Vitesse à vide publiée : 3000 tr/min.",
			"Consommation à vide publiée : 400.0 L/min."
		],
		"limitations": [
			"La plage de couple ne garantit pas le résultat sur tout joint. Le calcul conserve le plus grand des deux régimes publiés pour chaque référence, sans coefficient d’usage implicite.",
			"Données de catalogue industriel, sans essai physique CompatAir. Disponibilité et révision livrée à confirmer avec le fournisseur.",
			"Source : catalogue GI-1250-EU, édition archivée du fabricant. Vérifier la référence et la notice de la révision effectivement livrée."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Performances publiées à 6 bar à l’entrée de l’outil, note de la page 86.",
			"evidenceIds": [
				"cleco-120pthh304-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Le tableau distingue 400 L/min à vide et 800 L/min en charge à 6 bar. Le calcul conserve la plus élevée des deux valeurs publiées (800 L/min), sans cycle de travail supposé.",
			"evidenceIds": [
				"cleco-120pthh304-20260926"
			]
		},
		{
			"label": "Plage de couple publiée",
			"value": "75 à 120 Nm",
			"evidenceIds": [
				"cleco-120pthh304-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "3000 tr/min",
			"evidenceIds": [
				"cleco-120pthh304-20260926"
			]
		},
		{
			"label": "Consommation à vide publiée",
			"value": "400.0 L/min",
			"evidenceIds": [
				"cleco-120pthh304-20260926"
			]
		},
		{
			"label": "Consommation en charge publiée",
			"value": "800.0 L/min",
			"evidenceIds": [
				"cleco-120pthh304-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.70 kg",
			"evidenceIds": [
				"cleco-120pthh304-20260926"
			]
		},
		{
			"label": "Sortie",
			"value": "1/2” Sq.Dr.",
			"evidenceIds": [
				"cleco-120pthh304-20260926"
			]
		},
		{
			"label": "Arrêt automatique",
			"value": "Oui (PTHH)",
			"evidenceIds": [
				"cleco-120pthh304-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "cleco-120pthh304-20260926",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=86",
			"sourceLabel": "Cleco et Master Power, catalogue GI-1250-EU, p. 86, réf. 120PTHH304",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le tableau distingue 400 L/min à vide et 800 L/min en charge à 6 bar. Le calcul conserve la plus élevée des deux valeurs publiées (800 L/min), sans cycle de travail supposé."
		},
		{
			"id": "cleco-120phh554-20260926",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=86",
			"sourceLabel": "Cleco et Master Power, catalogue GI-1250-EU, p. 86, réf. 120PHH554",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le tableau distingue 900 L/min à vide et 800 L/min en charge à 6 bar. Le calcul conserve la plus élevée des deux valeurs publiées (900 L/min), sans cycle de travail supposé."
		},
		{
			"id": "cleco-11pthh35q-20260926",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=86",
			"sourceLabel": "Cleco et Master Power, catalogue GI-1250-EU, p. 86, réf. 11PTHH35Q",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le tableau distingue 150 L/min à vide et 300 L/min en charge à 6 bar. Le calcul conserve la plus élevée des deux valeurs publiées (300 L/min), sans cycle de travail supposé."
		},
		{
			"id": "cleco-11pthh353-20260926",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=86",
			"sourceLabel": "Cleco et Master Power, catalogue GI-1250-EU, p. 86, réf. 11PTHH353",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le tableau distingue 150 L/min à vide et 300 L/min en charge à 6 bar. Le calcul conserve la plus élevée des deux valeurs publiées (300 L/min), sans cycle de travail supposé."
		}
	],
	"fieldSources": {
		"mpn": [
			"cleco-120pthh304-20260926"
		],
		"workingPressureBar": [
			"cleco-120pthh304-20260926"
		],
		"airflowLpm": [
			"cleco-120pthh304-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 800,
		"typical": 800,
		"max": 800
	}
};

export default product;
