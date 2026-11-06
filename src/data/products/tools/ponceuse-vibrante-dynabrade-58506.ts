import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "dynabrade-58506",
	"slug": "ponceuse-vibrante-dynabrade-58506",
	"categoryId": "ponceuse-vibrante",
	"category": "Ponceuse vibrante pneumatique",
	"label": "Ponceuse vibrante pneumatique Dynabrade 58506",
	"brand": "Dynabrade",
	"model": "58506",
	"mpn": "58506",
	"variant": {
		"familyId": "dynabrade-ponceuse-vibrante",
		"label": "58506",
		"distinguishingAttributes": {
			"révision": "À déterminer par numéro de série"
		}
	},
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"max": 6.2
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 6 mm",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"image": {
		"src": "/images/products/dynabrade-58506-technical-20261106.svg",
		"alt": "Repères techniques Dynabrade 58506, conditions documentaires et numéro de série à vérifier",
		"sourceUrl": "https://eu.dynabrade.com/assets/4c1ff1a3-4ab6-4a54-8fd2-9035a12b87e7/4074402509-pd19-01.pdf",
		"sourceLabel": "Carte technique CompatAir, notices fabricant documentées par numéro de série"
	},
	"editorial": {
		"overview": "Dynabrade 58506 : les notices 2011 et 2022 distinguent deux exécutions. Identifier le numéro de série avant de retenir puissance, consommation et dimensions.",
		"verifiedFacts": [
			"PD11.21 : 112 W, 368 L/min, 222 mm et 0,8 kg.",
			"PD19.01, série II10000C et suivantes : 82 W, 340 L/min, 218 mm et 0,82 kg."
		],
		"limitations": [
			"Les notices 2011 et 2022 publient des caractéristiques différentes selon numéro de série. L’exécution de l’exemplaire doit être identifiée avant calcul.",
			"Pression maximale de service 90 psi / 6,2 bar ; pas de pression de mesure implicite.",
			"Les anciens relevés et leurs preuves restent dans l’historique ; la version de l’exemplaire livré reste à vérifier."
		]
	},
	"specifications": [
		{
			"label": "PD11.21, version 2011",
			"value": "112 W ; 368 L/min ; 222 mm ; 0,8 kg",
			"evidenceIds": [
				"review:2026-11-06-followup:dynabrade-58506:2"
			]
		},
		{
			"label": "PD19.01, numéros de série II10000C et suivants",
			"value": "82 W ; 340 L/min ; 218 mm ; 0,82 kg",
			"evidenceIds": [
				"review:2026-11-06-followup:dynabrade-58506:1"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-58506-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=177",
			"sourceLabel": "Dynabrade, catalogue D25.01, 58506, page 177",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 177-0, ligne 5. Consommation maximale publiée : 13 (368) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		},
		{
			"id": "review:2026-11-06-followup:dynabrade-58506:1",
			"sourceUrl": "https://eu.dynabrade.com/assets/4c1ff1a3-4ab6-4a54-8fd2-9035a12b87e7/4074402509-pd19-01.pdf",
			"sourceLabel": "Dynabrade, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Deuxnoticesfabricantcomplètesretrouvées : PD11.21donne112W/368Lmin/222mm/0,8kg ; PD19.01pourserialII10000Cetsuivantsdonne82W/340Lmin/218mm/0,82kg. L'anciencataloguerenvoieHTML. Exposerlesrévisionsetsuspendrelepointmoteuruniversel,sanschoisirunserialnonfourni. SHA-256 du document complet : f51710c924da6c06fc5bc2c4bb42cace40892715d6d695baf7eacb4ad88b310e."
		},
		{
			"id": "review:2026-11-06-followup:dynabrade-58506:2",
			"sourceUrl": "https://apac.dynabrade.com/assets/fb9fe882-959a-4faf-92ac-3b856635f3f1/4074397358-pd1121.pdf",
			"sourceLabel": "Dynabrade, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Deuxnoticesfabricantcomplètesretrouvées : PD11.21donne112W/368Lmin/222mm/0,8kg ; PD19.01pourserialII10000Cetsuivantsdonne82W/340Lmin/218mm/0,82kg. L'anciencataloguerenvoieHTML. Exposerlesrévisionsetsuspendrelepointmoteuruniversel,sanschoisirunserialnonfourni. SHA-256 du document complet : 487fb5006430ce56a273f6c6713adc42b32c2fdae9969d6e42e106322a265b3e."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-06-followup:dynabrade-58506:1",
			"review:2026-11-06-followup:dynabrade-58506:2"
		],
		"workingPressureBar": [
			"review:2026-11-06-followup:dynabrade-58506:1",
			"review:2026-11-06-followup:dynabrade-58506:2"
		],
		"connectorSize": [
			"dynabrade-58506-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-58506-catalogue-d25-01"
		],
		"demandExplanation": [
			"review:2026-11-06-followup:dynabrade-58506:1",
			"review:2026-11-06-followup:dynabrade-58506:2"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	],
	"demandExplanation": "Les notices 2011 et 2022 publient des caractéristiques différentes selon numéro de série. L’exécution de l’exemplaire doit être identifiée avant calcul."
};

export default product;
