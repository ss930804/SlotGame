


const scriptsInEvents = {

	async 事件表1_Event2_Act1(runtime, localVars)
	{
		const isRoll = runtime.globalVars.IsRoll;
		if(isRoll == false)
			return;
		
		for(var i = 0;i<3;i++)
		{
			const index = runtime.callFunction("Random");
			if(index==0)
			{
				console.log("0");
				const obj = runtime.objects.Slot_001.createInstance("圖層 0",256+(64*i),352);
			}
			else if(index == 1)
			{
				console.log("1");
				const obj = runtime.objects.Slot_002.createInstance("圖層 0",256+(64*i),352);
			}
			else
			{
				console.log("2");
				const obj = runtime.objects.Slot_003.createInstance("圖層 0",256+(64*i),352);
			}
		}
		
		//等待
		/*const dt = runtime.dt;
		var a = 0, b = 10;
		function delay(n){
		    return new Promise(function(resolve){
		        setTimeout(resolve,n*1000);
		    });
		}
		async function myAsyncFunction(){
		    for(var i = 0;i<=1;i+=dt)
			{
				var c = (b-a) * i;
				console.log(c);
				await delay(dt);
			}
		}
		myAsyncFunction();*/
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

