import axios from "axios";
export default class Search{
    constructor(query)
    {
        this.query=query;
    }
    async getOutput(){
        try{
            const r = await axios.request(`https://api.themoviedb.org/3/search/movie?api_key=ddec2244e29a6398525405b932d0479a&language=en-US&query=${this.query}&page=1&include_adult=true`)
            this.result=r.data.results;
        }
        catch(error){
            alert(error);
        }
    }
}