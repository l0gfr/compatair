import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "ceccato-csa-20-ff-sur-cuve-500-l-10-bar",
	"slug": "ceccato-csa-20-ff-sur-cuve-500-l-10-bar",
	"brand": "Ceccato",
	"model": "CSA 20",
	"variant": {
		"familyId": "ceccato-csa-20",
		"label": "FF sur cuve 500 L ; 10 bar",
		"distinguishingAttributes": {
			"configuration": "FF sur cuve 500 L",
			"pression": "10 bar",
			"cuve": "500 L"
		}
	},
	"tankLiters": 500,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 9.5,
			"litersPerMinute": 1983.333
		}
	],
	"oilType": "unknown",
	"powerKw": 15,
	"weightKg": 505,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/ceccato-csa-20-ff-sur-cuve-500-l-10-bar-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Ceccato CSA 20, FF sur cuve 500 L ; 10 bar",
		"sourceUrl": "https://www.ceccato.com/content/dam/brands/Ceccato/restyling-website-ceccato/products/screw-compressors/fixed-speed/csa-7-5-20-hp/leaflets/Ceccato_CSA_7.5-20_Leaflet_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"specifications": [
		{
			"label": "Configuration",
			"value": "FF sur cuve 500 L",
			"evidenceIds": [
				"october-ceccato-csa-7-5-20-hp-pdf-p6"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "1940 × 665 × 1665 mm",
			"evidenceIds": [
				"october-ceccato-csa-7-5-20-hp-pdf-p6"
			]
		},
		{
			"label": "Condition du FAD",
			"value": "Débit d’air réel, ISO 1217 annexe C ; pression de référence séparée du maximum",
			"evidenceIds": [
				"october-ceccato-csa-7-5-20-hp-pdf-p6"
			]
		},
		{
			"label": "Pression maximale et pression de référence",
			"value": "10 bar maximum ; FAD mesuré à 9,5 bar",
			"evidenceIds": [
				"october-ceccato-csa-7-5-20-hp-pdf-p6"
			]
		}
	],
	"editorial": {
		"overview": "Le CSA20 FF sur cuve 500 L, version maximale 10 bar, publie 119 m³/h FAD à la référence 9,5 bar, moteur 15 kW. La version 8 bar est mesurée à 7,5 bar pour 131 m³/h ; le CSA15 utilise 11 kW. La masse FF500 est 505 kg et le sécheur fait partie de cette configuration. La page HTML reste inaccessible ; le PDF ne chiffre pas de taux de marche, et l’ancien 100 % est retiré.",
		"verifiedFacts": [
			"Dimensions publiées : 1940 × 665 × 1665 mm.",
			"Masse de cette configuration : 505 kg ; puissance moteur : 15 kW."
		],
		"limitations": [
			"Le point FAD appartient à cette configuration et à sa pression de référence ; aucune courbe de fonctionnement supplémentaire n’est inventée.",
			"Mode de lubrification non établi dans cette fiche ; aucune qualité d’air déduite.",
			"Configuration et pression explicites du catalogue, sans numéro d’article attribué artificiellement ; faire confirmer la version commandée.",
			"Disponibilité locale, alimentation électrique, dégagements d’entretien et qualité d’air au point d’usage à vérifier avant installation.",
			"Le taux de marche du groupe complet n’est pas chiffré par les passages retenus ; aucune valeur numérique n’est déduite du service du moteur ou d’une promesse générale."
		]
	},
	"evidence": [
		{
			"id": "october-ceccato-csa-7-5-20-hp-pdf-p6",
			"sourceUrl": "https://www.ceccato.com/content/dam/brands/Ceccato/restyling-website-ceccato/products/screw-compressors/fixed-speed/csa-7-5-20-hp/leaflets/Ceccato_CSA_7.5-20_Leaflet_EN.pdf#page=6",
			"sourceLabel": "Ceccato, documentation constructeur, page 6",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 b36c0fbb8a63a69867b66a6e663923588ccfd8e2def16303b3be948aa706c23c. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "october-ceccato-csa-7-5-20-hp",
			"sourceUrl": "https://www.ceccato.com/fr-international/air-compressor-products/rotary-screw-compressor/fixed-speed/csa-7-5-20-hp",
			"sourceLabel": "Ceccato, documentation constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 a396f7642312e7bc1e0f7624ec55b4836b176f0deb7ba6e0ae70e4ce9cbe4df6. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:ceccato-csa-20-ff-sur-cuve-500-l-10-bar:0",
			"sourceUrl": "https://www.ceccato.com/content/dam/brands/Ceccato/restyling-website-ceccato/products/screw-compressors/fixed-speed/csa-7-5-20-hp/leaflets/Ceccato_CSA_7.5-20_Leaflet_EN.pdf",
			"sourceLabel": "Ceccato, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Le CSA20 FF sur cuve 500 L, version maximale 10 bar, publie 119 m³/h FAD à la référence 9,5 bar, moteur 15 kW. La version 8 bar est mesurée à 7,5 bar pour 131 m³/h ; le CSA15 utilise 11 kW. La masse FF500 est 505 kg et le sécheur fait partie de cette configuration. La page HTML reste inaccessible ; le PDF ne chiffre pas de taux de marche, et l’ancien 100 % est retiré. GET complet SHA-256 b36c0fbb8a63a69867b66a6e663923588ccfd8e2def16303b3be948aa706c23c. Pages PDF lues : 6."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october-ceccato-csa-7-5-20-hp-pdf-p6"
		],
		"maxPressureBar": [
			"october-ceccato-csa-7-5-20-hp-pdf-p6"
		],
		"fadCurve": [
			"october-ceccato-csa-7-5-20-hp-pdf-p6"
		],
		"powerKw": [
			"october-ceccato-csa-7-5-20-hp-pdf-p6"
		],
		"weightKg": [
			"october-ceccato-csa-7-5-20-hp-pdf-p6"
		]
	},
	"notes": [
		"Tableau page 6 ; conditions ISO 1217 conservées. Aucun essai physique réalisé."
	]
};

export default product;
