$("#column_select").change(function () {
    $("#layout_select")
        .find("option")
        .show()
        .not("option[value*='" + this.value + "']").hide();

    $("#layout_select").val(
        $("#layout_select").find("option:visible:first").val());

        $("button").click(function(event){
          var marks = $("#marks").val();
          var region = $("#layout_select").val();
          var school = $("#column_select").val();
          if (marks <= 350) {
            alert('low marks')
          }else if (marks >= 500) {
            alert('invalid marks')
          }
          else(
          $("#box").show());
          event.preventDefault()
        });

}).change();


// $(document).ready(function(){
    
//   });

