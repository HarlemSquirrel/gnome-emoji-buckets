const Clutter = imports.gi.Clutter;
const Lang = imports.lang;
const PanelMenu = imports.ui.panelMenu;
const PopupMenu = imports.ui.popupMenu;
const St = imports.gi.St;

const Clipboard = St.Clipboard.get_default();
const CLIPBOARD_TYPE = St.ClipboardType.CLIPBOARD;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Emojis = Me.imports.emojis

const EmojiMenu = new Lang.Class({
  Name: 'EmojiMenu',   // Class Name
  Extends: PanelMenu.Button,  // Parent Class

  _init: function() {

    this.parent(0, 'EmojiMenu', false);

    let box = new St.BoxLayout();

    let toplabel = new St.Label({
      text: '🤣',
      y_expand: true,
      y_align: Clutter.ActorAlign.CENTER
    });

    box.add(toplabel);
    // box.add(PopupMenu.arrowIcon(St.Side.BOTTOM));
    this.actor.add_child(box);

    let hiButton = new St.Button({
      label: 'hi'
    })

    // this.actor.add_actor(hiButton);

    addPopupSubMenuItem('Smileys & People', Emojis.SMILEYS, this)
    addPopupSubMenuItem('Nature', Emojis.NATURE, this)
    addPopupSubMenuItem('Food', Emojis.FOOD, this)
    addPopupSubMenuItem('Activities', Emojis.ACTIVITIES, this)
    addPopupSubMenuItem('Travel', Emojis.TRAVEL, this)
    addPopupSubMenuItem('Objects', Emojis.OBJECTS, this)
    addPopupSubMenuItem('Symbols', Emojis.SYMBOLS, this)
    addPopupSubMenuItem('Flags', Emojis.FLAGS, this)
  },

  destroy: function() {
    this.parent();
  }
});

function addPopupSubMenuItem(title, emojiSet, menuBase) {
  let newMenuSet = new PopupMenu.PopupSubMenuMenuItem(title);
  // let newMenuSection = new PopMenu.PopupMenuSection('New Section!');
  // let newSeparator = new PopupMenu.PopupSeparatorMenuItem();
  // let newBaseItem = new PopupMenu.PopupBaseMenuItem({
  //   reactive: false
  // });

  for (var i = 0; i < emojiSet.length; i++) {
    var item = new PopupMenu.PopupMenuItem(emojiSet[i]);
    item.actor.add_style_class_name('item');
    newMenuSet.menu.addMenuItem(item);
    // newBaseItem.actor.add_actor(item);

    item.connect('activate', Lang.bind(menuBase, function(i){
      Clipboard.set_text(CLIPBOARD_TYPE, emojiSet[arguments[2]] );
    }, i));
  }

  menuBase.menu.addMenuItem(newMenuSet);
  // menuBase.menu.addMenuItem(newSeparator);
  newMenuSet.menu.box.style_class = 'EmojisItemStyle';
}


/*
const PopupMenu = imports.ui.popupMenu;
ext = imports.misc.extensionUtils.extensions['emoji_buckets@harlemsquirrel'];
EmojiMenu = ext.stateObj.EmojiMenu;
newMenuSet = new PopupMenu.PopupSubMenuMenuItem('A Popup Menu Menu Item!');
item = new PopupMenu.PopupMenuItem('cheese!');


hiButton = new St.Button({ label: 'hi' })
*/
