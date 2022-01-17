function coinChange(denomination) {

    this.coins = denomination;
    this.numdenomination = this.coins.length;
}

coinChange.prototype = {

    coinClassify: function(sumatory) {
        var finalresult = [],
            totalsumatory = sumatory;
        for (var i = 0; i < this.numdenomination; i++) {
            var currentTypeValue = this.coins[i],
            typeCount = Math.floor(totalsumatory / currentTypeValue);
            finalresult.push(typeCount);
            totalsumatory -= (currentTypeValue * typeCount);
        }
        return finalresult;
    },

    showClassify: function(sumatory){
        var results = this.coinClassify(sumatory);
        console.log(results);
        for(var i = 0; i < results.length; i++) {
            console.log(results[i], ' ', coinnames[i]);
        }
    }
};

var denomination = [25, 10, 5, 1],
    coinnames = ["quaters", "dimes", "nickles", "pennies"],
    coinChanger = new coinChange(denomination);
coinChanger.showClassify(299);