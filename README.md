[![Code Climate](https://codeclimate.com/github/HarlemSquirrel/gnome-emoji-buckets/badges/gpa.svg)](https://codeclimate.com/github/HarlemSquirrel/gnome-emoji-buckets)

# Emoji Buckts
Emoji Buckets is a shell extension for the [GNOME](https://www.gnome.org/) desktop.

## About
This is a GNOME shell extension that provides buckets of emojis. Simply click on the emoji of your choice and it will be placed into your clipboard.

## Installation

### Install using the GNOME Shell Extensions website
Visit the [Emoji Buckets page](https://extensions.gnome.org/extension/1164/emoji-buckets/) using Firefox. Click the button to turn the extension on and agree to the installation.

### Install manually
First, make sure you have a font that supports emoji. This uses [EmojiOne](https://github.com/Ranks/emojione) with [Noto Emoji](https://www.google.com/get/noto/) and [Symbola](http://users.teilar.gr/~g1951d/) as fallback so be sure to install at least one of these fonts.

You can install this extension by downloading a released version and extracting the files into the following directory.

```
~/.local/share/gnome-shell/extensions/emoji_buckets@harlemsquirrel
```

Log out or restart the GNOME shell to make it available in GNOME Tweak. Note that on Wayland restarting the GNOME shell is not working as of 3.22.2.

## Troubleshooting

One of the best ways to troubleshott is to watch the logs with `journalctl` and restart the extension. You can reload this extension with the handy [Gnome Shell Extension Reloader](https://extensions.gnome.org/extension/1137/gnome-shell-extension-reloader/) extension.

```
journalctl --since="`date '+%Y-%m-%d %H:%M'`" -f | grep emoji_buckets
```
