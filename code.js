const selection = figma.currentPage.selection;
let textItems = [];
let newCharacters = [];

selection.forEach((t) => {
  if (t.type === "TEXT") {
    textItems.push(t);
    newCharacters.push(t.characters);
  }
});
async function mergeText() {
  await figma.loadFontAsync({
    family: textItems[0].fontName.family,
    style: textItems[0].fontName.style,
  });
  textItems[0].characters = newCharacters.join("\n");
  textItems.map((t, i) => {
    if (i !== 0) {
      t.remove();
    }
  });
  figma.notify("Done!");
  figma.closePlugin();
}

mergeText();
