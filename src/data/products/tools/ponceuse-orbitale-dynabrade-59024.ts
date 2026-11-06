import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "dynabrade-59024",
	"slug": "ponceuse-orbitale-dynabrade-59024",
	"categoryId": "ponceuse-orbitale",
	"category": "Ponceuse orbitale pneumatique",
	"label": "Ponceuse orbitale pneumatique Dynabrade Dynorbital-Spirit 59024",
	"brand": "Dynabrade",
	"model": "Dynorbital-Spirit 59024",
	"mpn": "59024",
	"variant": {
		"familyId": "dynabrade-ponceuse-orbitale",
		"label": "Dynorbital-Spirit 59024",
		"distinguishingAttributes": {
			"Aspiration des poussières": "Aspiration centralisée",
			"Diamètre du plateau": "127 mm",
			"Diamètre de l’orbite": "5 mm",
			"Longueur": "184 mm",
			"Puissance moteur": "186 W",
			"Vitesse moteur publiée": "12 000 tr/min"
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
		"src": "/images/products/dynabrade-59024-technical-20261106.svg",
		"alt": "Repères techniques Dynabrade Dynorbital-Spirit 59024, conditions documentaires et numéro de série à vérifier",
		"sourceUrl": "https://us.dynabrade.com/assets/e858df50-da51-48b2-a733-91edf98776d6/4074400985-pd1422.pdf",
		"sourceLabel": "Carte technique CompatAir, notices fabricant documentées par numéro de série"
	},
	"editorial": {
		"overview": "Dynabrade Dynorbital-Spirit 59024 : ponceuse centrale 5 pouces, orbite 5 mm et longueur 184 mm selon PD14.22, applicable à partir du numéro 14H1000H. Consommation publiée 450 L/min, régime en charge à confirmer.",
		"verifiedFacts": [
			"Aspiration des poussières : Aspiration centralisée.",
			"Diamètre du plateau : 127 mm.",
			"Diamètre de l’orbite : 5 mm.",
			"Longueur : 184 mm.",
			"Entrée d’air : 1/4 pouce NPT.",
			"Flexible : 6 mm de diamètre intérieur publié."
		],
		"limitations": [
			"La notice PD14.22 pour numéros de série 14H1000H et suivants publie 450 L/min (16 SCFM), sans régime de consommation permettant de conclure en charge.",
			"Pression maximale de service 90 psi / 6,2 bar ; pas de pression de mesure implicite.",
			"Les anciens relevés et leurs preuves restent dans l’historique ; la version de l’exemplaire livré reste à vérifier."
		]
	},
	"specifications": [
		{
			"label": "Aspiration des poussières",
			"value": "Aspiration centralisée",
			"evidenceIds": [
				"dynabrade-59024-catalogue-d25-01"
			]
		},
		{
			"label": "Diamètre du plateau",
			"value": "127 mm",
			"evidenceIds": [
				"dynabrade-59024-catalogue-d25-01"
			]
		},
		{
			"label": "Diamètre de l’orbite",
			"value": "5 mm",
			"evidenceIds": [
				"dynabrade-59024-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "184 mm",
			"evidenceIds": [
				"dynabrade-59024-catalogue-d25-01"
			]
		},
		{
			"label": "Puissance moteur",
			"value": "186 W",
			"evidenceIds": [
				"dynabrade-59024-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "12 000 tr/min",
			"evidenceIds": [
				"dynabrade-59024-catalogue-d25-01"
			]
		},
		{
			"label": "Consommation publiée, hors dimensionnement",
			"value": "396 L/min ; La notice PD14.22 pour numéros de série 14H1000H et suivants publie 450 L/min (16 SCFM), sans régime de consommation permettant de conclure en charge.",
			"evidenceIds": [
				"review:2026-11-06-followup:dynabrade-59024:1"
			]
		},
		{
			"label": "Consommation PD14.22, série 14H1000H et suivantes",
			"value": "450 L/min / 16 SCFM ; pression maximale de service 6,2 bar distincte du point de mesure.",
			"evidenceIds": [
				"review:2026-11-06-followup:dynabrade-59024:1"
			]
		},
		{
			"label": "Ancienne transcription conservée",
			"value": "396 L/min dans le catalogue D25.01 anciennement cité ; document actuel indisponible à cette URL.",
			"evidenceIds": [
				"review:2026-11-06-followup:dynabrade-59024:1"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-59024-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=157",
			"sourceLabel": "Dynabrade, catalogue D25.01, 59024, page 157",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 157-1, ligne 11. Consommation publiée : 14 (396) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		},
		{
			"id": "review:2026-11-06-followup:dynabrade-59024:1",
			"sourceUrl": "https://us.dynabrade.com/assets/e858df50-da51-48b2-a733-91edf98776d6/4074400985-pd1422.pdf",
			"sourceLabel": "Dynabrade, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Anciencataloguewww17redirigeversHTML, pasunPDF. NoticePD14.22actuelleexacte59024 : centrale5pouces/orbite5mm/184mm,applicableàpartirduserial14H1000H. Le débit396L/min doit rester documentaire tant que le tableau courant ne confirme pas son régime et son point ; ajouter la notice réelle. SHA-256 du document complet : f55d608f1bbce85a18a30c7b652b95650680acf063204df694811fa05c2a9895."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-06-followup:dynabrade-59024:1"
		],
		"workingPressureBar": [
			"review:2026-11-06-followup:dynabrade-59024:1"
		],
		"connectorSize": [
			"dynabrade-59024-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-59024-catalogue-d25-01"
		],
		"demandExplanation": [
			"review:2026-11-06-followup:dynabrade-59024:1"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	],
	"demandExplanation": "La notice PD14.22 pour numéros de série 14H1000H et suivants publie 450 L/min (16 SCFM), sans régime de consommation permettant de conclure en charge."
};

export default product;
