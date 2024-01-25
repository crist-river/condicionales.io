let border = true

const img = document.querySelector('img')


img.addEventListener('click', () => {
    if(border == true){
        img.style.border = '3px solid red'
        border = false
        console.log(bandera)
    }else{
        img.style.border = 'none'
        border = true
        console.log(bandera)
    }
})