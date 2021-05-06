'use strict'

{
  document.querySelector('button').addEventListener('click', () =>{
    const targetNode = document.getElementById('target');

    targetNode.textContent = targetNode.dataset.read;    // カスタムデータ属性呼び出し方
  });
}