$(document).ready(function () {
    let valor = 0;
    let valor2 = 0;
    let operadorAux = "";
    $(".numero").click(function () {

        valor2 = $("#visor").val();
        valor2 += $(this).html();
        $("#visor").val(valor2);

    });

    $(".operacion").click(function () {
        if (operadorAux == "") {
            valor = valor2;   
        }
        calcular();
        $("#visor").val("");
        operadorAux = $(this).html();

        console.log(valor);
        mostrarResultado(valor);
    })

    $(".igual").click(function () {
        console.log("igual", valor);
        calcular();
        operadorAux = "#";
        mostrarResultado(valor);
        $("#visor").val(valor);
    })

    $(".limpiar").click(function () {
        let valor = 0;
        valor2 = 0;
        operadorAux = "";
        $("#visor").val(valor2);
        mostrarResultado(0);
    })

    const mostrarResultado = function (resultado) {
        console.log(resultado);
        if (resultado == "Infinity") {
            $("#resultado").html("Error: no se puede dividir por 0");
            $("#visor").val("Error");
        } else {
            $("#resultado").html(resultado);
        }

    }

    const calcular = function () {

        if (operadorAux == "+") {
            
            console.log(parseFloat(valor), parseFloat(valor2), "+");
            valor = parseFloat(valor) + parseFloat(valor2)
            valor2 = 0
            
        } else if (operadorAux == "-") {
            valor = parseFloat(valor) - parseFloat(valor2)
            valor2 = 0
            
        } else if (operadorAux == "*") {
            valor = parseFloat(valor) * parseFloat(valor2)
            valor2 = 0
            
        } else if (operadorAux == "/") {
            valor = parseFloat(valor) / parseFloat(valor2)
            valor2 = 0
            
        }
    }


});