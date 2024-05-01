//closure example

function outerfunction(){
    var outervariable =10;
    function innerfunction(){
        var innervariable =20;
        console.log(innervariable)
        console.log(outervariable)
    }

    return innerfunction
}

let obj = outerfunction()
obj()