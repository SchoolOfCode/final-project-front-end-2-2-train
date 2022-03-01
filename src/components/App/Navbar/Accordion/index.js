import React from "react";

function Accordion() {
   return (
      <div>
         <button class="accordion">Section 1</button>
         <div class="panel">
            <p>Lorem ipsum...</p>
         </div>

         <button class="accordion">Section 2</button>
         <div class="panel">
            <p>Lorem ipsum...</p>
         </div>

         <button class="accordion">Section 3</button>
         <div class="panel">
            <p>Lorem ipsum...</p>
         </div>
      </div>
   );
}

export default Accordion;
