---
title: "Coffee Engine"
date: 2025-02-04
draft: false
summary: "Un motor de joc fet des de zero escrit en C++ i OpenGL"
tags: ["C++", "OpenGL", "Game Engine"]
weight:
---

**Coffee Engine** és un petit motor de joc fet des de zero per **Hugo Planell Moreno** i **jo mateix** com a projecte personal i acadèmic, amb l'objectiu d'aprendre més en profunditat sobre com funcionen els motors de joc.

Aquest projecte va començar com un experiment d'estiu i més tard es va convertir en la base per al curs de *Motor de Joc* del **tercer any** del **Grau en Disseny i Desenvolupament de Videojocs del CITM**. El projecte va rebre una *Matrícula d'Honor*, aconseguint una puntuació perfecta (10/10).

També va ser seleccionat com el **motor oficial** perquè tota la classe desenvolupés un joc amb **40 estudiants** com a part de l'assignatura *Projecte 3*. El joc està actualment en desenvolupament, i un cop es publiqui a finals del **Q2-2025**, actualitzaré aquesta entrada amb més informació.

El projecte és **multiplataforma**, provat en **Windows i Linux**. El suport per a macOS és possible, però com que no tenim dispositius Apple, no s'ha provat.

![](img_1.png)

![](img_2.png)

## Característiques

- **Multiplataforma** (Windows, Linux, macOS)
- **Editor Personalitzat** amb Scene Tree, Gizmos, Navegador de Contingut, panell de Sortida i altres elements d'interfície.
- **Sistema de Renderització basat en PBR** amb il·luminació, materials, shaders i frustum culling
- **Entity Component System** amb sistema d'esdeveniments i suport per a serialització
- **Importació de Models 3D i Gestió de Recursos** (Assimp, sistema de registre, monitor de recursos)
- **mouse Picking i Optimització basada en Octree**
- **Play & Stop Modes** per provar projectes
- **Sistema d'Esdeveniments**
- **Sistema de scripting modular:** Actualment suporta Lua, amb la flexibilitat d'integrar llenguatges de scripting addicionals segons sigui necessari.
- **Sistema de Guardat/Càrrega de Projectes**
- **Documentació Extensa** (Doxygen)
- **... i més!**

## Tecnologies Utilitzades

- **C++**
- **OpenGL**
- **Assimp**
- **EnTT**
- **GLM**
- **ImGuizmo**
- **NativeFileDialog-Extended**
- **Sol2**
- **Tracy**
- **Cereal**
- **FMT**
- **ImGui**
- **Lua**
- **SDL3**
- **SPDLOG**

## **Explora el Projecte**

Pots trobar més informació sobre el projecte en diverses plataformes:

- [**Repositori de GitHub**](https://github.com/Brewing-Team/Coffee-Engine): Visualitza el codi font i el progrés del desenvolupament.
- [**Web de Documentació**](https://brewing-team.github.io/Coffee-Engine/): Explora la documentació oficial.

**Gràcies per explorar Coffee Engine!**
