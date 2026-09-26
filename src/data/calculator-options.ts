import { createHash } from 'node:crypto';
import { tools } from './catalog';
import { catalogSearchIdentifiers, compactCatalogOptionIdentifiers } from '../domain/catalog-search';
import { toolDemandLabel, toolPressureLabel } from '../domain/tool-demand';
import { serializeJsonLd } from '../domain/structured-data';

const calculatorToolOptions = tools.map((tool) => {
	const value = `${tool.brand} ${tool.model}${tool.mpn ? ` · MPN ${tool.mpn}` : ''}${tool.ean ? ` · EAN ${tool.ean}` : ''}`;
	return [
		value, tool.id, `${tool.label} · ${toolDemandLabel(tool)} · ${toolPressureLabel(tool)}`,
		compactCatalogOptionIdentifiers(tool.id, value, catalogSearchIdentifiers(tool.brand, tool.model, [tool.label, tool.id, tool.mpn, tool.ean, tool.gtin, ...tool.distributorSkus.map((identifier) => identifier.sku), ...tool.identifierAliases.map((alias) => alias.value)])),
		tool.demandModel === 'fixed-flow' ? [tool.airflowLpm.typical, tool.workingPressureBar.typical] : { demandModel: tool.demandModel, pressure: tool.workingPressureBar.typical, airPerAction: tool.demandModel === 'per-action' ? tool.airPerActionLiters : undefined, actionLabel: tool.demandModel === 'per-action' ? tool.actionLabel : undefined },
	];
});

export const calculatorOptionsJson = serializeJsonLd(calculatorToolOptions);
export const calculatorOptionsIntegrity = `sha256-${createHash('sha256').update(calculatorOptionsJson).digest('base64')}`;
