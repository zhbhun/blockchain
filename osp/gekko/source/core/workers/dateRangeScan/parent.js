var ForkTask = require('relieve').tasks.ForkTask;
var fork = require('child_process').fork;

module.exports = function(config, done) {
  // var debug = typeof v8debug === 'object';
  var util = require('../../util');
  var debug = util.debug();
  if (debug) {
    process.execArgv = ['--inspect', '--inspect-port=9228', '--inspect-brk'];
  }

  task = new ForkTask(fork(__dirname + '/child'));

  task.send('start', config);

  task.once('ranges', ranges => {
    return done(false, ranges);
  });
  task.on('exit', code => {
    if(code !== 0)
      done('ERROR, unable to scan dateranges, please check the console.');
  });
}
