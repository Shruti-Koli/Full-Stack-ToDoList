const Items = require('../models/items');


exports.getList = async (req,res,next)=>{
    try{
        const list =  await Items.findAll();
        res.status(200).json({items:list})
    }catch(err){
        console.log('Get Items is failing');
        res.status(500).json({error:err})
    }
}

exports.postItem = async (req,res,next)=>{
    try{
        if(!req.body.name || !req.body.description){
            throw new Error('All fields are Mandatory')
        }
        console.log(req.body)
        const name = req.body.name;
        const description = req.body.description;
        const status = req.body.status;

        const data = await Items.create({
            name: name,
            description: description,
            status : status
        })
        res.status(201).json({item: data})      
    }catch(err){
        res.status(500).json({error:err})
    }
}

exports.updateItem= async (req,res,next)=>{
    try{
        const id = req.params.id;
        const updated = await Items.update(
             {status: "Done"},
             {where:{id:id}}
        )
        const item =  await Items.findByPk(id);
        res.status(200).json({item:item})
    }catch(err){
        console.log('Get item is failing');
        res.status(500).json({error:err})
    }
}

exports.deleteItem=async(req,res,next)=>{
    try{
        const id = req.params.id;
        await Items.destroy({where:{id:id}});
        res.status(200).json({status: "deleted"})
    }catch(err){
        console.log('delete item is failing');
        res.status(500).json({error:err})
    }
}