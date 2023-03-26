const instanciaAxios = require('../axios');
const fs = require('fs/promises');

const detalharEmpresa = async (req, res) => {

   const { dominioEmpresa } = req.query;
   
   try {

        const { data: empresa} = await instanciaAxios.get(
            `/?domain=${dominioEmpresa}`
        )

        console.log(empresa);
        
        if(empresa && empresa.name){
            const dadoEmpresas = JSON.parse(
                await fs.readFile('./dados/empresas.json')
                )
                
                dadoEmpresas.push(empresa);
                
                await fs.writeFile(
                    './dados/empresas.json',
                    JSON.stringify(dadoEmpresas, null, 2)
                    )
                }
    
        return res.json(empresa);

    } catch (error) {
        
        return res.status(500).json({ mensagem: 'Erro interno do servidor'});
    }
}

module.exports = {
    detalharEmpresa
}









module.exports = {
    detalharEmpresa
}