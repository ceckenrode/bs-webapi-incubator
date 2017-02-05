// Generated by BUCKLESCRIPT VERSION 1.4.3 , PLEASE EDIT WITH CARE
'use strict';

var Curry                   = require("bs-platform/lib/js/curry");
var ReasonJs                = require("../src/reasonJs");
var Js_boolean              = require("bs-platform/lib/js/js_boolean");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions");

function unNull(definitelyNotNull) {
  if (definitelyNotNull !== null) {
    return definitelyNotNull;
  }
  else {
    throw [
          Caml_builtin_exceptions.assert_failure,
          [
            "tests/test.re",
            7,
            14
          ]
        ];
  }
}

var $$event = new Event("foo");

$$event.bubbles;

$$event.cancelable;

$$event.composed;

$$event.currentTarget;

$$event.defaultPrevented;

$$event.eventPhase;

$$event.target;

$$event.timeStamp;

$$event.type;

$$event.isTrusted;

$$event.preventDefault();

$$event.stopImmediatePropagation();

$$event.stopPropagation();

$$event.altKey;

$$event.code;

$$event.ctrlKey;

$$event.isComposing;

$$event.key;

$$event.locale;

$$event.location;

$$event.metaKey;

$$event.repeat;

$$event.shiftKey;

$$event.getModifierState("Alt");

$$event.button;

$$event.buttons;

$$event.clientX;

$$event.clientY;

$$event.movementX;

$$event.movementY;

$$event.offsetX;

$$event.offsetY;

$$event.pageX;

$$event.pageY;

$$event.region;

$$event.relatedTarget;

$$event.screenX;

$$event.screenY;

$$event.x;

$$event.y;

var $$window = window;

var doc = $$window.document;

var el = unNull(doc.getElementById("some-element"));

var el2 = unNull(doc.getElementById("some-other-element"));

el.childNodes;

el.firstChild;

el.lastChild;

el.nextSibling;

el.nodeName;

el.nodeType;

el.nodeValue;

el.nodeValue = null;

el.ownerDocument;

el.parentNode;

el.parentElement;

el.previousSibling;

el.rootNode;

el.textContent;

el.textContent = "foo";

el.appendChild(el2);

el.cloneNode();

el.cloneNode(Js_boolean.to_js_boolean(/* true */1));

el.compareDocumentPosition(el2);

el.contains(el2);

el.getRootNode();

el.getRootNode(Js_boolean.to_js_boolean(/* true */1));

el.hasChildNodes();

el.insertBefore(el2, null);

el.isDefaultNamespace("http://...");

el.isEqualNode(el2);

el.isSameNode(el2);

el.lookupPrefix();

el.lookupNamespaceURI(null);

el.normalize();

el.removeChild(el2);

el.assignedSlot;

el.attributes;

el.classList;

el.className;

el.className = "my-class-name";

el.clientHeight;

el.clientLeft;

el.clientTop;

el.clientWidth;

el.id;

el.id = "my-id";

el.innerHTML;

el.innerHTML = "<strong>stuff</strong>";

el.localName;

el.namespaceURI;

el.nextElementSibling;

el.outerHTML;

el.outerHTML = "<strong>stuff</strong>";

el.prefix;

el.previousElementSibling;

el.scrollHeight;

el.scrollLeft;

el.scrollLeft = 0;

el.scrollTop;

el.scrollTop = 0;

el.scrollWidth;

el.shadowRoot;

el.slot;

el.slot = "<strong>stuff</strong>";

el.tagName;

el.attachShadow({
      mode: "open"
    });

el.animate({
      transform: "translateT(0px)"
    }, {
      duration: 1000
    });

el.closest("input");

el.createShadowRoot();

el.getAttribute("href");

el.getAttributeNS("http://...", "foo");

el.getBoundingClientRect();

el.getClientRects();

el.getElementsByClassName("some-class-name");

el.getElementsByTagName("pre");

el.getElementsByTagNameNS("http://...", "td");

el.hasAttribute("data-my-value");

el.hasAttributeNS("http://...", "foo");

el.hasAttributes();

el.insertAdjacentElement("beforebegin", el2);

el.insertAdjacentText("afterbegin", "text");

el.matches("input");

el.querySelector("input");

el.querySelectorAll("input");

el.remove();

el.removeAttribute("href");

el.removeAttributeNS("http://...", "foo");

el.requestFullscreen();

el.requestPointerLock();

el.scrollIntoView();

el.scrollIntoView(Js_boolean.to_js_boolean(/* true */1));

el.scrollIntoView({
      block: "end",
      behvaior: "smooth"
    });

el.setAttribute("href", "http://...");

el.setAttributeNS("http://...", "foo", "bar");

function handleClick() {
  console.log("asd");
  return /* () */0;
}

el.addEventListener("click", handleClick);

el.addEventListener("click", handleClick, {
      passive: /* true */1
    });

el.addEventListener("click", handleClick, Js_boolean.to_js_boolean(/* true */1));

el.removeEventListener("click", handleClick);

el.removeEventListener("click", handleClick, {
      passive: /* true */1
    });

el.removeEventListener("click", handleClick, Js_boolean.to_js_boolean(/* true */1));

el.dispatchEvent($$event);

el.accessKey;

el.accessKey = "";

el.accessKeyLabel;

el.contentEditable;

el.contentEditable = "inherit";

el.isContentEditable;

el.contextMenu;

el.contextMenu = el2;

el.dataset;

el.dir;

el.dir = "ltr";

el.draggable;

el.draggable = Js_boolean.to_js_boolean(/* true */1);

el.dropzone;

el.hidden;

el.hidden = Js_boolean.to_js_boolean(/* true */1);

el.itemScope;

el.itemScope = Js_boolean.to_js_boolean(/* true */1);

el.itemType;

el.itemId;

el.itemId = "my-id";

el.itemRed;

el.itemProp;

el.itemValue;

el.itemValue = ({});

el.lang;

el.lang = "en";

el.offsetHeight;

el.offsetLeft;

el.offsetParent;

el.offsetTop;

el.offsetWidth;

el.spellcheck;

el.spellcheck = Js_boolean.to_js_boolean(/* true */1);

el.style;

el.tabIndex;

el.tabIndex = 42;

el.title;

el.title = "hovertext!";

el.translate;

el.translate = Js_boolean.to_js_boolean(/* true */1);

el.blur();

el.click();

el.focus();

el.forceSpellCheck();

var history = $$window.history;

history.length;

history.scrollRestoration;

history.scrollRestoration = Js_boolean.to_js_boolean(/* true */1);

history.state;

history.back();

history.forward();

history.go(-2);

history.pushState(history.state, "My title", "http://...");

history.replaceState(history.state, "My title", "http://...");

var $$location = $$window.location;

$$location.href;

$$location.href = "http://reason.ml";

$$location.protocol;

$$location.protocol = "https";

$$location.host;

$$location.host = "reason.ml";

$$location.hostname;

$$location.hostname = "reason.ml";

$$location.prot;

$$location.port = "443";

$$location.pathname;

$$location.pathname = "/reason/tools.html";

$$location.search;

$$location.search = "q=reasonml";

$$location.hash;

$$location.hash = "merlin-atom";

$$location.username;

$$location.username = "alonzo.church";

$$location.password;

$$location.password = "lambda-the-ultimate";

$$location.origin;

$$location.assign("http://reason.ml");

$$location.reload();

$$location.reload(Js_boolean.to_js_boolean(/* true */1));

$$location.replace("http://reason.ml");

$$location.toString();

$$window.document;

$$window.fullScreen;

$$window.history;

$$window.innerWidth;

$$window.innerHeight;

$$window.location;

$$window.location = "http://reason.ml";

$$window.parent;

$$window.top;

$$window.alert("hello!");

$$window.confirm("is ok?");

$$window.getComputedStyle(el);

$$window.getComputedStyle(el, "hover");

$$window.prompt("type you password, please?");

$$window.prompt("type password or use this?", "password");

$$window.scroll(0, 0);

$$window.onload = function () {
  console.log("load");
  return /* () */0;
};

$$window.addEventListener("click", handleClick);

$$window.addEventListener("click", handleClick, {
      passive: /* true */1
    });

$$window.addEventListener("click", handleClick, Js_boolean.to_js_boolean(/* true */1));

$$window.removeEventListener("click", handleClick);

$$window.removeEventListener("click", handleClick, {
      passive: /* true */1
    });

$$window.removeEventListener("click", handleClick, Js_boolean.to_js_boolean(/* true */1));

$$window.dispatchEvent($$event);

doc.characterSet;

doc.compatMode;

doc.docType;

doc.documentElement;

doc.documentURI;

doc.hidden;

doc.implementation;

doc.lastStyleSheetSet;

doc.pointerLockElement;

doc.preferredStyleSheetSet;

doc.scrollingElement;

doc.selectedStyleSheetSet;

doc.selectedStyleSheetSet = "muh-stylesheet";

doc.styleSheets;

doc.styleSheetSets;

doc.visibilityState;

doc.adoptNode(el);

doc.createAttribute("data-foo");

doc.createAttributeNS("http://...", "foo");

doc.createComment("witty comment");

doc.createDocumentFragment();

doc.createElement("div");

doc.createEement("div", ({}));

doc.createElementNS("http://...", "foo");

doc.createEementNS("http://...", "div", ({}));

doc.createEvent("MyCustomEvent");

doc.createNodeIterator(el);

doc.createNodeIterator(el, 0);

doc.createNodeIterator(el, 0, Curry._1(ReasonJs.NodeFilter[/* make */0], function () {
          return 0;
        }));

doc.elementFromPoint(0, 0);

doc.elementsFromPoint(0, 0);

doc.enableStyleSheetsForSet("my-stylesheet-set");

doc.exitPointerLock();

doc.getAnimations();

doc.getElementsByClassName("lstlisting");

doc.getElementsByTagName("code");

doc.getElementsByTagNameNS("http://...", "foo");

doc.importNode(el);

doc.importNode(el, Js_boolean.to_js_boolean(/* true */1));

doc.getElementById("root");

doc.querySelector(".lstlisting");

doc.querySelectorAll(".lstlisting");

doc.activeElement;

doc.body;

doc.body = el;

doc.cookie;

doc.cookie = "foo=bar;reason=ml";

doc.defaultView;

doc.designMode;

doc.designMode = "on";

doc.dir;

doc.dir = "ltr";

doc.domain;

doc.domain = "reason.ml";

doc.embeds;

doc.forms;

doc.head;

doc.images;

doc.lastModified;

doc.links;

doc.location;

doc.location = "http://reason.ml";

doc.plugins;

doc.readyState;

doc.referrer;

doc.scripts;

doc.title;

doc.title = "Reason: Rapid Expressive Systems Programming.";

doc.URL;

doc.close();

doc.execCommand("copy", Js_boolean.to_js_boolean(/* false */0), null);

doc.getElementsByName("angry-joe");

doc.getSelection();

doc.hasFocus();

doc.open();

doc.queryCommandEnabled("copy");

doc.queryCommandIndeterm("cut");

doc.queryCommandSupported("paste");

doc.queryCommandValue("fontName");

doc.write("Hello World!");

doc.writeln("Hello Newline!");

new Date();

new Date(0);

new Date(0, 1);

new Date(0, 1, 2);

new Date(0, 1, 2, 3);

new Date(0, 1, 2, 3, 4);

new Date(0, 1, 2, 3, 4, 5);

Date.utc();

Date.utc(0, 1);

Date.utc(0, 1, 2);

Date.utc(0, 1, 2, 3);

Date.utc(0, 1, 2, 3, 4);

Date.utc(0, 1, 2, 3, 4, 5);

Date.now();

var date = new Date("Dec 25, 1995");

date.getDate();

date.getDay();

date.getFullYear();

date.getHours();

date.getMilliseconds();

date.getMinutes();

date.getMonth();

date.getSeconds();

date.getTime();

date.getTimezoneOffset();

date.getUTCDate();

date.getUTCDay();

date.getUTCFullYear();

date.getUTCHours();

date.getUTCMilliseconds();

date.getUTCMinutes();

date.getUTCMonth();

date.getUTCSeconds();

date.getYear();

date.setDate(0);

date.setFullYear(0);

date.setFullYear(0, 1);

date.setFullYear(0, 1, 2);

date.setHours(0);

date.setHours(0, 1);

date.setHours(0, 1, 2);

date.setHours(0, 1, 2, 3);

date.setMilliseconds(0);

date.setMinutes(0);

date.setMinutes(0, 1);

date.setMinutes(0, 1, 2);

date.setMonth(0);

date.setMonth(0, 1);

date.setSeconds(0);

date.setSeconds(0, 1);

date.setTime(0);

date.setUTCDate(0);

date.setUTCFullYear(0);

date.setUTCFullYear(0, 1);

date.setUTCFullYear(0, 1, 2);

date.setUTCHours(0);

date.setUTCHours(0, 1);

date.setUTCHours(0, 1, 2);

date.setUTCHours(0, 1, 2, 3);

date.setUTCMilliseconds(0);

date.setUTCMinutes(0);

date.setUTCMinutes(0, 1);

date.setUTCMinutes(0, 1, 2);

date.setUTCMonth(0);

date.setUTCMonth(0, 1);

date.setUTCSeconds(0);

date.setUTCSeconds(0, 1);

date.setUTCTime(0);

date.toDateString();

date.toGMTString();

date.toISOString();

date.toJSON();

date.toLocaleDateString();

date.toLocaleString();

date.toLocaleTimeString();

date.toString();

date.toTimeString();

date.toUTCString();

date.valueOf();

setInterval(function () {
      console.log("hello!");
      return /* () */0;
    }, 1000);

var p = fetch("/greatings");

var p2 = p.then(function (res) {
        return res.text();
      }).then(function (text) {
      console.log(text);
      return /* () */0;
    });

p2.catch(function (err) {
      console.log(err);
      return /* () */0;
    });

p.then(function (res) {
        return res.json();
      }).then(function (json) {
      console.log(json);
      return /* () */0;
    });

/* event Not a pure module */
