let shareIcon = document.querySelector('.share-icon');
const shareIconMobile = document.querySelector('.share-icon-mobile');
const shareBox = document.querySelector('.share-box')
const triangle = document.querySelector('.triangle');

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
    
})
    
shareIconMobile.addEventListener('click',()=>{
    if (shareBox.classList.contains('show-me'))
    {
        shareBox.classList.remove('show-me');
        shareBox.classList.add('hide-me')
        triangle.classList.add('hide-me')
    }
})
