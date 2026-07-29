const fs = require('fs');
let content = fs.readFileSync('src/page_components/Events.tsx', 'utf-8');

if (!content.includes('import { PortableText }')) {
  content = content.replace(
    'import { urlForImage }',
    'import { PortableText } from "@portabletext/react";\nimport { urlForImage }'
  );
  fs.writeFileSync('src/page_components/Events.tsx', content);
}
