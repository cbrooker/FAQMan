<%@ Page Title="" Language="VB" MasterPageFile="~/FAQMasterPage.master" AutoEventWireup="false" CodeFile="FAQQuestionsAndAnswers.aspx.vb" Inherits="Welcome_FAQ_FAQQuestionsAndAnswers" %>

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
        <h1><asp:Label ID="HeaderTopicLabel" runat="server" Text="Topic Questions"></asp:Label></h1>
        <br />
        <asp:Label ID="TopicDescriptionLabel" runat="server" Text="Topic Description"></asp:Label>
        <br />
        <br />
        <asp:Repeater ID="QuestionListRepeater" runat="server" 
            DataSourceID="FAQByTopicIDDS">
            <HeaderTemplate>
                <ol class="faqQuestionList">
            </HeaderTemplate>
            <ItemTemplate>
                <li>
                    <asp:HyperLink ID="QuestionHL" runat="server" NavigateUrl='<%# "#" & Eval("ID")%>'><%#Eval("Question")%></asp:HyperLink><span class="faqId"><%#"faq id: " & Eval("ID")%></span>
                </li>
            </ItemTemplate>
            <FooterTemplate>
                </ol>
            </FooterTemplate>
        </asp:Repeater>
    
        <asp:ObjectDataSource ID="FAQByTopicIDDS" runat="server" 
            OldValuesParameterFormatString="original_{0}" 
            SelectMethod="GetFAQDataByTopicID" TypeName="FAQTableAdapters.FAQTableAdapter">
            <SelectParameters>
                <asp:SessionParameter Name="TopicID" SessionField="TopicID" Type="Int32" />
            </SelectParameters>
        </asp:ObjectDataSource>
        
        <div id="questionsAndAnswers">            
            <h1>Questions and Answers</h1>
            <asp:Repeater ID="QandARepeater" runat="server" 
                DataSourceID="FAQByTopicIDDS">
                <HeaderTemplate>
                    <ol class="faqQuestionAndAnswerList">
                </HeaderTemplate>
                <ItemTemplate>
                    <li>
                        <span class="faqQuestion"><a name='<%#Eval("ID")%>'><%#Eval("Question")%></a></span><span class="faqId"><%#"faq id: " & Eval("ID")%></span>
                        <br />
                        <div id="answerBox">
                            <%#Eval("Answer")%>
                        </div>
                    </li>
                </ItemTemplate>
                <FooterTemplate>
                    </ol>
                </FooterTemplate>
            </asp:Repeater>
            
        </div>
    
    </div>

</asp:Content>

