<script setup lang="ts">
// Mosquito made of the letters A, T, C and G. It falls into place, then flows
// into a line reading "-VECTOR OBSERVATORY-" when hovered or tapped.
// Adapted from Mosquito_genome_animation_VObs_2.html for the home page hero:
// sizes to its container, follows the site's light/dark switch, pauses when
// off screen, and stops cleanly when leaving the page.
import { onMounted, onBeforeUnmount, ref } from 'vue'

const box = ref<HTMLElement | null>(null)
const pre = ref<HTMLElement | null>(null)
let cleanup: (() => void) | null = null

onMounted(() => {
  const root = box.value!
  const el = pre.value!
  const ART: string[] = ["        W                                                                                             P", "         M", "                                                                                                     H", "          M                                                                                         P", "           H                                                                                       W", "            K                                                                                      U", "             M                                                                                    O", "              S                                                                                  O", "               M                                                                                K", "                K                                                                              S", "                 K                                      YY                                    Y", "                  U                                    MGDO", "                   OW                                 HGGDGH                               K", "                     M                                UGHKHY                              K", "                      M                               UHHGKY                            UY", "                       PK                             HGHHDO                          YH", "                          K               WM          HMKMSH        WOW              K", "                            KMY         MGYGH        WGGHGHO        WGHKKW       MKM", "                                 KKKKGK    KH        UDGGHGG        HH    OGKKKOU", "                            PSSOWUOWUPSUPSY GH        MMKMPM        HKUSSWUPWWPUUOPSOU", "                          OSUSWSPYYSYYPYYUS OK       ODGHHHGP      KMUWUWYOWYPWWPSUUPPM", "                          KOOSOSWSSWUS ODDKYUMP      KOKMMMPP     PMOY MDBKSUWPWYOSPOHK", "                           USKGHMMUYUWWMBBBPYOPO     UGGKKGH      WOY PBBMAWWWSSPKGMP", "                              WKPMKYYSWKAUBAU PU     SPPPSSMSY   OPWWMBBSOBUY KSOKY", "                                   MMPHGBS ADY PO   YWKKMMMM     PUUWBBU KBOOM", "                                       BD G DBSSW UYS YYPY  YY  MP YDDOYMKD", "                                       BH  OKGD WOSMGHMMSMHHYPUPOY DDOP   DY", "                                       GM    DDHMUOGMHHMOKPHHWHPPSKGH     D", "                                       DP     GDOPMMHKOMSKSKDUSHW DD      G", "                                       DS     SDGMMKGHGKSMOHDPHMODHY      D", "                                       DU      GGWHGGHGKKHKDODGGMHG       GM", "                                     GGDG       GYGDGKDHGDGDHDDHPK     KDDDD", "                                     KGDBDDH    MKGHHKDDGDGGKPGHOU   GHDH MD", "                                      DG  KDKG   MGOKDHDBBBDGKKKU  GDDS   DK", "                                      KG    ODDH  KBPGDAABDDHKBM WHDS    UDH", "                                      WDY     KGB GUBGKBBAGBGBOKBKH      DPD", "                                      UGK       DBOWDGDOBKHGDGYHGY      WD D", "                                      MOD        SPDSMGDABKHMHKG        DW H", "                                      DUDO         HGPDDABDKKDY        WD  G", "                                      DS H          PGHOGHKKB          BY  DO", "                                     KK  DP       YMDDKGMKGKGG         B    GU", "                                   YG     D        GDBBBOBBBBDP       DW     WG", "                                  HY      BY    MP  DBKGBBSABG  UP    G        DW", "                                SG      Y SMW         WDGDD          MM Y       UG", "                               G     PP    D           HGG           B     OU     DY", "                             MK            MP         YDGG U        OK             YG", "                            B              WB          GGMU         D                DW", "                          DO                D          GGUM        OB                 WD", "                        OD                 WDD          H Y        BHY                  BK", "                       DY                  YG           H           D                     DS", "                    MD                     D            H            G                      GM", "                  GO                      D             G            OM                       KK", "               SDY                       MS             G             D                         MGY", "             GS                          D              G              D                           HH", "         YDS                            D               G              KU                             GH", "      UGM                              D                H               D                                MG", "  UDD                                 UG                G               YD                                  GGP", "K                                     D                 G                DP                                     Y", "                                     HY                 D                 H", "                                    G                   D                  D", "                                   G                    D                   G", "                                  G                     D                    M", "                                 D                      G                    MM", "                                GU                      O                     DO", "                               G                                               HW", "                              D                                                 KY", "                             G                                                   KW", "                           SG                                                     HS", "                          PP                                                       GS", "                         GW                                                         OM", "                        G                                                             H", "                      WG                                                               D", "                     MY                                                                 B", "                                                                                        Y"]
  const W = 113, H = ART.length, L = 'ATCG'
  let seed = 7
  const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647 }

  type Pt = { x: number; y: number; l: string; a: number; b: number; w: number; ph: number; tx: number; ty: number; pc?: string }
  const P: Pt[] = []
  for (let r = 0; r < H; r++) for (let c = 0; c < W; c++) {
    const ch0 = ART[r].charAt(c)
    if (ch0 && ch0 !== ' ') P.push({ x: c, y: r, l: L[Math.floor(rnd() * 4)], a: rnd(), b: rnd(), w: 2 + rnd() * 5, ph: rnd() * 6.28, tx: 0, ty: 0 })
  }
  const HOLD = 0, HT = 1.6, FL = 1.5, SPAN = 1.8, B0 = HOLD + FL + SPAN + HT, CYC = B0 + FL + SPAN
  const FD = 1.3, FS = 1.8, FT = 3.5
  let t0: number | null = null, last = 0, fs: number | null = null, raf = 0, visible = true
  P.sort((a, b) => a.x - b.x || a.y - b.y)
  for (let k = 0; k < P.length; k++) { P[k].tx = Math.floor(k * W / P.length); P[k].ty = Math.round(H / 2) }
  const PH = '-VECTOR OBSERVATORY-', s0 = Math.floor((W - PH.length) / 2), done: boolean[] = []
  for (let k = 0; k < P.length; k++) { const j = P[k].tx - s0; if (j >= 0 && j < PH.length && !done[j]) { P[k].pc = PH.charAt(j); done[j] = true } }
  const still = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches
  const ease = (s: number) => s * s * (3 - 2 * s)
  const cl = (s: number) => (s < 0 ? 0 : s > 1 ? 1 : s)

  function draw(now: number) {
    raf = 0
    if (!visible) return
    if (t0 === null && !still && fs !== null && (now - fs) / 1000 >= FT && now - last < 220) { raf = requestAnimationFrame(draw); return }
    last = now
    if (fs === null) fs = now
    const ft = still ? FT : (now - fs) / 1000, falling = ft < FT
    let t = still || t0 === null ? 0 : (now - t0) / 1000
    if (t >= CYC) { t0 = null; t = 0 }
    const shiver = !still && t0 === null && !falling, fwd = t >= HOLD && t < HOLD + FL + SPAN, bwd = t >= B0
    const g: string[] = new Array(W * H), ov: (number | string)[] = []
    for (const q of P) {
      let p = 0
      if (fwd) p = ease(cl((t - HOLD - (q.x / W) * SPAN - q.a * 0.3) / FL))
      else if (bwd) p = 1 - ease(cl((t - B0 - (1 - q.x / W) * SPAN - q.a * 0.3) / FL))
      else if (t >= HOLD + FL + SPAN) p = 1
      let x = Math.round(q.x + (q.tx - q.x) * p)
      let y = Math.round(q.y + (q.ty - q.y) * p + Math.sin(p * Math.PI) * q.w * Math.sin(p * 7 + q.ph))
      if (falling) { const sf = cl((ft - (1 - q.y / H) * FS - q.a * 0.4) / FD); y = Math.round(-10 - q.b * 10 + (q.y + 10 + q.b * 10) * sf * sf) }
      if (shiver && Math.random() < 0.015) { x += Math.floor(Math.random() * 3) - 1; y += Math.floor(Math.random() * 3) - 1 }
      if (x >= 0 && x < W && y >= 0 && y < H) { g[y * W + x] = q.l; if (q.pc && p === 1) ov.push(y * W + x, q.pc) }
    }
    for (let o = 0; o < ov.length; o += 2) g[ov[o] as number] = ov[o + 1] as string
    let s = ''
    for (let r = 0; r < H; r++) { for (let c = 0; c < W; c++) s += g[r * W + c] || ' '; s += '\n' }
    el.textContent = s
    if (!still) raf = requestAnimationFrame(draw)
  }

  // Size the letters to fill the container (monospace glyph is about 0.6 em wide).
  function size() {
    const w = root.clientWidth, h = root.clientHeight
    el.style.fontSize = Math.min((w * 0.98) / (W * 0.6), (h * 0.98) / H) + 'px'
  }
  const ro = new ResizeObserver(size)
  ro.observe(root)
  size()

  function hit(e: PointerEvent) {
    if (t0 !== null || still || fs === null || (performance.now() - fs) / 1000 < FT) return
    const b = el.getBoundingClientRect()
    const c = Math.floor((e.clientX - b.left) / b.width * W), r = Math.floor((e.clientY - b.top) / b.height * H)
    for (let dy = -1; dy <= 1; dy++) for (let dx = -2; dx <= 2; dx++) {
      const ch = (ART[r + dy] || '').charAt(c + dx)
      if (ch && ch !== ' ') { t0 = performance.now(); return }
    }
  }
  el.addEventListener('pointermove', hit)
  el.addEventListener('pointerdown', hit)

  // Pause when scrolled out of view.
  const io = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting
    if (visible && !raf) raf = requestAnimationFrame(draw)
  })
  io.observe(root)

  raf = requestAnimationFrame(draw)
  cleanup = () => {
    if (raf) cancelAnimationFrame(raf)
    ro.disconnect(); io.disconnect()
    el.removeEventListener('pointermove', hit)
    el.removeEventListener('pointerdown', hit)
  }
})

onBeforeUnmount(() => cleanup?.())
</script>

<template>
  <div ref="box" class="vo-mosquito">
    <pre
      ref="pre"
      role="img"
      aria-label="A mosquito made of the letters A, T, C and G that flows into the words Vector Observatory and back"
    ></pre>
  </div>
</template>

<style scoped>
.vo-mosquito {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.vo-mosquito pre {
  margin: 0;
  padding: 0;
  background: none;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 700;
  line-height: 1;
  white-space: pre;
  color: #12a89d;
  user-select: none;
}
:global(.dark) .vo-mosquito pre {
  color: #40e0d0;
}
</style>
