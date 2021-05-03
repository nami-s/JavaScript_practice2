'use strict';

{
  function update(){
    // document.querySelector('h1').textContent = 'changed!!!';    // querySelector()はDOM（document）から特定の要素を取得するメソッド　
    // document.querySelector('#target').textContent = 'changed!!';    // id属性で取得することも可能
    document.getElementById('target').textContent = 'changed!';    // getElementById()はidを指定して要素を探すメソッド
  }

  setTimeout(update, 1000);  // updateを1秒後に呼び出す
}