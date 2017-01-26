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
    this.actor.add_child(box);

    this.addEmojiSet('Smileys & People', Emojis.SMILEYS, this)
    this.addEmojiSet('Nature', Emojis.NATURE, this)
    this.addEmojiSet('Food', Emojis.FOOD, this)
    this.addEmojiSet('Activities', Emojis.ACTIVITIES, this)
    this.addEmojiSet('Travel', Emojis.TRAVEL, this)
    this.addEmojiSet('Objects', Emojis.OBJECTS, this)
    this.addEmojiSet('Symbols', Emojis.SYMBOLS, this)
    this.addEmojiSet('Flags', Emojis.FLAGS, this)
  },

  addEmojiSet: function(title, emojiSet, menuBase) {
    let newMenuSet = new PopupMenu.PopupSubMenuMenuItem(title);

    let item, container;

    for (var i = 0; i < emojiSet.length; i++) {
      let emoji = emojiSet[i];
      if (i % 20 === 0) {
        item = new PopupMenu.PopupMenuItem('');
        container = new St.BoxLayout({style_class: 'menu-box', track_hover: false});
        item.actor.add(container, { expand: true });
        newMenuSet.menu.addMenuItem(item);
      }
      let button = new St.Button({ label: emoji, style_class: 'emoji' });
      container.add_child(button, {hover: true});

      button.connect('clicked', Lang.bind(menuBase, function(){
        Clipboard.set_text(CLIPBOARD_TYPE, emoji );
      }, i));
    }


    menuBase.menu.addMenuItem(newMenuSet);
    newMenuSet.menu.box.style_class = 'EmojisItemStyle';
  },

  destroy: function() {
    this.parent();
  }
});
