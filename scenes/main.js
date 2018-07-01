// Init script
game.scripts.init = (cb) => {
  game.local.y = Math.random()*100|0;
  game.local.x = Math.random()*100|0;
  game.local.xDir = Math.random()*2|0;
  game.local.yDir = Math.random()*2|0;
  game.local.colors = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "BlanchedAlmond", "Blue", "BlueViolet", "CadetBlue", "Coral", "CornflowerBlue", "Crimson", "Cyan", "DeepPink", "DeepSkyBlue", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];
  game.local.color = game.local.colors[(Math.random() * game.local.colors.length)|0];
  cb();
};


// Button Listeners
game.scripts.onTouch = (button) => {

};

game.scripts.onTap = (button) => {

};

game.scripts.onHold = (button) => {

};

game.scripts.onUntouch = (button) => {

};


// Keyboard listeners
game.scripts.onKeyTouch = (key) => {

};

game.scripts.onKeyTap = (key) => {

};

game.scripts.onKeyHold = (key) => {

};

game.scripts.onKeyUntouch = (key) => {

};


// Button layout
game.scripts.layout = {

};

// Game logic loop
game.scripts.logic = (frame) => {
  if (game.local.xDir === 1) game.local.x += 1;
  else game.local.x -= 1;

  if (game.local.yDir === 1) game.local.y += 1;
  else game.local.y -= 1;

  if (game.local.x >= 70) {
    game.local.xDir = 0;
  } else if (game.local.x <= 0) {
    game.local.xDir = 1;
  }

  if (game.local.y > 98) {
    game.local.yDir = 0;
  } else if (game.local.y < 4) {
    game.local.yDir = 1;
  }
  if (frame % 60 === 0) game.local.color = game.local.colors[(Math.random() * game.local.colors.length)|0];
};

// Game render loop
game.scripts.render = (frame) => {
  fillStyle('black', L_GAME);
  fillRect(0, 0, 100, 100, L_GAME);
  fillStyle(game.local.color, L_GAME);
  text("Awesome game stuff here", {size: 26, font: "Arial"}, game.local.x, game.local.y, L_GAME);
};
