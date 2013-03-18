function roll_over(img_name, img_src){
    document[img_name].src = img_src;
}


/* ***** Begin: Buffered Text-fade Effect ***** */
var fader = new Array(), fadeQ = new Array();
var RGB = new Array(256), k = 0, hex = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
for (var i = 0; i < 16; i++) for (var j = 0; j < 16; j++) RGB[k++] = hex[i] + hex[j];

function fadeObj(number, id, colOff, colOn, spdIn, spdOut, def) {
    this.number = number;
    this.id = id;
    this.colOff = [parseInt(colOff.substr(0, 2), 16), parseInt(colOff.substr(2, 2), 16), parseInt(colOff.substr(4, 2), 16)];
    this.colOn = [parseInt(colOn.substr(0, 2), 16), parseInt(colOn.substr(2, 2), 16), parseInt(colOn.substr(4, 2), 16)];
    this.colNow = [parseInt(colOff.substr(0, 2), 16), parseInt(colOff.substr(2, 2), 16), parseInt(colOff.substr(4, 2), 16)];
    this.spdIn = spdIn;
    this.spdOut = spdOut;
    this.def = def;
    this.direction = false;
    this.active = false;
    this.message = new Array();
    this.messageNow = 0;
}

function fadeCmd(number, message, direction) {
    this.number = number;
    this.message = message;
    this.direction = direction;
}

function fade(number, message, direction) {
    if (fader[number].def && fader[number].messageNow == 0 && fader[number].direction) {
        fadeQ[fadeQ.length] = new fadeCmd(number, 0, false);
        fadeQ[fadeQ.length] = new fadeCmd(number, message, direction);
        message = 0;
        direction = false;
    } else fadeQ[fadeQ.length] = new fadeCmd(number, message, direction);
    setTimeout(function() { fadeBegin(number); }, 20);
}

function fadeBegin(number) {
    for (var x = 0; x < fadeQ.length; x++) {
        for (var y = x + 1; y < fadeQ.length; y++) {
            if (fadeQ[x].number == fadeQ[y].number && fadeQ[x].message == fadeQ[y].message && fadeQ[x].direction != fadeQ[y].direction) {
                fadeQ.splice(x, 1);
                fadeQ.splice(y - 1, 1);
            }
        }
    }
    if (!fader[number].active) {
        for (var x = 0; x < fadeQ.length; x++) {
            if (fadeQ[x].number == number && fadeQ[x].direction != fader[number].direction) {
                var del = fadeQ.splice(x, 1);
                setTimeout(function() { fadeEng(number, del[0].message, del[0].direction); }, 0);
                break;
            }
        }
    }
}

function fadeEng(number, message, direction) {
    if (!fader[number].active) {
        fader[number].active = true;
        fader[number].direction = direction;
        fader[number].messageNow = message;
        document.getElementById(fader[number].id).innerHTML = fader[number].message[Math.round(Math.random() * 15)];
    }

    var iniCol = (direction) ? fader[number].colOff : fader[number].colOn;
    var endCol = (direction) ? fader[number].colOn : fader[number].colOff;
    var incCol = fader[number].colNow;
    var spd = (direction) ? fader[number].spdIn : fader[number].spdOut;
    for (var x = 0; x < 3; x++) {
        var incr = (endCol[x] - iniCol[x]) / spd;
        incCol[x] = (incr < 0) ? Math.max(incCol[x] + incr, endCol[x]) : Math.min(incCol[x] + incr, endCol[x]);
    }
    
    document.getElementById(fader[number].id).style.color = "#" + RGB[parseInt(incCol[0])] + RGB[parseInt(incCol[1])] + RGB[parseInt(incCol[2])];

    if (incCol[0] == endCol[0] && incCol[1] == endCol[1] && incCol[2] == endCol[2]) {
        fader[number].active = false;
        for (var x = 0; x < fadeQ.length; x++) {
            if (fadeQ[x].number == number) {
                var del = fadeQ.splice(x, 1);
                setTimeout(function() { fadeEng(number, del[0].message, del[0].direction); }, 0);
                return false;
            }
        }
        
        if (!direction) {
            if (fader[number].def) {
                setTimeout(function() { fadeEng(number, 0, true); }, 0);
            } else document.getElementById(fader[number].id).innerHTML = "&nbsp;";
        }
    } else setTimeout(function() { fadeEng(number, message, direction); }, 0);
}

var throbStep = new Array();
function throbFade(item) {
    if (!throbStep[item]) throbStep[item] = 0;
    fade(item, Math.floor(throbStep[item] / 2), (throbStep[item] % 2) ? false : true);
    setTimeout(function() { throbFade(item); }, (throbStep[item] % 2) ? 100 : 8000);
    if (++throbStep[item] > fader[item].message.length * 2 - 1) throbStep[item] = 0;
}

var fontSize0 = 5; 
var fontSize1 = 4;
var frontBreak = "";
fader[2] = new fadeObj(2, 'fade2', 'ffffff', 'ffffff', 30, 30, false);

fader[2].message[0] = "<div class='headerMessage'><strong><font size='"+ fontSize0 +"'>"+ frontBreak +"Hardware based</font></strong><br /><font size='"+ fontSize1 +"'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp installed in less than 20 minutes</font></div>";
fader[2].message[1] = "<div class='headerMessage'><strong><font size='"+ fontSize0 +"'>"+ frontBreak +"Nothing to install</font></strong><br /><font size='"+ fontSize1 +"'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp no nodes, probes, agents, software or servers</font></div>";
fader[2].message[2] = "<div class='headerMessage'><strong><font size='"+ fontSize0 +"'>"+ frontBreak +"Brand agnostic</font></strong><br /><font size='"+ fontSize1 +"'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp knows what is installed in your environment</font></div>";
fader[2].message[3] = "<div class='headerMessage'><strong><font size='"+ fontSize0 +"'>"+ frontBreak +"No excuse</font></strong><br /><font size='3'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp remote access to any device day or night</font></div>";

fader[2].message[4] = "<div class='headerMessage'><strong><font size='"+ fontSize0 +"'>"+ frontBreak +"Peace of mind</font></strong><br /><font size='"+ fontSize1 +"'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp visual confirmation that everything is OK</font></div>";
fader[2].message[5] = "<div class='headerMessage'><strong><font size='"+ fontSize0 +"'>"+ frontBreak +"Black list</font></strong><br /><font size='"+ fontSize1 +"'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp software and USB end points</font></div>";
fader[2].message[6] = "<div class='headerMessage'><strong><font size='"+ fontSize0 +"'>"+ frontBreak +"Diagnostics</font></strong><br /><font size='"+ fontSize1 +"'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp solve performance and system issues</font></div>";
fader[2].message[7] = "<div class='headerMessage'><strong><font size='"+ fontSize0 +"'>"+ frontBreak +"Increase service</font></strong><br /><font size='"+ fontSize1 +"'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp do more with less labor</font></div>";

fader[2].message[8] = "<div class='headerMessage'><strong><font size='"+ fontSize0 +"'>"+ frontBreak +"Affordable</font></strong><br /><font size='"+ fontSize1 +"'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp service cost without capital costs to implement</font></div>";
fader[2].message[9] = "<div class='headerMessage'><strong><font size='"+ fontSize0 +"'>"+ frontBreak +"Compliance</font></strong><br /><font size='"+ fontSize1 +"'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp tools and reporting of hard to capture data</font></div>";
fader[2].message[10] = "<div class='headerMessage'><strong><font size='"+ fontSize0 +"'>"+ frontBreak +"Eliminate</font></strong><br /><font size='"+ fontSize1 +"'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp most stand alone system management tools</font></div>";
fader[2].message[11] = "<div class='headerMessage'><strong><font size='"+ fontSize0 +"'>"+ frontBreak +"Fully hosted</font></strong><br /><font size='"+ fontSize1 +"'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp work securely from anywhere in the world</font></div>";

fader[2].message[12] = "<div class='headerMessage'><strong><font size='"+ fontSize0 +"'>"+ frontBreak +"Working for you</font></strong><br /><font size='"+ fontSize1 +"'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 24 hours a day, 7 days a week</font></div>";
fader[2].message[13] = "<div class='headerMessage'><strong><font size='"+ fontSize0 +"'>"+ frontBreak +"Works Silently</font></strong><br /><font size='"+ fontSize1 +"'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp without interrupting the users</font></div>";
fader[2].message[14] = "<div class='headerMessage'><strong><font size='"+ fontSize0 +"'>"+ frontBreak +"Print jobs</font></strong><br /><font size='"+ fontSize1 +"'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp tracked and managed with full reporting</font></div>";
fader[2].message[15] = "<div class='headerMessage'><strong><font size='"+ fontSize0 +"'>"+ frontBreak +"Simple</font></strong><br /><font size='"+ fontSize1 +"'>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp everything is included for one affordable cost</font></div>";

//throbFade(2);

//document.getElementById('fade2').innerHTML = "sabhjdfgal";
function LoadInit() {
    document.getElementById('fade2').innerHTML = fader[2].message[Math.round(Math.random() * 15)];
    setTimeout(function() { throbFade(2); }, 8000);
}
//document.getElementById('fade2').innerHTML = fader[2].message[Math.round(Math.random() * 15)];
//setTimeout(function() { throbFade(2); }, 8000);
/* ***** End: Buffered Text-fade Effect ******* */



////////////  texts:
////////////  Your messages wich may contain regular html tags but
////////////  must at least contain: [ <font color='{COLOR}'> ]
////////////  Use single quotes [ ' ] in your html only. If you need
////////////  a double quote in the message itself use an escape
////////////  sign like this: [ \" ]  (not including the brackets)





//////////var texts = new Array(
//////////"<font size='+2' color='{COLOR}' face='Arial'><strong>A D D</strong></font>",
//////////"<font size='+3' color='{COLOR}' face='Arial'><strong>this</strong></font>",
//////////"<font size='+4' color='{COLOR}' face='Arial'><strong>J a v a S c r i p t</strong></font>",
//////////"<font size='+3' color='{COLOR}' face='Arial'><strong>to</font>",
//////////"<a href='http://www.javascriptsource.com' target='_top'><font size='+3' color='{COLOR}' face='Arial'><strong>Your Site Today!</strong></font></a>");


//////////var bgcolor = "#000000"; // background color, must be valid browser hex color (not color names)
//////////var fcolor = "#FF8000";  // foreground or font color
//////////var steps = 20; // number of steps to fade
//////////var show = 500; // milliseconds to display message
//////////var sleep = 30; // milliseconds to pause inbetween messages
//////////var loop = true; // true = continue to display messages, false = stop at last message

//////////// Do Not Edit Below This Line
//////////var colors = new Array(steps);
//////////getFadeColors(bgcolor,fcolor,colors);
//////////var color = 0;
//////////var text = 0;
//////////var step = 1;

//////////// fade: magic fader function
//////////function fade(){
//////////    // insert fader color into message
//////////    var text_out = texts[text].replace("{COLOR}", colors[color]); // texts should be defined in user script, e.g.: var texts = new Array("<font color='{COLOR}' sized='+3' face='Arial'>howdy</font>");

//////////    // actually write message to document
//////////    if (document.all) fader.innerHTML = text_out; // document.all = IE only
//////////    if (document.layers) { document.fader.document.write(text_out); document.fader.document.close(); } // document.layers = Netscape only

//////////    // select next fader color
//////////    color += step;

//////////    // completely faded in?
//////////    if (color >= colors.length-1) {
//////////        step = -1; // traverse colors array backward to fade out

//////////        // stop at last message if loop=false
//////////        if (!loop && text >= texts.length-1) return; // loop should be defined in user script, e.g.: var loop=true;
//////////    }

//////////    // completely faded out?
//////////    if (color == 0) {
//////////        step = 1; // traverse colors array forward to fade in again

//////////        // select next message
//////////        text += 1;
//////////        if (text == texts.length) text = 0; // loop back to first message
//////////    }

//////////    // subtle timing logic...
//////////    setTimeout("fade()", (color == colors.length-2 && step == -1) ? show : ((color == 1 && step == 1) ? sleep : 50)); // sleep and show should be defined in user script, e.g.: var sleep=30; var show=500;
//////////}
//////////// getFadeColors: fills Colors (predefined Array)
//////////// with color hex strings fading from ColorA to ColorB

//////////// note: Colors.length equals the number of steps to fade
//////////function getFadeColors(ColorA, ColorB, Colors) {
//////////    len = Colors.length;

//////////    // strip '#' signs if present
//////////    if (ColorA.charAt(0)=='#') ColorA = ColorA.substring(1);
//////////    if (ColorB.charAt(0)=='#') ColorB = ColorB.substring(1);

//////////    // substract rgb compents from hex string
//////////    var r = HexToInt(ColorA.substring(0,2));
//////////    var g = HexToInt(ColorA.substring(2,4));
//////////    var b = HexToInt(ColorA.substring(4,6));
//////////    var r2 = HexToInt(ColorB.substring(0,2));
//////////    var g2 = HexToInt(ColorB.substring(2,4));
//////////    var b2 = HexToInt(ColorB.substring(4,6));

//////////    // calculate size of step for each color component
//////////    var rStep = Math.round((r2 - r) / len);
//////////    var gStep = Math.round((g2 - g) / len);
//////////    var bStep = Math.round((b2 - b) / len);

//////////    // fill Colors array with fader colors
//////////    for (i = 0; i < len-1; i++) {
//////////        Colors[i] = "#" + IntToHex(r) + IntToHex(g) + IntToHex(b);
//////////        r += rStep;
//////////        g += gStep;
//////////        b += bStep;
//////////    }
//////////    Colors[len-1] = ColorB; // make sure we finish exactly at ColorB
//////////}

//////////// IntToHex: converts integers between 0-255 into a two digit hex string.
//////////function IntToHex(n) {
//////////    var result = n.toString(16);
//////////    if (result.length==1) result = "0" + result;
//////////    return result;
//////////}

//////////// HexToInt: converts two digit hex strings into integer.
//////////function HexToInt(hex) {
//////////    return parseInt(hex, 16);
//////////}