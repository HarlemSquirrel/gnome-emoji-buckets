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


// let text, button;
//
// function _hideHello() {
//   Main.uiGroup.remove_actor(text);
//   Main.uiGroup.remove_actor(button);
//   text = null;
// }
//
// function _showHello() {
//   // let group = new St.Widget({ visible: false, x: 0, y: 0, accessible_role: Atk.Role.DIALOG });
//   // Main.layoutManager.modalDialogGroup.add_actor(group);
//   let box = new ModalDialog.ModalDialog();
//   // let mainContentBox = new St.BoxLayout({ style_class: 'prompt-dialog-main-layout', vertical: false });
//   // box.contentLayout.add(mainContentBox);
//   box.addButton({
//     label: 'A new button label!',
//     action: _hideHello()
//   });
//   // box._messageBox.add('A message!',
//   //                            { x_fill: false,
//   //                              y_fill:  false,
//   //                              x_align: St.Align.START,
//   //                              y_align: St.Align.START });
//
//   box.open();
//   // let box = new St.BoxLayout({ style_class: 'helloworld-label' });
//   // if (!text) {
//   //   text = new St.Label({
//   //     style_class: 'helloworld-label',
//   //     text: "🤣 🤣 🤣"
//   //   });
//   //   Main.uiGroup.add_actor(text);
//   // }
//   //
//   // text.opacity = 255;
//
//
//   // let btn = new St.Button({
//   //   label: 'A Button!',
//   //   style_class: 'helloworld-label ',
//   //   reactive: true,
//   //   track_hover: true
//   // });
//
//   // btn.connect('clicked', Lang.bind(this, function() {
//   //   _hideHello();
//   // }));
//   //
//   // Main.uiGroup.add_actor(btn);
//   //
//   // let monitor = Main.layoutManager.primaryMonitor;
//   //
//   // btn.set_position(monitor.x + Math.floor(monitor.width / 2 - text.width / 2),
//   // monitor.y + Math.floor(monitor.height / 2 - text.height / 2));
//
//
//   // text.set_position(monitor.x + Math.floor(monitor.width / 2 - text.width / 2),
//   //   monitor.y + Math.floor(monitor.height / 2 - text.height / 2));
//   // box.set_position(monitor.x + Math.floor(monitor.width / 2 - text.width / 2),
//   //   monitor.y + Math.floor(monitor.height / 2 - text.height / 2));
//
//   // bbox.set_child(item);
//
//
//
//   // box.actor.add_actor(button);
//   // Main.uiGroup.add_actor(box);
//
//
//
//   // Tweener.addTween(text, {
//   //   opacity: 0,
//   //   time: 10,
//   //   transition: 'easeOutQuad',
//   //   onComplete: _hideHello
//   // });
// }
//
// function init() {
//   button = new St.Bin({
//     style_class: 'panel-button',
//     reactive: true,
//     can_focus: true,
//     x_fill: true,
//     y_fill: false,
//     track_hover: true
//   });
//   let icon = new St.Icon({
//     icon_name: 'system-run-symbolic',
//     style_class: 'system-status-icon'
//   });
//
//   button.set_child(icon);
//   button.connect('button-press-event', _showHello);
// }
//
// function enable() {
//   Main.panel._rightBox.insert_child_at_index(button, 0);
// }
//
// function disable() {
//   Main.panel._rightBox.remove_child(button);
// }





/* Global variables for use as button to click */
let button;

function init() {}

function enable() {
  button = new EmojiMenu;

    /*
    - 0 is the position
    - `right` is the box where we want our button to be displayed (left/center/right)
     */
	Main.panel.addToStatusArea('EmojiMenu', button, 0, 'right');
}

function disable() {
	button.destroy();
}
