const shareIcon = document.querySelector('.share-icon');
const shareIconMobile = document.querySelector('.share-icon-mobile');
const shareBox = document.querySelector('.share-box')
const triangle = document.querySelector('.triangle');
let svg =  document.querySelector('svg');
const icon = document.querySelector('.icon');



icon.addEventListener('click',()=>{
    if (icon.classList.contains('light-bg')){
        icon.classList.remove('light-bg');
        icon.classList.add('dark-bg')
        svg.classList.add('active')
    }
    else{
        icon.classList.remove('dark-bg');
        icon.classList.add('light-bg')
        svg.classList.remove('active')
        svg.classList.add('visible')
    }
});
shareIcon.addEventListener('click', ()=>{


    if(shareBox.classList.contains('hide-me')){
        shareBox.classList.remove('hide-me');
        shareBox.classList.add('show-me');
        triangle.classList.remove('hide-me')
    }    
    else{
        shareBox.classList.remove('show-me');
        shareBox.classList.add('hide-me');
        triangle.classList.add('hide-me')
    }

    if (shareIcon.classList.containes('visible')){
        shareIcon.classList.remove('visible');
        shareIcon.classList.add('active')
    }
    else{
            shareIcon.classList.remove('active');
            shareIcon.classList.add('visible')
    }    
})
    
shareIconMobile.addEventListener('click',()=>{
    if (shareBox.classList.contains('show-me'))
    {
        shareBox.classList.remove('show-me');
        shareBox.classList.add('hide-me')
        triangle.classList.add('hide-me')
    }
    if (shareIcon.classList.containes('visible')){
        shareIcon.classList.remove('visible');
        shareIcon.classList.add('active')
    }
    else{
            shareIcon.classList.remove('active');
            shareIcon.classList.add('remove')
    }
})
