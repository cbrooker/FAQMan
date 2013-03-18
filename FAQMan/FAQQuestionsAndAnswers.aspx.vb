
Partial Class Welcome_FAQ_FAQQuestionsAndAnswers
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

        If Session("TopicID") Is Nothing Or Len(Session("TopicID")) = 0 Then
            Response.Redirect("Default.aspx")
        End If

        Dim TopicTA As New FAQTableAdapters.FAQTopicsTableAdapter
        Dim TopicDT As New FAQ.FAQTopicsDataTable

        TopicTA.FillTopicByTopicID(TopicDT, Session("TopicID"))

        For Each TRow As FAQ.FAQTopicsRow In TopicDT
            HeaderTopicLabel.Text = TRow.Topic
            TopicDescriptionLabel.Text = TRow.TopicDescription
        Next

    End Sub
End Class
