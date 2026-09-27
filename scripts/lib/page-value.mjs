import { createHash } from 'node:crypto';
import { editorialText, shingles } from './indexation-planner.mjs';

const hash = value => createHash('sha256').update(JSON.stringify(value)).digest('hex');
// Mechanical evidence checks are a publication floor, not a claim of human review.
export function assessGuideValue(data, markdown) {
 const text = editorialText(markdown);
 const headings = [...markdown.matchAll(/^##\s+(.+)$/gm)].map(match => match[1]);
 const links = [...markdown.matchAll(/\[[^\]]+\]\((https:\/\/[^\s)]+)\)/g)].map(match => match[1]);
 const sources = new Set(data.sources ?? []);
 const canonical = value => { try { const url = new URL(value); url.hash = ''; return url.href; } catch { return ''; } };
 const sourceDocuments = new Set([...sources].map(canonical));
 const internalLinks = [...markdown.matchAll(/\[[^\]]+\]\((\/(?!\/)[^\s)]+)\)/g)].map(match => match[1]);
 const reasons = [];
 if (shingles(text).size < 100) reasons.push('answer-too-thin');
 if (headings.length < 2 && !(headings.length >= 1 && /^\|.+\|$/m.test(markdown))) reasons.push('missing-answer-structure');
 if (!links.length || links.some(link => !sourceDocuments.has(canonical(link)))) reasons.push('missing-in-text-source');
 if (!internalLinks.length) reasons.push('missing-useful-next-step');
 if (!/\b(?:limite|hypothèse|vérifi|mesur|inconnu|document|notice|pression|débit)\w*/iu.test(text)) reasons.push('missing-decision-context');
 return { kind: 'guide', question: data.title, contribution: headings.filter(heading => !/^sources/i.test(heading)), sources: [...sources], nextSteps: [...new Set(internalLinks)], contentHash: hash({ data, markdown }), reasons, checks: 'structure-and-provenance; editorial distinctness also requires comparison against the corpus' };
}
export function assessProductValue(product, kind) {
 const fields = kind === 'compressor' ? ['maxPressureBar', 'fadCurve'] : ['workingPressureBar', ...(product.demandModel === 'fixed-flow' ? ['airflowLpm'] : product.demandModel === 'per-action' ? ['airPerActionLiters'] : [])];
 const evidence = new Map((product.evidence ?? []).map(item => [item.id, item]));
 const claims = fields.map(field => ({ field, value: product[field], sources: (product.fieldSources?.[field] ?? []).map(id => evidence.get(id)).filter(Boolean).map(source => ({ id: source.id, url: source.sourceUrl, retrievedAt: source.retrievedAt })) }));
 const reasons = [];
 for (const claim of claims) if (!claim.sources.length || claim.sources.some(source => !/^https:\/\//.test(source.url))) reasons.push(`missing-critical-source:${claim.field}`);
 if (!product.editorial?.overview?.trim() || !product.editorial?.verifiedFacts?.length || !product.editorial?.limitations?.length) reasons.push('missing-facts-or-limits');
 return { kind, label: product.label ?? `${product.brand} ${product.model}`, question: kind === 'compressor' ? `Que permet le FAD documenté du ${product.brand} ${product.model} ?` : `Quel besoin d’air est documenté pour ${product.brand} ${product.model} ?`, identity: { id: product.id, mpn: product.mpn ?? null, gtin: product.gtin ?? product.ean ?? null }, claims, missingFields: (kind === 'compressor' ? ['dutyCycle', 'phase', 'voltage'] : ['connectorSize', 'recommendedHose']).filter(field => product[field] === undefined), contentHash: hash(product), reasons, checks: 'exact-reference evidence and explicit limits; repeated technical signatures are audited separately' };
}
