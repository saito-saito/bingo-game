$("#select-card").on("click", function(){
    $(".select-area").addClass("hide");
    $(".bingo-card-area").removeClass("hide");

    let create_flg = false;
    let Bingo = ["b", "i", "n", "g", "o"];

    $("#create").on("click", function(){
        init();
        create_flg = true;
    });

    $("#decide").on("click", function(){
        if(create_flg){
            $("#create").addClass("hide");
            $("#decide").addClass("hide");

            for(let x = 0; x < 5; x++){
                for(let i = 1; i < 6; i++ ){
                    eval("$('." + Bingo[x] + "-' + i).on('click', function(){$('." + Bingo[x] + "-' + i).toggleClass('push');});")
                }
            }
            
            $(".free").on("click", function(){
                $(".free").toggleClass("push");
            });

        }else{
            alert("ビンゴカードを生成してください");
        }
    });

    function init(){
        for(let x = 0; x < 5; x++){
            eval("var arr" + Bingo[x] + "= []");
            for(let i = 1 + 15 * x; i < 16 + 15 * x; i++){
                eval("arr" + Bingo[x] + ".push(i);");
            }
            eval("arrayShuffle(arr" + Bingo[x] + ");");

            for(let i = 1; i < 6; i++ ){
                eval("$('." + Bingo[x] + "-' + i).text(arr" + Bingo[x] + "[i]);")
            }
        }

        setDate();
    } 

    function arrayShuffle(array) {
        for(let i = (array.length - 1); 0 < i; i--){
    
        // 0〜(i+1)の範囲で値を取得
        let r = Math.floor(Math.random() * (i + 1));
    
        // 要素の並び替えを実行
        let tmp = array[i];
        array[i] = array[r];
        array[r] = tmp;
        }
        return array;
    }

    function setDate(){
        var y = new Date().getFullYear();
        var m = new Date().getMonth() + 1;
        var d = new Date().getDate();
        var h = new Date().getHours();
        var min = new Date().getMinutes();
        var s = new Date().getSeconds();
        $(".date").html(y + "年" + m + "月" + d + "日" + h + ":" + min + ":" + s);
    }
});

$("#select-machine").on("click", function(){
    $(".select-area").addClass("hide");
    $(".machine-area").removeClass("hide");

    let selected_num = '';
    let num_box = [];

    $("#select").on("click", function(){
        if(selected_num != ''){
            $('.' + selected_num).addClass("picked");
        }
        selectNum();

        switch (true) {
            case selected_num >= 1 && selected_num <= 15:
                $(".now-num").text("B-" + selected_num);
                break;
            case selected_num >= 16 && selected_num <= 30:
                $(".now-num").text("I-" + selected_num);
                break;
            case selected_num >= 31 && selected_num <= 45:
                $(".now-num").text("N-" + selected_num);
                break;
            case selected_num >= 46 && selected_num <= 60:
                $(".now-num").text("G-" + selected_num);
                break;
            case selected_num >= 61 && selected_num <= 75:
                $(".now-num").text("O-" + selected_num);
                break;
            default:
                alert('not');
        }

        
    });

    init();
    function init(){
        for(let i = 1; i < 76; i++){
            num_box.push(i);
        }
        console.log(num_box);
    } 

    function arrayShuffle(array) {
        for(let i = (array.length - 1); 0 < i; i--){
    
        // 0〜(i+1)の範囲で値を取得
        let r = Math.floor(Math.random() * (i + 1));
    
        // 要素の並び替えを実行
        let tmp = array[i];
        array[i] = array[r];
        array[r] = tmp;
        }
        return array;
    }

    function selectNum(){
        arrayShuffle(num_box);
        console.log(num_box);

        selected_num = num_box.shift();
        console.log(selected_num);
        console.log(num_box);
    }
});
