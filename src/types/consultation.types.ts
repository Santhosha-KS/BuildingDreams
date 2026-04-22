// Consultation form field config types — maps to src/data/consultation.json

export type FieldType = 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'date';

export interface SelectOption {
  value: string;
  label: string;
}

export interface FormFieldConfig {
  id: string;
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  required: boolean;
  options?: SelectOption[]; // Only for type: "select"
  rows?: number; // Only for type: "textarea"
  validation?: {
    minLength?: number;
    maxLength?: number;
    pattern?: string; // Regex string for custom validation
    patternMessage?: string; // Human-readable error for pattern mismatch
  };
}