$(document).ready(function() {
  $('#onclickSubmit').on('click',function(){

      var input = $('#homeSearchFormField').val();
      window.location.href="searchresult.html?input="+input+"&limit=0";
      return false;

  });
});
