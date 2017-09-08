function scoreCal(score)
{
	var batting = 1;
	var dravid = 0;
	var sachin = 0;
	for(var i=0;i<score.length;i++)
	{
		if(batting==1)
		{
			dravid = dravid + score[i];
		}
		else if(batting==2)
		{
			sachin = sachin+score[i];
		}
	}	
else
{
	if(batting==1)
	{
		batting=2;
	}
	else
	{
		batting = 1;
	}
}
if((i+1)%6==0)
{
	if(batting == 1)
	{
		batting = 2;
	}
	else
	{
		batting=1;
	}
}
}
console.log("dravid="+dravid);
console.log("sachin="+sachin);
var scoreCal = [1,2,4,1,2,3,4,6,0,0,1,0,1,1,2,4,6,0,0,4,0,6,0,1,0];
