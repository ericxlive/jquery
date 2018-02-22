/* Developed by Eric de Souza aka @ericxlive
   EbugTeam, Research and Development, 2018
   See: github.com/ericxlive or github.com/ebugteam
   About: Import this line <script src="bounce.js"></script> to your
   HTML file. Must import the line above in the HEAD section. */

/* Draggable effect. In this case the effect will be applied to all
   components with "class=bounce" */

$(document).ready(function() {
    $(".bounce").click(function(){
       $(this).effect( "bounce", {times:3}, 300 );
    });
 });
