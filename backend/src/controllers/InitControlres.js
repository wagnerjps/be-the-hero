module.exports = {
    //
    testeRaiz(request, response) {

        const params = request.query;
        console.log(params);
    
        return response.json({
            titulo: "Hello World",
            evento: 'Semana Omnistack',
            aluno: 'Wagner J. P. Silva'
        });
    },
    //Exemplo que Query Params
    exQueryParams(request, response) {

        const params = request.query;
        console.log(params);
    
        return response.json({
            titulo: "Exemplo Query Params",
            parametros: params
        });
    },
    //Exemplo de Route Params
    exRouteParams(request, response) {
        const params = request.params;
        console.log(params);
        return response.json({
            titulo: "Exemplo Route Params",
            parametros: params
        });
    },
    //Exemplo de Request Body
    exRequestBody(request, response) {
        const params = request.body;
        console.log(params);
        return response.json({
            titulo: "Exemplo Request Body",
            parametros: params
        });
    }
};