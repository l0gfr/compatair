import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-hvlp-sata-satajet-1000-k-hvlp-0-8-139196",
	"slug": "pistolet-peinture-hvlp-sata-satajet-1000-k-hvlp-0-8-139196",
	"categoryId": "pistolet-peinture-hvlp",
	"category": "pistolet-peinture-hvlp",
	"label": "SATA SATAjet 1000 K HVLP 0.8 (réf. 139196)",
	"brand": "SATA",
	"model": "SATAjet 1000 K HVLP 0.8",
	"mpn": "139196",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 2.5
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-hvlp-sata-satajet-1000-k-hvlp-0-8-139196-technical-20261116-reserves.svg",
		"alt": "Repères techniques : SATA SATAjet 1000 K HVLP 0.8 (réf. 139196)",
		"sourceUrl": "https://www.sata.com/media/1d/fa/b1/1771494954/EN---SATA-Product-Catalogue-2025_uid_6788ce1e8b007.pdf?ts=1771937806",
		"sourceLabel": "Carte technique CompatAir, documents constructeur relus le 16 novembre 2026"
	},
	"variant": {
		"familyId": "sata-satajet-1000-k-hvlp-0-8",
		"label": "Référence 139196",
		"distinguishingAttributes": {
			"reference": "139196",
			"Technologie de pulvérisation": "HVLP",
			"Buse": "0,8 mm"
		}
	},
	"editorial": {
		"overview": "Le SATAjet 1000 K HVLP 139196 est la version à buse 0,8 alimentée en peinture sous pression. Les 139204 et 139212 passent à 1,0 et 1,2 tout en partageant les 530 Nl/min publiés pour la famille. La pression produit maximale de 10 bar ne doit pas être réglée comme pression d’air : le catalogue recommande 2,5 bar à l’entrée d’air. La convention du débit normal reste à documenter pour calculer l’alimentation.",
		"verifiedFacts": [
			"139196 : ligne HVLP, buse 0,8, catalogue 2025 page 49.",
			"Alimentation en produit sous pression ; entrée produit maximale 10,0 bar.",
			"Distance recommandée 10–15 cm ; consommation publiée 530 Nl/min."
		],
		"limitations": [
			"La notice historique reste inaccessible ; son ancien diamètre de flexible de 9 mm n’est pas revalidé dans le catalogue.",
			"Une buse de diamètre différent ne démontre pas une baisse de consommation d’air dans ce tableau.",
			"Les 530 Nl/min ne sont pas transposés en débit dimensionnant sans convention et conditions de mesure.",
			"Données des documents identifiés, sans essai physique CompatAir ni garantie de disponibilité de la configuration livrée."
		]
	},
	"specifications": [
		{
			"label": "Technologie et buse",
			"value": "HVLP, 0,8 ; référence 139196 du tableau de buses",
			"evidenceIds": [
				"review:2026-11-16-reserves:pistolet-peinture-hvlp-sata-satajet-1000-k-hvlp-0-8-139196:0"
			]
		},
		{
			"label": "Alimentation du produit",
			"value": "Pistolet à alimentation de peinture sous pression",
			"evidenceIds": [
				"review:2026-11-16-reserves:pistolet-peinture-hvlp-sata-satajet-1000-k-hvlp-0-8-139196:0"
			]
		},
		{
			"label": "Pression d’entrée d’air recommandée",
			"value": "2,5 bar",
			"evidenceIds": [
				"review:2026-11-16-reserves:pistolet-peinture-hvlp-sata-satajet-1000-k-hvlp-0-8-139196:0"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "530 Nl/min ; convention du litre normal non détaillée sur cette page",
			"evidenceIds": [
				"review:2026-11-16-reserves:pistolet-peinture-hvlp-sata-satajet-1000-k-hvlp-0-8-139196:0"
			]
		},
		{
			"label": "Pression maximale d’entrée du produit",
			"value": "10,0 bar, distincte de la pression d’air",
			"evidenceIds": [
				"review:2026-11-16-reserves:pistolet-peinture-hvlp-sata-satajet-1000-k-hvlp-0-8-139196:0"
			]
		},
		{
			"label": "Distance de pulvérisation recommandée",
			"value": "10–15 cm",
			"evidenceIds": [
				"review:2026-11-16-reserves:pistolet-peinture-hvlp-sata-satajet-1000-k-hvlp-0-8-139196:0"
			]
		},
		{
			"label": "Version de surface distincte",
			"value": "141960 : surface prolongeant la durée de vie de la buse et de l’aiguille ; autre référence",
			"evidenceIds": [
				"review:2026-11-16-reserves:pistolet-peinture-hvlp-sata-satajet-1000-k-hvlp-0-8-139196:0"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-sata-current-catalog-2025-p49",
			"sourceUrl": "https://www.sata.com/media/1d/fa/b1/1771494954/EN---SATA-Product-Catalogue-2025_uid_6788ce1e8b007.pdf?ts=1771937806#page=49",
			"sourceLabel": "SATA, document technique officiel, page PDF 49",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 36dec44ae129bc0052bc9fa43c54c9be507c6a3683df465f0cb38d950d749fe3. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "october3d-tools-sata-family-1000kh-manual-0-p128",
			"sourceUrl": "https://www.sata.com/media/82/5a/80/1791809357/BAL-SATAJET-1000-K-H.PDF.PDF?ts=1791809357#page=128",
			"sourceLabel": "SATA, document technique officiel, page PDF 128",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-13",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 54e3d62ff5e087bb24908e5ece4b7661f668d360dc198a160065906244caec18. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "october3d-tools-sata-family-1000kh-manual-0-p132",
			"sourceUrl": "https://www.sata.com/media/82/5a/80/1791809357/BAL-SATAJET-1000-K-H.PDF.PDF?ts=1791809357#page=132",
			"sourceLabel": "SATA, document technique officiel, page PDF 132",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-13",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 54e3d62ff5e087bb24908e5ece4b7661f668d360dc198a160065906244caec18. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "october3d-tools-sata-family-1000kh-manual-0-p134",
			"sourceUrl": "https://www.sata.com/media/82/5a/80/1791809357/BAL-SATAJET-1000-K-H.PDF.PDF?ts=1791809357#page=134",
			"sourceLabel": "SATA, document technique officiel, page PDF 134",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-13",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 54e3d62ff5e087bb24908e5ece4b7661f668d360dc198a160065906244caec18. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reserves:pistolet-peinture-hvlp-sata-satajet-1000-k-hvlp-0-8-139196:0",
			"sourceUrl": "https://www.sata.com/media/1d/fa/b1/1771494954/EN---SATA-Product-Catalogue-2025_uid_6788ce1e8b007.pdf?ts=1771937806#page=49",
			"sourceLabel": "SATA, document relu le 16 novembre 2026 (pages PDF 49)",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Tableau p49 lu visuellement : 139196/139204/139212 et variante de surface 141960 distingués, pression air/produit séparée. Retrait du débit dimensionnant et du flexible non revérifié ; transcriptions et preuves historiques conservées. Apport : choisir la configuration sous pression et identifier les données à demander avant dimensionnement. GET complet SHA-256 36dec44ae129bc0052bc9fa43c54c9be507c6a3683df465f0cb38d950d749fe3."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-16-reserves:pistolet-peinture-hvlp-sata-satajet-1000-k-hvlp-0-8-139196:0"
		],
		"workingPressureBar": [
			"review:2026-11-16-reserves:pistolet-peinture-hvlp-sata-satajet-1000-k-hvlp-0-8-139196:0"
		],
		"demandExplanation": [
			"review:2026-11-16-reserves:pistolet-peinture-hvlp-sata-satajet-1000-k-hvlp-0-8-139196:0"
		]
	},
	"notes": [
		"Consommation de référence en fonctionnement : 530 L/min à 2,5 bar.",
		"Tableau p49 lu visuellement : 139196/139204/139212 et variante de surface 141960 distingués, pression air/produit séparée. Retrait du débit dimensionnant et du flexible non revérifié ; transcriptions et preuves historiques conservées. Apport : choisir la configuration sous pression et identifier les données à demander avant dimensionnement."
	],
	"demandExplanation": "Le catalogue donne 530 Nl/min et une pression d’entrée recommandée de 2,5 bar, sans définir ici l’état de référence du litre normal et la mesure du débit. Ces valeurs restent documentaires."
};

export default product;
