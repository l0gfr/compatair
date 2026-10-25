import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rr-15p",
	"slug": "red-rooster-rr-15p",
	"brand": "Red Rooster",
	"model": "RR-15P",
	"mpn": "RR-15P",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Red Rooster RR-15P",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rr-15p.webp",
		"alt": "Repères techniques Red Rooster RR-15P, référence RR-15P",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=38",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "RR-15P : clé à chocs pistolet 1/2 pouce à mécanisme un marteau, couple indicatif de 560 Nm et 6 900 tr/min. La RR-15A d’angle annonce 310 Nm et 7 000 tr/min pour 1,8 kg, contre 2,4 kg. Le catalogue publie leurs consommations en charge : 8 et 5,3 L/s.",
		"verifiedFacts": [
			"RR-15P pistolet contre RR-15A d’angle : carré 1/2 pouce, mécanismes un marteau et Jumbo, couples indicatifs 560 et 310 Nm, masses 2,4 et 1,8 kg. Consommations en charge 8 et 5,3 L/s ; flexible 10 et 9,5 mm.",
			"La consommation ne constitue pas un point de dimensionnement tant que ses conditions de mesure ne sont pas établies."
		],
		"limitations": [
			"La note 6 qualifie bien la consommation des clés à chocs en charge ; ce n’est pas un régime inconnu.",
			"La page 106 est une consigne générale de service à 6,3 bar, pas une pression de mesure explicitement liée aux 8 L/s ; les 480 L/min restent hors du calcul de compatibilité.",
			"Les couples sont indicatifs ; aucun couple de desserrage non publié n’est ajouté."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Consigne générale : 0,63 MPa (6,3 bar) au fonctionnement. Elle ne démontre pas la pression de mesure de la consommation publiée.",
			"evidenceIds": [
				"review-20261025-red-rooster-rr-15p-s068"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation en charge publiée : 8 L/s, convertis en 480 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rr-15p-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "6900 tr/min",
			"evidenceIds": [
				"red-rooster-rr-15p-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2,4 kg",
			"evidenceIds": [
				"red-rooster-rr-15p-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "10 mm",
			"evidenceIds": [
				"red-rooster-rr-15p-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"red-rooster-rr-15p-20260926"
			]
		},
		{
			"label": "Consommation en charge publiée (pression de mesure non appariée)",
			"value": "480 L/min",
			"evidenceIds": [
				"review-20261025-red-rooster-rr-15p-s068"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rr-15p-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=38",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 38, réf. RR-15P",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 8 L/s, convertis en 480 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rr-15p-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "review-20261025-red-rooster-rr-15p-s068",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=38",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s068, pages PDF 38, 106",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:38.623086+00:00, SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. RR-15P pistolet contre RR-15A d’angle : carré 1/2 pouce, mécanismes un marteau et Jumbo, couples indicatifs 560 et 310 Nm, masses 2,4 et 1,8 kg. Consommations en charge 8 et 5,3 L/s ; flexible 10 et 9,5 mm. Limite : La note 6 qualifie bien la consommation des clés à chocs en charge ; ce n’est pas un régime inconnu."
		}
	],
	"fieldSources": {
		"mpn": [
			"red-rooster-rr-15p-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rr-15p-20260926-workingpressurebar-1",
			"review-20261025-red-rooster-rr-15p-s068"
		],
		"recommendedHose": [
			"red-rooster-rr-15p-20260926"
		],
		"connectorSize": [
			"red-rooster-rr-15p-20260926"
		],
		"demandExplanation": [
			"review-20261025-red-rooster-rr-15p-s068"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir.",
		"Relecture proposée du 25 octobre 2026 : La note 6 qualifie bien la consommation des clés à chocs en charge ; ce n’est pas un régime inconnu."
	],
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"connectorSize": "PT 1/4\"",
	"demandExplanation": "Consommation en charge publiée de 480 L/min, sans pression de mesure explicitement appariée dans les passages lus. La consigne générale de service de 6,3 bar reste distincte de ce débit ; le profil exige un point de consommation et pression documenté avant de conclure."
};

export default product;
