# Board photos and bios

The board page at `/pages/board/` is generated from `_data/board.json`. The page renders
correctly whether or not a member has sent a photo — members without one get an initials
placeholder in a brand colour, so photos can be added one at a time.

## Adding a photo

1. Save the file into `img/` (flat — no subdirectory; the `portrait` shortcode resolves names
   against `img/` only) as `board_<year>_<firstname>.jpg`, lowercase and without diacritics.
2. Add a `photo` key to that member's entry:

   ```json
   "photo": "board_2026_anne.jpg"
   ```

Eleventy re-encodes the file to 240/480/720px in WebP and JPEG at build time, so there is no need
to resize it first — store the original.

Add a surname to the filename if two members ever share a first name
(`board_2026_anne-diekjobst.jpg`); the shortcode only cares that the name is unique within `img/`.

## If the crop looks wrong

Every photo is displayed in the same 4:5 upright frame, cropped from the centre at 25% from the
top. If a face sits unusually high or low, add a `focus` key — it is passed straight to CSS
`object-position`:

```json
"focus": "center 12%"
```

Smaller percentage = show more of the top of the image.

## What to ask members for

- **Portrait orientation** if possible — landscape works, but more of it gets cropped away.
- **At least 800px on the short edge.** Smaller images visibly soften when scaled to the frame.
- **JPEG or PNG.**
- **Face in the upper half** of the frame, head and shoulders.

## Bios

One to four sentences, third person. The current texts were drafted from each member's own
institutional page and should be confirmed by the member before they are treated as final.
