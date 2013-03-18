<%@ Page Title="" Language="VB" MasterPageFile="~/FAQMasterPage.master" AutoEventWireup="false" CodeFile="FAQAdminTopicDetails.aspx.vb" Inherits="Welcome_FAQ_FAQAdminTopicDetails" %>
<%@ Register src="FAQAdminHeaderMenu.ascx" tagname="FAQAdminHeaderMenu" tagprefix="uc1" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
    <meta content="" name="KEYWORDS"/>
    <meta content="" name="DESCRIPTION"/>
    <meta content="index, follow" name="robots"/>
    <meta content="15 days" name="revisit-after"/>
    <style type="text/css">
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
                        <td class="style2" valign="top">Faq Topic Id:</td>
                        <td>
                            <asp:Label ID="FAQTopicIdLabel" runat="server" Text="Label"></asp:Label>
                        </td>
                    </tr>
                </asp:Panel>
                <tr>
                    <td class="style2">Topic name:</td>
                    <td>
                        <asp:TextBox ID="TopicName" CssClass="faqTextBox" runat="server"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td class="style2" valign="top">Topic description:</td>
                    <td>
                        <asp:TextBox ID="TopicDescription" runat="server" Rows="7" TextMode="MultiLine" 
                            Width="99%"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td class="style2" valign="top">Status:</td>
                    <td>
                        <asp:DropDownList ID="StatusDD" runat="server" CssClass="faqTextBox">
                            <asp:ListItem>Active</asp:ListItem>
                            <asp:ListItem>Inactive</asp:ListItem>
                        </asp:DropDownList>
                    </td>
                </tr>
            </tbody>
        </table>
        <br />
        <asp:Button ID="Insert" runat="server" Text="Insert" Visible="false" />
        <asp:Button ID="Update" runat="server" Text="Update Topic" Visible="false" />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <asp:Button ID="cancel" runat="server" Text="Cancel" />
    </div>
</asp:Content>
