const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sepedahmotorSchema = new Schema({
    namapembeli:{
        type: String
        },
        alamat:{
            type: String
        },
        tipebarang:{
            type: String
        },
        hargabarang:{
            type: String
        },
        pembayaran:{
            type: String
        },
        totalharga :{
            type: String
            
        }
})
module.exports =mongoose.model('sepedahmotor',sepedahmotorSchema)