const MenuCollapser = (trigger, collapsableMenu) => {
    const button = document.getElementsByClassName(trigger)
    const menu = document.getElementsByClassName(collapsableMenu)[0]
    let switcher = 0
    for (let i = 0; i < button.length; i++) { 
        button[i].addEventListener('click', () => { 
            if (switcher == 0) {
                menu.style.display = 'grid'
                switcher = 1
            } else { 
                menu.style.display = 'none'
                switcher = 0

            }
        })
    }
}

export default MenuCollapser