


$("#btnSend").click(function () {
    alert("Your grade is: " +
        ($("#assignmentGrade").val() + $("#groupProjectGrade").val() + $("#quizzesGrade").val()
            + $("#examGrade").val() + $("#intexGrade").val())/5);
})

