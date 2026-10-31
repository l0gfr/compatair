import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-gs-pro",
	"slug": "aircraft-gs-pro",
	"brand": "Aircraft",
	"model": "GS PRO",
	"mpn": "2403110",
	"categoryId": "graveur",
	"category": "graveur",
	"label": "Aircraft GS PRO",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-gs-pro.webp",
		"alt": "Repères techniques Aircraft GS PRO, référence 2403110",
		"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit ; fondée sur le relevé fabricant historique conservé par CompatAir"
	},
	"editorial": {
		"overview": "Aircraft GS PRO. Le passage Aircraft cité indique un besoin d’air (éventuellement approximatif), sans le qualifier de moyenne ni de maximum en charge. Le libellé « moyen » est retiré ; la consommation reste non dimensionnante. Référence fabricant : 2403110. Course de travail : 1.2 mm. Masse approximative : 0.19 kg. Type indiqué par le fabricant : Engraving pen.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Référence fabricant : 2403110.",
			"Course de travail : 1.2 mm.",
			"Masse approximative : 0.19 kg.",
			"Type indiqué par le fabricant : Engraving pen.",
			"Consommation de régime non précisé publiée : 60 L/min."
		],
		"limitations": [
			"Le besoin réel dépend de la charge, du cycle et des pertes de pression dans le flexible. Aucune mesure physique CompatAir.",
			"Une consommation moyenne ne constitue pas un débit maximal en usage continu. Vérifier le régime réel auprès du fabricant avant dimensionnement.",
			"Le passage Aircraft cité indique un besoin d’air (éventuellement approximatif), sans le qualifier de moyenne ni de maximum en charge. Le libellé « moyen » est retiré ; la consommation reste non dimensionnante."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"evidenceIds": [
				"aircraft-2403110-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation de régime non précisé publiée : 60 L/min.",
			"evidenceIds": [
				"aircraft-gs-pro-reserved-20261031-1"
			]
		},
		{
			"label": "Course de travail",
			"value": "1.2 mm",
			"evidenceIds": [
				"aircraft-2403110-20260927"
			]
		},
		{
			"label": "Masse approximative",
			"value": "0.19 kg",
			"evidenceIds": [
				"aircraft-2403110-20260927"
			]
		},
		{
			"label": "Type indiqué par le fabricant",
			"value": "Engraving pen",
			"evidenceIds": [
				"aircraft-2403110-20260927"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":60,\"typical\":60,\"max\":60},\"workingPressureBar\":{\"min\":6.3,\"typical\":6.3,\"max\":6.3}}",
			"evidenceIds": [
				"aircraft-2403110-20260927",
				"aircraft-gs-pro-reserved-20261031-1"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2403110-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2403110, réf. 2403110 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 60 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue tools. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : 22da35f9dfdf45646a1c9769247d976d34730e51aa9af02d9b5f12d55257222c. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2403110-documentation-20261023",
			"sourceUrl": "https://oxomi.com/p/3001205/datasheet/download/702076/2403110.pdf?language=de",
			"sourceLabel": "Stürmer Maschinen / AIRCRAFT, Fiche produit fabricant générée le23/10/2026, p. 1 (article 2403110)",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : OXOMI, portail public MROSE, fournisseur Stürmer702076. Empreinte PDF SHA-256 : 0135ade86db54fb361677036be1c9de8879e9938de283f62feadbaf24ea824be. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		},
		{
			"id": "aircraft-gs-pro-reserved-20261031-1",
			"sourceUrl": "https://oxomi.com/p/3001205/datasheet/download/702076/2403110.pdf?language=de",
			"sourceLabel": "Aircraft GS PRO : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 9bae60f73e5a955dd43c4eb0ce6ba12c7ed8aad0454ef352988e01dd7c62aa82. Le passage Aircraft cité indique un besoin d’air (éventuellement approximatif), sans le qualifier de moyenne ni de maximum en charge. Le libellé « moyen » est retiré ; la consommation reste non dimensionnante."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2403110-20260927"
		],
		"workingPressureBar": [
			"aircraft-2403110-20260927"
		],
		"airflowLpm": [
			"aircraft-2403110-20260927"
		],
		"airflowBasis": [
			"aircraft-gs-pro-reserved-20261031-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 60,
		"typical": 60,
		"max": 60
	},
	"airflowBasis": "unqualified"
};

export default product;
