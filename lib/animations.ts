"use client";

import { gsap, ScrollTrigger, SplitText } from "./gsap";

/**
 * Data-attribute driven animation system, themed on interior architecture:
 *
 *  data-hero            intro: blueprint plan draws → drapes open → room settles → type rises
 *  data-panel="up|left|right|center"
 *                       image revealed like a sliding wall panel / pocket door
 *  data-tiles           children laid down like stone tiles (3D rotate from the top edge)
 *  data-split           heading words rise from behind a masked "reveal" line
 *  data-reveal          quiet fade-up
 *  data-reveal-stagger  children fade-up in sequence
 *  data-rule            hairline drawn left→right like a ruler stroke
 *  data-draw-x / -y     drafting line scrubbed with scroll
 *  data-sweep           band of daylight passing across an image
 *  data-lights          room "switches on": image brightens, pendant glow flickers to life
 *  data-words           words brighten as you read (scrubbed)
 *  data-parallax="n"    depth parallax by n %
 */
export function initAnimations(root: HTMLElement) {
  const mm = gsap.matchMedia();

  mm.add(
    { motion: "(prefers-reduced-motion: no-preference)", reduce: "(prefers-reduced-motion: reduce)" },
    (ctx) => {
      const q = <T extends Element = HTMLElement>(sel: string) => Array.from(root.querySelectorAll<T & HTMLElement>(sel));

      if (ctx.conditions?.reduce) {
        gsap.set(q("[data-anim-hide]"), { autoAlpha: 1 });
        gsap.set(q("[data-curtain]"), { autoAlpha: 0 });
        gsap.set(q("[data-bp]"), { strokeDashoffset: 0 });
        gsap.set(q("[data-bp-wrap]"), { opacity: 0.3 });
        return;
      }

      q("[data-hero]").forEach(heroIntro);

      q("[data-split]").forEach((el) => {
        const split = SplitText.create(el, { type: "words", mask: "words" });
        gsap.from(split.words, {
          yPercent: 110,
          duration: 1.1,
          stagger: 0.06,
          ease: "power4.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });

      q("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          autoAlpha: 0,
          y: 32,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        });
      });

      q("[data-reveal-stagger]").forEach((el) => {
        gsap.from(el.children, {
          autoAlpha: 0,
          y: 48,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });

      q("[data-panel]").forEach((el) => {
        const from = {
          up: "inset(100% 0% 0% 0%)",
          left: "inset(0% 100% 0% 0%)",
          right: "inset(0% 0% 0% 100%)",
          center: "inset(0% 50% 0% 50%)",
        }[el.dataset.panel || "up"] ?? "inset(100% 0% 0% 0%)";
        const img = el.querySelector("img");
        const tl = gsap.timeline({
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
          onComplete: () => {
            gsap.set(el, { clearProps: "clipPath" });
            if (img) gsap.set(img, { clearProps: "transform,transition" });
          },
        });
        tl.fromTo(el, { clipPath: from }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "expo.inOut" });
        if (img) {
          gsap.set(img, { transition: "none" });
          tl.fromTo(img, { scale: 1.3 }, { scale: 1, duration: 1.8, ease: "expo.out" }, 0.15);
        }
      });

      q("[data-tiles]").forEach((el) => {
        gsap.from(el.children, {
          rotateX: -75,
          y: 60,
          autoAlpha: 0,
          transformOrigin: "50% 0%",
          transformPerspective: 1000,
          duration: 1.3,
          stagger: 0.14,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: { trigger: el, start: "top 82%", once: true },
        });
      });

      q("[data-rule]").forEach((el) => {
        gsap.from(el, {
          scaleX: 0,
          transformOrigin: "0% 50%",
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        });
      });

      q("[data-draw-x]").forEach((el) => {
        gsap.fromTo(
          el,
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: "0% 50%",
            ease: "none",
            scrollTrigger: { trigger: el.closest("section") ?? el, start: "top 70%", end: "center 45%", scrub: 0.6 },
          },
        );
      });

      q("[data-draw-y]").forEach((el) => {
        gsap.fromTo(
          el,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "50% 0%",
            ease: "none",
            scrollTrigger: { trigger: el.parentElement ?? el, start: "top 75%", end: "bottom 55%", scrub: 0.6 },
          },
        );
      });

      q("[data-sweep]").forEach((el) => {
        gsap.fromTo(
          el,
          { xPercent: -150, skewX: -12 },
          {
            xPercent: 400,
            duration: 2.6,
            delay: 0.8,
            ease: "power2.inOut",
            scrollTrigger: { trigger: el.parentElement ?? el, start: "top 75%", once: true },
          },
        );
      });

      q("[data-lights]").forEach((el) => {
        const img = el.querySelector("[data-lights-img]");
        const glow = el.querySelector("[data-lights-glow]");
        if (img) {
          gsap.fromTo(
            img,
            { filter: "brightness(0.25) saturate(0.4)" },
            {
              filter: "brightness(1) saturate(1)",
              ease: "none",
              scrollTrigger: { trigger: el, start: "top 85%", end: "center 55%", scrub: true },
            },
          );
          gsap.fromTo(
            img,
            { yPercent: -5 },
            { yPercent: 5, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } },
          );
        }
        if (glow) {
          // a pendant lamp flickering on, then breathing softly
          gsap
            .timeline({ scrollTrigger: { trigger: el, start: "top 55%", once: true } })
            .set(glow, { opacity: 0 })
            .to(glow, { opacity: 0.9, duration: 0.05 })
            .to(glow, { opacity: 0.1, duration: 0.08 })
            .to(glow, { opacity: 0.75, duration: 0.05 })
            .to(glow, { opacity: 0.2, duration: 0.12 })
            .to(glow, { opacity: 1, duration: 1.2, ease: "power2.out" })
            .to(glow, { opacity: 0.75, duration: 2.8, repeat: -1, yoyo: true, ease: "sine.inOut" });
        }
      });

      q("[data-words]").forEach((el) => {
        const split = SplitText.create(el, { type: "words" });
        gsap.fromTo(
          split.words,
          { opacity: 0.12 },
          {
            opacity: 1,
            stagger: 0.1,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 50%", scrub: true },
          },
        );
      });

      q("[data-parallax]").forEach((el) => {
        const amount = Number(el.dataset.parallax) || 8;
        gsap.fromTo(
          el,
          { yPercent: -amount },
          {
            yPercent: amount,
            ease: "none",
            scrollTrigger: { trigger: el.parentElement ?? el, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });

      document.fonts?.ready.then(() => ScrollTrigger.refresh());
    },
  );

  return () => mm.revert();
}

function heroIntro(hero: HTMLElement) {
  const $ = (sel: string) => Array.from(hero.querySelectorAll<HTMLElement>(sel));
  const blueprint = $("[data-bp]");
  const openAt = blueprint.length ? 1.2 : 0.15;
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // 1. The architect's plan is drafted over the closed drapes
  if (blueprint.length) {
    tl.to(blueprint, { strokeDashoffset: 0, duration: 1.4, stagger: 0.05, ease: "power2.inOut" }, 0.15);
    tl.to($("[data-bp-text]"), { autoAlpha: 1, duration: 0.6, stagger: 0.1 }, 0.9);
  }

  // 2. Drapes gather to the sides, revealing the room
  tl.to($('[data-curtain="l"]'), { scaleX: 0.08, duration: 1.7, ease: "power3.inOut" }, openAt)
    .to($('[data-curtain="r"]'), { scaleX: 0.08, duration: 1.7, ease: "power3.inOut" }, openAt)
    .to($("[data-curtain]"), { autoAlpha: 0, duration: 0.8, ease: "power1.out" }, openAt + 1.3);

  // 3. The room settles into focus as daylight comes up
  tl.fromTo(
    $("[data-hero-img]"),
    { scale: 1.35, filter: "brightness(0.6)" },
    { scale: 1.05, filter: "brightness(1)", duration: 2.8, ease: "power2.out" },
    openAt,
  );

  // 4. Drafting hairlines, then type rises line by line
  tl.from($("[data-hero-line]"), { scaleX: 0, transformOrigin: "0% 50%", duration: 1.2, stagger: 0.15, ease: "power3.inOut" }, openAt + 0.3);

  $("[data-hero-split]").forEach((h) => {
    gsap.set(h, { autoAlpha: 1 });
    const split = SplitText.create(h, { type: "words", mask: "words" });
    tl.from(split.words, { yPercent: 115, duration: 1.2, stagger: 0.08, ease: "power4.out" }, openAt + 0.5);
  });

  tl.fromTo($("[data-hero-item]"), { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.1 }, openAt + 0.9);

  // the blueprint recedes into a faint watermark
  if (blueprint.length) tl.to($("[data-bp-wrap]"), { opacity: 0.3, duration: 1.4, ease: "power1.inOut" }, openAt + 1.4);

  // 5. Afternoon sun drifting through sheer linen
  $("[data-sunbeam]").forEach((beam) => {
    gsap.fromTo(
      beam,
      { xPercent: -120, skewX: -18 },
      { xPercent: 320, duration: 11, ease: "sine.inOut", repeat: -1, repeatDelay: 1.5, delay: openAt + 1 },
    );
  });

  // 6. Scroll: depth parallax on the room, copy drifts away
  const trigger = { trigger: hero, start: "top top", end: "bottom top", scrub: true };
  gsap.to($("[data-hero-img]"), { yPercent: 12, ease: "none", scrollTrigger: trigger });
  gsap.to($("[data-hero-content]"), { y: -80, opacity: 0.15, ease: "none", scrollTrigger: trigger });
}
