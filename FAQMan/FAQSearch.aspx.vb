
Partial Class Welcome_FAQ_FAQSearch
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

        If Not Session("SearchText") Is Nothing Then
            SearchKeyword.Text = Session("SearchText")
            Session("SearchText") = Nothing
        End If

    End Sub

    Public Sub ApplyFilter()

        If TopicDD.SelectedValue = "Select Topic ..." Then
            SearchResultsDS.FilterExpression = String.Empty
        Else
            If IsNumeric(TopicDD.SelectedValue) Then
                SearchResultsDS.FilterExpression = String.Format("(TopicID = '{0}')", TopicDD.SelectedValue)
            Else
                SearchResultsDS.FilterExpression = String.Empty
            End If
        End If
        If Len(SearchKeyword.Text) > 0 Then
            If SearchResultsDS.FilterExpression.Length > 0 Then
                Dim Oper As String = String.Empty
                If AndRadioButton.Checked Then
                    Oper = " AND "
                ElseIf OrRadioButton.Checked Then
                    Oper = " OR "
                End If

                SearchResultsDS.FilterExpression &= String.Format(Oper & "((Keywords LIKE '*{0}*') or (Question LIKE '*{0}*') or " & _
                                "(Answer LIKE '*{0}*'))", SearchKeyword.Text)
            Else
                SearchResultsDS.FilterExpression = String.Format("(Keywords LIKE '*{0}*') or (Question LIKE '*{0}*') or " & _
                                "(Answer LIKE '*{0}*')", SearchKeyword.Text)
            End If
        End If

        SearchResultsListView.DataBind()

    End Sub


    Protected Sub SubmitSearch_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles SubmitSearch.Click
        ApplyFilter()
    End Sub

    Protected Sub TopicDD_DataBound(ByVal sender As Object, ByVal e As System.EventArgs) Handles TopicDD.DataBound
        TopicDD.Items.Insert(0, "Select Topic ...")
    End Sub


    Protected Sub SearchResultsListView_ItemCommand(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.ListViewCommandEventArgs) Handles SearchResultsListView.ItemCommand
        If e.CommandName = "SelectedFAQ" Then
            Dim Vals = e.CommandArgument.ToString.Split(";")
            Session("TopicID") = Vals(1)
            Response.Redirect("FAQQuestionsAndAnswers.aspx#" & Vals(0))
        ElseIf e.CommandName = "SelectedTopic" Then
            Session("TopicID") = e.CommandArgument
            Response.Redirect("FAQQuestionsAndAnswers.aspx")
        End If
    End Sub

    Protected Function Highlight(ByVal value As Object) As String
        If Not value Is System.DBNull.Value Then
            Dim result As String = CType(value, String)

            If SearchKeyword.Text.Length > 0 Then
                Dim idx As Integer = result.IndexOf(SearchKeyword.Text, StringComparison.CurrentCultureIgnoreCase)

                If (idx >= 0) Then
                    result = result.Substring(0, idx) + "<span class='highLightColor'>" + _
                        result.Substring(idx, SearchKeyword.Text.Length) + "</span>" + _
                        result.Substring(idx + SearchKeyword.Text.Length)
                End If
            End If

            Return result
        Else
            Return ""
        End If
    End Function

    Protected Sub Page_LoadComplete(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.LoadComplete
        ApplyFilter()
    End Sub
End Class
