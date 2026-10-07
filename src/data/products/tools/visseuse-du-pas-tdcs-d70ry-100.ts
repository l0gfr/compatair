import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-du-pas-tdcs-d70ry-100",
	"slug": "visseuse-du-pas-tdcs-d70ry-100",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Du-Pas TDCS-D70RY-100",
	"brand": "Du-Pas",
	"model": "TDCS-D70RY-100",
	"mpn": "TDCS-D70RY-100",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 6
	},
	"demandExplanation": "Les caractéristiques mécaniques sont déclarées dans le tableau constructeur ; aucun débit de compatibilité n’est déduit du couple, de la vitesse ou de la masse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-du-pas-tdcs-d70ry-100.webp",
		"alt": "Repères techniques : Du-Pas TDCS-D70RY-100",
		"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113341_220907-Industrial-Assembly-Tools-Du-Pas.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "du-pas-tdcs-d70ry-100",
		"label": "Référence TDCS-D70RY-100",
		"distinguishingAttributes": {
			"reference": "TDCS-D70RY-100",
			"Masse publiée": "2.03 kg",
			"Vitesse libre publiée": "100 rpm"
		}
	},
	"editorial": {
		"overview": "Du-Pas TDCS-D70RY-100. Les caractéristiques mécaniques sont déclarées dans le tableau constructeur ; aucun débit de compatibilité n’est déduit du couple, de la vitesse ou de la masse. Masse publiée : 2.03 kg. Vitesse libre publiée : 100 rpm.",
		"verifiedFacts": [
			"Masse publiée : 2.03 kg.",
			"Vitesse libre publiée : 100 rpm.",
			"Plage de couple publiée : 35–60 N·m.",
			"Entrée d’air publiée : 1/4 inch."
		],
		"limitations": [
			"Les caractéristiques mécaniques sont déclarées dans le tableau constructeur ; aucun débit de compatibilité n’est déduit du couple, de la vitesse ou de la masse.",
			"Référence physique explicitement imprimée dans un tableau constructeur ; aucune référence n’est créée à partir d’une nomenclature de suffixes.",
			"Les conversions de contrôle de masse et longueur servent à relire le tableau ; elles ne reconstituent aucune consommation d’air.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "2.03 kg",
			"evidenceIds": [
				"october2b-tools-oct2b-tranmax-dupas-pdf-p14"
			]
		},
		{
			"label": "Vitesse libre publiée",
			"value": "100 rpm",
			"evidenceIds": [
				"october2b-tools-oct2b-tranmax-dupas-pdf-p14"
			]
		},
		{
			"label": "Plage de couple publiée",
			"value": "35–60 N·m",
			"evidenceIds": [
				"october2b-tools-oct2b-tranmax-dupas-pdf-p14"
			]
		},
		{
			"label": "Entrée d’air publiée",
			"value": "1/4 inch",
			"evidenceIds": [
				"october2b-tools-oct2b-tranmax-dupas-pdf-p14"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Recommended Air Pressure : 0.6 MPa ; pression recommandée, sans rattachement explicite à la consommation.",
			"evidenceIds": [
				"october2b-tools-oct2b-tranmax-dupas-pdf-p14"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-tranmax-dupas-pdf-p14",
			"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113341_220907-Industrial-Assembly-Tools-Du-Pas.pdf#page=14",
			"sourceLabel": "Du-Pas, catalogue pneumatique officiel publié par Tranmax, page PDF 14",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 3e3749757c14c7ee18541f6ebe65c09228de1c585b55366dc23a97860a65a840. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-tranmax-dupas-pdf-p14"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-tranmax-dupas-pdf-p14"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-tranmax-dupas-pdf-p14"
		]
	},
	"notes": [
		"Les caractéristiques mécaniques sont déclarées dans le tableau constructeur ; aucun débit de compatibilité n’est déduit du couple, de la vitesse ou de la masse."
	]
};

export default product;
