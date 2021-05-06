'use strict'

{
  document.querySelector('button').addEventListener('click', () => {
    const item3 = document.createElement('li');    // .createElement()　要素を作成するメソッド
    item3.textContent = 'item 3';
    const ul = document.querySelector('ul');    // 親要素の呼び出し
    ul.appendChild(item3);    // appendChild()　子要素の末尾に要素を追加するメソッド

    const item0 = document.querySelectorAll('li')[0];
    const copy = item0.cloneNode(true);    // .cloneNode()　要素の複製をするメソッドで引数をtrueとすることで要素の中身も複製できる
    const item2 = document.querySelectorAll('li')[2];
    ul.insertBefore(copy, item2)    // insertBefore()　要素を挿入するメソッド（第1引数に挿入する要素、第2引数に挿入する場所の次の要素を指定）
  });
}