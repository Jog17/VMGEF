const fs = require('fs');
let content = fs.readFileSync('/app/applet/src/page_components/Events.tsx', 'utf-8');

const tCardStart = `{/* TICKET CARD */}
            <div className="fade-up bg-white text-vmgef-ink p-10 shadow-2xl relative rounded-3xl">`;

const tCardEnd = `              <div className="text-center">
                <p className="text-sm text-vmgef-ink-light font-light mb-2">For sponsorships and inquiries:</p>
                <p className="font-medium">{featured?.tickets?.inquiriesPhone || "+233 20 0640 740 | +233 50 8115 739"}</p>
                <p className="font-medium">{featured?.tickets?.inquiriesEmail || "info@vmgef.org"}</p>
              </div>
            </div>`;

if (content.includes(tCardStart) && content.includes(tCardEnd)) {
  const parts = content.split(tCardStart);
  let before = parts[0];
  let after = parts[1];
  
  const endParts = after.split(tCardEnd);
  let middle = endParts[0];
  let rest = endParts[1];
  
  content = before + `{/* EVENT IMAGE & TICKET CARD */}
            <div className="flex flex-col gap-8">
              {featured?.image && (
                <div className="fade-up rounded-3xl overflow-hidden shadow-2xl relative">
                  <img 
                    src={urlForImage(featured.image)?.url() || ""} 
                    alt={featured.title} 
                    className="w-full h-auto object-cover max-h-[400px]"
                  />
                </div>
              )}
              
              <div className="fade-up bg-white text-vmgef-ink p-10 shadow-2xl relative rounded-3xl">` + middle + tCardEnd + `
            </div>` + rest;
}


const nEventStart = `<div key={event._id || idx} className={\`fade-up border border-vmgef-ink/10 p-8 hover:shadow-xl transition-shadow duration-500 rounded-3xl \${new Date(event.date) > new Date() ? 'bg-vmgef-bg border-vmgef-orange/20' : ''}\`}>
                  <span className="text-vmgef-orange tracking-widest uppercase text-xs font-bold mb-4 block">`;

const nEventEnd = `                  <div className="flex items-center gap-2 text-sm font-medium text-vmgef-ink">
                    {event.location.toLowerCase().includes('online') ? (
                      <Ticket size={16} className="text-vmgef-orange" />
                    ) : (
                      <MapPin size={16} className="text-vmgef-orange" />
                    )} 
                    {event.location}
                  </div>
                </div>`;

if (content.includes(nEventStart) && content.includes(nEventEnd)) {
  const parts = content.split(nEventStart);
  let before = parts[0];
  let after = parts[1];
  
  const endParts = after.split(nEventEnd);
  let middle = endParts[0];
  let rest = endParts[1];
  
  content = before + `<div key={event._id || idx} className={\`fade-up border border-vmgef-ink/10 overflow-hidden hover:shadow-xl transition-shadow duration-500 rounded-3xl \${new Date(event.date) > new Date() ? 'bg-vmgef-bg border-vmgef-orange/20' : ''}\`}>
                  {event.image && (
                    <div className="w-full h-48 sm:h-64 overflow-hidden bg-vmgef-ink/5">
                      <img 
                        src={urlForImage(event.image)?.url() || ""} 
                        alt={event.title} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-8">
                    <span className="text-vmgef-orange tracking-widest uppercase text-xs font-bold mb-4 block">` + middle + `                  <div className="flex items-center gap-2 text-sm font-medium text-vmgef-ink">
                    {event.location.toLowerCase().includes('online') ? (
                      <Ticket size={16} className="text-vmgef-orange" />
                    ) : (
                      <MapPin size={16} className="text-vmgef-orange" />
                    )} 
                    {event.location}
                  </div>
                  </div>
                </div>` + rest;
}

fs.writeFileSync('/app/applet/src/page_components/Events.tsx', content);
