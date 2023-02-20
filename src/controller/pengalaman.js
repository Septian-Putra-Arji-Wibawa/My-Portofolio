const { pengalaman } = require('../../models') //import models

exports.addPengalaman = async (req, res) => {
    try{
        const data = req.body;
        data.image = req.file.filename;
        await pengalaman.create(data)

        res.send({
            status : 'Success',
            data: data,
        })
        } catch (error){
            console.log(error)
            res.send({
                status: 'failed',
                message:'cant add a experience'
            });
        }
    };

exports.getPengalamans = async (req, res) => {
    try{
        const data = await pengalaman.findAll({
            attributes: {
                exclude: ['createdAt','updatedAt']
            }
        });
        
        res.send({
            status : 'Success',
            data,
        })
        } catch (error){
            console.log(error)
            res.send({
                status: 'failed',
                message:'cant find any experience'
            });
        }
    };

exports.getPengalaman = async (req, res) => {
    try{
        const id = req.params.id;
        const data = await pengalaman.findOne({
            where: {
                id,
            },
            attributes: {
                exclude: ['createdAt','updatedAt']
            }
        });
        
        res.send({
            status : 'Success',
            data,
        })
        } catch (error){
            console.log(error)
            res.send({
                status: 'failed',
                message:'cant find any experience'
            });
        }
    };

exports.getPengalaman = async (req, res) => {
try{
    const id = req.params.id;
    const data = await pengalaman.findOne({
           where: {
            id,
        },
        attributes: {
            exclude: ['createdAt','updatedAt']
        }
    });
        
    res.send({
        status : 'Success',
        data,
    })
    } catch (error){
        console.log(error)
        res.send({
            status: 'failed',
            message:'cant find any experience'
        });
    }
};

exports.updatePengalaman = async (req, res) => {
    try{
        const id = req.params.id;
        await pengalaman.update(req.body, {
            where: {
                id,
            },
        });
            
        res.send({
            status : 'Success',
            message: `Update Pengalaman ${id} Success`
        })
        } catch (error){
            console.log(error)
            res.send({
                status: 'failed',
                message:'cant find any experience'
            });
        }
    };

    exports.deletePengalaman = async (req, res) => {
        try{
            const id = req.params.id;
            await pengalaman.destroy({
                where: {
                    id,
                },
            });
                
            res.send({
                status : 'Success',
                message: `Delete Pengalaman ${id} Success`
            })
            } catch (error){
                console.log(error)
                res.send({
                    status: 'failed',
                    message:'cant find any experience'
                });
            }
        };