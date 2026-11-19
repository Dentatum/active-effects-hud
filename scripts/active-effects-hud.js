const MODULE_ID = "active-effects-hud";
const SETTING_KEY = "effects";
const STYLE_SETTING_KEY = "tooltipStyle";
const HUD_OPTIONS_SETTING_KEY = "hudOptions";
const HUD_ID = "active-effects-hud-container";
const DEFAULT_ICON = "icons/svg/aura.svg";
const DEFAULT_HUD_OPTIONS = Object.freeze({
  visible: true,
  position: null
});
const DEFAULT_TOOLTIP_STYLE = Object.freeze({
  titleFont: "Signika",
  titleColor: "#e9c98f",
  descriptionFont: "Signika",
  descriptionColor: "#eeeeee",
  backgroundColor: "#191817"
});

const FALLBACK_TRANSLATIONS = {
  en: {"active-effects-hud.Settings.EffectsName":"Active Effects","active-effects-hud.Settings.EffectsHint":"List of effects displayed in the interface.","active-effects-hud.Settings.ConfigureEffectsLabel":"Configure Effects","active-effects-hud.Settings.ConfigureEffectsHint":"Add, edit, and remove effects from the bar.","active-effects-hud.Settings.TooltipStyleName":"Tooltip Style","active-effects-hud.Settings.TooltipStyleHint":"General font and color settings for effect tooltips.","active-effects-hud.Settings.HudOptionsName":"Effects Bar Options","active-effects-hud.Settings.HudOptionsHint":"Visibility and persistent position of the bar.","active-effects-hud.Settings.ModuleOptionsLabel":"Module Options","active-effects-hud.Settings.ModuleOptionsHint":"Configure the bar's visibility, position, and appearance.","active-effects-hud.Common.Effect":"Effect","active-effects-hud.Common.Unnamed":"unnamed","active-effects-hud.Visibility.Everyone":"Everyone","active-effects-hud.Visibility.GMOnly":"GM only","active-effects-hud.Visibility.PlayersOnly":"Players only","active-effects-hud.Visibility.SelectedUsers":"Selected players","active-effects-hud.Tooltip.Visibility":"Visibility: {visibility}","active-effects-hud.HUD.AriaLabel":"Active effects","active-effects-hud.HUD.EffectGroupAria":"{name}: {description}","active-effects-hud.HUD.EffectAria":"{name}: {description}. Counter: {count}. Left-click to increase, right-click to decrease.","active-effects-hud.HUD.EditEffects":"Edit active effects","active-effects-hud.ModuleOptions.WindowTitle":"Active Effects HUD Options","active-effects-hud.ModuleOptions.Heading":"Effects Bar Options","active-effects-hud.ModuleOptions.Intro":"Control the bar's visibility, position, and overall appearance.","active-effects-hud.ModuleOptions.BehaviorHeading":"Bar Behavior","active-effects-hud.ModuleOptions.ShowHud":"Show effects bar","active-effects-hud.ModuleOptions.ResetHudPosition":"Reset bar position","active-effects-hud.ModuleOptions.TitleFont":"Title Font","active-effects-hud.ModuleOptions.TitleColor":"Title RGB Color","active-effects-hud.ModuleOptions.DescriptionFont":"Description Font","active-effects-hud.ModuleOptions.DescriptionColor":"Description RGB Color","active-effects-hud.ModuleOptions.BackgroundColor":"Background RGB Color","active-effects-hud.ModuleOptions.Preview":"PREVIEW","active-effects-hud.ModuleOptions.PreviewTitle":"Blessing of Morr","active-effects-hud.ModuleOptions.PreviewDescription":"The character gains protection against the effects of dark magic.","active-effects-hud.ModuleOptions.PreviewVisibility":"Visibility: Everyone","active-effects-hud.ModuleOptions.ResetStyle":"Reset Defaults","active-effects-hud.ModuleOptions.SaveStyle":"Save Style","active-effects-hud.ModuleOptions.SavedFont":"{font} (saved)","active-effects-hud.EffectsConfig.WindowTitle":"Configure Active Effects","active-effects-hud.EffectsConfig.Heading":"World Effects","active-effects-hud.EffectsConfig.Intro":"Manage the modifiers displayed in the game interface.","active-effects-hud.EffectsConfig.AddEffect":"Add Effect","active-effects-hud.EffectsConfig.SaveChanges":"Save Changes","active-effects-hud.EffectsConfig.EffectLabel":"EFFECT","active-effects-hud.EffectsConfig.RemoveEffect":"Remove Effect","active-effects-hud.EffectsConfig.EffectName":"Effect Name","active-effects-hud.EffectsConfig.EffectNamePlaceholder":"e.g. Blessing of Morr","active-effects-hud.EffectsConfig.IconPath":"Icon (image path)","active-effects-hud.EffectsConfig.Description":"Description","active-effects-hud.EffectsConfig.DescriptionHint":"Basic HTML formatting supported","active-effects-hud.EffectsConfig.DescriptionPlaceholder":"Describe the effect shown when hovering over its icon.","active-effects-hud.EffectsConfig.CounterValue":"Counter Value","active-effects-hud.EffectsConfig.CounterValueHint":"Current/initial effect value (minimum 1)","active-effects-hud.EffectsConfig.Visibility":"Visibility","active-effects-hud.EffectsConfig.UserIds":"User IDs","active-effects-hud.EffectsConfig.UserIdsPlaceholder":"ID1, ID2, ID3","active-effects-hud.EffectsConfig.Browse":"Browse","active-effects-hud.Notifications.SaveHudPositionError":"Could not save the bar position.","active-effects-hud.Notifications.HudPositionReset":"The bar has been returned to its initial position.","active-effects-hud.Notifications.ResetHudPositionError":"Could not reset the bar position.","active-effects-hud.Notifications.SetHudVisibilityError":"Could not change the bar visibility.","active-effects-hud.Notifications.UpdateCounterError":"Could not update the counter. Check the console.","active-effects-hud.Notifications.SelectWorldFont":"Select a font available in this world.","active-effects-hud.Notifications.TooltipStyleSaved":"Tooltip style saved.","active-effects-hud.Notifications.SaveTooltipStyleError":"Could not save the style. Check the console.","active-effects-hud.Notifications.EffectsSaved":"Active effects saved.","active-effects-hud.Notifications.SaveEffectsError":"Could not save the effects. Check the console.","active-effects-hud.Console.ReadHudOptionsError":"Could not read the bar options.","active-effects-hud.Console.SaveHudPositionError":"Could not save the bar position.","active-effects-hud.Console.ResetHudPositionError":"Could not reset the bar position.","active-effects-hud.Console.SetHudVisibilityError":"Could not change the bar visibility.","active-effects-hud.Console.FontConfigError":"Could not query FontConfig.","active-effects-hud.Console.ReadTooltipStyleError":"Could not read the tooltip style.","active-effects-hud.Console.UpdateCounterError":"Could not update the effect counter.","active-effects-hud.Console.ReadEffectsError":"Could not read the saved effects.","active-effects-hud.Console.RenderEffectError":"Could not render effect \"{name}\".","active-effects-hud.Console.SaveTooltipStyleError":"Error while saving tooltip styles.","active-effects-hud.Console.SaveEffectsRenderError":"Effects were saved, but the visual refresh failed.","active-effects-hud.Console.SaveEffectsError":"Error while saving effects.","active-effects-hud.Visibility.AssistantGM":"Assistant GM","active-effects-hud.Visibility.PlayersAll":"Everyone","active-effects-hud.EffectsConfig.SelectedUsers":"Select one or more...","active-effects-hud.Notifications.EffectNameRequired":"Enter a name for every effect before saving.","active-effects-hud.Notifications.SelectAtLeastOneUser":"Select at least one user for this effect.","active-effects-hud.Notifications.ReadOnlyEffects":"You do not have permission to edit effects.","active-effects-hud.Notifications.EffectsSaveRequested":"Changes sent to the GM for saving."},
  es: {"active-effects-hud.Settings.EffectsName":"Efectos activos","active-effects-hud.Settings.EffectsHint":"Lista de efectos mostrados en la interfaz.","active-effects-hud.Settings.ConfigureEffectsLabel":"Configurar efectos","active-effects-hud.Settings.ConfigureEffectsHint":"Añade, edita y elimina los efectos de la barra.","active-effects-hud.Settings.TooltipStyleName":"Estilo del tooltip","active-effects-hud.Settings.TooltipStyleHint":"Tipografía y colores generales de los tooltips de los efectos.","active-effects-hud.Settings.HudOptionsName":"Opciones de la barra de efectos","active-effects-hud.Settings.HudOptionsHint":"Visibilidad y posición persistente de la barra.","active-effects-hud.Settings.ModuleOptionsLabel":"Opciones del módulo","active-effects-hud.Settings.ModuleOptionsHint":"Configura la visibilidad, la posición y el aspecto de la barra.","active-effects-hud.Common.Effect":"Efecto","active-effects-hud.Common.Unnamed":"sin nombre","active-effects-hud.Visibility.Everyone":"Todos","active-effects-hud.Visibility.GMOnly":"Solo GM","active-effects-hud.Visibility.PlayersOnly":"Solo jugadores","active-effects-hud.Visibility.SelectedUsers":"Jugadores seleccionados","active-effects-hud.Tooltip.Visibility":"Visibilidad: {visibility}","active-effects-hud.HUD.AriaLabel":"Efectos activos","active-effects-hud.HUD.EffectGroupAria":"{name}: {description}","active-effects-hud.HUD.EffectAria":"{name}: {description}. Contador: {count}. Clic izquierdo para aumentar, clic derecho para reducir.","active-effects-hud.HUD.EditEffects":"Editar efectos activos","active-effects-hud.ModuleOptions.WindowTitle":"Opciones de Active Effects HUD","active-effects-hud.ModuleOptions.Heading":"Opciones de la barra de efectos","active-effects-hud.ModuleOptions.Intro":"Controla la visualización, la posición y el aspecto global de la barra.","active-effects-hud.ModuleOptions.BehaviorHeading":"Comportamiento de la barra","active-effects-hud.ModuleOptions.ShowHud":"Mostrar barra de efectos","active-effects-hud.ModuleOptions.ResetHudPosition":"Restaurar coordenadas del menú","active-effects-hud.ModuleOptions.TitleFont":"Fuente del título","active-effects-hud.ModuleOptions.TitleColor":"Color RGB del título","active-effects-hud.ModuleOptions.DescriptionFont":"Fuente de la descripción","active-effects-hud.ModuleOptions.DescriptionColor":"Color RGB de la descripción","active-effects-hud.ModuleOptions.BackgroundColor":"Color RGB del fondo","active-effects-hud.ModuleOptions.Preview":"VISTA PREVIA","active-effects-hud.ModuleOptions.PreviewTitle":"Bendición de Morr","active-effects-hud.ModuleOptions.PreviewDescription":"El personaje recibe protección contra los efectos de la magia oscura.","active-effects-hud.ModuleOptions.PreviewVisibility":"Visibilidad: Todos","active-effects-hud.ModuleOptions.ResetStyle":"Restaurar valores","active-effects-hud.ModuleOptions.SaveStyle":"Guardar estilo","active-effects-hud.ModuleOptions.SavedFont":"{font} (guardada)","active-effects-hud.EffectsConfig.WindowTitle":"Configurar efectos activos","active-effects-hud.EffectsConfig.Heading":"Efectos de la partida","active-effects-hud.EffectsConfig.Intro":"Administra los modificadores visibles en la interfaz de juego.","active-effects-hud.EffectsConfig.AddEffect":"Añadir efecto","active-effects-hud.EffectsConfig.SaveChanges":"Guardar cambios","active-effects-hud.EffectsConfig.EffectLabel":"EFECTO","active-effects-hud.EffectsConfig.RemoveEffect":"Eliminar efecto","active-effects-hud.EffectsConfig.EffectName":"Nombre del efecto","active-effects-hud.EffectsConfig.EffectNamePlaceholder":"Ej. Bendición de Morr","active-effects-hud.EffectsConfig.IconPath":"Icono (ruta de imagen)","active-effects-hud.EffectsConfig.Description":"Descripción","active-effects-hud.EffectsConfig.DescriptionHint":"Admite formato HTML sencillo","active-effects-hud.EffectsConfig.DescriptionPlaceholder":"Describe el efecto que aparecerá al pasar el ratón.","active-effects-hud.EffectsConfig.CounterValue":"Valor del contador","active-effects-hud.EffectsConfig.CounterValueHint":"Valor actual/inicial del efecto (mínimo 1)","active-effects-hud.EffectsConfig.Visibility":"Visibilidad","active-effects-hud.EffectsConfig.UserIds":"IDs de usuario","active-effects-hud.EffectsConfig.UserIdsPlaceholder":"ID1, ID2, ID3","active-effects-hud.EffectsConfig.Browse":"Buscar","active-effects-hud.Notifications.SaveHudPositionError":"No se pudo guardar la posición de la barra.","active-effects-hud.Notifications.HudPositionReset":"Se ha restaurado la posición inicial de la barra.","active-effects-hud.Notifications.ResetHudPositionError":"No se pudo restaurar la posición de la barra.","active-effects-hud.Notifications.SetHudVisibilityError":"No se pudo cambiar la visibilidad de la barra.","active-effects-hud.Notifications.UpdateCounterError":"No se pudo actualizar el contador. Consulta la consola.","active-effects-hud.Notifications.SelectWorldFont":"Selecciona una fuente disponible en este mundo.","active-effects-hud.Notifications.TooltipStyleSaved":"Estilo de los tooltips guardado.","active-effects-hud.Notifications.SaveTooltipStyleError":"No se pudo guardar el estilo. Consulta la consola.","active-effects-hud.Notifications.EffectsSaved":"Efectos activos guardados.","active-effects-hud.Notifications.SaveEffectsError":"No se pudieron guardar los efectos. Consulta la consola.","active-effects-hud.Console.ReadHudOptionsError":"No se pudieron leer las opciones de la barra.","active-effects-hud.Console.SaveHudPositionError":"No se pudo guardar la posición de la barra.","active-effects-hud.Console.ResetHudPositionError":"No se pudo restaurar la posición de la barra.","active-effects-hud.Console.SetHudVisibilityError":"No se pudo cambiar la visibilidad de la barra.","active-effects-hud.Console.FontConfigError":"No se pudo consultar FontConfig.","active-effects-hud.Console.ReadTooltipStyleError":"No se pudo leer el estilo del tooltip.","active-effects-hud.Console.UpdateCounterError":"No se pudo actualizar el contador del efecto.","active-effects-hud.Console.ReadEffectsError":"No se pudieron leer los efectos guardados.","active-effects-hud.Console.RenderEffectError":"No se pudo representar el efecto \"{name}\".","active-effects-hud.Console.SaveTooltipStyleError":"Error al guardar el estilo de los tooltips.","active-effects-hud.Console.SaveEffectsRenderError":"Los efectos se guardaron, pero falló la actualización visual.","active-effects-hud.Console.SaveEffectsError":"Error al guardar los efectos.","active-effects-hud.Visibility.AssistantGM":"Asistente del GM","active-effects-hud.Visibility.PlayersAll":"Todos","active-effects-hud.EffectsConfig.SelectedUsers":"Selecciona uno o varios...","active-effects-hud.Notifications.EffectNameRequired":"Debes escribir un nombre para cada efecto antes de guardar.","active-effects-hud.Notifications.SelectAtLeastOneUser":"Selecciona al menos un usuario para este efecto.","active-effects-hud.Notifications.ReadOnlyEffects":"No tienes permisos para modificar efectos.","active-effects-hud.Notifications.EffectsSaveRequested":"Cambios enviados al GM para guardarlos."}
};

function getModuleLanguage() {
  const candidates = [
    game.i18n?.lang,
    (() => {
      try { return game.settings?.get("core", "language"); }
      catch { return null; }
    })(),
    globalThis.navigator?.language
  ];

  for (const candidate of candidates) {
    const language = String(candidate ?? "").toLowerCase().replace("_", "-");
    if (language.startsWith("es")) return "es";
    if (language.startsWith("en")) return "en";
  }
  return "en";
}

function L(key, data = {}) {
  const translationKey = `${MODULE_ID}.${key}`;
  let translated = translationKey;

  try {
    translated = game.i18n?.localize?.(translationKey) ?? translationKey;
  } catch (error) {
    // El diccionario integrado de respaldo se ocupa de esta situación.
  }

  if (!translated || translated === translationKey) {
    const language = getModuleLanguage();
    translated = FALLBACK_TRANSLATIONS[language]?.[translationKey]
      ?? FALLBACK_TRANSLATIONS.en[translationKey]
      ?? translationKey;
  }

  return String(translated).replace(/\{([a-zA-Z0-9_]+)\}/g, (match, name) =>
    Object.hasOwn(data, name) ? String(data[name]) : match
  );
}

let hudRenderQueued = false;

Hooks.once("init", () => {
  game.settings.register(MODULE_ID, SETTING_KEY, {
    name: L("Settings.EffectsName"),
    hint: L("Settings.EffectsHint"),
    scope: "world",
    config: false,
    type: Array,
    default: []
  });

  game.settings.registerMenu(MODULE_ID, "configure", {
    name: `${MODULE_ID}.Settings.EffectsName`,
    label: L("Settings.ConfigureEffectsLabel"),
    hint: L("Settings.ConfigureEffectsHint"),
    icon: "fas fa-wand-magic-sparkles",
    type: ActiveEffectsConfig,
    restricted: true
  });

  game.settings.register(MODULE_ID, STYLE_SETTING_KEY, {
    name: L("Settings.TooltipStyleName"),
    hint: L("Settings.TooltipStyleHint"),
    scope: "world",
    config: false,
    type: Object,
    default: { ...DEFAULT_TOOLTIP_STYLE }
  });

  game.settings.register(MODULE_ID, HUD_OPTIONS_SETTING_KEY, {
    name: L("Settings.HudOptionsName"),
    hint: L("Settings.HudOptionsHint"),
    scope: "world",
    config: false,
    type: Object,
    default: { ...DEFAULT_HUD_OPTIONS }
  });

  game.settings.registerMenu(MODULE_ID, "tooltipStyle", {
    name: `${MODULE_ID}.Settings.HudOptionsName`,
    label: L("Settings.ModuleOptionsLabel"),
    hint: L("Settings.ModuleOptionsHint"),
    icon: "fas fa-sliders",
    type: ActiveEffectsTooltipStyleConfig,
    restricted: true
  });
});

Hooks.once("ready", () => {
  renderHud();

  game.socket.on(`module.${MODULE_ID}`, async payload => {
    if (!payload) return;

    // The GM broadcasts after adding, editing, deleting, or changing a
    // counter. Every client must reread its local cached world setting.
    if (payload.type === "refreshHud") {
      queueHudRender();
      return;
    }

    // Only the GM may process requests that mutate world settings.
    if (!game.user?.isGM) return;

    if (payload.type === "adjustCounter") {
      if (typeof payload.effectId !== "string") return;
      const requester = game.users.get(String(payload.userId ?? ""));
      if (!requester || !canManageEffects(requester)) return;
      const delta = Number(payload.delta);
      if (![1, -1, 10, -10].includes(delta)) return;
      await applyCounterAdjustment(payload.effectId, delta, requester);
      return;
    }

    if (payload.type === "saveVisibleEffects") {
      const requester = game.users.get(String(payload.userId ?? ""));
      if (!requester || requester.isGM || Number(requester.role) !== getAssistantRole()) return;
      if (!Array.isArray(payload.effects)) return;

      const current = structuredClone(game.settings.get(MODULE_ID, SETTING_KEY) ?? []);
      const visibleCurrent = current.filter(effect => canUserSeeEffect(effect, requester));
      const visibleIds = new Set(visibleCurrent.map(effect => effect.id));
      const submitted = payload.effects;
      const submittedIds = new Set(submitted.map(effect => effect?.id).filter(Boolean));

      // Preserve every effect the assistant is not allowed to see/edit.
      const preserved = current.filter(effect => !visibleIds.has(effect.id));
      const accepted = [];

      for (const effect of submitted) {
        if (!effect || typeof effect.name !== "string" || !effect.name.trim()) continue;
        const clean = {
          id: String(effect.id || foundry.utils.randomID()),
          name: String(effect.name).trim(),
          description: String(effect.description ?? ""),
          icon: String(effect.icon || DEFAULT_ICON),
          visibility: ["gm", "assistants", "players", "selected"].includes(effect.visibility) ? effect.visibility : "players",
          userIds: Array.isArray(effect.userIds) ? effect.userIds.map(String) : [],
          count: Math.max(1, Math.trunc(Number(effect.count) || 1))
        };
        // Existing records can only be changed if they were visible to this assistant.
        if (visibleIds.has(clean.id) || !current.some(existing => existing.id === clean.id)) {
          accepted.push(clean);
        }
      }

      // Keep hidden effects in their original slots while applying the
      // assistant's chosen order to the slots occupied by visible effects.
      let acceptedIndex = 0;
      const merged = current.map(effect => {
        if (!visibleIds.has(effect.id)) return effect;
        return accepted[acceptedIndex++] ?? null;
      }).filter(Boolean);
      merged.push(...accepted.slice(acceptedIndex));
      await game.settings.set(MODULE_ID, SETTING_KEY, merged);
      renderHud();
      broadcastHudRefresh();
      return;
    }

    if (payload.type === "moveHud") {
      const left = Number(payload.left);
      const top = Number(payload.top);
      if (!Number.isFinite(left) || !Number.isFinite(top)) return;
      await persistHudPosition(left, top);
    }
  });

  // ApplicationV2 es el sistema de interfaz actual en Foundry v14.
  Hooks.on("renderApplicationV2", (app) => {
    const SceneNavigation = foundry.applications.ui.SceneNavigation;
    if ((SceneNavigation && app instanceof SceneNavigation) || app?.id === "scene-navigation") {
      queueHudRender();
    }
  });

  Hooks.on("collapseSceneNavigation", queueHudRender);
  Hooks.on("updateSetting", setting => {
    if (
      setting?.namespace === MODULE_ID &&
      [SETTING_KEY, HUD_OPTIONS_SETTING_KEY].includes(setting?.key)
    ) {
      queueHudRender();
    }
  });
  Hooks.on("clientSettingChanged", queueHudRender);
  window.addEventListener("resize", positionHud);
});

function queueHudRender() {
  if (hudRenderQueued) return;
  hudRenderQueued = true;
  requestAnimationFrame(() => {
    hudRenderQueued = false;
    renderHud();
  });
}

function getAssistantRole() {
  return Number(CONST.USER_ROLES?.ASSISTANT ?? 3);
}

function canManageEffects(user = game.user) {
  return Boolean(user && Number(user.role) >= getAssistantRole());
}

function canUserSeeEffect(effect, user) {
  if (!user || !effect) return false;
  const role = Number(user.role ?? 0);
  const gmRole = Number(CONST.USER_ROLES?.GAMEMASTER ?? 4);
  const assistantRole = getAssistantRole();

  switch (effect.visibility ?? "players") {
    case "gm":
      return role === gmRole;
    case "assistants":
      return role >= assistantRole;
    case "selected": {
      const ids = Array.isArray(effect.userIds)
        ? effect.userIds
        : String(effect.userIds ?? "").split(",");
      return ids.map(id => String(id).trim()).filter(Boolean).includes(String(user.id));
    }
    case "players":
    case "everyone":
    default:
      return true;
  }
}

function canSeeEffect(effect) {
  return canUserSeeEffect(effect, game.user);
}

function getHudOptions() {
  try {
    const saved = game.settings.get(MODULE_ID, HUD_OPTIONS_SETTING_KEY) ?? {};
    return {
      ...DEFAULT_HUD_OPTIONS,
      ...saved,
      position: saved.position && Number.isFinite(Number(saved.position.left)) && Number.isFinite(Number(saved.position.top))
        ? { left: Number(saved.position.left), top: Number(saved.position.top) }
        : null
    };
  } catch (error) {
    console.warn(`${MODULE_ID} | ${L("Console.ReadHudOptionsError")}`, error);
    return { ...DEFAULT_HUD_OPTIONS };
  }
}

async function persistHudPosition(left, top) {
  const position = {
    left: Math.max(0, Math.round(left)),
    top: Math.max(0, Math.round(top))
  };

  try {
    if (!game.user?.isGM) {
      game.socket.emit(`module.${MODULE_ID}`, {
        type: "moveHud",
        left: position.left,
        top: position.top
      });
      return;
    }

    const options = getHudOptions();
    options.position = position;
    await game.settings.set(MODULE_ID, HUD_OPTIONS_SETTING_KEY, options);
    positionHud();
  } catch (error) {
    console.error(`${MODULE_ID} | ${L("Console.SaveHudPositionError")}`, error);
    ui.notifications.error(L("Notifications.SaveHudPositionError"));
  }
}

async function resetHudPosition() {
  try {
    const options = getHudOptions();
    options.position = null;
    await game.settings.set(MODULE_ID, HUD_OPTIONS_SETTING_KEY, options);
    positionHud();
    ui.notifications.info(L("Notifications.HudPositionReset"));
  } catch (error) {
    console.error(`${MODULE_ID} | ${L("Console.ResetHudPositionError")}`, error);
    ui.notifications.error(L("Notifications.ResetHudPositionError"));
  }
}

async function setHudVisibility(visible) {
  try {
    const options = getHudOptions();
    options.visible = Boolean(visible);
    await game.settings.set(MODULE_ID, HUD_OPTIONS_SETTING_KEY, options);
    const hud = document.getElementById(HUD_ID);
    if (hud) hud.style.display = options.visible ? "" : "none";
  } catch (error) {
    console.error(`${MODULE_ID} | ${L("Console.SetHudVisibilityError")}`, error);
    ui.notifications.error(L("Notifications.SetHudVisibilityError"));
  }
}

function installHudDragHandlers(hud) {
  if (hud.dataset.dragHandlersInstalled === "true") return;
  hud.dataset.dragHandlersInstalled = "true";

  let drag = null;
  let dragged = false;

  hud.addEventListener("pointerdown", event => {
    if (event.button !== 0) return;
    const rect = hud.getBoundingClientRect();
    drag = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originLeft: rect.left,
      originTop: rect.top,
      moved: false
    };
    dragged = false;
  });

  window.addEventListener("pointermove", event => {
    if (!drag || event.pointerId !== drag.pointerId) return;
    const deltaX = event.clientX - drag.startX;
    const deltaY = event.clientY - drag.startY;

    if (!drag.moved && Math.hypot(deltaX, deltaY) < 4) return;

    if (!drag.moved) {
      drag.moved = true;
      hud.classList.add("aeh-dragging");
      hideFloatingTooltip();
    }

    const maxLeft = Math.max(0, window.innerWidth - hud.offsetWidth);
    const maxTop = Math.max(0, window.innerHeight - hud.offsetHeight);
    const left = Math.min(maxLeft, Math.max(0, drag.originLeft + deltaX));
    const top = Math.min(maxTop, Math.max(0, drag.originTop + deltaY));

    hud.style.left = `${Math.round(left)}px`;
    hud.style.top = `${Math.round(top)}px`;
    hud.style.right = "auto";
  });

  const finishDrag = async event => {
    if (!drag || event.pointerId !== drag.pointerId) return;
    const state = drag;
    drag = null;
    hud.classList.remove("aeh-dragging");

    if (state.moved) {
      dragged = true;
      // El click sintético llega después de pointerup en el mismo ciclo de eventos.
      // Armamos el bloqueo antes de guardar las coordenadas en el ajuste de mundo.
      window.setTimeout(() => { dragged = false; }, 0);
      const rect = hud.getBoundingClientRect();
      await persistHudPosition(rect.left, rect.top);
    }
  };

  window.addEventListener("pointerup", finishDrag);
  window.addEventListener("pointercancel", finishDrag);

  // Se consulta desde los controladores de clic de cada icono.
  hud.isBeingDragged = () => Boolean(drag?.moved || dragged);
}

function getHudAnchor() {
  // En Foundry v14 SceneNavigation es una ApplicationV2. Su elemento puede
  // estar disponible en ui.nav o directamente en el DOM con id scene-navigation.
  const candidates = [
    ui.nav?.element,
    document.querySelector("#scene-navigation"),
    document.querySelector('[data-application-id="scene-navigation"]'),
    document.querySelector(".scene-navigation")
  ];

  for (const candidate of candidates) {
    if (!(candidate instanceof HTMLElement)) continue;
    const rect = candidate.getBoundingClientRect();
    // Evita anclar la barra a un contenedor general que ocupe toda la pantalla.
    if (rect.width > 0 && rect.height > 0 && rect.width < window.innerWidth * 0.95 && rect.height < 220) {
      return candidate;
    }
  }
  return null;
}

function getAvailableWorldFonts() {
  const FontConfig = foundry.applications.settings.menus.FontConfig;
  let choices = {};

  try {
    if (typeof FontConfig?.getAvailableFontChoices === "function") {
      choices = FontConfig.getAvailableFontChoices() ?? {};
    }
  } catch (error) {
    console.warn(`${MODULE_ID} | ${L("Console.FontConfigError")}`, error);
  }

  if (!Object.keys(choices).length) {
    choices = Object.fromEntries(
      Object.keys(CONFIG.fontDefinitions ?? {}).map(family => [family, family])
    );
  }

  // Asegura que el selector nunca quede vacío en mundos con una configuración
  // de fuentes mínima o en builds donde FontConfig aún no haya inicializado.
  if (!Object.keys(choices).length) {
    choices = { Signika: "Signika", Arial: "Arial", serif: "Serif", "sans-serif": "Sans-serif" };
  }

  return Object.fromEntries(
    Object.entries(choices).sort(([a], [b]) => a.localeCompare(b, game.i18n?.lang || "en"))
  );
}

function getTooltipStyle() {
  let saved = {};
  try {
    saved = game.settings.get(MODULE_ID, STYLE_SETTING_KEY) ?? {};
  } catch (error) {
    console.warn(`${MODULE_ID} | ${L("Console.ReadTooltipStyleError")}`, error);
  }

  const style = { ...DEFAULT_TOOLTIP_STYLE, ...(saved ?? {}) };
  const fonts = getAvailableWorldFonts();

  // Si una fuente guardada ya no está disponible, se utiliza la fuente por defecto.
  if (!Object.hasOwn(fonts, style.titleFont)) style.titleFont = DEFAULT_TOOLTIP_STYLE.titleFont;
  if (!Object.hasOwn(fonts, style.descriptionFont)) style.descriptionFont = DEFAULT_TOOLTIP_STYLE.descriptionFont;

  const validColor = value => /^#[0-9a-f]{6}$/i.test(String(value ?? ""));
  for (const key of ["titleColor", "descriptionColor", "backgroundColor"]) {
    if (!validColor(style[key])) style[key] = DEFAULT_TOOLTIP_STYLE[key];
  }
  return style;
}

function getFloatingTooltip() {
  let tooltip = document.getElementById("aeh-floating-tooltip");
  if (!tooltip) {
    tooltip = document.createElement("div");
    tooltip.id = "aeh-floating-tooltip";
    tooltip.setAttribute("role", "tooltip");
    document.body.appendChild(tooltip);
  }
  return tooltip;
}

function showFloatingTooltip(item, effect) {
  const hud = document.getElementById(HUD_ID);
  if (hud?.isBeingDragged?.()) return;
  const tooltip = getFloatingTooltip();
  tooltip.replaceChildren();

  const title = document.createElement("strong");
  title.textContent = effect.name || L("Common.Effect");

  const description = document.createElement("div");
  description.className = "aeh-description";
  description.innerHTML = foundry.utils.cleanHTML(String(effect.description ?? ""));

  const visibility = document.createElement("small");
  visibility.className = "aeh-tooltip-visibility";
  const labels = {
    gm: L("Visibility.GMOnly"),
    assistants: L("Visibility.AssistantGM"),
    players: L("Visibility.PlayersAll"),
    everyone: L("Visibility.PlayersAll"),
    selected: L("Visibility.SelectedUsers")
  };
  visibility.textContent = L("Tooltip.Visibility", { visibility: labels[effect.visibility ?? "everyone"] ?? L("Visibility.Everyone") });

  const tooltipStyle = getTooltipStyle();
  title.style.fontFamily = JSON.stringify(tooltipStyle.titleFont);
  title.style.color = tooltipStyle.titleColor;
  description.style.fontFamily = JSON.stringify(tooltipStyle.descriptionFont);
  description.style.color = tooltipStyle.descriptionColor;
  tooltip.style.backgroundColor = tooltipStyle.backgroundColor;

  tooltip.append(title, description, visibility);
  tooltip.style.display = "block";
  tooltip.style.visibility = "hidden";

  const iconRect = item.getBoundingClientRect();
  const tipRect = tooltip.getBoundingClientRect();
  const margin = 8;
  const gap = 7;
  // Alinea el borde izquierdo del tooltip con el borde izquierdo del icono.
  // Solo lo desplaza si se saldría del viewport por el lado derecho o izquierdo.
  let left = iconRect.left;
  left = Math.max(margin, Math.min(left, window.innerWidth - tipRect.width - margin));
  let top = iconRect.bottom + gap;
  if (top + tipRect.height > window.innerHeight - margin) top = iconRect.top - tipRect.height - gap;
  top = Math.max(margin, Math.min(top, window.innerHeight - tipRect.height - margin));
  tooltip.style.left = `${Math.round(left)}px`;
  tooltip.style.top = `${Math.round(top)}px`;
  tooltip.style.visibility = "visible";
}

function hideFloatingTooltip() {
  const tooltip = document.getElementById("aeh-floating-tooltip");
  if (tooltip) tooltip.style.display = "none";
}

function broadcastHudRefresh() {
  // World settings are persisted by the GM, but already-connected clients do
  // not reliably refresh their cached setting value from that write alone.
  // Broadcast a lightweight invalidation so every client rereads its setting.
  game.socket.emit(`module.${MODULE_ID}`, { type: "refreshHud" });
}

async function applyCounterAdjustment(effectId, delta, requester = game.user) {
  // Solo el GM escribe los ajustes compartidos. El solicitante debe ser GM
  // o Asistente del GM y tener permiso para ver el efecto concreto.
  if (!game.user?.isGM || !requester || !canManageEffects(requester)) return;

  try {
    const effects = structuredClone(game.settings.get(MODULE_ID, SETTING_KEY) ?? []);
    const index = effects.findIndex(effect => effect?.id === effectId);
    if (index < 0 || !canUserSeeEffect(effects[index], requester)) return;

    const current = Math.max(1, Math.trunc(Number(effects[index].count) || 1));

    if (delta < 0 && current === 1) {
      // Al intentar reducir desde 1, el efecto desaparece de la partida.
      effects.splice(index, 1);
    } else {
      effects[index].count = Math.max(1, current + delta);
    }

    await game.settings.set(MODULE_ID, SETTING_KEY, effects);
    renderHud();
    broadcastHudRefresh();
  } catch (error) {
    console.error(`${MODULE_ID} | ${L("Console.UpdateCounterError")}`, error);
    ui.notifications.error(L("Notifications.UpdateCounterError"));
  }
}

function adjustEffectCounter(effectId, delta) {
  if (!effectId || !canManageEffects()) return;

  if (game.user?.isGM) {
    void applyCounterAdjustment(effectId, delta);
    return;
  }

  // Los ajustes world solo los escribe el GM. Los jugadores solicitan el
  // cambio por el canal del módulo y el GM lo persiste para toda la partida.
  game.socket.emit(`module.${MODULE_ID}`, {
    type: "adjustCounter",
    userId: game.user.id,
    effectId,
    delta
  });
}

function renderHud() {
  if (!game.user || !game.settings) return;

  let effects = [];
  try {
    effects = game.settings.get(MODULE_ID, SETTING_KEY) ?? [];
  } catch (error) {
    console.error(`${MODULE_ID} | ${L("Console.ReadEffectsError")}`, error);
  }

  if (!Array.isArray(effects)) effects = [];
  effects = effects.filter(effect => effect && canSeeEffect(effect));

  let hud = document.getElementById(HUD_ID);
  if (!hud) {
    hud = document.createElement("section");
    hud.id = HUD_ID;
    hud.className = "active-effects-hud";
    hud.setAttribute("aria-label", L("HUD.AriaLabel"));
    document.body.appendChild(hud);
  }

  const hudOptions = getHudOptions();
  hud.style.display = hudOptions.visible ? "" : "none";
  hideFloatingTooltip();
  installHudDragHandlers(hud);
  hud.replaceChildren();

  for (const effect of effects) {
    try {
    const item = document.createElement("div");
    item.className = "aeh-effect";
    item.tabIndex = 0;
    item.setAttribute("role", "group");
    item.setAttribute("aria-label", L("HUD.EffectGroupAria", { name: effect.name || L("Common.Effect"), description: effect.description || "" }));

    const img = document.createElement("img");
    img.src = effect.icon || DEFAULT_ICON;
    img.alt = "";
    img.loading = "lazy";
    img.draggable = false;
    img.onerror = () => {
      img.onerror = null;
      img.src = DEFAULT_ICON;
    };

    item.append(img);

    const count = Math.max(1, Math.trunc(Number(effect.count) || 1));
    item.setAttribute(
      "aria-label",
      L("HUD.EffectAria", { name: effect.name || L("Common.Effect"), description: effect.description || "", count })
    );

    if (count > 1) {
      const counter = document.createElement("span");
      counter.className = "aeh-counter";
      counter.textContent = String(count);
      counter.setAttribute("aria-hidden", "true");
      item.append(counter);
    }

    if (canManageEffects()) {
      item.classList.add("aeh-editable-effect");
      item.addEventListener("click", event => {
        if (event.button !== 0) return;
        if (hud.isBeingDragged?.()) {
          event.preventDefault();
          event.stopImmediatePropagation();
          return;
        }
        event.preventDefault();
        adjustEffectCounter(effect.id, event.shiftKey ? 10 : 1);
      });
      item.addEventListener("contextmenu", event => {
        event.preventDefault();
        adjustEffectCounter(effect.id, event.shiftKey ? -10 : -1);
      });
    } else {
      item.classList.add("aeh-readonly-effect");
      item.removeAttribute("tabindex");
    }

    // Tooltip global independiente del HUD desplazable.
    item.addEventListener("pointerenter", () => showFloatingTooltip(item, effect));
    item.addEventListener("pointerleave", hideFloatingTooltip);
    item.addEventListener("focus", () => showFloatingTooltip(item, effect));
    item.addEventListener("blur", hideFloatingTooltip);

    hud.append(item);
    } catch (error) {
      console.error(`${MODULE_ID} | ${L("Console.RenderEffectError", { name: effect.name ?? L("Common.Unnamed") })}`, error);
    }
  }

  // El botón de edición solo aparece para el GM, al final de la fila.
  if (game.user.isGM) {
    const addButton = document.createElement("button");
    addButton.type = "button";
    addButton.className = "aeh-add-effect";
    addButton.title = L("HUD.EditEffects");
    addButton.setAttribute("aria-label", L("HUD.EditEffects"));
    addButton.innerHTML = '<i class="fa-solid fa-pen-to-square" aria-hidden="true"></i>';
    addButton.addEventListener("click", event => {
      if (hud.isBeingDragged?.()) {
        event.preventDefault();
        event.stopImmediatePropagation();
        return;
      }
      new ActiveEffectsConfig().render(true);
    });
    hud.append(addButton);
  }

  hud.classList.toggle("aeh-empty", effects.length === 0 && !game.user.isGM);
  positionHud();
}

function positionHud() {
  const hud = document.getElementById(HUD_ID);
  if (!hud) return;

  const options = getHudOptions();
  if (options.position) {
    const maxLeft = Math.max(0, window.innerWidth - hud.offsetWidth);
    const maxTop = Math.max(0, window.innerHeight - hud.offsetHeight);
    const left = Math.min(maxLeft, Math.max(0, options.position.left));
    const top = Math.min(maxTop, Math.max(0, options.position.top));
    hud.style.left = `${Math.round(left)}px`;
    hud.style.top = `${Math.round(top)}px`;
    hud.style.right = "auto";
    return;
  }

  const anchor = getHudAnchor();
  if (anchor) {
    const rect = anchor.getBoundingClientRect();
    // Posición inicial original: debajo de Scene Navigation.
    hud.style.top = `${Math.max(8, Math.round(rect.bottom + 8))}px`;
    hud.style.left = `${Math.max(104, Math.round(rect.left))}px`;
  } else {
    hud.style.top = "104px";
    hud.style.left = "128px";
  }
}

class ActiveEffectsTooltipStyleConfig extends foundry.applications.api.ApplicationV2 {
  static DEFAULT_OPTIONS = foundry.utils.mergeObject(super.DEFAULT_OPTIONS, {
    id: "active-effects-hud-tooltip-style",
    classes: ["active-effects-hud-config", "active-effects-hud-style-config"],
    window: {
      title: L("ModuleOptions.WindowTitle"),
      icon: "fa-solid fa-sliders",
      resizable: true
    },
    position: {
      width: 610,
      height: "auto"
    }
  }, { inplace: false });

  async _renderHTML() {
    const root = document.createElement("div");
    root.className = "aeh-config aeh-style-config";

    const header = document.createElement("header");
    header.className = "aeh-config-intro";
    header.innerHTML = `
      <div class="aeh-config-mark"><i class="fa-solid fa-sliders"></i></div>
      <div>
        <h2>${L("ModuleOptions.Heading")}</h2>
        <p>${L("ModuleOptions.Intro")}</p>
      </div>`;
    root.append(header);

    const hudOptions = getHudOptions();
    const generalSection = document.createElement("section");
    generalSection.className = "aeh-hud-general-options";

    const generalHeading = document.createElement("h3");
    generalHeading.textContent = L("ModuleOptions.BehaviorHeading");
    generalSection.append(generalHeading);

    const visibilityLabel = document.createElement("label");
    visibilityLabel.className = "aeh-hud-visibility-option";
    const visibilityCheckbox = document.createElement("input");
    visibilityCheckbox.type = "checkbox";
    visibilityCheckbox.name = "showHud";
    visibilityCheckbox.checked = hudOptions.visible !== false;
    const visibilityText = document.createElement("span");
    visibilityText.textContent = L("ModuleOptions.ShowHud");
    visibilityLabel.append(visibilityCheckbox, visibilityText);

    visibilityCheckbox.addEventListener("change", () => {
      void setHudVisibility(visibilityCheckbox.checked);
    });

    const resetPosition = document.createElement("button");
    resetPosition.type = "button";
    resetPosition.className = "aeh-button aeh-button-secondary aeh-reset-hud-position";
    resetPosition.innerHTML = `<i class="fa-solid fa-arrows-to-dot"></i><span>${L("ModuleOptions.ResetHudPosition")}</span>`;
    resetPosition.addEventListener("click", () => {
      void resetHudPosition();
    });

    generalSection.append(visibilityLabel, resetPosition);
    root.append(generalSection);

    const style = getTooltipStyle();
    const fonts = getAvailableWorldFonts();

    const section = document.createElement("section");
    section.className = "aeh-style-fields";

    section.append(
      this._fontField(L("ModuleOptions.TitleFont"), "titleFont", style.titleFont, fonts),
      this._colorField(L("ModuleOptions.TitleColor"), "titleColor", style.titleColor),
      this._fontField(L("ModuleOptions.DescriptionFont"), "descriptionFont", style.descriptionFont, fonts),
      this._colorField(L("ModuleOptions.DescriptionColor"), "descriptionColor", style.descriptionColor),
      this._colorField(L("ModuleOptions.BackgroundColor"), "backgroundColor", style.backgroundColor)
    );
    root.append(section);

    const preview = document.createElement("div");
    preview.className = "aeh-style-preview";
    preview.innerHTML = `
      <span class="aeh-style-preview-label">${L("ModuleOptions.Preview")}</span>
      <div class="aeh-style-preview-tooltip">
        <strong class="aeh-preview-title">${L("ModuleOptions.PreviewTitle")}</strong>
        <div class="aeh-preview-description">${L("ModuleOptions.PreviewDescription")}</div>
        <small>${L("ModuleOptions.PreviewVisibility")}</small>
      </div>`;
    root.append(preview);

    const updatePreview = () => {
      const titleFont = section.querySelector('[name="titleFont"]').value;
      const titleColor = section.querySelector('[name="titleColor"]').value;
      const descriptionFont = section.querySelector('[name="descriptionFont"]').value;
      const descriptionColor = section.querySelector('[name="descriptionColor"]').value;
      const backgroundColor = section.querySelector('[name="backgroundColor"]').value;

      const previewTooltip = preview.querySelector(".aeh-style-preview-tooltip");
      const previewTitle = preview.querySelector(".aeh-preview-title");
      const previewDescription = preview.querySelector(".aeh-preview-description");
      previewTooltip.style.backgroundColor = backgroundColor;
      previewTitle.style.fontFamily = JSON.stringify(titleFont);
      previewTitle.style.color = titleColor;
      previewDescription.style.fontFamily = JSON.stringify(descriptionFont);
      previewDescription.style.color = descriptionColor;
    };

    section.addEventListener("input", updatePreview);
    section.addEventListener("change", updatePreview);
    updatePreview();

    const actions = document.createElement("div");
    actions.className = "aeh-config-actions";
    const reset = document.createElement("button");
    reset.type = "button";
    reset.className = "aeh-button aeh-button-secondary";
    reset.innerHTML = `<i class="fa-solid fa-rotate-left"></i><span>${L("ModuleOptions.ResetStyle")}</span>`;
    reset.addEventListener("click", () => {
      section.querySelector('[name="titleFont"]').value = DEFAULT_TOOLTIP_STYLE.titleFont;
      section.querySelector('[name="titleColor"]').value = DEFAULT_TOOLTIP_STYLE.titleColor;
      section.querySelector('[name="descriptionFont"]').value = DEFAULT_TOOLTIP_STYLE.descriptionFont;
      section.querySelector('[name="descriptionColor"]').value = DEFAULT_TOOLTIP_STYLE.descriptionColor;
      section.querySelector('[name="backgroundColor"]').value = DEFAULT_TOOLTIP_STYLE.backgroundColor;
      updatePreview();
    });

    const save = document.createElement("button");
    save.type = "button";
    save.className = "aeh-button aeh-button-primary";
    save.innerHTML = `<i class="fa-solid fa-floppy-disk"></i><span>${L("ModuleOptions.SaveStyle")}</span>`;
    save.addEventListener("click", () => this._save(section));

    actions.append(reset, save);
    root.append(actions);
    return root;
  }

  _fontField(labelText, name, value, fonts) {
    const field = document.createElement("label");
    field.className = "aeh-field";
    const caption = document.createElement("span");
    caption.textContent = labelText;

    const select = document.createElement("select");
    select.name = name;

    const entries = Object.entries(fonts);
    if (value && !Object.hasOwn(fonts, value)) entries.unshift([value, L("ModuleOptions.SavedFont", { font: value })]);
    for (const [family, label] of entries) {
      const option = document.createElement("option");
      option.value = family;
      option.textContent = label;
      option.style.fontFamily = JSON.stringify(family);
      option.selected = family === value;
      select.append(option);
    }
    field.append(caption, select);
    return field;
  }

  _colorField(labelText, name, value) {
    const field = document.createElement("label");
    field.className = "aeh-field aeh-color-field";
    const caption = document.createElement("span");
    caption.textContent = labelText;

    const input = document.createElement("input");
    input.type = "color";
    input.name = name;
    input.value = value;

    const valueText = document.createElement("code");
    valueText.className = "aeh-color-value";
    valueText.textContent = value.toUpperCase();
    input.addEventListener("input", () => {
      valueText.textContent = input.value.toUpperCase();
    });

    field.append(caption, input, valueText);
    return field;
  }

  async _save(section) {
    const style = {
      titleFont: section.querySelector('[name="titleFont"]').value,
      titleColor: section.querySelector('[name="titleColor"]').value,
      descriptionFont: section.querySelector('[name="descriptionFont"]').value,
      descriptionColor: section.querySelector('[name="descriptionColor"]').value,
      backgroundColor: section.querySelector('[name="backgroundColor"]').value
    };

    const fonts = getAvailableWorldFonts();
    if (!Object.hasOwn(fonts, style.titleFont) || !Object.hasOwn(fonts, style.descriptionFont)) {
      ui.notifications.error(L("Notifications.SelectWorldFont"));
      return;
    }

    try {
      await game.settings.set(MODULE_ID, STYLE_SETTING_KEY, style);
      hideFloatingTooltip();
      ui.notifications.info(L("Notifications.TooltipStyleSaved"));
      await this.close();
    } catch (error) {
      console.error(`${MODULE_ID} | ${L("Console.SaveTooltipStyleError")}`, error);
      ui.notifications.error(L("Notifications.SaveTooltipStyleError"));
    }
  }

  _replaceHTML(result, content) {
    content.replaceChildren(result);
  }
}

class ActiveEffectsConfig extends foundry.applications.api.ApplicationV2 {
  static DEFAULT_OPTIONS = foundry.utils.mergeObject(super.DEFAULT_OPTIONS, {
    id: "active-effects-hud-config",
    classes: ["active-effects-hud-config"],
    window: {
      title: L("EffectsConfig.WindowTitle"),
      icon: "fa-solid fa-wand-magic-sparkles",
      resizable: true
    },
    position: {
      width: 760,
      height: "auto"
    }
  }, { inplace: false });

  async _renderHTML() {
    const root = document.createElement("div");
    root.className = "aeh-config";

    // Control de foco explícito: incluye todos los campos y botones de todas
    // las filas, además de Añadir y Guardar, respetando el orden del DOM.
    root.addEventListener("keydown", event => {
      if (event.key !== "Tab") return;

      const focusable = [...root.querySelectorAll(
        'button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )].filter(element => element.getClientRects().length > 0 && element.getAttribute("aria-hidden") !== "true");

      if (!focusable.length) return;
      const currentIndex = focusable.indexOf(document.activeElement);
      let nextIndex;

      if (currentIndex < 0) {
        nextIndex = event.shiftKey ? focusable.length - 1 : 0;
      } else if (event.shiftKey) {
        nextIndex = (currentIndex - 1 + focusable.length) % focusable.length;
      } else {
        nextIndex = (currentIndex + 1) % focusable.length;
      }

      event.preventDefault();
      focusable[nextIndex].focus();
    });

    const list = document.createElement("div");
    list.className = "aeh-config-list";
    const allEffects = game.settings.get(MODULE_ID, SETTING_KEY) ?? [];
    const effects = game.user?.isGM
      ? allEffects
      : allEffects.filter(effect => canSeeEffect(effect));
    for (const effect of effects) list.append(this._createEffectRow(effect));

    // Reorder rows with native drag-and-drop. The DOM order is the saved order.
    let draggedRow = null;
    list.addEventListener("dragstart", event => {
      const handle = event.target.closest(".aeh-reorder-row");
      if (!handle) { event.preventDefault(); return; }
      draggedRow = handle.closest(".aeh-config-row");
      if (!draggedRow) { event.preventDefault(); return; }
      draggedRow.classList.add("aeh-row-dragging");
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", draggedRow.dataset.effectId || "new-effect");
    });
    list.addEventListener("dragover", event => {
      if (!draggedRow) return;
      event.preventDefault();
      const target = event.target.closest(".aeh-config-row");
      if (!target || target === draggedRow || target.parentElement !== list) return;
      const bounds = target.getBoundingClientRect();
      const insertAfter = event.clientY > bounds.top + bounds.height / 2;
      list.insertBefore(draggedRow, insertAfter ? target.nextSibling : target);
    });
    list.addEventListener("drop", event => {
      if (!draggedRow) return;
      event.preventDefault();
    });
    list.addEventListener("dragend", () => {
      draggedRow?.classList.remove("aeh-row-dragging");
      draggedRow = null;
    });
    root.append(list);

    const actions = document.createElement("div");
    actions.className = "aeh-config-actions";
    const add = document.createElement("button");
    add.type = "button";
    add.className = "aeh-button aeh-button-secondary aeh-add-row";
    add.innerHTML = `<i class="fa-solid fa-plus"></i><span>${L("EffectsConfig.AddEffect")}</span>`;
    add.addEventListener("click", () => {
      const row = this._createEffectRow({
        name: "",
        description: "",
        icon: DEFAULT_ICON,
        visibility: "players",
        userIds: [],
        count: 1
      });
      list.append(row);
      row.querySelector('[name="name"]')?.focus();
    });

    const save = document.createElement("button");
    save.type = "button";
    save.className = "aeh-button aeh-button-primary";
    save.innerHTML = `<i class="fa-solid fa-floppy-disk"></i><span>${L("EffectsConfig.SaveChanges")}</span>`;
    save.addEventListener("click", () => this._save(list));

    actions.append(add, save);
    root.append(actions);

    return root;
  }

  _createEffectRow(effect = {}) {
    const row = document.createElement("article");
    row.className = "aeh-config-row";
    row.dataset.effectId = effect.id ?? "";

    const top = document.createElement("div");
    top.className = "aeh-row-top";
    const heading = document.createElement("div");
    heading.className = "aeh-row-heading";
    heading.innerHTML = `<span class="aeh-row-icon"><i class="fa-solid fa-bolt"></i></span><span>${L("EffectsConfig.EffectLabel")}</span>`;
    const reorder = document.createElement("button");
    reorder.type = "button";
    reorder.className = "aeh-icon-button aeh-reorder-row";
    reorder.draggable = true;
    reorder.title = L("EffectsConfig.ReorderEffect");
    reorder.setAttribute("aria-label", L("EffectsConfig.ReorderEffect"));
    reorder.innerHTML = '<i class="fa-solid fa-grip-vertical"></i>';
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "aeh-icon-button aeh-remove-row";
    remove.title = L("EffectsConfig.RemoveEffect");
    remove.innerHTML = '<i class="fa-solid fa-trash"></i>';
    remove.addEventListener("click", () => row.remove());
    top.append(heading, reorder);

    const grid = document.createElement("div");
    grid.className = "aeh-fields";

    grid.append(
      this._field(L("EffectsConfig.EffectName"), "name", effect.name ?? "", "text", L("EffectsConfig.EffectNamePlaceholder")),
      this._field(L("EffectsConfig.IconPath"), "icon", effect.icon ?? DEFAULT_ICON, "text", "icons/svg/aura.svg")
    );

    const descriptionField = document.createElement("label");
    descriptionField.className = "aeh-field aeh-field-full";
    descriptionField.innerHTML = `<span>${L("EffectsConfig.Description")} <small>${L("EffectsConfig.DescriptionHint")}</small></span>`;
    const textarea = document.createElement("textarea");
    textarea.name = "description";
    textarea.rows = 3;
    textarea.placeholder = L("EffectsConfig.DescriptionPlaceholder");
    textarea.value = effect.description ?? "";
    descriptionField.append(textarea);
    grid.append(descriptionField);

    const countField = this._field(
      L("EffectsConfig.CounterValue"),
      "count",
      Math.max(1, Math.trunc(Number(effect.count) || 1)),
      "number",
      "1"
    );
    const countInput = countField.querySelector('[name="count"]');
    countInput.min = "1";
    countInput.step = "1";
    countField.querySelector("span").innerHTML =
      `${L("EffectsConfig.CounterValue")} <small>${L("EffectsConfig.CounterValueHint")}</small>`;
    grid.append(countField);

    const visibilityField = document.createElement("label");
    visibilityField.className = "aeh-field";
    visibilityField.innerHTML = `<span>${L("EffectsConfig.Visibility")}</span>`;
    const select = document.createElement("select");
    select.name = "visibility";
    const savedVisibility = effect.visibility === "everyone" ? "players" : (effect.visibility ?? "players");
    for (const [value, label] of [
      ["gm", L("Visibility.GMOnly")],
      ["assistants", L("Visibility.AssistantGM")],
      ["players", L("Visibility.PlayersAll")],
      ["selected", L("Visibility.SelectedUsers")]
    ]) {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = label;
      option.selected = savedVisibility === value;
      select.append(option);
    }
    visibilityField.append(select);
    grid.append(visibilityField);

    const usersField = document.createElement("label");
    usersField.className = "aeh-field aeh-field-full aeh-selected-users";
    usersField.hidden = savedVisibility !== "selected";
    const usersCaption = document.createElement("span");
    usersCaption.textContent = L("EffectsConfig.SelectedUsers");
    const usersSelect = document.createElement("select");
    usersSelect.name = "userIds";
    usersSelect.multiple = true;
    usersSelect.size = Math.min(6, Math.max(3, game.users.size || 3));
    usersSelect.setAttribute("aria-label", L("EffectsConfig.SelectedUsers"));
    const selectedIds = new Set(
      (Array.isArray(effect.userIds) ? effect.userIds : String(effect.userIds ?? "").split(","))
        .map(id => String(id).trim()).filter(Boolean)
    );
    for (const user of game.users) {
      const option = document.createElement("option");
      option.value = user.id;
      option.textContent = user.name;
      option.selected = selectedIds.has(user.id);
      usersSelect.append(option);
    }
    usersField.append(usersCaption, usersSelect);
    grid.append(usersField);

    select.addEventListener("change", () => {
      usersField.hidden = select.value !== "selected";
    });

    const iconBrowse = document.createElement("button");
    iconBrowse.type = "button";
    iconBrowse.className = "aeh-button aeh-button-compact";
    iconBrowse.innerHTML = `<i class="fa-regular fa-folder-open"></i><span>${L("EffectsConfig.Browse")}</span>`;
    iconBrowse.addEventListener("click", () => {
      const input = row.querySelector('[name="icon"]');
      const picker = new FilePicker({
        type: "image",
        current: input.value,
        callback: path => { input.value = path; }
      });
      picker.render(true);
    });
    const iconInput = grid.querySelector('[name="icon"]');
    iconInput.parentElement.append(iconBrowse);

    // Se coloca el botón de borrar después de los campos en el orden del DOM,
    // para que Tab recorra primero los datos y después las acciones de la fila.
    row.append(top, grid, remove);
    return row;
  }

  _field(labelText, name, value, type = "text", placeholder = "") {
    const label = document.createElement("label");
    label.className = "aeh-field";
    const caption = document.createElement("span");
    caption.textContent = labelText;
    const input = document.createElement("input");
    input.type = type;
    input.name = name;
    input.value = value;
    input.placeholder = placeholder;
    label.append(caption, input);
    return label;
  }

  async _save(list) {
    const effects = [];
    const rows = [...list.querySelectorAll(".aeh-config-row")];

    for (const row of rows) {
      const read = name => row.querySelector(`[name="${name}"]`)?.value?.trim() ?? "";
      const nameInput = row.querySelector('[name="name"]');
      const name = read("name");

      // Every configured row must have a name. Do not silently discard it:
      // that made users think their changes had been saved when they had not.
      if (!name) {
        ui.notifications.warn(L("Notifications.EffectNameRequired"));
        nameInput?.focus();
        nameInput?.scrollIntoView({ behavior: "smooth", block: "center" });
        nameInput?.setAttribute("aria-invalid", "true");
        return;
      }
      nameInput?.removeAttribute("aria-invalid");

      const parsedCount = Number.parseInt(read("count"), 10);
      const count = Number.isFinite(parsedCount) ? Math.max(1, parsedCount) : 1;
      const visibility = read("visibility") || "players";
      const userIds = [...(row.querySelector('[name="userIds"]')?.selectedOptions ?? [])]
        .map(option => option.value);

      if (visibility === "selected" && userIds.length === 0) {
        ui.notifications.warn(L("Notifications.SelectAtLeastOneUser"));
        const userSelect = row.querySelector('[name="userIds"]');
        userSelect?.focus();
        userSelect?.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }

      effects.push({
        id: row.dataset.effectId || foundry.utils.randomID(),
        name,
        description: row.querySelector('[name="description"]')?.value ?? "",
        icon: read("icon") || DEFAULT_ICON,
        visibility,
        userIds,
        count
      });
    }

    try {
      if (!game.user?.isGM) {
        if (!canManageEffects()) {
          ui.notifications.warn(L("Notifications.ReadOnlyEffects"));
          return;
        }
        game.socket.emit(`module.${MODULE_ID}`, {
          type: "saveVisibleEffects",
          userId: game.user.id,
          effects
        });
        ui.notifications.info(L("Notifications.EffectsSaveRequested"));
        await this.close();
        return;
      }

      await game.settings.set(MODULE_ID, SETTING_KEY, effects);
      try {
        renderHud();
        broadcastHudRefresh();
      } catch (renderError) {
        console.error(`${MODULE_ID} | ${L("Console.SaveEffectsRenderError")}`, renderError);
      }
      ui.notifications.info(L("Notifications.EffectsSaved"));
      await this.close();
    } catch (error) {
      console.error(`${MODULE_ID} | ${L("Console.SaveEffectsError")}`, error);
      ui.notifications.error(L("Notifications.SaveEffectsError"));
    }
  }

  _replaceHTML(result, content) {
    content.replaceChildren(result);
  }
}
