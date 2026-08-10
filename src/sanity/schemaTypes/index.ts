import { type SchemaTypeDefinition } from 'sanity'
import { programType } from './programType'
import { eventType } from './eventType'
import { testimonialType } from './testimonialType'
import { teamMemberType } from './teamMemberType'
import { homePageType } from './homePageType'
import { aboutPageType } from './aboutPageType'
import { siteSettingsType } from './siteSettingsType'
import { programsPageType } from './programsPageType'
import { eventsPageType } from './eventsPageType'
import { impactPageType } from './impactPageType'
import { donatePageType } from './donatePageType'
import { galleryPageType } from './galleryPageType'
import { eventRegistrationType } from './eventRegistrationType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [programType, eventType, testimonialType, teamMemberType, homePageType, aboutPageType, siteSettingsType, programsPageType, eventsPageType, impactPageType, donatePageType, galleryPageType, eventRegistrationType],
}
