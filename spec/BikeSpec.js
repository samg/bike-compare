
describe("Bike", function(){
    describe("a 42cm cross check", function(){
        var crossCheck;
        beforeEach(function(){
            crossCheck = new Bike({
                    seatTubeLength: 420,
                    topTubeLength: 505,
                    effectiveTopTubeLength: 522,
                    headTubeAngle: 72,
                    seatTubeAngle: 75,
                    bbDrop: 66,
                    chainstayLength: 420,
                    wheelbase: 989.8,
                    standoverHeight: 731.9,
                    headTubeLength: 91,
                    forkLength: 400,
                    forkRake: 44,
                    stack: 528,
                    reach: 378.7
                }
            )

        })
        it("should have a 420mm seat tube", function(){
            expect(crossCheck.dimensions.seatTubeLength).toBe(420);
        })

        it("should place the bottom bracket at 0,0", function(){
            expect(crossCheck.coordinates.bottomBracket()).toEqual([0,0]);
        })
        it("should place the seat tube top at the correct spot", function(){
            expect(crossCheck.coordinates.seatTubeTop()).toEqual([ -106.1, -396 ]);
        })

        it("should place the rear hub at the correct spot", function(){
            expect(crossCheck.coordinates.rearHub()).toEqual([ -408, -76 ]);
        })
    })
})
