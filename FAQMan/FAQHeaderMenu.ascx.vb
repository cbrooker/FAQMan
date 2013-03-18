
Partial Class Welcome_rpHeaderMenu
    Inherits System.Web.UI.UserControl


    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        'If Session("PreSalesUserID") Is Nothing Or Len(Session("PreSalesUserID")) = 0 Then
        '    Response.Redirect("../Default.aspx")
        'End If
    End Sub

   
    Protected Sub FAQHome_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles FAQHome.Click
        Response.Redirect("~/Default.aspx")
    End Sub

    Protected Sub ToResellerPortal_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles ToResellerPortal.Click
        Response.Redirect("~/ResellerPortal.aspx")
    End Sub

    Protected Sub AskAQuestion_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles AskAQuestion.Click
        Response.Redirect("~/FAQAskAQuestion.aspx")
    End Sub

    Protected Sub SearchFAQ_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles SearchFAQ.Click
        Response.Redirect("~/FAQSearch.aspx")
    End Sub
End Class
