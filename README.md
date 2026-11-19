# Active Effects HUD

**Active Effects HUD** is a configurable effects bar for **Foundry Virtual Tabletop 14**.

The module displays a horizontal row of effect icons below Scene Navigation. It is intended for game-wide modifiers, conditions, blessings, penalties, temporary rules, or any other effects the group needs to keep visible during play.

Each effect can have its own icon, name, description, counter, and visibility rules. The Game Master and Assistant GMs can manage effects according to their permissions, while other players see the effects they are allowed to view.

## Features

### Effects bar

- Displays configured effects in a floating, repositionable horizontal bar.
- Shows each effect as an icon.
- Can be shown or hidden through the module options.

### Counters

Each effect has its own saved counter.

| Mouse input | Result |
| --- | --- |
| Left-click | Increase by 1 |
| Shift + left-click | Increase by 10 |
| Right-click | Decrease by 1 |
| Shift + right-click | Decrease by 10 |

Counters cannot be reduced below 1. If a decrease is attempted while the counter is already at 1, the effect is removed.

The counter badge is only displayed when the value is greater than 1.

### Reordering effects

Effects can be reordered in the configuration window by dragging the grip handle on a row and dropping it in the desired position.

The order shown in the editor is the order used by the HUD. The saved order is shared with connected clients. When an Assistant GM reorders effects, effects outside that user's editing permissions are retained in their relative positions.

### Per-effect visibility

Each effect has one of four visibility settings:

- **GM only** – visible to the GM.
- **Assistant GM** – visible to the GM and Assistant GMs.
- **Everyone** – visible to all users.
- **Selected players** – visible only to the selected users.

When **Selected players** is chosen, select one or more users from the world user list. At least one user must be selected before the effect can be saved.

Visibility controls what the module displays in the HUD. They should not be treated as a security boundary for secret information: world settings are distributed to clients, and users with sufficient technical access may be able to inspect client-side data.

## Permissions

The module distinguishes between managing effects and viewing them.

| User role | View effects | Edit effects | Change counters |
| --- | --- | --- | --- |
| GM | According to visibility settings; can manage all effects | All effects | Yes |
| Assistant GM | According to visibility settings | Effects they are allowed to see | Effects they are allowed to see |
| Trusted Player | According to visibility settings | No | No |
| Player | According to visibility settings | No | No |

The GM is the authority for saving shared effect data. Assistant GM changes are sent to the GM for processing. When an Assistant GM saves their visible effects, the GM retains effects that the Assistant GM is not allowed to see or edit.

Players and Trusted Players have read-only access: they can see permitted effects but cannot open the effect editor or change counters.

## Manual Installation

1. Download the module package.
2. Extract the `active-effects-hud` folder into Foundry's `Data/modules/` directory.
3. Restart Foundry VTT, or return to the setup screen and refresh the module list.
4. Open the world and enable **Active Effects HUD** in **Manage Modules**.
5. If the module was updated, perform a hard refresh in the browser (`Ctrl + F5`) to clear cached JavaScript and styles.