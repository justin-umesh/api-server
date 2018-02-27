// Do not modify it as it might get overridden
module.exports = function(app){
      const basepath = "/mkstore/v1";
  
    require('./swagger')(app);
  
    require('./health')(app);
      require('./pets')(app, basepath);
    };  