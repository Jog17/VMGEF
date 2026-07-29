import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schema } from './src/sanity/schemaTypes'

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"])

// Define the singleton document types
const singletonTypes = new Set(["homePage", "aboutPage", "siteSettings", "programsPage", "eventsPage", "impactPage", "donatePage", "galleryPage"])

export default defineConfig({
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  title: 'VMGEF Studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Our singleton type has a list item with a custom child
            S.listItem()
              .title("Site Settings")
              .id("siteSettings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
            S.listItem()
              .title("Home Page")
              .id("homePage")
              .child(
                S.document()
                  .schemaType("homePage")
                  .documentId("homePage")
              ),
            S.listItem()
              .title("About Page")
              .id("aboutPage")
              .child(
                S.document()
                  .schemaType("aboutPage")
                  .documentId("aboutPage")
              ),
            S.listItem()
              .title("Programs Page")
              .id("programsPage")
              .child(
                S.document()
                  .schemaType("programsPage")
                  .documentId("programsPage")
              ),
            S.listItem()
              .title("Events Page")
              .id("eventsPage")
              .child(
                S.document()
                  .schemaType("eventsPage")
                  .documentId("eventsPage")
              ),
            S.listItem()
              .title("Impact Page")
              .id("impactPage")
              .child(
                S.document()
                  .schemaType("impactPage")
                  .documentId("impactPage")
              ),
            S.listItem()
              .title("Donate Page")
              .id("donatePage")
              .child(
                S.document()
                  .schemaType("donatePage")
                  .documentId("donatePage")
              ),
            S.listItem()
              .title("Gallery Page")
              .id("galleryPage")
              .child(
                S.document()
                  .schemaType("galleryPage")
                  .documentId("galleryPage")
              ),
            // Regular document types
            S.documentTypeListItem("program").title("Programs"),
            S.documentTypeListItem("event").title("Events"),
            S.documentTypeListItem("testimonial").title("Testimonials"),
            S.documentTypeListItem("teamMember").title("Team Members"),
          ]),
    }),
  ],
  schema: {
    types: schema.types,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})
