let filterInput = document.getElementById('filterInput');

// Add Event Listener
filterInput.addEventListener('keyup',filterNames);

function filterNames() {
    //Get Value of Input

    let filterValue = document.getElementById('filterInput').value.toUpperCase();

    //Get names UL
    let ul = document.getElementById('names');

    //Get li from ul

    let li = ul.querySelectorAll('li.collection-item');

    // Loop Through collection item li
    for(let i=0; i < li.length; i++){
        let a = li[i].getElementsByTagName('a')[0];
        if(a.innerText.toUpperCase().indexOf(filterValue)> -1){
                li[i].style.display = '';
        } else{
            li[i].style.display = 'none';
        }
    }
}
