'use strict';

{
  function update(){
    // document.querySelector('h1').textContent = 'changed!!!';    // querySelector()はDOM（document）から特定の要素を取得するメソッド　
    // document.querySelector('#target').textContent = 'changed!!';    // id属性で取得することも可能
    document.getElementById('target').textContent = 'changed!';    // getElementById()はidを指定して要素を探すメソッド
    // document.querySelectorAll('p')[1].textContent = 'change!';    // querySelectorAllで引数の要素全てをDOMから取得し何番目の要素を操作したいかインデックス番号で指定
    document.querySelectorAll('p').forEach((p, index) => {
      p.textContent = `${index}番目のp要素`;
    });
  }

  setTimeout(update, 1000);  // updateを1秒後に呼び出す
}