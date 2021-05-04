function shed (){
  function dailyProduction(A,B,C,D){    var A= 510;
    var B= 308;
    var C= 486;
    var D= 572;


  alert ("your production in shed A " +510+ " litres per day")
  alert ("your production in shed B " +308+ " litres per day")
  alert ("your production in shed C " +486+ " litres per day")    
  alert ("your production in shed D " +572+ " litres per day")  
  var res =A+B+C+D
  alert ("Your total milk production per day "  +res+ " litres");

  function productionWeekly(){
  var weekly=(res*7*45)
  alert ("Your total earning per week"+weekly+"  KSH");

  function monthlyProduction(){
  
    var jan = (res*31*45)
    var feb = (res*29*45)
    var mar = (res*31*45)
    var apr = (res*30*45)
    var may = (res*31*45)
    var jun = (res*30*45)
    var jul = (res*31*45)
    var aug = (res*31*45)
    var sep = (res*30*45)
    var oct = (res*31*45)
    var nov = (res*30*45)
    var dec = (res*31*45)
  alert ("your total income for January  " +jan+ " litres per day")
  alert ("your total income for February  " +feb+ " litres per day")
  alert ("your total income for March  " +mar+ " litres per day")
  alert ("your total income for April  " +apr+ " litres per day")
  alert ("your total income for May  " +may+ " litres per day")
  alert ("your total income for June  " +jun+ " litres per day")
  alert ("your total income for July  " +jul+ " litres per day")
  alert ("your total income for August  " +aug+ " litres per day")
  alert ("your total income for September  " +sep+ " litres per day")
  alert ("your total income for October  " +oct+ " litres per day")
  alert ("your total income for November  " +nov+ " litres per day")
  alert ("your total income for December  " + dec+ " litres per day")
  
  
        var yearly=jan+feb+mar+apr+may+jun+jul+aug+sep+oct+nov+dec
        alert ("Your total earning per year "+yearly+"  KSH");
  
      
  }
  monthlyProduction()

  
  
      
     }
     productionWeekly()

  }

  dailyProduction()

}
shed()