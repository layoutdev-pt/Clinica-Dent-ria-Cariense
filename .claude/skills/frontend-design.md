# Frontend Design Skill — Clínica Dentária Cariense

## Design System

### Typography
- **Display/Headings**: `font-['Fraunces',serif]` — elegant, trustworthy serif
- **Body**: `Plus Jakarta Sans` — clean, modern sans-serif
- **Scale**: text-xs (12px) → text-7xl (72px)

### Colors
```
Brand Blue:  #1C9FD6  (primary CTA, highlights, links)
Navy:        #0D1E2C  (headings, hero bg, footer)
Light Blue:  #E8F6FC  (icon backgrounds, subtle tints)
Border:      #D5E4EE  (card borders, dividers)
Muted:       #5E7387  (body text, labels)
Dark text:   #2A3A4A  (secondary text)
```

### Component Patterns
- **Cards**: `rounded-[20px]` border `border-[#D5E4EE]` with hover shadow lift
- **Buttons CTA**: `rounded-full` bg-brand with shadow glow
- **Section tags**: Inline flex with brand blue line + uppercase tracking text
- **Badges**: Rounded-full bg-[#E8F6FC] text-brand

### Animation
- Scroll reveal: `.anim-fade-up` → `.visible` via IntersectionObserver
- Counter: cubic ease-out over 1800ms via requestAnimationFrame
- FAQ: `max-height` CSS transition 0.4s cubic-bezier
- Marquee: CSS `animation: marquee 32s linear infinite`

### Layout Rules
- Max content width: `max-w-7xl mx-auto px-6`
- Section padding: `py-24`
- Hero: full viewport height `h-screen`
- Navbar: fixed `h-[72px]` backdrop-blur
- Main content offset: `pt-[72px]`

### Image Usage
- Always use `next/image` with `fill` + `sizes` prop for responsive images
- Team photos: `aspect-[3/4]` portrait ratio
- Clinic photos: `aspect-[4/3]` landscape ratio
- Hero: full-bleed video background with dark gradient overlay
