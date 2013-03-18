<%@ Page Title="itControl Suite - Ask a Question" Language="VB" MasterPageFile="~/FAQMasterPage.master" AutoEventWireup="false" CodeFile="FAQAskAQuestion.aspx.vb" Inherits="Welcome_AskAQuestion" %>



<%@ Register src="FAQHeaderMenu.ascx" tagname="FAQHeaderMenu" tagprefix="uc1" %>



<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
    <meta content="" name="KEYWORDS"/>
    <meta content="" name="DESCRIPTION"/>
    <meta content="index, follow" name="robots"/>
    <meta content="15 days" name="revisit-after"/>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MenuPlaceHolder" Runat="Server">
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="MainPlaceHolder" Runat="Server">
    <uc1:FAQHeaderMenu ID="FAQHeaderMenu1" runat="server" />
    <div id="mainContents">
        <h1>Ask us a question</h1>
        <br />
        <p>
            To submit your question, please fill out the form below. We will get back to you as soon as possible.
        </p>
        Name:<br />
        <asp:TextBox ID="Name" CssClass="faqTextBox" runat="server"></asp:TextBox>
        <asp:RequiredFieldValidator ID="RequiredFieldValidator2" 
            ControlToValidate="Name" runat="server" ErrorMessage="*" 
            SetFocusOnError="True" Font-Size="Larger"></asp:RequiredFieldValidator>
        <br />
        <br /><br />
        Email Address:<br />
        <asp:TextBox ID="EmailAddress" CssClass="faqTextBox" runat="server"></asp:TextBox>
        <asp:RequiredFieldValidator ID="RequiredFieldValidator1" 
            ControlToValidate="EmailAddress" runat="server" ErrorMessage="*" 
            SetFocusOnError="True" Font-Size="Larger"></asp:RequiredFieldValidator>
        <br />
        <br /><br />
        Question:
        <asp:RequiredFieldValidator ID="RequiredFieldValidator3" 
            ControlToValidate="Question" runat="server" ErrorMessage="*" 
            SetFocusOnError="True" Font-Size="Larger"></asp:RequiredFieldValidator>
        <br />
        <asp:TextBox ID="Question" CssClass="faqTextArea" runat="server" 
            TextMode="MultiLine"></asp:TextBox>
        
        <br /><br />
        <asp:Button ID="SubmitQuestion" runat="server" Text="Submit" /><br />
        <asp:Label ID="Message" runat="server" Text="Message" CssClass="faqQuestionMessage" Visible="false"></asp:Label>
    </div>
</asp:Content>

