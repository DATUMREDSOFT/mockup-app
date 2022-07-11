export const agrupar = (arrayRespuesta: any[]) => {
    var nuevoArray = []
    var arrayTemporal = []
    for (var i = 0; i < arrayRespuesta.length; i++) {
        arrayTemporal = nuevoArray.filter(resp => resp["cliente"] == arrayRespuesta[i]["cliente"])
        if (arrayTemporal.length > 0) {
            nuevoArray[nuevoArray.indexOf(arrayTemporal[0])]["contratos"].push(arrayRespuesta[i])
        } else {

            nuevoArray.push({ "cliente": arrayRespuesta[i]["cliente"], "contacto": arrayRespuesta[i]["contacto"], "pais": arrayRespuesta[i]["pais"], contratosActivos: 0, "contratos": [arrayRespuesta[i]] })

        }
    }

    let item = 0;
    for (let d of nuevoArray) {
        console.log(d);
        let contador = 0;

        let dates: any[] = [];
        let mindate: any;
        let estado = '';
        let renovacion = 0;
        for (let c of d.contratos) {


            if (c.estado == 'Activo') {
                contador++;
                dates.push(new Date(c.vencimiento));
            }

            if (c.estado == 'Proceso de renovación') {
                renovacion++;
                estado = c.estado;
                console.log('renovacion', renovacion)
            }


        }
        // renovacion=0;
        mindate = new Date(Math.min.apply(null, dates));
        console.log(mindate);
        nuevoArray[item] = { ...d, estado: estado, renovacion: renovacion, contratosActivos: contador, proximoVencimiento: mindate != 'Invalid Date' ? mindate : '' };

        contador = 0;
        item++;


    }

    console.log(nuevoArray);
    return nuevoArray;
}

export const sumar = (array: any[], campo: string) => {
    let sum = 0;

    for(let d of array){
      
           if(d.estado==campo){
            sum++;
           }
        
    }

    
    return sum;
}