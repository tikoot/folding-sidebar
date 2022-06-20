function hideSubmenus(){
    let submenus = document.querySelectorAll('ul li ul');
    for(let i = 0; i < submenus.length; i++){
        submenus[i].className = "hide-menu";
    }
}

		hideSubmenus();

let menulinks = document.querySelectorAll('.menulink');

for(let i = 0; i < menulinks.length; i++){
    menulinks[i].addEventListener('click',function(event){
        event.preventDefault();
        
        let thisMenu = this.parentNode.querySelector('ul');
        //console.log(thisMenu.innerHTML);
        

        if(thisMenu.classList.contains('hide-menu')){
            hideSubmenus();
            thisMenu.className = 'show-menu';
            
        }
        else{
            thisMenu.className = 'hide-menu';
        }

    });

}

