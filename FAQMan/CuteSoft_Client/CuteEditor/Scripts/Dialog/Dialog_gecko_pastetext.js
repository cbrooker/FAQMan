var OxO8f7b=["value","idSource","length","checked","linebreaks","\x0D\x0A","ig","\x3Cbr /\x3E","\x0D","\x0A"];var editor=Window_GetDialogArguments(window); function cancel(){ Window_CloseDialog(window) ;}  ; function insertContent(){var Oxb7=document.getElementById(OxO8f7b[0x1])[OxO8f7b[0x0]];if(Oxb7&&Oxb7[OxO8f7b[0x2]]>0x0){if(document.getElementById(OxO8f7b[0x4])[OxO8f7b[0x3]]){ Oxb7=Oxb7.replace(( new RegExp(OxO8f7b[0x5],OxO8f7b[0x6])),OxO8f7b[0x7]) ; Oxb7=Oxb7.replace(( new RegExp(OxO8f7b[0x8],OxO8f7b[0x6])),OxO8f7b[0x7]) ; Oxb7=Oxb7.replace(( new RegExp(OxO8f7b[0x9],OxO8f7b[0x6])),OxO8f7b[0x7]) ;} ; editor.PasteHTML(Oxb7) ; Window_CloseDialog(window) ;} ;}  ;