// ==UserScript==
// @name            Fandom Redirect
// @description     Simple userscript that redirects specific fandom wiki sites to their official counterparts
// @author          dmfcat
// @homepageURL     https://github.com/dmfcat/fandom-redirect
// @downloadURL     https://raw.githubusercontent.com/dmfcat/fandom-redirect/refs/heads/main/fandom-redirect.user.js
// @version         1.0
// @match           https://*.fandom.com/*
// @license         MIT
// @run-at          document-start
// ==/UserScript==

// Whitelisted domains
const domains = {
  "oldschoolrunescape.fandom.com": "oldschool.runescape.wiki",
  "runescape.fandom.com": "runescape.wiki",
  "minecraft.fandom.com": "minecraft.wiki",
  "terraria.fandom.com": "terraria.wiki.gg",
};

// Get new domain from dict
const newDomain = domains[window.location.hostname];

// Redirect
if (newDomain) {
  window.location.hostname = newDomain;
}
