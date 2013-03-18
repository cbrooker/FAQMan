<%@ Page Language="VB" MasterPageFile="FAQMasterPage.master" AutoEventWireup="false" CodeFile="Default.aspx.vb" Inherits="Welcome_FAQ_Default" Title="itControl Suite - Frequently Asked Questions" %>

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
        <div id="faqContainer">
            <div id="faqLeftColumn">
                <p>
                <strong>Frequently Asked Questions</strong>
                </p>
                <p>
                Welcome to our Frequently Asked Questions (FAQ).
                </p>
                
                <strong>Search our FAQ</strong>
                <br /><br />
                <asp:TextBox ID="SearchText" runat="server"></asp:TextBox>
                <asp:Button ID="SearchButton" runat="server" Text="Search" />
                <br /><br />
                For questions that are not included in the FAQ, please 
                <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="mailto:inquire@itcontrolsuite.com">contact us</asp:HyperLink>.
            </div>
            <div id="faqRightColumn">
                <div id="faqNotice">
                    <div id="faqNoticeText">
                        <p>We maintain high standards for customer service and strive to answer all your questions as quickly and thoroughly as possible.</p>
                        <p>You can browse by topics or use the search to find the information you need.</p>
                    </div>
                </div>
                
                <div id="faqTopics">
                    <strong>FAQ Topics</strong>
                    <asp:Repeater ID="FAQTopicsRepeater" runat="server" DataSourceID="FAQTopicsDS">
                        <HeaderTemplate>
                            <ul class="faqTopicsList">
                        </HeaderTemplate>
                        <ItemTemplate>
                            <li>
                                <asp:LinkButton ID="TopicLinkButton" runat="server" CommandName="TopicSelected" CommandArgument='<%#Eval("ID")%>'><%#Eval("Topic")%></asp:LinkButton><br />
                                <%#Eval("TopicDescription")%>
                            </li>
                        </ItemTemplate>
                        <FooterTemplate>
                            </ul>
                        </FooterTemplate>
                    </asp:Repeater>
                    <asp:ObjectDataSource ID="FAQTopicsDS" runat="server" 
                        OldValuesParameterFormatString="original_{0}" SelectMethod="GetFAQTopicsData" 
                        TypeName="FAQTableAdapters.FAQTopicsTableAdapter"></asp:ObjectDataSource>
                </div>
            </div>
        </div>
    </div>   
    
</asp:Content>

