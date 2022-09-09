function catAndMouse(mouse, cat1, cat2) {

    let posicaoCat1 = Math.abs(mouse - cat1);
    let posicaoCat2 = Math.abs(mouse - cat2);
   
    if (posicaoCat1 < posicaoCat2) {
        return 'cat1';
    } else if (posicaoCat1 > posicaoCat2) {
        return 'cat2';
    }
    return 'os gatos trombam e o rato foge';
}



  
console.log(catAndMouse(0,2,6));