var OxOc3c6=["SetStyle","length","","GetStyle","GetText",":",";","cssText","inp_color","inp_color_Preview","tb_image","btnbrowse","sel_bgrepeat","sel_bgattach","sel_hor","tb_hor","sel_hor_unit","sel_ver","tb_ver","sel_ver_unit","outer","div_demo","onclick","value","disabled","selectedIndex","style","backgroundImage","backgroundColor","backgroundRepeat","backgroundAttachment","backgroundPositionX","options","backgroundPositionY","url(",")","background-image","backgroundPosition","none"]; function pause(Ox41b){var Ox91= new Date();var Ox41c=Ox91.getTime()+Ox41b;while(true){ Ox91= new Date() ;if(Ox91.getTime()>Ox41c){return ;} ;} ;}  ; function StyleClass(Ox176){var Ox41e=[];var Ox41f={};if(Ox176){ Ox424() ;} ; this[OxOc3c6[0x0]]=function SetStyle(name,Ox115,Ox421){ name=name.toLowerCase() ;for(var i=0x0;i<Ox41e[OxOc3c6[0x1]];i++){if(Ox41e[i]==name){break ;} ;} ; Ox41e[i]=name ; Ox41f[name]=Ox115?(Ox115+(Ox421||OxOc3c6[0x2])):OxOc3c6[0x2] ;}  ; this[OxOc3c6[0x3]]=function GetStyle(name){ name=name.toLowerCase() ;return Ox41f[name]||OxOc3c6[0x2];}  ; this[OxOc3c6[0x4]]=function Ox423(){var Ox176=OxOc3c6[0x2];for(var i=0x0;i<Ox41e[OxOc3c6[0x1]];i++){var n=Ox41e[i];var p=Ox41f[n];if(p){ Ox176+=n+OxOc3c6[0x5]+p+OxOc3c6[0x6] ;} ;} ;return Ox176;}  ; function Ox424(){var arr=Ox176.split(OxOc3c6[0x6]);for(var i=0x0;i<arr[OxOc3c6[0x1]];i++){var p=arr[i].split(OxOc3c6[0x5]);var n=p[0x0].replace(/^\s+/g,OxOc3c6[0x2]).replace(/\s+$/g,OxOc3c6[0x2]).toLowerCase(); Ox41e[Ox41e[OxOc3c6[0x1]]]=n ; Ox41f[n]=p[0x1] ;} ;}  ;}  ; function GetStyle(Ox129,name){return  new StyleClass(Ox129.cssText).GetStyle(name);}  ; function SetStyle(Ox129,name,Ox115,Ox425){var Ox426= new StyleClass(Ox129.cssText); Ox426.SetStyle(name,Ox115,Ox425) ; Ox129[OxOc3c6[0x7]]=Ox426.GetText() ;}  ; function ParseFloatToString(Ox24){var Ox8=parseFloat(Ox24);if(isNaN(Ox8)){return OxOc3c6[0x2];} ;return Ox8+OxOc3c6[0x2];}  ;var inp_color=Window_GetElement(window,OxOc3c6[0x8],true);var inp_color_Preview=Window_GetElement(window,OxOc3c6[0x9],true);var tb_image=Window_GetElement(window,OxOc3c6[0xa],true);var btnbrowse=Window_GetElement(window,OxOc3c6[0xb],true);var sel_bgrepeat=Window_GetElement(window,OxOc3c6[0xc],true);var sel_bgattach=Window_GetElement(window,OxOc3c6[0xd],true);var sel_hor=Window_GetElement(window,OxOc3c6[0xe],true);var tb_hor=Window_GetElement(window,OxOc3c6[0xf],true);var sel_hor_unit=Window_GetElement(window,OxOc3c6[0x10],true);var sel_ver=Window_GetElement(window,OxOc3c6[0x11],true);var tb_ver=Window_GetElement(window,OxOc3c6[0x12],true);var sel_ver_unit=Window_GetElement(window,OxOc3c6[0x13],true);var outer=Window_GetElement(window,OxOc3c6[0x14],true);var div_demo=Window_GetElement(window,OxOc3c6[0x15],true); btnbrowse[OxOc3c6[0x16]]=function btnbrowse_onclick(){ function Ox2d3(Ox130){if(Ox130){ tb_image[OxOc3c6[0x17]]=Ox130 ;} ;}  ; editor.SetNextDialogWindow(window) ;if(Browser_IsSafari()){ editor.ShowSelectImageDialog(Ox2d3,tb_image.value,tb_image) ;} else { editor.ShowSelectImageDialog(Ox2d3,tb_image.value) ;} ;}  ; UpdateState=function UpdateState_Background(){ tb_hor[OxOc3c6[0x18]]=sel_hor_unit[OxOc3c6[0x18]]=(sel_hor[OxOc3c6[0x19]]>0x0) ; tb_ver[OxOc3c6[0x18]]=sel_ver_unit[OxOc3c6[0x18]]=(sel_ver[OxOc3c6[0x19]]>0x0) ; div_demo[OxOc3c6[0x1a]][OxOc3c6[0x7]]=element[OxOc3c6[0x1a]][OxOc3c6[0x7]] ;}  ; SyncToView=function SyncToView_Background(){ tb_image[OxOc3c6[0x17]]=element[OxOc3c6[0x1a]][OxOc3c6[0x1b]] ; FixTbImage() ; inp_color[OxOc3c6[0x17]]=element[OxOc3c6[0x1a]][OxOc3c6[0x1c]] ; inp_color[OxOc3c6[0x1a]][OxOc3c6[0x1c]]=element[OxOc3c6[0x1a]][OxOc3c6[0x1c]] ; inp_color_Preview[OxOc3c6[0x1a]][OxOc3c6[0x1c]]=element[OxOc3c6[0x1a]][OxOc3c6[0x1c]] ; sel_bgrepeat[OxOc3c6[0x17]]=element[OxOc3c6[0x1a]][OxOc3c6[0x1d]] ; sel_bgattach[OxOc3c6[0x17]]=element[OxOc3c6[0x1a]][OxOc3c6[0x1e]] ; sel_hor[OxOc3c6[0x17]]=element[OxOc3c6[0x1a]][OxOc3c6[0x1f]] ; sel_hor_unit[OxOc3c6[0x19]]=0x0 ;if(sel_hor[OxOc3c6[0x19]]==-0x1){if(ParseFloatToString(element[OxOc3c6[0x1a]].backgroundPositionX)){ tb_hor[OxOc3c6[0x17]]=ParseFloatToString(element[OxOc3c6[0x1a]].backgroundPositionX) ;for(var i=0x0;i<sel_hor_unit[OxOc3c6[0x20]][OxOc3c6[0x1]];i++){var Ox134=sel_hor_unit[OxOc3c6[0x20]][i][OxOc3c6[0x17]];if(Ox134&&element[OxOc3c6[0x1a]][OxOc3c6[0x1f]].indexOf(Ox134)!=-0x1){ sel_hor_unit[OxOc3c6[0x19]]=i ;break ;} ;} ;} ;} ; sel_ver[OxOc3c6[0x17]]=element[OxOc3c6[0x1a]][OxOc3c6[0x21]] ; sel_ver_unit[OxOc3c6[0x19]]=0x0 ;if(sel_ver[OxOc3c6[0x19]]==-0x1){if(ParseFloatToString(element[OxOc3c6[0x1a]].backgroundPositionY)){ tb_ver[OxOc3c6[0x17]]=ParseFloatToString(element[OxOc3c6[0x1a]].backgroundPositionY) ;for(var i=0x0;i<sel_ver_unit[OxOc3c6[0x20]][OxOc3c6[0x1]];i++){var Ox134=sel_ver_unit[OxOc3c6[0x20]][i][OxOc3c6[0x17]];if(Ox134&&element[OxOc3c6[0x1a]][OxOc3c6[0x21]].indexOf(Ox134)!=-0x1){ sel_ver_unit[OxOc3c6[0x19]]=i ;break ;} ;} ;} ;} ;}  ; SyncTo=function SyncTo_Background(element){if(tb_image[OxOc3c6[0x17]]){ element[OxOc3c6[0x1a]][OxOc3c6[0x1b]]=OxOc3c6[0x22]+tb_image[OxOc3c6[0x17]]+OxOc3c6[0x23] ;} else { SetStyle(element.style,OxOc3c6[0x24],OxOc3c6[0x2]) ;} ;try{ element[OxOc3c6[0x1a]][OxOc3c6[0x1c]]=inp_color[OxOc3c6[0x17]]||OxOc3c6[0x2] ;} catch(x){ element[OxOc3c6[0x1a]][OxOc3c6[0x1c]]=OxOc3c6[0x2] ;} ; element[OxOc3c6[0x1a]][OxOc3c6[0x1d]]=sel_bgrepeat[OxOc3c6[0x17]]||OxOc3c6[0x2] ; element[OxOc3c6[0x1a]][OxOc3c6[0x1e]]=sel_bgattach[OxOc3c6[0x17]]||OxOc3c6[0x2] ; element[OxOc3c6[0x1a]][OxOc3c6[0x25]]=OxOc3c6[0x2] ;if(sel_hor[OxOc3c6[0x19]]>0x0){ element[OxOc3c6[0x1a]][OxOc3c6[0x1f]]=sel_hor[OxOc3c6[0x17]] ;} else {if(ParseFloatToString(tb_hor.value)){ element[OxOc3c6[0x1a]][OxOc3c6[0x1f]]=ParseFloatToString(tb_hor.value)+sel_hor_unit[OxOc3c6[0x17]] ;} else { element[OxOc3c6[0x1a]][OxOc3c6[0x1f]]=OxOc3c6[0x2] ;} ;} ;if(sel_ver[OxOc3c6[0x19]]>0x0){ element[OxOc3c6[0x1a]][OxOc3c6[0x21]]=sel_ver[OxOc3c6[0x17]] ;} else {if(ParseFloatToString(tb_ver.value)){ element[OxOc3c6[0x1a]][OxOc3c6[0x21]]=ParseFloatToString(tb_ver.value)+sel_ver_unit[OxOc3c6[0x17]] ;} else { element[OxOc3c6[0x1a]][OxOc3c6[0x21]]=OxOc3c6[0x2] ;} ;} ;}  ; function FixTbImage(){var Ox134=tb_image[OxOc3c6[0x17]].replace(/^(\s+)/g,OxOc3c6[0x2]).replace(/(\s+)$/g,OxOc3c6[0x2]);if(Ox134.substr(0x0,0x4).toLowerCase()==OxOc3c6[0x22]){ Ox134=Ox134.substr(0x4,Ox134[OxOc3c6[0x1]]-0x4) ;} ;if(Ox134.substr(Ox134[OxOc3c6[0x1]]-0x1,0x1)==OxOc3c6[0x23]){ Ox134=Ox134.substr(0x0,Ox134[OxOc3c6[0x1]]-0x1) ;} ;if(Ox134==OxOc3c6[0x26]){ Ox134=OxOc3c6[0x2] ;} ; tb_image[OxOc3c6[0x17]]=Ox134 ;}  ; inp_color[OxOc3c6[0x16]]=inp_color_Preview[OxOc3c6[0x16]]=function inp_color_onclick(){ SelectColor(inp_color,inp_color_Preview) ;}  ;