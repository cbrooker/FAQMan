<%@ Control Language="VB" AutoEventWireup="false" CodeFile="FAQHeaderMenu.ascx.vb" Inherits="Welcome_rpHeaderMenu" %>

<div id="faqNavHeader">
    <div style="float: right; padding-right: 10px;">
        <asp:LinkButton ID="ToResellerPortal" runat="server" CssClass="rpHeaderNavLinks" CausesValidation="false">Back to Reseller Home</asp:LinkButton>
    </div>

    <asp:LinkButton ID="FAQHome" runat="server" CssClass="rpHeaderNavLinks" CausesValidation="false">FAQ Home</asp:LinkButton>
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <asp:LinkButton ID="SearchFAQ" runat="server" CssClass="rpHeaderNavLinks" CausesValidation="false">Search FAQ</asp:LinkButton>
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <asp:LinkButton ID="AskAQuestion" runat="server" CssClass="rpHeaderNavLinks" CausesValidation="false">Ask a question</asp:LinkButton>
     
</div>