import consultationData from '@/data/consultation.json';
import type { FormFieldConfig } from '@/types';

export function getFormFields(): FormFieldConfig[] {
  return consultationData as FormFieldConfig[];
}