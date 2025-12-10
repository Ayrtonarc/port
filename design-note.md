# Mockup: Rediseño de la página Home

Objetivo: Landing minimalista con hero full-bleed, highlights, grid de proyectos y CTA clara.

Estructura propuesta:

- Hero (full-bleed)
  - Imagen de fondo tenue + overlay
  - Título grande: "Ayrton — Ingeniería & Productos"
  - Subtítulo: una frase corta que describa enfoque
  - CTA primaria: "Contactar" (link a `#/contact`)
  - CTA secundaria: "Ver proyectos" (scroll a sección proyectos)

- Highlights (3 items)
  - Icono, título corto, 1 línea descriptiva
  - Ej: "ML & Visión", "Back-end", "Consultoría"

- Projects preview
  - Grid responsivo (3/2/1 columnas)
  - Tarjetas limpias (`ProjectCard`)

- CTA final pequeño + Footer simplificado

Tokens y estilos rápidos:
- Paleta: blanco/negro y grises. Overlay: rgba(0,0,0,0.36).
- Tipografías: Inter + Playfair Display (ya en el proyecto).
- Espaciado: hero vertical grande (96-120px desktop), 48px mobile.

Checkpoints:
1. Revisión mockup (este archivo) — aprobado por el autor.
2. Revisión en localhost tras implementar hero.
3. Verificar responsive en 320/768/1200 px.
4. Tests y build deben pasar.

Notas:
- Si la imagen de hero es pesada, optimizar a webp y usar `loading="lazy"` donde aplique.
- Mantener accesibilidad: foco visible, alt en imágenes, elementos interactivos con aria-label cuando haga falta.
