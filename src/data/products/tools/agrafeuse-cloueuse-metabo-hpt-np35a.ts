import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-metabo-hpt-np35a",
	"slug": "agrafeuse-cloueuse-metabo-hpt-np35a",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Metabo HPT NP35A",
	"brand": "Metabo HPT",
	"model": "NP35A",
	"mpn": "NP35A",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 6.9,
		"typical": 6.9,
		"max": 6.9
	},
	"airPerActionLiters": 0.5,
	"actionLabel": "cycle de pose",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-metabo-hpt-np35a-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Metabo HPT NP35A",
		"sourceUrl": "https://www.metabo-hpt.com/docs/default-source/product-owners-manuals/np35a_e2_om.pdf?sfvrsn=4718c147_2",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "metabo-hpt-np35a",
		"label": "Référence NP35A",
		"distinguishingAttributes": {
			"reference": "NP35A",
			"Masse déclarée": "0.9 kg",
			"Dimensions L × H × l déclarées": "238 × 162 × 47 mm"
		}
	},
	"editorial": {
		"overview": "Le NP35A reçoit des pointes sans tête calibre23 de 15–35 mm ; le NP50A étend la longueur à 13–50 mm, tandis que le N3804A5 est une agrafeuse calibre18. Le NP35A publie 0,5 L par tir à 6,9 bar, 0,4 à 6,2 et 0,3 à 5,5. Le calcul doit utiliser la cadence réelle et la pression du point, sans reprendre l’exemple erroné de conversion en litres/minute de la notice.",
		"verifiedFacts": [
			"Pointes calibre23, 15–35 mm ; magasin100 ; masse0,9 kg.",
			"Table de consommation : 0,3 L/tir à5,5 bar,0,4 à6,2 et0,5 à6,9."
		],
		"limitations": [
			"Une cadence déclarée permet le calcul moyen ; la pointe instantanée de déclenchement reste distincte.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée.",
			"L’exemple3 outils ×30 tirs/min ×0,5 L/tir ×1,2 donne54 L/min ; le94 L/min imprimé dans la notice est incohérent. Les volumes par tir de la table restent distincts de cet exemple."
		]
	},
	"specifications": [
		{
			"label": "Masse déclarée",
			"value": "0.9 kg",
			"evidenceIds": [
				"october3c-tools-hpt-np35a-p9"
			]
		},
		{
			"label": "Dimensions L × H × l déclarées",
			"value": "238 × 162 × 47 mm",
			"evidenceIds": [
				"october3c-tools-hpt-np35a-p9"
			]
		},
		{
			"label": "Capacité du chargeur déclarée",
			"value": "100 clous",
			"evidenceIds": [
				"october3c-tools-hpt-np35a-p9"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "(.5 ltr/cycle at 6.9 bar)",
			"evidenceIds": [
				"october3c-tools-hpt-np35a-p9",
				"october3c-tools-hpt-np35a-p1"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": ".5 L/cycle",
			"evidenceIds": [
				"october3c-tools-hpt-np35a-p9",
				"october3c-tools-hpt-np35a-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-hpt-np35a-p9",
			"sourceUrl": "https://www.metabo-hpt.com/docs/default-source/product-owners-manuals/np35a_e2_om.pdf?sfvrsn=4718c147_2#page=9",
			"sourceLabel": "Notice constructeur conservée par Metabo HPT, référence exacte, page PDF 9",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 557d54400b71178005124aada964911c5308cbae18ea599533b5a9ea70ee67bb. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "october3c-tools-hpt-np35a-p1",
			"sourceUrl": "https://www.metabo-hpt.com/docs/default-source/product-owners-manuals/np35a_e2_om.pdf?sfvrsn=4718c147_2#page=1",
			"sourceLabel": "Notice constructeur conservée par Metabo HPT, référence exacte, page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 557d54400b71178005124aada964911c5308cbae18ea599533b5a9ea70ee67bb. Document complémentaire de la référence exacte, sans essai CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:agrafeuse-cloueuse-metabo-hpt-np35a:0",
			"sourceUrl": "https://www.metabo-hpt.com/docs/default-source/product-owners-manuals/np35a_e2_om.pdf?sfvrsn=4718c147_2",
			"sourceLabel": "Metabo HPT, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Le NP35A reçoit des pointes sans tête calibre23 de 15–35 mm ; le NP50A étend la longueur à 13–50 mm, tandis que le N3804A5 est une agrafeuse calibre18. Le NP35A publie 0,5 L par tir à 6,9 bar, 0,4 à 6,2 et 0,3 à 5,5. Le calcul doit utiliser la cadence réelle et la pression du point, sans reprendre l’exemple erroné de conversion en litres/minute de la notice. GET complet SHA-256 557d54400b71178005124aada964911c5308cbae18ea599533b5a9ea70ee67bb. Pages PDF lues : 9, 10, 11."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-hpt-np35a-p9"
		],
		"workingPressureBar": [
			"october3c-tools-hpt-np35a-p9",
			"october3c-tools-hpt-np35a-p1"
		],
		"airPerActionLiters": [
			"october3c-tools-hpt-np35a-p9",
			"october3c-tools-hpt-np35a-p1"
		],
		"actionLabel": [
			"october3c-tools-hpt-np35a-p9",
			"october3c-tools-hpt-np35a-p1"
		]
	},
	"notes": [
		"Volume déclaré : 0,5 L par cycle à 6,9 bar ; la cadence doit être renseignée."
	]
};

export default product;
