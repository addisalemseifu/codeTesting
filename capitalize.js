const capitalize = (string) => {
    if(typeof(string) === 'string') {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }else {
        return 'invalid input'
    }
    }
    

module.exports = capitalize;