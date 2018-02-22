/* Developed by Eric de Souza aka @ericxlive
   EbugTeam, Research and Development, 2018
   See: github.com/ericxlive or github.com/ebugteam
   About: Import this line <script src="draggable.js"></script> to your
   HTML file. Must import the line above in the HEAD section. */

/* Draggable effect. In this case the effect will be applied to all
   components with "class=draggable" */
$(document).ready(function() {
    $( ".draggable" ).draggable({
      addClasses: false
    });
 });
