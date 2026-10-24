import { prepareProductionArtifact, restoreProductionArtifact } from './lib/production-artifact.mjs';

const [operation, ...extra] = process.argv.slice(2);
if (!['prepare', 'restore'].includes(operation) || extra.length) throw new Error('Expected production-artifact.mjs prepare or restore');
const action = operation === 'prepare' ? prepareProductionArtifact : restoreProductionArtifact;
console.log(JSON.stringify(await action(process.cwd(), process.env.GITHUB_SHA)));
