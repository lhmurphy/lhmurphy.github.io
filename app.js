$(document).ready(() => {
  console.log('this is working')

  // Counter for how long I've been coding:
  var started = new Date(2019,8,1,00,00,00,0); 
  var exactStart = started.getTime();
  
  var newDate = new Date();
  var newStamp = newDate.getTime();
  
  var timer; 

  let counterEl = document.querySelector('#counter');
  
  function updateClock() {
      newDate = new Date();
      newStamp = newDate.getTime();
      var diff = Math.round((newStamp-exactStart)/1000);
      
      var d = Math.floor(diff/(24*60*60)); 
      diff = diff-(d*24*60*60);
      var h = Math.floor(diff/(60*60));
      diff = diff-(h*60*60);
      var m = Math.floor(diff/(60));
      diff = diff-(m*60);
      var s = diff;
      
      document.getElementById("counter-d").innerHTML = d + ` /&nbsp;`;
      document.getElementById("counter-h").innerHTML = h + ` /&nbsp;`;
      document.getElementById("counter-m").innerHTML = m + ` /&nbsp;`;
      document.getElementById("counter-s").innerHTML = + s;
  }
  
  timer = setInterval(updateClock, 1000);
  // End of Counter

  // Open modal to explainn counter:

  const model = document.querySelector('.modal');
  const cross = document.querySelector('.cross');
  const body = document.querySelector('body');
  let isOpen = false;

  // body.addEventListener('click', function(evt) {
  //   alert('clicking on body');
  //   if(!$(evt.target).closest(model).lenght) {
  //     if(isOpen === true) {
  //       model.style.display = "none";
  //     }
  //   }
  // })
  // counterElClicked = getParentNodeElement(counterEl);



  function openModal(evt) {
    // counterEl = getParentNodeElement('DIV', evt.target)
    counterEl = evt.target.closest('DIV');

    if(evt.target === counterEl) {
      model.style.display = "block";
      isOpen = true;
    }
  }

  cross.addEventListener('click', function(evt) {
    if(evt.target === cross) {
      model.style.display = "none";
      isOpen = false;
    }
  }) 

  function getParentNodeElement(nodeName, startNode) {
    let found = startNode;
    const stopNode = document.body;
    
      if(found.nodeName === nodeName) {
        return found;
      } 
      found = startNode.parentElement;
      
      while(found && found !== stopNode) {
        if(found.nodeName === nodeName) {
          return found;
        } 
        found = found.parentElement;
      }
      if (found === stopNode) {
        return null;
      }
  }

  // add event listener to counterEl
  counterEl.addEventListener('click', evt => openModal(evt, counterEl));
  // evt = start
  // counterEl  = stop
})
