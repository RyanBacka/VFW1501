var data = {
		"equipNames":{
			"headTitle":"Well Test Equipment",
			"footTitle":"Equipment used for well testing.",
			"termsTest":[
				{
					"eqip":"Seperator",
					"desc":"This is a large vessel used to seperate well fluid into water, gas, and oil."
				},{
					"equip":"P-Tank",
					"desc":"The P-Tank holds the oil, after being seperated by the Seperator, until it is transported."
				},{
					"equip":"Scrubber",
					"desc":"The Scrubber is used to eliminate and excess fluids in the gas before it is sent to the Flare."
				},{
					"equip":"Sand Trap",
					"desc":"The Sand Trap catches any small particles left in the well fluid that were not caught in the Plug Catcher."
				},{
					"equip":"Plug Catcher",
					"desc":"The Plug Catcher catches larger pieces, such as plug parts and slips, left in the well fluid before the fluid enters the Seperator."
				},{
					"equip":"ESD",
					"desc":"The Emergency Shut-In Device(ESD) is a fail close valve that shuts in the well if there is an emergency."
				},{
					"equip":"Closed Top Tank",
					"desc":"The Closed Top Tank holds all well water until it is cleared for transport."
				},{
					"equip":"Flare",
					"desc":"The Flare burns off gas produced by the well so that Methane isn't emitted to the atmosphere."
			}]
		},
		"equipParts":{
			"headTitle":"Parts of the Seperator",
			"footTitle":"These are the parts that make the Seperator work.",
			"partsTest":[{
					"equip":"Inlet",
					"desc":"The Inlet is the line running into the front of the Seperator where the well fluid flows enters the Seperator."
				},{
					"equip":"Scrubbing Pot",
					"desc":"This is the Seperators air inlet that removes water from the air lines and distributes air to the LLC and Valves"
				},{
					"equip":"LLC",
					"desc":"The Liquid Level Controller(LLC) is attached to a float that rises with the liquid level within the Seperator, it in turn allows air to pass through to the Fail Open Valves to allow liquids to flow down their respective lines."
				},{
					"equip":"BPR",
					"desc":"The Back Pressure Regulator(BPR) allows air to pass through to close the Fail Closed Valve allowing pressure to build on the Seperator to allow time for the well fluid to seperate into gas, water, and oil, and flow through their lines."
				},{
					"equip":"Oil Leg",
					"desc":"The Oil Leg is a line coming out of the bottom of the Seperator that the oil flows through to the P-Tank."
				},{
					"equip":"Water Leg",
					"desc":"The Water Leg is a line coming out of the bottom of the Seperator that the water flows through to tthe Closed Top Tanks."
				},{
					"equip":"Meter Run",
					"desc":"The Meter Run is the Line coming out of the top of the Seperator that the gas runs through to the Flare."
				},{
					"equip":"Pop Off",
					"desc":"The pop of is a safety device at the top of the Seperator that allows gas to escape to atmosphere if the fail open valve sticks and allows the Seperator to become over-pressurized."
				},{
					"equip":"Splash Plate",
					"desc":"The Splash Plate is inside the Seperator where the Inlet enters. The well fluid splashes off the Splash Plate starting the process of seperation."
				},{
					"equip":"Weir Plate",
					"desc":"The Weir Plate is situated inside the Seperator allowing the oil that has seperated from the well fluid to spill over into its own compartment, seperating it from the water inside the Seperator."
				},{
					"equip":"Vortex Inhibitor",
					"desc":"The Vortex Inhibitor is situated where the seperated water exits the Seperator to ensure that oil does not get sucked into the Water Leg due to a vortex forming when the water is dumped out of the Seperator."
				},{
					"equip":"Mist Extractor",
					"desc":"The Mist Extractor is a screen situated at the gas outlet to ensure that excess fluid is removed from the gas as it enters the Meter Run."
				},{
					"equip":"Fail Open Valve",
					"desc":"The Fail Open Valve is the valve that operates on the Meter Run allowing gas to flow to the Flare. If the valve fails for any reason it is engineered to stay open so that the Seperator does not become over-pressurized."
				},{
					"equip":"Fail Closed Valve",
					"desc":"The Fail Closed Valve is located on both the Water Leg and the Oil Leg allowing esch respective line to dump into their respective storage containers. The Fail Closed Valve is engineered to stay closed if the valve fails so that oil is not sent to the Closed Top Tank and water is not sent to the P-Tank."
			}]
		}
};
