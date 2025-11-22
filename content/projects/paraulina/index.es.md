---
title: "Paraulina"
date: 2025-11-21
draft: false
summary: "Videojuego educativo ganador del premio 'Juego del Año' en los Premis Ludi 2025."
tags: ["Godot", "GDScript", "Educational", "Premis Ludi"]
weight:
---

**Paraulina** es un juego educativo diseñado para fomentar la comprensión oral y ortográfica del catalán en niños de **2º de primaria (6 a 8 años)**.

![](img_1.jpg)

El proyecto fue desarrollado por un equipo de 4 estudiantes: **Marta Jover Valero**, **Hugo Planell Moreno**, **Alba Silvente Izquierdo** y yo, para la 3ª edición de los **Premis Ludi**. Este certamen, impulsado por **3Cat**, cuenta con el apoyo de gigantes de la industria como **Larian Studios**, **Abylight Studios** y **Gameloft**. Tras competir contra más de 160 desarrolladores y 50 prototipos, Paraulina se alzó con el premio al **Juego del Año**, garantizando su producción profesional y publicación oficial.

![](img_2.jpg)

<iframe width="560" height="315" src="https://www.youtube.com/embed/_LMUdNbnZak" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

En el prototipo presentado desarrollamos el **primer nivel completo**: *"Animals que viuen a Catalunya"*. El jugador explora un entorno natural donde debe rescatar la fauna local, desde el *trencalòs* hasta el *escurçó*, mientras aprende sobre ella.

El diseño del juego prioriza la **accesibilidad** y la **escalabilidad**: utiliza formas redondeadas y cuenta con un **modo dislexia** el cual utiliza la fuente *OpenDyslexic* para asegurar la legibilidad. Además, la arquitectura del juego se diseñó modularmente para poder adaptar el contenido a **cualquier materia curricular** futura (Geografía, Reciclaje, Cuerpo Humano, etc.) sin cambiar el código base.

![](img_4.png)

![](img_5.png)

### Game Pillars

El ciclo de juego fusiona el aprendizaje curricular con la diversión de completar un álbum de cromos:

- **¡Escucha!** La narrativa es guiada por audio. Al comenzar, un dictado indica los nombres de los animales a encontrar, trabajando la comprensión auditiva.
- **¡Rompe!** Interactúa con el entorno haciendo "doble click" sobre objetos (nubes, piedras, plumas) para liberar las letras que esconden.
- **¡Forma!** Arrastra las letras para construir palabras. Implementamos un efecto de **magnetismo** y sonidos de **piezas de madera** para dar una sensación táctil y orgánica a la UI.
- **¡Colecciona y Gestiona!** Cada palabra correcta otorga una **enganxina** (pegatina) y **gomets**. Estas recompensas se almacenan en un **álbum interactivo**, donde los jugadores pueden ver sus progresos y gestionar sus colecciones.

![](img_6.png)

![](img_7.png)

### Tecnologías utilizadas

- **Godot 4**
- **GDScript**
- **Git**
- **Penpot**

### Explora el proyecto:

![](img_3.jpg)

Puedes encontrar más detalles sobre el desarrollo y el premio en los siguientes enlaces:

- [**Juega en Itch.io**](https://mdoradom.itch.io/paraulina): Prueba el prototipo ganador directamente en tu navegador o descarga la build.
- [**Repositorio del proyecto**](https://github.com/mdoradom/ludis_2025): Código fuente del prototipo presentado al concurso.
- [**Noticia oficial 3Cat**](https://www.3cat.cat/3catinfo/els-premis-ludi-impulsats-per-3cat-guardonen-quatre-prototips-de-videojoc-educatiu-per-a-infants/noticia/3379950/): Cobertura del evento y detalles sobre el premio "Juego del Año".
- [**Premis Ludi**](https://premisludi.cat/): Web oficial del certamen.
- [**Tráiler**](https://www.youtube.com/watch?v=_LMUdNbnZak): Video promocional del juego.
- [**GDD (Documentación)**](https://github.com/mdoradom/ludis_2025/blob/main/docs/Paraulina_Documentation.pdf): Documento de diseño detallando mecánicas, arte y escalabilidad.

**¡Gracias por explorar Paraulina!**