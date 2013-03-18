
Partial Class Welcome_FAQ_Default
    Inherits System.Web.UI.Page

    Protected Sub FAQGridview_RowCommand(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.GridViewCommandEventArgs) Handles FAQGridview.RowCommand

        If e.CommandName = "EditQuestion" Then
            Session("FAQID") = e.CommandArgument
            Response.Redirect("FAQAdminDetails.aspx")
        End If

    End Sub

    Protected Sub FAQGridview_RowDataBound(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.GridViewRowEventArgs) Handles FAQGridview.RowDataBound

        If e.Row.RowType = DataControlRowType.DataRow Then
            Dim MyLinkButton As LinkButton = e.Row.FindControl("DeleteButton")
            If Not MyLinkButton Is Nothing Then
                Dim ModalExtender As New AjaxControlToolkit.ModalPopupExtender
                ModalExtender.ID = MyLinkButton.ClientID & "Modal"
                ModalExtender.TargetControlID = MyLinkButton.ID
                ModalExtender.PopupControlID = "Panel2"
                ModalExtender.BackgroundCssClass = "modalBackground"
                ModalExtender.OkControlID = "YesButton"
                ModalExtender.CancelControlID = "NoButton"
                ModalExtender.PopupDragHandleControlID = "Panel3"
                e.Row.Cells(5).Controls.Add(ModalExtender)
            End If

            Dim MyLabel As Label = e.Row.FindControl("VisibilityLabel")
            If Not MyLabel Is Nothing Then
                If e.Row.DataItem("IsPublic") Then
                    MyLabel.Text = "Public"
                Else
                    MyLabel.Text = "Private"
                End If
            End If



        End If
    End Sub

    Protected Sub TopicDD_DataBound(ByVal sender As Object, ByVal e As System.EventArgs) Handles TopicDD.DataBound
        TopicDD.Items.Insert(0, "All Faq's")
    End Sub

    Protected Sub StatusDD_DataBound(ByVal sender As Object, ByVal e As System.EventArgs) Handles StatusDD.DataBound
        StatusDD.Items.Insert(0, "- status -")
    End Sub

    Protected Sub AddFaq_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles AddFaq.Click
        Session("FAQID") = String.Empty
        Response.Redirect("FAQAdminDetails.aspx")
    End Sub

    Protected Sub SubmitSearch_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles SubmitSearch.Click
        ApplyFilter()
    End Sub

    Public Sub ApplyFilter()

        FAQDS.FilterExpression = String.Empty

        If Not TopicDD.SelectedValue = "All Faq's" Then
            FAQDS.FilterExpression = String.Format("(Topic = '{0}')", TopicDD.SelectedValue)
        End If
        If Not StatusDD.SelectedValue = "- status -" Then
            If FAQDS.FilterExpression.Length > 0 Then
                FAQDS.FilterExpression &= " AND "
            End If
            FAQDS.FilterExpression &= String.Format("(Status = '{0}')", StatusDD.SelectedValue)
        End If
        If Not VisibilityDD.SelectedValue = "- visibility -" Then
            If FAQDS.FilterExpression.Length > 0 Then
                FAQDS.FilterExpression &= " AND "
            End If
            If VisibilityDD.SelectedValue = "Public" Then
                FAQDS.FilterExpression &= String.Format("(IsPublic = '{0}')", True)
            Else
                FAQDS.FilterExpression &= String.Format("(IsPublic = '{0}')", False)
            End If

        End If
        If SearchKeyword.Text.Length > 0 Then
            If FAQDS.FilterExpression.Length > 0 Then
                FAQDS.FilterExpression &= " AND "
            End If
            FAQDS.FilterExpression &= String.Format("(Question LIKE '%{0}%')", SearchKeyword.Text)
        End If

        FAQGridview.DataBind()

    End Sub

    Protected Sub FAQGridview_RowDeleting(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.GridViewDeleteEventArgs) Handles FAQGridview.RowDeleting

        Dim FAQTA As New FAQTableAdapters.FAQTableAdapter
        FAQTA.DeleteFAQByID(CType(e.Keys(0), Integer))
        e.Cancel = True

        FAQGridview.DataBind()
    End Sub

End Class
