// $(document).ready(function() {
function frames1(num)
{
    cargar_calendario();
    //document.getElementById('div00').innerHTML = "Dia de la semana : " + dias[dt.getUTCDay()];
}

function cargar_calendario()
{
    let dias = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
    let arr_dias = [
                    [0,6],
                    [1,0],
                    [2,1],
                    [3,2],
                    [4,3],
                    [5,4],
                    [6,5]
                    ];
    //alert("jose");
    //fecha(1,9,2024);
    // let arr_articles = [
    //                     ["Reunion de los Miercoles","Baby shower","comprar café"],
    //                     ["111","222","333"],
    //                     ["444","555","666"]
    //                     ];

    let arr_articles = [42];
    arr_articles[42] = "fresa";

    var mes=9,dia=2,anio=2024;
    //var dt = new Date("september 1, 2024 01:15:00");
    //var dt = new Date("2023-10-1");
    var dt = new Date("2024-9-1");

    // =IF(WEEKDAY(N3;3)=6;N3 + 1;N3-WEEKDAY(N3;3))
    //if(dt.getDay()==6)
    //  dt.setDate(dt.getDate()-dt.getDay());
                    
    var dia_sem;
    var fec;
                    
        //document.getElementById('div11').innerHTML=dia_sem;
        //document.getElementById('div00').innerHTML = "Dia de la semana : " + arr_dias[dt.getUTCDay()];

    for (let i = 0; i < arr_articles.length; i++) {
        //arr_articles[i] = new Array(42);
        //for (let j = 0; j < arr_articles.length; j++) {
            //arr_articles[i][j] = "[" + i + ", " + j + "]";
            
            var aux=dt.getUTCDay();
            var aux2=dias[dt.getUTCDay()];
            var aux3=arr_dias[dt.getUTCDay()][1];
            if(i==0)
                dt.setDate(dt.getDate()-aux3);
            dia_sem=dt.getDate();

            document.getElementById('id_'+i).innerHTML=dia_sem;
            dt.setDate(dt.getDate()+1);
            debugger;
    }

     // agregar ciclo for
     //document.getElementById("id_0").innerHTML=arr_articles[i][j];
}