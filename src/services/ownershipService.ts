import api from "."

export const ownershipService = ()=>{
    function findAll ()  {
        return api.get('/ownership')    
    }

    return {
        findAll
    }
}
