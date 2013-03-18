<%@ Control Language="VB" AutoEventWireup="false" CodeFile="FAQAdminHeaderMenu.ascx.vb" Inherits="Welcome_rpHeaderMenu" %>

<div id="faqNavHeader">
    <div style="float: right; padding-right: 10px;">
        <asp:LinkButton ID="BackToOrigin" runat="server" CssClass="rpHeaderNavLinks" CausesValidation="false">Back to SA Section</asp:LinkButton>
    </div>

    <asp:LinkButton ID="FAQHome" runat="server" CssClass="rpHeaderNavLinks" CausesValidation="false">FAQ Home</asp:LinkButton>
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <asp:LinkButton ID="FAQTopic" runat="server" CssClass="rpHeaderNavLinks" CausesValidation="false">FAQ Topics</asp:LinkButton>
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <asp:LinkButton ID="ViewSite" runat="server" CssClass="rpHeaderNavLinks" CausesValidation="false">View Site</asp:LinkButton>
</div>