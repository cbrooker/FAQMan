
Partial Class Welcome_FAQ_FAQAdminTopics
    Inherits System.Web.UI.Page

    Protected Sub TopicsGV_RowDataBound(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.GridViewRowEventArgs) Handles TopicsGV.RowDataBound

        'If e.Row.RowType = DataControlRowType.DataRow Then
        '    Dim MyLinkButton As LinkButton = e.Row.FindControl("DeleteButton")
        '    If Not MyLinkButton Is Nothing Then
        '        Dim ModalExtender As New AjaxControlToolkit.ModalPopupExtender
        '        ModalExtender.ID = MyLinkButton.ClientID & "Modal"
        '        ModalExtender.TargetControlID = MyLinkButton.ID
        '        ModalExtender.PopupControlID = "Panel2"
        '        ModalExtender.BackgroundCssClass = "modalBackground"
        '        ModalExtender.OkControlID = "YesButton"
        '        ModalExtender.CancelControlID = "NoButton"
        '        ModalExtender.PopupDragHandleControlID = "Panel3"
        '        e.Row.Cells(4).Controls.Add(ModalExtender)
        '    End If

        'End If

    End Sub

    Protected Sub TopicsGV_RowDeleting(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.GridViewDeleteEventArgs) Handles TopicsGV.RowDeleting


        e.Cancel = True
    End Sub

    Protected Sub TopicsGV_RowUpdating(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.GridViewUpdateEventArgs) Handles TopicsGV.RowUpdating
        Session("TopicID") = CType(e.Keys(0), Integer)
        Response.Redirect("FAQAdminTopicDetails.aspx")
        e.Cancel = True
    End Sub


    Protected Sub AddNewTopic_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles AddNewTopic.Click
        Session("TopicID") = String.Empty
        Response.Redirect("FAQAdminTopicDetails.aspx")
    End Sub
End Class
