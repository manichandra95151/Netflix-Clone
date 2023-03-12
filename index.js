window.addEventListener('load',function() {
    init();
    window.addEventListener('scroll', function(){

        const header = document.getElementById('header');
        if (window.scrollY > 5) header.classList.add('black')
        else header.classList.remove('black');
    })
})
