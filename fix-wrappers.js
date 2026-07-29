const fs = require('fs');
let eventsContent = fs.readFileSync('src/page_components/Events.tsx', 'utf-8');
let homeContent = fs.readFileSync('src/page_components/Home.tsx', 'utf-8');

// Events
eventsContent = eventsContent.replace(
  /<p className="text-2xl font-light text-white\/80 mb-8 italic">([^<]*)<PortableText([^>]*)>([^<]*)<\/p>/g,
  '<div className="text-2xl font-light text-white/80 mb-8 italic prose prose-invert prose-p:my-0 prose-p:inline">$1<PortableText$2>$3</div>'
);
eventsContent = eventsContent.replace(
  /<p className="text-vmgef-ink-light font-light mb-6">\{Array\.isArray\(event\.description\)/g,
  '<div className="text-vmgef-ink-light font-light mb-6 prose prose-vmgef prose-sm">{Array.isArray(event.description)'
);
eventsContent = eventsContent.replace(
  / \: event\.description\}<\/p>/g,
  ' : event.description}</div>'
);

// Home
homeContent = homeContent.replace(
  /<p className=\{`font-light \$\{index === 0 \? 'text-white\/80' : 'text-vmgef-ink-light'\}`\}>\{Array\.isArray\(event\.description\)/g,
  '<div className={`font-light prose prose-sm ${index === 0 ? "text-white/80 prose-invert" : "text-vmgef-ink-light"}`}>{Array.isArray(event.description)'
);
homeContent = homeContent.replace(
  / \: event\.description\}<\/p>/g,
  ' : event.description}</div>'
);

fs.writeFileSync('src/page_components/Events.tsx', eventsContent);
fs.writeFileSync('src/page_components/Home.tsx', homeContent);
