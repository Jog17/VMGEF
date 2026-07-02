import { type SchemaTypeDefinition } from 'sanity'
import { programType } from './programType'
import { eventType } from './eventType'
import { testimonialType } from './testimonialType'
import { teamMemberType } from './teamMemberType'
import { homePageType } from './homePageType'
import { aboutPageType } from './aboutPageType'
import { siteSettingsType } from './siteSettingsType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [programType, eventType, testimonialType, teamMemberType, homePageType, aboutPageType, siteSettingsType],
}
