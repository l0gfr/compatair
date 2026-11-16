import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-puma-at-7438m",
	"slug": "meuleuse-puma-at-7438m",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "PUMA AT-7438M",
	"brand": "PUMA",
	"model": "AT-7438M",
	"mpn": "AT-7438M",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La consommation moyenne publiée reste documentaire. Aucun débit en charge ni maximum de demande continue n’est déduit de cette moyenne.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-puma-at-7438m-technical-20261116-reviews.svg",
		"alt": "Repères techniques : PUMA AT-7438M",
		"sourceUrl": "https://www.pumaair.com/views/proimages/pd-en/PDF/PIC-2680/P044-AIR_DIE_GRINDER-2680.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "puma-at-7438m",
		"label": "Référence AT-7438M",
		"distinguishingAttributes": {
			"Pince de la version M": "6 mm, version métrique selon la légende",
			"Échappement": "Latéral",
			"Longueur du PDF": "205 mm",
			"Masse du PDF": "0,76 kg",
			"Puissance du PDF": "0,40 kW ; 0,54 hp"
		}
	},
	"editorial": {
		"overview": "PUMA AT-7438M : meuleuse droite à pince métrique de 6 mm et échappement latéral, longueur 205 mm et masse 0,76 kg. La fiche PDF annonce 22 000 tr/min ; le tableau HTML présente des en-têtes incohérents et une cellule 24 000. La vitesse de la version livrée reste à confirmer. La 7438 utilise la pince impériale ; la 7437M est plus courte, 160 mm et 0,40 kg. Les 340 L/min moyens restent non dimensionnants.",
		"verifiedFacts": [
			"Pince de la version M : 6 mm, version métrique selon la légende.",
			"Échappement : Latéral.",
			"Longueur du PDF : 205 mm.",
			"Masse du PDF : 0,76 kg.",
			"Puissance du PDF : 0,40 kW ; 0,54 hp.",
			"Vitesse à vide, PDF : 22 000 tr/min ; cellule HTML discordante 24 000.",
			"Consommation moyenne documentaire : 340 L/min ; 12 scfm, unités imprimées."
		],
		"limitations": [
			"La table HTML possède 14 colonnes d’en-têtes pour 16 cellules par référence. Ses valeurs ne sont pas réordonnées par supposition ; la fiche PDF est citée séparément.",
			"La différence 22 000/24 000 tr/min reste à confirmer avec le fabricant avant de choisir un abrasif.",
			"La consommation moyenne ne qualifie pas la demande continue en charge. L’état de référence du volume n’est pas défini ici.",
			"Édition de la fiche PDF non précisée ; vérifier la référence et la configuration effectivement livrées."
		]
	},
	"specifications": [
		{
			"label": "Pince de la version M",
			"value": "6 mm, version métrique selon la légende",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-puma-at-7438m:0"
			]
		},
		{
			"label": "Échappement",
			"value": "Latéral",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-puma-at-7438m:0"
			]
		},
		{
			"label": "Longueur du PDF",
			"value": "205 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-puma-at-7438m:0"
			]
		},
		{
			"label": "Masse du PDF",
			"value": "0,76 kg",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-puma-at-7438m:0"
			]
		},
		{
			"label": "Puissance du PDF",
			"value": "0,40 kW ; 0,54 hp",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-puma-at-7438m:0"
			]
		},
		{
			"label": "Vitesse à vide, PDF",
			"value": "22 000 tr/min ; cellule HTML discordante 24 000",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-puma-at-7438m:0"
			]
		},
		{
			"label": "Consommation moyenne documentaire",
			"value": "340 L/min ; 12 scfm, unités imprimées",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-puma-at-7438m:0"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-puma-cat-41-pdp-263-p1",
			"sourceUrl": "https://www.pumaair.com/product-Air-Die-Grinder-AirDieGrinder-.html",
			"sourceLabel": "PUMA Industrial, tableau fabricant de la famille product-Air-Die-Grinder-AirDieGrinder-.html",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 08b9f9c7d1898261da064b9521bc097278817d20a1ebb50c4f75c23188e0a7c7. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:meuleuse-puma-at-7438m:0",
			"sourceUrl": "https://www.pumaair.com/views/proimages/pd-en/PDF/PIC-2680/P044-AIR_DIE_GRINDER-2680.pdf",
			"sourceLabel": "PUMA, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "PUMA AT-7438M : meuleuse droite à pince métrique de 6 mm et échappement latéral, longueur 205 mm et masse 0,76 kg. La fiche PDF annonce 22 000 tr/min ; le tableau HTML présente des en-têtes incohérents et une cellule 24 000. La vitesse de la version livrée reste à confirmer. La 7438 utilise la pince impériale ; la 7437M est plus courte, 160 mm et 0,40 kg. Les 340 L/min moyens restent non dimensionnants. GET complet SHA-256 997bff19440269b150fc8e7f9654a25c740959b69be2fc32aab920b6d90c98c4. Pages PDF lues : 1."
		},
		{
			"id": "review:2026-11-16-reviews:meuleuse-puma-at-7438m:1",
			"sourceUrl": "https://www.pumaair.com/product-Air-Die-Grinder-AirDieGrinder-.html",
			"sourceLabel": "PUMA, document constructeur relu le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "PUMA AT-7438M : meuleuse droite à pince métrique de 6 mm et échappement latéral, longueur 205 mm et masse 0,76 kg. La fiche PDF annonce 22 000 tr/min ; le tableau HTML présente des en-têtes incohérents et une cellule 24 000. La vitesse de la version livrée reste à confirmer. La 7438 utilise la pince impériale ; la 7437M est plus courte, 160 mm et 0,40 kg. Les 340 L/min moyens restent non dimensionnants. GET complet SHA-256 08b9f9c7d1898261da064b9521bc097278817d20a1ebb50c4f75c23188e0a7c7. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-16-reviews:meuleuse-puma-at-7438m:0"
		],
		"demandExplanation": [
			"review:2026-11-16-reviews:meuleuse-puma-at-7438m:0",
			"review:2026-11-16-reviews:meuleuse-puma-at-7438m:1"
		],
		"workingPressureBar": [
			"review:2026-11-16-reviews:meuleuse-puma-at-7438m:0",
			"review:2026-11-16-reviews:meuleuse-puma-at-7438m:1"
		]
	},
	"notes": [
		"La consommation moyenne publiée reste documentaire. Aucun débit en charge ni maximum de demande continue n’est déduit de cette moyenne."
	]
};

export default product;
