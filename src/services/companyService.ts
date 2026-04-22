/**
 * companyService — returns company information from the data layer.
 *
 * Today: reads from a local JSON file (bundled by Vite at build time).
 * Future: replace the function body with a fetch('/api/company') call.
 *         No component code needs to change.
 */

import companyData from '@/data/company.json';
import type { CompanyInfo } from '@/types';

export function getCompanyInfo(): CompanyInfo {
  return companyData as CompanyInfo;
}

// --- Future API version (swap the function body only) ---
// export async function getCompanyInfo(): Promise<CompanyInfo> {
//   const response = await fetch('/api/company');
//   return response.json();
// }