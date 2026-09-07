---
title: Installation and dependencies
sidebar_position: 1
---

# Installation and dependencies

This guide targets Minecraft 1.20.1 on Fabric with SSC and SSCA.

| Component | Baseline      |
| --------- | ------------- |
| Minecraft | 1.20.1        |
| Loader    | Fabric Loader |
| SSC       | 1.10.0        |
| SSCA      | 8.0.0-beta.3  |
| Java      | 17 or newer   |

SSCA depends on SSC. Match the two versions exactly; beta builds may target an SSC test build.

SSC requires Fabric Loader 0.12.3+, Fabric API 0.83.0+, Pehkui 3.7.8+, Satin 1.14.0+, and GeckoLib 4.x. Trinkets and First-person Model are recommended. Do not install the standalone Origins mod: SSC declares it as incompatible. GeckoLib 5, OptiFabric, old Identity builds, and EnchantedLib above 0.3.0 are also listed as conflicts.

SSCA requires Fabric Loader 0.14.21+, Fabric API 0.83.0+, SSC 1.10.0+, and GeckoLib 4.8.4+. Trinkets, Mod Menu, LambDynamicLights, and AsyncParticles are optional. Keep particle rendering enabled or several skills will be invisible.

1. Create a Fabric 1.20.1 instance.
2. Install the required dependencies, then place the matching SSC and SSCA jars in `mods`.
3. Launch once and resolve any dependency warning before entering your world.
4. Open the SSC book in-game and follow the transformation prompt.

Download release jars, not GitHub source archives. The community 1.21.1 port is experimental and is documented only in [versions and compatibility](../reference/versions).
