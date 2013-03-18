
Partial Class Welcome_FAQ_Default
    Inherits System.Web.UI.Page

    Protected Sub FAQTopicsRepeater_ItemCommand(ByVal source As Object, ByVal e As System.Web.UI.WebControls.RepeaterCommandEventArgs) Handles FAQTopicsRepeater.ItemCommand

        If e.CommandName = "TopicSelected" Then
            Session("TopicID") = CType(e.CommandArgument, Integer)
            Response.Redirect("FAQQuestionsAndAnswers.aspx")
        End If

    End Sub

    Protected Sub SearchButton_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles SearchButton.Click
        Session("SearchText") = SearchText.Text
        Response.Redirect("FAQSearch.aspx")
    End Sub
End Class
