module.exports = async function (context, req) {
    context.log('HTTP trigger function processed a request.');

    const name = req.query.name || (req.body && req.body.name);

    if (name) {
        context.res = {
            status: 200,
            body: `Hello ${name}!`
        };
    } else {
        context.res = {
            status: 400,
            body: "Please pass a name in the query string or request body"
        };
    }
};
