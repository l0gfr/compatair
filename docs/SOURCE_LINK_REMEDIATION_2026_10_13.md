# Réparation des sources et continuité ACME du 13 octobre 2026

Le contrôle complet du 12 octobre (run GitHub 38271451626, révision d175e7a25504634bc158f6e5c96bb2c866a5648f) signalait neuf documents HTTP 404, utilisés par 89 outils et cinq guides. Les remplacements et leur revue sont consignés dans `editorial/source-repairs-2026-10-13.json`.

Les sept PDF SATA téléchargés depuis les liens actuels des fiches officielles ont exactement les mêmes SHA-256 que les preuves antérieures. Seuls URL et dates de nouvelle consultation changent dans 250 preuves actives. Les caractéristiques, unités, limites et décisions de compatibilité sont inchangées. Les 35 954 événements historiques sont conservés intégralement ; 250 événements de correction sont ajoutés. L'import daté du 3 octobre reste inchangé ; son test exige toujours l'égalité complète des modules après application des seuls déplacements documentés.

Clemco 30421 reste indisponible sur le site du fabricant. La copie du document primaire hébergée par SandblastingMachines a un autre SHA binaire, mais le texte extrait de ses 55 pages est identique au PDF constructeur archivé. Figure 4 et sections 1.12 et 8 ont été relues. L'hébergement de cette copie et son édition 08/21 sont explicites dans les guides.

La notice Clemco 30422 actuelle porte Rev. D 10/26 en couverture, avec des pieds de page Rev. C 01/26. Les sections 1.5.1 à 1.5.3 ont été relues et contrôlées visuellement pour la mise sous pression et le décolmatage : aucune validation générale de la nouvelle révision n'est revendiquée.

Le précédent déploiement 38048020521 a expiré lors de sa connexion SSH, avant activation. Le HTTPS sert toujours ff96c7b84dbbef4d9ef7e5e2d44b7c029b558b46 au début de cette réparation. La configuration versionnée réintègre uniquement le chemin HTTP-01 dédié `/var/lib/compatair-acme` déjà installé lors de la réparation TLS du 11 octobre, avec son test de non-régression. Aucun paramètre d'authentification, renouvellement des autres sites, timer, privilège ou règle d'accès n'est modifié par cette correction.

Cette réparation n'approuve aucune nouvelle admission SEO. Le calendrier, les plafonds 10/30/60, les filtres et les protections noindex restent conservés. Le contrôle ciblé des neuf remplacements est réussi ; il ne remplace pas le contrôle complet de l'inventaire. La publication et le SHA réellement servi doivent être constatés séparément après les validations.
