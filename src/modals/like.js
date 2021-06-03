export default class Like{
    
    constructor()
    {   
        this.ar=[];
        console.log("inside")
        
        localStorage.setItem("array",JSON.stringify(this.ar));
    }
    addItem(name,img,rating,id)
    {
        const obj={
            name,
            img,
            rating,
            id
        };
        this.ar.push(obj);
        window.localStorage.setItem("array",JSON.stringify(this.ar));
    }
    removeItem(id){
        for(var i=0;i<this.ar.length;i++)
        {
            if(this.ar[i].id==id)
            {
                this.ar.splice(i,1);
            }
        }
    }
    isLiked(id)
    {
        for(var i=0;i<this.ar.length;i++)
        {
            if(this.ar[i].id==id)
            {
                return true;
            }
        } 
        return false;
    }
}