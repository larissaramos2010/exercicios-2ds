const express = require("express")

const router = express.Router()
const cultivos = [
{ id: 1, nome: "Alface", tipo: "folha", canteiros: 4, ativo: true },
{ id: 2, nome: "Tomate", tipo: "fruto", canteiros: 2, ativo: true },
{ id: 3, nome: "Cenoura", tipo: "raiz", canteiros: 3, ativo: false }

]
router.get ("/", (req,res)=>{
    res.json(cultivos)
})
router.get ("/ativos", (req,res)=>{
    const ativos = [] 
    cultivos.forEach((e)=>{
        if(e.ativo == true) {
            ativos.push (e)
        }
    })
    res.json (ativos)
})