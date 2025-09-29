(() => {
  const COLUMNS = 6;
  const ROWS = 2;
  const PAGE_SIZE = COLUMNS * ROWS;
  const SLIDE_DISTANCE = 48;
  const SLIDE_DURATION = 220;

  const rawGameFiles = [
    "Alex Kidd in the Enchanted Castle (USA).png",
    "Alisia Dragoon (USA).png",
    "Altered Beast (USA).png",
    "Beyond Oasis (USA).png",
    "Castle of Illusion Starring Mickey Mouse (USA).png",
    "Columns (USA).png",
    "Comix Zone (USA).png",
    "Darius (USA, from Genesis Mini).png",
    "Dr. Robotnik's Mean Bean Machine (USA).png",
    "Dynamite Headdy (USA).png",
    "Earthworm Jim (USA).png",
    "Ecco the Dolphin (USA).png",
    "Eternal Champions (USA).png",
    "Ghouls 'n Ghosts (USA).png",
    "Gunstar Heroes (USA).png",
    "Kid Chameleon (USA).png",
    "Landstalker (USA).png",
    "Light Crusader (USA).png",
    "Mega Man - The Wily Wars (USA, from Genesis Mini).png",
    "Shining Force (USA).png",
    "Shinobi III (USA).png",
    "Sonic Spinball (USA).png",
    "Space Harrier II (USA).png",
    "Street Fighter II' - Special Champion Edition (USA).png",
    "Streets of Rage 2 (USA).png",
    "Strider (USA).png",
    "Super Fantasy Zone (USA, Genesis Mini).png",
    "Tetris (USA, from Genesis Mini).png",
    "Thunder Force III (USA).png",
    "ToeJam & Earl (USA).png",
    "Vectorman (USA).png",
    "Virtua Fighter 2 (USA).png",
    "Wonderboy in Monster World (USA).png",
    "World of Illusion Starring Mickey Mouse and Donald Duck (USA).png",
    "castlevania.png",
    "contahardcorps.png",
    "goldenaxe.png",
    "monsterworld.png",
    "phantasystariv.png",
    "roadrash2.png",
    "sonic1.png",
    "sonic2.png"
  ];

  const manualTitles = {
    "castlevania.png": "Castlevania: Bloodlines",
    "contahardcorps.png": "Contra: Hard Corps",
    "goldenaxe.png": "Golden Axe",
    "monsterworld.png": "Monster World IV",
    "phantasystariv.png": "Phantasy Star IV",
    "roadrash2.png": "Road Rash II",
    "sonic1.png": "Sonic the Hedgehog",
    "sonic2.png": "Sonic the Hedgehog 2"
  };

  const SOUND_FILES = {
    nav: "assets/cursor.wav",
    slide: "assets/entry.wav"
  };

  const ROM_MAP = {
    alexkiddintheenchantedcastle: "roms/us_us_Alex_Kidd.bin.zip",
    alisiadragoon: "roms/us_us_Alisia_Dragoon.bin.zip",
    alteredbeast: "roms/us_us_Altered_Beast.bin.zip",
    beyondoasis: "roms/us_us_Beyond_Oasis.bin.zip",
    castleofillusionstarringmickeymouse: "roms/us_us_Castle_of_Illusion.bin.zip",
    castlevaniabloodlines: "roms/us_us_Castlevania_Bloodlines.bin.zip",
    columns: "roms/us_us_Columns.bin.zip",
    comixzone: "roms/us_us_Comix_Zone.bin.zip",
    contrahardcorps: "roms/us_us_Contra_Hard_Corps.bin.zip",
    darius: "roms/us_us_Darius.bin.zip",
    drrobotniksmeanbeanmachine: "roms/us_us_Dr_Robotnik_s_Mean_Bean_Machine.bin.zip",
    dynamiteheaddy: "roms/us_us_Dynamite_Headdy.bin.zip",
    earthwormjim: "roms/us_us_Earthworm_Jim.bin.zip",
    eccothedolphin: "roms/us_us_Ecco_the_Dolphin.bin.zip",
    eternalchampions: "roms/us_us_Eternal_Champions.bin.zip",
    ghoulsnghosts: "roms/us_us_Ghouls_n_Ghosts.bin.zip",
    goldenaxe: "roms/us_us_Golden_Axe.bin.zip",
    gunstarheroes: "roms/us_us_Gunstar_Heroes.bin.zip",
    kidchameleon: "roms/us_us_Kid_Chameleon.bin.zip",
    landstalker: "roms/us_us_Landstalker.bin.zip",
    lightcrusader: "roms/us_us_Light_Crusader.bin.zip",
    megamanthewilywars: "roms/us_us_Mega_Man.bin.zip",
    monsterworldiv: "roms/us_us_Monster_World_IV.bin.zip",
    mortalkombatii: "roms/us_us_Mortal_Kombat_II.bin.zip",
    phantasystariv: "roms/us_us_Phantasy_Star_IV.bin.zip",
    roadrashii: "roms/us_us_Road_Rash_II.bin.zip",
    shiningforce: "roms/us_us_Shining_Force.bin.zip",
    shinobiii: "roms/us_us_Shinobi_III.bin.zip",
    sonicspinball: "roms/us_us_Sonic_Spinball.bin.zip",
    sonicthehedgehog: "roms/us_us_Sonic_The_Hedgehog.bin.zip",
    sonicthehedgehog2: "roms/us_us_Sonic_The_Hedgehog_2.bin.zip",
    spaceharrierii: "roms/us_us_Space_Harrier_II.bin.zip",
    streetfighteriispecialchampionedition: "roms/us_us_STREET_FIGHTER_II.bin.zip",
    streetsofrage2: "roms/us_us_Streets_of_Rage_2.bin.zip",
    strider: "roms/us_us_Strider.bin.zip",
    superfantasyzone: "roms/us_us_Super_Fantasy_Zone.bin.zip",
    swordofvermilion: "roms/us_us_Sword_of_Vermilion.BIN.zip",
    tetris: "roms/us_us_Tetris.bin.zip",
    thunderforceiii: "roms/us_us_Thunder_Force_III.bin.zip",
    toejamearl: "roms/us_us_ToeJam_Earl.bin.zip",
    vectorman: "roms/us_us_Vectorman.bin.zip",
    virtuafighter2: "roms/us_us_Virtua_Fighter_2.bin.zip",
    wonderboyinmonsterworld: "roms/us_us_Wonder_Boy_in_Monster_World.bin.zip",
    worldofillusionstarringmickeymouseanddonaldduck: "roms/us_us_World_of_Illusion.bin.zip"
  };

  function sanitizeTitle(value) {
    return value.toLowerCase().replace(/\(.*?\)/g, "").replace(/[^a-z0-9]/g, "");
  }

  const backgroundMusic = new Audio("assets/bgmus.mp3");
  backgroundMusic.loop = true;
  backgroundMusic.preload = "auto";
  backgroundMusic.volume = 0.45;

  let bgmStarted = false;
  function resumeAudio() {
    const audioCtx = backgroundMusic && backgroundMusic.context;
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume().catch(() => {});
    }
    const module = window.Module;
    if (module) {
      try {
        module.resumeAudioContext?.();
        const ctx = module.SDL2 && module.SDL2.audioContext;
        if (ctx && ctx.state === 'suspended') {
          ctx.resume();
        }
      } catch (err) {
        console.warn('Audio resume failed', err);
      }
    }
  }

  function startBackgroundMusic() {
    if (bgmStarted) return;
    backgroundMusic.play()
      .then(() => {
        bgmStarted = true;
      })
      .catch(() => {
        setupBgmUnlock();
      });
  }

  function setupBgmUnlock() {
    if (bgmStarted) return;
    const unlock = () => {
      resumeAudio();
      startBackgroundMusic();
    };
    ["pointerdown", "touchstart", "keydown"].forEach((eventName) => {
      window.addEventListener(eventName, unlock, { once: true });
    });
  }

  setupBgmUnlock();

  function playSound(key, volume = 0.35) {
    const src = SOUND_FILES[key];
    if (!src) return;
    const audio = new Audio(src);
    audio.preload = "auto";
    audio.volume = volume;
    audio.play().catch(() => {
      /* ignore playback errors */
    });
  }

  function buildGameList(files) {
    return files
      .map((file) => {
        if (manualTitles[file]) {
          const manualTitle = manualTitles[file];
          const key = sanitizeTitle(manualTitle);
          return { file, title: manualTitle, rom: ROM_MAP[key] ?? null };
        }
        const withoutExt = file.replace(/\.[^.]+$/, "");
        const cleaned = withoutExt.replace(/\s*\(.*?\)/g, "").trim();
        const key = sanitizeTitle(cleaned || withoutExt);
        return { file, title: cleaned || withoutExt, rom: ROM_MAP[key] ?? null };
      })
      .sort((a, b) => a.title.localeCompare(b.title));
  }

  function coverPath(file) {
    return `covers/${encodeURIComponent(file)}`;
  }

  function initializeLibrary() {
    const gameGrid = document.querySelector(".game-grid");
    const gridWrapper = document.querySelector(".grid-wrapper");
    const selector = document.querySelector(".selector");
    const footerTitle = document.querySelector("footer p");
    const upButton = document.querySelector(".nav-button.nav-up");
    const downButton = document.querySelector(".nav-button.nav-down");

    if (!gameGrid || !gridWrapper || !selector || !footerTitle) return;

    const games = buildGameList(rawGameFiles);
    const totalRows = Math.ceil(games.length / COLUMNS);
    const maxRowStart = Math.max(0, totalRows - ROWS);
    const maxOffset = maxRowStart * COLUMNS;

    let selectionIndex = 0;
    let pageOffset = 0;
    let visibleTiles = [];
    let selectorPosition = { x: 0, y: 0 };

    const clampIndex = (index) => Math.max(0, Math.min(games.length - 1, index));
    const clampOffset = (offset) => {
      const bounded = Math.max(0, Math.min(maxOffset, offset));
      return bounded - (bounded % COLUMNS);
    };
    const currentRowStart = () => Math.floor(pageOffset / COLUMNS);

    function updateFooter() {
      const current = games[selectionIndex];
      footerTitle.textContent = current ? current.title : "";
    }

    function updateNavButtons() {
      const rowStart = currentRowStart();
      const hasPrev = rowStart > 0;
      const hasNext = rowStart < maxRowStart;

      if (upButton) {
        upButton.classList.toggle("is-visible", hasPrev);
        upButton.setAttribute("aria-hidden", hasPrev ? "false" : "true");
        upButton.tabIndex = hasPrev ? 0 : -1;
      }
      if (downButton) {
        downButton.classList.toggle("is-visible", hasNext);
        downButton.setAttribute("aria-hidden", hasNext ? "false" : "true");
        downButton.tabIndex = hasNext ? 0 : -1;
      }
    }

    function positionSelector(tile) {
      if (!tile) {
        selector.style.opacity = "0";
        return;
      }

      const wrapperRect = gridWrapper.getBoundingClientRect();
      const cover = tile.querySelector(".game-cover") || tile;
      const coverRect = cover.getBoundingClientRect();

      const padX = coverRect.width * 0.08;
      const padY = coverRect.height * 0.06;

      const width = coverRect.width + padX * 2;
      const height = coverRect.height + padY * 2;
      const offsetX = coverRect.left - wrapperRect.left - padX;
      const offsetY = coverRect.top - wrapperRect.top - padY;

      selectorPosition = { x: offsetX, y: offsetY };
      selector.style.width = `${width}px`;
      selector.style.height = `${height}px`;
      selector.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      selector.style.opacity = "1";
    }

    function highlightSelection() {
      visibleTiles.forEach((tile) => {
        const isActive = Number(tile.dataset.index) === selectionIndex;
        tile.classList.toggle("is-selected", isActive);
        tile.setAttribute("aria-current", isActive ? "true" : "false");
      });

      const activeTile = visibleTiles.find(
        (tile) => Number(tile.dataset.index) === selectionIndex
      );
      positionSelector(activeTile);
      updateFooter();
    }

    function renderPage(nextOffset = pageOffset) {
      nextOffset = clampOffset(nextOffset);
      const direction = Math.sign(nextOffset - pageOffset);
      const moved = direction !== 0;
      pageOffset = nextOffset;

      gameGrid.textContent = "";
      visibleTiles = [];

      const limit = Math.min(pageOffset + PAGE_SIZE, games.length);
      for (let index = pageOffset; index < limit; index += 1) {
        const game = games[index];
        const tile = document.createElement("div");
        tile.className = "game-tile";
        tile.dataset.index = String(index);
        tile.dataset.rom = game.rom ?? "";
        tile.tabIndex = 0;
        tile.setAttribute("role", "button");
        tile.setAttribute("aria-label", game.title);

        const img = document.createElement("img");
        img.className = "game-cover";
        img.src = coverPath(game.file);
        img.alt = game.title;

        tile.appendChild(img);
        gameGrid.appendChild(tile);
        visibleTiles.push(tile);

        tile.addEventListener("mouseenter", () => setSelection(index, { viaHover: true }));
        tile.addEventListener("focus", () => setSelection(index));
        tile.addEventListener("click", () => {
          const alreadySelected = selectionIndex === index;
          setSelection(index);
          if (alreadySelected) {
            launchGame(game);
          }
        });
        tile.addEventListener("keydown", (event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            launchGame(game);
          }
        });
      }

      while (gameGrid.children.length < PAGE_SIZE) {
        const filler = document.createElement("div");
        filler.className = "game-tile placeholder";
        filler.setAttribute("aria-hidden", "true");
        gameGrid.appendChild(filler);
      }

      highlightSelection();
      updateNavButtons();

      if (moved) {
        const travel = direction * SLIDE_DISTANCE * -1;
        const gridKeyframes = [
          { transform: `translateY(${travel}px)` },
          { transform: "translateY(0)" }
        ];
        const timing = {
          duration: SLIDE_DURATION,
          easing: "cubic-bezier(0.4, 0.1, 0.2, 1)"
        };
        gameGrid.animate(gridKeyframes, timing);
        if (selector.style.opacity !== "0") {
          const { x, y } = selectorPosition;
          selector.animate(
            [
              { transform: `translate(${x}px, ${y + travel}px)` },
              { transform: `translate(${x}px, ${y}px)` }
            ],
            timing
          );
        }
      }
    }

    function ensureSelectionVisible() {
      const row = Math.floor(selectionIndex / COLUMNS);
      const currentStart = currentRowStart();
      let desiredStart = currentStart;

      if (row > currentStart + ROWS - 1) {
        desiredStart = row - (ROWS - 1);
      } else if (row < currentStart) {
        desiredStart = row;
      }

      const newOffset = clampOffset(desiredStart * COLUMNS);
      if (newOffset !== pageOffset) {
        renderPage(newOffset);
        return true;
      }
      return false;
    }

    function setSelection(index, { viaHover = false } = {}) {
      const clamped = clampIndex(index);
      if (clamped === selectionIndex) {
        if (viaHover) {
          positionSelector(
            visibleTiles.find((tile) => Number(tile.dataset.index) === selectionIndex)
          );
        }
        return;
      }

      selectionIndex = clamped;
      const moved = ensureSelectionVisible();
      if (!moved) {
        highlightSelection();
      }

      if (!viaHover) {
        playSound("nav", 0.3);
      }
    }

    function moveRow(direction) {
      const currentRow = Math.floor(selectionIndex / COLUMNS);
      const targetRow = Math.max(0, Math.min(currentRow + direction, totalRows - 1));
      const column = selectionIndex % COLUMNS;
      const targetIndex = clampIndex(targetRow * COLUMNS + column);
      setSelection(targetIndex);
    }

    function moveSelection(delta) {
      setSelection(selectionIndex + delta);
    }

    function handleKeydown(event) {
      switch (event.key) {
        case "ArrowRight":
          event.preventDefault();
          moveSelection(1);
          break;
        case "ArrowLeft":
          event.preventDefault();
          moveSelection(-1);
          break;
        case "ArrowDown":
          event.preventDefault();
          moveSelection(COLUMNS);
          break;
        case "ArrowUp":
          event.preventDefault();
          moveSelection(-COLUMNS);
          break;
        case "PageDown":
          event.preventDefault();
          moveRow(1);
          break;
        case "PageUp":
          event.preventDefault();
          moveRow(-1);
          break;
        case "Home":
          event.preventDefault();
          setSelection(0);
          break;
        case "Enter":
          event.preventDefault();
          launchGame(games[selectionIndex]);
          break;
        case "End":
          event.preventDefault();
          setSelection(games.length - 1);
          break;
        default:
          break;
      }
    }

    renderPage(pageOffset);

    upButton?.addEventListener("click", () => moveRow(-1));
    downButton?.addEventListener("click", () => moveRow(1));
    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("resize", () => {
      requestAnimationFrame(() => {
        renderPage(pageOffset);
      });
    });

    // Attempt to start background music if autoplay is already permitted
    startBackgroundMusic();
  }

  function launchGame(game) {
    if (!game) return;
    if (!game.rom) {
      playSound("nav", 0.15);
      alert(`ROM for "${game.title}" is missing.`);
      return;
    }

    playSound("slide", 0.4);

    const url = new URL('play.html', window.location.href);
    url.searchParams.set('title', game.title);
    url.searchParams.set('rom', game.rom);
    window.location.href = url.toString();
  }

  document.addEventListener("DOMContentLoaded", initializeLibrary);
})();
