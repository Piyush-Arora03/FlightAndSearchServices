class CurdRepository {
    constructor(model) {
        this.model = model
    }

    async create(data) {
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log(`somethign went wrong in curdrepo ${error}`);
            throw { error };
        }
    }

    async get(modelId) {
        try {
            const result = await this.model.findByPk(modelId);
            return result;
        } catch (error) {
            console.log(`somethign went wrong in curdrepo ${error}`);
            throw { error };
        }
    }

    async update(data, modelId) {
        try {
            const result = await this.model.update(data, {
                where: {
                    id: modelId
                }
            });
            return true;
        } catch (error) {
            console.log(`somethign went wrong in curdrepo ${error}`);
            throw { error };
        }
    }

    async destroy(modelId) {
        try {
            const result = await this.model.destroy({
                where: {
                    id: modelId
                }
            });
            return true;
        } catch (error) {
            console.log(`somethign went wrong in curdrepo ${error}`);
            throw { error };
        }
    }

    async getAll() {
        try {
            const result = await this.model.findAll();
            return result;
        } catch (error) {
            console.log(`somethign went wrong in curdrepo ${error}`);
            throw { error };
        }
    }
}

module.exports = CurdRepository;