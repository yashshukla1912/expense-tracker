const Transaction = require('./../models/Transactions')

// @desc   Get all transactions
// @route  Get /api/v1/transactions
// @access Public
exports.getTransactions = async (req, res, next) => {
    // res.send('Get Transactions');
    try {
        const transactions = await Transaction.find();
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        }); 
    } catch (error) {
        return res.send(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}

// @desc   Add transaction
// @route  POST /api/v1/transactions
// @access Public
exports.addTransaction = async (req, res, next) => {
    try {

        const add = await Transaction.create(req.body)

        return res.status(201).json({
            success: true,
            data: add
        })

    } catch (error) {
        console.log(error)
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            res.status(400).json({
                success: false,
                error: messages
            });
        } else {
            res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }
}

// @desc   Delete transaction
// @route  DELETE /api/v1/transactions/:id
// @access Public
exports.deleteTransaction = (req, res, next) => {
    res.send('Delete Transaction');
}