import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "marteau-a-river-michigan-pneumatic-mp-1xbu-st",
	"slug": "marteau-a-river-michigan-pneumatic-mp-1xbu-st",
	"categoryId": "marteau-a-river",
	"category": "marteau-a-river",
	"label": "Michigan Pneumatic MP-1XBU-ST",
	"brand": "Michigan Pneumatic",
	"model": "MP-1XBU-ST",
	"mpn": "MP-1XBU-ST",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/marteau-a-river-michigan-pneumatic-mp-1xbu-st.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-1XBU-ST",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/6-Aircraft%20Riveters_v2.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-1xbu-st",
		"label": "Référence MP-1XBU-ST",
		"distinguishingAttributes": {
			"reference": "MP-1XBU-ST",
			"Masse publiée": "2.2 lbs",
			"Ligne technique constructeur": "MP-1XBU-ST Button 0.401 5/32\" 1/8\" 9/16\" x 1-3/8\" 2850 4-1/2\"6-5/16\" 2.2 lbs 1/4\" 3/8\" 10.6 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-1XBU-ST. Le MP-1XBU-ST est le riveteur à poignée bouton, longueur 6 5/16 pouces, différent du MP-1X-ST déporté de 4½ pouces. Sa course 1⅜ pouce et ses capacités duralumin 5/32 et acier 1/8 ne sont pas celles du MP-2XBU-ST. Les 10,6 CFM moyens restent hors calcul continu.",
		"verifiedFacts": [
			"Masse publiée : 2.2 lbs.",
			"Ligne technique constructeur : MP-1XBU-ST Button 0.401 5/32\" 1/8\" 9/16\" x 1-3/8\" 2850 4-1/2\"6-5/16\" 2.2 lbs 1/4\" 3/8\" 10.6 cfm.",
			"Poignée : Bouton, version BU.",
			"Queue : 0,401 pouce.",
			"Capacités duralumin / acier : 5/32 pouce / 1/8 pouce.",
			"Longueur de la version BU : 6 5/16 pouces."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Données du catalogue constructeur archivé ; consommation moyenne ou de régime non précisé, sans certification du besoin maximal en charge.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "2.2 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-6-pdf-p2"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-1XBU-ST Button 0.401 5/32\" 1/8\" 9/16\" x 1-3/8\" 2850 4-1/2\"6-5/16\" 2.2 lbs 1/4\" 3/8\" 10.6 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-6-pdf-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-6-pdf-p2"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "10.6 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-6-pdf-p2"
			]
		},
		{
			"label": "Poignée",
			"value": "Bouton, version BU",
			"evidenceIds": [
				"marteau-a-river-michigan-pneumatic-mp-1xbu-st-reserved-20261103-1"
			]
		},
		{
			"label": "Queue",
			"value": "0,401 pouce",
			"evidenceIds": [
				"marteau-a-river-michigan-pneumatic-mp-1xbu-st-reserved-20261103-1"
			]
		},
		{
			"label": "Capacités duralumin / acier",
			"value": "5/32 pouce / 1/8 pouce",
			"evidenceIds": [
				"marteau-a-river-michigan-pneumatic-mp-1xbu-st-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur de la version BU",
			"value": "6 5/16 pouces",
			"evidenceIds": [
				"marteau-a-river-michigan-pneumatic-mp-1xbu-st-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-6-pdf-p2",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/6-Aircraft%20Riveters_v2.pdf#page=2",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 6, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : db4ad3c3e258481ba1d19f3b9c6afbd624eea583ec1d6652b495921b7a8dbe80. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "marteau-a-river-michigan-pneumatic-mp-1xbu-st-reserved-20261103-1",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/6-Aircraft%20Riveters_v2.pdf#page=2",
			"sourceLabel": "Michigan Pneumatic : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 db4ad3c3e258481ba1d19f3b9c6afbd624eea583ec1d6652b495921b7a8dbe80. Le MP-1XBU-ST est le riveteur à poignée bouton, longueur 6 5/16 pouces, différent du MP-1X-ST déporté de 4½ pouces. Sa course 1⅜ pouce et ses capacités duralumin 5/32 et acier 1/8 ne sont pas celles du MP-2XBU-ST. Les 10,6 CFM moyens restent hors calcul continu."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-6-pdf-p2"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-6-pdf-p2"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-6-pdf-p2"
		],
		"editorial": [
			"marteau-a-river-michigan-pneumatic-mp-1xbu-st-reserved-20261103-1"
		],
		"specifications": [
			"marteau-a-river-michigan-pneumatic-mp-1xbu-st-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
