module.exports={
    //get institute info
    instituteInfo : (req, res)=>{
        res.send({
            "name" : "M.A.M Education System",
            "since" : 1978,
            "owner" : "Ijaz Ahmad"
        })
    }
}