import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-aircat-5250-a-t",
	"slug": "burineur-aircat-5250-a-t",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Aircat 5250-A-T",
	"brand": "Aircat",
	"model": "5250-A-T",
	"mpn": "5250-A-T",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-aircat-5250-a-t.webp",
		"alt": "Repères techniques : Aircat 5250-A-T",
		"sourceUrl": "https://continentaltoolgroup.com/product/aircat-401-shank-super-duty-air-hammer/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aircat-5250-a-t",
		"label": "Référence 5250-A-T",
		"distinguishingAttributes": {
			"reference": "5250-A-T",
			"Masse publiée": "5.38 lb",
			"Type de retenue": "Quick-change"
		}
	},
	"editorial": {
		"overview": "Aircat 5250-A-T. La 5250-A-T est le marteau à queue 0,401 pouce et course 3 pouces, retenue rapide et régulateur à quatre positions. Les 5200-A-T et 5100-A-T ont d’autres masses et systèmes de retenue. Les 4,2 CFM ne constituent ni un volume par frappe ni un débit en charge qualifié à pression exacte.",
		"verifiedFacts": [
			"Queue : 0,401 pouce.",
			"Course : 3 pouces.",
			"Cadence : 2 500 coups/min.",
			"Retenue : Changement rapide.",
			"Longueur : 9,25 pouces.",
			"Consommation, régime non précisé : 4,2 CFM."
		],
		"limitations": [
			"La fiche ne documente pas suffisamment le régime de consommation et son appariement à une pression ; le calcul reste indéterminé."
		]
	},
	"specifications": [
		{
			"label": "Queue",
			"value": "0,401 pouce",
			"evidenceIds": [
				"burineur-aircat-5250-a-t-reserved-20261103-1"
			]
		},
		{
			"label": "Course",
			"value": "3 pouces",
			"evidenceIds": [
				"burineur-aircat-5250-a-t-reserved-20261103-1"
			]
		},
		{
			"label": "Cadence",
			"value": "2 500 coups/min",
			"evidenceIds": [
				"burineur-aircat-5250-a-t-reserved-20261103-1"
			]
		},
		{
			"label": "Retenue",
			"value": "Changement rapide",
			"evidenceIds": [
				"burineur-aircat-5250-a-t-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "9,25 pouces",
			"evidenceIds": [
				"burineur-aircat-5250-a-t-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation, régime non précisé",
			"value": "4,2 CFM",
			"evidenceIds": [
				"burineur-aircat-5250-a-t-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-26-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/aircat-401-shank-super-duty-air-hammer/",
			"sourceLabel": "Aircat, fiche fabricant de la référence 5250-A-T",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : e5fb1b562b5cf51c4af914933520c39282c710cdfbcda0d8e8c72954cd0d102d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "burineur-aircat-5250-a-t-reserved-20261103-1",
			"sourceUrl": "https://continentaltoolgroup.com/product/aircat-401-shank-super-duty-air-hammer/",
			"sourceLabel": "Aircat : revue factuelle du 3 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 c7a56d363eba4576f0dc0af89b840fc0c7ea032dc9f2e5e1ee82da1760b100b7. La 5250-A-T est le marteau à queue 0,401 pouce et course 3 pouces, retenue rapide et régulateur à quatre positions. Les 5200-A-T et 5100-A-T ont d’autres masses et systèmes de retenue. Les 4,2 CFM ne constituent ni un volume par frappe ni un débit en charge qualifié à pression exacte."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-ctg-pdp-26-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-26-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-26-p1"
		],
		"editorial": [
			"burineur-aircat-5250-a-t-reserved-20261103-1"
		],
		"specifications": [
			"burineur-aircat-5250-a-t-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
