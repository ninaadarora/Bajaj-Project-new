exports.processData = (req, res) => {
    const { data } = req.body;

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestAlphabet = alphabets.length > 0 ? [alphabets.reduce((a, b) => a.toLowerCase() > b.toLowerCase() ? a : b)] : [];

    res.json({
        is_success: true,
        user_id: "Ninaad Arora",
        email: "nn7829@srmist.edu.in",
        roll_number: "RA2111032010014",
        numbers,
        alphabets,
        highest_alphabet: highestAlphabet
    });
};

exports.getOperationCode = (req, res) => {
    res.json({ operation_code: 1 });
};