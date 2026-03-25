---
title: "Mi primer artículo: Setup de Hardware Custom"
description: "Guía paso a paso para montar tu propio PC gamer desde cero, eligiendo componentes y evitando errores comunes."
pubDate: 2024-03-25
author: "Elicupra"
tags: ["hardware", "tutorial", "pc-gamer"]
comments: true
---

## Introducción

Montar tu propio PC puede parecer complicado, pero con la guía correcta es más fácil de lo que piensas. En este artículo te muestro cómo elegir componentes y ensamblarlos correctamente.

## 1. Elegir el Procesador (CPU)

El procesador es el cerebro de tu PC. Las opciones principales son:

- **Intel Core i7/i9** - Excelentes para gaming y trabajo
- **AMD Ryzen 7/9** - Buena relación precio-rendimiento

Para un PC gamer de 2024, recomiendo:
- **Presupuesto medio:** Intel i5-13600K o Ryzen 5 5600X
- **Presupuesto alto:** Intel i7-13700K o Ryzen 7 5800X3D

## 2. Motherboard Compatibles

Asegúrate de que sea compatible con tu CPU:

| CPU | Socket |
|-----|--------|
| Intel 13ª gen | LGA 1700 |
| AMD Ryzen 5000 | AM4 |

## 3. Memoria RAM

Recomendaciones actuales (2024):

- **Gaming estándar:** 16GB DDR4/DDR5
- **Creación de contenido:** 32GB
- **Velocidad recomendada:** 3200MHz (DDR4) o 5600MHz (DDR5)

## 4. Almacenamiento

```
NVMe SSD (SO)     → 1TB Samsung 980 Pro
SATA SSD (Datos)  → 1TB Crucial MX500
HDD (Backup)      → 2TB WD Blue
```

## 5. Tarjeta Gráfica (GPU)

Para gaming 1440p:
- **RTX 4070 Super** - Nvidia
- **RX 7700 XT** - AMD

> **Nota:** Los precios fluctúan. Revisa [TechPowerUp](https://www.techpowerup.com) para precios actuales.

## 6. Fuente de Poder (PSU)

Regla: Multiplica los watts totales × 1.3 para margen de seguridad.

**Recomendación:** Seasonic Gold 850W (modular, silenciosa)

## 7. Carcasa y Refrigeración

### Carcasa recomendada:
- NZXT H510 Flow
- Corsair 5000T RGB

### Refrigeración CPU:
- **Aire:** Noctua NH-D15 (excelente rendimiento)
- **Líquido:** NZXT Kraken X63 (estética)

## Proceso de Montaje

1. Instala el cooler de CPU en la placa base (antes de insertar en la carcasa)
2. Coloca la RAM en los slots DIMM
3. Inserta el SSD NVMe en el slot M.2
4. Atornilla la placa en los puntos de fijación
5. Conecta cables SATA a HDDs/SSDs
6. Conecta el conector de 24 pines y 8 pines CPU a la placa
7. Enciende la PSU y presiona el botón power

## Primeros Pasos tras Encender

```bash
# 1. BIOS → F12 al encender
# 2. Verifica que detecte la RAM correctamente
# 3. Instala Windows desde USB
# 4. Drivers de chipset y GPU
# 5. BIOS update si es necesario
```

## Troubleshooting Común

**El PC no enciende:**
- ¿La PSU está en ON?
- ¿El 24-pin está bien conectado?

**Pantalla en negro:**
- Resetea CMOS (batería de BIOS 30 segundos)
- GPU bien asegurada en PCIe

**Windows no instala:**
- Descarga ISO en otra máquina
- USB en modo UEFI

---

## Conclusión

Montar tu propio PC te da control total sobre cada componente y generalmente ahorras dinero. ¿Dudas? ¡Pregunta en los comentarios!

---

**¿Tienes preguntas sobre esta guía? Los comentarios están abiertos abajo.** 👇
