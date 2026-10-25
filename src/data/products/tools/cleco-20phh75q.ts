import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cleco-20phh75q",
	"slug": "cleco-20phh75q",
	"brand": "Cleco",
	"model": "20PHH75Q",
	"mpn": "20PHH75Q",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Cleco 20PHH75Q",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cleco-20phh75q.webp",
		"alt": "Repères techniques Cleco 20PHH75Q, référence 20PHH75Q",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=86",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "20PHH75Q : clé à impulsions sans arrêt automatique, 10 à 20 Nm et 7 500 tr/min. À 6 bar, Cleco distingue 400 L/min à vide et 300 L/min en charge. La 20PTHH40Q avec arrêt automatique annonce aussi 300 L/min en charge, mais seulement 150 L/min à vide et 4 000 tr/min.",
		"verifiedFacts": [
			"20PHH75Q sans coupure et 20PTHH40Q avec coupure : même plage 10–20 Nm, mais 7 500 contre 4 000 tr/min. À 6 bar, la PHH annonce 400 L/min à vide et 300 en charge ; la PTHH 150 à vide et 300 en charge.",
			"La consommation retenue est publiée à vide ; elle ne décrit pas la demande en charge."
		],
		"limitations": [
			"La consommation de référence de 400 L/min décrit le fonctionnement à vide, pas le fonctionnement en charge.",
			"400 est la plus élevée des deux valeurs publiées, pas un maximum fabricant couvrant tout régime. Le moteur ne représente pas les deux états dans un même profil.",
			"Les 300 L/min en charge restent publiés comme point distinct ; la réserve à vide est un choix conservateur du profil actuel, pas l’affirmation que la source ne donne aucune valeur en charge."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Performances publiées à 6 bar à l’entrée de l’outil, note de la page 86.",
			"evidenceIds": [
				"cleco-20phh75q-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Le tableau distingue 400 L/min à vide et 300 L/min en charge à 6 bar. Le calcul conserve la plus élevée des deux valeurs publiées (400 L/min), sans cycle de travail supposé.",
			"evidenceIds": [
				"cleco-20phh75q-20260926"
			]
		},
		{
			"label": "Plage de couple publiée",
			"value": "10 à 20 Nm",
			"evidenceIds": [
				"cleco-20phh75q-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "7500 tr/min",
			"evidenceIds": [
				"cleco-20phh75q-20260926"
			]
		},
		{
			"label": "Consommation à vide publiée",
			"value": "400.0 L/min",
			"evidenceIds": [
				"cleco-20phh75q-20260926"
			]
		},
		{
			"label": "Consommation en charge publiée",
			"value": "300.0 L/min",
			"evidenceIds": [
				"cleco-20phh75q-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.86 kg",
			"evidenceIds": [
				"cleco-20phh75q-20260926"
			]
		},
		{
			"label": "Sortie",
			"value": "1/4” QC",
			"evidenceIds": [
				"cleco-20phh75q-20260926"
			]
		},
		{
			"label": "Arrêt automatique",
			"value": "Non (PHH)",
			"evidenceIds": [
				"cleco-20phh75q-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "cleco-20phh75q-20260926",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=86",
			"sourceLabel": "Cleco et Master Power, catalogue GI-1250-EU, p. 86, réf. 20PHH75Q",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le tableau distingue 400 L/min à vide et 300 L/min en charge à 6 bar. Le calcul conserve la plus élevée des deux valeurs publiées (400 L/min), sans cycle de travail supposé."
		},
		{
			"id": "review-20261025-cleco-20phh75q-s031",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=86",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s031, pages PDF 86",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:28.474428+00:00, SHA-256 8668d5e77a6b2469dc9b9012841e65bbfb947234a8087faa6fdd90384b3babac. 20PHH75Q sans coupure et 20PTHH40Q avec coupure : même plage 10–20 Nm, mais 7 500 contre 4 000 tr/min. À 6 bar, la PHH annonce 400 L/min à vide et 300 en charge ; la PTHH 150 à vide et 300 en charge. Limite : Le profil actuel utilise 400 L/min à vide sans airflowBasis : ajouter free-speed."
		}
	],
	"fieldSources": {
		"mpn": [
			"cleco-20phh75q-20260926"
		],
		"workingPressureBar": [
			"cleco-20phh75q-20260926"
		],
		"airflowLpm": [
			"cleco-20phh75q-20260926",
			"review-20261025-cleco-20phh75q-s031"
		],
		"airflowBasis": [
			"review-20261025-cleco-20phh75q-s031"
		],
		"connectorSize": [
			"review-20261025-cleco-20phh75q-s031"
		],
		"recommendedHose": [
			"review-20261025-cleco-20phh75q-s031"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir.",
		"Relecture proposée du 25 octobre 2026 : Le profil actuel utilise 400 L/min à vide sans airflowBasis : ajouter free-speed."
	],
	"airflowLpm": {
		"min": 400,
		"typical": 400,
		"max": 400
	},
	"airflowBasis": "free-speed",
	"connectorSize": "1/4\" NPT",
	"recommendedHose": {
		"innerDiameterMm": 9.525
	}
};

export default product;
