'use strict';

 var doc = '' + document.location.href;
 var last = doc.lastIndexOf('/');
 var fileName = doc.substr(last + 1);  // getting the the name of current Html file
//-------------------------- Template
$(function(){

  var html = $('#test').html();
  
      var div1 = '<div class="question">';   // -- tag wrappers for object elements
      var div2 = '</div>';
      var p1   = '<div class="variant"><input type="radio" name="variant'; 
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

    var jsQuests = { // ------------- all JS questions -------------------------  

      quest1: '<div>' + div1 + '1. Что обозначает директива ‘use strict’?' + div2   
      + p1 + 0 +dig() +1+ For +dig1+ '"> a. Код данного скрипта будет обработан по строгим правилам стандарта HTML5.' + p2 
      + p1 + 0 +dig() +2+ For +dig1+ '"> b. Код данного скрипта будет обработан по строгим правилам стандарта EcmaScript 5.' + p2      
      + p1 + 0 +dig() +3+ For +dig1+ '"> c. Код данного скрипта будет обработан по строгим правилам, однако допускается использование нестрогих правил написания кода.' + p2  
      + p1 + 0 +dig() +4+ For +dig1+ '"> d. Код данного скрипта будет обработан по строгим правилам стандарта EcmaScript 6.' + p2 + '</div>',

        quest2: '<div>' + div1 + '2. К какому участку скрипта применяется строгие правила ‘use strict’?' + div2   
      + p1 + 1 +dig()+1+ For +dig1+ '"> a. Внутри блока {}'  + p2  
      + p1 + 1 +dig()+2+ For +dig1+ '"> b. Во всем скрипте.' + p2      
      + p1 + 1 +dig()+3+ For +dig1+ '"> c. Либо во всем скрипте, либо в отдельной функции.' + p2  
      + p1 + 1 +dig()+4+ For +dig1+ '"> d. Строгие правила работают между директивами ‘use strict’ и ‘strict end’.' + p2 + '</div>',
        
      quest3: '<div>' + div1 + '3. Какие основное ограничения к объявлению переменных в строгом режиме?' + div2   
      + p1 + 2 +dig()+1+ For +dig1+ '"> a. Глобальные переменные должны объявляться с использованием ключевого слова var'  + p2  
      + p1 + 2 +dig()+2+ For +dig1+ '"> b. Любая переменная должна объявляться с использованием ключевого слова var' + p2      
      + p1 + 2 +dig()+3+ For +dig1+ '"> c. Название переменных должно быть camel-case с маленькой буквы.' + p2  
      + p1 + 2 +dig()+4+ For +dig1+ '"> d. Переменные функций должны объявляться с использованием ключевого слова var.' + p2 + '</div>',

      quest4: '<div>' + div1 + '4. Чему равен this в функциях вызванных на глобальном уровне (т.е. не внутри других функций)?' + div2   
      + p1 + 3 +dig()+1+ For +dig1+ '"> a. undefined'  + p2  
      + p1 + 3 +dig()+2+ For +dig1+ '"> b. null' + p2      
      + p1 + 3 +dig()+3+ For +dig1+ '"> c. Сама функция' + p2  
      + p1 + 3 +dig()+4+ For +dig1+ '"> d. window' + p2 + '</div>',

      quest5: '<div>' + div1 + '5. Какой из пунктов не верен по отношению к строгому режиму javascript?' + div2   
      + p1 + 4 +dig()+1+ For +dig1+ '"> a. Запрещено удаление полей, имеющих свойство writable = false'  + p2  
      + p1 + 4 +dig()+2+ For +dig1+ '"> b. Запрещено дублирование полей объектов' + p2      
      + p1 + 4 +dig()+3+ For +dig1+ '"> c. Запрещено дублирование параметров функции' + p2  
      + p1 + 4 +dig()+4+ For +dig1+ '"> d. Запрещено использование директивы eval' + p2 + '</div>',

      quest6: '<div>' + div1 + '6. Для чего используется конструкция try-catch в javascript?' + div2   
      + p1 + 5 +dig()+1+ For +dig1+ '"> a. Для генерирования ошибок.'  + p2  
      + p1 + 5 +dig()+2+ For +dig1+ '"> b. Для замены условного оператора if' + p2      
      + p1 + 5 +dig()+3+ For +dig1+ '"> c. Для обработки возможных ошибок' + p2  
      + p1 + 5 +dig()+4+ For +dig1+ '"> d. В строгом режиме весь код необходимо оборачивать в try-catch.' + p2 + '</div>',

      quest7: '<div>' + div1 + '7. Для чего необходим блок finally?' + div2   
      + p1 + 6 +dig()+1+ For +dig1+ '"> a. Код внутри этого блока будет в любом случае выполнен'  + p2  
      + p1 + 6 +dig()+2+ For +dig1+ '"> b. Код внутри этого блока будет выполнен, если код внутри блока try выполнен без ошибок' + p2      
      + p1 + 6 +dig()+3+ For +dig1+ '"> c. Код внутри этого блока будет выполнен, если внутри блока try возникли ошибки' + p2  
      + p1 + 6 +dig()+4+ For +dig1+ '"> d. Код внутри этого блока будет выполнен, если код внутри блока catch выполнен без ошибок' + p2 + '</div>',

       quest8: '<div>' + div1 + '8. Как много блоков catch необходимо объявлять в конструкции try-catсh?' + div2   
      + p1 + 7 +dig()+1+ For +dig1+ '"> a. Если есть блок finally - то один, если нету - то по одному блоку catch на каждую <br>ошибку внутри блока try'  + p2  
      + p1 + 7 +dig()+2+ For +dig1+ '"> b. Один' + p2      
      + p1 + 7 +dig()+3+ For +dig1+ '"> c. По одному блоку на каждую возникшую ошибку внутри блока try' + p2  
      + p1 + 7 +dig()+4+ For +dig1+ '"> d. Два' + p2 + '</div>',
      right: ['num1', 'num3', 'num2', 'num1', 'num4', 'num3', 'num1', 'num2'],
   }
    var mathQuests = { // ------------- all math questions ------------------------- 

      quest1: '<div>' + div1 + '1. Значение каких сумм равно 4 ? ' + div2   
      + p1 + 0 +dig() +1+ id + 0 + For +dig1+ '"> a. 5 + 3' + p2 
      + p1 + 1 +dig() +2+ id + 1 +For +dig1+ '"> b. 3 + 1' + p2      
      + p1 + 2 +dig() +3+ id + 2 +For +dig1+ '"> c. 1 + 5' + p2  
      + p1 + 3 +dig() +4+ id + 3 +For +dig1+ '"> d. 2 + 2' + p2 + '<div class="clear">Clear</div></div>',      

      quest2: '<div>' + div1 + '2. Значение какой разности равно 5? ? ' + div2   
      + p1 + 4 +dig() +1+ id + 4 +For +dig1+ '"> a. 8 - 4' + p2 
      + p1 + 5 +dig() +2+ id + 5 +For +dig1+ '"> b. 9 - 6' + p2      
      + p1 + 6 +dig() +3+ id + 6 +For +dig1+ '"> c. 10 - 5' + p2  
      + p1 + 7 +dig() +4+ id + 7 +For +dig1+ '"> d. 15 - 10' + p2 + '<div class="clear">Clear</div></div>',

      quest3: '<div>' + div1 + '3. Значение каких умножений равно 21 ? ' + div2   
      + p1 + 8 +dig() +1+ id + 8 +For +dig1+ '"> a. 7 * 3' + p2 
      + p1 + 9 +dig() +2+ id + 9 +For +dig1+ '"> b. 4 * 5' + p2      
      + p1 + 10 +dig() +3+ id + 10 +For +dig1+ '"> c. 6 * 3' + p2  
      + p1 + 11 +dig() +4+ id + 11 +For +dig1+ '"> d. 10.5 * 2' + p2 + '<div class="clear">Clear</div></div>',

      quest4: '<div>' + div1 + '4. Значение каких делений равно 3 ? ' + div2   
      + p1 + 12 +dig() +1+ id + 12 +For +dig1+ '"> a. 6 / 3' + p2 
      + p1 + 13 +dig() +2+ id + 13 +For +dig1+ '"> b. 12 / 4' + p2      
      + p1 + 14 +dig() +3+ id + 14 +For +dig1+ '"> c. 8 / 14' + p2  
      + p1 + 15 +dig() +4+ id + 15 +For +dig1+ '"> d. 9 / 5' + p2 + '<div class="clear">Clear</div></div>',
     right: [",34,36", ",39,40", ",41,44", ",46"],
      quest5: '',
      quest6: '',
      quest7: '',
      quest8: '',

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

    $('.wrapper').append('<div class="result">Prove my Results</div>');             //  --- result button
    $('.ground').append('<a href="index1.html" class="option_1">1 Option</a>');     
    $('.ground').append('<a href="index2.html" class="option_2">2 Options</a>');  // --- buttons for changing the html files
     
           //------------------  events for clearing the checkboxes in math test
    $('.clear').eq(0).click( function(){ for( var i = 33; i < 37; i++ ) $("#var"+i ).prop("checked", false); });
    $('.clear').eq(1).click( function(){ for( var i = 37; i < 41; i++ ) $("#var"+i ).prop("checked", false); });
    $('.clear').eq(2).click( function(){ for( var i = 41; i < 45; i++ ) $("#var"+i ).prop("checked", false); });
    $('.clear').eq(3).click( function(){ for( var i = 45; i < 49; i++ ) $("#var"+i ).prop("checked", false); });

    $('.ground').append('<div class="modal__wrapper"><div>');  
    $('.modal__wrapper').append('<div class="modal"><div>');   // -- creating modal window
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

    if( fileName == 'index1.html') {
      var ofNum = 8;     // ---- amount of test questions
      var limit = 70;   // minimal amount of points to pass the test 
      var margin = '1550px 0 0 -333px'; // for modal window
      var row = 0;  // -- counting weather the all answers were selected ( must be 8 )
      for( var i = 0; i < 8; i++ ) {   // --- if JS task
        if( $('input[name=variant' +i+ ']:checked').val() == jsQuests.right[i] ) 
          { 
            row++;
            point +=10; 
            count++; 
          } 

        var check = $('input[name=variant' +i+ ']').is(':checked'); // --- define whether the checkboxes are checked 
        if(check == false ) blank = true;                          // ---- if just one blank is true the test couldn't be passed

        }

    } else { 
        var ofNum = 4;  // ---- amount of test questions
        var limit = 40;   // minimal amount of points to pass the test 
        var margin = '550px 0 0 -333px'; // for modal window
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
    
      function ifNot(a){  // add or don't add the word of passing the tests / and changing the background of modal 
        if(point >= a ) {
          $('.modal__wrapper').css('background', '#5bbb92')
          return '';
        }  else {
          $('.modal__wrapper').css('background', '#ff8040')
          return 'не'
        }
      }

   if( blank == false ) {
      // $('.modal').css('margin', margin, 'height', '250px', 'width', '800px');
      $('.modal__wrapper').css('margin', margin)
      $('.modal__wrapper').fadeIn(1000);  
      $('.modal').html('Тест '+ifNot(limit)+' пройден. Вы ответили верно на ' +count+  spell()+ ' из '+ofNum+'.<br> Ваш результат ' +point+ ' баллов.<br> ');
      $('.modal').append('<div class="ok">OK</div>');
      $('.ok').click(function(){
        if(fileName == 'index1.html') {
           for( var i = 0; i < 33; i++ ) {
           $("#var" + i ).prop("checked", false);    // remove all checked attributes 
           }
           $('.modal__wrapper').slideUp(1000);
        }
        if( fileName == 'index2.html') {
          for( var i = 33; i < 49; i++ ) {
            $("#var" + i ).prop("checked", false);    // remove all checked attributes
          }
          $('.modal__wrapper').slideUp(1000);
        }
      })
   } else { 
      // $('.modal').css({'height':'170px', 'width':'650px', 'padding-top': '50px', 'margin': margin});
      $('.modal__wrapper').css({'margin': margin, 'background': '#ff8040'})
      $('.modal__wrapper').fadeIn(1000);
    
      $('.modal').html('Для проверки теста небходимо ответить на все вопросы. <br> Попробуйте еще раз.');
      $('.modal').append('<div class="ok">OK</div>');
      $('.ok').click(function(){
        $('.modal__wrapper').slideUp(1000);
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
         console.log('text = ', text);
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









    

  
    

 