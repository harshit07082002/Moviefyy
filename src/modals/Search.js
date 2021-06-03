import axios from "axios";
export default class Search{
    constructor(query)
    {
        this.query=query;
    }
    async getOutput(){
        try{
        const r=await axios(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${this.query}?rapidapi-key=f64e8eced0msh2ffde7db3d148d3p111465jsn6ec45388c77f
        `);
        this.result=r.data;
        }
        catch(error){
            alert(error);
        }
    }
}