/** Linen drapes that gather to the sides during the hero intro. */
export function Curtains() {
  return (
    <>
      <div data-curtain="l" className="curtain absolute inset-y-0 left-0 w-1/2 origin-left" />
      <div data-curtain="r" className="curtain absolute inset-y-0 right-0 w-1/2 origin-right" />
    </>
  );
}

/** A band of afternoon sun drifting across the room. */
export function Sunbeam() {
  return (
    <div
      data-sunbeam
      className="pointer-events-none absolute inset-y-[-20%] left-0 w-1/3 bg-gradient-to-r from-transparent via-[#fddfa9]/15 to-transparent mix-blend-screen blur-2xl"
    />
  );
}

const bp = { pathLength: 1, strokeDasharray: 1, strokeDashoffset: 1, fill: "none", stroke: "#dfc390", strokeWidth: 1.2 };

/** Architect's floor plan (The Earth House) drafted before the drapes open. */
export function Blueprint() {
  return (
    <div
      data-bp-wrap
      className="pointer-events-none absolute top-24 right-5 w-[78vw] max-w-[620px] opacity-70 md:top-32 md:right-8 lg:top-[24%] lg:right-margin lg:w-[42vw] lg:opacity-100"
    >
      <svg viewBox="0 0 520 380" className="h-auto w-full" aria-hidden="true">
        {/* exterior walls */}
        <path data-bp {...bp} strokeWidth={2} d="M20 40 H500 V320 H20 Z" />
        {/* interior partitions */}
        <path data-bp {...bp} d="M220 40 V170 M220 230 V320" />
        <path data-bp {...bp} d="M20 200 H150" />
        <path data-bp {...bp} d="M360 40 V130 M360 190 V250" />
        {/* door swing */}
        <path data-bp {...bp} d="M220 230 L220 180 A50 50 0 0 1 270 230" />
        <path data-bp {...bp} d="M360 190 L405 190 A45 45 0 0 0 360 145" />
        {/* glazing to the courtyard */}
        <path data-bp {...bp} d="M70 36 H170 M70 44 H170 M390 316 H480 M390 324 H480" />
        {/* reflecting pond */}
        <path data-bp {...bp} d="M60 250 H180 V300 H60 Z" />
        {/* curved sofa + round table */}
        <path data-bp {...bp} d="M395 275 Q440 225 490 255" />
        <path data-bp {...bp} d="M290 110 m-26 0 a26 26 0 1 0 52 0 a26 26 0 1 0 -52 0" />
        {/* dimension line */}
        <path data-bp {...bp} d="M20 345 H500 M20 338 V352 M500 338 V352" />
        <path data-bp {...bp} d="M512 40 V320 M505 40 H519 M505 320 H519" />
        <text
          data-bp-text
          data-anim-hide
          x="260"
          y="370"
          textAnchor="middle"
          fill="#dfc390"
          fontSize="10"
          letterSpacing="3"
          fontFamily="var(--font-manrope)"
        >
          PLAN 084 — 4,200 SQ.FT — GROUND LEVEL
        </text>
        <text data-bp-text data-anim-hide x="120" y="280" textAnchor="middle" fill="#dfc390" fontSize="8" letterSpacing="2">
          POND
        </text>
        <text data-bp-text data-anim-hide x="120" y="120" textAnchor="middle" fill="#dfc390" fontSize="8" letterSpacing="2">
          LIVING SALON
        </text>
      </svg>
    </div>
  );
}
