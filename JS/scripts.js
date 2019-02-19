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

    if (gender === 'female' && typeOf === 'movieStar' && date === 'cruise'){
        result = 'Meryl Streep';
      }

    if (gender === 'female' && typeOf === 'movieStar' && date === 'fancyDinner'){
          result = 'Penelope Cruz';
        }

    if (gender === 'female' && typeOf === 'singer' && date === 'beach'){
          result = 'Beyonce';

          }

    if (gender === 'female' && typeOf === 'singer' && date === 'cruise'){
            result = 'Lady Gaga';
          }

    if (gender === 'female' && typeOf === 'singer' && date === 'fancyDinner'){
              result = 'Barbara Streisand';
            }

    if (gender === 'female' && typeOf === 'influencer' && date === 'beach'){
                  result = 'Kim Kardashian';

                  }

    if (gender === 'female' && typeOf === 'influencer' && date === 'cruise'){
                    result = 'Kylie Jenner';
                  }

    if (gender === 'female' && typeOf === 'influencer' && date === 'fancyDinner'){
                      result = 'Lele Pons';
                    }
    $("#celeb").text(result);
    $("#result").show();
  });
});
