'use strict';

// {
//   document.querySelector('button').addEventListener('click', () => {
//     const li = document.createElement('li');    // li要素の作成
//     const text = document.querySelector('input');    // input要素の取得
//     const color = document.querySelector('select');    // select要素の取得

//     li.textContent = `${text.value} : ${color.value} - ${color.selectedIndex}`;    // 入力された値、選択された値、選択された値のインデックス番号を代入
//     document.querySelector('ul').appendChild(li);    // ulの子要素にliを追加

//     text.value = '';    // 入力欄をクリアにする
//     text.focus();    // 入力欄（input要素）にフォーカスを当てる
//   });
// }

{
  document.querySelector('button').addEventListener('click', () => {
    const colors = document.querySelectorAll('input');
    let selectedColor;

    colors.forEach(color =>{
      if(color.checked === true){        // .checkedはその値のラジオボタンにチェックが入っているかを調べる
        selectedColor = color.value;
      }
    });

    const li = document.createElement('li');
    li.textContent = selectedColor;
    document.querySelector('ul').appendChild(li);
  });
}