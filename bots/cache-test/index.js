// need an npm module so we know it works
const R = require('ramda');

// comment to have something to  push
R.compose(
    (num) => console.log( `The answer to Life the Universe and Everything is ${num}`),
    R.subtract( R.__, 68 ),
    R.multiply( 10 ),
    R.add( 10 )
)(1);
