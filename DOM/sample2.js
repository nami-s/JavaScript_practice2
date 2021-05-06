'use strict';

{
  document.querySelector('button').addEventListener('click', () =>{    // クリックイベント
    const targetNode = document.getElementById('target');

    targetNode.textContent = 'Change';
    targetNode.title = 'This is title';    // 要素の属性を操作している（例外を除いてDOMは属性と同名のプロパティが用意されている）
    // targetNode.className = 'my-color';    // classNameはclass属性を丸々書き換えるもの
    // targetNode.className = 'my-color my-border';    // 元々付与されているclass属性も引き継ぎたい場合の書き方
  });
}