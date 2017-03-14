class Spaceship{
	constructor(name,crewMembers,phasers,shields){
		this.name=name;
		this.crewMembers=crewMembers;
		this.phasers=phasers;
		this.shields=shields;
		this.cloaked=false;
		this.warpDrive='disengaged';
		if(this.crewMembers.length===0){
			this.docked=true;
		}
		else{
			this.docked=false;
		}
		this.phasersCharge='uncharged';
		var currentShip=this;
		this.crewMembers.forEach(function(member){
			member.currentShip=currentShip;
		})
	}
}