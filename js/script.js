'use strict';

 var doc = '' + document.location.href;
 var last = doc.lastIndexOf('/');
 var fileName = doc.substr(last + 1);  // getting the the name of current Html file
//-------------------------- Template
$(function(){

  var html = $('#test').html();
  
      var div1 = '<div class="question">';   // -- tag wrappers for object elements
      var div2 = '</div>';
      var p1   = '<div class="variant"><input type="radio" class="input" name="variant'; 
      var id = '" id="';  
      var For = '"><label for="var'; 
      var p2   = '</label></div>';
      //-----------------
      var p11 = '<div class="variant"><input type="checkbox" name="variant'; 
      var dig1 = 0;

   function dig() {
    dig1++; 
    return ('" id="var' + dig1 + '" value="num') 
}
  //-----------------------------------------------
        function shuffle(numPool) {
        for(var j, x, i = numPool.length; i; j = parseInt(Math.random() * i), x = numPool[--i], numPool[i] = numPool[j], numPool[j] = x);
        return numPool;
      };

        var letter = ['a', 'b', 'c', 'd'];
        var dig2 = 0;
      function connect( elem, idNum ) {  // --- connecting the random data from arrays to id numbers
        for( var i = 0; i < 4; i++ ) {
          if( elem.charAt(3) == letter[i]) {
            dig2 = (idNum+i);
            return ('" id="var' + (idNum+i) + '" value="num' + (idNum+i));   
          }
        }
      }
//-------------------------------------------------------------
  var js = {

      js10: ['"> a. Код данного скрипта будет обработан по строгим правилам стандарта HTML5.', '"> b. Код данного скрипта будет обработан по строгим правилам стандарта EcmaScript 5.', '"> c. Код данного скрипта будет обработан по строгим правилам, однако допускается использование нестрогих правил написания кода.', '"> d. Код данного скрипта будет обработан по строгим правилам стандарта EcmaScript 6.'],
      js20: ['"> a. Внутри блока {}', '"> b. Во всем скрипте.', '"> c. Либо во всем скрипте, либо в отдельной функции.', '"> d. Строгие правила работают между директивами ‘use strict’ и ‘strict end’.'],
      js30: ['"> a. Глобальные переменные должны объявляться с использованием ключевого слова var', '"> b. Любая переменная должна объявляться с использованием ключевого слова var' , '"> c. Название переменных должно быть camel-case с маленькой буквы.', '"> d. Переменные функций должны объявляться с использованием ключевого слова var.'],
      js40: ['"> a. undefined', '"> b. null', '"> c. Сама функция', '"> d. window'],
      js50: ['"> a. Запрещено удаление полей, имеющих свойство writable = false', '"> b. Запрещено дублирование полей объектов', '"> c. Запрещено дублирование параметров функции', '"> d. Запрещено использование директивы eval'],
      js60: ['"> a. Для генерирования ошибок.', '"> b. Для замены условного оператора if', '"> c. Для обработки возможных ошибок', '"> d. В строгом режиме весь код необходимо оборачивать в try-catch.'],
      js70: ['"> a. Код внутри этого блока будет в любом случае выполнен', '"> b. Код внутри этого блока будет выполнен, если код внутри блока try выполнен без ошибок', '"> c. Код внутри этого блока будет выполнен, если внутри блока try возникли ошибки', '"> d. Код внутри этого блока будет выполнен, если код внутри блока catch выполнен без ошибок'],
      js80: ['"> a. Если есть блок finally - то один, если нету - то по одному блоку catch на каждую <br>ошибку внутри блока try', '"> b. Один', '"> c. По одному блоку на каждую возникшую ошибку внутри блока try', '"> d. Два'],

    }

    var js1 = shuffle( js.js10 );  // ----- random array questions for JS test
    var js2 = shuffle( js.js20 );  // ----- random array questions for JS test
    var js3 = shuffle( js.js30 );  // ----- random array questions for JS test
    var js4 = shuffle( js.js40 );  // ----- random array questions for JS test
    var js5 = shuffle( js.js50 );  // ----- random array questions for JS test
    var js6 = shuffle( js.js60 );  // ----- random array questions for JS test
    var js7 = shuffle( js.js70 );  // ----- random array questions for JS test
    var js8 = shuffle( js.js80 );  // ----- random array questions for JS test
  //-------------------
    var jsQuests = { // ------------- all JS questions -------------------------  

      quest1: '<div>' + div1 + '1. Что обозначает директива ‘use strict’?' + div2   
      + p1 + 0 + connect(js1[0], 1) + For +dig2+ js1[0] + p2 
      + p1 + 0 + connect(js1[1], 1) + For +dig2+ js1[1] + p2      
      + p1 + 0 + connect(js1[2], 1) + For +dig2+ js1[2] + p2  
      + p1 + 0 + connect(js1[3], 1) + For +dig2+ js1[3] + p2 + '</div>',

        quest2: '<div>' + div1 + '2. К какому участку скрипта применяется строгие правила ‘use strict’?' + div2   
      + p1 + 1 + connect(js2[0], 5) + For +dig2+ js2[0] + p2 
      + p1 + 1 + connect(js2[1], 5) + For +dig2+ js2[1] + p2      
      + p1 + 1 + connect(js2[2], 5) + For +dig2+ js2[2] + p2  
      + p1 + 1 + connect(js2[3], 5) + For +dig2+ js2[3] + p2 +  '</div>',
        
      quest3: '<div>' + div1 + '3. Какие основное ограничения к объявлению переменных в строгом режиме?' + div2   
      + p1 + 2 + connect(js3[0], 9) + For +dig2+ js3[0] + p2 
      + p1 + 2 + connect(js3[1], 9) + For +dig2+ js3[1] + p2      
      + p1 + 2 + connect(js3[2], 9) + For +dig2+ js3[2] + p2  
      + p1 + 2 + connect(js3[3], 9) + For +dig2+ js3[3] + p2 +  '</div>',

      quest4: '<div>' + div1 + '4. Чему равен this в функциях вызванных на глобальном уровне (т.е. не внутри других функций)?' + div2   
      + p1 + 3 + connect(js4[0], 13) + For +dig2+ js4[0] + p2 
      + p1 + 3 + connect(js4[1], 13) + For +dig2+ js4[1] + p2      
      + p1 + 3 + connect(js4[2], 13) + For +dig2+ js4[2] + p2  
      + p1 + 3 + connect(js4[3], 13) + For +dig2+ js4[3] + p2 +  '</div>',

      quest5: '<div>' + div1 + '5. Какой из пунктов не верен по отношению к строгому режиму javascript?' + div2   
      + p1 + 4 + connect(js5[0], 17) + For +dig2+ js5[0] + p2 
      + p1 + 4 + connect(js5[1], 17) + For +dig2+ js5[1] + p2      
      + p1 + 4 + connect(js5[2], 17) + For +dig2+ js5[2] + p2  
      + p1 + 4 + connect(js5[3], 17) + For +dig2+ js5[3] + p2 +  '</div>',

      quest6: '<div>' + div1 + '6. Для чего используется конструкция try-catch в javascript?' + div2   
      + p1 + 5 + connect(js6[0], 21) + For +dig2+ js6[0] + p2 
      + p1 + 5 + connect(js6[1], 21) + For +dig2+ js6[1] + p2      
      + p1 + 5 + connect(js6[2], 21) + For +dig2+ js6[2] + p2  
      + p1 + 5 + connect(js6[3], 21) + For +dig2+ js6[3] + p2 +  '</div>',

      quest7: '<div>' + div1 + '7. Для чего необходим блок finally?' + div2   
      + p1 + 6 + connect(js7[0], 25) + For +dig2+ js7[0] + p2 
      + p1 + 6 + connect(js7[1], 25) + For +dig2+ js7[1] + p2      
      + p1 + 6 + connect(js7[2], 25) + For +dig2+ js7[2] + p2  
      + p1 + 6 + connect(js7[3], 25) + For +dig2+ js7[3] + p2 +  '</div>',

       quest8: '<div>' + div1 + '8. Как много блоков catch необходимо объявлять в конструкции try-catсh?' + div2   
      + p1 + 7 + connect(js8[0], 29) + For +dig2+ js8[0] + p2 
      + p1 + 7 + connect(js8[1], 29) + For +dig2+ js8[1] + p2      
      + p1 + 7 + connect(js8[2], 29) + For +dig2+ js8[2] + p2  
      + p1 + 7 + connect(js8[3], 29) + For +dig2+ js8[3] + p2 + '</div>',
      right: [ 2, 7, 10, 13, 20, 23, 25, 30],
   }
    //--------------------------------------------------
    var math = {
      math10: ['"> a. 5 + 3', '"> b. 3 + 1', '"> c. 1 + 5', '"> d. 2 + 2'],
      math20: ['"> a. 8 - 4', '"> b. 9 - 6', '"> c. 10 - 5', '"> d. 15 - 10'],
      math30: ['"> a. 7 * 3', '"> b. 4 * 5', '"> c. 6 * 3', '"> d. 10.5 * 2' ],
      math40: ['"> a. 6 / 3', '"> b. 12 / 4', '"> c. 8 / 14', '"> d. 9 / 5'],
    }
      var math1 = shuffle( math.math10 );  // ----- random question arrays
      var math2 = shuffle( math.math20 );  // ----- random question arrays
      var math3 = shuffle( math.math30 );  // ----- random question arrays
      var math4 = shuffle( math.math40 );  // ----- random question arrays
    //-----------------------------------------------

    var mathQuests = { // ------------- all math questions ------------------------- 

      quest1: '<div>' + div1 + '1. Значение каких сумм равно 4 ? ' + div2   
      + p1 + 0 + connect(math1[0],33) +1+ id + 0 + For +dig2+ math1[0] + p2 
      + p1 + 1 + connect(math1[1],33) +2+ id + 1 + For +dig2+ math1[1] + p2      
      + p1 + 2 + connect(math1[2],33) +3+ id + 2 + For +dig2+ math1[2] + p2  
      + p1 + 3 + connect(math1[3],33) +4+ id + 3 + For +dig2+ math1[3] + p2 + '<div class="clear">Clear</div><div class="clearBlank">Clear</div></div>',      

      quest2: '<div>' + div1 + '2. Значение какой разности равно 5? ? ' + div2   
      + p1 + 4 + connect(math2[0],37) +1+ id + 4 +For +dig2+ math2[0] + p2 
      + p1 + 5 + connect(math2[1],37) +2+ id + 5 +For +dig2+ math2[1] + p2      
      + p1 + 6 + connect(math2[2],37) +3+ id + 6 +For +dig2+ math2[2] + p2  
      + p1 + 7 + connect(math2[3],37) +4+ id + 7 +For +dig2+ math2[3] + p2 + '<div class="clear">Clear</div><div class="clearBlank">Clear</div></div>',

      quest3: '<div>' + div1 + '3. Значение каких умножений равно 21 ? ' + div2   
      + p1 + 8 + connect(math3[0],41) +1+ id + 8 +For +dig2+ math3[0] + p2 
      + p1 + 9 + connect(math3[1],41) +2+ id + 9 +For +dig2+ math3[1] + p2      
      + p1 + 10 + connect(math3[2],41) +3+ id + 10 +For +dig2+ math3[2] + p2  
      + p1 + 11 + connect(math3[3],41) +4+ id + 11 +For +dig2+ math3[3] + p2 + '<div class="clear">Clear</div><div class="clearBlank">Clear</div></div>',

      quest4: '<div>' + div1 + '4. Значение каких делений равно 3 ? ' + div2   
      + p1 + 12 + connect(math4[0],45) +1+ id + 12 +For +dig2+ math4[0] + p2 
      + p1 + 13 + connect(math4[1],45) +2+ id + 13 +For +dig2+ math4[1] + p2      
      + p1 + 14 + connect(math4[2],45) +3+ id + 14 +For +dig2+ math4[2] + p2  
      + p1 + 15 + connect(math4[3],45) +4+ id + 15 +For +dig2+ math4[3] + p2 + '<div class="clear">Clear</div><div class="clearBlank">Clear</div></div>',
     right: [",34,36", ",39,40", ",41,44", ",46"],
     // right2: ['var34', 'var36', 'var39', 'var40', 'var41', 'var44', 'var46'],
     right2: [34, 36, 39, 40, 41, 44, 46],
      quest5: '',    
      quest6: '',
      quest7: '',
      quest8: '',

  }
function setRandom(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//-----------------
    var jsString = JSON.stringify(jsQuests);        // getting test1 string for localStorage 
    var jsObject = JSON.parse(jsString);            

    var mathString = JSON.stringify(mathQuests);    // getting test2 string for localStorage 
    var mathObject = JSON.parse(mathString);      

  if( fileName == 'index1.html' ) {        // getting content according to the current file name 
    var content = tmpl(html, jsObject);   
} else {
   var content = tmpl(html, mathObject); 
}
//-------------
    $('body').append(content);
     
     $('.ground').append('<div class="result">Prove Results</div>');          //-----------
     $('.ground').append('<div class="takeAgain">Take the test again</div>'); //----------- creating buttons
     $('.takeAgain').hide(0);
                 
    $('.ground').append('<a href="index1.html" class="option_1">1 Option</a>');     
    $('.ground').append('<a href="index2.html" class="option_2">2 Options</a>');  // --- buttons for changing the html files
     
           //------------------  events for clearing the checkboxes in math test
    $('.clear').eq(0).click( function(){ for( var i = 33; i < 37; i++ ) $("#var"+i ).prop("checked", false); });
    $('.clear').eq(1).click( function(){ for( var i = 37; i < 41; i++ ) $("#var"+i ).prop("checked", false); });
    $('.clear').eq(2).click( function(){ for( var i = 41; i < 45; i++ ) $("#var"+i ).prop("checked", false); });
    $('.clear').eq(3).click( function(){ for( var i = 45; i < 49; i++ ) $("#var"+i ).prop("checked", false); });

    $('.ground').append('<center class="modal__wrapper"></center>');
    $('.modal__wrapper').append('<div class="modal__border"><div>');  
    $('.modal__border').append('<div class="modal"><div>');   // -- creating modal window
    $('.modal__wrapper').hide(0);
//------------------------------------------------------------------------------------------------
    $('.result').click(function(){   // -------- proving the result 
       var point = 0;
       var count = 0;
       var ne = '';
       var checked = '';
       var unchecked = '';
       var blank = false;  // -- if some answrs aren't completed

        function spell(){     
        if(count == 1 ) return ' вопрос';
        if(count == 2 || count == 3 || count == 4 ) { 
          return ' вопроса';
        } else {
          return ' вопросов'
        }
       }
        //-----------------------
      if( fileName == 'index1.html') {
       for( var i = 0; i < 8; i++ ) {
        var check = $('input[name=variant' +i+ ']').is(':checked'); // --- define whether the checkboxes are checked for JS test
        if(check == false ) blank = true;                          // ---- if just one blank is true the test couldn't be passed
       }
     }
       //---------
    if( fileName == 'index1.html' && blank == false ) {
      var ofNum = 8;     // ---- amount of JS test questions
      var limit = 70;   // minimal amount of points to pass the JS test 
      var paddingTop = '1700px'; // for modal_wrapper
      var row = 0;  // -- counting weather the all answers were selected ( must be 8 )

       $('.result').fadeOut(0);           // -------
       $('.takeAgain').fadeIn(0);         //-------- replacing buttons

       $('input').attr("disabled","disabled");   // -- making the checkboxes disabled
       $('label').css('cursor', 'default');
    
      var ans = jsQuests.right;
       for( var i = 1; i < 33; i++ ) {       //----------- coloring right and wrong answers in JS test
          var check = $('input[id="var' +i+ '"]').is(':checked');
          if( check == true) {

              if( i == ans[0] || i == ans[1] || i == ans[2] || i == ans[3] || i == ans[4] || i == ans[5] || i == ans[6] || i == ans[7])  { 
                  row++;
                  point +=10; 
                  count++;  
                  $('input[id="var' +i+ '"]').removeClass('input').addClass('rightInput');
                } else {
                  $('input[id="var' +i+ '"]').removeClass('input').addClass('wrongInput');
                }
            }
        }
    } 

    if( fileName == 'index2.html' && blank == false )  { 
        var ofNum = 4;  // ---- amount of teh math test questions 
        var limit = 40;   // minimal amount of points to pass the math test 
        var paddingTop = '750px'; // for modal_wrapper
        var chbox;
        var slash = '/'
        var answer=[];
      
       for( var i = 33; i < 49; i++ ) {

        chbox = document.getElementById('var' + i);

        function slash(){          // ------- devide with slash the string answers ("checked", "unchecked")
          if( i == 36 || i == 40 || i == 44 || i == 48 ) {
         var last = checked.lastIndexOf('/')
         var index = answer.length;
         answer[index] = checked.substr(last + 1);
         unchecked = unchecked + '/';
         checked =   checked + '/';          
          } 
        }
        if (chbox.checked) {
           checked = checked + ',' + i;   //   -- concat numbers of checked answers
           slash();
          }  else {
            unchecked = unchecked +',' + i;   //   -- concat numbers of unchecked answers
            slash();
          }
       }  

       for( var i = 0; i < 4; i++ ) {         
        if( answer[i] == mathQuests.right[i] ) {  // proving if checked unswers fit the right answers of the math test 
          count++;
          point +=10;                      
        }     
       }

       for( i = 0; i < 4; i ++ ){    // checking of all answers are filled up
        if( answer[i].length == 0 ) blank = true;
       }
      }
    //-------------------------------------
      function ifNot(a){  // add or don't add the word of passing the tests / and changing the background of modal 
        if(point >= a ) {
          $('.modal__border').css('background', '#5bbb92')
          return '';
        }  else {
          $('.modal__border').css('background', '#ff8040')
          return 'не'
        }
      }
    //-------------------------------------
   if( blank == false ) {
    if( fileName == 'index2.html') {  //------- coloring right answers for the math test

       $('.result').fadeOut(0);       //----------
       $('.takeAgain').fadeIn(0);     //---------- replacing the buttons

       $('input').attr("disabled","disabled");   // -- making the checkboxes disabled
       $('label').css('cursor', 'default');
       $('.clear').fadeOut(0);
       $('.clearBlank').fadeIn(0);

       var ans = mathQuests.right2;
       for( var i = 33; i < 49; i++ ) {
          var check = $('input[id="var' +i+ '"]').is(':checked');
          if( check == true) {

              if( i == ans[0] || i == ans[1] || i == ans[2] || i == ans[3] || i == ans[4] || i == ans[5] || i == ans[6]) 
                { 
                  $('input[id="var' +i+ '"]').removeClass('input').addClass('rightInput');
                }
            }
        }   

       for( i = 33; i < 49; i++ ) {
          if( $('input[id="var' +i+ '"]:checked') && i != 34 && i != 36 && i != 39 && i != 40 && i != 41 && i != 44 && i != 46 )
          $('input[id="var' +i+ '"]').removeClass('input').addClass('wrongInput'); 
       }
    }

      // $('.modal').css('margin', margin, 'height', '250px', 'width', '800px');
      $('.modal__wrapper').css('padding-top', paddingTop)
      $('.modal__wrapper').fadeIn(1000);  
      $('.modal').html('Тест '+ifNot(limit)+' пройден. Вы ответили верно на ' +count+  spell()+ ' из '+ofNum+'.<br> Ваш результат ' +point+ ' баллов.<br> ');
      // $('.result').text('Take the test again').removeClass().addClass('takeAgain');
     

      $('.modal').append('<div class="ok">OK</div>');
//-----------------------------------------------------------by clicking the button  "Take the test again"----------------------
        $('.takeAgain').click(function(){ 
        
        if(fileName == 'index1.html' && $('.takeAgain').text() == 'Take the test again' ) {       
           for( var i = 0; i < 33; i++ ) {
           $("#var" + i ).prop("checked", false);             // remove all checked attributes 
           $("#var" + i).removeClass().addClass('input');     //  --- replacing back the classes ".input"          
           $('.takeAgain').fadeOut(0);
           $('.result').fadeIn(0);
         }
           $('input').removeAttr("disabled");   // -- making the checkboxes disabled
           $('label').css('cursor', 'pointer');
       }
        //----------------------
        if( fileName == 'index2.html' ) {
          for( var i = 33; i < 49; i++ ) {
            $("#var" + i ).prop("checked", false);            // remove all checked attributes
            $("#var" + i).removeClass().addClass('input');    //  --- replacing back the classes ".input"
            $('.takeAgain').fadeOut(0);
            $('.result').fadeIn(0);
          }
           $('input').removeAttr("disabled");;   // -- making the checkboxes disabled
           $('label').css('cursor', 'pointer');
           $('.clearBlank').fadeOut(0);
           $('.clear').fadeIn(0);
        }
      })
    //---------------------------------------------------------------------------------------------------------------------
      $('.ok').click(function(){     //  -------------- by clicking the button ok
      if(fileName == 'index1.html') {
       $('.modal__wrapper').fadeOut(500);
        }
        if( fileName == 'index2.html') {
          $('.modal__wrapper').fadeOut(500);
        }
      })
   } 
   if( blank == true ) { 
      $('.modal__wrapper').css('padding-top', paddingTop)
      $('.modal__border').css({ 'background': '#ff8040'})
      $('.modal__wrapper').fadeIn(500);
    
      $('.modal').html('Для проверки теста небходимо ответить на все вопросы. <br> Попробуйте еще раз.');
      $('.modal').append('<div class="ok">OK</div>');
      $('.ok').click(function(){
        $('.modal__wrapper').fadeOut(500);
      })   
      }
    })
})

//-----------------------------------------------------------------------------------------------------------------------------------------------
   var test = {
       questions: 2,
       variants: 4,
       id_2: 0,
       headLine1: '<span>Т</span><span>е</span><span>с</span><span>т</span><span> п</span><span>о</span> '
       + '<div><span>П</span><span>р</span><span>о</span><span>г</span><span>р</span><span>а</span>'
       + '<span>м</span><span>м</span><span>и</span><span>р</span><span>о</span><span>в</span>'
       + '<span>а</span><span>н</span><span>и</span><span>ю</span></div>',
       //---------------------
       headLine2: '<span>Т</span><span>е</span><span>с</span><span>т</span><span> п</span><span>о</span> '
       + '<div><span>М</span><span>а</span><span>т</span><span>е</span><span>м</span><span>а</span>'
       + '<span>т</span><span>и</span><span>к</span><span>е</span></div>',
 
      createBackground: function() {
       var el = document.getElementsByTagName('body') [0]
       el.classList.add('ground');
      },
      createWrapper: function() {
       var wrapper = document.createElement('div');
       wrapper.classList.add('wrapper');
       document.body.insertBefore(wrapper, document.body.children[1])
     }, 
      createElement: function(tag, claSs, text, parent, child, last, numOfParents, attr, attrSet) {
       var element = document.createElement(tag);
       element.classList.add(claSs);     
         if( tag == "IMG") { element.src = 'img/' + text + '.png';}
         if( text != false) { element.innerHTML = text; }
         var isClass = document.querySelectorAll(parent);
         if( last != true ) {  
          isClass[0].insertBefore(element, isClass[0].children[child]);
          } else { 
            var index = numOfParents - 1;
             isClass[index].insertBefore(element, isClass[index].children[child]);
          }       
        },

      createVariant: function(amount, tag, claSs, text1, id, text2, text3, text4, text5, parent, numOfParent) { 
         for( var g = 0; g < amount; g++ ) {
             test.id_2++;
            this.createElement( tag, claSs, text1 + id + text2 + test.id_2 + text3 +test.id_2 + text4 + (g+1) + text5, parent, g+1, true, numOfParent );
              } 
            },

      createQuestion: function(amount_, tag_, claSs_, elName_, parent_) { 
         var text = ['<input type="radio" name="variant', '" id="var', '"><label for="var', '">Вариант ответа №', '</label>'];
         for( var i = 0; i < amount_; i++ ) {

          var type = (i+1) + elName_ +(i+1);
          this.createElement( tag_, claSs_, type, parent_, i+1, false, 'id' );
          this.createVariant( this.variants, 'p', 'variant', text[0], i+1, text[1], text[2], text[3], text[4], '.question', i+1);        
           } 
         },
        }
    
   test.createBackground();

if( fileName == 'index1.html' ) {
   test.createElement( 'p', 'headLine', test.headLine1, '.ground', 0 );
   test.createElement( 'IMG', 'headLine__icon', 'js', '.headLine', 7 );
 } else {
   test.createElement( 'p', 'headLine', test.headLine2, '.ground', 0 );
   test.createElement( 'IMG', 'headLine__icon', 'maths', '.headLine', 7 );
 }









    

  
    

 