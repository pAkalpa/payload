import type { FieldBase } from 'payload/types'
import type React from 'react'

import type { MappedField } from '../../providers/ComponentMap/buildComponentMap/types.js'
import type { FormFieldBase } from '../shared/index.js'

export type RichTextFieldProps = FormFieldBase & {
  label?: FieldBase['label']
  name: string
  richTextComponentMap?: Map<string, MappedField[] | React.ReactNode>
  width?: string
}

export const RichText: React.FC<RichTextFieldProps> = () => {
  return null
}