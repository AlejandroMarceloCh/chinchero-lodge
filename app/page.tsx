'use client';

import { FormEvent, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const menu = [
  ['Muña Highball','cane spirit · mountain mint · dry soda'],
  ['Purple Corn Spritz','chicha morada · vermouth · lime leaf'],
  ['Aguaymanto Americano','bitter orange · golden berry · bubbles'],
  ['Tumbo Cooler','Andean passionfruit · pisco · mineral water'],
  ['Sauco & Tonic','elderberry · quinine · zero proof'],
  ['The 3,754','dark rum · toasted corn · cacao bitters'],
];

function Reveal({children,className=''}:{children:React.ReactNode;className?:string}){
  const reduced=useReducedMotion();
  return <motion.div className={className} initial={reduced?false:{y:16,opacity:.94}} whileInView={{y:0,opacity:1}} viewport={{once:true,amount:.16}} transition={{duration:.55,ease:[.2,.7,.2,1]}}>{children}</motion.div>;
}

function Waitlist(){
  const [email,setEmail]=useState(''); const [state,setState]=useState<'idle'|'loading'|'success'|'error'>('idle');
  const [touched,setTouched]=useState(false); const valid=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  function submit(e:FormEvent){e.preventDefault();setTouched(true);if(!valid){setState('error');return}setState('loading');setTimeout(()=>setState('success'),650)}
  if(state==='success') return <motion.div className="success" initial={{scale:.98}} animate={{scale:1}}><img src="/images/tuff-success.png" alt="Tuff waiting by an open door"/><div><p className="kicker">You’re on the list</p><h3>Door’s open.</h3><p>We’ll write when there is something worth saying.</p></div></motion.div>;
  return <form onSubmit={submit} noValidate>
    <label htmlFor="email">Email address</label><div className="form-row"><input id="email" type="email" value={email} onChange={e=>{setEmail(e.target.value);if(state==='error')setState('idle')}} onBlur={()=>setTouched(true)} placeholder="you@example.com" aria-describedby="email-note email-error" aria-invalid={touched&&!valid}/><button disabled={state==='loading'}>{state==='loading'?'Joining…':'Join the list ↗'}</button></div>
    <p id="email-note" className="form-note">Occasional opening notes. Unsubscribe whenever.</p>{touched&&!valid&&<p id="email-error" className="form-error">A real email would help.</p>}
  </form>
}

export default function Home(){return <main>
  <header className="site-header"><a className="wordmark" href="#top" aria-label="Mesa Alta, home">MESA ALTA</a><nav aria-label="Main"><a href="#story">The idea</a><a href="#bar">The bar</a><a href="#cabins">Six cabins</a><a className="nav-cta" href="#waitlist">Join the list</a></nav></header>

  <section className="hero" id="top"><div className="hero-copy"><p className="eyebrow"><span/> Opening 2028 · Chinchero, Peru</p><h1>Six cabins.<br/>One long table.<br/><em>3,754 metres up.</em></h1><p className="lede">A small high-altitude lodge built around a serious bar, shared meals and the pleasure of staying a little longer.</p><div className="hero-actions"><a className="button" href="#waitlist">Join the opening list <span>↗</span></a><span className="microcopy">No booking engine. No fake urgency.<br/>Just occasional field notes.</span></div></div><figure className="hero-art"><img src="/images/master-plan.png" alt="Concept plan of six cabins facing one another across a central path, with a communal building at the entrance"/><figcaption><span>01</span> Early site study — six private cabins, one shared centre</figcaption></figure></section>

  <section className="story section" id="story"><Reveal className="section-head"><p className="kicker">How we got here</p><h2>First came the bar.<br/><i>The lodge followed.</i></h2></Reveal><div className="story-grid"><Reveal className="origin-copy"><p className="big-copy">The idea is simple: a place where the person pouring your drink also cares how the room feels at midnight.</p><p>Alex has spent years behind bars, building drinks around ingredients and the people in front of him. Tuff has spent those same years keeping an eye on the room.</p></Reveal><Reveal className="origin-art"><img src="/images/alex-tuff-origin.png" alt="Editorial illustration of Alex leaning at a timber counter with Tuff beside him"/></Reveal></div></section>

  <section className="bar-section" id="bar"><div className="bar-intro section"><Reveal><p className="kicker light">The social heart</p><h2 className="light-title">Not a hotel bar.<br/><i>A very good bar with six rooms.</i></h2><p className="light-lede">Come down after a cold walk. Sit at the counter. Ask what is being made with muña, purple corn or tumbo that week.</p></Reveal><Reveal className="bartender-art"><img src="/images/alex-behind-bar.png" alt="Alex stirring a drink behind the bar"/></Reveal></div><div className="menu-wrap"><div className="menu-title"><p className="kicker">Notes toward a menu</p><p>Ideas in development, not promises carved in stone.</p></div><div className="menu-grid">{menu.map((item,i)=><motion.article key={item[0]} whileHover={{x:5}}><span>0{i+1}</span><h3>{item[0]}</h3><p>{item[1]}</p></motion.article>)}</div></div><figure className="bar-render"><img src="/images/bar-concept.png" alt="Concept rendering of the communal mountain bar and long table"/><figcaption><span>02</span> The communal building — bar, kitchen, stove, one long table</figcaption></figure></section>

  <section className="cabins section" id="cabins"><Reveal className="section-head"><p className="kicker">The rooms</p><h2>Only six.<br/><i>Facing each other.</i></h2><p className="head-copy">Small A-frames on raised timber decks, with planting around each one for privacy. Modest in scale, exacting in detail.</p></Reveal><div className="cabin-grid"><Reveal className="plan-card"><img src="/images/master-plan.png" alt="Architectural plan of the lodge"/><p><span>6</span> cabins · <span>2</span> rows · <span>1</span> shared path</p></Reveal><Reveal className="cabin-card"><img src="/images/cabin-concept.png" alt="A-frame cabin concept in Andean grassland"/><div><p className="kicker">A room in the puna</p><p>Weathered timber, a steep roof, a proper bed and somewhere to sit outside when the air allows it.</p></div></Reveal></div></section>

  <section className="place section"><div className="place-photo"><img src="/images/chinchero.jpg" alt="Agricultural terraces and mountains near Chinchero, Peru"/><span>Chinchero · Cusco · Peru</span></div><Reveal className="place-copy"><p className="kicker">The place</p><h2>Thin air.<br/><i>Long horizons.</i></h2><p>Chinchero sits above Cusco in a working Andean landscape of farmland, wetlands and mountain weather. The exact property is still to be secured.</p><div className="elevation"><div><span>2,870 m</span><b>Urubamba</b></div><div><span>3,400 m</span><b>Cusco</b></div><div><span>3,754 m</span><b>Chinchero</b></div></div></Reveal></section>

  <section className="cold section"><Reveal className="cold-copy"><p className="kicker light">Worth knowing</p><h2 className="light-title">It gets properly cold.</h2><div className="temperatures"><div><strong>−4°</strong><span>Typical June low</span></div><div><strong>−6°</strong><span>Typical July low</span></div></div><p>That is part of the appeal. Good layers, heavy blankets, dark timber and a stove that earns its place in the room.</p></Reveal><Reveal className="stove-art"><img src="/images/tuff-stove.png" alt="Tuff resting beside a wood-burning stove"/></Reveal></section>

  <section className="naming section"><p className="kicker">Still naming the place</p><h2>Mesa Alta is the working title.</h2><div className="name-list">{['Mesa Alta','Cota 3754','Alto Común','The Long Table','Casa Puna','Six Doors'].map((n,i)=><span key={n}>{i===0?'Working title':'Suggestion'} · {n}</span>)}</div></section>

  <section className="waitlist section" id="waitlist"><div><p className="kicker">Opening list</p><h2>Come up<br/><i>when we’re ready.</i></h2><p>We are early: land, design, construction and a lot of testing still sit between here and opening night.</p></div><Waitlist/></section>

  <footer><div><a className="wordmark" href="#top">MESA ALTA</a><p>Independent hospitality, high in the Andes.<br/>Opening target: 2028.</p><div className="footer-links"><a href="https://instagram.com/alexheem" target="_blank" rel="noreferrer">Instagram ↗</a><a href="/invest">For investors ↗</a></div></div><img src="/images/footer-signoff.png" alt="Alex and Tuff walking away together"/></footer>
</main>}
