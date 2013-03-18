<%@ Page Language="C#" Inherits="CuteEditor.EditorUtilityPage" %>
<script runat="server">
string GetDialogQueryString;
override protected void OnInit(EventArgs args)
{
	if(Context.Request.QueryString["Dialog"]=="Standard")
	{	
	if(Context.Request.QueryString["IsFrame"]==null)
	{
		string FrameSrc="colorpicker_basic.aspx?IsFrame=1&"+Request.ServerVariables["QUERY_STRING"];
		CuteEditor.CEU.WriteDialogOuterFrame(Context,"[[MoreColors]]",FrameSrc);
		Context.Response.End();
	}
	}
	string s="";
	if(Context.Request.QueryString["Dialog"]=="Standard")	
		s="&Dialog=Standard";
	
	GetDialogQueryString="Theme="+Context.Request.QueryString["Theme"]+s;	
	base.OnInit(args);
}
</script>
<html xmlns="http://www.w3.org/1999/xhtml">
	<head runat="server">
		<meta http-equiv="Page-Enter" content="blendTrans(Duration=0.1)" />
		<meta http-equiv="Page-Exit" content="blendTrans(Duration=0.1)" />
		<script type="text/javascript" src="Load.ashx?type=dialogscript&file=DialogHead.js"></script>
		<script type="text/javascript" src="Load.ashx?type=dialogscript&file=Dialog_ColorPicker.js"></script>
		<link href='Load.ashx?type=themecss&file=dialog.css&theme=[[_Theme_]]' type="text/css"
			rel="stylesheet" />
		<style type="text/css">
			.colorcell
			{
				width:16px;
				height:17px;
				cursor:hand;
			}
			.colordiv,.customdiv
			{
				border:solid 1px #808080;
				width:16px;
				height:17px;
				font-size:1px;
			}
		</style>
		<title>[[NamedColors]]</title>
		<script>
								
		var OxOd1a0=["Green","#008000","Lime","#00FF00","Teal","#008080","Aqua","#00FFFF","Navy","#000080","Blue","#0000FF","Purple","#800080","Fuchsia","#FF00FF","Maroon","#800000","Red ","#FF0000","Olive","#808000","Yellow","#FFFF00","White","#FFFFFF","Silver","#C0C0C0","Gray","#808080","Black","#000000","DarkOliveGreen","#556B2F","DarkGreen","#006400","DarkSlateGray","#2F4F4F","SlateGray","#708090","DarkBlue","#00008B","MidnightBlue","#191970","Indigo","#4B0082","DarkMagenta","#8B008B","Brown","#A52A2A","DarkRed","#8B0000","Sienna","#A0522D","SaddleBrown","#8B4513","DarkGoldenrod","#B8860B","Beige","#F5F5DC","HoneyDew","#F0FFF0","DimGray","#696969","OliveDrab","#6B8E23","ForestGreen","#228B22","DarkCyan","#008B8B","LightSlateGray","#778899","MediumBlue","#0000CD","DarkSlateBlue","#483D8B","DarkViolet","#9400D3","MediumVioletRed","#C71585","IndianRed","#CD5C5C","Firebrick","#B22222","Chocolate","#D2691E","Peru","#CD853F","Goldenrod","#DAA520","LightGoldenrodYellow","#FAFAD2","MintCream","#F5FFFA","DarkGray","#A9A9A9","YellowGreen","#9ACD32","SeaGreen","#2E8B57","CadetBlue","#5F9EA0","SteelBlue","#4682B4","RoyalBlue","#4169E1","BlueViolet","#8A2BE2","DarkOrchid","#9932CC","DeepPink","#FF1493","RosyBrown","#BC8F8F","Crimson","#DC143C","DarkOrange","#FF8C00","BurlyWood","#DEB887","DarkKhaki","#BDB76B","LightYellow","#FFFFE0","Azure","#F0FFFF","LightGray","#D3D3D3","LawnGreen","#7CFC00","MediumSeaGreen","#3CB371","LightSeaGreen","#20B2AA","DeepSkyBlue","#00BFFF","DodgerBlue","#1E90FF","SlateBlue","#6A5ACD","MediumOrchid","#BA55D3","PaleVioletRed","#DB7093","Salmon","#FA8072","OrangeRed","#FF4500","SandyBrown","#F4A460","Tan","#D2B48C","Gold","#FFD700","Ivory","#FFFFF0","GhostWhite","#F8F8FF","Gainsboro","#DCDCDC","Chartreuse","#7FFF00","LimeGreen","#32CD32","MediumAquamarine","#66CDAA","DarkTurquoise","#00CED1","CornflowerBlue","#6495ED","MediumSlateBlue","#7B68EE","Orchid","#DA70D6","HotPink","#FF69B4","LightCoral","#F08080","Tomato","#FF6347","Orange","#FFA500","Bisque","#FFE4C4","Khaki","#F0E68C","Cornsilk","#FFF8DC","Linen","#FAF0E6","WhiteSmoke","#F5F5F5","GreenYellow","#ADFF2F","DarkSeaGreen","#8FBC8B","Turquoise","#40E0D0","MediumTurquoise","#48D1CC","SkyBlue","#87CEEB","MediumPurple","#9370DB","Violet","#EE82EE","LightPink","#FFB6C1","DarkSalmon","#E9967A","Coral","#FF7F50","NavajoWhite","#FFDEAD","BlanchedAlmond","#FFEBCD","PaleGoldenrod","#EEE8AA","Oldlace","#FDF5E6","Seashell","#FFF5EE","PaleGreen","#98FB98","SpringGreen","#00FF7F","Aquamarine","#7FFFD4","PowderBlue","#B0E0E6","LightSkyBlue","#87CEFA","LightSteelBlue","#B0C4DE","Plum","#DDA0DD","Pink","#FFC0CB","LightSalmon","#FFA07A","Wheat","#F5DEB3","Moccasin","#FFE4B5","AntiqueWhite","#FAEBD7","LemonChiffon","#FFFACD","FloralWhite","#FFFAF0","Snow","#FFFAFA","AliceBlue","#F0F8FF","LightGreen","#90EE90","MediumSpringGreen","#00FA9A","PaleTurquoise","#AFEEEE","LightCyan","#E0FFFF","LightBlue","#ADD8E6","Lavender","#E6E6FA","Thistle","#D8BFD8","MistyRose","#FFE4E1","Peachpuff","#FFDAB9","PapayaWhip","#FFEFD5"];var colorlist=[{n:OxOd1a0[0x0],h:OxOd1a0[0x1]},{n:OxOd1a0[0x2],h:OxOd1a0[0x3]},{n:OxOd1a0[0x4],h:OxOd1a0[0x5]},{n:OxOd1a0[0x6],h:OxOd1a0[0x7]},{n:OxOd1a0[0x8],h:OxOd1a0[0x9]},{n:OxOd1a0[0xa],h:OxOd1a0[0xb]},{n:OxOd1a0[0xc],h:OxOd1a0[0xd]},{n:OxOd1a0[0xe],h:OxOd1a0[0xf]},{n:OxOd1a0[0x10],h:OxOd1a0[0x11]},{n:OxOd1a0[0x12],h:OxOd1a0[0x13]},{n:OxOd1a0[0x14],h:OxOd1a0[0x15]},{n:OxOd1a0[0x16],h:OxOd1a0[0x17]},{n:OxOd1a0[0x18],h:OxOd1a0[0x19]},{n:OxOd1a0[0x1a],h:OxOd1a0[0x1b]},{n:OxOd1a0[0x1c],h:OxOd1a0[0x1d]},{n:OxOd1a0[0x1e],h:OxOd1a0[0x1f]}];var colormore=[{n:OxOd1a0[0x20],h:OxOd1a0[0x21]},{n:OxOd1a0[0x22],h:OxOd1a0[0x23]},{n:OxOd1a0[0x24],h:OxOd1a0[0x25]},{n:OxOd1a0[0x26],h:OxOd1a0[0x27]},{n:OxOd1a0[0x28],h:OxOd1a0[0x29]},{n:OxOd1a0[0x2a],h:OxOd1a0[0x2b]},{n:OxOd1a0[0x2c],h:OxOd1a0[0x2d]},{n:OxOd1a0[0x2e],h:OxOd1a0[0x2f]},{n:OxOd1a0[0x30],h:OxOd1a0[0x31]},{n:OxOd1a0[0x32],h:OxOd1a0[0x33]},{n:OxOd1a0[0x34],h:OxOd1a0[0x35]},{n:OxOd1a0[0x36],h:OxOd1a0[0x37]},{n:OxOd1a0[0x38],h:OxOd1a0[0x39]},{n:OxOd1a0[0x3a],h:OxOd1a0[0x3b]},{n:OxOd1a0[0x3c],h:OxOd1a0[0x3d]},{n:OxOd1a0[0x3e],h:OxOd1a0[0x3f]},{n:OxOd1a0[0x40],h:OxOd1a0[0x41]},{n:OxOd1a0[0x42],h:OxOd1a0[0x43]},{n:OxOd1a0[0x44],h:OxOd1a0[0x45]},{n:OxOd1a0[0x46],h:OxOd1a0[0x47]},{n:OxOd1a0[0x48],h:OxOd1a0[0x49]},{n:OxOd1a0[0x4a],h:OxOd1a0[0x4b]},{n:OxOd1a0[0x4c],h:OxOd1a0[0x4d]},{n:OxOd1a0[0x4e],h:OxOd1a0[0x4f]},{n:OxOd1a0[0x50],h:OxOd1a0[0x51]},{n:OxOd1a0[0x52],h:OxOd1a0[0x53]},{n:OxOd1a0[0x54],h:OxOd1a0[0x55]},{n:OxOd1a0[0x56],h:OxOd1a0[0x57]},{n:OxOd1a0[0x58],h:OxOd1a0[0x59]},{n:OxOd1a0[0x5a],h:OxOd1a0[0x5b]},{n:OxOd1a0[0x5c],h:OxOd1a0[0x5d]},{n:OxOd1a0[0x5e],h:OxOd1a0[0x5f]},{n:OxOd1a0[0x60],h:OxOd1a0[0x61]},{n:OxOd1a0[0x62],h:OxOd1a0[0x63]},{n:OxOd1a0[0x64],h:OxOd1a0[0x65]},{n:OxOd1a0[0x66],h:OxOd1a0[0x67]},{n:OxOd1a0[0x68],h:OxOd1a0[0x69]},{n:OxOd1a0[0x6a],h:OxOd1a0[0x6b]},{n:OxOd1a0[0x6c],h:OxOd1a0[0x6d]},{n:OxOd1a0[0x6e],h:OxOd1a0[0x6f]},{n:OxOd1a0[0x70],h:OxOd1a0[0x71]},{n:OxOd1a0[0x72],h:OxOd1a0[0x73]},{n:OxOd1a0[0x74],h:OxOd1a0[0x75]},{n:OxOd1a0[0x76],h:OxOd1a0[0x77]},{n:OxOd1a0[0x78],h:OxOd1a0[0x79]},{n:OxOd1a0[0x7a],h:OxOd1a0[0x7b]},{n:OxOd1a0[0x7c],h:OxOd1a0[0x7d]},{n:OxOd1a0[0x7e],h:OxOd1a0[0x7f]},{n:OxOd1a0[0x80],h:OxOd1a0[0x81]},{n:OxOd1a0[0x82],h:OxOd1a0[0x83]},{n:OxOd1a0[0x84],h:OxOd1a0[0x85]},{n:OxOd1a0[0x86],h:OxOd1a0[0x87]},{n:OxOd1a0[0x88],h:OxOd1a0[0x89]},{n:OxOd1a0[0x8a],h:OxOd1a0[0x8b]},{n:OxOd1a0[0x8c],h:OxOd1a0[0x8d]},{n:OxOd1a0[0x8e],h:OxOd1a0[0x8f]},{n:OxOd1a0[0x90],h:OxOd1a0[0x91]},{n:OxOd1a0[0x92],h:OxOd1a0[0x93]},{n:OxOd1a0[0x94],h:OxOd1a0[0x95]},{n:OxOd1a0[0x96],h:OxOd1a0[0x97]},{n:OxOd1a0[0x98],h:OxOd1a0[0x99]},{n:OxOd1a0[0x9a],h:OxOd1a0[0x9b]},{n:OxOd1a0[0x9c],h:OxOd1a0[0x9d]},{n:OxOd1a0[0x9e],h:OxOd1a0[0x9f]},{n:OxOd1a0[0xa0],h:OxOd1a0[0xa1]},{n:OxOd1a0[0xa2],h:OxOd1a0[0xa3]},{n:OxOd1a0[0xa4],h:OxOd1a0[0xa5]},{n:OxOd1a0[0xa6],h:OxOd1a0[0xa7]},{n:OxOd1a0[0xa8],h:OxOd1a0[0xa9]},{n:OxOd1a0[0xaa],h:OxOd1a0[0xab]},{n:OxOd1a0[0xac],h:OxOd1a0[0xad]},{n:OxOd1a0[0xae],h:OxOd1a0[0xaf]},{n:OxOd1a0[0xb0],h:OxOd1a0[0xb1]},{n:OxOd1a0[0xb2],h:OxOd1a0[0xb3]},{n:OxOd1a0[0xb4],h:OxOd1a0[0xb5]},{n:OxOd1a0[0xb6],h:OxOd1a0[0xb7]},{n:OxOd1a0[0xb8],h:OxOd1a0[0xb9]},{n:OxOd1a0[0xba],h:OxOd1a0[0xbb]},{n:OxOd1a0[0xbc],h:OxOd1a0[0xbd]},{n:OxOd1a0[0xbe],h:OxOd1a0[0xbf]},{n:OxOd1a0[0xc0],h:OxOd1a0[0xc1]},{n:OxOd1a0[0xc2],h:OxOd1a0[0xc3]},{n:OxOd1a0[0xc4],h:OxOd1a0[0xc5]},{n:OxOd1a0[0xc6],h:OxOd1a0[0xc7]},{n:OxOd1a0[0xc8],h:OxOd1a0[0xc9]},{n:OxOd1a0[0xca],h:OxOd1a0[0xcb]},{n:OxOd1a0[0xcc],h:OxOd1a0[0xcd]},{n:OxOd1a0[0xce],h:OxOd1a0[0xcf]},{n:OxOd1a0[0xd0],h:OxOd1a0[0xd1]},{n:OxOd1a0[0xd2],h:OxOd1a0[0xd3]},{n:OxOd1a0[0xd4],h:OxOd1a0[0xd5]},{n:OxOd1a0[0xd6],h:OxOd1a0[0xd7]},{n:OxOd1a0[0xd8],h:OxOd1a0[0xd9]},{n:OxOd1a0[0xda],h:OxOd1a0[0xdb]},{n:OxOd1a0[0xdc],h:OxOd1a0[0xdd]},{n:OxOd1a0[0x9c],h:OxOd1a0[0x9d]},{n:OxOd1a0[0xde],h:OxOd1a0[0xdf]},{n:OxOd1a0[0xe0],h:OxOd1a0[0xe1]},{n:OxOd1a0[0xe2],h:OxOd1a0[0xe3]},{n:OxOd1a0[0xe4],h:OxOd1a0[0xe5]},{n:OxOd1a0[0xe6],h:OxOd1a0[0xe7]},{n:OxOd1a0[0xe8],h:OxOd1a0[0xe9]},{n:OxOd1a0[0xea],h:OxOd1a0[0xeb]},{n:OxOd1a0[0xec],h:OxOd1a0[0xed]},{n:OxOd1a0[0xee],h:OxOd1a0[0xef]},{n:OxOd1a0[0xf0],h:OxOd1a0[0xf1]},{n:OxOd1a0[0xf2],h:OxOd1a0[0xf3]},{n:OxOd1a0[0xf4],h:OxOd1a0[0xf5]},{n:OxOd1a0[0xf6],h:OxOd1a0[0xf7]},{n:OxOd1a0[0xf8],h:OxOd1a0[0xf9]},{n:OxOd1a0[0xfa],h:OxOd1a0[0xfb]},{n:OxOd1a0[0xfc],h:OxOd1a0[0xfd]},{n:OxOd1a0[0xfe],h:OxOd1a0[0xff]},{n:OxOd1a0[0x100],h:OxOd1a0[0x101]},{n:OxOd1a0[0x102],h:OxOd1a0[0x103]},{n:OxOd1a0[0x104],h:OxOd1a0[0x105]},{n:OxOd1a0[0x106],h:OxOd1a0[0x107]},{n:OxOd1a0[0x108],h:OxOd1a0[0x109]},{n:OxOd1a0[0x10a],h:OxOd1a0[0x10b]},{n:OxOd1a0[0x10c],h:OxOd1a0[0x10d]},{n:OxOd1a0[0x10e],h:OxOd1a0[0x10f]},{n:OxOd1a0[0x110],h:OxOd1a0[0x111]}];
		
		</script>
	</head>
	<body>
		<div id="container">
			<div class="tab-pane-control tab-pane" id="tabPane1">
				<div class="tab-row">
					<h2 class="tab">
						<a tabindex="-1" href='colorpicker.aspx?<%=GetDialogQueryString%>'>
							<span style="white-space:nowrap;">
								[[WebPalette]]
							</span>
						</a>
					</h2>
					<h2 class="tab selected">
							<a tabindex="-1" href='colorpicker_basic.aspx?<%=GetDialogQueryString%>'>
								<span style="white-space:nowrap;">
									[[NamedColors]]
								</span>
							</a>
					</h2>
					<h2 class="tab">
							<a tabindex="-1" href='colorpicker_more.aspx?<%=GetDialogQueryString%>'>
								<span style="white-space:nowrap;">
									[[CustomColor]]
								</span>
							</a>
					</h2>
				</div>
				<div class="tab-page">			
					<table class="colortable" align="center">
						<tr>
							<td colspan="16" height="16"><p align="left">Basic:
								</p>
							</td>
						</tr>
						<tr>
							<script>
								var OxO26cb=["length","\x3Ctd class=\x27colorcell\x27\x3E\x3Cdiv class=\x27colordiv\x27 style=\x27background-color:","\x27 title=\x27"," ","\x27 cname=\x27","\x27 cvalue=\x27","\x27\x3E\x3C/div\x3E\x3C/td\x3E",""];var arr=[];for(var i=0x0;i<colorlist[OxO26cb[0x0]];i++){ arr.push(OxO26cb[0x1]) ; arr.push(colorlist[i].n) ; arr.push(OxO26cb[0x2]) ; arr.push(colorlist[i].n) ; arr.push(OxO26cb[0x3]) ; arr.push(colorlist[i].h) ; arr.push(OxO26cb[0x4]) ; arr.push(colorlist[i].n) ; arr.push(OxO26cb[0x5]) ; arr.push(colorlist[i].h) ; arr.push(OxO26cb[0x6]) ;} ; document.write(arr.join(OxO26cb[0x7])) ;
							</script>
						</tr>
						<tr>
							<td colspan="16" height="12"><p align="left"></p>
							</td>
						</tr>
						<tr>
							<td colspan="16"><p align="left">Additional:
								</p>
							</td>
						</tr>
						<script>
							var OxO64f6=["length","\x3Ctr\x3E","\x3Ctd class=\x27colorcell\x27\x3E\x3Cdiv class=\x27colordiv\x27 style=\x27background-color:","\x27 title=\x27"," ","\x27 cname=\x27","\x27 cvalue=\x27","\x27\x3E\x3C/div\x3E\x3C/td\x3E","\x3C/tr\x3E",""];var arr=[];for(var i=0x0;i<colormore[OxO64f6[0x0]];i++){if(i%0x10==0x0){ arr.push(OxO64f6[0x1]) ;} ; arr.push(OxO64f6[0x2]) ; arr.push(colormore[i].n) ; arr.push(OxO64f6[0x3]) ; arr.push(colormore[i].n) ; arr.push(OxO64f6[0x4]) ; arr.push(colormore[i].h) ; arr.push(OxO64f6[0x5]) ; arr.push(colormore[i].n) ; arr.push(OxO64f6[0x6]) ; arr.push(colormore[i].h) ; arr.push(OxO64f6[0x7]) ;if(i%0x10==0xf){ arr.push(OxO64f6[0x8]) ;} ;} ;if(colormore%0x10>0x0){ arr.push(OxO64f6[0x8]) ;} ; document.write(arr.join(OxO64f6[0x9])) ;
						</script>
						<tr>
							<td colspan="16" height="8">
							</td>
						</tr>
						<tr>
							<td colspan="16" height="12">
								<input checked id="CheckboxColorNames" style="width: 16px; height: 20px" type="checkbox">
								<span style="width: 118px;">Use color names</span>
							</td>
						</tr>
						<tr>
							<td colspan="16" height="12">
							</td>
						</tr>
						<tr>
							<td colspan="16" valign="middle" height="24">
							<span style="height:24px;width:50px;vertical-align:middle;">Color : </span>&nbsp;
							<input type="text" id="divpreview" size="7" maxlength="7" style="width:180px;height:24px;border:#a0a0a0 1px solid; Padding:4;"/>
					
							</td>
						</tr>
				</table>
			</div>
		</div>
		<div id="container-bottom">
			<input type="button" id="buttonok" value="[[OK]]" class="formbutton" style="width:70px"	onclick="do_insert();" /> 
			&nbsp;&nbsp;&nbsp;&nbsp; 
			<input type="button" id="buttoncancel" value="[[Cancel]]" class="formbutton" style="width:70px"	onclick="do_Close();" />	
		</div>
	</div>
	</body>
</html>

