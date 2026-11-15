import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "elgi-eg-160-p-50-hz-11-bar-groupe-fixe-au-sol-sans-secheur-vitesse-fixe",
	"slug": "elgi-eg-160-p-50-hz-11-bar-groupe-fixe-au-sol-sans-secheur-vitesse-fixe",
	"brand": "ELGi",
	"model": "EG 160-P",
	"variant": {
		"familyId": "elgi-eg-160-p",
		"label": "groupe fixe au sol, sans sécheur ; vitesse fixe, 50 Hz, 11 bar",
		"distinguishingAttributes": {
			"équipement": "groupe fixe au sol, sans sécheur ; vitesse fixe",
			"pressionMaximale": "11 bar",
			"cuve": "0 L",
			"régulation": "vitesse fixe",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 11,
	"fadCurve": [
		{
			"pressureBar": 10,
			"litersPerMinute": 25700
		}
	],
	"oilType": "oil",
	"powerKw": 160,
	"weightKg": 3430,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/elgi-eg-160-p-50-hz-11-bar-groupe-fixe-au-sol-sans-secheur-vitesse-fixe-technical-20261115-followup.svg",
		"alt": "Repères techniques : ELGi EG 160-P, 50 Hz, 11 bar",
		"sourceUrl": "https://www.elgi.com/in/wp-content/uploads/2019/06/EG-Premium-90-160-catalogue_India.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 15 novembre 2026"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "groupe fixe au sol, sans sécheur ; vitesse fixe",
			"evidenceIds": [
				"october2b-elgi-eg-premium-p8"
			]
		},
		{
			"label": "Pression maximale du tableau constructeur",
			"value": "11 bar relatifs",
			"evidenceIds": [
				"october2b-elgi-eg-premium-p8"
			]
		},
		{
			"label": "FAD à 10 bar",
			"value": "25,7 m³/min",
			"evidenceIds": [
				"october2b-elgi-eg-premium-p8"
			]
		},
		{
			"label": "Fréquence de la documentation",
			"value": "50 Hz",
			"evidenceIds": [
				"october2b-elgi-eg-premium-p8"
			]
		},
		{
			"label": "Périmètre documentaire",
			"value": "Inde",
			"evidenceIds": [
				"october2b-elgi-eg-premium-p8"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "Groupe seul ; réservoir de stockage externe non inclus",
			"evidenceIds": [
				"october2b-elgi-eg-premium-p8"
			]
		},
		{
			"label": "Point de la ligne sélectionnée",
			"value": "25,7 m³/min ; 908 cfm à10 bar ; ISO1217:2009 annexe C",
			"evidenceIds": [
				"review:2026-11-12-technical:elgi-eg-160-p-50-hz-11-bar-groupe-fixe-au-sol-sans-secheur-vitesse-fixe:0"
			]
		},
		{
			"label": "Encombrement et masse",
			"value": "2916 × 1885 × 1925 mm ; 3430 kg",
			"evidenceIds": [
				"review:2026-11-12-technical:elgi-eg-160-p-50-hz-11-bar-groupe-fixe-au-sol-sans-secheur-vitesse-fixe:0"
			]
		}
	],
	"editorial": {
		"overview": "L’EG160-P50 Hz de pression maximale11 bar publie25,7 m³/min à10 bar,160 kW et3430 kg. La version13,5 bar donne 21,4 m³/min à12,5 bar. Les908 cfm de la ligne sélectionnée sont compatibles avec l’arrondi de25,7 m³/min ; les anomalies d’autres lignes ne sont pas transposées à celle-ci.",
		"verifiedFacts": [
			"Débit restitué relié à une pression et aux unités originales de la fiche fabricant.",
			"Périmètre retenu : groupe seul ; réservoir de stockage externe exclu.",
			"Limite de pression documentée : 11 bar ; le point FAD conserve sa pression publiée.",
			"Point de la ligne sélectionnée : 25,7 m³/min ; 908 cfm à10 bar ; ISO1217:2009 annexe C.",
			"Encombrement et masse : 2916 × 1885 × 1925 mm ; 3430 kg."
		],
		"limitations": [
			"Cette entrée correspond à une configuration constructeur de pression maximale ; aucun nouveau produit n’est créé à partir d’un simple point de test.",
			"Cycle de service non établi par les sources retenues ; la tenue permanente reste indéterminée.",
			"Les seules pressions FAD retenues sont celles du document. Aucun débit aspiré, extrapolation ou essai d’utilisation CompatAir.",
			"Documentation et disponibilité de la configuration à confirmer avec le constructeur."
		]
	},
	"evidence": [
		{
			"id": "october2b-elgi-eg-premium-p8",
			"sourceUrl": "https://www.elgi.com/in/wp-content/uploads/2019/06/EG-Premium-90-160-catalogue_India.pdf#page=8",
			"sourceLabel": "ELGi EG Premium 90–160 kW, brochure Inde 50 Hz, page PDF 8",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 2b9f43ec8dff222a8f93b9217c688172836c6c783a2c5af2c5e44ebf448f8b9d de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "october2b-elgi-premium50-oil-p3",
			"sourceUrl": "https://www.elgi.com/in/wp-content/uploads/2019/06/EG-Premium-90-160-catalogue_India.pdf#page=3",
			"sourceLabel": "ELGi EG Premium 90–160 kW, brochure Inde 50 Hz ; lubrification du bloc de compression, page PDF 3",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 2b9f43ec8dff222a8f93b9217c688172836c6c783a2c5af2c5e44ebf448f8b9d de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-12-technical:elgi-eg-160-p-50-hz-11-bar-groupe-fixe-au-sol-sans-secheur-vitesse-fixe:0",
			"sourceUrl": "https://www.elgi.com/in/wp-content/uploads/2019/06/EG-Premium-90-160-catalogue_India.pdf",
			"sourceLabel": "ELGi, document fabricant, pages PDF 3, 8",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "L’EG160-P50 Hz de pression maximale11 bar publie25,7 m³/min à10 bar,160 kW et3430 kg. La version13,5 bar donne21,4 m³/min à12,5 bar. Les908 cfm de la ligne sélectionnée sont compatibles avec l’arrondi de25,7 m³/min ; les anomalies d’autres lignes ne sont pas transposées à celle-ci. GET complet : SHA-256 2b9f43ec8dff222a8f93b9217c688172836c6c783a2c5af2c5e44ebf448f8b9d. Historique conservé."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october2b-elgi-eg-premium-p8"
		],
		"maxPressureBar": [
			"october2b-elgi-eg-premium-p8"
		],
		"fadCurve": [
			"october2b-elgi-eg-premium-p8"
		],
		"powerKw": [
			"october2b-elgi-eg-premium-p8"
		],
		"oilType": [
			"october2b-elgi-premium50-oil-p3"
		],
		"weightKg": [
			"october2b-elgi-eg-premium-p8"
		]
	},
	"notes": [
		"Les unités bar(g) et psig désignent des pressions relatives lorsque le document les précise ; les autres valeurs en bar sont reprises telles qu’imprimées, sans conversion en pression absolue. Conditions ISO et pression de restitution restent celles du document constructeur."
	]
};

export default product;
