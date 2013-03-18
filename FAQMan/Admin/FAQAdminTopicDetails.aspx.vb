
Partial Class Welcome_FAQ_FAQAdminTopicDetails
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        If Session("TopicID") Is Nothing Then
            Response.Redirect("FAQAdminTopics.aspx")
        End If

        If Not IsPostBack Then
            If Session("TopicID").ToString.Length > 0 Then
                Dim FAQTA As New FAQTableAdapters.FAQTopicsTableAdapter
                Dim FAQDT As New FAQ.FAQTopicsDataTable
                FAQTA.FillTopicByTopicID(FAQDT, Session("TopicID"))

                For Each TR As FAQ.FAQTopicsRow In FAQDT
                    FAQTopicIdLabel.Text = TR.ID
                    TopicName.Text = TR.Topic
                    TopicDescription.Text = TR.TopicDescription

                    If TR.IsActive Then
                        StatusDD.SelectedIndex = 0
                    Else
                        StatusDD.SelectedIndex = 1
                    End If
                Next

                Update.Visible = True
                HideOnInsertPanel.Visible = True
            Else
                Insert.Visible = True
                HideOnInsertPanel.Visible = False
            End If
        End If
    End Sub

    Protected Sub cancel_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles cancel.Click
        Session("TopicID") = String.Empty
        Response.Redirect("FAQAdminTopics.aspx")
    End Sub

    Protected Sub Update_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles Update.Click

        Dim FAQTA As New FAQTableAdapters.FAQTopicsTableAdapter
        Dim Status As Boolean
        If StatusDD.SelectedValue = "Active" Then
            Status = True
        Else
            Status = False
        End If
        FAQTA.UpdateTopicByID(TopicName.Text, TopicDescription.Text, Status, CType(Session("TopicID"), Integer))

        Session("TopicID") = String.Empty
        Response.Redirect("FAQAdminTopics.aspx")
    End Sub

    Protected Sub Insert_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles Insert.Click
        Dim FAQTA As New FAQTableAdapters.FAQTopicsTableAdapter
        Dim Status As Boolean
        If StatusDD.SelectedValue = "Active" Then
            Status = True
        Else
            Status = False
        End If
        FAQTA.InsertTopic(TopicName.Text, TopicDescription.Text, Status)
        Response.Redirect("FAQAdminTopics.aspx")
    End Sub
End Class
