module.exports ={
    //get all teachers
    getAllTeachers : async (req, res)=>{
        await res.send(
            {"teachers":[    
                {"name":"Shubham", "email":"shubham@gmail.com", "age":23, "subject" : "Physics"},    
                {"name":"Thapa", "email":"thapa@gmail.com", "age":28, "subject" : "Chemistry"},  
                {"name":"Nick", "email":"nick@gmail.com", "age":33, "subject" : "Biology"},    
                {"name":"Mark", "email":"mark@gmail.com", "age":41, "subject" : "History"},
                {"name":"Ishita", "email":"ishita@gmail.com", "age":23, "subject" : "Economics"},
                {"name":"Radhika", "email":"radhika@gmail.com", "age":23, "subject" : "Hindi"},
            ]} 
        )
    },
    //get science teachers
    getScienceTeachers : async (req, res)=>{
        await res.send(
            {"teachers":[    
                {"name":"Shubham", "email":"shubham@gmail.com", "age":23, "subject" : "Physics"},    
                {"name":"Thapa", "email":"thapa@gmail.com", "age":28, "subject" : "Chemistry"},  
                {"name":"Nick", "email":"nick@gmail.com", "age":33, "subject" : "Biology"},  
            ]} 
        )
    },
    //get arts teachers
    getArtsTeachers : async (req, res)=>{
        await res.send(
            {"teachers":[    
                {"name":"Mark", "email":"mark@gmail.com", "age":41, "subject" : "History"},
                {"name":"Ishita", "email":"ishita@gmail.com", "age":23, "subject" : "Economics"},
                {"name":"Radhika", "email":"radhika@gmail.com", "age":23, "subject" : "Hindi"},
            ]} 
        )
    }
}