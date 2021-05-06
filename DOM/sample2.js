'use strict';

{
  document.querySelector('button').addEventListener('click', () =>{    // クリックイベント
    const targetNode = document.getElementById('target');

    targetNode.textContent = 'Change';
    targetNode.title = 'This is title';    // 要素の属性を操作している（例外を除いてDOMは属性と同名のプロパティが用意されている）
    // targetNode.className = 'my-color';    // classNameはclass属性を丸々書き換えるもの
    // targetNode.className = 'my-color my-border';    // 元々付与されているclass属性も引き継ぎたい場合の書き方
    
    // targetNode.classList.add('my-color');    // 元々付与されているclass属性を持ちながら新たなクラスを付与する書き方

    if(targetNode.classList.contains('my-color') === true){      // classList.contains()は引数のクラスが付いているかどうかboolで返してくれる
      targetNode.classList.remove('my-color');      // classList.remove()で引数のクラスを外す
    } else {
      targetNode.classList.add('my-color');
    }
  });
}