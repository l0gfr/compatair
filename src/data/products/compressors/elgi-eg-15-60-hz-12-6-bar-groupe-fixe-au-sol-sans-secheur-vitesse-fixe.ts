import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "elgi-eg-15-60-hz-12-6-bar-groupe-fixe-au-sol-sans-secheur-vitesse-fixe",
	"slug": "elgi-eg-15-60-hz-12-6-bar-groupe-fixe-au-sol-sans-secheur-vitesse-fixe",
	"brand": "ELGi",
	"model": "EG 15",
	"variant": {
		"familyId": "elgi-eg-15",
		"label": "groupe fixe au sol, sans sécheur ; vitesse fixe, 60 Hz, 12,6 bar",
		"distinguishingAttributes": {
			"équipement": "groupe fixe au sol, sans sécheur ; vitesse fixe",
			"pressionMaximale": "12,6 bar",
			"cuve": "0 L",
			"régulation": "vitesse fixe",
			"fréquence": "60 Hz"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 12.6,
	"fadCurve": [
		{
			"pressureBar": 12.1,
			"litersPerMinute": 1950
		}
	],
	"oilType": "oil",
	"powerKw": 15,
	"weightKg": 610,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/elgi-eg-15-60-hz-12-6-bar-groupe-fixe-au-sol-sans-secheur-vitesse-fixe.webp",
		"alt": "Repères techniques : ELGi EG 15, 60 Hz, 12,6 bar",
		"sourceUrl": "https://www.elgi.com/eu/wp-content/uploads/2019/10/eg-series-11-75-60hz.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "groupe fixe au sol, sans sécheur ; vitesse fixe",
			"evidenceIds": [
				"october2b-elgi-eg11-75-eu-p10"
			]
		},
		{
			"label": "Pression maximale du tableau constructeur",
			"value": "12,6 bar relatifs",
			"evidenceIds": [
				"october2b-elgi-eg11-75-eu-p10"
			]
		},
		{
			"label": "FAD à 12,1 bar",
			"value": "1,95 m³/min",
			"evidenceIds": [
				"october2b-elgi-eg11-75-eu-p10"
			]
		},
		{
			"label": "Fréquence de la documentation",
			"value": "60 Hz",
			"evidenceIds": [
				"october2b-elgi-eg11-75-eu-p10"
			]
		},
		{
			"label": "Périmètre documentaire",
			"value": "International",
			"evidenceIds": [
				"october2b-elgi-eg11-75-eu-p10"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "Groupe seul ; réservoir de stockage externe non inclus",
			"evidenceIds": [
				"october2b-elgi-eg11-75-eu-p10"
			]
		}
	],
	"editorial": {
		"overview": "ELGi EG 15, 60 Hz, 12,6 bar. 1 950 L/min à 12,1 bar. Moteur 15 kW ; groupe fixe au sol, sans sécheur ; vitesse fixe.",
		"verifiedFacts": [
			"Débit restitué relié à une pression et aux unités originales de la fiche fabricant.",
			"Périmètre retenu : groupe seul ; réservoir de stockage externe exclu.",
			"Limite de pression documentée : 12,6 bar ; le point FAD conserve sa pression publiée."
		],
		"limitations": [
			"Cette entrée correspond à une configuration constructeur de pression maximale ; aucun nouveau produit n’est créé à partir d’un simple point de test.",
			"Fonctionnement continu déclaré pour la série ; refroidissement, installation et entretien conditionnent ce service.",
			"Documentation à 60 Hz ; elle ne démontre pas les performances de la version 50 Hz. Alimentation et marché local à confirmer avant achat.",
			"Les seules pressions FAD retenues sont celles du document. Aucun débit aspiré, extrapolation ou essai d’utilisation CompatAir.",
			"Documentation et disponibilité de la configuration à confirmer avec le constructeur.",
			"Le taux de marche du groupe complet n’est pas établi. La classe de service du moteur et les promesses générales de gamme restent distinctes ; compatibilité continue indéterminée."
		]
	},
	"evidence": [
		{
			"id": "october2b-elgi-eg11-75-eu-p10",
			"sourceUrl": "https://www.elgi.com/eu/wp-content/uploads/2019/10/eg-series-11-75-60hz.pdf#page=10",
			"sourceLabel": "ELGi EG 11–75 kW, brochure 60 Hz, page PDF 10",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 8bc82033cb7674d7a38e6b598e3a87555db6aab7601604f39a955080e166aa66 de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "october2b-elgi-eg-duty",
			"sourceUrl": "https://www.elgi.com/eu/11-250-kw-eg-series-screw-compressors/",
			"sourceLabel": "Déclaration fabricant de fonctionnement continu",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 f95dd586e25e8dc2b4a11721c3af24735d08261bb95588268dbd8e4b3bc8f97c de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "october2b-elgi-eg-duty",
			"sourceUrl": "https://www.elgi.com/eu/11-250-kw-eg-series-screw-compressors/",
			"sourceLabel": "Déclaration fabricant de fonctionnement continu",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 f95dd586e25e8dc2b4a11721c3af24735d08261bb95588268dbd8e4b3bc8f97c de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-06-followup:elgi-eg-15-60-hz-12-6-bar-groupe-fixe-au-sol-sans-secheur-vitesse-fixe:1",
			"sourceUrl": "https://www.elgi.com/eu/wp-content/uploads/2019/10/eg-series-11-75-60hz.pdf#page=10",
			"sourceLabel": "ELGi, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Table p10 : EG15 60Hz,1950 L/min à12,1 bar etmax12,6,15 kW. Conserver60Hz et pression de mesure distincte, ne pas en déduire une version européenne50Hz ou un cycle exact1. SHA-256 du document complet : 8bc82033cb7674d7a38e6b598e3a87555db6aab7601604f39a955080e166aa66."
		},
		{
			"id": "review:2026-11-06-followup:elgi-eg-15-60-hz-12-6-bar-groupe-fixe-au-sol-sans-secheur-vitesse-fixe:2",
			"sourceUrl": "https://www.elgi.com/eu/11-250-kw-eg-series-screw-compressors/",
			"sourceLabel": "ELGi, revue documentaire du 6 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Table p10 : EG15 60Hz,1950 L/min à12,1 bar etmax12,6,15 kW. Conserver60Hz et pression de mesure distincte, ne pas en déduire une version européenne50Hz ou un cycle exact1. SHA-256 du document complet : 62416cba65917be904fe8544a86ce6fd5c50b7951591db58e5bf3a28e9559346."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october2b-elgi-eg11-75-eu-p10"
		],
		"maxPressureBar": [
			"october2b-elgi-eg11-75-eu-p10"
		],
		"fadCurve": [
			"october2b-elgi-eg11-75-eu-p10"
		],
		"powerKw": [
			"october2b-elgi-eg11-75-eu-p10"
		],
		"oilType": [
			"october2b-elgi-eg-duty"
		],
		"weightKg": [
			"october2b-elgi-eg11-75-eu-p10"
		]
	},
	"notes": [
		"Les unités bar(g) et psig désignent des pressions relatives lorsque le document les précise ; les autres valeurs en bar sont reprises telles qu’imprimées, sans conversion en pression absolue. Conditions ISO et pression de restitution restent celles du document constructeur."
	]
};

export default product;
