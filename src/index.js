
var title = [];

function csv_data() {
  const request = new XMLHttpRequest();
  const dataPath = "./csv-all/powerbi_mean_median.csv"; //HTTPでファイルを読み込む
  request.open("GET", dataPath, true); // csvのパスを指定
  request.send();
  request.addEventListener("load", (event) => {
    // ロードさせ実行
    const response = event.target.responseText; // 受け取ったテキストを返す
    var data_all = csv_array(response); //csv_arrayの関数を実行
    var data_all2 = csv_data2();
    var data_1 = csv_load(data_all[0]);
    data_all2.onload = function(){
      data_all2 = csv_array(data_all2.responseText);
      var data_2 = csv_load2(data_all2[0]);
      var title = data_all2[1];
      console.log(title);
      // console.log(data_1);
      // console.log(data_2);
      // console.log(data_all2[0]);
      makechart(data_1, data_2, data_all2[0], title)
    }
  });
}

function csv_data2() {
  const req = new XMLHttpRequest();
  const dataPath = "./csv-all/powerbi_quick1.csv";
  req.open("GET", dataPath, true);
  req.send();
  return req;
}

function csv_array(data) {
  // console.log(data);
  const dataArray = []; // 配列を用意
  var dataString = data.split("\n"); // 改行で分割
  // console.log(data);
  for (let i = 0; i < dataString.length; i++) {
    //あるだけループ
    var cells = dataString[i].split(",");
    dataArray.push(cells);
  }
  for (var t = 0; t < dataArray.length; t++ ) {
    for (var i = 0; i < dataArray[t].length; i++ ) {
    dataArray[t][i] = dataArray[t][i].replace(/"/g, "");
  }
  } 
  let title = dataArray[0];
  // title.splice(0, 1);
  return [dataArray, title];
}

function csv_load2(data) {
  var sto_0 = [], sto_1 = [], sto_2 = [], sto_3 = [], sto_4 = [],
  sto_5 = [], sto_6 = [], sto_7 = [], sto_8 = [], sto_9 = [], sto_10 = [],
  sto_11= [], sto_12 = [], sto_13 = [], sto_14 = [];
  const arr = [sto_0, sto_1, sto_2, sto_3, sto_4, sto_5, sto_6, sto_7, sto_8,
     sto_9, sto_10, sto_11, sto_12, sto_13, sto_14];
  // console.log(data);
  arr.forEach((elem, index)=> {
    for (var row in data){
      elem.push(data[row][index]);
    }  
  })
  arr.forEach (elem =>{
    elem.splice(0,1);
    elem.splice(1057,1058);
  });
  data.splice(0, 1);
  return arr;
}

function csv_load(data) {
  const list_0 = [],list_1 = [],list_2 = [],list_3 = [],list_4 = [],list_5 = [],list_6 = [],list_7 = [],
    list_8 = [],list_9 = [],list_10 = [],list_11 = [],list_12 = [],list_13 = [],list_14 = [],list_15 = [],
    list_16 = [],list_17 = [],list_18 = [],list_19 = [],list_20 = [],list_21 = [],list_22 = [],list_23 = [],
    list_24 = [],list_25 = [],list_26 = [],list_27 = [],list_28 = [],list_29 = [],list_30 = [],list_31 = [],
    list_32 = [],list_33 = [],list_34 = [],list_35 = [],list_36 = [],list_37 = [],list_38 = [],list_39 = [],
    list_40 = [],list_41 = [],list_42 = [],list_43 = [],list_44 = [],list_45 = [],list_46 = [],list_47 = [],
    list_48 = [],list_49 = [],list_50 = [],list_51 = [],list_52 = [],list_53 = [],list_54 = [],list_55 = [],
    list_56 = [],list_57 = [],list_58 = [],list_59 = [], list_60 = []

    const pip = [
      list_0,
      list_1,
      list_2,
      list_3,
      list_4,
      list_5,
      list_6,
      list_7,
      list_8,
      list_9,
      list_10,
      list_11,
      list_12,
      list_13,
      list_14,
      list_15,
      list_16,
      list_17,
      list_18,
      list_19,
      list_20,
      list_21,
      list_22,
      list_23,
      list_24,
      list_25,
      list_26,
      list_27,
      list_28,
      list_29,
      list_30,
      list_31,
      list_32,
      list_33,
      list_34,
      list_35,
      list_36,
      list_37,
      list_38,
      list_39,
      list_40,
      list_41,
      list_42,
      list_43,
      list_44,
      list_45,
      list_46,
      list_47,
      list_48,
      list_49,
      list_50,
      list_51,
      list_52,
      list_53,
      list_54,
      list_55,
      list_56,
      list_57,
      list_58,
      list_59,
      list_60
    ];

  pip.forEach((elem, index)=> {
    for (var row in data){
      elem.push(data[row][index]);
    }  
  })
  pip.forEach (elem =>{
    elem.splice(0,1);
    elem.splice(10,11);
  });
  data.splice(0, 1);
  // console.log(pip);
  return pip}

function makechart(data,data2, data_all, title){
  var lineChartData = {
    type: "bar",
    data: {
      labels: data[0],
      datasets: [
        {
          label: "2018.0",
          data: data[1],
          backgroundColor: "rgba(55,55,250,0.5)"
        },
        {
          label: "2019.0",
          data: data[2],
          backgroundColor: "rgba(30,240,250,0.5)"
        },
        {
          label: "2020.0",
          data: data[3],
          backgroundColor: "rgba(10,100,20,0.5)"
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "株価の変化率（平均値）",
        padding: 8,
        fontSize: 20
      },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              // 軸ラベル設定
              display: true, // 表示設定
              labelString: "株価の変化率10分割", // ラベル
              fontSize: 16 // フォントサイズ
            },
            ticks: {
              autoSkip: true,
              maxTicksLimit: 47,
              fontSize: 10
            },
            categoryPercentage: 0.6 // 棒幅
          }
        ],
        yAxes: [
          {
            scaleLabel: {
              //軸ラベル設定
              display: true, //表示設定
              labelString: "株価の変化率", //ラベル
              fontSize: 16 //フォントサイズ
            }
          }
        ]
      }
    }
  }
  var lineChartData2 = {
    type: "bar",
    data: {
      labels: data[0],
      datasets: [
        {
          label: "2018.0",
          data: data[4],
          backgroundColor: "rgba(55,55,250,0.5)"
        },
        {
          label: "2019.0",
          data: data[5],
          backgroundColor: "rgba(30,240,250,0.5)"
        },
        {
          label: "2020.0",
          data: data[6],
          backgroundColor: "rgba(10,100,20,0.5)"
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "株価の変化率（中央値）",
        padding: 8,
        fontSize: 20
      },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              // 軸ラベル設定
              display: true, // 表示設定
              labelString: "株価の変化率10分割", // ラベル
              fontSize: 16 // フォントサイズ
            },
            ticks: {
              autoSkip: true,
              maxTicksLimit: 47,
              fontSize: 10
            },
            categoryPercentage: 0.6 // 棒幅
          }
        ],
        yAxes: [
          {
            scaleLabel: {
              //軸ラベル設定
              display: true, //表示設定
              labelString: "株価の変化率", //ラベル
              fontSize: 16 //フォントサイズ
            }
          }
        ]
      }
    }
  }
  var lineChartData3 = {
    type: "bar",
    data: {
      labels: data[0],
      datasets: [
        {
          label: "2018.0",
          data: data[7],
          backgroundColor: "rgba(55,55,250,0.5)"
        },
        {
          label: "2019.0",
          data: data[8],
          backgroundColor: "rgba(30,240,250,0.5)"
        },
        {
          label: "2020.0",
          data: data[9],
          backgroundColor: "rgba(10,100,20,0.5)"
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "負債（平均値）",
        padding: 8,
        fontSize: 20
      },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              // 軸ラベル設定
              display: true, // 表示設定
              labelString: "負債10分割", // ラベル
              fontSize: 16 // フォントサイズ
            },
            ticks: {
              autoSkip: true,
              maxTicksLimit: 47,
              fontSize: 10
            },
            categoryPercentage: 0.6 // 棒幅
          }
        ],
        yAxes: [
          {
            scaleLabel: {
              //軸ラベル設定
              display: true, //表示設定
              labelString: "株価の変化率", //ラベル
              fontSize: 16 //フォントサイズ
            }
          }
        ]
      }
    }
  }
  var lineChartData4 = {
    type: "bar",
    data: {
      labels: data[0],
      datasets: [
        {
          label: "2018.0",
          data: data[10],
          backgroundColor: "rgba(55,55,250,0.5)"
        },
        {
          label: "2019.0",
          data: data[11],
          backgroundColor: "rgba(30,240,250,0.5)"
        },
        {
          label: "2020.0",
          data: data[12],
          backgroundColor: "rgba(10,100,20,0.5)"
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "負債（中央値）",
        padding: 8,
        fontSize: 20
      },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              // 軸ラベル設定
              display: true, // 表示設定
              labelString: "負債10分割", // ラベル
              fontSize: 16 // フォントサイズ
            },
            ticks: {
              autoSkip: true,
              maxTicksLimit: 47,
              fontSize: 10
            },
            categoryPercentage: 0.6 // 棒幅
          }
        ],
        yAxes: [
          {
            scaleLabel: {
              //軸ラベル設定
              display: true, //表示設定
              labelString: "株価の変化率", //ラベル
              fontSize: 16 //フォントサイズ
            }
          }
        ]
      }
    }
  }
  var lineChartData5 = {
    type: "bar",
    data: {
      labels: data[0],
      datasets: [
        {
          label: "2018.0",
          data: data[13],
          backgroundColor: "rgba(55,55,250,0.5)"
        },
        {
          label: "2019.0",
          data: data[14],
          backgroundColor: "rgba(30,240,250,0.5)"
        },
        {
          label: "2020.0",
          data: data[15],
          backgroundColor: "rgba(10,100,20,0.5)"
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "来期決算短信期日の株価（平均値）",
        padding: 8,
        fontSize: 20
      },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              // 軸ラベル設定
              display: true, // 表示設定
              labelString: "来期決算短信期日の株価10分割", // ラベル
              fontSize: 16 // フォントサイズ
            },
            ticks: {
              autoSkip: true,
              maxTicksLimit: 47,
              fontSize: 10
            },
            categoryPercentage: 0.6 // 棒幅
          }
        ],
        yAxes: [
          {
            scaleLabel: {
              //軸ラベル設定
              display: true, //表示設定
              labelString: "株価の変化率", //ラベル
              fontSize: 16 //フォントサイズ
            }
          }
        ]
      }
    }
  }
  var lineChartData6 = {
    type: "bar",
    data: {
      labels: data[0],
      datasets: [
        {
          label: "2018.0",
          data: data[16],
          backgroundColor: "rgba(55,55,250,0.5)"
        },
        {
          label: "2019.0",
          data: data[17],
          backgroundColor: "rgba(30,240,250,0.5)"
        },
        {
          label: "2020.0",
          data: data[18],
          backgroundColor: "rgba(10,100,20,0.5)"
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "来期決算短信期日の株価（中央値）",
        padding: 8,
        fontSize: 20
      },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              // 軸ラベル設定
              display: true, // 表示設定
              labelString: "来期決算短信期日の株価10分割", // ラベル
              fontSize: 16 // フォントサイズ
            },
            ticks: {
              autoSkip: true,
              maxTicksLimit: 47,
              fontSize: 10
            },
            categoryPercentage: 0.6 // 棒幅
          }
        ],
        yAxes: [
          {
            scaleLabel: {
              //軸ラベル設定
              display: true, //表示設定
              labelString: "株価の変化率", //ラベル
              fontSize: 16 //フォントサイズ
            }
          }
        ]
      }
    }
  }
  var lineChartData7 = {
    type: "bar",
    data: {
      labels: data[0],
      datasets: [
        {
          label: "2018.0",
          data: data[19],
          backgroundColor: "rgba(55,55,250,0.5)"
        },
        {
          label: "2019.0",
          data: data[20],
          backgroundColor: "rgba(30,240,250,0.5)"
        },
        {
          label: "2020.0",
          data: data[21],
          backgroundColor: "rgba(10,100,20,0.5)"
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "企業価値（平均値）",
        padding: 8,
        fontSize: 20
      },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              // 軸ラベル設定
              display: true, // 表示設定
              labelString: "企業価値10分割", // ラベル
              fontSize: 16 // フォントサイズ
            },
            ticks: {
              autoSkip: true,
              maxTicksLimit: 47,
              fontSize: 10
            },
            categoryPercentage: 0.6 // 棒幅
          }
        ],
        yAxes: [
          {
            scaleLabel: {
              //軸ラベル設定
              display: true, //表示設定
              labelString: "株価の変化率", //ラベル
              fontSize: 16 //フォントサイズ
            }
          }
        ]
      }
    }
  }
  var lineChartData8 = {
    type: "bar",
    data: {
      labels: data[0],
      datasets: [
        {
          label: "2018.0",
          data: data[22],
          backgroundColor: "rgba(55,55,250,0.5)"
        },
        {
          label: "2019.0",
          data: data[23],
          backgroundColor: "rgba(30,240,250,0.5)"
        },
        {
          label: "2020.0",
          data: data[24],
          backgroundColor: "rgba(10,100,20,0.5)"
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "企業価値（中央値）",
        padding: 8,
        fontSize: 20
      },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              // 軸ラベル設定
              display: true, // 表示設定
              labelString: "企業価値10分割", // ラベル
              fontSize: 16 // フォントサイズ
            },
            ticks: {
              autoSkip: true,
              maxTicksLimit: 47,
              fontSize: 10
            },
            categoryPercentage: 0.6 // 棒幅
          }
        ],
        yAxes: [
          {
            scaleLabel: {
              //軸ラベル設定
              display: true, //表示設定
              labelString: "株価の変化率", //ラベル
              fontSize: 16 //フォントサイズ
            }
          }
        ]
      }
    }
  }
  var lineChartData9 = {
    type: "bar",
    data: {
      labels: data[0],
      datasets: [
        {
          label: "2018.0",
          data: data[25],
          backgroundColor: "rgba(55,55,250,0.5)"
        },
        {
          label: "2019.0",
          data: data[26],
          backgroundColor: "rgba(30,240,250,0.5)"
        },
        {
          label: "2020.0",
          data: data[27],
          backgroundColor: "rgba(10,100,20,0.5)"
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "決算短信期日の株価（平均値）",
        padding: 8,
        fontSize: 20
      },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              // 軸ラベル設定
              display: true, // 表示設定
              labelString: "決算短信期日の株価10分割", // ラベル
              fontSize: 16 // フォントサイズ
            },
            ticks: {
              autoSkip: true,
              maxTicksLimit: 47,
              fontSize: 10
            },
            categoryPercentage: 0.6 // 棒幅
          }
        ],
        yAxes: [
          {
            scaleLabel: {
              //軸ラベル設定
              display: true, //表示設定
              labelString: "株価の変化率", //ラベル
              fontSize: 16 //フォントサイズ
            }
          }
        ]
      }
    }
  }
  var lineChartData10 = {
    type: "bar",
    data: {
      labels: data[0],
      datasets: [
        {
          label: "2018.0",
          data: data[28],
          backgroundColor: "rgba(55,55,250,0.5)"
        },
        {
          label: "2019.0",
          data: data[29],
          backgroundColor: "rgba(30,240,250,0.5)"
        },
        {
          label: "2020.0",
          data: data[30],
          backgroundColor: "rgba(10,100,20,0.5)"
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "決算短信期日の株価（中央値）",
        padding: 8,
        fontSize: 20
      },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              // 軸ラベル設定
              display: true, // 表示設定
              labelString: "決算短信期日の株価10分割", // ラベル
              fontSize: 16 // フォントサイズ
            },
            ticks: {
              autoSkip: true,
              maxTicksLimit: 47,
              fontSize: 10
            },
            categoryPercentage: 0.6 // 棒幅
          }
        ],
        yAxes: [
          {
            scaleLabel: {
              //軸ラベル設定
              display: true, //表示設定
              labelString: "株価の変化率", //ラベル
              fontSize: 16 //フォントサイズ
            }
          }
        ]
      }
    }
  }
  var lineChartData11 = {
    type: "bar",
    data: {
      labels: data[0],
      datasets: [
        {
          label: "2018.0",
          data: data[31],
          backgroundColor: "rgba(55,55,250,0.5)"
        },
        {
          label: "2019.0",
          data: data[32],
          backgroundColor: "rgba(30,240,250,0.5)"
        },
        {
          label: "2020.0",
          data: data[33],
          backgroundColor: "rgba(10,100,20,0.5)"
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "有利子負債/総資産比率（平均値）",
        padding: 8,
        fontSize: 20
      },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              // 軸ラベル設定
              display: true, // 表示設定
              labelString: "有利子負債/総資産比率10分割", // ラベル
              fontSize: 16 // フォントサイズ
            },
            ticks: {
              autoSkip: true,
              maxTicksLimit: 47,
              fontSize: 10
            },
            categoryPercentage: 0.6 // 棒幅
          }
        ],
        yAxes: [
          {
            scaleLabel: {
              //軸ラベル設定
              display: true, //表示設定
              labelString: "株価の変化率", //ラベル
              fontSize: 16 //フォントサイズ
            }
          }
        ]
      }
    }
  }
  var lineChartData12 = {
    type: "bar",
    data: {
      labels: data[0],
      datasets: [
        {
          label: "2018.0",
          data: data[34],
          backgroundColor: "rgba(55,55,250,0.5)"
        },
        {
          label: "2019.0",
          data: data[35],
          backgroundColor: "rgba(30,240,250,0.5)"
        },
        {
          label: "2020.0",
          data: data[36],
          backgroundColor: "rgba(10,100,20,0.5)"
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "有利子負債/総資産比率（中央値）",
        padding: 8,
        fontSize: 20
      },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              // 軸ラベル設定
              display: true, // 表示設定
              labelString: "有利子負債/総資産比率10分割", // ラベル
              fontSize: 16 // フォントサイズ
            },
            ticks: {
              autoSkip: true,
              maxTicksLimit: 47,
              fontSize: 10
            },
            categoryPercentage: 0.6 // 棒幅
          }
        ],
        yAxes: [
          {
            scaleLabel: {
              //軸ラベル設定
              display: true, //表示設定
              labelString: "株価の変化率", //ラベル
              fontSize: 16 //フォントサイズ
            }
          }
        ]
      }
    }
  }
  var lineChartData13 = {
    type: "bar",
    data: {
      labels: data[0],
      datasets: [
        {
          label: "2018.0",
          data: data[55],
          backgroundColor: "rgba(55,55,250,0.5)"
        },
        {
          label: "2019.0",
          data: data[56],
          backgroundColor: "rgba(30,240,250,0.5)"
        },
        {
          label: "2020.0",
          data: data[57],
          backgroundColor: "rgba(10,100,20,0.5)"
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "AI（平均値）",
        padding: 8,
        fontSize: 20
      },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              // 軸ラベル設定
              display: true, // 表示設定
              labelString: "AIによるグループ化10分割", // ラベル
              fontSize: 16 // フォントサイズ
            },
            ticks: {
              autoSkip: true,
              maxTicksLimit: 47,
              fontSize: 10
            },
            categoryPercentage: 0.6 // 棒幅
          }
        ],
        yAxes: [
          {
            scaleLabel: {
              //軸ラベル設定
              display: true, //表示設定
              labelString: "株価の変化率", //ラベル
              fontSize: 16 //フォントサイズ
            }
          }
        ]
      }
    }
  }
  var lineChartData14 = {
    type: "bar",
    data: {
      labels: data[0],
      datasets: [
        {
          label: "2018.0",
          data: data[58],
          backgroundColor: "rgba(55,55,250,0.5)"
        },
        {
          label: "2019.0",
          data: data[59],
          backgroundColor: "rgba(30,240,250,0.5)"
        },
        {
          label: "2020.0",
          data: data[60],
          backgroundColor: "rgba(10,100,20,0.5)"
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "AI（中央値）",
        padding: 8,
        fontSize: 20
      },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              // 軸ラベル設定
              display: true, // 表示設定
              labelString: "AIによるグループ化10分割", // ラベル
              fontSize: 16 // フォントサイズ
            },
            ticks: {
              autoSkip: true,
              maxTicksLimit: 47,
              fontSize: 10
            },
            categoryPercentage: 0.6 // 棒幅
          }
        ],
        yAxes: [
          {
            scaleLabel: {
              //軸ラベル設定
              display: true, //表示設定
              labelString: "株価の変化率", //ラベル
              fontSize: 16 //フォントサイズ
            }
          }
        ]
      }
    }
  }

  const ctx = document.getElementById("app").getContext("2d");
  const app = new Chart(ctx, lineChartData);
  document.getElementById("app").addEventListener("click", e => {
    const elements = app.getElementAtEvent(e);
    const elem = document.getElementById("ctable");
    if (elem.hasChildNodes()) {
      elem.removeChild(elem.childNodes[0]);
    }
    Trytable(elements , data2, data_all, title ,5)
  });

  const ctx_1 = document.getElementById("app_1").getContext("2d");
  const app_1 = new Chart(ctx_1, lineChartData2);
  document.getElementById("app_1").addEventListener("click", e => {
    const elements = app_1.getElementAtEvent(e);
    const elem = document.getElementById("ctable");
    if (elem.hasChildNodes()) {
      elem.removeChild(elem.childNodes[0]);
    }
    Trytable(elements , data2, data_all, title,5)
  });
  const ctx_2 = document.getElementById("app_2").getContext("2d");
  const app_2 = new Chart(ctx_2, lineChartData3);
  document.getElementById("app_2").addEventListener("click", e => {
    const elements = app_2.getElementAtEvent(e);
    const elem = document.getElementById("ctable");
    if (elem.hasChildNodes()) {
      elem.removeChild(elem.childNodes[0]);
    }
    Trytable(elements , data2, data_all, title ,6)
  })
  const ctx_3 = document.getElementById("app_3").getContext("2d");
  const app_3 = new Chart(ctx_3, lineChartData4);
  document.getElementById("app_3").addEventListener("click", e => {
    const elements = app_3.getElementAtEvent(e);
    const elem = document.getElementById("ctable");
    if (elem.hasChildNodes()) {
      elem.removeChild(elem.childNodes[0]);
    }
    Trytable(elements , data2, data_all, title ,6)
  })
  const ctx_4 = document.getElementById("app_4").getContext("2d");
  const app_4 = new Chart(ctx_4, lineChartData5);
  document.getElementById("app_4").addEventListener("click", e => {
    const elements = app_4.getElementAtEvent(e);
    const elem = document.getElementById("ctable");
    if (elem.hasChildNodes()) {
      elem.removeChild(elem.childNodes[0]);
    }
    Trytable(elements , data2, data_all, title, 7)
  })
  const ctx_5 = document.getElementById("app_5").getContext("2d");
  const app_5 = new Chart(ctx_5, lineChartData6);
  document.getElementById("app_5").addEventListener("click", e => {
    const elements = app_5.getElementAtEvent(e);
    const elem = document.getElementById("ctable");
    if (elem.hasChildNodes()) {
      elem.removeChild(elem.childNodes[0]);
    }
    Trytable(elements , data2, data_all, title ,7)
  })
  const ctx_6 = document.getElementById("app_6").getContext("2d");
  const app_6 = new Chart(ctx_6, lineChartData7);
  document.getElementById("app_6").addEventListener("click", e => {
    const elements = app_6.getElementAtEvent(e);
    const elem = document.getElementById("ctable");
    if (elem.hasChildNodes()) {
      elem.removeChild(elem.childNodes[0]);
    }
    Trytable(elements , data2, data_all, title, 8)
  })
  const ctx_7 = document.getElementById("app_7").getContext("2d");
  const app_7 = new Chart(ctx_7, lineChartData8);
  document.getElementById("app_7").addEventListener("click", e => {
    const elements = app_7.getElementAtEvent(e);
    const elem = document.getElementById("ctable");
    if (elem.hasChildNodes()) {
      elem.removeChild(elem.childNodes[0]);
    }
    Trytable(elements , data2, data_all, title, 8)
  })
  const ctx_8 = document.getElementById("app_8").getContext("2d");
  const app_8 = new Chart(ctx_8, lineChartData9);
  document.getElementById("app_8").addEventListener("click", e => {
    const elements = app_8.getElementAtEvent(e);
    const elem = document.getElementById("ctable");
    if (elem.hasChildNodes()) {
      elem.removeChild(elem.childNodes[0]);
    }
    Trytable(elements ,data2, data_all, title, 9)
  })
  const ctx_9 = document.getElementById("app_9").getContext("2d");
  const app_9 = new Chart(ctx_9, lineChartData10);
  document.getElementById("app_9").addEventListener("click", e => {
    const elements = app_9.getElementAtEvent(e);
    const elem = document.getElementById("ctable");
    if (elem.hasChildNodes()) {
      elem.removeChild(elem.childNodes[0]);
    }
    Trytable(elements ,data2, data_all, title, 9)
  })
  const ctx_10 = document.getElementById("app_10").getContext("2d");
  const app_10 = new Chart(ctx_10, lineChartData11);
  document.getElementById("app_10").addEventListener("click", e => {
    const elements = app_10.getElementAtEvent(e);
    const elem = document.getElementById("ctable");
    if (elem.hasChildNodes()) {
      elem.removeChild(elem.childNodes[0]);
    }
    Trytable(elements ,data2, data_all, title, 10)
  })
  const ctx_11 = document.getElementById("app_11").getContext("2d");
  const app_11 = new Chart(ctx_11, lineChartData12);
  document.getElementById("app_11").addEventListener("click", e => {
    const elements = app_11.getElementAtEvent(e);
    const elem = document.getElementById("ctable");
    if (elem.hasChildNodes()) {
      elem.removeChild(elem.childNodes[0]);
    }
    Trytable(elements ,data2, data_all, title, 10)
  })
  const ctx_12 = document.getElementById("app_12").getContext("2d");
  const app_12 = new Chart(ctx_12, lineChartData13);
  document.getElementById("app_12").addEventListener("click", e => {
    const elements = app_12.getElementAtEvent(e);
    const elem = document.getElementById("ctable");
    if (elem.hasChildNodes()) {
      elem.removeChild(elem.childNodes[0]);
    }
    Trytable(elements ,data2, data_all, title, 14)
  })
  const ctx_13 = document.getElementById("app_13").getContext("2d");
  const app_13 = new Chart(ctx_13, lineChartData14);
  document.getElementById("app_13").addEventListener("click", e => {
    const elements = app_13.getElementAtEvent(e);
    const elem = document.getElementById("ctable");
    if (elem.hasChildNodes()) {
      elem.removeChild(elem.childNodes[0]);
    }
    Trytable(elements ,data2, data_all, title, 14)
  })
}


function Trytable(elements,data2, data_all, title, num){
  try {
    var click_list = elements[0]._index;
    var year = elements[0]._model.datasetLabel;
    if (elements.length) {
      console.log(elements)
      // const click_list = data[elements[0]._index];
      // const click_list = elements[0]._index;
      var title_text = elements[0]._chart.options.title.text
      document.getElementById(
        "list"
      ).innerHTML = "<ul>" + "<li>"+ `グループ : ${click_list}`+ "</li>" + "<li>" + `年 : ${year}` + "</li>"+ "<li>" + `グラフ : ${title_text}`+"</li>"+ "</ul>";
      // console.log(click_list);
      click_list ++;
      const all_num = [];
      var i = 0;
      var t = 0;
      all_num.push(title);
      while (i <= data2[num].length) {
        if (data2[num][i] == click_list) {
          const A = data_all[i]
          if (A[4] == year) {
            all_num.push(A);
          }
          t ++;
        }
        i ++;
      }
      const all_sto = []
      for (let elem of all_num) {
        var A = []
        A = elem.slice(0,5);
        all_sto.push((A));
      }
      // console.log(all_sto);
      CreateTalbe(all_sto, data2);
    }
  } catch (error) {
  }
}

function CreateTalbe(all_sto, data2) {
  let insertElement = ""; // テーブルタグに表示する用の変数
  all_sto.forEach((element) => {
    // 配列の中身を表示
    // console.log(element);
    insertElement += "<tr>";
    element.forEach((childElement) => {
      insertElement += `<td>${childElement}</td>`;
    });
    insertElement += "</tr>";
  });
  // var table = document.createElement("table");
  // var thead = document.createElement("thead");
  // var tbody = document.createElement("tbody");
  // table.appendChild(thead);
  // table.appendChild(tbody);

  // let row_1 = document.createElement("tr");
  // let heading_1 = document.createElement("th");
  // heading_1.innerHTML = '選んだグループ';
  // let heading_2 = document.createElement("th");
  // heading_2.innerHTML = '企業名';
  // let heading_3 = document.createElement("th");
  // heading_3.innerHTML = 'ティッカー';
  // let heading_4 = document.createElement("th");
  // heading_4.innerHTML = '株価の差異';

  // row_1.appendChild(heading_1);
  // row_1.appendChild(heading_2);
  // row_1.appendChild(heading_3);
  // row_1.appendChild(heading_4);
  // thead.appendChild(row_1);

  // let row_2 = document.createElement("tr");
  // let row_2_data_1 = document.createElement("td");
  // row_2_data_1.innerHTML = all_sto[0];
  // let row_2_data_2 = document.createElement("td");
  // row_2_data_2.innerHTML = all_sto[1];
  // let row_2_data_3 = document.createElement("td");
  // row_2_data_3.innerHTML = all_sto[2];
  // let row_2_data_4 = document.createElement("td");
  // row_2_data_4.innerHTML = all_sto[3];

  // row_2.appendChild(row_2_data_1);
  // row_2.appendChild(row_2_data_2);
  // row_2.appendChild(row_2_data_3);
  // row_2.appendChild(row_2_data_4);
  // tbody.appendChild(row_2);

  document.getElementById("ctable").innerHTML = insertElement
  // .appendChild(table);
}


csv_data();