$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var gender = $("select#gender").val();
    var typeOf = $("select#typeOf").val();
    var date = $("select#date").val();

    var result = '';
    if (gender === 'female' && typeOf === 'movieStar' && date === 'beach'){
      result = 'Julia Roberts';

      }

    if (gender === 'female' && typeOf === 'singer' && date === 'beach'){
        result = 'Lady Gaga';
      }

    $("#celeb").text(result);
    $("#result").show();
  });
});
