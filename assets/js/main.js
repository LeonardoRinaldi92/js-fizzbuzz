function test() {
    for (let x = 1; x <= 150; x++) {
        let whatAppear;
        let css;
      
        if (x % 3 === 0 && x % 5 === 0) {
          whatAppear = 'BUZZFIZZ'
          css = 'buzzfizzStyle'
        } else if (x % 5 === 0) {
          whatAppear = 'FIZZ'
          css = 'fizzStyle'
        } else if (x % 3 === 0 ) {
          whatAppear = 'BUZZ'
          css = 'buzzStyle'
        } else {
          whatAppear = x
          css = 'standard'
        }
      
          let element = document.createElement("div");
          element.appendChild(document.createTextNode(whatAppear));
          element.style
          element.style.animation = "fadein " + (x /12) + "s ";
          element.classList.add(css);
          document.getElementById('buzzfizz').appendChild(element);
    }
}

document.getElementById("button_start").addEventListener('click', function() {
    document.getElementById("button_start").remove();
    
    test();
})