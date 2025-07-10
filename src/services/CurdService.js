class CurdService{
    constructor(repository){
        this.repository=repository;
    }

    async create(data){
        try {
            const result=await this.repository.create(data);
            return result;
        } catch (error) {
            console.log(`something went wrong in curd service ${error}`);
            throw {error};
        }
    }
    
    async get(data,dataId){
        try {
            const result=await this.repository.get(data,dataId);
            return result;
        } catch (error) {
            console.log(`something went wrong in curd service ${error}`);
            throw {error};
        }
    }

    async update(data){
        try {
            const result=await this.repository.update(data);
            return result;
        } catch (error) {
            console.log(`something went wrong in curd service ${error}`);
            throw {error};
        }
    }

    async getAll(){
        try {
            const result=await this.repository.getAll(data);
            return result;
        } catch (error) {
            console.log(`something went wrong in curd service ${error}`);
            throw {error};
        }
    }
    
    async destroy(dataId){
        try {
            const result=await this.repository.destroy(dataId);
            return result;
        } catch (error) {
            console.log(`something went wrong in curd service ${error}`);
            throw {error};
        }
    }
}

module.exports=CurdService;