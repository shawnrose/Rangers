$(document).ready(function() {


//TOP NAV FUNCTIONS
 

//DO 1 - ADD COLOR

    $( "#do-1" ).on( "click", function () {

        
        var storyNum = prompt("What Story do you want to Color? ", "a, b, c");
        var color = prompt("Please type a color (Web Safe Only)", "Type your Choice");
                       
        if (color != null) {
            $('#col-' + (storyNum).toLowerCase()).css("background-color", (color));
            //document.getElementById("col1").css("background-color", (color));
        }
    });


//DO 2 - WRITE STORY
    $( "#do-2" ).on( "click", function () {

        var heading = prompt("Please enter your headline", "");
        var story = prompt("Please enter your short story", "");

        if (heading != null) {
            document.getElementById("userHeadline").innerHTML = heading;
            document.getElementById("userStory").innerHTML = story;
        }
    });

//DO 3 - SLIDE NAV
    
    $(document).ready(function () {
 
        $( "#do-3" ).click(function () {
            //alert('Hey TEST');
            $( "#slideNav" ).slideDown( "slow" )
        });
    });


 /*
    if ($("#slideNav").class("up")) {
         $( "#slideNav" ).slideDown( "slow" )
    } else {
        $( "#slideNav" ).slideUp( "slow" )
    }
      });
    });
    */
  

    //TOGGLE LIST ITEMS IN STORY
    $(".story1 p").hide();
        $( ".btn-story1" ).on( 'click', function () {
          $ ( ".story1 p" ).toggle("fast");
    });

	$(".story2 p").hide();
        $( ".btn-story2" ).on( 'click', function () {
          $( ".story2 p" ).toggle( "fast" );
        });
		
	$(".story3 p").hide();
        $( ".btn-story3" ).on( 'click', function () {
          $( ".story3 p" ).toggle( "fast" );
        });
});

