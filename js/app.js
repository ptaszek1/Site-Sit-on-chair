document.addEventListener('DOMContentLoaded' , function () {

    var image1 = document.querySelector('.img1')
    var image2 = document.querySelector('.img2')
    var text1 = document.querySelector('.text-chair1 p')
    var text2 = document.querySelector('.text-chair1')
    var text3 = document.querySelector('.text-chair2 p')
    var text4 = document.querySelector('.text-chair2')


    image1.addEventListener('mouseover' , function (event) {
        text1.classList.add('remove')
        text2.classList.add('remove')
    })

    image1.addEventListener('mouseout', function (event) {
        text1.classList.remove('remove')
        text2.classList.remove('remove')
    })

    image2.addEventListener('mouseover' , function (event) {
        text3.classList.add('remove')
        text4.classList.add('remove')
    })

    image2.addEventListener('mouseout', function (event) {
        text3.classList.remove('remove')
        text4.classList.remove('remove')
    })

    var prev = document.querySelector('#prevPicture')
    var next = document.querySelector('#nextPicture')
    var images = document.querySelectorAll('.chair-img img')
    var count = 0;


    images[0].className = "visible";


    next.addEventListener('click',function (event) {
        images[count].classList.remove("visible")
        count++;
        if ( count === images.length) {
            count = 0;
        }
        images[count].className = "visible";
    })

    prev.addEventListener('click',function (event) {
        images[count].classList.remove("visible")
        count--;
        if (count < 0){
            count = images.length-1;
        }
        images[count].className = "visible";
    })



    // Hamburger menu //

    var burger = document.querySelector('.burger');
    var menu2 = document.querySelector('.menu2');
    var burgerLine = document.querySelectorAll('.burger-line');
    var burgerDiv = document.querySelector('.burger div');

    burger.addEventListener('click' ,function (event) {
        if (menu2.style.top === '-210px') {
            //menu2.classList.remove('remove');
            menu2.style.top = '7%';
            burgerLine[1].classList.add('remove');
            burgerLine[0].style.transform = 'rotate(45deg)';
            burgerLine[0].style.marginTop = '19px';
            burgerLine[2].style.marginBottom = '-15px';
            burgerLine[2].style.transform = 'rotate(-45deg)';
            burgerDiv.style.marginBottom = '-4px';
        } else {
            menu2.style.top = '-210px';
            //menu2.classList.add('remove');
            burgerLine[1].classList.remove('remove');
            burgerLine[0].style.transform = null;
            burgerLine[0].style.marginTop = null;
            burgerLine[2].style.marginBottom = null;
            burgerLine[2].style.transform = null;
            burgerDiv.style.marginBottom = null;
        }
    })

    var lists = document.querySelectorAll('.list_panel');
    var listArrow = document.querySelectorAll('.list_arrow');



    var values = document.querySelectorAll('.value')
    var sum = document.querySelector('.sum strong')


    // Suma kosztów

    function counts() {
        var suma = 0;
        for (var j = 0; j < values.length; j++) {
            var valueSum = parseFloat(values[j].innerText)
            if (valueSum > 0) {
                suma += valueSum;
            }
        }
        sum.innerText = suma;
    }




    for (var i = 0; i < listArrow.length; i++) {
        if (listArrow[i].addEventListener('click', function (event) {
                this.nextElementSibling.style.display = 'block';
                for (var j = 0; j < lists.length; j++) {
                    lists[j].addEventListener('mouseleave', function (event2) {
                        this.style.display = 'none';
                    });
                }
            }));
    };

    // List 1 //

    var allLi1 = lists[0].querySelectorAll("li");
    var chairName = document.querySelector('.chairName');
    var price = document.querySelectorAll('.value');
    var listLabel = document.querySelectorAll('.list_label');

    for (var i = 0; i < allLi1.length; i++) {
        if (allLi1[i].addEventListener('click', function (event) {
                chairName.innerText = this.innerText;
                listLabel[0].innerText = this.innerText;
                for ( var j = 0; j < allLi1.length; j++) {
                    var xxx = parseFloat(this.dataset.price);
                    price[0].innerText = xxx;
                    counts();
                }
            }));

    }

    // List 2 //

    var allLi2 = lists[1].querySelectorAll("li");
    var color = document.querySelector('.color');

    for (var i = 0; i < allLi2.length; i++) {
        if (allLi2[i].addEventListener('click', function (event) {
                color.innerText = this.innerText;
                listLabel[1].innerText = this.innerText;
                for ( var j = 0; j < allLi2.length; j++) {
                    var xxx = parseFloat(this.dataset.price);
                    price[1].innerText = xxx;
                    counts();
                }
            }));

    }
    // List 3 //

    var allLi3 = lists[2].querySelectorAll("li");
    var pattern = document.querySelector('.pattern');

    for (var i = 0; i < allLi3.length; i++) {
        if (allLi3[i].addEventListener('click', function (event) {
                pattern.innerText = this.innerText;
                listLabel[2].innerText = this.innerText;
                for ( var j = 0; j < allLi3.length; j++) {
                    var xxx = parseFloat(this.dataset.price);
                    price[2].innerText = xxx;
                    counts();
                }
            }));

    }

    // Transport //

    var transport = document.querySelector('#transport')
    var transportClass = document.querySelector('.transport');

    transport.addEventListener('change', function (event) {
        if (transport.checked) {
            var xxx = parseFloat(transport.dataset.price);
            price[3].innerText = xxx;
            transportClass.innerText = 'Transport';
            counts();
        } else {
            var xxx = parseFloat(transport.dataset.price);
            price[3].innerText = '';
            transportClass.innerText = '';
            counts();
        }
    });








});