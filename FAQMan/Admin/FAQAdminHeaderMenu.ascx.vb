
Partial Class Welcome_rpHeaderMenu
    Inherits System.Web.UI.UserControl


    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        'If Session("PreSalesUserID") Is Nothing Or Len(Session("PreSalesUserID")) = 0 Then
        '    Response.Redirect("../Default.aspx")
        'End If
    End Sub
   
    Protected Sub FAQHome_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles FAQHome.Click
        Response.Redirect("~/Admin/FAQAdmin.aspx")
    End Sub

    Protected Sub FAQTopic_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles FAQTopic.Click
        Response.Redirect("~/Admin/FAQAdminTopics.aspx")
    End Sub

    Protected Sub ViewSite_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles ViewSite.Click
        Response.Redirect("~/Admin/Default.aspx")
    End Sub

    Protected Sub BackToOrigin_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles BackToOrigin.Click
        Response.Redirect("~/SA/ContView.aspx")
    End Sub
End Class
