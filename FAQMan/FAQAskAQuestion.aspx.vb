
Partial Class Welcome_AskAQuestion
    Inherits System.Web.UI.Page


    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        '
        'Populate Form
        'Dim PreSalesTA As New PresalesDataSetTableAdapters.PreSalesUsersTableAdapter
        'Dim PreSalesDT As New PresalesDataSet.PreSalesUsersDataTable
        'PreSalesTA.FillPreSalesUserByID(PreSalesDT, Session("PreSalesUserID"))

        'For Each PSRow As PresalesDataSet.PreSalesUsersRow In PreSalesDT
        '    Name.Text = PSRow.FirstName & " " & PSRow.LastName
        '    EmailAddress.Text = PSRow.EmailAddress
        'Next
    End Sub

    Private Sub SubmitQuestion_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles SubmitQuestion.Click

        Dim faqta As New FAQTableAdapters.FAQTableAdapter
        Dim faqsta As New FAQTableAdapters.FAQStatusesTableAdapter
        Dim faqtta As New FAQTableAdapters.FAQTopicsTableAdapter

        Dim questionId As Integer = faqta.InsertQuestion(Session("PreSalesUserID"), Now(), CType(faqtta.GetTopicIDByTopic("General Questions"), Integer), Question.Text, "", False, CType(faqsta.GetStatusIDByStatus("Pending"), Integer), "", String.Format("Question submitted by: {0} ({1})", Name.Text, EmailAddress.Text), True)

        Message.Text = "<br />Your question has been submitted. Your ticket number is: " & questionId
        Message.Visible = True
    End Sub

    
End Class
