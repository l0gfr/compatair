import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-metabo-hpt-nr90ad-s1",
	"slug": "agrafeuse-cloueuse-metabo-hpt-nr90ad-s1",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Metabo HPT NR90AD(S1)",
	"brand": "Metabo HPT",
	"model": "NR90AD(S1)",
	"mpn": "NR90AD(S1)",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 6.9,
		"typical": 6.9,
		"max": 6.9
	},
	"airPerActionLiters": 2.5,
	"actionLabel": "cycle de pose",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-metabo-hpt-nr90ad-s1.webp",
		"alt": "Repères techniques : Metabo HPT NR90AD(S1)",
		"sourceUrl": "https://www.metabo-hpt.com/docs/default-source/product-owners-manuals/bf9aff2e3a40407cb9486114fc12e71e.pdf?sfvrsn=e4dabf4c_2",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "metabo-hpt-nr90ad-s1",
		"label": "Référence NR90AD(S1)",
		"distinguishingAttributes": {
			"reference": "NR90AD(S1)",
			"Point du tableau retenu": "100 psi (6.9 bar), 2.5 ltr/cycle",
			"Autres points explicitement publiés": "80 psi (5.5 bar) : 1.7 L/cycle ; 90 psi (6.2 bar) : 2.1 L/cycle"
		}
	},
	"editorial": {
		"overview": "Metabo HPT NR90AD(S1). Volume déclaré : 2,5 L par cycle à 6,9 bar ; la cadence doit être renseignée. Point du tableau retenu : 100 psi (6.9 bar), 2.5 ltr/cycle. Autres points explicitement publiés : 80 psi (5.5 bar) : 1.7 L/cycle ; 90 psi (6.2 bar) : 2.1 L/cycle.",
		"verifiedFacts": [
			"Point du tableau retenu : 100 psi (6.9 bar), 2.5 ltr/cycle.",
			"Autres points explicitement publiés : 80 psi (5.5 bar) : 1.7 L/cycle ; 90 psi (6.2 bar) : 2.1 L/cycle."
		],
		"limitations": [
			"Une cadence déclarée permet le calcul moyen ; la pointe instantanée de déclenchement reste distincte.",
			"La notice porte la marque Hitachi et couvre explicitement NR90AD(S1) et NR90AE(S1) ; elle est publiée dans les notices du constructeur Metabo HPT.",
			"La consommation est un volume par cycle ; une cadence fournie par l’utilisateur est indispensable au calcul du débit moyen. Le chiffre .09 scfm de la page commerciale ne remplace pas l’unité par cycle de la notice.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Point du tableau retenu",
			"value": "100 psi (6.9 bar), 2.5 ltr/cycle",
			"evidenceIds": [
				"october2b-tools-oct2b-metabohpt-nr90-manual-pdf-p11"
			]
		},
		{
			"label": "Autres points explicitement publiés",
			"value": "80 psi (5.5 bar) : 1.7 L/cycle ; 90 psi (6.2 bar) : 2.1 L/cycle",
			"evidenceIds": [
				"october2b-tools-oct2b-metabohpt-nr90-manual-pdf-p11"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating pressure (bar) (5.5) (6.2) (6.9) ; tableau Air consumption et formule « air consumption at given air pressure » p.11. Point publié retenu : 6.9 bar, sans interpolation.",
			"evidenceIds": [
				"october2b-tools-oct2b-metabohpt-nr90-manual-pdf-p11"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "2.5 L/cycle",
			"evidenceIds": [
				"october2b-tools-oct2b-metabohpt-nr90-manual-pdf-p11"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-metabohpt-nr90-manual-pdf-p11",
			"sourceUrl": "https://www.metabo-hpt.com/docs/default-source/product-owners-manuals/bf9aff2e3a40407cb9486114fc12e71e.pdf?sfvrsn=e4dabf4c_2#page=11",
			"sourceLabel": "Metabo HPT, notice constructeur Hitachi NR90AD(S1)/NR90AE(S1), tableau de consommation p.11, page PDF 11",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 57defa88fed01f027ef22ca41d56ffd67867d9e7cce0a381d48d3c39a906a86a. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-metabohpt-nr90-manual-pdf-p11"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-metabohpt-nr90-manual-pdf-p11"
		],
		"airPerActionLiters": [
			"october2b-tools-oct2b-metabohpt-nr90-manual-pdf-p11"
		],
		"actionLabel": [
			"october2b-tools-oct2b-metabohpt-nr90-manual-pdf-p11"
		]
	},
	"notes": [
		"Volume déclaré : 2,5 L par cycle à 6,9 bar ; la cadence doit être renseignée."
	]
};

export default product;
