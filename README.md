# Blog Elicupra - Astro + GitHub Pages

Blog personal estático sin CMS. Tema oscuro/claro, comentarios con Giscus (configurable por artículo), hospedaje gratuito en GitHub Pages.

## Características

✅ Sitio estático (sin backend)  
✅ Tema oscuro/claro con toggle  
✅ Comentarios con Giscus (on/off por artículo)  
✅ Deploy automático a GitHub Pages  
✅ Markdown para escribir artículos  
✅ Tags y metadatos  
✅ Costo: $0  

---

## Instalación Rápida

### 1. Clonar o descargar este repositorio

```bash
git clone https://github.com/elicupra/elicupra.github.io.git
cd elicupra.github.io
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Desarrollo local

```bash
npm run dev
```

Abre `http://localhost:3000` en tu navegador.

### 4. Construir para producción

```bash
npm run build
```

Genera la carpeta `dist/` lista para desplegar.

---

## Cómo Agregar un Artículo

### Paso 1: Crear archivo Markdown

Crea un nuevo archivo en `src/content/blog/`:

```
src/content/blog/mi-nuevo-articulo.md
```

### Paso 2: Escribir el frontmatter (metadatos)

```markdown
---
title: "Título del artículo"
description: "Descripción corta para la vista previa"
pubDate: 2024-03-25
updatedDate: 2024-03-26  # Opcional
author: "Tu nombre"
tags: ["tag1", "tag2", "tag3"]
comments: true           # true = comentarios habilitados, false = sin comentarios
draft: false            # true = no se publica, false = publicado
---
```

### Paso 3: Escribir contenido en Markdown

```markdown
## Tu contenido aquí

Puedes usar:

- **Bold**: `**texto**`
- *Itálica*: `*texto*`
- [Links](https://ejemplo.com)
- Código inline: `` `código` ``

### Bloques de código

```python
def hola():
    return "Mundo"
```

### Tablas

| Encabezado 1 | Encabezado 2 |
|--------------|--------------|
| Dato A       | Dato B       |

### Imágenes

![Alt text](/ruta/imagen.png)

### Citas

> "Esto es una cita"

```

### Paso 4: Guardar y hacer push

```bash
git add src/content/blog/mi-nuevo-articulo.md
git commit -m "Nuevo artículo: Mi nuevo artículo"
git push origin main
```

El blog se actualiza automáticamente en ~1 minuto.

---

## Configurar Giscus (Comentarios)

### 1. Habilitar Discussions en GitHub

1. Ve a tu repo: `https://github.com/elicupra/elicupra.github.io`
2. Settings → Features
3. Marca la casilla de "Discussions"

### 2. Instalar app Giscus

1. Abre: https://github.com/apps/giscus
2. Click en "Install"
3. Selecciona tu repo `elicupra.github.io`
4. Autoriza

### 3. Obtener IDs de Giscus

1. Ve a https://giscus.app
2. Rellena:
   - **Repository:** `elicupra/elicupra.github.io`
   - **Page → Discussion mapping:** `og:title` (recomendado)
   - **Discussion category:** `Blog Comments` (créala si no existe)
   - **Theme:** `dark_dimmed`
   - **Language:** `es` (español)
3. Copia los valores de:
   - `data-repo-id`
   - `data-category-id`

### 4. Actualizar archivo Giscus

Abre `src/components/Giscus.tsx` y reemplaza:

```javascript
script.setAttribute('data-repo-id', 'AQUI_TU_REPO_ID');
script.setAttribute('data-category-id', 'AQUI_TU_CATEGORY_ID');
```

### 5. Listo

Ahora, cualquier artículo con `comments: true` tendrá comentarios.

---

## Estructura del Proyecto

```
elicupra.github.io/
├── src/
│   ├── components/
│   │   └── Giscus.tsx          ← Widget de comentarios
│   ├── content/
│   │   └── blog/               ← Tus artículos aquí
│   │       ├── primer-articulo.md
│   │       └── software-recomendado.md
│   ├── layouts/
│   │   └── BlogLayout.astro    ← Plantilla de artículos
│   ├── pages/
│   │   ├── index.astro         ← Página principal
│   │   └── blog/
│   │       └── [slug].astro    ← Página dinámica de artículos
│   ├── styles/
│   │   └── blog.css            ← Estilos
│   └── content/
│       └── config.ts           ← Configuración de colecciones
├── .github/
│   └── workflows/
│       └── deploy.yml          ← CI/CD automático
├── astro.config.mjs
├── package.json
├── .gitignore
└── README.md
```

---

## Personalización

### Cambiar colores

Abre `src/styles/blog.css` y modifica:

```css
:root {
  --color-bg: #ffffff;
  --color-text: #1a1a1a;
  --color-accent: #2563eb;  /* Azul principal */
}

html.dark {
  --color-bg: #0f172a;
  --color-text: #f1f5f9;
  --color-accent: #60a5fa;
}
```

### Cambiar fuentes

En `BlogLayout.astro` y `src/pages/index.astro`:

```css
font-family: 'Tu fuente aquí', sans-serif;
```

### Agregar secciones (Proyectos, Portfolio, etc.)

1. Crea una colección en `src/content/config.ts`
2. Añade carpeta `src/content/proyectos/`
3. Crea layout específico
4. Genera páginas dinámicas

---

## Deploy a GitHub Pages

### Automático (Recomendado)

1. Haz push a `main`
2. GitHub Actions ejecuta el workflow
3. Blog se publica automáticamente en ~1 minuto
4. Accede en: `https://elicupra.github.io`

### Manual

```bash
npm run build
git add dist/
git commit -m "Deploy update"
git push origin main
```

---

## Troubleshooting

### "Comentarios no cargan"

- ¿Habilistaste Discussions en Settings?
- ¿Instalaste la app Giscus?
- ¿Copiaste los IDs correctamente?

Test: Abre el artículo en navegador anónimo, abre DevTools (F12) → Console, ¿hay errores?

### "Blog no se actualiza tras push"

- Ve a: Repo → Actions
- ¿El workflow pasó? (debe haber un ✅ verde)
- Si no, abre el workflow fallido para ver el error

### "El tema dark/light no funciona"

Abre DevTools (F12) → Application → Local Storage → busca `theme`. ¿Está presente?

---

## Próximos Pasos

- [ ] Personalizar colores y tipografía
- [ ] Crear artículos propios
- [ ] Configurar Giscus completamente
- [ ] Agregar favicon personalizado (`public/favicon.svg`)
- [ ] Crear página "Sobre mí"
- [ ] Agregar sección de proyectos
- [ ] Setup de dominio personalizado (futuro)

---

## Licencia

Este código es libre para usar, modificar y distribuir.

---

## Preguntas o Issues?

Abre un issue en GitHub o revisa la documentación de Astro: https://docs.astro.build
