
Partial Class Welcome_FAQ_Admin_FAQDetails
    Inherits System.Web.UI.Page

   
    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

        If Session("FAQID") Is Nothing Then
            Response.Redirect("FAQAdmin.aspx")
        End If

        If Not IsPostBack Then
            If Session("FAQID").ToString.Length > 0 Then
                Dim FAQTA As New FAQTableAdapters.FAQTableAdapter
                Dim FAQDT As New FAQ.FAQDataTable
                FAQTA.FillFAQByID(FAQDT, Session("FAQID"))

                For Each FAQR As FAQ.FAQRow In FAQDT
                    FAQIdLabel.Text = FAQR.ID
                    DateCreatedLabel.Text = FAQR.DateCreated.ToString("MMMM dd, yyyy hh:mm:ss tt")

                    TopicDD.DataBind()
                    For Each TopicItem As ListItem In TopicDD.Items
                        If TopicItem.Value = FAQR.TopicID Then
                            TopicItem.Selected = True
                        End If
                    Next

                    QuestionTextBox.Text = FAQR.Question
                    AnswerText.Text = FAQR.Answer


                    KeywordsTextBox.Text = FAQR.Keywords
                    NotesTextBox.Text = FAQR.Notes

                    If FAQR.IsPublic Then
                        VisibleToPublic.Checked = True
                    Else
                        NotVisibleToPublic.Checked = True
                    End If

                    StatusDD.DataBind()
                    For Each StatusItem As ListItem In StatusDD.Items
                        If StatusItem.Value = FAQR.StatusID Then
                            StatusItem.Selected = True
                        End If
                    Next
                Next
                Update.Visible = True
                HideOnInsertPanel.Visible = True
            Else
                Insert.Visible = True
                HideOnInsertPanel.Visible = False
            End If
        End If
    End Sub


    Protected Sub Update_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles Update.Click

        Dim FAQTA As New FAQTableAdapters.FAQTableAdapter
        FAQTA.UpdateFAQ(TopicDD.SelectedValue, QuestionTextBox.Text, AnswerText.Text, VisibleToPublic.Checked, StatusDD.SelectedValue, KeywordsTextBox.Text, NotesTextBox.Text, True, CType(FAQIdLabel.Text, Integer))

        Session("FAQID") = String.Empty
        Response.Redirect("FAQAdmin.aspx")
    End Sub

    Protected Sub cancel_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles cancel.Click
        Session("FAQID") = String.Empty
        Response.Redirect("FAQAdmin.aspx")
    End Sub

    Protected Sub Insert_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles Insert.Click
        Dim FAQTA As New FAQTableAdapters.FAQTableAdapter
        FAQTA.InsertQuestion(Nothing, Now(), TopicDD.SelectedValue, QuestionTextBox.Text, AnswerText.Text, VisibleToPublic.Checked, StatusDD.SelectedValue, KeywordsTextBox.Text, NotesTextBox.Text, True)
        Response.Redirect("FAQAdmin.aspx")
    End Sub
End Class
