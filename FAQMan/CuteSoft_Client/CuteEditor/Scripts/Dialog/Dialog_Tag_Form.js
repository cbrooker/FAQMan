var OxO5c4f=["inp_action","sel_Method","inp_name","inp_id","inp_encode","sel_target","Name","value","name","id","action","method","encoding","application/x-www-form-urlencoded","","target"];var inp_action=Window_GetElement(window,OxO5c4f[0x0],true);var sel_Method=Window_GetElement(window,OxO5c4f[0x1],true);var inp_name=Window_GetElement(window,OxO5c4f[0x2],true);var inp_id=Window_GetElement(window,OxO5c4f[0x3],true);var inp_encode=Window_GetElement(window,OxO5c4f[0x4],true);var sel_target=Window_GetElement(window,OxO5c4f[0x5],true); UpdateState=function UpdateState_Form(){}  ; SyncToView=function SyncToView_Form(){if(element[OxO5c4f[0x6]]){ inp_name[OxO5c4f[0x7]]=element[OxO5c4f[0x6]] ;} ;if(element[OxO5c4f[0x8]]){ inp_name[OxO5c4f[0x7]]=element[OxO5c4f[0x8]] ;} ; inp_id[OxO5c4f[0x7]]=element[OxO5c4f[0x9]] ; inp_action[OxO5c4f[0x7]]=element[OxO5c4f[0xa]] ; sel_Method[OxO5c4f[0x7]]=element[OxO5c4f[0xb]] ;if(element[OxO5c4f[0xc]]==OxO5c4f[0xd]){ inp_encode[OxO5c4f[0x7]]=OxO5c4f[0xe] ;} else { inp_encode[OxO5c4f[0x7]]=element[OxO5c4f[0xc]] ;} ; sel_target[OxO5c4f[0x7]]=element[OxO5c4f[0xf]] ;}  ; SyncTo=function SyncTo_Form(element){ element[OxO5c4f[0x8]]=inp_name[OxO5c4f[0x7]] ;if(element[OxO5c4f[0x6]]){ element[OxO5c4f[0x6]]=inp_name[OxO5c4f[0x7]] ;} else {if(element[OxO5c4f[0x8]]){ element.removeAttribute(OxO5c4f[0x8],0x0) ; element[OxO5c4f[0x6]]=inp_name[OxO5c4f[0x7]] ;} else { element[OxO5c4f[0x6]]=inp_name[OxO5c4f[0x7]] ;} ;} ; element[OxO5c4f[0x9]]=inp_id[OxO5c4f[0x7]] ; element[OxO5c4f[0xa]]=inp_action[OxO5c4f[0x7]] ; element[OxO5c4f[0xb]]=sel_Method[OxO5c4f[0x7]] ;try{ element[OxO5c4f[0xc]]=inp_encode[OxO5c4f[0x7]] ;} catch(e){} ; element[OxO5c4f[0xf]]=sel_target[OxO5c4f[0x7]] ;if(element[OxO5c4f[0xf]]==OxO5c4f[0xe]){ element.removeAttribute(OxO5c4f[0xf]) ;} ;if(element[OxO5c4f[0x6]]==OxO5c4f[0xe]){ element.removeAttribute(OxO5c4f[0x6]) ;} ;if(element[OxO5c4f[0xa]]==OxO5c4f[0xe]){ element.removeAttribute(OxO5c4f[0xa]) ;} ;}  ;