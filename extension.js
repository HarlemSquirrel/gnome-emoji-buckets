const Clutter = imports.gi.Clutter;
const Lang = imports.lang;
const Lightbox = imports.ui.lightbox;
const Main = imports.ui.main;
const ModalDialog = imports.ui.modalDialog;
const St = imports.gi.St;
const Tweener = imports.ui.tweener;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const EmojiMenuImport = Me.imports.emoji_menu;
const EmojiMenu = EmojiMenuImport.EmojiMenu;

let panelMenuButton;

function init() {}

function enable() {
  panelMenuButton = new EmojiMenu;

    /*
    - 0 is the position
    - `right` is the box where we want our button to be displayed (left/center/right)
     */
	Main.panel.addToStatusArea('EmojiMenu', panelMenuButton, 0, 'right');
}

function disable() {
	button.destroy();
}
