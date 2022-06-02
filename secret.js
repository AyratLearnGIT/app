console.log('value is equal 10 : ', Number(process.env.SOME_SECRET) === 10 );
console.log('value is < 10 : ', Number(process.env.SOME_SECRET) < 10 );
console.log('value is > 10 : ', Number(process.env.SOME_SECRET) > 10 );
if ( Number(process.env.SOME_SECRET) === 10) {
    throw Error("Errorrr 10!!!!")
}