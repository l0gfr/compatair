# Correction du blocage de livraison du 29 septembre 2026

Le push V5 `90071ec6b67732820d467499d394fa10f1cd1e53` a passé la validation locale complète, les tests depuis l’archive extraite et les 15 mesures Lighthouse. Le [run de livraison 36568264064](https://github.com/l0gfr/compatair/actions/runs/36568264064) a ensuite échoué sur l’audit des dépendances, avant transfert et activation. Son journal est conservé dans `ci-security-failure.log`.

Deux overrides de dépendances de développement sont corrigés sans changement majeur : `fast-uri` 3.1.6 → 3.1.7 et `ip-address` 10.3.1 → 10.5.1. Leur chaîne de dépendances mène respectivement au serveur de langage Astro et à Lighthouse. Le verrouillage, ses intégrités et les versions attendues par l’audit sont alignés. Une mise à jour incidente de `third-party-web` a été retirée avant validation afin de conserver le périmètre.

Sources mainteneurs :

- https://github.com/fastify/fast-uri/security/advisories/GHSA-qw65-cvwx-89v3
- https://github.com/fastify/fast-uri/security/advisories/GHSA-58mr-gqgx-xq4g
- https://github.com/fastify/fast-uri/releases/tag/v3.1.7
- https://github.com/beaugunderson/ip-address/security/advisories/GHSA-rpw4-54j3-4h4q
- https://github.com/beaugunderson/ip-address/security/advisories/GHSA-2vr4-cq9g-pvrc

Contrôles effectivement exécutés sous Node 24.19.0 : installation verrouillée avec scripts désactivés ; audit supply-chain et advisories réussi, zéro avis ; assertions locales sur les paquets installés : refus d’un port contenant `@127.0.0.1:8124`, erreur de parsing d’un hôte avec crochet non fermé, conservation d’une URI HTTPS valide, reconnaissance des adresses `fe80::1`, `fe81::1`, `febf::1`, `fe80:0:0:1::1` comme lien local, plage NAT64 locale privée et témoin IPv6 public non privé. Ces assertions ne sollicitent aucun hôte réseau.

Aucune exception de quarantaine, de confiance ou d’audit n’est ajoutée. Les plafonds du laboratoire 100k et son statut non qualifié restent inchangés. Ce document décrit la réparation et ses contrôles locaux ; il ne constitue pas une preuve d’activation en production.
