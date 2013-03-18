<%@ Page Title="" Language="VB" MasterPageFile="~/FAQMasterPage.master" AutoEventWireup="false" CodeFile="FAQAdminTopics.aspx.vb" Inherits="Welcome_FAQ_FAQAdminTopics" %>

<%@ Register src="FAQAdminHeaderMenu.ascx" tagname="FAQAdminHeaderMenu" tagprefix="uc1" %>

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
    <uc1:faqadminheadermenu ID="FAQAdminHeaderMenu1" runat="server" />
    <div id="mainContents">
        <h1>FAQ Topic Manager</h1>
        <br />
        Faq topics. A faq topic is a collection of faq's. Manage your faq topics below:
        <br />
        <div id="addNewFAQ">
            <asp:LinkButton ID="AddNewTopic" runat="server">Add new topic</asp:LinkButton>
        </div>
        <asp:GridView ID="TopicsGV" CssClass="FAQTables" runat="server" 
            AutoGenerateColumns="False" DataKeyNames="ID" DataSourceID="TopicsDS">
            <Columns>
                <asp:BoundField DataField="ID" HeaderText="ID" InsertVisible="False" 
                    ReadOnly="True" SortExpression="ID">
                <HeaderStyle HorizontalAlign="Center" />
                <ItemStyle HorizontalAlign="Center" />
                </asp:BoundField>
                <asp:BoundField DataField="Topic" HeaderText="Topic" SortExpression="Topic">
                <HeaderStyle HorizontalAlign="Left" />
                <ItemStyle HorizontalAlign="Left" />
                </asp:BoundField>
                <asp:BoundField DataField="IsActive" HeaderText="Visible" 
                    SortExpression="IsActive">
                <HeaderStyle HorizontalAlign="Center" />
                <ItemStyle HorizontalAlign="Center" />
                </asp:BoundField>
                <asp:TemplateField>
                    <ItemTemplate>
                        <asp:LinkButton ID="Update" runat="server" CommandName="Update" CommandArgument='<% Eval("ID") %>'>Update</asp:LinkButton>
                    </ItemTemplate>
                    <ItemStyle HorizontalAlign="Center" />
                </asp:TemplateField>
            </Columns>
            <AlternatingRowStyle CssClass="alternating" />
        </asp:GridView>
        <asp:ObjectDataSource ID="TopicsDS" runat="server" 
            OldValuesParameterFormatString="original_{0}" SelectMethod="AllFAQTopics" 
            TypeName="FAQTableAdapters.FAQTopicsTableAdapter"></asp:ObjectDataSource>
    </div>
</asp:Content>

