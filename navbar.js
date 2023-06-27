const menu = document.getElementById('menu')
const hmenu = document.getElementById('hmenu')
const cancel = document.getElementById('cancel')

hmenu.addEventListener('click', function(){
    menu.classList.toggle('hidden')
    hmenu.style.display = 'none'
    cancel.style.display = 'block'
})

cancel.addEventListener('click', function(){
    menu.classList.toggle('hidden')
    hmenu.style.display = 'block'
    cancel.style.display = 'none'
})