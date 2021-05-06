'use strict'

{
  document.querySelector('button').addEventListener('click', () => {
    const item3 = document.createElement('li');    // .createElement()　要素を作成するメソッド
    item3.textContent = 'item 3';
    const ul = document.querySelector('ul');    // 親要素の呼び出し
    ul.appendChild(item3);    // appendChild()　子要素の末尾に要素を追加するメソッド

    
  });
}