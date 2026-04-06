# NYCU LIFE UI — Figma Node Reference

Programmatic access to the design source of truth via Figma MCP or REST API.

## File Info

| Property | Value |
|----------|-------|
| File Key | `eshYmSn9jeEEti38tO1GGU` |
| File Name | NYCU-LIFE-UI-Style-Guidelines |
| URL | https://www.figma.com/design/eshYmSn9jeEEti38tO1GGU/NYCU-LIFE-UI-Style-Guidelines?node-id=2635-102&m=dev |

## Section Node IDs

Use these IDs with `get_design_context` or `get_screenshot` (Figma MCP), or the Figma REST API (`GET /v1/files/:fileKey/nodes?ids=:nodeId`).

| Section | Node ID | Description |
|---------|---------|-------------|
| Full page | `2635:102` | Complete UI Style Guidelines |
| 01. Light Colors | `623:1293` | Light mode color palette |
| 02. Dark Colors | `2614:165` | Dark mode color palette |
| 03. Color Contrast | `2604:230` | Light and dark mode WCAG contrast pairings |
| 04. Typography | `2628:44` | Font families, type scale, text color rules |
| 05. Grid System | `2602:397` | 12-column grid, page dimensions |
| 06. Buttons | `623:835` | Button variants, sizes, states, padding rules |
| 07. Component (Spacing & Radius) | `2602:735` | Border radius scale, spacing system |
| 08. Shadow and Material | `2602:739` | Shadow spec, frosted/liquid glass effects |
| 09. Iconography | `623:1185` | Icon sizing, margins, Material Symbols source |

## Usage Examples

### Figma MCP (Claude Code / Cursor)

```
get_screenshot(fileKey: "eshYmSn9jeEEti38tO1GGU", nodeId: "623:1293")
get_design_context(fileKey: "eshYmSn9jeEEti38tO1GGU", nodeId: "623:835")
```

### Figma REST API

```bash
curl -H "X-Figma-Token: $FIGMA_TOKEN" \
  "https://api.figma.com/v1/files/eshYmSn9jeEEti38tO1GGU/nodes?ids=623:1293"
```
