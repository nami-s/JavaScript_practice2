'use strict';

{
  const text = document.querySelector('textarea');

  text.addEventListener('focus', () =>{    // フォーカスが当たった時のイベント
    console.log('focus');
  });

  text.addEventListener('blur', () =>{    // フォーカスが外れた時のイベント
    console.log('blur');
  });
  
  text.addEventListener('input', () =>{    // 文字が入力されるたびに発生するイベント
    console.log('input');
  });

  text.addEventListener('change', () =>{    // 文字入力後フォーカスを外した時のイベント
    console.log('change');
  });
}