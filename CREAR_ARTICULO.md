# Guía: Crear Tu Primer Artículo

## Opción 1: Template rápido (Copiar-Pegar)

### 1. Crea el archivo

```bash
# Desde la carpeta del proyecto
touch src/content/blog/mi-articulo-aqui.md
```

### 2. Copia este template

```markdown
---
title: "Título de tu artículo"
description: "Resumen breve que aparecerá en la lista del blog (100-150 caracteres)"
pubDate: 2024-03-25
author: "Tu nombre"
tags: ["tag1", "tag2"]
comments: true
draft: false
---

## Primera sección

Aquí va tu contenido. Puedes usar **bold**, *itálica*, `código inline`, etc.

### Subsección

Más contenido aquí.

## Segunda sección

Lista de puntos:

- Punto 1
- Punto 2
- Punto 3

## Código

```python
def ejemplo():
    return "Python"
```

## Tabla

| Columna 1 | Columna 2 |
|-----------|-----------|
| Dato A    | Dato B    |

## Conclusión

Tu conclusión aquí.
```

### 3. Guarda y haz push

```bash
git add src/content/blog/mi-articulo-aqui.md
git commit -m "Nuevo artículo: Título de tu artículo"
git push origin main
```

**¡Listo!** Aparecerá en tu blog en ~1 minuto.

---

## Opción 2: Creación avanzada

### Frontmatter completo (todos los campos)

```markdown
---
# REQUERIDO
title: "Tu título aquí"
description: "Resumen para lista de artículos"
pubDate: 2024-03-25

# OPCIONAL (pero recomendado)
updatedDate: 2024-03-26
author: "Tu nombre"
tags: ["tag1", "tag2", "tag3"]
image:
  url: "/images/thumbnail.jpg"
  alt: "Descripción para accesibilidad"

# CONFIGURACIÓN DE COMENTARIOS
comments: true    # true o false

# ESTADO DE PUBLICACIÓN
draft: false      # true = borrador (no aparece), false = publicado
---
```

### Elementos Markdown soportados

#### Encabezados

```markdown
# H1 (no usar, está reservado para título)
## H2 - Sección principal
### H3 - Subsección
#### H4 - Subsubsección
```

#### Formato de texto

```markdown
**Bold/Negrita**
*Itálica*
~~Tachado~~
`Código inline`
```

#### Links

```markdown
[Texto del link](https://ejemplo.com)
[Link con título](https://ejemplo.com "Título al pasar hover")
```

#### Imágenes

```markdown
![Alt text para accesibilidad](/ruta/imagen.png)
![Con título](imagen.png "Título")
```

#### Listas

```markdown
- Viñeta
- Viñeta
  - Viñeta anidada
  - Otra anidada

1. Numerada
2. Numerada
   1. Subnumerada
```

#### Citas

```markdown
> "Cita de alguien"
> Línea 2 de la cita
```

#### Bloques de código

```markdown
​```python
def hola(nombre):
    print(f"Hola {nombre}")
​```

​```javascript
const x = 42;
console.log(x);
​```

​```bash
# Comando
npm install
​```
```

#### Separadores

```markdown
---
```

#### Tablas

```markdown
| Encabezado 1 | Encabezado 2 | Encabezado 3 |
|--------------|--------------|--------------|
| Dato A1      | Dato A2      | Dato A3      |
| Dato B1      | Dato B2      | Dato B3      |
```

---

## Convenciones recomendadas

### Nombres de archivo

```
✅ mi-primer-articulo.md
✅ setup-pc-gamer.md
✅ review-gpu-2024.md

❌ Mi Primer Artículo.md (mayúsculas y espacios)
❌ articulo (sin extensión)
❌ articulo_guiones (usa guiones, no guiones bajos)
```

### Fechas

Usa formato ISO: `YYYY-MM-DD`

```
✅ 2024-03-25
❌ 25-03-2024
❌ March 25, 2024
```

### Tags

Minúsculas, máximo 5 por artículo:

```yaml
tags: ["hardware", "tutorial", "diy"]
```

### Longitud de descripción

150-180 caracteres máximo. Se corta en la lista:

```
❌ "Esto es una descripción muy larga que toma demasiado espacio en la lista del blog y probablemente será cortada por el navegador cuando alguien intente leerla en pantallas pequeñas"

✅ "Guía paso a paso para montar tu PC gamer desde cero, eligiendo componentes y evitando errores comunes"
```

---

## Ejemplo Completo

```markdown
---
title: "Instalación de Ubuntu 24.04 en Raspberry Pi 5"
description: "Guía paso a paso para instalar Ubuntu Server en tu Raspberry Pi con WiFi y SSH preconfigurados"
pubDate: 2024-03-25
author: "Elicupra"
tags: ["raspberrypi", "linux", "tutorial"]
comments: true
draft: false
---

## Requisitos

- Raspberry Pi 5
- Tarjeta microSD (mínimo 32GB)
- Lector de tarjeta SD
- Ordenador con Ubuntu/macOS/Windows

## Paso 1: Descargar imagen

Descarga desde: https://ubuntu.com/download/raspberry-pi

**Versión recomendada:** Ubuntu Server 24.04 LTS (ARM64)

## Paso 2: Escribir en tarjeta

### Opción A: Linux/macOS

```bash
# Identifica tu tarjeta
lsblk

# Descomprime la imagen
xz -d ubuntu-24.04-preinstalled-server-arm64+raspi.img.xz

# Escribe en tarjeta
sudo dd if=ubuntu-24.04-preinstalled-server-arm64+raspi.img of=/dev/sdX bs=4M status=progress
sudo sync
```

### Opción B: GUI (Balena Etcher)

1. Descarga: https://www.balena.io/etcher
2. Selecciona imagen
3. Selecciona tarjeta
4. Flash

## Paso 3: Primer boot

1. Inserta tarjeta en Pi
2. Conecta ethernet (o WiFi si está preconfigurado)
3. Espera 2 minutos
4. SSH: `ssh ubuntu@raspberrypi.local`
5. Password inicial: `ubuntu` → te pedirá cambiar

## Conclusión

¡Tu Pi está lista para desarrollo!

---

**¿Dudas? Pregunta en los comentarios abajo.** 👇
```

---

## Checklsit antes de publicar

- [ ] Título claro y descriptivo
- [ ] Descripción de 150-180 caracteres
- [ ] Fecha en formato `YYYY-MM-DD`
- [ ] Mínimo 2 tags relevantes
- [ ] Contenido formateado en Markdown
- [ ] Enlaces funcionan
- [ ] Código syntax highlighting correcto
- [ ] Tablas alineadas
- [ ] `comments: true` o `false` definido
- [ ] `draft: false` para publicar
- [ ] Revisar ortografía

---

## Comandos útiles

```bash
# Ver cambios antes de publicar
git diff src/content/blog/

# Ver estado
git status

# Ver blogs publicados
ls -la src/content/blog/

# Previo local
npm run dev
# Abre http://localhost:3000
```

---

**¿Necesitas ayuda?** Revisa los artículos de ejemplo en `src/content/blog/`
