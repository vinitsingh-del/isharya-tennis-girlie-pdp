import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const frames = [1, 2, 3, 4].map((n) => `../assets/hero-3-spin-${n}.jpg`);
const styling = [
  ["Tennis Whites", "../assets/style-tennis-whites.jpg"],
  ["Sharp Tailoring", "../assets/style-sharp-tailoring.jpg"],
  ["After Dark", "../assets/style-after-dark.jpg"],
  ["The Stack", "../assets/style-the-stack.jpg"],
];
const collection = [
  ["Tennis Girlie Small Hoops", "Rs.2,799", "../assets/style-tennis-whites.jpg"],
  ["Tennis Girlie Pendant", "Rs.3,299", "../assets/style-sharp-tailoring.jpg"],
  ["Tennis Girlie Stack Ring", "Rs.2,499", "../assets/style-after-dark.jpg"],
  ["Tennis Girlie Bracelet", "Rs.3,599", "../assets/style-the-stack.jpg"],
];
const ease = [0.22, 1, 0.36, 1];

function SpinViewer({ open, onClose }) {
  const [frame, setFrame] = useState(0);
  const [playing, setPlaying] = useState(true);
  useEffect(() => {
    if (!open || !playing) return;
    const timer = setInterval(() => setFrame((value) => (value + 1) % frames.length), 380);
    return () => clearInterval(timer);
  }, [open, playing]);
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-50 grid place-items-center bg-black/90 p-4 backdrop-blur-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="relative h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-[#E6CA65]/20 bg-[#111113] shadow-2xl" initial={{ scale: 0.96 }} animate={{ scale: 1 }} transition={{ duration: 0.6, ease }}>
            <button onClick={onClose} className="absolute right-5 top-5 z-10 h-11 w-11 rounded-full border border-white/15 bg-black/40 text-xl text-[#F9F8F6] focus:outline-none focus:ring-2 focus:ring-[#E6CA65]" aria-label="Close viewer">×</button>
            <motion.img key={frames[frame]} src={frames[frame]} alt={`Product angle ${frame + 1}`} className="h-full w-full object-contain" initial={{ opacity: 0.75 }} animate={{ opacity: 1 }} />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/80 to-transparent p-6">
              <div><h3 className="font-serif text-2xl text-[#F9F8F6]">Tennis Girlie Earrings</h3><p className="mt-1 text-xs uppercase tracking-[.18em] text-white/50">360° product view · Angle {frame + 1} of 4</p></div>
              <button onClick={() => setPlaying((value) => !value)} className="rounded-full border border-[#E6CA65]/50 bg-black/40 px-5 py-3 text-xs uppercase tracking-[.16em] text-[#E6CA65]">{playing ? "Pause" : "Play"} 360°</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function LuxuryPDP() {
  const [viewer, setViewer] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [favorite, setFavorite] = useState(false);
  const [bag, setBag] = useState(0);
  return (
    <main className="min-h-screen bg-[#0F0F11] font-sans text-[#F9F8F6] selection:bg-[#D4AF37] selection:text-[#0F0F11]">
      <SpinViewer open={viewer} onClose={() => setViewer(false)} />
      <div className="bg-[#09090A] py-2 text-center text-[10px] uppercase tracking-[.22em] text-[#E6CA65]">Free shipping above Rs.1,499 · 1-year warranty · 7-day returns</div>
      <nav className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-[#E6CA65]/10 bg-[#0F0F11]/75 px-5 backdrop-blur-xl md:px-12">
        <a href="#" className="font-serif text-3xl tracking-[.12em]">ISHARYA</a>
        <div className="hidden gap-8 text-xs uppercase tracking-[.16em] text-white/65 md:flex"><a href="#">Earrings</a><a href="#">Necklaces</a><a href="#">Rings</a><a href="#">Gifting</a></div>
        <div className="flex gap-5 text-xs uppercase tracking-[.14em]"><button>Search</button><button>INR</button><button>Bag ({bag})</button></div>
      </nav>

      <section className="grid min-h-[calc(100vh-112px)] lg:grid-cols-[1.2fr_.8fr]">
        <motion.div className="relative overflow-hidden bg-[radial-gradient(circle_at_50%_35%,rgba(212,175,55,.12),transparent_45%)]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
          <motion.img src="../hero-poster.jpg" alt="Tennis Girlie earrings" className="h-full min-h-[560px] w-full object-cover" whileHover={{ scale: 1.015, rotateX: 0.5, rotateY: -0.5 }} transition={{ duration: 0.8, ease }} />
          <button onClick={() => setViewer(true)} className="absolute bottom-8 right-8 grid h-24 w-24 place-items-center rounded-full border-2 border-white bg-white/90 font-serif text-2xl font-semibold text-[#0F0F11] shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#E6CA65]">360°</button>
        </motion.div>
        <motion.div className="flex flex-col justify-center border-l border-[#E6CA65]/10 px-6 py-14 md:px-14" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease }}>
          <p className="text-[10px] uppercase tracking-[.22em] text-[#D4AF37]">Tennis Collection</p>
          <h1 className="mt-5 font-serif text-5xl leading-[.98] md:text-6xl">Tennis Girlie Square Front Back Earrings</h1>
          <p className="mt-4 text-xs tracking-[.14em] text-white/40">SKU E2627-65-710</p>
          <div className="mt-6 flex flex-wrap gap-2">{["Tennis Inspired","Front-Back","Crystal Zirconia","18K Gold Plated","Handcrafted"].map((tag) => <span key={tag} className="border border-[#E6CA65]/20 bg-[#E6CA65]/5 px-3 py-2 text-[10px] uppercase tracking-[.12em] text-white/65">{tag}</span>)}</div>
          <div className="my-8 border-y border-[#E6CA65]/10 py-7"><span className="text-4xl font-medium">Rs.3,999</span><span className="ml-3 text-sm text-white/35 line-through">Rs.4,999</span><p className="mt-2 text-xs text-white/45">MRP · Inclusive of all taxes</p></div>
          <div className="flex gap-3"><div className="flex border border-[#E6CA65]/20"><button className="h-13 w-12" onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button><span className="grid w-12 place-items-center border-x border-[#E6CA65]/20">{quantity}</span><button className="h-13 w-12" onClick={() => setQuantity(quantity + 1)}>+</button></div><button onClick={() => setBag((value) => value + quantity)} className="flex-1 bg-gradient-to-r from-[#B89127] to-[#E6CA65] px-5 text-xs font-semibold uppercase tracking-[.18em] text-[#0F0F11]">Add to Bag</button></div>
          <button onClick={() => setFavorite(!favorite)} className="mt-3 border border-[#E6CA65]/20 py-4 text-xs uppercase tracking-[.16em]">{favorite ? "Saved ♥" : "Save to favourites ♡"}</button>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-28 md:px-10"><p className="text-center text-[10px] uppercase tracking-[.24em] text-[#D4AF37]">AI Styling Inspiration</p><h2 className="mt-4 text-center font-serif text-5xl">Four ways to style it</h2><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{styling.map(([name, image], index) => <motion.article key={name} className="group overflow-hidden rounded-2xl border border-[#E6CA65]/15 bg-white/[.04] backdrop-blur-xl" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .09, duration: .7, ease }}><img src={image} alt={name} className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"/><div className="p-5"><h3 className="font-serif text-2xl">{name}</h3><p className="mt-1 text-[10px] uppercase tracking-[.16em] text-white/40">AI styling concept</p></div></motion.article>)}</div></section>

      <section className="border-y border-[#E6CA65]/10 bg-[#131315]"><div className="mx-auto grid max-w-7xl md:grid-cols-2"><img src="../assets/celebrity-burgundy.jpg" alt="Artisan-inspired editorial" className="h-full min-h-[520px] w-full object-cover"/><motion.div className="flex flex-col justify-center p-10 md:p-16" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .9, ease }}><p className="text-[10px] uppercase tracking-[.24em] text-[#D4AF37]">Craftsmanship & Heritage</p><h2 className="mt-5 font-serif text-5xl">Made slowly. Worn boldly.</h2><p className="mt-7 max-w-lg leading-8 text-white/55">Precision-set crystal zirconia, 18K gold plating and a protective E-coat come together in a front-back silhouette shaped by specialist hands.</p><p className="mt-5 max-w-lg leading-8 text-white/55">Hypoallergenic brass, nickel- and lead-free materials, and a one-year plating warranty protect every detail.</p></motion.div></div></section>

      <section className="mx-auto max-w-7xl px-5 py-28 md:px-10"><p className="text-center text-[10px] uppercase tracking-[.24em] text-[#D4AF37]">The Tennis Collection</p><h2 className="mt-4 text-center font-serif text-5xl">Complete the Look</h2><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{collection.map(([name, price, image]) => <article key={name} className="group rounded-2xl border border-[#E6CA65]/15 bg-white/[.04] p-3 backdrop-blur-xl"><div className="overflow-hidden rounded-xl"><img src={image} alt={name} className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105"/></div><div className="p-3"><h3 className="font-serif text-xl">{name}</h3><p className="mt-1 text-sm text-[#E6CA65]">{price}</p><button className="mt-4 w-full border border-[#E6CA65]/25 py-3 text-[10px] uppercase tracking-[.16em] transition hover:bg-[#D4AF37] hover:text-[#0F0F11]">Add</button></div></article>)}</div></section>
    </main>
  );
}
