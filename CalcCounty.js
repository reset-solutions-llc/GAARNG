int CalcCounty_EMP(string County_Name)
{
CountyCalc = County_Name.toUpperCase();
//Assign EMP Zone 0 Counties
Zone0 = {"BARTOW”:”0”,”CARROLL”:”0”,”CATOOSA”:”0”,”CHATTOOGA”:”0”,”COBB":"0", "COWETA”:”0”,”DADE”:”0”,”DOUGLAS”:”0”,”FLOYD”:”0”,”GORDON”:”0”,”HARALSON”:”0”,”HEARD”:”0”,”MERIWEATHER”:”0”,”MURRAY”:”0”,”PAULDING”:”0”,”POLK”:”0”,”WALKER”:”0”,”WHITFIELD”:”0”};


//Assign EMP Zone 1 Counties
Zone1 = {“DEKALB”:”1”,”FULTON”:”1”,”GWINNETT”:”1”};


//Assign EMP Zone 2 Counties
Zone2 = {"BANKS":"2","BARROW”:”2”,”CHEROKEE”:”2”,”CLARKE”:”2”,”DAWSON:”2”,”ELBERT:”2”,”FANNIN”:”2”,”FORSYTH:”2”,”FRANKLIN”:”2”,”GILMER”:”2”,”HABERSHAM”:”2”,”HALL”:”2”,”HART”:”2”,”JACKSON”:”2”,”LUMPKIN:”2”,”MADISON”:”2”,”NEWTON”:”2”,”OCONEE:”2”,”OGLETHORPE:”2”,”PICKENS”:”2”,”RABUN”:”2”,”ROCKDALE”:”2”,”STEPHENS”:”2”,”TOWNS”:”2”,”UNION”:”2”, “WALTON”:”2”,”WHITE”:”2”};


//Assign EMP Zone 3 Counties
Zone3 = {“BALDWIN”:”3”,”BIBB”:”3”,”BLECKLEY”:”3”,”BUTTS”:”3”,”CLAYTON:”3”,”CRAWFORD”:”3”,”DODGE”:”3”,”FAYETTE”:”3”,”GLASCOCK”:”3”,”HENRY:”3”,”HOUSTON”:”3”,“JASPER”:”3”,”JOHNSON”:”3”,”JONES”:”3”,”LAMAR”:”3”,”LAURENS:”3”,”MACON”:”3”,”MONROE”:”3”,”PEACH”:”3”,”PIKE”:”3”,”PUTNAM:”3”,”SPALDING”:”3”,“TALBOT”:”3”,”TAYLOR”:”3”,”TWIGGS”:”3”,”UPSON”:”3”,”WASHINGTON:”3”,”WILKINSON”:”3”};


//Assign EMP Zone 4 Counties
Zone4 = {“APPLING”:”4”,”ATKINSON”:”4”,”BACON”:”4”,”BRANTLEY”:”4”,”BRYAN”:”4”,”BULLOCH”:”4”,”CAMDEN”:”4”,”CANDLER”:”4”,”CHARLTON”:”4”,”CHATHAM”:”4”,”CLINCH”:”4”,”COFFEE”:”4”,”ECHOLS”:”4”,”EFFINGHAM”:”4”,”EMMANUEL:”4”,”EVANS”:”4”,”GLYNN”:”4”,”JEFF DAVIS”:”4”,”JENNINGS”:”4”,”LANIER”:”4”,”LIBERTY”:”4”,”LONG”:”4”,”MCINTOSH”:”4”,”MONTGOMERY:”4”,”PIERCE”:”4”,”SCREVEN”:”4”,”TATTNALL”:”4”,”TELFAIR”:”4”,”TOOMBS”:”4”,”TREUTLEN:”4”,”WARE”:”4”,”WAYNE”:”4”,”WHEELER”:”4”};


// Assign EMP Zone 5 Counties
Zone5 = {“BAKER”:”5”,”BEN HILL:”5”,”BERRIEN”:”5”,”BROOKS:”5”,”CALHOUN”:”5”,”CHATTAHOOCHEE:”5”,”CLAY”:”5”,”COLQUITT”:”5”,”COOK”:”5”,”CRISP”:”5”,”DECATUR”:”5”,”DOOLY”:”5”,”DOUGHERTY”:”5”,”EARLY”:”5”,”GRADY”:”5”,”HARRIS”:”5”,”IRWIN”:”5”,”LEE”:”5”,”LOWNDES:”5”,”MARION”:”5”,”MILLER”:”5”,”MITCHELL”:”5”,”MUSCOGEE”:”5”,”PULASKI”:”5”,”QUITMAN”:”5”,”RANDOLPH”:”5”,”SCHLEY”:”5”,”SEMINOLE”:”5”,”STEWART”:”5”,”SUMTER”:”5”,”TERRELL”:”5”,”THOMAS”:”5”,”TIFT”:”5”,”TROUP”:”5”,”TURNER”:”5”,”WEBSTER”:”5”,”WILCOX”:”5”,”WORTH”:”5”};

// Assign EMP Zone 6 Counties
Zone6 = {“BURKE”:”6”,”COLUMBIA:”6”,”GREENE”:”6”,”HANCOCK:”6”,”JEFFERSON”:”6”,”LINCOLN:”6”,”MCDUFFIE”:”6”,”MORGAN”:”6”,”RICHMOND”:”6”,”TALIAFERRO”:”6”,”WARREN”:”6”,”WILKES”:”6”,};


if(Zone0.containKey(CountyCalc) == true)
{
	County_Zone = 0;
}
else if(Zone1.containKey(CountyCalc) == true)
{
	County_Zone = 1;
}
else if(Zone2.containKey(CountyCalc) == true)
{
	County_Zone = 2;
}
else if(Zone3.containKey(CountyCalc) == true)
{
	County_Zone = 3;
}
else if(Zone4.containKey(CountyCalc) == true)
{
	County_Zone = 4;
}
else if(Zone5.containKey(CountyCalc) == true)
{
	County_Zone = 5;
}
else if(Zone6.containKey(CountyCalc) == true)
{
	County_Zone = 6;
}
else
{
	County_Zone = 7;
}
return County_Zone;
}
