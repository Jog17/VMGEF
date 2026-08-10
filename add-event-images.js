const fs = require('fs');
const path = '/app/applet/src/page_components/Events.tsx';
let content = fs.readFileSync(path, 'utf-8');

// 1. Featured image
const ticketCardTarget = `{/* TICKET CARD */}
            <div className="fade-up bg-white text-vmgef-ink p-10 shadow-2xl relative rounded-3xl">`;

const ticketCardReplacement = `{/* EVENT IMAGE & TICKET CARD */}
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
              
              <div className="fade-up bg-white text-vmgef-ink p-10 shadow-2xl relative rounded-3xl">`;

if (content.includes(ticketCardTarget)) {
  content = content.replace(ticketCardTarget, ticketCardReplacement);
  // Also need to close the div we opened!
  // Wait, where does the ticket card end? 
  // It ends at:
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </section>
}

// 2. Normal events images
const normalEventTarget = `<div key={event._id || idx} className={\`fade-up border border-vmgef-ink/10 p-8 hover:shadow-xl transition-shadow duration-500 rounded-3xl \${new Date(event.date) > new Date() ? 'bg-vmgef-bg border-vmgef-orange/20' : ''}\`}>
                  <span className="text-vmgef-orange tracking-widest uppercase text-xs font-bold mb-4 block">`;

const normalEventReplacement = `<div key={event._id || idx} className={\`fade-up border border-vmgef-ink/10 overflow-hidden hover:shadow-xl transition-shadow duration-500 rounded-3xl \${new Date(event.date) > new Date() ? 'bg-vmgef-bg border-vmgef-orange/20' : ''}\`}>
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
                    <span className="text-vmgef-orange tracking-widest uppercase text-xs font-bold mb-4 block">`;

if (content.includes(normalEventTarget)) {
  content = content.replace(normalEventTarget, normalEventReplacement);
}

fs.writeFileSync('temp.tsx', content);
