var OxO48f7=["inp_src","btnbrowse","AlternateText","inp_id","longDesc","Align","optNotSet","optLeft","optRight","optTexttop","optAbsMiddle","optBaseline","optAbsBottom","optBottom","optMiddle","optTop","Border","bordercolor","bordercolor_Preview","inp_width","imgLock","inp_height","constrain_prop","HSpace","VSpace","outer","img_demo","onclick","src","height","width","value","cssText","style","","src_cetemp","id","vspace","hspace","border","borderColor"," ","backgroundColor","align","alt","[[ValidNumber]]","[[ValidID]]","longdesc","checked","Load.ashx?type=image\x26file=locked.gif","Load.ashx?type=image\x26file=1x1.gif","length"];var inp_src=Window_GetElement(window,OxO48f7[0x0],true);var btnbrowse=Window_GetElement(window,OxO48f7[0x1],true);var AlternateText=Window_GetElement(window,OxO48f7[0x2],true);var inp_id=Window_GetElement(window,OxO48f7[0x3],true);var longDesc=Window_GetElement(window,OxO48f7[0x4],true);var Align=Window_GetElement(window,OxO48f7[0x5],true);var optNotSet=Window_GetElement(window,OxO48f7[0x6],true);var optLeft=Window_GetElement(window,OxO48f7[0x7],true);var optRight=Window_GetElement(window,OxO48f7[0x8],true);var optTexttop=Window_GetElement(window,OxO48f7[0x9],true);var optAbsMiddle=Window_GetElement(window,OxO48f7[0xa],true);var optBaseline=Window_GetElement(window,OxO48f7[0xb],true);var optAbsBottom=Window_GetElement(window,OxO48f7[0xc],true);var optBottom=Window_GetElement(window,OxO48f7[0xd],true);var optMiddle=Window_GetElement(window,OxO48f7[0xe],true);var optTop=Window_GetElement(window,OxO48f7[0xf],true);var Border=Window_GetElement(window,OxO48f7[0x10],true);var bordercolor=Window_GetElement(window,OxO48f7[0x11],true);var bordercolor_Preview=Window_GetElement(window,OxO48f7[0x12],true);var inp_width=Window_GetElement(window,OxO48f7[0x13],true);var imgLock=Window_GetElement(window,OxO48f7[0x14],true);var inp_height=Window_GetElement(window,OxO48f7[0x15],true);var constrain_prop=Window_GetElement(window,OxO48f7[0x16],true);var HSpace=Window_GetElement(window,OxO48f7[0x17],true);var VSpace=Window_GetElement(window,OxO48f7[0x18],true);var outer=Window_GetElement(window,OxO48f7[0x19],true);var img_demo=Window_GetElement(window,OxO48f7[0x1a],true); btnbrowse[OxO48f7[0x1b]]=function btnbrowse_onclick(){ function Ox2d3(Ox130){if(Ox130){ function Actualsize(){var Ox66= new Image(); Ox66[OxO48f7[0x1c]]=Ox130 ;if(Ox66[OxO48f7[0x1e]]>0x0&&Ox66[OxO48f7[0x1d]]>0x0){ inp_width[OxO48f7[0x1f]]=Ox66[OxO48f7[0x1e]] ; inp_height[OxO48f7[0x1f]]=Ox66[OxO48f7[0x1d]] ; FireUIChanged() ;} else { setTimeout(Actualsize,0x190) ;} ;}  ; inp_src[OxO48f7[0x1f]]=Ox130 ; setTimeout(Actualsize,0x190) ;} ;}  ; editor.SetNextDialogWindow(window) ;if(Browser_IsSafari()){ editor.ShowSelectImageDialog(Ox2d3,inp_src.value,inp_src) ;} else { editor.ShowSelectImageDialog(Ox2d3,inp_src.value) ;} ;}  ; UpdateState=function UpdateState_Image(){ img_demo[OxO48f7[0x21]][OxO48f7[0x20]]=element[OxO48f7[0x21]][OxO48f7[0x20]] ;if(Browser_IsWinIE()){ img_demo.mergeAttributes(element) ;} ;if(element[OxO48f7[0x1c]]){ img_demo[OxO48f7[0x1c]]=element[OxO48f7[0x1c]] ;} else { img_demo.removeAttribute(OxO48f7[0x1c]) ;} ;}  ; SyncToView=function SyncToView_Image(){var src; src=element.getAttribute(OxO48f7[0x1c])+OxO48f7[0x22] ;if(element.getAttribute(OxO48f7[0x23])){ src=element.getAttribute(OxO48f7[0x23])+OxO48f7[0x22] ;} ; inp_src[OxO48f7[0x1f]]=src ; inp_width[OxO48f7[0x1f]]=element[OxO48f7[0x1e]] ; inp_height[OxO48f7[0x1f]]=element[OxO48f7[0x1d]] ; inp_id[OxO48f7[0x1f]]=element[OxO48f7[0x24]] ;if(element[OxO48f7[0x25]]<=0x0){ VSpace[OxO48f7[0x1f]]=OxO48f7[0x22] ;} else { VSpace[OxO48f7[0x1f]]=element[OxO48f7[0x25]] ;} ;if(element[OxO48f7[0x26]]<=0x0){ HSpace[OxO48f7[0x1f]]=OxO48f7[0x22] ;} else { HSpace[OxO48f7[0x1f]]=element[OxO48f7[0x26]] ;} ; Border[OxO48f7[0x1f]]=element[OxO48f7[0x27]] ;if(Browser_IsWinIE()){ bordercolor[OxO48f7[0x1f]]=element[OxO48f7[0x21]][OxO48f7[0x28]] ;} else {var arr=revertColor(element[OxO48f7[0x21]].borderColor).split(OxO48f7[0x29]); bordercolor[OxO48f7[0x1f]]=arr[0x0] ;} ; bordercolor[OxO48f7[0x21]][OxO48f7[0x2a]]=bordercolor[OxO48f7[0x1f]]||OxO48f7[0x22] ; bordercolor[OxO48f7[0x21]][OxO48f7[0x2a]]=bordercolor[OxO48f7[0x1f]] ; bordercolor_Preview[OxO48f7[0x21]][OxO48f7[0x2a]]=bordercolor[OxO48f7[0x1f]] ; Align[OxO48f7[0x1f]]=element[OxO48f7[0x2b]] ; AlternateText[OxO48f7[0x1f]]=element[OxO48f7[0x2c]] ; longDesc[OxO48f7[0x1f]]=element[OxO48f7[0x4]] ;}  ; SyncTo=function SyncTo_Image(element){ element[OxO48f7[0x1c]]=inp_src[OxO48f7[0x1f]] ; element.setAttribute(OxO48f7[0x23],inp_src.value) ; element[OxO48f7[0x27]]=Border[OxO48f7[0x1f]] ; element[OxO48f7[0x26]]=HSpace[OxO48f7[0x1f]] ; element[OxO48f7[0x25]]=VSpace[OxO48f7[0x1f]] ;try{ element[OxO48f7[0x1e]]=inp_width[OxO48f7[0x1f]] ; element[OxO48f7[0x1d]]=inp_height[OxO48f7[0x1f]] ;} catch(er){ alert(OxO48f7[0x2d]) ;return false;} ;if(element[OxO48f7[0x21]][OxO48f7[0x1e]]||element[OxO48f7[0x21]][OxO48f7[0x1d]]){try{ element[OxO48f7[0x21]][OxO48f7[0x1e]]=inp_width[OxO48f7[0x1f]] ; element[OxO48f7[0x21]][OxO48f7[0x1d]]=inp_height[OxO48f7[0x1f]] ;} catch(er){ alert(OxO48f7[0x2d]) ;return false;} ;} ;var Ox2ec=/[^a-z\d]/i;if(Ox2ec.test(inp_id.value)){ alert(OxO48f7[0x2e]) ;return ;} ; element[OxO48f7[0x24]]=inp_id[OxO48f7[0x1f]] ; element[OxO48f7[0x2b]]=Align[OxO48f7[0x1f]] ; element[OxO48f7[0x2c]]=AlternateText[OxO48f7[0x1f]] ; element[OxO48f7[0x4]]=longDesc[OxO48f7[0x1f]] ; element[OxO48f7[0x21]][OxO48f7[0x28]]=bordercolor[OxO48f7[0x1f]] ;if(element[OxO48f7[0x2f]]==OxO48f7[0x22]||element[OxO48f7[0x2f]]==null){ element.removeAttribute(OxO48f7[0x2f]) ;} ;if(element[OxO48f7[0x4]]==OxO48f7[0x22]||element[OxO48f7[0x4]]==null){ element.removeAttribute(OxO48f7[0x4]) ;} ;if(element[OxO48f7[0x1e]]==0x0){ element.removeAttribute(OxO48f7[0x1e]) ;} ;if(element[OxO48f7[0x1d]]==0x0){ element.removeAttribute(OxO48f7[0x1d]) ;} ;if(element[OxO48f7[0x26]]==OxO48f7[0x22]){ element.removeAttribute(OxO48f7[0x26]) ;} ;if(element[OxO48f7[0x25]]==OxO48f7[0x22]){ element.removeAttribute(OxO48f7[0x25]) ;} ;if(element[OxO48f7[0x24]]==OxO48f7[0x22]){ element.removeAttribute(OxO48f7[0x24]) ;} ;if(element[OxO48f7[0x2b]]==OxO48f7[0x22]){ element.removeAttribute(OxO48f7[0x2b]) ;} ;if(element[OxO48f7[0x27]]==OxO48f7[0x22]){ element.removeAttribute(OxO48f7[0x27]) ;} ;}  ; function toggleConstrains(){if(constrain_prop[OxO48f7[0x30]]){ imgLock[OxO48f7[0x1c]]=OxO48f7[0x31] ; checkConstrains(OxO48f7[0x1e]) ;} else { imgLock[OxO48f7[0x1c]]=OxO48f7[0x32] ;} ;}  ;var checkingConstrains=false; function checkConstrains(Ox63){if(checkingConstrains){return ;} ; checkingConstrains=true ;try{var Ox8,Ox2b;if(constrain_prop[OxO48f7[0x30]]){var Ox66= new Image(); Ox66[OxO48f7[0x1c]]=inp_src[OxO48f7[0x1f]] ;var Ox397=Ox66[OxO48f7[0x1e]];var Ox398=Ox66[OxO48f7[0x1d]];if((Ox397>0x0)&&(Ox398>0x0)){var Ox5d=inp_width[OxO48f7[0x1f]];var Ox5c=inp_height[OxO48f7[0x1f]];if(Ox63==OxO48f7[0x1e]){if(Ox5d[OxO48f7[0x33]]==0x0||isNaN(Ox5d)){ inp_width[OxO48f7[0x1f]]=OxO48f7[0x22] ; inp_height[OxO48f7[0x1f]]=OxO48f7[0x22] ;} else { Ox5c=parseInt(Ox5d*Ox398/Ox397) ; inp_height[OxO48f7[0x1f]]=Ox5c ;} ;} ;if(Ox63==OxO48f7[0x1d]){if(Ox5c[OxO48f7[0x33]]==0x0||isNaN(Ox5c)){ inp_width[OxO48f7[0x1f]]=OxO48f7[0x22] ; inp_height[OxO48f7[0x1f]]=OxO48f7[0x22] ;} else { Ox5d=parseInt(Ox5c*Ox397/Ox398) ; inp_width[OxO48f7[0x1f]]=Ox5d ;} ;} ;} ;} ;} finally{ checkingConstrains=false ;} ;}  ; bordercolor[OxO48f7[0x1b]]=bordercolor_Preview[OxO48f7[0x1b]]=function bordercolor_onclick(){ SelectColor(bordercolor,bordercolor_Preview) ;}  ;