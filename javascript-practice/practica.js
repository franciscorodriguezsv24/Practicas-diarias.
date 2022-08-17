
        console.log("estoy funcionando"+" desde javascript");

        let a = "estoy funcionando"
        let b = " desde Javascript"

        console.log(a+b);

        // funciones

       // objetivo de las funciones es que sean reutilizables
       
       //function PALABRAS RESERVADAS -> PARA ASIGNAR FUNCIONES.
       //function nombre de funcion ->
       //RETURN es para retonar un valor
       //funciones RECIBEN PARAMETROS -> Estos pueden ser string, Int, Array, Objeto.
       //si el lenguaje ya trae una function PREDETERMINADA no la podemos SOBREESCRIBIR

       function saludar(name,age,id){
        let id = 123123
        return `hola, tu id es ${id}`;

        console.log(id);

       }


       //rwmplate string o plantilla de cadenas
       // Incrustar o introducir una variable dentro de un string 
       // para adquirir su valor 

       let id = 1234
       console.log();


       // scop es el alcance del  bloque de codigo
       console.log(saludar());



