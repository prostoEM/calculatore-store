function countFunc(count) {
    let btnPlus = count.querySelector('.js-plus-btn');
    let btnMinus = count.querySelector('.js-minus-btn');
    let field = count.querySelector('.js-number');
    let fieldValue = parseFloat(field.value, 100);

    btnMinus.addEventListener('click', function () {
        if (fieldValue > 0) {
            fieldValue--;
            field.value = fieldValue;
        } else {
            return 0;

        }
        console.log(fieldValue, field.value);
    });
    btnPlus.addEventListener('click', function () {
        fieldValue++;
        field.value = fieldValue;
    });

}
let counts = document.querySelectorAll('.wrapper');
counts.forEach(countFunc);



$('input[name="radio_pick"]').click(function () {
    let target = $('#block-' + $(this).val());

    $('.texture').not(target).hide(0);
    target.fadeIn(300);
});


var totalSum = 0;

function total() {
  var checkedElement = parseInt($('input[name="radio_maker"]:checked').val()),
      inputSum = parseInt($("#number-metr").val());
  if(!inputSum) {
    $("#number-metr").val('1')
  }
  $('#summ span').html(checkedElement * inputSum);
};

$('.calc__input').on("change", function(){
  console.log(parseInt($('input[name="radio_maker"]:checked').val()))
  total();
});

$("#number-metr").on("change",function() {
    console.log(parseInt($("#number-metr").val()));
  if ($(this).val() > 0) {
    $("#number-metr").each(function() {
      totalSum += inputFloor;
    });
    total();
  }
});

$("#summ span").text(totalSum);



