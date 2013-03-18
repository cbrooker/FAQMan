<%@ Page Title="FAQ Admin - Edit Question" Language="VB" MasterPageFile="~/FAQMasterPage.master" AutoEventWireup="false" CodeFile="FAQAdminDetails.aspx.vb" Inherits="Welcome_FAQ_Admin_FAQDetails" %>

<%@ Register src="FAQAdminHeaderMenu.ascx" tagname="FAQAdminHeaderMenu" tagprefix="uc1" %>
<%@ Register assembly="CuteEditor" namespace="CuteEditor" tagprefix="CE" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
    <meta content="" name="KEYWORDS"/>
    <meta content="" name="DESCRIPTION"/>
    <meta content="index, follow" name="robots"/>
    <meta content="15 days" name="revisit-after"/>
    <style type="text/css">
        .style1
        {
            width: 101px;
        }
        .style2
        {
            width: 101px;
            text-align: right;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MenuPlaceHolder" Runat="Server">
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="MainPlaceHolder" Runat="Server">
    <uc1:FAQAdminHeaderMenu ID="FAQAdminHeaderMenu1" runat="server" />
    <div id="mainContents">
        <table class="questionDetails">
            <tbody>
                <asp:Panel ID="HideOnInsertPanel" runat="server">
                
                    <tr>
                        <td class="style2" valign="top">Faq Id:</td>
                        <td>
                            <asp:Label ID="FAQIdLabel" runat="server" Text="Label"></asp:Label>
                        </td>
                    </tr>
                    <tr>
                        <td class="style2" valign="top">Date created:</td>
                        <td>
                            <asp:Label ID="DateCreatedLabel" runat="server" Text="Label"></asp:Label>
                        </td>
                    </tr>
                </asp:Panel>
                <tr>
                    <td class="style2" valign="top">Topic:</td>
                    <td>
                        <asp:DropDownList CssClass="faqDropDown" ID="TopicDD" runat="server" 
                            DataSourceID="TopicDS" DataTextField="Topic" DataValueField="ID">
                        </asp:DropDownList>
                        <asp:ObjectDataSource ID="TopicDS" runat="server" 
                            OldValuesParameterFormatString="original_{0}" SelectMethod="GetFAQTopicsData" 
                            TypeName="FAQTableAdapters.FAQTopicsTableAdapter"></asp:ObjectDataSource>
                    </td>
                </tr>
                <tr>
                    <td class="style2" valign="top">Question:</td>
                    <td>
                        <asp:TextBox ID="QuestionTextBox" runat="server" Rows="7" TextMode="MultiLine" 
                            Width="99%"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td class="style2" valign="top">Answer:</td>
                    <td>
                        <CE:Editor ID="AnswerText" runat="server" Width="100%" Height="500px" 
                            ThemeType="Office2007" EnableStripScriptTags="false" 
                            EnableStripStyleTagsCodeInjection="false" ShowPreviewMode="false" 
                            Text='<%# Bind("Post") %>'>
                            <FrameStyle BackColor="White" BorderColor="#DDDDDD" BorderWidth="1px" BorderStyle="Solid" CssClass="CuteEditorFrame" Height="100%" Width="100%"></FrameStyle>
                        </CE:Editor>
                    </td>
                </tr>
                <tr>
                    <td class="style2" valign="top">Visibility:</td>
                    <td>
                        <asp:RadioButton ID="VisibleToPublic" GroupName="Public" runat="server" Text="Visible to public" />
                        &nbsp;&nbsp;&nbsp;
                        <asp:RadioButton ID="NotVisibleToPublic" GroupName="Public" runat="server" 
                            Text="Not visible to public" Checked="True" />
                    </td>
                </tr>
                <tr>
                    <td class="style2" valign="top">Keywords:</td>
                    <td>
                        <asp:TextBox ID="KeywordsTextBox" runat="server" CssClass="faqTextBox"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td class="style2" valign="top">Status:</td>
                    <td>
                        <asp:DropDownList CssClass="faqDropDown" ID="StatusDD" runat="server" 
                            DataSourceID="StatusDS" DataTextField="Status" DataValueField="ID">
                        </asp:DropDownList>
                        <asp:ObjectDataSource ID="StatusDS" runat="server" DeleteMethod="Delete" 
                            InsertMethod="Insert" OldValuesParameterFormatString="original_{0}" 
                            SelectMethod="GetFAQStatusesData" 
                            TypeName="FAQTableAdapters.FAQStatusesTableAdapter" UpdateMethod="Update">
                            <DeleteParameters>
                                <asp:Parameter Name="Original_ID" Type="Int32" />
                            </DeleteParameters>
                            <UpdateParameters>
                                <asp:Parameter Name="Status" Type="String" />
                                <asp:Parameter Name="Original_ID" Type="Int32" />
                            </UpdateParameters>
                            <InsertParameters>
                                <asp:Parameter Name="Status" Type="String" />
                            </InsertParameters>
                        </asp:ObjectDataSource>
                    </td>
                </tr>
                <tr>
                    <td class="style2" valign="top">Notes:</td>
                    <td>
                        <asp:TextBox ID="NotesTextBox" runat="server" Rows="7" TextMode="MultiLine" 
                            Width="99%"></asp:TextBox>
                    </td>
                </tr>
            </tbody>
        </table>
        <br />
        <asp:Button ID="Insert" runat="server" Text="Insert" Visible="false" />
        <asp:Button ID="Update" runat="server" Text="Update FAQ" Visible="false" />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <asp:Button ID="cancel" runat="server" Text="Cancel" />
    </div>
</asp:Content>


