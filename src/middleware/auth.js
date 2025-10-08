const adminUser  = (req,res,next) => {
    console.log('Admin Route');
    const token = "xyz";
    const isAuthorized = token === "xyz";

    if(!isAuthorized) {
        res.status(401).send({message: "Unautharized"})
    } else {
        next();
    }
}

const userAuth = (req, res, next) => {
    console.log('User Route');
    const  token  = "abc";
    const isAuthorized = token === "abc";

    if(!isAuthorized) {
        res.status(401).send({message: "Unautharized"})
    } else {
        next();
    }
}

module.exports = adminUser , userAuth
