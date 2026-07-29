const fs = require('fs');
let content = fs.readFileSync('src/page_components/Home.tsx', 'utf-8');

if (!content.includes('import { PortableText }')) {
  content = content.replace(
    'import { urlForImage }',
    'import { PortableText } from "@portabletext/react";\nimport { urlForImage }'
  );
}

content = content.replace(
  /\{event\.description\}/g,
  "{Array.isArray(event.description) ? <PortableText value={event.description} /> : event.description}"
);

fs.writeFileSync('src/page_components/Home.tsx', content);
