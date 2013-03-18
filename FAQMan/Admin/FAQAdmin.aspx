<%@ Page Language="VB" MasterPageFile="~/FAQMasterPage.master" AutoEventWireup="false" CodeFile="FAQAdmin.aspx.vb" Inherits="Welcome_FAQ_Default" Title="Frequently Asked Questions" %>



<%@ Register src="FAQAdminHeaderMenu.ascx" tagname="FAQAdminHeaderMenu" tagprefix="uc1" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>


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
    <uc1:FAQAdminHeaderMenu ID="FAQAdminHeaderMenu1" runat="server" />
    <div id="mainContents">
        <asp:UpdatePanel ID="UpdatePanel1" runat="server" UpdateMode="Conditional">
            <ContentTemplate>
                <div id="faqNotice">
                    <div id="faqNoticeText" style="padding-bottom: 15px;">
                        <asp:TextBox CssClass="faqTextBoxSmall" ID="SearchKeyword" runat="server"></asp:TextBox>
                        <cc1:TextBoxWatermarkExtender ID="TextBoxWatermarkExtender1" TargetControlID="SearchKeyword" WatermarkText="Search" WatermarkCssClass="watermarkedSmall" runat="server">
                        </cc1:TextBoxWatermarkExtender>
                        <asp:DropDownList ID="TopicDD" runat="server" 
                            CssClass="faqDropDownSmall" DataSourceID="TopicsDS" DataTextField="Topic" 
                            DataValueField="Topic">
                        </asp:DropDownList>
                        <asp:ObjectDataSource ID="TopicsDS" runat="server" 
                            OldValuesParameterFormatString="original_{0}" SelectMethod="GetFAQTopicsData" 
                            TypeName="FAQTableAdapters.FAQTopicsTableAdapter"></asp:ObjectDataSource>
                        
                        
                        <asp:DropDownList ID="StatusDD" CssClass="faqDropDownSmall" runat="server" 
                            DataSourceID="StatusDS" DataTextField="Status" DataValueField="Status">
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
                        
                        <asp:DropDownList ID="VisibilityDD" CssClass="faqDropDownSmall" runat="server">
                            <asp:ListItem>- visibility -</asp:ListItem>
                            <asp:ListItem>Public</asp:ListItem>
                            <asp:ListItem>Private</asp:ListItem>
                        </asp:DropDownList>
                        
                        <asp:Button ID="SubmitSearch" runat="server" Text="Search" 
                            CssClass="faqButton" />
                    </div>
                </div>
                <div id="addNewFAQ">
                    <asp:LinkButton ID="AddFaq" runat="server">Add new FAQ</asp:LinkButton>
                </div>
                <asp:GridView ID="FAQGridview" runat="server" AutoGenerateColumns="False" 
                    DataKeyNames="ID" DataSourceID="FAQDS" CssClass="FAQTables"
                    AllowPaging="True" AllowSorting="True" PageSize="100">
                    <Columns>
                        <asp:BoundField DataField="ID" HeaderText="Id" InsertVisible="False" 
                            ReadOnly="True" SortExpression="ID" >
                        <HeaderStyle HorizontalAlign="Left" />
                        </asp:BoundField>
                        <asp:TemplateField HeaderText="Question" SortExpression="Question">
                            <ItemTemplate>
                                <asp:LinkButton ID="LinkButton1" runat="server" CommandName="EditQuestion" CommandArgument='<%# Eval("ID") %>' Text='<%# Bind("Question") %>' />
                            </ItemTemplate>
                            <HeaderStyle HorizontalAlign="Left" />
                            <ItemStyle CssClass="question" />
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Visibility" SortExpression="IsPublic">
                            <ItemTemplate>
                                <asp:Label ID="VisibilityLabel" runat="server" Text="Visibility"></asp:Label>
                            </ItemTemplate>
                            <HeaderStyle HorizontalAlign="Center" />
                            <ItemStyle HorizontalAlign="Center" />
                        </asp:TemplateField>
                        <asp:BoundField DataField="Status" HeaderText="Status" 
                            SortExpression="Status" >
                        <HeaderStyle HorizontalAlign="Center" />
                        <ItemStyle HorizontalAlign="Center" />
                        </asp:BoundField>
                        <asp:BoundField DataField="Topic" HeaderText="Topic" SortExpression="Topic" >
                        <HeaderStyle HorizontalAlign="Center" />
                        <ItemStyle HorizontalAlign="Center" />
                        </asp:BoundField>
                        <asp:TemplateField>
                            <ItemTemplate>
                                <asp:LinkButton ID="DeleteButton" runat="server" CausesValidation="False" Text="Delete" OnClientClick="xxx = this.href;" 
                                        CommandName="Delete"></asp:LinkButton>
                            </ItemTemplate>
                        </asp:TemplateField>
                    </Columns>
                    <PagerStyle HorizontalAlign="Right" />
                    <AlternatingRowStyle CssClass="alternating" />
                </asp:GridView>
                <asp:ObjectDataSource ID="FAQDS" runat="server" OldValuesParameterFormatString="original_{0}" 
                    SelectMethod="GetAllFAQData" TypeName="FAQTableAdapters.FAQTableAdapter">
                </asp:ObjectDataSource>
            </ContentTemplate>
        </asp:UpdatePanel>
        <br />
        
    </div>
    
    
    
    
    
    
    
    <asp:Panel ID="Panel2" runat="server" Style="display: none" CssClass="modalPopup">
        <asp:Panel ID="Panel3" runat="server" Style="cursor: move; background-color: #DDDDDD; border:solid 1px Gray;color:Black; margin:0;">
            <div>
                <p style="margin:0;">Confirm FAQ Question</p>
            </div>
        </asp:Panel>
        <div>
            <br />
            <p style="text-align: center;">
                Are you sure you want to delete this Question?
            </p>
           <br />
           <br />
            <p style="text-align: center;">
                <asp:Button ID="YesButton" runat="server" Text="Yes" OnClientClick="eval(xxx);" CssClass="modelButtonStyle" />
                <asp:Button ID="NoButton" runat="server" Text="No" CssClass="modelButtonStyle" />
            </p>
            <br />
        </div>
    </asp:Panel>
    
    
    
</asp:Content>


