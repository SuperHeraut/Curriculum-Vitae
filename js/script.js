// I constants
// I.1 generic constants

const HTML = document.querySelector("html");
const BODY = document.querySelector("body");

const HEAD = document.querySelector("head");
const CHARSET = document.createElement("meta");
const VIEWPORT = document.createElement("meta");

// I.2 style

const RESET = document.createElement("link");
const STYLE = document.createElement("link");
const MODE = document.createElement("link");

// I.3 tab, icon + page name

const FAVICON = document.createElement("link");
const PAGEURL = location.pathname.split("/");
const PAGENAME = PAGEURL[PAGEURL.length - 1].split(".")[0]; //default, to edit if needed
const TABTITLE = document.createElement("title");

// I.4 header

const HEADER = document.querySelector("header");
const MENULIST = document.createElement("ul");
const NAVBAR = document.createElement("nav");
const TESTTABLE = ["home", "stats", "form"];

// I.5 footer

// II variables

let i;
let lang;
let mode;
let modeButton;
let modeInner;
let modePic;
let navlink;
let style;

// II.1 preset values
lang = "zxx"; //define it ðyself
i=0;

HTML.setAttribute("lang", lang);

CHARSET.setAttribute("charset", "UTF-8");

VIEWPORT.setAttribute("name", "viewport");
VIEWPORT.setAttribute("content", "width=device-width, initial-scale=1.0");

RESET.setAttribute("rel", "stylesheet");
RESET.setAttribute("href", "../css/reset.css");

STYLE.setAttribute("rel", "stylesheet");
STYLE.setAttribute("href", "../css/style.css");

FAVICON.setAttribute("rel", "icon");
FAVICON.setAttribute("type","image/x-icon");
FAVICON.setAttribute("href","../img/technical/favicon.svg");

TABTITLE.innerHTML = PAGENAME;

MODE.setAttribute("rel", "stylesheet");
MODE.setAttribute("href", "../css/" + style + ".css");

modePic = document.createElement("img");
modePic.setAttribute("src", "../img/technical/" + modeInner + ".svg");

modeButton = document.createElement("button");
modeButton.setAttribute("id", "nightModeButton");
modeButton.setAttribute("onclick", "nightmode()");
modeButton.append(modePic);

// IIV preset functions

// IIV.1 mode

const nightmode = () => {
	switch (mode) {
		case "1":
			logoMode = "night-";
			style = "night";
			localStorage.setItem("LSmode", mode);
			mode = "0";
			modeInner = "moon";
			break;

		case "0":
			logoMode = "";
			style = "clear";
			localStorage.setItem("LSmode", mode);
			mode = "1";
			modeInner = "sun";
			break;
	};
	modePic.setAttribute("src", "../img/technical/" + modeInner + ".svg");
	MODE.setAttribute("href", "../css/" + style + ".css");
};

// IV main components

// IV.1 head
HEAD.appendChild(CHARSET);
HEAD.appendChild(VIEWPORT);
HEAD.appendChild(RESET);
HEAD.appendChild(STYLE);
HEAD.appendChild(FAVICON);
HEAD.appendChild(TABTITLE);
HEAD.appendChild(MODE);

// IV.1.a mode


if(localStorage.getItem("LSmode", mode) == "0" ||
	localStorage.getItem("LSmode", mode) == "1")
{
	mode = localStorage.getItem("LSmode", mode);
	nightmode();
} else {
	style = "clear"
	mode = "1";
	localStorage.setItem("LSmode", mode);
	modeInner = "sun";
	nightmode();
};


// IV.2 header

// IV.2.a navbar

HEADER.appendChild(NAVBAR);
HEADER.append(modeButton);
NAVBAR.appendChild(MENULIST);

while (i<TESTTABLE.length){
	const LISTITEM = document.createElement("li");
	const MENULINK = document.createElement("a");
	navlink = "./" + TESTTABLE[i] + ".html"; 
	MENULIST.appendChild(LISTITEM);
	LISTITEM.appendChild(MENULINK);
	MENULINK.setAttribute("href", navlink);
	MENULINK.innerHTML = TESTTABLE[i];
	i++;
} 

// IV.3 footer
/*FTR.setAttribute("src", "./js/footer.js");*/




// V dynamic functions

// VI unsorted



