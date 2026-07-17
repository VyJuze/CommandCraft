export const Commands = {
  comandos_basicos: {
    title: "Basic Commands",
    entries: [
      {
        name: "/time set",
        description:
          "Changes the current time of day in the world. The minecraft day cicle runs 24.000 ticks - roughly 20 real-world minutes. You can pass a named alias like 'day' or 'night', or a raw tick value for precision. The cycle doesn't pause: after setting the time it continues from that point forward  ",
        syntax: "/time set <day|night|noon|midnight|value>",
        example:
          "time set day -> jumps to tick 1000 (early morning)\n/time set 6000 -> jumpts to midday\n/time set 18000 -> jumps to midnight",
      },
      {
        name: "/gamemode",
        description:
          "Sets the game mode for a player. In java edition you must use the full mode name - numeric shortcuts like '1' are Bedrock-only (you also can use like this). If you omit the target selector the command applies to yourself. Switching to creative gives you access to flight, infinite items, and no damage ",
        syntax: "/gamemode <creative|survival|adventure|spectator> [target]",
        example: "/gamemode creative -> sets your own mode to creative",
      },
      {
        name: "/weather",
        description:
          "Sets the current weather state of the world. In cold biomes, rain becomes snowfall and thunder becomes a blizzard. Without a duration the weather lasts a random amount of time before the normal cycle resumes. You can force it to stay permanently by passing a very large duration value",
        syntax: "/weather <clear|rain|thunder> [duration]",
        example: "/weather clear -> stops rain immediatly",
      },
      {
        name: "/difficulty",
        description:
          "Changes the world difficulty levvel. Peaceful removes all hostile mobs and regenerates health passively. Hard mode makes hunger lethal and causes villagers killed by zombies to turn into zombie villagers instead of despawning",
        syntax: "/difficulty <peaceful|easy|normal|hard>",
        example: "difficulty hard -> enables hard mode ",
      },
    ],
  },

  entidades: {
    title: "Entities",
    entries: [
      {
        name: "/summon",
        description:
          "Spawns a new entity at the specified coordinates. The tilde (~) symbol means 'relative to your current position', so  ~ ~ ~ spawns the entity exactly where you are standing. You can use the full namespaced ID (minecraft:zombie) or just the short name (zombie) - both works in Java edition.",
        syntax: "/summon <entity> [x] [y] [z]",
        example: "/summon zombie ~ ~ ~ -> spanws a zombie at our feet",
      },
      {
        name: "/effect give",
        description:
          "Applies a status effect to a player or entity. The amplifier is zero-indexed, meaning amplifier 0 is Level I, amplifier 1 is Level II, and so on. Duration is in seconds, not ticks. The minecraft: prefix on the effect name is optional in Java Edition — both 'speed' and 'minecraft:speed' are valid.",
        syntax: "/effect give <target> <effect> <duration_seconds> [amplifier]",
        example:
          "/effect give @s speed 60 1 -> Speed II for 60 seconds on yourself",
      },
      {
        name: "/effect clear",
        description:
          "Removes all active status effects from the target in a single command. You can optionally specify a single effect to remove instead of clearing everything. Useful for resetting a player's state after testing effects or in custom game scenarios.",
        syntax: "/effect clear <target> [effect]",
        example: "/effect clear @s -> removes all efects from yourself",
      },
      {
        name: "/kill",
        description:
          "Instantly kills the target. When combined with entity selectors and filters it becomes a precise tool — you can remove all entities of a specific type within a radius, or kill every non-player entity to clear lag. The distance filter uses '..' to denote a range: '..10' means 'up to 10 blocks away'.",
        syntax: "kill <target>",
        expample:
          "/kill @e [type=zombie, distance=..10] -> kills all zombies within 10 blocks ",
      },
    ],
  },
  construccion: {
    title: "Building",
    entries: [
      {
        name: "/setblock",
        description:
          "Places exactly one block at the specified coordinates, replacing whatever was there. The block ID must use the namespaced format (minecraft:stone) or just the short name (stone) — both work in Java Edition. By default it replaces the existing block; you can add a mode at the end to change behavior (replace, destroy, keep).",
        syntax: "/setblock <x> <y> <z> <block> [replace|destroy|keep]",
        example:
          "/setblock 10 64 10 stone  →  places stone at those coordinates\n/setblock ~ ~-1 ~ minecraft:grass_block  →  replaces the block under you\n/setblock 0 64 0 air  →  removes the block at that position",
      },
      {
        name: "/fill",
        description:
          "Fills the entire cuboid volume between two corner coordinates with a specified block. The two corners don't need to be in any specific order — Minecraft calculates the bounding box automatically. Adding 'replace' followed by a block type at the end restricts the fill to only blocks matching that type, leaving everything else untouched.",
        syntax:
          "/fill <x1> <y1> <z1> <x2> <y2> <z2> <block> [replace <filter_block>]",
        example:
          "/fill 0 64 0 10 70 10 stone  →  fills the cuboid with stone\n/fill 0 64 0 5 66 5 glass replace air  →  replaces only air with glass\n/fill ~ ~ ~ ~10 ~5 ~10 air  →  clears a 10×5×10 area from your position",
      },
      {
        name: "/clone",
        description:
          "Copies the blocks from one cuboid region to a new location. The destination coordinate is the corner of the destination that corresponds to the first corner of the source region. The source region cannot overlap the destination. Mask modes control what gets copied: 'replace' copies everything, 'masked' skips air blocks.",
        syntax:
          "/clone <x1> <y1> <z1> <x2> <y2> <z2> <dest_x> <dest_y> <dest_z> [replace|masked]",
        example:
          "/clone 0 64 0 5 68 5 20 64 20  →  copies that structure to the new position\n/clone 0 64 0 10 70 10 50 64 50 masked  →  copies, skipping air blocks\n/clone ~ ~ ~ ~10 ~5 ~10 ~20 ~ ~  →  copies relative to your position",
      },
    ],
  },
};
