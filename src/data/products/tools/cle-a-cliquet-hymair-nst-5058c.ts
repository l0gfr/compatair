import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-hymair-nst-5058c",
	"slug": "cle-a-cliquet-hymair-nst-5058c",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Hymair NST-5058C",
	"brand": "Hymair",
	"model": "NST-5058C",
	"mpn": "NST-5058C",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-hymair-nst-5058c-technical-20261116-reserves.svg",
		"alt": "Repères techniques : Hymair NST-5058C",
		"sourceUrl": "https://www.steedtools.com/3-8-Composite-Body-Air-Ratchet-Wrench-Twin-Ratchet-Pawl-NST-5058C-pd123046238.html",
		"sourceLabel": "Carte technique CompatAir, documents constructeur relus le 16 novembre 2026"
	},
	"variant": {
		"familyId": "hymair-nst-5058c",
		"label": "Référence NST-5058C",
		"distinguishingAttributes": {
			"reference": "NST-5058C",
			"Vitesse à vide": "180 rpm",
			"Masse publiée (kg/lb)": "1.04/2.29"
		}
	},
	"editorial": {
		"overview": "La Hymair NST-5058C est le cliquet 3/8 pouce à corps composite et double cliquet. Elle mesure 235 mm et pèse 1,04 kg, contre 265 mm et 1,17 kg pour la NST-5059CA. Sa vitesse à vide est de 180 tr/min, contre 160 pour cette voisine ; les deux fiches publient 4 CFM moyens. Ce débit moyen et la pression de travail de 90 PSI ne constituent pas une consommation en charge mesurée au même point.",
		"verifiedFacts": [
			"Référence NST-5058C et marque Hymair explicitement présentes dans la fiche exacte.",
			"Dimensions 235 × 50 mm, masse 1,04 kg, vitesse à vide 180 tr/min.",
			"Carré 3/8 pouce et échappement arrière."
		],
		"limitations": [
			"Le couple maximal publié n’est pas une consigne de serrage étalonnée.",
			"La consommation moyenne reste hors calcul ; aucune cadence ni consommation en charge n’est extrapolée.",
			"Le PDF historique 404 n’est pas déclaré rétabli par cette fiche alternative.",
			"Données des documents identifiés, sans essai physique CompatAir ni garantie de disponibilité de la configuration livrée."
		]
	},
	"specifications": [
		{
			"label": "Carré et mécanisme",
			"value": "3/8 pouce ; double cliquet, corps composite",
			"evidenceIds": [
				"review:2026-11-16-reserves:cle-a-cliquet-hymair-nst-5058c:0"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "180 tr/min",
			"evidenceIds": [
				"review:2026-11-16-reserves:cle-a-cliquet-hymair-nst-5058c:0"
			]
		},
		{
			"label": "Longueur × hauteur",
			"value": "235 × 50 mm",
			"evidenceIds": [
				"review:2026-11-16-reserves:cle-a-cliquet-hymair-nst-5058c:0"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,04 kg (2,29 lb)",
			"evidenceIds": [
				"review:2026-11-16-reserves:cle-a-cliquet-hymair-nst-5058c:0"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4 CFM",
			"evidenceIds": [
				"review:2026-11-16-reserves:cle-a-cliquet-hymair-nst-5058c:0"
			]
		},
		{
			"label": "Pression de travail",
			"value": "90 PSI (6,2 BAR), distincte de la pression de mesure de consommation",
			"evidenceIds": [
				"review:2026-11-16-reserves:cle-a-cliquet-hymair-nst-5058c:0"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "60 Ft-Lb (85 Nm), valeurs constructeur conservées sans recalcul",
			"evidenceIds": [
				"review:2026-11-16-reserves:cle-a-cliquet-hymair-nst-5058c:0"
			]
		},
		{
			"label": "Raccord et flexible publiés",
			"value": "Entrée 1/4 pouce ; flexible intérieur 3/8 pouce",
			"evidenceIds": [
				"review:2026-11-16-reserves:cle-a-cliquet-hymair-nst-5058c:0"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-1-p2",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=RUpfAKgFCVcq&dp=GvUApKfKKUAU#page=2",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Composite Body, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 47d13da4c5b0263c82d7e669236b74a7dd1e71b7669074c79e9f5cb13b499b9b. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reserves:cle-a-cliquet-hymair-nst-5058c:0",
			"sourceUrl": "https://www.steedtools.com/3-8-Composite-Body-Air-Ratchet-Wrench-Twin-Ratchet-Pawl-NST-5058C-pd123046238.html",
			"sourceLabel": "Hymair, document relu le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Fiches exactes NST5058C et NST5059CA relues : taille, masse, régime à vide et consommation moyenne comparés. Rebinding de provenance vers le constructeur, sans transformer 90PSI de travail en pression de mesure. Apport : choix d’encombrement et de vitesse ; moteur variable-volume inchangé. GET complet SHA-256 2570f8f94c876942cdbada0995d5e90ae10f914615f882e7570048fe1f6476a7."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-16-reserves:cle-a-cliquet-hymair-nst-5058c:0"
		],
		"workingPressureBar": [
			"review:2026-11-16-reserves:cle-a-cliquet-hymair-nst-5058c:0"
		],
		"demandExplanation": [
			"review:2026-11-16-reserves:cle-a-cliquet-hymair-nst-5058c:0"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
		"Fiches exactes NST5058C et NST5059CA relues : taille, masse, régime à vide et consommation moyenne comparés. Rebinding de provenance vers le constructeur, sans transformer 90PSI de travail en pression de mesure. Apport : choix d’encombrement et de vitesse ; moteur variable-volume inchangé."
	]
};

export default product;
