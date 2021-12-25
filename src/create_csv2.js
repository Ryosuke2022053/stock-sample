function csv_data2() {
var request = new XMLHttpRequest();
var elements = document.getElementById("app_csv2")
const dataPath = "./csv-all/powerbi_quick2.csv"; //HTTPでファイルを読み込む
request.addEventListener("load", (event) => {
    // ロードさせ実行
    var response = event.target.responseText; // 受け取ったテキストを返す
    var data_all = csv_array(response); //csv_arrayの関数を実行
    csv_reset(data_all);
    CreateTalbe(data_all, elements);
    // csv_load(data_all);
});
request.open("GET", dataPath, true); // csvのパスを指定
request.send();
}

function csv_array(data) {
const dataArray = []; // 配列を用意
var dataString = data.split("\n"); // 改行で分割
for (let i = 0; i < dataString.length; i++) {
    //あるだけループ
    var cells = dataString[i].split(",");
    dataArray.push(cells);
}
title = dataArray[0];
return dataArray;
}

function csv_reset(data) {
    for (var t = 0; t < data.length; t++ ) {
        for (var i = 0; i < data[t].length; i++ ) {
        data[t][i] = data[t][i].replace(/"/g, "");
    }
    } 
}

function CreateTalbe(data, elements) {
    let insertElement = ""; // テーブルタグに表示する用の変数
    var title = data[0];
    var data_in = data.slice(1,);
    console.log(data_in);
    insertElement += "<tr>"
    title.forEach((element_ti) => {
        insertElement += `<th>${element_ti}</th>`;
    })
    insertElement += "</tr>"
    data_in.forEach((element) => {
    // 配列の中身を表示
    //   console.log(element);
    insertElement += "<tr>";
    element.forEach((childElement) => {
        insertElement += `<td>${childElement}</td>`;
    });
    insertElement += "</tr>";
    });
    elements.innerHTML = insertElement;
}


csv_data2();
  