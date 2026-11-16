# -*- coding: utf-8 -*-
"""Build CV and portfolio PDFs in FR/EN/IT/ES from content.py (HTML -> PDF with headless Chrome)."""
import html, os, sys, pathlib
from playwright.sync_api import sync_playwright
sys.path.insert(0, os.path.dirname(__file__))
from content import *

ROOT = pathlib.Path(__file__).parent
OUT = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else ROOT.parent.parent / "assets" / "documents")
OUT.mkdir(parents=True, exist_ok=True)
e = html.escape

ICON = {
 "mail": '<svg viewBox="0 0 24 24"><path d="M3 6h18v12H3z M3 6l9 7 9-7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
 "phone": '<svg viewBox="0 0 24 24"><path d="M6.6 3h3l1.5 4.5-2 1.5a12 12 0 0 0 5.9 5.9l1.5-2 4.5 1.5v3a2 2 0 0 1-2 2A17 17 0 0 1 4.6 5a2 2 0 0 1 2-2z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
 "in": '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 10v7M8 7v.01M12 17v-7M12 13a3 3 0 0 1 6 0v4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
 "web": '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',
}

BASE_CSS = """
@page { size: A4; margin: 0; }
* { box-sizing: border-box; margin: 0; padding: 0; }
html, body { font-family: Inter, sans-serif; color: #1f2a44; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
a { color: inherit; }
svg { width: 1em; height: 1em; vertical-align: -0.15em; }
"""

# ------------------------------------------------------------------------- CV
CV_CSS = BASE_CSS + """
html, body { width: 210mm; height: 296.9mm; overflow: hidden; }
.cv { display: grid; grid-template-columns: 64mm 1fr; height: 297mm; }
.side { background: #2f5fb3; color: #fff; padding: 10mm 7mm 8mm; display: flex; flex-direction: column; gap: 5mm; }
.photo { width: 34mm; height: 34mm; border-radius: 50%; object-fit: cover; border: 1.2mm solid rgba(255,255,255,.85); align-self: center; }
.side h2 { font-size: 8.4pt; letter-spacing: .06em; text-transform: uppercase; font-weight: 700; color: #cfe0ff; border-bottom: .3mm solid rgba(255,255,255,.35); padding-bottom: 1.2mm; margin-bottom: 2mm; }
.side p, .side li { font-size: 8.4pt; line-height: 1.38; }
.side ul { list-style: none; display: flex; flex-direction: column; gap: 1.1mm; }
.contact li { display: flex; gap: 2mm; align-items: center; overflow-wrap: anywhere; }
.contact a { text-decoration: none; }
.edu li strong { display: block; font-weight: 600; }
.edu li span { color: #dbe7ff; font-size: 7.8pt; display: block; }
.edu li { margin-bottom: .8mm; }
.lang li { display: flex; justify-content: space-between; gap: 2mm; }
.lang li span { color: #dbe7ff; font-size: 7.6pt; text-align: right; }
.chips { display: flex; flex-wrap: wrap; gap: 1.4mm; }
.chips span { font-size: 7.8pt; background: rgba(255,255,255,.16); border-radius: 2mm; padding: .7mm 2mm; }
.main { min-height: 0; overflow: hidden; padding: 11mm 10mm 8mm 9mm; display: flex; flex-direction: column; background: #fffaf1; }
h1 { font-size: 25pt; font-weight: 800; color: #2f5fb3; letter-spacing: -.01em; line-height: 1; }
.headline { font-size: 11pt; font-weight: 600; color: #1f2a44; margin-top: 2mm; }
.profile { font-size: 8.7pt; line-height: 1.42; margin: 3mm 0 4mm; color: #33405c; text-align: justify; }
.blocks { flex: 1; display: grid; grid-template-rows: repeat(3, minmax(0, 1fr)); gap: 4.5mm; min-height: 0; }
.block { border: .45mm solid #1f2a44; border-radius: 4mm; box-shadow: 1.4mm 1.4mm 0 #1f2a44; background: #fff; padding: 3mm 4.5mm 2.6mm; overflow: hidden; display: flex; flex-direction: column; }
.block h3 { font-size: 11.5pt; font-weight: 800; color: #2f5fb3; margin-bottom: 1.4mm; }
.items { display: flex; flex-direction: column; justify-content: space-evenly; flex: 1; gap: 1.2mm; }
.item { font-size: 8pt; line-height: 1.28; }
.item .top { display: flex; justify-content: space-between; gap: 3mm; align-items: baseline; }
.item strong { font-weight: 700; }
.item .tech { color: #2f5fb3; font-weight: 600; font-size: 7.6pt; }
.item .date { color: #5a6680; font-size: 7.6pt; white-space: nowrap; }
.item p { color: #33405c; }
.item a { color: #2f5fb3; font-weight: 600; text-decoration: none; white-space: nowrap; }
.foot { margin-top: 4mm; font-size: 8.2pt; color: #33405c; }
.foot a { color: #2f5fb3; font-weight: 600; }
"""

def cv_html(lang):
    c = CV[lang]
    edu = "".join(f"<li><strong>{e(s)}</strong><span>{e(p)}</span>" + (f"<span>{e(d)}</span>" if d else "") + (f"<span>{e(n)}</span>" if n else "") + "</li>" for s, p, d, n in c["edu"])
    langs = "".join(f"<li>{e(a)}<span>{e(b)}</span></li>" for a, b in c["langs"])
    chips = lambda xs: '<div class="chips">' + "".join(f"<span>{e(x)}</span>" for x in xs) + "</div>"
    proj = ""
    for name, tech, date, txt, url in c["projects"]:
        link = f' · <a href="{url}">{e(url.split("//")[1].rstrip("/"))}</a>' if url else ""
        proj += f'<div class="item"><div class="top"><span><strong>{e(name)}</strong> <span class="tech">{e(tech)}</span></span><span class="date">{e(date)}</span></div><p>{e(txt)}{link}</p></div>'
    work = "".join(f'<div class="item"><div class="top"><strong>{e(n)}</strong><span class="date">{e(d)}</span></div><p><em>{e(p)}</em> — {e(t)}</p></div>' for n, p, d, t in c["work"])
    anim = "".join(f'<div class="item"><strong>{e(n)}</strong><p>{e(t)}</p></div>' for n, t in c["anim"])
    pf = f"../portfolio/Portfolio-Adrien-Le-Berre-{lang.upper()}.pdf"
    return f"""<!DOCTYPE html><html lang="{lang}"><head><meta charset="utf-8"><title>{e(c['title'])}</title><style>{CV_CSS}</style></head><body>
<div class="cv">
 <aside class="side">
  <img class="photo" src="img/portrait.jpg" alt="">
  <section class="contact"><h2>{e(c['s_contact'])}</h2><ul>
   <li>{ICON['mail']}<a href="mailto:{EMAIL}">{EMAIL}</a></li>
   <li>{ICON['phone']}<a href="tel:{PHONE.replace(' ','')}">{PHONE}</a></li>
   <li>{ICON['in']}<a href="{LINKEDIN}">LinkedIn — Adrien Le Berre</a></li>
   <li>{ICON['web']}<a href="{SITE}">vactar94.github.io/adrien.le-berre</a></li></ul></section>
  <section class="edu"><h2>{e(c['s_edu'])}</h2><ul>{edu}</ul></section>
  <section class="lang"><h2>{e(c['s_lang'])}</h2><ul>{langs}</ul></section>
  <section><h2>{e(c['s_prog'])}</h2>{chips(PROG)}</section>
  <section><h2>{e(c['s_tools'])}</h2>{chips(TOOLS)}</section>
  <section><h2>{e(c['s_soft'])}</h2>{chips(c['soft'])}</section>
  <section><h2>{e(c['s_int'])}</h2><ul>{''.join(f'<li>{e(x)}</li>' for x in c['interests'])}</ul></section>
 </aside>
 <main class="main">
  <h1>ADRIEN LE BERRE</h1>
  <p class="headline">{e(c['headline'])}</p>
  <p class="profile">{e(c['profile'])}</p>
  <div class="blocks">
   <section class="block"><h3>{e(c['b_it'])}</h3><div class="items">{proj}</div></section>
   <section class="block"><h3>{e(c['b_work'])}</h3><div class="items">{work}</div></section>
   <section class="block"><h3>{e(c['b_anim'])}</h3><div class="items">{anim}</div></section>
  </div>
  <p class="foot">{e(c['more'])} {e(c['more2'])}{"\u00a0:" if lang == "fr" else ":"} <a href="{SITE}">{SITE}</a></p>
 </main>
</div></body></html>"""

# ------------------------------------------------------------------ PORTFOLIO
PF_CSS = BASE_CSS + """
body { background: #fdf0d9; }
.page { width: 210mm; height: 297mm; position: relative; overflow: hidden; page-break-after: always; padding: 18mm 17mm 16mm; background: #fdf0d9; display: flex; flex-direction: column; }
.page:last-child { page-break-after: auto; }
.page::before, .page::after { content: ""; position: absolute; width: 60mm; height: 14mm; background: #4f86e3; border-radius: 10mm; transform: rotate(-35deg); }
.page::before { top: -2mm; right: -18mm; }
.page::after { bottom: 2mm; left: -22mm; }
.pno { position: absolute; bottom: 9mm; right: 15mm; font-size: 8pt; color: #5a6680; }
.pno a { text-decoration: none; color: #4f86e3; margin-right: 3mm; }
.kicker { font-size: 9pt; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; color: #4f86e3; }
h1.sec { font-size: 25pt; font-weight: 800; color: #2f5fb3; margin: 1.5mm 0 6mm; line-height: 1.08; }
h2.sub { font-size: 16pt; font-weight: 800; color: #1f2a44; margin-bottom: 1.5mm; }
.meta { font-size: 9.2pt; color: #4f86e3; font-weight: 600; margin-bottom: 5mm; }
p.txt { font-size: 11pt; line-height: 1.6; color: #2b3652; text-align: justify; }
.card { background: #fff; border: .45mm solid #1f2a44; border-radius: 4mm; box-shadow: 1.6mm 1.6mm 0 #1f2a44; padding: 5mm 6mm; }
.blue { background: #4f86e3; color: #fff; border-radius: 5mm; padding: 5mm 6mm; }
.blue p { color: #fff; }
.cover { justify-content: center; align-items: center; text-align: center; }
.cover h1 { font-size: 46pt; font-weight: 800; color: #4f86e3; letter-spacing: .04em; }
.cover .name { font-size: 20pt; font-weight: 600; margin-top: 3mm; }
.cover .subt { font-size: 11pt; color: #4f5c78; margin-top: 2mm; }
.cover img { width: 62mm; height: 62mm; border-radius: 50%; object-fit: cover; border: 2mm solid #fff; box-shadow: 0 0 0 .5mm #4f86e3; margin-bottom: 9mm; }
.toc { list-style: none; }
.toc > li { margin-bottom: 3.2mm; }
.toc a { text-decoration: none; display: flex; align-items: baseline; gap: 2mm; color: #1f2a44; }
.toc a .dots { flex: 1; border-bottom: .4mm dotted #8a94aa; transform: translateY(-1mm); }
.toc > li > a { font-size: 13pt; font-weight: 700; }
.toc ul { list-style: none; margin: 2mm 0 0 8mm; }
.toc ul li { margin-bottom: 1.6mm; }
.toc ul a { font-size: 10.5pt; font-weight: 500; color: #33405c; }
.toc .num { color: #2f5fb3; font-weight: 700; min-width: 9mm; }
.facts { display: grid; grid-template-columns: repeat(3, 1fr); gap: 4mm; margin-top: 7mm; }
.facts div { background: #fff; border-radius: 3mm; padding: 3.5mm; border: .35mm solid #c9d6ef; }
.facts span { display: block; font-size: 8pt; text-transform: uppercase; letter-spacing: .1em; color: #4f86e3; font-weight: 700; }
.facts strong { font-size: 10pt; }
.chips { display: flex; flex-wrap: wrap; gap: 2mm; margin-top: 2mm; }
.chips span { font-size: 9.5pt; background: #fff; border: .35mm solid #4f86e3; color: #2f5fb3; border-radius: 3mm; padding: 1mm 3mm; font-weight: 600; }
.grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 5mm; }
.ph { width: 100%; object-fit: cover; border-radius: 4mm; display: block; background: #fff; }
.proj-body { display: grid; grid-template-columns: 1fr 1fr; gap: 6mm; margin-top: 6mm; flex: 1; min-height: 0; }
.details { display: flex; flex-direction: column; gap: 4mm; }
.details h4 { font-size: 8.4pt; text-transform: uppercase; letter-spacing: .12em; color: #4f86e3; margin-bottom: 1mm; }
.details p { font-size: 10pt; line-height: 1.5; color: #2b3652; }
.btn { display: inline-block; background: #1f2a44; color: #fff !important; text-decoration: none; border-radius: 3mm; padding: 2.4mm 4.5mm; font-weight: 700; font-size: 10pt; }
.gallery { display: grid; gap: 4mm; }
.exp { margin-bottom: 5mm; }
.contact-list { list-style: none; display: flex; flex-direction: column; gap: 4mm; font-size: 12pt; }
.contact-list a { text-decoration: none; display: flex; align-items: center; gap: 3mm; }
.contact-list svg { width: 7mm; height: 7mm; color: #4f86e3; }
.logo { height: 16mm; width: auto; object-fit: contain; }
"""

def pf_html(lang):
    t = PF[lang]; P = t["projects"]
    # (id, title, subtitles) in page order -- page index computed from order below
    order = ["cover", "toc", "about", "skills", "etri", "drone", "tribz", "word", "task", "pool", "cook", "cook2", "anim", "interests", "contact"]
    pg = {k: i + 1 for i, k in enumerate(order)}
    back = f'<a href="#toc">↑ {e(t["toc"])}</a>'
    def num(k): return f'<div class="pno">{back}{pg[k]}</div>'
    pages = []
    pages.append(f'''<section class="page cover" id="cover"><img src="img/portrait.jpg" alt=""><h1>{e(t["cover_kicker"]).upper()}</h1><p class="name">Adrien Le Berre</p><p class="subt">{e(t["cover_sub"])}</p></section>''')
    def tl(k, label, n=""):
        return f'<a href="#{k}"><span class="num">{n}</span><span>{e(label)}</span><span class="dots"></span><span>{pg[k]}</span></a>'
    toc = f'''<section class="page" id="toc"><p class="kicker">Portfolio</p><h1 class="sec">{e(t["toc"])}</h1><div class="card" style="padding:8mm 9mm"><ul class="toc">
<li>{tl("about", t["sec_about"], "I.")}</li>
<li>{tl("skills", t["sec_skills"], "II.")}</li>
<li>{tl("etri", t["sec_projects"], "III.")}<ul>{"".join(f"<li>{tl(k, P[k][0])}</li>" for k in ["etri","drone","tribz","word","task","pool"])}</ul></li>
<li>{tl("cook", t["sec_exp"], "IV.")}<ul><li>{tl("cook", t["sec_cook"])}</li><li>{tl("anim", t["sec_anim"])}</li></ul></li>
<li>{tl("interests", t["sec_int"], "V.")}<ul><li>{tl("interests", t["muay"][0])}</li><li>{tl("interests", t["sail"][0])}</li></ul></li>
<li>{tl("contact", t["sec_contact"], "VI.")}</li></ul></div></section>'''
    pages.append(toc)
    facts = "".join(f"<div><span>{e(a)}</span><strong>{e(b)}</strong></div>" for a, b in t["facts"])
    pages.append(f'''<section class="page" id="about"><p class="kicker">I.</p><h1 class="sec">{e(t["sec_about"])}</h1>
<div style="display:grid;grid-template-columns:1.25fr 1fr;gap:8mm;align-items:start"><p class="txt">{e(t["about"])}</p><img class="ph" src="img/portrait.jpg" style="height:110mm" alt=""></div>
<div class="facts">{facts}</div>{num("about")}</section>''')
    chips = lambda xs: '<div class="chips">' + "".join(f"<span>{e(x)}</span>" for x in xs) + "</div>"
    pages.append(f'''<section class="page" id="skills"><p class="kicker">II.</p><h1 class="sec">{e(t["sec_skills"])}</h1>
<p class="txt" style="margin-bottom:7mm">{e(t["skills_text"])}</p>
<div class="card" style="margin-bottom:6mm"><h2 class="sub">{e(t["skills_lang"])}</h2>{chips(PROG)}</div>
<div class="card" style="margin-bottom:6mm"><h2 class="sub">{e(t["skills_tools"])}</h2>{chips(TOOLS)}</div>
<div class="card"><h2 class="sub">{e(t["skills_soft"])}</h2>{chips(t["soft"])}</div>{num("skills")}</section>''')
    stacks = {"etri": "Python · Android", "drone": "Python · Camera · Drone", "tribz": "C# · Unity", "word": "C · SDL2 · Neural network",
              "task": "Rust · GUI · Web", "pool": "HTML · CSS · JavaScript"}
    links = {"tribz": TRIBZ, "task": TASKLIST, "pool": POOLNIGHT}
    imgs = {"etri": ["etri-poster.jpg", "etri-app.jpg"], "drone": ["drone-poster.jpg", "drone-logo.jpg"], "tribz": ["tribz-1.jpg", "tribz-2.jpg"],
            "word": ["wordsolver.jpg"], "task": ["tasklist-app.jpg", "tasklist-site.jpg"], "pool": ["poolnight-home.jpg", "poolnight-ranking.jpg"]}
    fits = {"etri-app.jpg": "contain", "drone-logo.jpg": "contain", "poolnight-ranking.jpg": "contain", "etri-poster.jpg": "contain", "drone-poster.jpg": "contain"}
    for k in ["etri", "drone", "tribz", "word", "task", "pool"]:
        name, meta, what, ctx, role = P[k]
        im = imgs[k]
        h = 100 if len(im) == 2 else 210
        gal = "".join(f'<img class="ph" src="img/{x}" style="height:{h}mm;object-fit:{fits.get(x,"cover")}" alt="">' for x in im)
        btn = f'<p><a class="btn" href="{links[k]}">{e(t["link"])} ↗</a></p>' if k in links else ""
        pages.append(f'''<section class="page" id="{k}"><p class="kicker">III. {e(t["sec_projects"])}</p><h1 class="sec" style="margin-bottom:1mm">{e(name)}</h1><p class="meta">{e(meta)}</p>
<div class="blue"><p class="txt" style="color:#fff">{e(what)}</p></div>
<div class="proj-body"><div class="details"><div><h4>{e(t["context"])}</h4><p>{e(ctx)}</p></div><div><h4>{e(t["role"])}</h4><p>{e(role)}</p></div><div><h4>{e(t["stack"])}</h4>{chips(stacks[k].split(" · "))}</div>{btn}</div>
<div class="gallery">{gal}</div></div>{num(k)}</section>''')
    c = t["cook"]
    pages.append(f'''<section class="page" id="cook"><p class="kicker">IV. {e(t["sec_exp"])}</p><h1 class="sec">{e(t["sec_cook"])}</h1>
<p class="txt" style="margin-bottom:6mm">{e(t["cook_intro"])}</p>
<div class="card exp"><h2 class="sub">{e(c[0][0])}</h2><p class="meta" style="margin-bottom:2mm">{e(c[0][1])}</p><p class="txt">{e(c[0][2])}</p></div>
<div class="gallery" style="grid-template-columns:1fr 1fr 1fr"><img class="ph" src="img/chaumiere-front.jpg" style="height:88mm" alt=""><img class="ph" src="img/chaumiere-catering.jpg" style="height:88mm" alt=""><img class="ph" src="img/chaumiere-trays.jpg" style="height:88mm" alt=""></div>
{num("cook")}</section>''')
    pages.append(f'''<section class="page" id="cook2"><p class="kicker">IV. {e(t["sec_exp"])}</p><h1 class="sec">{e(t["sec_cook"])}</h1>
<div class="card exp" style="display:grid;grid-template-columns:1fr 22mm;gap:4mm;align-items:center"><div><h2 class="sub">{e(c[1][0])}</h2><p class="meta" style="margin-bottom:2mm">{e(c[1][1])}</p><p class="txt">{e(c[1][2])}</p></div><img class="logo" src="img/assemblee-logo.png" alt=""></div>
<div class="gallery" style="grid-template-columns:1fr 1fr 1fr;margin-bottom:6mm"><img class="ph" src="img/assemblee-1.jpg" style="height:58mm" alt=""><img class="ph" src="img/assemblee-2.jpg" style="height:58mm" alt=""><img class="ph" src="img/assemblee-3.jpg" style="height:58mm" alt=""></div>
<div class="card exp" style="display:grid;grid-template-columns:1fr 30mm;gap:4mm;align-items:center"><div><h2 class="sub">{e(c[2][0])}</h2><p class="meta" style="margin-bottom:2mm">{e(c[2][1])}</p><p class="txt">{e(c[2][2])}</p></div><img class="logo" style="height:22mm" src="img/brasserie-logo.png" alt=""></div>
<div class="gallery" style="grid-template-columns:1fr 1fr"><img class="ph" src="img/brasserie-adrien.jpg" style="height:66mm" alt=""><img class="ph" src="img/brasserie-dish.jpg" style="height:66mm" alt=""></div>
{num("cook2")}</section>''')
    a = t["anim"]
    pages.append(f'''<section class="page" id="anim"><p class="kicker">IV. {e(t["sec_exp"])}</p><h1 class="sec">{e(t["sec_anim"])}</h1>
<p class="txt" style="margin-bottom:6mm">{e(t["anim_intro"])}</p>
<div class="grid2" style="margin-bottom:6mm"><div class="card"><img class="logo" src="img/gendarmerie-logo.png" alt=""><h2 class="sub" style="margin-top:2mm">{e(a[0][0])}</h2><p class="txt" style="font-size:9.6pt">{e(a[0][1])}</p></div>
<div class="card"><img class="logo" src="img/scouts-logo.png" alt=""><h2 class="sub" style="margin-top:2mm">{e(a[1][0])}</h2><p class="txt" style="font-size:9.6pt">{e(a[1][1])}</p></div></div>
<div class="gallery" style="grid-template-columns:1fr 1fr"><img class="ph" src="img/anim-group.jpg" style="height:70mm" alt=""><img class="ph" src="img/anim-scouts.jpg" style="height:70mm" alt=""><img class="ph" src="img/anim-1.jpg" style="height:60mm" alt=""><img class="ph" src="img/anim-field.jpg" style="height:60mm" alt=""></div>
{num("anim")}</section>''')
    m, s = t["muay"], t["sail"]
    pages.append(f'''<section class="page" id="interests"><p class="kicker">V.</p><h1 class="sec">{e(t["sec_int"])}</h1>
<div class="card" style="margin-bottom:5mm"><h2 class="sub">{e(m[0])}</h2><p class="meta" style="margin-bottom:2mm">{e(m[1])}</p><p class="txt" style="font-size:10pt">{e(m[2])}</p></div>
<div class="gallery" style="grid-template-columns:1fr 1fr 1fr;margin-bottom:6mm"><img class="ph" src="img/muay-1.jpg" style="height:60mm" alt=""><img class="ph" src="img/muay-2.jpg" style="height:60mm" alt=""><img class="ph" src="img/muay-3.jpg" style="height:60mm" alt=""></div>
<div class="card" style="margin-bottom:5mm"><h2 class="sub">{e(s[0])}</h2><p class="meta" style="margin-bottom:2mm">{e(s[1])}</p><p class="txt" style="font-size:10pt">{e(s[2])}</p></div>
<div class="gallery" style="grid-template-columns:1fr 1fr 1fr"><img class="ph" src="img/sail-1.jpg" style="height:56mm" alt=""><img class="ph" src="img/sail-2.jpg" style="height:56mm" alt=""><img class="ph" src="img/sail-3.jpg" style="height:56mm" alt=""></div>
{num("interests")}</section>''')
    pages.append(f'''<section class="page" id="contact"><p class="kicker">VI.</p><h1 class="sec">{e(t["sec_contact"])}</h1>
<p class="txt" style="margin-bottom:10mm">{e(t["contact_text"])}</p>
<div class="card" style="display:grid;grid-template-columns:1fr 45mm;gap:6mm;align-items:center;padding:9mm"><ul class="contact-list">
<li><a href="mailto:{EMAIL}">{ICON["mail"]}{EMAIL}</a></li><li><a href="tel:{PHONE.replace(" ","")}">{ICON["phone"]}{PHONE}</a></li>
<li><a href="{LINKEDIN}">{ICON["in"]}LinkedIn — Adrien Le Berre</a></li><li><a href="{SITE}">{ICON["web"]}{e(t["site_label"])}</a></li></ul>
<img class="ph" src="img/portrait.jpg" style="height:45mm;border-radius:50%" alt=""></div>{num("contact")}</section>''')
    return f'<!DOCTYPE html><html lang="{lang}"><head><meta charset="utf-8"><title>{e(t["title"])}</title><style>{PF_CSS}</style></head><body>{"".join(pages)}</body></html>'


def render():
    with sync_playwright() as p:
        b = p.chromium.launch(executable_path=os.environ.get("CHROME_PATH"))  # None = Playwright's bundled Chromium
        page = b.new_page()
        for lang in LANGS:
            for kind, fn, sub, name in [("cv", cv_html, "cv", "CV-Adrien-Le-Berre"), ("pf", pf_html, "portfolio", "Portfolio-Adrien-Le-Berre")]:
                src = ROOT / f"_{kind}-{lang}.html"
                src.write_text(fn(lang), encoding="utf-8")
                page.goto(src.as_uri()); page.wait_for_load_state("networkidle")
                d = OUT / sub; d.mkdir(exist_ok=True)
                page.pdf(path=str(d / f"{name}-{lang.upper()}.pdf"), format="A4", print_background=True, prefer_css_page_size=True, tagged=True)
        b.close()

if __name__ == "__main__":
    render()
