import Provider from './../models/expenses';

class Providers {  
  /**
   * Get All Expenses
   * @param {object} req 
   * @param {object} res 
   * @returns {object} Providers array
   */
  static async getAllProviders(req, res) {
    try {
      const data = await Provider.find({});
      return res.status(200).send(
        { 
          status: 200,
          message: 'All available Expenses',
          data
        });
    } catch(error) {
      return res.status(400).send(
        { 
          status: 400,
          message: 'Oops failed to fetch all providers',
          error
        });
    }
  }

  /**
   * Get A Single Expense
   * @param {object} req 
   * @param {object} res
   * @returns {object} Provider object
   */
  static async getOneProvider(req, res) {
    try {     
      const data = await Provider.findById(req.params.id)
      return res.status(200).send(
        { 
          status: 200,
          message: 'Single Expense',
          data
        }
);
    } catch(error) {
      return res.status(400).send({ 
          status: 400,
          message: 'Oops failed to fetch that provider',
          error
    })
    }
  }

  /**
   * Update A Provider
   * @param {object} req 
   * @param {object} res 
   * @returns {object} Provider object
   */
  static async updateProvider(req, res) {
    try {
      const data = req.body;
      await Provider.findOneAndUpdate({
              _id: req.params.id
        }, 
        data
        );
      return res.status(200).send({ 
        status: 200,
        message: 'Expense updated succefully',
        data 
    });
    } catch(error) {
      return res.status(400).send({ 
          status: 400,
          message: 'Oops failed to update the provider',
          error
        });
    }
  }

}

export default Providers;
