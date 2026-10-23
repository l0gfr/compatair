import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-iss-compact-pro",
	"slug": "aircraft-iss-compact-pro",
	"brand": "Aircraft",
	"model": "ISS ½\" Compact PRO",
	"mpn": "2401400",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Aircraft ISS ½\" Compact PRO",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-iss-compact-pro.webp",
		"alt": "Repères techniques Aircraft ISS ½\" Compact PRO, référence 2401400",
		"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit ; fondée sur le relevé fabricant historique conservé par CompatAir"
	},
	"editorial": {
		"overview": "Aircraft ISS ½\" Compact PRO, référence 2401400. Consommation moyenne publiée : 130 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Couple, rotation à droite : 230/360/430 Nm. Couple, rotation à gauche : 540 Nm.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 130 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : 2401400.",
			"Couple, rotation à droite : 230/360/430 Nm.",
			"Couple, rotation à gauche : 540 Nm.",
			"Mandrin ou entraînement publié : ½ \"."
		],
		"limitations": [
			"Le besoin réel dépend de la charge, du cycle et des pertes de pression dans le flexible. Aucune mesure physique CompatAir.",
			"Une consommation moyenne ne constitue pas un débit maximal en usage continu. Vérifier le régime réel auprès du fabricant avant dimensionnement.",
			"Écarts entre documents fabricant : Consommation d’air (L/min) : relevé de fiche du 27/09/2026 = 130 (moyenne publiée sur la fiche) ; Catalogue AIRCRAFT 2019 = 420 (catalogue2019, régime non précisé)."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"evidenceIds": [
				"aircraft-2401400-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 130 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"aircraft-2401400-20260927"
			]
		},
		{
			"label": "Couple, rotation à droite",
			"value": "230/360/430 Nm",
			"evidenceIds": [
				"aircraft-2401400-20260927"
			]
		},
		{
			"label": "Couple, rotation à gauche",
			"value": "540 Nm",
			"evidenceIds": [
				"aircraft-2401400-20260927"
			]
		},
		{
			"label": "Mandrin ou entraînement publié",
			"value": "½ \"",
			"evidenceIds": [
				"aircraft-2401400-20260927"
			]
		},
		{
			"label": "Masse approximative",
			"value": "1,2 kg",
			"evidenceIds": [
				"aircraft-2401400-20260927"
			]
		},
		{
			"label": "Type indiqué par le fabricant",
			"value": "Impact wrench ½\"",
			"evidenceIds": [
				"aircraft-2401400-20260927"
			]
		},
		{
			"label": "Écart documentaire fabricant",
			"value": "Consommation d’air (L/min) : relevé de fiche du 27/09/2026 = 130 (moyenne publiée sur la fiche) ; Catalogue AIRCRAFT 2019 = 420 (catalogue2019, régime non précisé).",
			"evidenceIds": [
				"aircraft-2401400-20260927",
				"aircraft-2401400-documentation-20261023"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2401400-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2401400, réf. 2401400 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 130 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue tools. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : 22da35f9dfdf45646a1c9769247d976d34730e51aa9af02d9b5f12d55257222c. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2401400-documentation-20261023",
			"sourceUrl": "https://www.aarniotools.fi/wp-content/uploads/2020/10/AIRCRAFT_catalogue_2019-1.pdf#page=191",
			"sourceLabel": "AIRCRAFT / Stürmer Maschinen, Catalogue AIRCRAFT 2019, p. 191 (article 2401400)",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : document fabricant diffusé par Aarnio Tools. Empreinte PDF SHA-256 : f23efcb9a198fbca962f2b2ef05942c910cb6c522d1219e33473889bde99d62a. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2401400-20260927"
		],
		"workingPressureBar": [
			"aircraft-2401400-20260927"
		],
		"airflowLpm": [
			"aircraft-2401400-20260927"
		],
		"airflowBasis": [
			"aircraft-2401400-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 130,
		"typical": 130,
		"max": 130
	},
	"airflowBasis": "average"
};

export default product;
