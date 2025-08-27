function test1(cb){
            setTimeout(function(){
                print()
                cb();
                    console.log("test1 completed");
            },2000);

        
        }

        function print(){
            console.log("timer completed");
        }
        function callback(){
            console.log("callback completed");
        }
        test1(callback); //callback is a callback function