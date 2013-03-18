<%@ Page Title="itControl Suite - Search FAQ" Language="VB" MasterPageFile="~/FAQMasterPage.master" AutoEventWireup="false" CodeFile="FAQSearch.aspx.vb" Inherits="Welcome_FAQ_FAQSearch" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>

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
        <div id="faqNotice">
            <div id="faqNoticeText">
                <asp:TextBox CssClass="faqTextBox" ID="SearchKeyword" runat="server"></asp:TextBox>
                <cc1:TextBoxWatermarkExtender ID="TextBoxWatermarkExtender1" TargetControlID="SearchKeyword" WatermarkText="Search" WatermarkCssClass="watermarked" runat="server">
                </cc1:TextBoxWatermarkExtender>
                <asp:DropDownList ID="TopicDD" runat="server" 
                    CssClass="faqDropDown" DataSourceID="TopicsDS" DataTextField="Topic" 
                    DataValueField="ID">
                </asp:DropDownList>
                <asp:ObjectDataSource ID="TopicsDS" runat="server" 
                    OldValuesParameterFormatString="original_{0}" SelectMethod="GetFAQTopicsData" 
                    TypeName="FAQTableAdapters.FAQTopicsTableAdapter"></asp:ObjectDataSource>
                <asp:Button ID="SubmitSearch" runat="server" Text="Search" 
                    CssClass="faqButton" />
                <br />
                <asp:RadioButton ID="AndRadioButton" runat="server" Text="and" GroupName="AndOr" Checked="True" />
                <asp:RadioButton ID="OrRadioButton" runat="server" Text="or" GroupName="AndOr" />
            </div>
        </div>
        
        <asp:UpdatePanel ID="UpdatePanel1" runat="server">
            <ContentTemplate>
            
                <asp:ListView ID="SearchResultsListView" runat="server" DataKeyNames="ID" 
                    DataSourceID="SearchResultsDS">
                    <ItemTemplate>
                         <div id="searchResult">
                            <asp:LinkButton ID="FAQLink" CommandName="SelectedFAQ" CommandArgument='<%# Eval("ID") & ";" & Eval("TopicID")%>' runat="server" CssClass="faqSearchTitlelinks"><%#Highlight(Eval("Question"))%></asp:LinkButton><br />
                            <p class="faqSearchAnswer"><%#Highlight(Eval("Answer"))%></p>
                            <span class="faqIdSearch"><%#"faq id: " & Eval("ID")%></span> in 
                            <asp:LinkButton ID="LinkToTopic" CommandName="SelectedTopic" CommandArgument='<%#Eval("TopicID")%>' runat="server" CssClass="faqSearchlinks"><%#Highlight(Eval("Topic"))%></asp:LinkButton>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Keywords:&nbsp;<%#Highlight(Eval("Keywords"))%>
                        </div>
                    </ItemTemplate>
                    <EmptyDataTemplate>
                        <span>No FAQ Items match your search.</span>
                    </EmptyDataTemplate>
                    <LayoutTemplate>
                        <div class="faqPager">
                            <asp:DataPager ID="DataPager2" runat="server" PageSize="10">
                                <Fields>
                                    <asp:NextPreviousPagerField ButtonType="Link" ShowFirstPageButton="True" 
                                        ShowNextPageButton="False" ShowPreviousPageButton="False" />
                                    <asp:NumericPagerField />
                                    <asp:NextPreviousPagerField ButtonType="Link" ShowLastPageButton="True" 
                                        ShowNextPageButton="False" ShowPreviousPageButton="False" />
                                </Fields>
                            </asp:DataPager>
                        </div>
                        <br />
                        <div ID="itemPlaceholderContainer" runat="server" style="">
                            <span ID="itemPlaceholder" runat="server" />
                        </div>
                        <div class="faqPager">
                            <asp:DataPager ID="DataPager1" runat="server" PageSize="10">
                                <Fields>
                                    <asp:NextPreviousPagerField ButtonType="Link" ShowFirstPageButton="True" 
                                        ShowNextPageButton="False" ShowPreviousPageButton="False" />
                                    <asp:NumericPagerField />
                                    <asp:NextPreviousPagerField ButtonType="Link" ShowLastPageButton="True" 
                                        ShowNextPageButton="False" ShowPreviousPageButton="False" />
                                </Fields>
                            </asp:DataPager>
                        </div>
                    </LayoutTemplate>
                </asp:ListView>

                <asp:ObjectDataSource ID="SearchResultsDS" runat="server" 
                    OldValuesParameterFormatString="original_{0}" SelectMethod="GetFAQData" 
                    TypeName="FAQTableAdapters.FAQTableAdapter"></asp:ObjectDataSource>
            </ContentTemplate>
        </asp:UpdatePanel>
    </div>
</asp:Content>


