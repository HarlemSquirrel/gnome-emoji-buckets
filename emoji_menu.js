const Clutter = imports.gi.Clutter;
const Lang = imports.lang;
const PanelMenu = imports.ui.panelMenu;
const PopupMenu = imports.ui.popupMenu;
const St = imports.gi.St;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Emojis = Me.imports.emojis;
const EmojiButton = Me.imports.emoji_button.EmojiButton;


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
    // this.addEmojiSet('Flags', Emojis.FLAGS, this)
  },

  addEmojiSet: function(title, emojiSet, menuBase) {
    let newMenuSet = new PopupMenu.PopupSubMenuMenuItem(title);

    let item, container;

    for (var i = 0; i < emojiSet.length; i++) {
      let emoji = emojiSet[i];
      if (i % 20 === 0) {
        item = new PopupMenu.PopupBaseMenuItem('');
        item.actor.track_hover = false;
        container = new St.BoxLayout({ style_class: 'menu-box' });
        item.actor.add(container, { expand: true });
        newMenuSet.menu.addMenuItem(item);
      }

      let button = new EmojiButton(emoji, menuBase)
      container.add_child(button, {hover: true});
    }


    menuBase.menu.addMenuItem(newMenuSet);
    newMenuSet.menu.box.style_class = 'EmojisItemStyle';
  },

  destroy: function() {
    this.parent();
  }
});
