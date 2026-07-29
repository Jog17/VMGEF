const fs = require('fs');
let content = fs.readFileSync('src/page_components/Events.tsx', 'utf-8');

// Add import
if (!content.includes('import { PortableText }')) {
  content = content.replace(
    'import { Calendar, Clock, MapPin, Star, Ticket, Image as ImageIcon } from "lucide-react";',
    'import { Calendar, Clock, MapPin, Star, Ticket, Image as ImageIcon } from "lucide-react";\nimport { PortableText } from "@portabletext/react";'
  );
}

// Replace featured.description
content = content.replace(
  /\{featured \? featured\.description : "Honoring Women Making an Impact in the Community"\}/g,
  "{featured ? (Array.isArray(featured.description) ? <PortableText value={featured.description} /> : featured.description) : \"Honoring Women Making an Impact in the Community\"}"
);

// Replace event.description
content = content.replace(
  /\{event\.description\}/g,
  "{Array.isArray(event.description) ? <PortableText value={event.description} /> : event.description}"
);

fs.writeFileSync('src/page_components/Events.tsx', content);
