import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pferd-pgas-8-100-vm-hv",
	"slug": "pferd-pgas-8-100-vm-hv",
	"brand": "PFERD",
	"model": "PGAS 8/100 VM-HV",
	"mpn": "80706085",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "PFERD PGAS 8/100 VM-HV",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/pferd-pgas-8-100-vm-hv.webp",
		"alt": "Repères techniques PFERD PGAS 8/100 VM-HV, référence 80706085",
		"sourceUrl": "https://fr.pferd.com/fr/meuleuse-droite-pneumatique-pgas-8100?a%5Btype-tds%5D=Prolongateur+mince&a%5Bthrottle-type-tds%5D=Levier&a%5Bpferd-type-tds%5D=PGAS+8%2F100+VM-HV",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "PFERD PGAS 8/100 VM-HV, référence 80706085. Le dimensionnement utilise 850 L/min à 6,3 bar, selon les régimes publiés par le fabricant. Longueur : 338 mm. Pince de serrage Ø comprise [mm] : 6 mm. Poids net de la machine : 1.2 kg.",
		"verifiedFacts": [
			"Pression de service publiée sur cette fiche : 6.3 bar. Aucune autre pression de fonctionnement n’est déduite.",
			"Consommation sous charge : 0.85 m³/min ; à vide : 0.17 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 850 L/min (m³/min × 1 000).",
			"Référence fabricant : 80706085.",
			"Longueur : 338 mm.",
			"Pince de serrage Ø comprise [mm] : 6 mm.",
			"Poids net de la machine : 1.2 kg."
		],
		"limitations": [
			"Caractéristiques déclarées par le constructeur ; aucune mesure physique réalisée par CompatAir.",
			"La présence au catalogue fabricant ne prouve ni le stock d’un distributeur, ni un volume de ventes.",
			"La valeur la plus élevée à vide ou en charge couvre les deux régimes documentés ; aucune moyenne de cycle n’est substituée à ces valeurs."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de service publiée sur cette fiche : 6.3 bar. Aucune autre pression de fonctionnement n’est déduite.",
			"evidenceIds": [
				"pferd-80706085-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation sous charge : 0.85 m³/min ; à vide : 0.17 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 850 L/min (m³/min × 1 000).",
			"evidenceIds": [
				"pferd-80706085-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "338 mm",
			"evidenceIds": [
				"pferd-80706085-20260927"
			]
		},
		{
			"label": "Pince de serrage Ø comprise [mm]",
			"value": "6 mm",
			"evidenceIds": [
				"pferd-80706085-20260927"
			]
		},
		{
			"label": "Poids net de la machine",
			"value": "1.2 kg",
			"evidenceIds": [
				"pferd-80706085-20260927"
			]
		},
		{
			"label": "Puissance",
			"value": "600 Watt",
			"evidenceIds": [
				"pferd-80706085-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "10000 t/min",
			"evidenceIds": [
				"pferd-80706085-20260927"
			]
		},
		{
			"label": "Échappement d'air",
			"value": "Arrière",
			"evidenceIds": [
				"pferd-80706085-20260927"
			]
		},
		{
			"label": "ø intérieur flexible d'alimentation",
			"value": "8.5 mm",
			"evidenceIds": [
				"pferd-80706085-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "pferd-80706085-20260927",
			"sourceUrl": "https://fr.pferd.com/fr/meuleuse-droite-pneumatique-pgas-8100?a%5Btype-tds%5D=Prolongateur+mince&a%5Bthrottle-type-tds%5D=Levier&a%5Bpferd-type-tds%5D=PGAS+8%2F100+VM-HV",
			"sourceLabel": "PFERD TOOLS, fiche technique PGAS 8/100 VM-HV, réf. 80706085",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation sous charge : 0.85 m³/min ; à vide : 0.17 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 850 L/min (m³/min × 1 000)."
		}
	],
	"fieldSources": {
		"mpn": [
			"pferd-80706085-20260927"
		],
		"workingPressureBar": [
			"pferd-80706085-20260927"
		],
		"airflowLpm": [
			"pferd-80706085-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 850,
		"typical": 850,
		"max": 850
	}
};

export default product;
