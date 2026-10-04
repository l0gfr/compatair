import { compressors } from './catalog';
import { matchingPurchaseLinks } from './direct-purchase-inventory';
export { directPurchaseLinkSchema, directPurchaseLinks } from './direct-purchase-inventory';

export function purchaseLinksForProduct(productId: string, now = new Date()) {
 const product = compressors.find((item) => item.id === productId);
 return product ? matchingPurchaseLinks(product, now) : [];
}
