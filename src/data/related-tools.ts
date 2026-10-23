type RelatedTool = { id: string; categoryId: string; brand: string; label: string };

// Static catalog order breaks equal-label ties. Sort each category once, then
// select same-brand tools first without sorting or scanning the whole catalog.
export function createRelatedToolLookup<T extends RelatedTool>(tools: readonly T[]) {
 const categories = new Map<string, { ordered: T[]; brands: Map<string, T[]> }>();
 for (const tool of tools) {
  let category = categories.get(tool.categoryId);
  if (!category) { category = { ordered: [], brands: new Map() }; categories.set(tool.categoryId, category); }
  category.ordered.push(tool);
 }
 for (const category of categories.values()) {
  category.ordered.sort((a, b) => a.label.localeCompare(b.label, 'fr'));
  for (const tool of category.ordered) {
   const brand = category.brands.get(tool.brand) ?? [];
   brand.push(tool); category.brands.set(tool.brand, brand);
  }
 }
 return (tool: RelatedTool): T[] => {
  const category = categories.get(tool.categoryId);
  if (!category) return [];
  const selected: T[] = [];
  for (const candidate of category.brands.get(tool.brand) ?? []) {
   if (candidate.id !== tool.id) selected.push(candidate);
   if (selected.length === 3) return selected;
  }
  for (const candidate of category.ordered) {
   if (candidate.id !== tool.id && candidate.brand !== tool.brand) selected.push(candidate);
   if (selected.length === 3) break;
  }
  return selected;
 };
}
