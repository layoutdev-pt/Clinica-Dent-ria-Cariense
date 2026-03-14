# Component Reference — Clínica Dentária Cariense

## Server Components (no "use client")
- `SectionTag` — section label with blue line
- `CtaBanner` — dark CTA section with radial gradient
- `TeamCard` — team member card with hover overlay
- `Footer` — 4-column dark footer

## Client Components ("use client" required)
- `Navbar` — fixed nav with scroll shadow, mobile drawer
- `ContactForm` — appointment form with success state
- `TestimonialsSlider` — touch-swipeable testimonial cards
- `FaqAccordion` — animated expand/collapse FAQ
- `Counter` — IntersectionObserver animated number count-up
- `ScrollReveal` — fade-up on scroll wrapper
- `LocationSwitcher` — tabbed clinic selector with iframe map

## Adding new sections
1. Keep pages as Server Components
2. Extract any interactivity into a separate `"use client"` component
3. Import the client component into the page
4. Use `ScrollReveal` wrapper for entrance animations with staggered `delay` props

## Image component pattern
```tsx
<div className="relative h-72 rounded-[20px] overflow-hidden">
  <Image
    src="/img/filename.jpg"
    alt="Description"
    fill
    sizes="(max-width:768px) 100vw, 50vw"
    className="object-cover"
  />
</div>
```
