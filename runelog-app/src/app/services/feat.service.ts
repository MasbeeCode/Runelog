import { Injectable } from '@angular/core';
import { Feat } from '../interfaces/feat.interface';

@Injectable({
  providedIn: 'root'
})
export class FeatService {
  private REAPER: Feat = {
    name: "Reaper", logs: [
      {
        name: 'Arraxi', items: [
          { name: 'Spider leg top' },
          { name: 'Spider leg middle' },
          { name: 'Spider leg bottom' },
          { name: "Arraxi's fang" },
          { name: "Arraxi's eye" },
          { name: "Araxxi's web" },
          { name: 'Araxyte pheromone' },
          { name: 'Bill' },
          { name: 'Lana' },
          { name: 'Pete' },
          { name: 'Dave' },
          { name: 'Steve' },
          { name: 'Gavin' },
          { name: 'Barry' },
          { name: 'Mallory' },
        ]
      },
      {
        name: 'Arch-Glacor', items: [
          { name: 'Glacor remnants' },
          { name: 'Dark nilas' },
          { name: 'Frozen core of Leng' },
          { name: 'Leng artefact' },
          { name: 'Dark ice shard' },
          { name: 'Dark Shard of Leng' },
          { name: 'Dark ice sliver' },
          { name: 'Dark sliver of Leng' },
          { name: 'Scripture of Wen' },
          { name: "Glacor's Adornment" },
          { name: "Arch-Glacor's Adornment", },
          { name: "Ur-Glacor's Adornment" },
          { name: 'Gladys' },
        ]
      },
      {
        name: 'The Barrows Brothers', items: [
          { name: 'Corruption sigil' },
          { name: "Ahrim's hood" },
          { name: "Ahrim's robe top" },
          { name: "Ahrim's robe skirt" },
          { name: "Ahrim's staff" },
          { name: "Ahrim's wand" },
          { name: "Ahrim's book of magic" },
          { name: "Akrisae's hood" },
          { name: "Akrisae's robe top" },
          { name: "Akrisae's robe skirt" },
          { name: "Akrisae's war mace" },
          { name: "Dharok's helm" },
          { name: "Dharok's platebody" },
          { name: "Dharok's platelegs" },
          { name: "Dharok's greataxe" },
          { name: "Guthan's helm" },
          { name: "Guthan's platebody" },
          { name: "Guthan's chainskirt" },
          { name: "Guthan's warspear" },
          { name: "Karil's coif" },
          { name: "Karil's top" },
          { name: "Karil's skirt " },
          { name: "Karil's crossbow " },
          { name: "Karil's pistol crossbow" },
          { name: "Karil's off-hand pistol crossbow" },
          { name: "Torag's helm" },
          { name: "Torag's platebody" },
          { name: "Torag's platelegs" },
          { name: "Torag's hammer" },
          { name: "Verac's helm" },
          { name: "Verac's brassard" },
          { name: "Verac's plateskirt" },
          { name: "Verac's flail" },
          { name: "Linza's helm" },
          { name: "Linza's cuirass" },
          { name: "Linza's greaves" },
          { name: "Linza's hammer" },
          { name: "Linza's shield" },
          { name: "Amulet of the forsaken" }
        ]
      },
      {
        name: 'The Barrows:Rise of the Six', items: [
          { name: "Malevolent kiteshield" },
          { name: "Merciless kiteshield" },
          { name: "Vengeful kiteshield" },
          { name: "Malevolent energy" },
          { name: "Ahrim bobblehead" },
          { name: "Dharok bobblehead" },
          { name: "Guthan bobblehead" },
          { name: "Karil bobblehead" },
          { name: "Torag bobblehead" },
          { name: "Verac bobblehead" },
        ]
      },
      {
        name: 'Chaos Elemental', items: [
          { name: "Dragon 2h sword" },
          { name: "Corrupt dragon helm" },
          { name: "Corrupt dragon chainbody" },
          { name: "Corrupt dragon platelegs" },
          { name: "Corrupt dragon plateskirt" },
          { name: "Corrupt dragon battleaxe" },
          { name: "Corrupt dragon dagger" },
          { name: "Corrupt dragon longsword" },
          { name: "Corrupt dragon mace" },
          { name: "Corrupt dragon scimitar" },
          { name: "Corrupt dragon spear" },
          { name: "Corrupt dragon sq shield" },
          { name: "Statius's full helm" },
          { name: "Statius's platebody" },
          { name: "Statius's platelegs" },
          { name: "Statius's warhammer" },
          { name: "Vesta's chainbody" },
          { name: "Vesta's plateskirt" },
          { name: "Vesta's longsword" },
          { name: "Vesta's spear" },
          { name: "Zuriel's hood" },
          { name: "Zuriel's robe top" },
          { name: "Zuriel's robe bottom" },
          { name: "Zuriel's staff" },
          { name: "Morrigan's coif" },
          { name: "Morrigan's leather body" },
          { name: "Morrigan's leather chaps" },
          { name: "Morrigan's javelin" },
          { name: "Morrigan's throwing axe" },
          { name: "Ellie" },
        ]
      },
      {
        name: 'Commander Zilyana', items: [
          { name: "Saradomin's hiss" },
          { name: "Saradomin's murmur" },
          { name: "Saradomin's whisper" },
          { name: "Saradomin hilt" },
          { name: "Godsword shard 1" },
          { name: "Godsword shard 2" },
          { name: "Godsword shard 3" },
          { name: "Saradomin sword" },
          { name: "Armadyl crossbow" },
          { name: "Off-hand Armadyl crossbow" },
          { name: "Warpriest of Saradomin helm" },
          { name: "Warpriest of Saradomin cape" },
          { name: "Warpriest of Saradomin cuirass" },
          { name: "Warpriest of Saradomin greaves" },
          { name: "Warpriest of Saradomin gauntlets" },
          { name: "Warpriest of Saradomin boots" },
          { name: "Zilyana's Notes" },
          { name: "Commander Miniana" }
        ]
      },
      {
        name: 'Corporeal Beast', items: [
          { name: "Spirit shield" },
          { name: "Spectral sigil" },
          { name: "Arcane sigil" },
          { name: "Elysian sigil" },
          { name: "Divine sigil" },
          { name: "Holy elixir" },
          { name: "Corporeal Puppy" }
        ]
      },
      {
        name: 'Croesus', items: [
          { name: "Cryptbloom helm (incomplete)" },
          { name: "Cryptbloom top (incomplete)" },
          { name: "Cryptbloom bottoms (incomplete)" },
          { name: "Cryptbloom gloves (incomplete)" },
          { name: "Cryptbloom boots (incomplete)" },
          { name: "Croesus sporehammer" },
          { name: "Croesus foultorch" },
          { name: "Croesus spore sack" },
          { name: "Scripture of Bik" },
          { name: "Little Sus" },
        ]
      },
      {
        name: 'Dagannoth Kings', items: [
          { name: "Seers' ring" },
          { name: "Berserker ring" },
          { name: "Warrior ring" },
          { name: "Archers' ring" },
          { name: "Mud battlestaff" },
          { name: "Dragon hatchet" },
          { name: "Seercull" },
          { name: "Prime hatchling" },
          { name: "Rex hatchling" },
          { name: "Supreme hatchling" },
        ]
      },
      {
        name: 'Dragonkin Laboratory', items: [
          { name: "Greater Flurry ability codex" },
          { name: "Greater Fury ability codex" },
          { name: "Greater Barge ability codex" },
          { name: "Redacted Dragonkin Research" },
          { name: "Diary of an Overzealous Gnome" },
          { name: "Draconic energy" },
          { name: "Bisdi" },
        ]
      },
      {
        name: 'The Gate of Elidinis', items: [
          { name: "Runic attuner" },
          { name: "Memory dowser" },
          { name: "Scripture of Elidinis" },
          { name: "Latent Offering" },
          { name: "After The Flood" },
          { name: "Eclipsed Soul prayer codex" },
          { name: "Edie" },
        ]
      },
      {
        name: 'General Graardor', items: [
          { name: "Bandos helmet" },
          { name: "Bandos chestplate" },
          { name: "Bandos tassets" },
          { name: "Bandos gloves" },
          { name: "Bandos boots" },
          { name: "Bandos hilt" },
          { name: "Godsword shard 1" },
          { name: "Godsword shard 2" },
          { name: "Godsword shard 3" },
          { name: "Bandos warshield" },
          { name: "Warpriest of Bandos helm" },
          { name: "Warpriest of Bandos cape" },
          { name: "Warpriest of Bandos cuirass" },
          { name: "Warpriest of Bandos greaves" },
          { name: "Warpriest of Bandos gauntlets" },
          { name: "Warpriest of Bandos boots" },
          { name: "The Glory of General Graardor" },
          { name: "General Awwdor" },
        ]
      },
      {
        name: 'Giant Mole', items: [
          { name: "Dragon 2h sword" },
          { name: "Clingy mole" },
          { name: "Molly" },
        ]
      },
      {
        name: 'Gregorovic', items: [
          { name: "Crest of Sliske" },
          { name: "Dormant anima core helm" },
          { name: "Dormant anima core body" },
          { name: "Dormant anima core legs" },
          { name: "Sliskean essence" },
          { name: "Shadow glaive" },
          { name: "Off-hand shadow glaive" },
          { name: "Greg" },
        ]
      },
      {
        name: 'Helwyr', items: [
          { name: "Crest of Seren" },
          { name: "Dormant anima core helm" },
          { name: "Dormant anima core body" },
          { name: "Dormant anima core legs" },
          { name: "Serenic essence" },
          { name: "Wand of the Cywir elders" },
          { name: "Orb of the Cywir elders" },
          { name: "Lilwyr" }
        ]
      },
      {
        name: 'Hermod, the Spirit of War', items: [
          { name: "Hermodic plate" },
          { name: "Animated drumsticks" },
          { name: "Herman" }
        ]
      },
      {
        name: 'Kalphite King', items: [
          { name: "Drygore longsword" },
          { name: "Off-hand drygore longsword" },
          { name: "Drygore mace" },
          { name: "Off-hand drygore mace" },
          { name: "Drygore rapier" },
          { name: "Off-hand drygore rapier" },
          { name: "Perfect chitin" },
          { name: "Kalphite Grubling" },
        ]
      },
      {
        name: 'Kalhpite Queen', items: [
          { name: "Dragon chainbody" },
          { name: "Dragon 2h sword" },
          { name: "Kalphite queen head" },
          { name: "Kalphite Grublet" },
        ]
      },
      {
        name: 'Kerapac, the bound', items: [
          { name: "Fractured Armadyl symbol" },
          { name: "Fractured stabilisation gem" },
          { name: "Staff of Armadyl's fractured shaft" },
          { name: "Kerapac's wrist wraps" },
          { name: "Greater Concentrated blast ability codex" },
          { name: "Scripture of Jas" },
          { name: "Kerry" },
        ]
      },
      {
        name: 'King Black Dragon', items: [
          { name: "Dragon Rider gloves" },
          { name: "Dragon Rider boots" },
          { name: "Draconic visage" },
          { name: "King black dragon head" },
          { name: "Last riders" },
          { name: "Dragon kite ornament kit (or)" },
          { name: "Dragon kite ornament kit (sp)" },
          { name: "King Black Dragonling" },
        ]
      },
      {
        name: "Kree'arra", items: [
          { name: "Armadyl helmet" },
          { name: "Armadyl chestplate" },
          { name: "Armadyl chainskirt" },
          { name: "Armadyl gloves" },
          { name: "Armadyl boots" },
          { name: "Armadyl hilt" },
          { name: "Godsword shard 1" },
          { name: "Godsword shard 2" },
          { name: "Godsword shard 3" },
          { name: "Armadyl buckler" },
          { name: "Warpriest of Armadyl helm" },
          { name: "Warpriest of Armadyl cape" },
          { name: "Warpriest of Armadyl cuirass" },
          { name: "Warpriest of Armadyl greaves" },
          { name: "Warpriest of Armadyl gauntlets" },
          { name: "Warpriest of Armadyl boots" },
          { name: "Armadyl's Assault" },
          { name: "Chick'arra" },
        ]
      },
      {
        name: "K'ril Tsutsaroth", items: [
          { name: "Hood of subjugation" },
          { name: "Garb of subjugation" },
          { name: "Gown of subjugation" },
          { name: "Gloves of subjugation" },
          { name: "Boots of subjugation" },
          { name: "Zamorak hilt" },
          { name: "Godsword shard 1" },
          { name: "Godsword shard 2" },
          { name: "Godsword shard 3" },
          { name: "Zamorakian spear" },
          { name: "Steam battlestaff" },
          { name: "Ward of subjugation" },
          { name: "Warpriest of Zamorak helm" },
          { name: "Warpriest of Zamorak cape" },
          { name: "Warpriest of Zamorak cuirass" },
          { name: "Warpriest of Zamorak greaves" },
          { name: "Warpriest of Zamorak gauntlets" },
          { name: "Warpriest of Zamorak boots" },
          { name: "Razulei's Tale" },
          { name: "K'ril Tinyroth" }
        ]
      },
      {
        name: 'Legiones', items: [
          { name: "Ascension signet I" },
          { name: "Ascension signet II" },
          { name: "Ascension signet III" },
          { name: "Ascension signet IV" },
          { name: "Ascension signet V" },
          { name: "Ascension signet VI" },
          { name: "Legio Primulus" },
          { name: "Legio Secundulus" },
          { name: "Legio Tertiolus" },
          { name: "Legio Quartulus" },
          { name: "Legio Quintulus" },
          { name: "Legio Sextulus" },
        ]
      },
      {
        name: "Liberation of Mazcab", items: [
          { name: "Achto Primeval gloves" },
          { name: "Achto Primeval boots" },
          { name: "Achto Primeval mask" },
          { name: "Achto Primeval robe legs" },
          { name: "Achto Primeval robe top" },
          { name: "Achto Tempest gloves" },
          { name: "Achto Tempest boots" },
          { name: "Achto Tempest cowl" },
          { name: "Achto Tempest chaps" },
          { name: "Achto Tempest body" },
          { name: "Achto Teralith gauntlets" },
          { name: "Achto Teralith boots" },
          { name: "Achto Teralith helmet" },
          { name: "Achto Teralith leggings" },
          { name: "Achto Teralith cuirass" },
          { name: "Mazcab ability codex" },
          { name: "Lil' Tuzzy" },
          { name: "Diddyzag" },
          { name: "Yakaminu" }
        ]
      },
      {
        name: 'The Magister', items: [
          { name: "Phylactery" },
          { name: "Gloves of passage" },
          { name: "The Minister" },
          { name: "The Magister's Journal 1" },
          { name: "The Magister's Journal 2" },
          { name: "The Magister's Journal 3" },
          { name: "The Magister's Journal 4" },
          { name: "The Magister's Journal 5" }
        ]
      },
      {
        name: 'Nex', items: [
          { name: "Torva full helm" },
          { name: "Torva platebody" },
          { name: "Torva platelegs" },
          { name: "Torva gloves" },
          { name: "Torva boots" },
          { name: "Pernix cowl" },
          { name: "Pernix body" },
          { name: "Pernix chaps" },
          { name: "Pernix gloves" },
          { name: "Pernix boots" },
          { name: "Zaryte bow" },
          { name: "Virtus mask" },
          { name: "Virtus robe top" },
          { name: "Virtus robe legs" },
          { name: "Virtus gloves" },
          { name: "Virtus boots" },
          { name: "Virtus wand" },
          { name: "Virtus book" },
          { name: "Ancient emblem" },
          { name: "Nex's Followers" },
          { name: "Nexterminator" }
        ]
      },
      {
        name: 'Nex, Angel of Death', items: [
          { name: "Praesul codex" },
          { name: "Wand of the praesul" },
          { name: "Imperium core" },
          { name: "Reeves" },
          { name: "The Praesul" },
          { name: "The Promised Gift" },
          { name: "Intricate shadow chest" },
          { name: "Intricate blood stained chest" },
          { name: "Intricate ice chest" },
          { name: "Intricate smoke-shrouded chest" },

        ]
      },
      {
        name: 'Queen Black Dragon', items: [
          { name: "Dragon kiteshield" },
          { name: "Royal bolt stabiliser" },
          { name: "Royal frame" },
          { name: "Royal sight" },
          { name: "Royal torsion spring" },
          { name: "Draconic visage" },
          { name: "Dragonbone upgrade kit" },
          { name: "Queen Black Dragonling" },
          { name: "First dragonkin journal" },
          { name: "Second dragonkin journal" },
          { name: "Third dragonkin journal" },
          { name: "Fourth dragonkin journal" }
        ]
      },
      {
        name: 'Raksha, the Shadow Colossus', items: [
          { name: "Laceration boots" },
          { name: "Blast diffusion boots" },
          { name: "Fleeting boots" },
          { name: "Shadow spike" },
          { name: "Greater Ricochet ability codex" },
          { name: "Greater Chain ability codex" },
          { name: "Divert ability codex" },
          { name: "Raklette" },
        ]
      },
      {
        name: 'Rasial, the First Necromancer', items: [
          { name: "Omni guard" },
          { name: "Soulbound lantern" },
          { name: "Crown of the First Necromancer" },
          { name: "Robe top of the First Necromancer" },
          { name: "Robe bottom of the First Necromancer" },
          { name: "Hand wrap of the First Necromancer" },
          { name: "Foot wraps of the First Necromancer" },
          { name: "Miso" }
        ]
      },
      {
        name: 'Rex Matriarchs', items: [
          { name: "Savage spear tip" },
          { name: "Savage spear shaft" },
          { name: "Savage spear cap" },
          { name: "Savage plume" },
          { name: "Heart of the Archer" },
          { name: "Heart of the Seer" },
          { name: "Heart of the Warrior" },
          { name: "Heart of the Berserker" },
          { name: "Bagra" },
          { name: "Corbi" },
          { name: "Pavo" }
        ]
      },
      {
        name: 'Rex Matriarch: Osseous', items: [
          { name: "Savage spear tip" },
          { name: "Savage spear shaft" },
          { name: "Savage spear cap" },
          { name: "Savage plume" },
          { name: "Heart of the Berserker" },
          { name: "Baby Osseous" },
          { name: "Jail cell key" },
          { name: "Occultist's ring" }
        ]
      },
      {
        name: 'Sanctum of Rebirth', items: [
          { name: "Roar of Awakening" },
          { name: "Ode to Deceit" },
          { name: "Shard of Genesis Essence" },
          { name: "Scripture of Amascut" },
          { name: "Divine Rage prayer codex" },
          { name: "The Brood Mother" },
          { name: "The Beast of Darkness" },
          { name: "Death and Devourers" },
          { name: "Neffie" }
        ]
      },
      {
        name: 'The Shadow Reef', items: [
          { name: 'Eldritch crossbow limb' },
          { name: 'Eldritch crossbow mechanism' },
          { name: 'Eldritch crossbow stock' },
          { name: 'Black stone heart' },
          { name: 'The Last Offering' },
          { name: "Kranon's Ancient Journal" },
          { name: 'Ambi' },
        ]
      },
      {
        name: 'Solak, Guardian of the Grove', items: [
          { name: "Torn grimoire page" },
          { name: "Blightbound crossbow" },
          { name: "Off-hand Blightbound crossbow" },
          { name: "Erethdor's grimoire" },
          { name: "Purple mushroom" },
          { name: "Merethiel's stave" },
          { name: "Solly" }

        ]
      },
      {
        name: 'Telos', items: [
          { name: "Orb of pure anima" },
          { name: "Orb of corrupted anima" },
          { name: "Orb of volcanic anima" },
          { name: "Dormant Seren godbow" },
          { name: "Dormant staff of Sliske" },
          { name: "Dormant Zaros godsword" },
          { name: "Reprisal ability codex" },
          { name: "Tess" }
        ]
      },
      {
        name: 'Temple of Aminishi', items: [
          { name: "Fishy treat" },
          { name: "Crassian Allegiance" },
          { name: "Masuta's warspear" },
          { name: "Himiko's Vision" },
          { name: "Ancient scale" },
          { name: "Kuroryu" },
        ],
      },
      {
        name: 'The Twin Furies', items: [
          { name: "Crest of Zamorak" },
          { name: "Dormant anima core helm" },
          { name: "Dormant anima core body" },
          { name: "Dormant anima core legs" },
          { name: "Zamorakian essence" },
          { name: "Blade of Nymora" },
          { name: "Blade of Avaryss" },
          { name: "Nylessa" },
          { name: "Ava" }
        ]
      },
      {
        name: 'TzHaar', items: [
          { name: "Fire cape" },
          { name: "TokHaar-Kal-Ket" },
          { name: "TokHaar-Kal-Mej" },
          { name: "TokHaar-Kal-Xil" },
          { name: "TokHaar-Kal-Mor" },
          { name: "Shrimpy" }
        ]
      },
      {
        name: 'TzKal-Zuk', items: [
          { name: "Obsidian blade" },
          { name: "Magma core" },
          { name: "Ancient hilt" },
          { name: "Igneous stone" },
          { name: "Magma Tempest ability codex" },
          { name: "Scripture of Ful" },
          { name: "Little Zuk" }
        ]
      },
      {
        name: 'Vindicta & Gorvek', items: [
          { name: "Crest of Zaros" },
          { name: "Dormant anima core helm." },
          { name: "Dormant anima core body" },
          { name: "Dormant anima core legs" },
          { name: "Zarosian essence" },
          { name: "Dragon Rider lance" },
          { name: "Vindiddy" },
          { name: "Rawrvek" },
        ]
      },
      {
        name: 'Vorago', items: [
          { name: "Seismic wand" },
          { name: "Seismic singularity" },
          { name: "Tectonic energy" },
          { name: "Omens helm" },
          { name: "Omens torso" },
          { name: "Omens legs" },
          { name: "Omens gloves" },
          { name: "Omens feet" },
          { name: "Maul of omens" },
          { name: "Vitalis" },
          { name: "Bombi" },
        ]
      },
      {
        name: 'Zamorak, Lord of Chaos', items: [
          { name: "Chaos Roar ability codex" },
          { name: "Top of the Last Guardian's bow" },
          { name: "Divine bowstring" },
          { name: "Bottom of the Last Guardian's bow" },
          { name: "Vestments of havoc robe top" },
          { name: "Vestments of havoc robe bottom" },
          { name: "Vestments of havoc hood" },
          { name: "Vestments of havoc boots" },
          { name: "Codex of lost knowledge" },
          { name: "Zammo the Rak" }
        ]
      },
      {
        name: 'Zemouregal & Vorkath', items: [
          { name: "Vorkath's spike" },
          { name: "Vorkath's scale" },
          { name: "Invoke Lord of Bones incantation codex" },
          { name: "Zemouregal's nexus" },
          { name: "Vorki" }
        ]
      },
    ]
  }

  private feats = [this.REAPER,];

  constructor() {

  }

  getReaperData() {
    return this.REAPER;
  }
}
