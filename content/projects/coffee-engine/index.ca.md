---
title: "Coffee Engine"
date: 2025-07-30
draft: false
summary: "Un motor de jocs fet des de zero amb C++ i OpenGL"
tags: ["C++", "OpenGL", "Game Engine"]
weight:
---

**Coffee Engine** és un motor de jocs creat des de zero per **Hugo Planell Moreno** i **jo** com a projecte personal i acadèmic, amb l’objectiu d’aprendre en profunditat com funcionen els motors de jocs.

Aquest projecte va començar com un experiment d’estiu i més tard es va convertir en la base per a l’assignatura de *Motors de Jocs* al **tercer any** del **Grau en Disseny i Desenvolupament de Videojocs del CITM**. El projecte va rebre una *Matrícula d’Honor*, aconseguint una puntuació perfecta (10/10).

També va ser seleccionat com el **motor oficial** perquè tota la classe desenvolupés un joc amb **40 estudiants** com a part de l’assignatura *Projecte 3*. Per saber-ne més pots llegir el meu post sobre [Warhammer 40.000: The Last Marine](/projects/w40k-tlm/) aquí.

![](img_1.webp)

![](img_2.png)

## Característiques

### **Arquitectura**
- **CoffeeEngine Core Library**: Arquitectura modular
- **CoffeeEditor**: Editor complet
- **Cross-Platform Support**: Suport per a Windows i Linux

### **Renderitzat**

#### **Renderitzat 3D**
- **Forward Rendering Pipeline**: Implementació moderna
- **PBR Materials**: Pipeline PBR
- **Shader Materials**: Suport per a shaders personalitzats
- **Textures**: Sistema de càrrega i gestió de textures
- **Skybox**: Mapejat d’entorn HDR
- **HDR Rendering**: Pipeline d’alt rang dinàmic

#### **Postprocessat**
- **FXAA**: Implementació de Fast Approximate Antialiasing
- **Bloom**: Bloom basat en física
- **Fog**: Depth Fog
- **Tone Mapping**: AgX tone mapping

#### **Il·luminació i Ombres**
- **Directional Lights**: Llum direccional / sol amb ombres
- **Point Lights (Omni)**: Fonts de llum 360 graus
- **Spot Lights**: Il·luminació direccional en forma de con
- **Directional Shadows**: Mapeig d’ombres en temps real
- **Image-Based Lighting (IBL)**: Il·luminació ambiental
- **Frustum Culling**: Optimització basada en octree

#### **Renderitzat 2D**
- **Renderer2D**: Renderitzat optimitzat de sprites 2D
- **2D Batching**: Optimització automàtica de draw calls

### **Sistemes de Joc**

#### **Entity Component System (ECS)**
- **EnTT Integration**: Gestió eficient d’entitats
- **Scene Tree**: Organització jeràrquica d’escenes
- **Component System**: Composició modular d’objectes de joc
- **Model Loading**: Importació i gestió de recursos 3D

#### **Sistema d’Animació**
- **3D Skeletal Animation**: Animació de personatges basada en ossos
- **Animation Blending**: Transicions suaus entre estats
- **Partial Animation Blending**: Animació de parts del cos per capes

#### **Sistema de Prefabs**
- **Reusable Templates**: Plantilles d’objectes basades en components
- **Hierarchy Preservation**: Relacions pare-fill
- **Cross-Component References**: Integritat automàtica de referències
- **Human-Readable Serialization**: Format `.prefab` amb control de versions
- **Runtime Instantiation**: Creació dinàmica de prefabs

### **Àudio**
- **Wwise Integration**: Middleware professional d’àudio
- **3D Spatial Audio**: Àudio posicional amb atenuació per distància
- **RTPCs**: Controls de paràmetres en temps real
- **Audio Banks & Events**: Gestió organitzada de recursos d’àudio
- **Auxiliary Sends**: Enrutament d’àudio definit pel joc

### **Navegació**
- **Pathfinding System**: Navegació IA amb evitació d’obstacles
- **Navmesh Generation**: Creació automàtica de malles de navegació

### **Físiques**
- **Bullet Physics Integration**: Simulació de físiques
- **Rigid Body System**: Cossos estàtics, dinàmics i cinemàtics
- **Collision Detection**: Esdeveniments d’entrada/permanència/sortida amb manifolds
- **Multiple Collider Types**: Caixa, Esfera, Càpsula, Cilindre, Con
- **Raycasting API**: Detecció d’impacte simple/múltiple
- **Physics Debugging**: Visualització de formes de col·lisió i debug de raycast

### **Scripting**
- **Lua Integration**: Interoperabilitat C++/Lua potenciades per Sol2
- **Advanced Bindings**: Conversions automàtiques de tipus i gestió d’errors
- **IntelliSense Support**: Fitxers stub generats automàticament
- **Language-Agnostic Design**: Extensible per a llenguatges addicionals
- **Entity Integration**: Vinculació directa de scripts a objectes de joc

### **Eines de Desenvolupament**

#### **Gestió de Recursos**
- **Asset Pipeline**: Importació i processament automàtic
- **Resource Caching**: Càrrega intel·ligent d’assets
- **Hot Reloading**: Actualitzacions de recursos en temps real

#### **Funcionalitats de l’Editor**
- **Scene Hierarchy**: Gestió visual del graf de l’escena
- **Component Inspectors**: Edició de propietats en temps real
- **Asset Browser**: Interfície de gestió de recursos
- **Viewport**: Visualització d’escena 3D

#### **Profiling i Depuració**
- **Tracy Integration**: Profiling de rendiment en temps real
- **Debug Rendering**: Sistemes visuals de depuració
- **Console & Logging**: Eines integrades de depuració

#### **Serialització i Persistència**
- **Scene Serialization**: Sistema complet de guardat/càrrega d’escenes
- **Cereal Library**: Serialització robusta amb versions

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
- **Bullet3**
- **Wwise**

## **Explora el Projecte**

Pots trobar més informació sobre el projecte a diverses plataformes:

- [**Repositori de GitHub**](https://github.com/Brewing-Team/Coffee-Engine): Veure el codi font i el progrés del desenvolupament.
- [**Lloc Web de Documentació**](https://brewing-team.github.io/Coffee-Engine/): Explora la documentació oficial.

**Gràcies per explorar Coffee Engine!**

