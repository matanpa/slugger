function slugger(...args){
    return args.join(' ').split(' ').join('-').toLowerCase();
}

module.exports = slugger;