

(async () => {

    const database = require('./db');
    const Produto = require('./Models/produto');
    const Fabricante = require('./Models/fabricante');
    const Categoria = require('./Models/categoria');
    await database.sync();

    /*const novaCategoria = await Categoria.create({nome: 'Informatica'});*/
    const produto = await Produto.findByPk(1, {
        include: Categoria
    });

    //await produto.setCategorias([novaCategoria]);
    console.log(produto.categoria);


    /*const novoFabricante = await Fabricante.create({
        nome:'Apple'
    })

     const novoProduto = await Produto.create({
        nome: 'Macbook',
        preco: 10000,
        decricao: 'Notebook da Apple',
        idFabricante: novoFabricante.id
    })
    console.log(novoProduto);*/
    
    /*const produto = await Produto.findByPk(1, {incluido: Fabricante});

    console.log(produto.fabricante.nome);*/

    const fabricante = await Fabricante.findByPk(1, { include: Produto});
    //const produtos = await fabricante.getProdutos();
    console.log (fabricante.produtos); 



 /* await Produto.destroy({where:{
    preco: 5800 
}}) */

 })(); 




