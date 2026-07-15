export const exercises = {

  comandos_basicos:[{
    id: "ex_1",
    prompt: "Exercise 1: Set it to daytime mode",
    xp: 10,
    accepted: ["/time set day", "/time set 1000"],
    hint: "Try using the /time command to set the time to day.",
  },
  {
    id: "ex_2",
    prompt: "Exercise 2: Set it your gamemode to creative",
    xp: 10,
    accepted: ["/gamemode creative", "/gamemode 1"],
    hint: "It is the same command to set your gamemode to survival",
  },
  {
    id: "ex_3",
    prompt: "Exercise 3: Clear the weather",
    xp: 10,
    accepted: ["/weather clear"],
    hint: "Weather modes are clear, rain, and thunder.",
  },
  {
    id: "ex_4",
    prompt: "Exercise 4: Set the difficulty to hard",
    xp: 10,
    accepted: ["/difficulty hard"],
    hint: "Difficulty options are peaceful, easy, normal, and hard.",
  }],

  // entidades — 4
  entidades:[{
    id: "en_1",
    prompt: "Entities 1: Summon a zombie at your exact position",
    xp: 15,
    accepted: ["/summon zombie ~ ~ ~", "/summon minecraft:zombie ~ ~ ~"],
    hint: "The ~ symbol means 'relative to your current position' for each coordinate.",
  },
  {
    id: "en_2",
    prompt: "Entities 2: Give yourself Speed II for 60 seconds",
    xp: 20,
    accepted: [
      "/effect give @s speed 60 1",
      "/effect give @s minecraft:speed 60 1",
    ],
    hint: "/effect give <target> <effect> <seconds> <amplifier>. Amplifier is zero-indexed, so level II is amplifier 1.",
  },
  {
    id: "en_3",
    prompt: "Entities 3: Remove all zombies within 10 blocks of you",
    xp: 20,
    accepted: ["/kill @e[type=zombie,distance=..10]"],
    hint: "distance=..10 means 'up to 10 blocks away'. Combine it with type= to filter by entity.",
  },
  {
    id: "en_4",
    prompt: "Entities 4: Clear all potion effects from yourself",
    xp: 15,
    accepted: ["/effect clear @s"],
    hint: "/effect clear removes every active effect from the target in one command.",
  }],

  // movimiento — 4
  movimiento:[{
    id: "mv_1",
    prompt: "Movement 1: Teleport 5 blocks straight up from where you are",
    xp: 15,
    accepted: ["/tp @s ~ ~5 ~", "/teleport @s ~ ~5 ~"],
    hint: "Only the Y coordinate changes — the other two stay as ~ to keep your X and Z position.",
  },
  {
    id: "mv_2",
    prompt: "Movement 2: Teleport yourself to the player named Steve",
    xp: 10,
    accepted: ["/tp @s Steve", "/teleport @s Steve"],
    hint: "You can teleport directly to a player's name instead of typing coordinates.",
  },
  {
    id: "mv_3",
    prompt:
      "Movement 3: Teleport yourself to the Nether at your current coordinates",
    xp: 25,
    accepted: ["/execute in minecraft:the_nether run tp @s ~ ~ ~"],
    hint: "/execute in <dimension> run <command> lets you run any command inside another dimension's context.",
  },
  {
    id: "mv_4",
    prompt:
      "Movement 4: Teleport to coordinates 0 70 0 while facing 100 64 -200",
    xp: 20,
    accepted: [
      "/tp @s 0 70 0 facing 100 64 -200",
      "/teleport @s 0 70 0 facing 100 64 -200",
    ],
    hint: "Add 'facing <x> <y> <z>' after the destination to control which direction you look.",
  }],

  // construccion — 4
  construccion:[{
    id: "cn_1",
    prompt: "Building 1: Place a stone block at coordinates 10 64 10",
    xp: 10,
    accepted: [
      "/setblock 10 64 10 stone",
      "/setblock 10 64 10 minecraft:stone",
    ],
    hint: "/setblock <x> <y> <z> <block> places exactly one block.",
  },
  {
    id: "cn_2",
    prompt: "Building 2: Fill the area from 0 64 0 to 2 66 2 with oak planks",
    xp: 20,
    accepted: [
      "/fill 0 64 0 2 66 2 oak_planks",
      "/fill 0 64 0 2 66 2 minecraft:oak_planks",
    ],
    hint: "/fill <x1 y1 z1> <x2 y2 z2> <block> fills the whole cuboid between the two corners.",
  },
  {
    id: "cn_3",
    prompt:
      "Building 3: Clone the structure from 0 64 0 / 5 68 5 to the new position 20 64 20",
    xp: 25,
    accepted: ["/clone 0 64 0 5 68 5 20 64 20"],
    hint: "/clone <corner1> <corner2> <destination> copies a cuboid to a new location.",
  },
  {
    id: "cn_4",
    prompt:
      "Building 4: Replace only the air blocks in the area 0 64 0 to 5 66 5 with glass",
    xp: 25,
    accepted: [
      "/fill 0 64 0 5 66 5 glass replace air",
      "/fill 0 64 0 5 66 5 minecraft:glass replace air",
    ],
    hint: "Add 'replace <block>' at the end of /fill so it only touches blocks matching that type, leaving everything else untouched.",
  }]
}

