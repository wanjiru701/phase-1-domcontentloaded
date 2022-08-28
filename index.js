document.addEventListener( "DOMContentLoaded", function () {
    updateDOM()
    console.log("This DOM has loaded");
  } );
  
  
  function updateDOM() {
    document.getElementById( "text" )
      .innerHTML = "This is really cool!";
  }