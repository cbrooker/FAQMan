<%@ Control Inherits="CuteEditor.EditorUtilityCtrl" Language="c#" AutoEventWireup="false" TargetSchema="http://schemas.microsoft.com/intellisense/ie5" %>
<fieldset>
	<legend>
	[[Cursor]]
	</legend>
	<select id="sel_cursor">
		<option value="">[[NotSet]]</option>
		<option value="Default">[[Default]]</option>
		<option value="Move">[[Move]]</option>
		<option value="Text">Text</option>
		<option value="Wait">Wait</option>
		<option value="Help">Help</option>
		<!-- x-resize -->
	</select>
</fieldset>

<fieldset>
	<legend>
	[[Filter]]
	</legend>
	<input type="text" id="inp_filter" style="width:240px" /> <!--button filter builder-->
</fieldset>
<div id="outer"><div id="div_demo">[[DemoText]]</div></div>

<script type="text/javascript">

var OxO2c97=["sel_cursor","inp_filter","outer","div_demo","cssText","style","cursor","value","filter"];var sel_cursor=Window_GetElement(window,OxO2c97[0x0],true);var inp_filter=Window_GetElement(window,OxO2c97[0x1],true);var outer=Window_GetElement(window,OxO2c97[0x2],true);var div_demo=Window_GetElement(window,OxO2c97[0x3],true); function UpdateState(){ div_demo[OxO2c97[0x5]][OxO2c97[0x4]]=element[OxO2c97[0x5]][OxO2c97[0x4]] ;}  ; function SyncToView(){ sel_cursor[OxO2c97[0x7]]=element[OxO2c97[0x5]][OxO2c97[0x6]] ;if(Browser_IsWinIE()){ inp_filter[OxO2c97[0x7]]=element[OxO2c97[0x5]][OxO2c97[0x8]] ;} ;}  ; function SyncTo(element){ element[OxO2c97[0x5]][OxO2c97[0x6]]=sel_cursor[OxO2c97[0x7]] ;if(Browser_IsWinIE()){ element[OxO2c97[0x5]][OxO2c97[0x8]]=inp_filter[OxO2c97[0x7]] ;} ;}  ;

</script>