var OxOec71=["isWinIE","isGecko","isSafari","isOpera","userAgent","ua","opera","safari","gecko","msie","compatMode","document","CSS1Compat","undefined","Microsoft.XMLHTTP","readyState","onreadystatechange","","length","all","childNodes","nodeType","\x0D\x0A","onchange","oninitialized","command","commandui","commandvalue","returnValue","oncommand","string","event","_fireEventFunction","parentNode","_IsCuteEditor","True","readOnly","_IsRichDropDown","null","value","selectedIndex","nodeName","TR","cells","display","style","nextSibling","innerHTML","\x3Cimg src=\x22","/Load.ashx?type=image\x26file=t-minus.gif\x22\x3E","CuteEditor_CollapseTreeDropDownItem(this,\x22","\x22)","onclick","onmousedown","none","/Load.ashx?type=image\x26file=t-plus.gif\x22\x3E","CuteEditor_ExpandTreeDropDownItem(this,\x22","contains","UNSELECTABLE","on","tabIndex","-1","//TODO: event not found? throw error ?","contentWindow","contentDocument","parentWindow","id","frames","frameElement","//TODO:frame contentWindow not found?","preventDefault","caller","arguments","parent","top","opener","srcElement","target","//TODO: srcElement not found? throw error ?","fromElement","relatedTarget","toElement","keyCode","clientX","clientY","offsetX","offsetY","button","ctrlKey","altKey","shiftKey","cancelBubble","stopPropagation","CuteEditor_GetEditor(this).ExecImageCommand(this.getAttribute(\x27Command\x27),this.getAttribute(\x27CommandUI\x27),this.getAttribute(\x27CommandArgument\x27),this)","CuteEditor_GetEditor(this).PostBack(this.getAttribute(\x27Command\x27))","this.onmouseout();CuteEditor_GetEditor(this).DropMenu(this.getAttribute(\x27Group\x27),this)","ResourceDir","Theme","/Load.ashx?type=theme\x26theme=","\x26file=all.png","/Images/blank2020.gif","IMG","Command","Group","ThemeIndex","width","20px","height","src","backgroundImage","url(",")","backgroundPosition","0 -","px","onload","className","separator","CuteEditorButton","CuteEditor_ButtonCommandOver(this)","onmouseover","CuteEditor_ButtonCommandOut(this)","onmouseout","CuteEditor_ButtonCommandDown(this)","CuteEditor_ButtonCommandUp(this)","onmouseup","oncontextmenu","ondragstart","PostBack","ondblclick","_ToolBarID","_CodeViewToolBarID","_FrameID"," CuteEditorFrame"," CuteEditorToolbar","ActiveTab","View","Code","Edit","buttonInitialized","isover","CuteEditorButtonOver","CuteEditorButtonDown","CuteEditorDown","border","solid 1px #0A246A","backgroundColor","#b6bdd2","padding","1px","solid 1px #f5f5f4","inset 1px","IsCommandDisabled","CuteEditorButtonDisabled","IsCommandActive","CuteEditorButtonActive","cmd_fromfullpage","(","href","location",",DanaInfo=",",","+","scriptProperties","GetScriptProperty","/Load.ashx?type=scripts\x26file=Safar_Implementation","CuteEditorImplementation","function","POST","\x26getModified=1","status","Failed to load impl time!","GET","\x26modified=","Failed to load impl code!","cursor","hand","body","InitializeCode","block","contentEditable"," \x3Cbr /\x3E ","designMode","no-drop","CuteEditorInitialize"];var _Browser_TypeInfo=null; function Browser__InitType(){if(_Browser_TypeInfo!=null){return ;} ;var Ox4={}; Ox4[OxOec71[0x5]]=navigator[OxOec71[0x4]].toLowerCase(),Ox4[OxOec71[0x3]]=(Ox4[OxOec71[0x5]].indexOf(OxOec71[0x6])>-0x1),Ox4[OxOec71[0x2]]=(Ox4[OxOec71[0x5]].indexOf(OxOec71[0x7])>-0x1),Ox4[OxOec71[0x1]]=(!Ox4[OxOec71[0x3]]&&!Ox4[OxOec71[0x2]]&&Ox4[OxOec71[0x5]].indexOf(OxOec71[0x8])>-0x1),Ox4[OxOec71[0x0]]=(!Ox4[OxOec71[0x3]]&&Ox4[OxOec71[0x5]].indexOf(OxOec71[0x9])>-0x1) ; _Browser_TypeInfo=Ox4 ;}  ; Browser__InitType() ; function Browser_IsWinIE(){return _Browser_TypeInfo[OxOec71[0x0]];}  ; function Browser_IsGecko(){return _Browser_TypeInfo[OxOec71[0x1]];}  ; function Browser_IsOpera(){return _Browser_TypeInfo[OxOec71[0x3]];}  ; function Browser_IsSafari(){return _Browser_TypeInfo[OxOec71[0x2]];}  ; function Browser_UseIESelection(){return _Browser_TypeInfo[OxOec71[0x0]];}  ; function Browser_IsCSS1Compat(){return window[OxOec71[0xb]][OxOec71[0xa]]==OxOec71[0xc];}  ; function CreateXMLHttpRequest(){try{if( typeof (XMLHttpRequest)!=OxOec71[0xd]){return  new XMLHttpRequest();} ;if( typeof (ActiveXObject)!=OxOec71[0xd]){return  new ActiveXObject(OxOec71[0xe]);} ;} catch(x){return null;} ;}  ; function LoadXMLAsync(Ox940,Ox1fe,Ox1a7,Ox941){var Oxd0=CreateXMLHttpRequest(); function Ox942(){if(Oxd0[OxOec71[0xf]]!=0x4){return ;} ; Oxd0[OxOec71[0x10]]= new Function() ;var Ox206=Oxd0; Oxd0=null ; Ox1a7(Ox206) ;}  ; Oxd0[OxOec71[0x10]]=Ox942 ; Oxd0.open(Ox940,Ox1fe,true) ; Oxd0.send(Ox941||OxOec71[0x11]) ;}  ; function Element_GetAllElements(p){var arr=[];if(Browser_IsWinIE()){for(var i=0x0;i<p[OxOec71[0x13]][OxOec71[0x12]];i++){ arr.push(p[OxOec71[0x13]].item(i)) ;} ;return arr;} ; Ox1b5(p) ; function Ox1b5(Ox27){var Ox1b6=Ox27[OxOec71[0x14]];var Ox11=Ox1b6[OxOec71[0x12]];for(var i=0x0;i<Ox11;i++){var n=Ox1b6.item(i);if(n[OxOec71[0x15]]!=0x1){continue ;} ; arr.push(n) ; Ox1b5(n) ;} ;}  ;return arr;}  ;var __ISDEBUG=false; function Debug_Todo(msg){if(!__ISDEBUG){return ;} ;throw ( new Error(msg+OxOec71[0x16]+Debug_Todo.caller));}  ; function Window_GetElement(Ox1ae,Ox83,Ox1b3){var Ox27=Ox1ae[OxOec71[0xb]].getElementById(Ox83);if(Ox27){return Ox27;} ;var Ox2f=Ox1ae[OxOec71[0xb]].getElementsByName(Ox83);if(Ox2f[OxOec71[0x12]]>0x0){return Ox2f.item(0x0);} ;return null;}  ; function CuteEditor_AddMainMenuItems(Ox5e3){}  ; function CuteEditor_AddDropMenuItems(Ox5e3,Ox5ea){}  ; function CuteEditor_AddTagMenuItems(Ox5e3,Ox5ec){}  ; function CuteEditor_AddVerbMenuItems(Ox5e3,Ox5ec){}  ; function CuteEditor_OnInitialized(editor){}  ; function CuteEditor_OnCommand(editor,Ox5f0,Ox5f1,Ox115){}  ; function CuteEditor_OnChange(editor){}  ; function CuteEditor_FilterCode(editor,Ox1e0){return Ox1e0;}  ; function CuteEditor_FilterHTML(editor,Ox1f8){return Ox1f8;}  ; function CuteEditor_FireChange(editor){ window.CuteEditor_OnChange(editor) ; CuteEditor_FireEvent(editor,OxOec71[0x17],null) ;}  ; function CuteEditor_FireInitialized(editor){ window.CuteEditor_OnInitialized(editor) ; CuteEditor_FireEvent(editor,OxOec71[0x18],null) ;}  ; function CuteEditor_FireCommand(editor,Ox5f0,Ox5f1,Ox115){var Ox130=window.CuteEditor_OnCommand(editor,Ox5f0,Ox5f1,Ox115);if(Ox130==true){return true;} ;var Ox5f8={}; Ox5f8[OxOec71[0x19]]=Ox5f0 ; Ox5f8[OxOec71[0x1a]]=Ox5f1 ; Ox5f8[OxOec71[0x1b]]=Ox115 ; Ox5f8[OxOec71[0x1c]]=true ; CuteEditor_FireEvent(editor,OxOec71[0x1d],Ox5f8) ;if(Ox5f8[OxOec71[0x1c]]==false){return true;} ;}  ; function CuteEditor_FireEvent(editor,Ox5fa,Ox5fb){if(Ox5fb==null){ Ox5fb={} ;} ;var Ox5fc=editor.getAttribute(Ox5fa);if(Ox5fc){if( typeof (Ox5fc)==OxOec71[0x1e]){ editor[OxOec71[0x20]]= new Function(OxOec71[0x1f],Ox5fc) ;} else { editor[OxOec71[0x20]]=Ox5fc ;} ; editor._fireEventFunction(Ox5fb) ;} ;}  ; function CuteEditor_GetEditor(element){for(var Ox42=element;Ox42!=null;Ox42=Ox42[OxOec71[0x21]]){if(Ox42.getAttribute(OxOec71[0x22])==OxOec71[0x23]){return Ox42;} ;} ;return null;}  ; function CuteEditor_DropDownCommand(element,Ox944){var editor=CuteEditor_GetEditor(element);if(editor[OxOec71[0x24]]){return ;} ;if(element.getAttribute(OxOec71[0x25])==OxOec71[0x23]){var Ox134=element.GetValue();if(Ox134==OxOec71[0x26]){ Ox134=OxOec71[0x11] ;} ;var Ox176=element.GetText();if(Ox176==OxOec71[0x26]){ Ox176=OxOec71[0x11] ;} ; element.SetSelectedIndex(0x0) ; editor.ExecCommand(Ox944,false,Ox134,Ox176) ;} else {if(element[OxOec71[0x27]]){var Ox134=element[OxOec71[0x27]];if(Ox134==OxOec71[0x26]){ Ox134=OxOec71[0x11] ;} ; element[OxOec71[0x28]]=0x0 ; editor.ExecCommand(Ox944,false,Ox134,Ox176) ;} else { element[OxOec71[0x28]]=0x0 ;} ;} ; editor.FocusDocument() ;}  ; function CuteEditor_ExpandTreeDropDownItem(src,Ox6b8){var Oxa3=null;while(src!=null){if(src[OxOec71[0x29]]==OxOec71[0x2a]){ Oxa3=src ;break ;} ; src=src[OxOec71[0x21]] ;} ;var Ox313=Oxa3[OxOec71[0x2b]].item(0x0); Oxa3[OxOec71[0x2e]][OxOec71[0x2d]][OxOec71[0x2c]]=OxOec71[0x11] ; Ox313[OxOec71[0x2f]]=OxOec71[0x30]+Ox6b8+OxOec71[0x31] ; Oxa3[OxOec71[0x34]]= new Function(OxOec71[0x32]+Ox6b8+OxOec71[0x33]) ; Oxa3[OxOec71[0x35]]= new Function(OxOec71[0x32]+Ox6b8+OxOec71[0x33]) ;}  ; function CuteEditor_CollapseTreeDropDownItem(src,Ox6b8){var Oxa3=null;while(src!=null){if(src[OxOec71[0x29]]==OxOec71[0x2a]){ Oxa3=src ;break ;} ; src=src[OxOec71[0x21]] ;} ;var Ox313=Oxa3[OxOec71[0x2b]].item(0x0); Oxa3[OxOec71[0x2e]][OxOec71[0x2d]][OxOec71[0x2c]]=OxOec71[0x36] ; Ox313[OxOec71[0x2f]]=OxOec71[0x30]+Ox6b8+OxOec71[0x37] ; Oxa3[OxOec71[0x34]]= new Function(OxOec71[0x38]+Ox6b8+OxOec71[0x33]) ; Oxa3[OxOec71[0x35]]= new Function(OxOec71[0x38]+Ox6b8+OxOec71[0x33]) ;}  ; function Element_Contains(element,Ox165){if(!Browser_IsOpera()){if(element[OxOec71[0x39]]){return element.contains(Ox165);} ;} ;for(;Ox165!=null;Ox165=Ox165[OxOec71[0x21]]){if(element==Ox165){return true;} ;} ;return false;}  ; function Element_SetUnselectable(element){ element.setAttribute(OxOec71[0x3a],OxOec71[0x3b]) ; element.setAttribute(OxOec71[0x3c],OxOec71[0x3d]) ;var arr=Element_GetAllElements(element);var len=arr[OxOec71[0x12]];if(!len){return ;} ;for(var i=0x0;i<len;i++){ arr[i].setAttribute(OxOec71[0x3a],OxOec71[0x3b]) ; arr[i].setAttribute(OxOec71[0x3c],OxOec71[0x3d]) ;} ;}  ; function Event_GetEvent(Ox1b9){ Ox1b9=Event_FindEvent(Ox1b9) ;if(Ox1b9==null){ Debug_Todo(OxOec71[0x3e]) ;} ;return Ox1b9;}  ; function Frame_GetContentWindow(Ox2bf){if(Ox2bf[OxOec71[0x3f]]){return Ox2bf[OxOec71[0x3f]];} ;if(Ox2bf[OxOec71[0x40]]){if(Ox2bf[OxOec71[0x40]][OxOec71[0x41]]){return Ox2bf[OxOec71[0x40]][OxOec71[0x41]];} ;} ;var Ox1ae;if(Ox2bf[OxOec71[0x42]]){ Ox1ae=window[OxOec71[0x43]][Ox2bf[OxOec71[0x42]]] ;if(Ox1ae){return Ox1ae;} ;} ;var len=window[OxOec71[0x43]][OxOec71[0x12]];for(var i=0x0;i<len;i++){ Ox1ae=window[OxOec71[0x43]][i] ;if(Ox1ae[OxOec71[0x44]]==Ox2bf){return Ox1ae;} ;if(Ox1ae[OxOec71[0xb]]==Ox2bf[OxOec71[0x40]]){return Ox1ae;} ;} ; Debug_Todo(OxOec71[0x45]) ;}  ; function Array_IndexOf(arr,Ox1bb){for(var i=0x0;i<arr[OxOec71[0x12]];i++){if(arr[i]==Ox1bb){return i;} ;} ;return -0x1;}  ; function Array_Contains(arr,Ox1bb){return Array_IndexOf(arr,Ox1bb)!=-0x1;}  ; function Event_FindEvent(Ox1b9){if(Ox1b9&&Ox1b9[OxOec71[0x46]]){return Ox1b9;} ;if(Browser_IsGecko()){return Event_FindEvent_FindEventFromCallers();} else {if(window[OxOec71[0x1f]]){return window[OxOec71[0x1f]];} ;return Event_FindEvent_FindEventFromWindows();} ;return null;}  ; function Event_FindEvent_FindEventFromCallers(){var Ox1c1=Event_GetEvent[OxOec71[0x47]];for(var i=0x0;i<0x64;i++){if(!Ox1c1){break ;} ;var Ox1b9=Ox1c1[OxOec71[0x48]][0x0];if(Ox1b9&&Ox1b9[OxOec71[0x46]]){return Ox1b9;} ; Ox1c1=Ox1c1[OxOec71[0x47]] ;} ;}  ; function Event_FindEvent_FindEventFromWindows(){var arr=[];return Ox1c3(window); function Ox1c3(Ox1ae){if(Ox1ae==null){return null;} ;if(Ox1ae[OxOec71[0x1f]]){return Ox1ae[OxOec71[0x1f]];} ;if(Array_Contains(arr,Ox1ae)){return null;} ; arr.push(Ox1ae) ;var Ox1c4=[];if(Ox1ae[OxOec71[0x49]]!=Ox1ae){ Ox1c4.push(Ox1ae.parent) ;} ;if(Ox1ae[OxOec71[0x4a]]!=Ox1ae[OxOec71[0x49]]){ Ox1c4.push(Ox1ae.top) ;} ;if(Ox1ae[OxOec71[0x4b]]){ Ox1c4.push(Ox1ae.opener) ;} ;for(var i=0x0;i<Ox1ae[OxOec71[0x43]][OxOec71[0x12]];i++){ Ox1c4.push(Ox1ae[OxOec71[0x43]][i]) ;} ;for(var i=0x0;i<Ox1c4[OxOec71[0x12]];i++){try{var Ox1b9=Ox1c3(Ox1c4[i]);if(Ox1b9){return Ox1b9;} ;} catch(x){} ;} ;return null;}  ;}  ; function Event_GetSrcElement(Ox1b9){ Ox1b9=Event_GetEvent(Ox1b9) ;if(Ox1b9[OxOec71[0x4c]]){return Ox1b9[OxOec71[0x4c]];} ;if(Ox1b9[OxOec71[0x4d]]){return Ox1b9[OxOec71[0x4d]];} ; Debug_Todo(OxOec71[0x4e]) ;return null;}  ; function Event_GetFromElement(Ox1b9){ Ox1b9=Event_GetEvent(Ox1b9) ;if(Ox1b9[OxOec71[0x4f]]){return Ox1b9[OxOec71[0x4f]];} ;if(Ox1b9[OxOec71[0x50]]){return Ox1b9[OxOec71[0x50]];} ;return null;}  ; function Event_GetToElement(Ox1b9){ Ox1b9=Event_GetEvent(Ox1b9) ;if(Ox1b9[OxOec71[0x51]]){return Ox1b9[OxOec71[0x51]];} ;if(Ox1b9[OxOec71[0x50]]){return Ox1b9[OxOec71[0x50]];} ;return null;}  ; function Event_GetKeyCode(Ox1b9){ Ox1b9=Event_GetEvent(Ox1b9) ;return Ox1b9[OxOec71[0x52]];}  ; function Event_GetClientX(Ox1b9){ Ox1b9=Event_GetEvent(Ox1b9) ;return Ox1b9[OxOec71[0x53]];}  ; function Event_GetClientY(Ox1b9){ Ox1b9=Event_GetEvent(Ox1b9) ;return Ox1b9[OxOec71[0x54]];}  ; function Event_GetOffsetX(Ox1b9){ Ox1b9=Event_GetEvent(Ox1b9) ;return Ox1b9[OxOec71[0x55]];}  ; function Event_GetOffsetY(Ox1b9){ Ox1b9=Event_GetEvent(Ox1b9) ;return Ox1b9[OxOec71[0x56]];}  ; function Event_IsLeftButton(Ox1b9){ Ox1b9=Event_GetEvent(Ox1b9) ;if(Browser_IsWinIE()){return Ox1b9[OxOec71[0x57]]==0x1;} ;if(Browser_IsGecko()){return Ox1b9[OxOec71[0x57]]==0x0;} ;return Ox1b9[OxOec71[0x57]]==0x0;}  ; function Event_IsCtrlKey(Ox1b9){ Ox1b9=Event_GetEvent(Ox1b9) ;return Ox1b9[OxOec71[0x58]];}  ; function Event_IsAltKey(Ox1b9){ Ox1b9=Event_GetEvent(Ox1b9) ;return Ox1b9[OxOec71[0x59]];}  ; function Event_IsShiftKey(Ox1b9){ Ox1b9=Event_GetEvent(Ox1b9) ;return Ox1b9[OxOec71[0x5a]];}  ; function Event_PreventDefault(Ox1b9){ Ox1b9=Event_GetEvent(Ox1b9) ; Ox1b9[OxOec71[0x1c]]=false ;if(Ox1b9[OxOec71[0x46]]){ Ox1b9.preventDefault() ;} ;}  ; function Event_CancelBubble(Ox1b9){ Ox1b9=Event_GetEvent(Ox1b9) ; Ox1b9[OxOec71[0x5b]]=true ;if(Ox1b9[OxOec71[0x5c]]){ Ox1b9.stopPropagation() ;} ;return false;}  ; function Event_CancelEvent(Ox1b9){ Ox1b9=Event_GetEvent(Ox1b9) ; Event_PreventDefault(Ox1b9) ;return Event_CancelBubble(Ox1b9);}  ; function CuteEditor_BasicInitialize(editor){var Ox948=Browser_IsOpera();var Ox682= new Function(OxOec71[0x5d]);var Ox949= new Function(OxOec71[0x5e]);var Ox94a= new Function(OxOec71[0x5f]);var Ox94b=editor.GetScriptProperty(OxOec71[0x60]);var Ox94c=editor.GetScriptProperty(OxOec71[0x61]);var Ox94d=Ox94b+OxOec71[0x62]+Ox94c+OxOec71[0x63];var Ox94e=Ox94b+OxOec71[0x64];var images=editor.getElementsByTagName(OxOec71[0x65]);var len=images[OxOec71[0x12]];for(var i=0x0;i<len;i++){var img=images[i];var Ox127=img.getAttribute(OxOec71[0x66]);var Ox5ea=img.getAttribute(OxOec71[0x67]);var Ox94f=img.getAttribute(OxOec71[0x68]);if(parseInt(Ox94f)>=0x0){ img[OxOec71[0x2d]][OxOec71[0x69]]=OxOec71[0x6a] ; img[OxOec71[0x2d]][OxOec71[0x6b]]=OxOec71[0x6a] ; img[OxOec71[0x6c]]=Ox94e ; img[OxOec71[0x2d]][OxOec71[0x6d]]=OxOec71[0x6e]+Ox94d+OxOec71[0x6f] ; img[OxOec71[0x2d]][OxOec71[0x70]]=OxOec71[0x71]+(Ox94f*0x14)+OxOec71[0x72] ; img[OxOec71[0x2d]][OxOec71[0x2c]]=OxOec71[0x11] ;} ;if(!Ox127&&!Ox5ea){if(Ox948){ img[OxOec71[0x73]]=CuteEditor_OperaHandleImageLoaded ;} ;continue ;} ;if(img[OxOec71[0x74]]!=OxOec71[0x75]){ img[OxOec71[0x74]]=OxOec71[0x76] ; img[OxOec71[0x78]]= new Function(OxOec71[0x77]) ; img[OxOec71[0x7a]]= new Function(OxOec71[0x79]) ; img[OxOec71[0x35]]= new Function(OxOec71[0x7b]) ; img[OxOec71[0x7d]]= new Function(OxOec71[0x7c]) ;} ;if(!img[OxOec71[0x7e]]){ img[OxOec71[0x7e]]=Event_CancelEvent ;} ;if(!img[OxOec71[0x7f]]){ img[OxOec71[0x7f]]=Event_CancelEvent ;} ;if(Ox127){var Ox1c1=img.getAttribute(OxOec71[0x80])==OxOec71[0x23]?Ox949:Ox682;if(img[OxOec71[0x34]]==null){ img[OxOec71[0x34]]=Ox1c1 ;} ;if(img[OxOec71[0x81]]==null){ img[OxOec71[0x81]]=Ox1c1 ;} ;} else {if(Ox5ea){if(img[OxOec71[0x34]]==null){ img[OxOec71[0x34]]=Ox94a ;} ;} ;} ;} ;var Ox6ed=Window_GetElement(window,editor.GetScriptProperty(OxOec71[0x82]),true);var Ox6ee=Window_GetElement(window,editor.GetScriptProperty(OxOec71[0x83]),true);var Ox6e9=Window_GetElement(window,editor.GetScriptProperty(OxOec71[0x84]),true); Ox6e9[OxOec71[0x74]]+=OxOec71[0x85] ; Ox6ed[OxOec71[0x74]]+=OxOec71[0x86] ; Ox6ee[OxOec71[0x74]]+=OxOec71[0x86] ; Element_SetUnselectable(Ox6ed) ; Element_SetUnselectable(Ox6ee) ;var Ox76b=editor.GetScriptProperty(OxOec71[0x87]);switch(Ox76b){case OxOec71[0x8a]: Ox6ed[OxOec71[0x2d]][OxOec71[0x2c]]=OxOec71[0x11] ;break ;case OxOec71[0x89]: Ox6ee[OxOec71[0x2d]][OxOec71[0x2c]]=OxOec71[0x11] ;break ;case OxOec71[0x88]:break ;;;;} ;}  ; function CuteEditor_OperaHandleImageLoaded(){var img=this;if(img[OxOec71[0x2d]][OxOec71[0x2c]]){ img[OxOec71[0x2d]][OxOec71[0x2c]]=OxOec71[0x36] ; setTimeout(function Ox951(){ img[OxOec71[0x2d]][OxOec71[0x2c]]=OxOec71[0x11] ;} ,0x1) ;} ;}  ; function CuteEditor_ButtonOver(element){if(!element[OxOec71[0x8b]]){ element[OxOec71[0x7e]]=Event_CancelEvent ; element[OxOec71[0x7a]]=CuteEditor_ButtonOut ; element[OxOec71[0x35]]=CuteEditor_ButtonDown ; element[OxOec71[0x7d]]=CuteEditor_ButtonUp ; Element_SetUnselectable(element) ; element[OxOec71[0x8b]]=true ;} ; element[OxOec71[0x8c]]=true ; element[OxOec71[0x74]]=OxOec71[0x8d] ;}  ; function CuteEditor_ButtonOut(){var element=this; element[OxOec71[0x74]]=OxOec71[0x76] ; element[OxOec71[0x8c]]=false ;}  ; function CuteEditor_ButtonDown(){if(!Event_IsLeftButton()){return ;} ;var element=this; element[OxOec71[0x74]]=OxOec71[0x8e] ;}  ; function CuteEditor_ButtonUp(){if(!Event_IsLeftButton()){return ;} ;var element=this;if(element[OxOec71[0x8c]]){ element[OxOec71[0x74]]=OxOec71[0x8d] ;} else { element[OxOec71[0x74]]=OxOec71[0x8f] ;} ;}  ; function CuteEditor_ColorPicker_ButtonOver(element){if(!element[OxOec71[0x8b]]){ element[OxOec71[0x7e]]=Event_CancelEvent ; element[OxOec71[0x7a]]=CuteEditor_ColorPicker_ButtonOut ; element[OxOec71[0x35]]=CuteEditor_ColorPicker_ButtonDown ; Element_SetUnselectable(element) ; element[OxOec71[0x8b]]=true ;} ; element[OxOec71[0x8c]]=true ; element[OxOec71[0x2d]][OxOec71[0x90]]=OxOec71[0x91] ; element[OxOec71[0x2d]][OxOec71[0x92]]=OxOec71[0x93] ; element[OxOec71[0x2d]][OxOec71[0x94]]=OxOec71[0x95] ;}  ; function CuteEditor_ColorPicker_ButtonOut(){var element=this; element[OxOec71[0x8c]]=false ; element[OxOec71[0x2d]][OxOec71[0x90]]=OxOec71[0x96] ; element[OxOec71[0x2d]][OxOec71[0x92]]=OxOec71[0x11] ; element[OxOec71[0x2d]][OxOec71[0x94]]=OxOec71[0x95] ;}  ; function CuteEditor_ColorPicker_ButtonDown(){var element=this; element[OxOec71[0x2d]][OxOec71[0x90]]=OxOec71[0x97] ; element[OxOec71[0x2d]][OxOec71[0x92]]=OxOec71[0x11] ; element[OxOec71[0x2d]][OxOec71[0x94]]=OxOec71[0x95] ;}  ; function CuteEditor_ButtonCommandOver(element){ element[OxOec71[0x8c]]=true ;if(element[OxOec71[0x98]]){ element[OxOec71[0x74]]=OxOec71[0x99] ;} else { element[OxOec71[0x74]]=OxOec71[0x8d] ;} ;}  ; function CuteEditor_ButtonCommandOut(element){ element[OxOec71[0x8c]]=false ;if(element[OxOec71[0x9a]]){ element[OxOec71[0x74]]=OxOec71[0x9b] ;} else {if(element[OxOec71[0x98]]){ element[OxOec71[0x74]]=OxOec71[0x99] ;} else {if(element[OxOec71[0x42]]!=OxOec71[0x9c]){ element[OxOec71[0x74]]=OxOec71[0x76] ;} ;} ;} ;}  ; function CuteEditor_ButtonCommandDown(element){if(!Event_IsLeftButton()){return ;} ; element[OxOec71[0x74]]=OxOec71[0x8e] ;}  ; function CuteEditor_ButtonCommandUp(element){if(!Event_IsLeftButton()){return ;} ;if(element[OxOec71[0x98]]){ element[OxOec71[0x74]]=OxOec71[0x99] ;return ;} ;if(element[OxOec71[0x8c]]){ element[OxOec71[0x74]]=OxOec71[0x8d] ;} else {if(element[OxOec71[0x9a]]){ element[OxOec71[0x74]]=OxOec71[0x9b] ;} else { element[OxOec71[0x74]]=OxOec71[0x76] ;} ;} ;}  ;var CuteEditorGlobalFunctions=[CuteEditor_GetEditor,CuteEditor_ButtonOver,CuteEditor_ButtonOut,CuteEditor_ButtonDown,CuteEditor_ButtonUp,CuteEditor_ColorPicker_ButtonOver,CuteEditor_ColorPicker_ButtonOut,CuteEditor_ColorPicker_ButtonDown,CuteEditor_ButtonCommandOver,CuteEditor_ButtonCommandOut,CuteEditor_ButtonCommandDown,CuteEditor_ButtonCommandUp,CuteEditor_DropDownCommand,CuteEditor_ExpandTreeDropDownItem,CuteEditor_CollapseTreeDropDownItem,CuteEditor_OnInitialized,CuteEditor_OnCommand,CuteEditor_OnChange,CuteEditor_AddVerbMenuItems,CuteEditor_AddTagMenuItems,CuteEditor_AddMainMenuItems,CuteEditor_AddDropMenuItems,CuteEditor_FilterCode,CuteEditor_FilterHTML]; function SetupCuteEditorGlobalFunctions(){for(var i=0x0;i<CuteEditorGlobalFunctions[OxOec71[0x12]];i++){var Ox1c1=CuteEditorGlobalFunctions[i];var name=Ox1c1+OxOec71[0x11]; name=name.substr(0x8,name.indexOf(OxOec71[0x9d])-0x8).replace(/\s/g,OxOec71[0x11]) ;if(!window[name]){ window[name]=Ox1c1 ;} ;} ;}  ; SetupCuteEditorGlobalFunctions() ;var __danainfo=null;var danaurl=window[OxOec71[0x9f]][OxOec71[0x9e]];var danapos=danaurl.indexOf(OxOec71[0xa0]);if(danapos!=-0x1){var pluspos1=danaurl.indexOf(OxOec71[0xa1],danapos+0xa);var pluspos2=danaurl.indexOf(OxOec71[0xa2],danapos+0xa);if(pluspos1!=-0x1&&pluspos1<pluspos2){ pluspos2=pluspos1 ;} ; __danainfo=danaurl.substring(danapos,pluspos2)+OxOec71[0xa2] ;} ; function CuteEditor_GetScriptProperty(name){var Ox134=this[OxOec71[0xa3]][name];if(Ox134&&__danainfo){if(name==OxOec71[0x60]){return Ox134+__danainfo;} ;var Ox2f8=this[OxOec71[0xa3]][OxOec71[0x60]];if(Ox134.substr(0x0,Ox2f8.length)==Ox2f8){return Ox2f8+__danainfo+Ox134.substring(Ox2f8.length);} ;} ;return Ox134;}  ; function CuteEditor_SetScriptProperty(name,Ox134){if(Ox134==null){ this[OxOec71[0xa3]][name]=null ;} else { this[OxOec71[0xa3]][name]=String(Ox134) ;} ;}  ; function CuteEditorInitialize(Ox95c,Ox95d){var editor=Window_GetElement(window,Ox95c,true); editor[OxOec71[0xa3]]=Ox95d ; editor[OxOec71[0xa4]]=CuteEditor_GetScriptProperty ;var Ox6e9=Window_GetElement(window,editor.GetScriptProperty(OxOec71[0x84]),true);var editwin,editdoc;try{ editwin=Frame_GetContentWindow(Ox6e9) ; editdoc=editwin[OxOec71[0xb]] ;} catch(x){} ;var Ox95e=false;var Ox95f;var Ox960=false;var Ox961=editor.GetScriptProperty(OxOec71[0x60])+OxOec71[0xa5]; function Ox962(){if( typeof (window[OxOec71[0xa6]])==OxOec71[0xa7]){return ;} ; LoadXMLAsync(OxOec71[0xa8],Ox961+OxOec71[0xa9],Ox963) ;}  ; function Ox963(Ox206){if(Ox206[OxOec71[0xaa]]!=0xc8){ alert(OxOec71[0xab]) ;return ;} ; LoadXMLAsync(OxOec71[0xac],Ox961+OxOec71[0xad]+Ox206.responseText,Ox964) ;}  ; function Ox964(Ox206){if(Ox206[OxOec71[0xaa]]!=0xc8){ alert(OxOec71[0xae]) ;return ;} ; CuteEditorInstallScriptCode(Ox206.responseText,OxOec71[0xa6]) ;if(Ox95e){ Ox965() ;} ;}  ; function Ox965(){if(Ox960){return ;} ; Ox960=true ; window.CuteEditorImplementation(editor) ;try{ editor[OxOec71[0x2d]][OxOec71[0xaf]]=OxOec71[0xb0] ;} catch(x){} ;try{ editdoc[OxOec71[0xb1]][OxOec71[0x2d]][OxOec71[0xaf]]=OxOec71[0xb0] ;} catch(x){} ;var Ox966=editor.GetScriptProperty(OxOec71[0xb2]);if(Ox966){ editor.Eval(Ox966) ;} ;}  ; function Ox967(){if(!Element_Contains(window[OxOec71[0xb]].body,editor)){return ;} ;try{ Ox6e9=Window_GetElement(window,editor.GetScriptProperty(OxOec71[0x84]),true) ; editwin=Frame_GetContentWindow(Ox6e9) ; editdoc=editwin[OxOec71[0xb]] ;var y=editdoc[OxOec71[0xb1]];} catch(x){ setTimeout(Ox967,0x64) ;return ;} ;if(!editdoc[OxOec71[0xb1]]){ setTimeout(Ox967,0x64) ;return ;} ;if(!Ox95e){ Ox6e9[OxOec71[0x2d]][OxOec71[0x2c]]=OxOec71[0xb3] ;if(Browser_IsOpera()){ editdoc[OxOec71[0xb1]][OxOec71[0xb4]]=true ;} else {if(Browser_IsGecko()){ editdoc[OxOec71[0xb1]][OxOec71[0x2f]]=OxOec71[0xb5] ;} ; editdoc[OxOec71[0xb6]]=OxOec71[0x3b] ;} ; Ox95e=true ; setTimeout(Ox967,0x32) ;return ;} ;if( typeof (window[OxOec71[0xa6]])==OxOec71[0xa7]){ Ox965() ;} else {try{ editdoc[OxOec71[0xb1]][OxOec71[0x2d]][OxOec71[0xaf]]=OxOec71[0xb7] ;} catch(x){} ;} ;}  ;var Ox968=0x0;var Ox42=CuteEditor_Find_DisplayNone(editor);if(Ox42){ function Ox969(){if(Ox42[OxOec71[0x2d]][OxOec71[0x2c]]!=OxOec71[0x36]){ window.clearInterval(Ox968) ; Ox968=OxOec71[0x11] ; CuteEditorInitialize(Ox95c,Ox95d) ;} ;}  ; Ox968=setInterval(Ox969,0x3e8) ;} else { CuteEditor_BasicInitialize(editor) ; Ox962() ; Ox967() ;} ; function CuteEditor_Find_DisplayNone(element){var Ox96b;for(var Ox42=element;Ox42!=null;Ox42=Ox42[OxOec71[0x21]]){if(Ox42[OxOec71[0x2d]]&&Ox42[OxOec71[0x2d]][OxOec71[0x2c]]==OxOec71[0x36]){ Ox96b=Ox42 ;break ;} ;} ;return Ox96b;}  ;}  ; function CuteEditorInstallScriptCode(Ox904,Ox905){ eval(Ox904) ; window[Ox905]=eval(Ox905) ;}  ; window[OxOec71[0xb8]]=CuteEditorInitialize ;