import { type SchemaTypeDefinition } from 'sanity'
import { programType } from './programType'
import { eventType } from './eventType'
import { testimonialType } from './testimonialType'
import { teamMemberType } from './teamMemberType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [programType, eventType, testimonialType, teamMemberType],
}
