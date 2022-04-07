const app = () =>{
    const buttons = document.querySelectorAll('.button');
    const cards = document.querySelectorAll('.card');

    function filter (category, items) {
        items.forEach((item) => {
           const isItemFilter = !item.classList.contains(category);
           const isAll = category.toLowerCase() === 'all';
           if (isItemFilter && !isAll) {
               item.classList.add('anime');
           }
           else{
                item.classList.remove('hide');
                item.classList.remove('anime');
           }
        })
    }

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const currentCategory = button.dataset.filte;
            filter(currentCategory, cards);
        });
    });
    cards.forEach((card) => {
        card.ontransitionend = function(){
            if (card.classList.contains('anime')){
                card.classList.add('hide');
            }
        }
    })
}

app();