/**
 * タイマーを開始する
 */

let finish //複数の関数で使用する変数を宣言
let intervalId

let startButton = document.querySelector('#start-button') //スタートボタンを取得
startButton.addEventListener('click', startTimer) //クリックされたらstartTimer関数を呼び出す
let stopButton = document.querySelector('#stop-button') //ストップボタンを取得
stopButton.addEventListener('click', stopTimer) //クリックされたstopTimer関数を呼び出す

function startTimer() {
  let second = document.querySelector('#time-input').value //フォームから入力された値を取得

  //スタートした時刻とタイマーの時間を足した合計が終了時刻
  finish = Date.now() + second * 1000

  intervalId = setInterval(checkRemainingTime, 50) //50ミリ秒ごとにcheckRemainingTimer関数を呼び出し

  // スタートボタンを無効化する
  startButton.disabled = true
}

/**
 * タイマーを終了する
 */
function stopTimer() {
  clearInterval(intervalId)//checkRemaining関数の呼び出しを終了

  //残り時間をリセットする
  setDisplay(0)

  // スタートボタンを有効化する
  startButton.disabled = false
}

/**
 * 残り時間をチェックする繰り返し
 */
function checkRemainingTime () {
  let remain = finish - Date.now() //startTimer関数で算出した終了時刻から現在時刻を引いて残り時間を算出


  //残り時間を表示する
  let second = Math.floor(remain / 1000) + 1  //残り時間を整数に換算
  setDisplay(second)  //残り時間を表示する関数を呼び出し

  //残り時間が0以下になったらタイマーを終了する
  if (remain <= 0) {
    stopTimer() //stopTimer関数を呼び出し
    alert('時間になりました') //「時間になりました」と表示
  }
}

/**
 * 残り時間を表示する
 */

function setDisplay(second) {
  let countDown = document.querySelector('#count-down') //残り時間を表示する箇所の要素を取得
  countDown.textContent = second //残り時間を表示
}