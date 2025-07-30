---
title: "Coffee Engine"
date: 2025-07-30
draft: false
summary: "A game engine made from scratch written in C++ & OpenGL"
tags: ["C++", "OpenGL", "Game Engine"]
weight:
---

**Coffee Engine** is a small game engine made from scratch by **Hugo Planell Moreno** and **myself** as a personal and academic project, with the purpose of learning more in-depth about how game engines work.

This project started as a summer experiment and later became the foundation for the *Game Engine* course in the **third year** of the **CITM Game Design and Development Bachelor's Degree**. The project received the highest distinction in the course (*Matrícula de Honor*), achieving a perfect score (10/10).

It was also selected as the **official engine** for the entire class of **40 students** to develop a game as part of the *Project 3* subject. To learn more about that project, you can read the post about [Warhammer 40,000: The Last Marine](/projects/w40k-tlm/) here.

![](img_1.webp)

![](img_2.png)

## Features

### **Architecture**
- **CoffeeEngine Core Library**: Modular engine architecture
- **CoffeeEditor**: Full-featured game editor
- **Cross-Platform Support**: Windows and Linux compatibility

### **Rendering**

#### **3D Rendering**
- **Forward Rendering Pipeline**: Modern Renderer3D implementation
- **PBR Materials**: Physically-based rendering workflow
- **Shader Materials**: Custom shader support
- **Textures**: Complete texture loading and management
- **Skybox**: HDR environment mapping
- **HDR Rendering**: High dynamic range pipeline

#### **Post-Processing**
- **FXAA**: Fast approximate anti-aliasing
- **Bloom**: Physically Based Bloom
- **Fog**: Atmospheric depth rendering
- **Tone Mapping**: AgX tone mapping for cinematic color

#### **Lighting & Shadows**
- **Directional Lights**: Sun-like lighting with shadows
- **Point Lights (Omni)**: 360-degree light sources
- **Spot Lights**: Cone-based directional lighting
- **Directional Shadows**: Real-time shadow mapping
- **Image-Based Lighting (IBL)**: Environment lighting
- **Frustum Culling**: Octree-based optimization

#### **2D Rendering**
- **Renderer2D**: Optimized 2D sprite rendering
- **2D Batching**: Automatic draw call optimization

### **Game Systems**

#### **Entity Component System (ECS)**
- **EnTT Integration**: High-performance entity management
- **Scene Tree**: Hierarchical scene organization
- **Component System**: Modular game object composition
- **Model Loading**: 3D asset import and management

#### **Animation System**
- **3D Skeletal Animation**: Bone-based character animation
- **Animation Blending**: Smooth state transitions
- **Partial Animation Blending**: Layer-based body part animation

#### **Prefab System**
- **Reusable Templates**: Component-based game object templates
- **Hierarchy Preservation**: Parent-child relationships
- **Cross-Component References**: Automatic reference integrity
- **Human-Readable Serialization**: `.prefab` format with version control
- **Runtime Instantiation**: Dynamic prefab spawning

### **Audio**
- **Wwise Integration**: Professional audio middleware
- **3D Spatial Audio**: Positional audio with distance attenuation
- **RTPCs**: Real-time parameter controls
- **Audio Banks & Events**: Organized audio asset management
- **Auxiliary Sends**: Game-defined audio routing

### **Navigation**
- **Pathfinding System**: AI navigation with obstacle avoidance
- **Navmesh Generation**: Automatic navigation mesh creation

### **Physics**
- **Bullet Physics Integration**: Industry-standard physics simulation
- **Rigid Body System**: Static, dynamic, and kinematic bodies
- **Collision Detection**: Enter/stay/exit events with manifolds
- **Multiple Collider Types**: Box, Sphere, Capsule, Cylinder, Cone
- **Raycasting API**: Single/multiple hit detection
- **Physics Debugging**: Visual collision shapes and raycast debug

### **Scripting**
- **Lua Integration**: Sol2-powered C++/Lua interoperability
- **Advanced Bindings**: Automatic type conversions and error handling
- **IntelliSense Support**: Auto-generated stub files
- **Language-Agnostic Design**: Extensible for additional languages
- **Entity Integration**: Direct script binding to game objects

### **Development Tools**

#### **Resource Management**
- **Asset Pipeline**: Automatic import and processing
- **Resource Caching**: Intelligent asset loading
- **Hot Reloading**: Real-time asset updates

#### **Editor Features**
- **Scene Hierarchy**: Visual scene graph management
- **Component Inspectors**: Real-time property editing
- **Asset Browser**: Resource management interface
- **Viewport**: 3D scene visualization

#### **Profiling & Debugging**
- **Tracy Integration**: Real-time performance profiling
- **Debug Rendering**: Visual debugging systems
- **Console & Logging**: Integrated debugging tools

#### **Serialization & Persistence**
- **Scene Serialization**: Complete scene save/load system
- **Cereal Library**: Robust versioned serialization

### Technologies Used

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

## **Explore the Project**

You can find more about the project on various platforms:

- [**GitHub Repository**](https://github.com/Brewing-Team/Coffee-Engine): View the source code and development progress.
- [**Documentation Website**](https://brewing-team.github.io/Coffee-Engine/): Explore the official documentation.

**Thank you for exploring Coffee Engine!**
