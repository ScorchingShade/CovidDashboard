import { Component, OnInit } from '@angular/core';
import { CoronaDataBuilderService } from './corona-data-builder.service';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  constructor(private _coronaData: CoronaDataBuilderService) { }

  ngOnInit() {
    
      this.draw()
  }

  draw(){
    let jsonData;
    let cases =new Map();

    let countryName=this._coronaData.coronaData()
      .subscribe(data => {
      
      let stringedData = "{\"Dl\":"+JSON.stringify(data)+"}"

      console.log("Here is coronaAPI DATA"+data)

       jsonData = JSON.parse(stringedData)

       jsonData

       for (var i = 0; i < jsonData.Dl.length; i++) {
        var jsonIndex = jsonData.Dl[i];
         cases.set(jsonIndex.country,jsonIndex.cases) 
         
         
    }

    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create map instance
    let chart = am4core.create("chartdiv", am4maps.MapChart);

    let title = chart.titles.create();
    title.text = "[bold font-size: 20]Coronavirus Dashboard by Ankush Sharma";
    title.textAlign = "middle";

    var mapData = [
      { "id":"AF", "name":"Afghanistan", "value":cases.get("Afghanistan"), "color": chart.colors.getIndex(0) },
      { "id":"AL", "name":"Albania", "value":cases.get("Albania"), "color":chart.colors.getIndex(1) },
      { "id":"DZ", "name":"Algeria", "value":cases.get("Algeria"), "color":chart.colors.getIndex(2) },
      { "id":"AO", "name":"Angola", "value":cases.get("Angola"), "color":chart.colors.getIndex(2) },
      { "id":"AR", "name":"Argentina", "value":cases.get("Argentina"), "color":chart.colors.getIndex(3) },
      { "id":"AM", "name":"Armenia", "value":cases.get("Armenia"), "color":chart.colors.getIndex(1) },
      { "id":"AU", "name":"Australia", "value":cases.get("Australia"), "color":"#8aabb0" },
      { "id":"AT", "name":"Austria", "value":cases.get("Austria"), "color":chart.colors.getIndex(1) },
      { "id":"AZ", "name":"Azerbaijan", "value":cases.get("Azerbaijan"), "color":chart.colors.getIndex(1) },
      { "id":"BH", "name":"Bahrain", "value":cases.get("Bahrain"), "color": chart.colors.getIndex(0) },
      { "id":"BD", "name":"Bangladesh", "value":cases.get("Bangladesh"), "color": chart.colors.getIndex(0) },
      { "id":"BY", "name":"Belarus", "value":cases.get("Belarus"), "color":chart.colors.getIndex(1) },
      { "id":"BE", "name":"Belgium", "value":cases.get("Belgium"), "color":chart.colors.getIndex(1) },
      { "id":"BJ", "name":"Benin", "value":cases.get("Benin"), "color":chart.colors.getIndex(2) },
      { "id":"BT", "name":"Bhutan", "value":cases.get("Bhutan"), "color": chart.colors.getIndex(0) },
      { "id":"BO", "name":"Bolivia", "value":cases.get("Bolivia"), "color":chart.colors.getIndex(3) },
      { "id":"BA", "name":"Bosnia and Herzegovina", "value":cases.get("Bosnia and Herzegovina"), "color":chart.colors.getIndex(1) },
      { "id":"BW", "name":"Botswana", "value":cases.get("Botswana"), "color":chart.colors.getIndex(2) },
      { "id":"BR", "name":"Brazil", "value":cases.get("Brazil"), "color":chart.colors.getIndex(3) },
      { "id":"BN", "name":"Brunei", "value":cases.get("Brunei"), "color": chart.colors.getIndex(0) },
      { "id":"BG", "name":"Bulgaria", "value":cases.get("Bulgeria"), "color":chart.colors.getIndex(1) },
      { "id":"BF", "name":"Burkina Faso", "value":cases.get("Burkina Faso"), "color":chart.colors.getIndex(2) },
      { "id":"BI", "name":"Burundi", "value":cases.get("Burundi"), "color":chart.colors.getIndex(2) },
      { "id":"KH", "name":"Cambodia", "value":cases.get("Cambodia"), "color": chart.colors.getIndex(0) },
      { "id":"CM", "name":"Cameroon", "value":cases.get("Cameroon"), "color":chart.colors.getIndex(2) },
      { "id":"CA", "name":"Canada", "value":cases.get("Canada"), "color":chart.colors.getIndex(4) },
      { "id":"CV", "name":"Cape Verde", "value":cases.get("Cape Verde"), "color":chart.colors.getIndex(2) },
      { "id":"CF", "name":"Central African Rep.", "value":0, "color":chart.colors.getIndex(2) },
      { "id":"TD", "name":"Chad", "value":cases.get("Chad"), "color":chart.colors.getIndex(2) },
      { "id":"CL", "name":"Chile", "value":cases.get("Chile"), "color":chart.colors.getIndex(3) },
      { "id":"CN", "name":"China", "value":cases.get("China"), "color": chart.colors.getIndex(0) },
      { "id":"CO", "name":"Colombia", "value":cases.get("Colombia"), "color":chart.colors.getIndex(3) },
      { "id":"KM", "name":"Comoros", "value":cases.get("Comoros"), "color":chart.colors.getIndex(2) },
      { "id":"CD", "name":"Congo, Dem. Rep.", "value":cases.get("Congo"), "color":chart.colors.getIndex(2) },
      { "id":"CG", "name":"Congo, Rep.", "value":cases.get("Congo"), "color":chart.colors.getIndex(2) },
      { "id":"CR", "name":"Costa Rica", "value":cases.get("Costa Rica"), "color":chart.colors.getIndex(4) },
      { "id":"CI", "name":"Cote d'Ivoire", "value":cases.get("Ivory Coast"), "color":chart.colors.getIndex(2) },
      { "id":"HR", "name":"Croatia", "value":cases.get("Croatia"), "color":chart.colors.getIndex(1) },
      { "id":"CU", "name":"Cuba", "value":cases.get("Cuba"), "color":chart.colors.getIndex(4) },
      { "id":"CY", "name":"Cyprus", "value":cases.get("Cyprus"), "color":chart.colors.getIndex(1) },
      { "id":"CZ", "name":"Czech Rep.", "value":cases.get("Czechia"), "color":chart.colors.getIndex(1) },
      { "id":"DK", "name":"Denmark", "value":cases.get("Denmark"), "color":chart.colors.getIndex(1) },
      { "id":"DJ", "name":"Djibouti", "value":cases.get("Djibouti"), "color":chart.colors.getIndex(2) },
      { "id":"DO", "name":"Dominican Rep.", "value":cases.get("Dominican Republic"), "color":chart.colors.getIndex(4) },
      { "id":"EC", "name":"Ecuador", "value":cases.get("Ecuador"), "color":chart.colors.getIndex(3) },
      { "id":"EG", "name":"Egypt", "value":cases.get("Egypt"), "color":chart.colors.getIndex(2) },
      { "id":"SV", "name":"El Salvador", "value":cases.get("El Salvador"), "color":chart.colors.getIndex(4) },
      { "id":"GQ", "name":"Equatorial Guinea", "value":cases.get("Equatorial Guinea"), "color":chart.colors.getIndex(2) },
      { "id":"ER", "name":"Eritrea", "value":cases.get("Eritrea"), "color":chart.colors.getIndex(2) },
      { "id":"EE", "name":"Estonia", "value":cases.get("Estonia"), "color":chart.colors.getIndex(1) },
      { "id":"ET", "name":"Ethiopia", "value":cases.get("Ethiopia"), "color":chart.colors.getIndex(2) },
      { "id":"FJ", "name":"Fiji", "value":cases.get("Fiji"), "color":"#8aabb0" },
      { "id":"FI", "name":"Finland", "value":cases.get("Finland"), "color":chart.colors.getIndex(1) },
      { "id":"FR", "name":"France", "value":cases.get("France"), "color":chart.colors.getIndex(1) },
      { "id":"GA", "name":"Gabon", "value":cases.get("Gabon"), "color":chart.colors.getIndex(2) },
      { "id":"GM", "name":"Gambia", "value":cases.get("Gambia"), "color":chart.colors.getIndex(2) },
      { "id":"GE", "name":"Georgia", "value":cases.get("Georgia"), "color":chart.colors.getIndex(1) },
      { "id":"DE", "name":"Germany", "value":cases.get("Germany"), "color":chart.colors.getIndex(1) },
      { "id":"GH", "name":"Ghana", "value":cases.get("Ghana"), "color":chart.colors.getIndex(2) },
      { "id":"GR", "name":"Greece", "value":cases.get("Greece"), "color":chart.colors.getIndex(1) },
      { "id":"GT", "name":"Guatemala", "value":cases.get("Guatemala"), "color":chart.colors.getIndex(4) },
      { "id":"GN", "name":"Guinea", "value":cases.get("Guinea"), "color":chart.colors.getIndex(2) },
      { "id":"GW", "name":"Guinea-Bissau", "value":0, "color":chart.colors.getIndex(2) },
      { "id":"GY", "name":"Guyana", "value":cases.get("Guyana"), "color":chart.colors.getIndex(3) },
      { "id":"HT", "name":"Haiti", "value":cases.get("Haiti"), "color":chart.colors.getIndex(4) },
      { "id":"HN", "name":"Honduras", "value":cases.get("Honduras"), "color":chart.colors.getIndex(4) },
      { "id":"HK", "name":"Hong Kong, China", "value":cases.get("Hong Kong"), "color": chart.colors.getIndex(0) },
      { "id":"HU", "name":"Hungary", "value":cases.get("Hungary"), "color":chart.colors.getIndex(1) },
      { "id":"IS", "name":"Iceland", "value":cases.get("Iceland"), "color":chart.colors.getIndex(1) },
      { "id":"IN", "name":"India", "value":cases.get("India"), "color": chart.colors.getIndex(0) },
      { "id":"ID", "name":"Indonesia", "value":cases.get("Indonesia"), "color": chart.colors.getIndex(0) },
      { "id":"IR", "name":"Iran", "value":cases.get("Iran"), "color": chart.colors.getIndex(0) },
      { "id":"IQ", "name":"Iraq", "value":cases.get("Iraq"), "color": chart.colors.getIndex(0) },
      { "id":"IE", "name":"Ireland", "value":cases.get("Ireland"), "color":chart.colors.getIndex(1) },
      { "id":"IL", "name":"Israel", "value":cases.get("Israel"), "color": chart.colors.getIndex(0) },
      { "id":"IT", "name":"Italy", "value":cases.get("Italy"), "color":chart.colors.getIndex(1) },
      { "id":"JM", "name":"Jamaica", "value":cases.get("Jamaica"), "color":chart.colors.getIndex(4) },
      { "id":"JP", "name":"Japan", "value":cases.get("Japan"), "color": chart.colors.getIndex(0) },
      { "id":"JO", "name":"Jordan", "value":cases.get("Jordan"), "color": chart.colors.getIndex(0) },
      { "id":"KZ", "name":"Kazakhstan", "value":cases.get("Kazakhstan"), "color": chart.colors.getIndex(0) },
      { "id":"KE", "name":"Kenya", "value":cases.get("Kenya"), "color":chart.colors.getIndex(2) },
      { "id":"KP", "name":"Korea, Dem. Rep.", "value":cases.get("S. Korea"), "color": chart.colors.getIndex(0) },
      { "id":"KR", "name":"Korea, Rep.", "value":0, "color": chart.colors.getIndex(0) },
      { "id":"KW", "name":"Kuwait", "value":cases.get("Kuwait"), "color": chart.colors.getIndex(0) },
      { "id":"KG", "name":"Kyrgyzstan", "value":cases.get("Kyrgyzstan"), "color": chart.colors.getIndex(0) },
      { "id":"LA", "name":"Laos", "value":cases.get("Laos"), "color": chart.colors.getIndex(0) },
      { "id":"LV", "name":"Latvia", "value":cases.get("Latvia"), "color":chart.colors.getIndex(1) },
      { "id":"LB", "name":"Lebanon", "value":cases.get("Lebanon"), "color": chart.colors.getIndex(0) },
      { "id":"LS", "name":"Lesotho", "value":cases.get("Lesotho"), "color":chart.colors.getIndex(2) },
      { "id":"LR", "name":"Liberia", "value":cases.get("Liberia"), "color":chart.colors.getIndex(2) },
      { "id":"LY", "name":"Libya", "value":cases.get("Libya"), "color":chart.colors.getIndex(2) },
      { "id":"LT", "name":"Lithuania", "value":cases.get("Lithuania"), "color":chart.colors.getIndex(1) },
      { "id":"LU", "name":"Luxembourg", "value":cases.get("Luxembourg"), "color":chart.colors.getIndex(1) },
      { "id":"MK", "name":"Macedonia, FYR", "value":cases.get("Macedonia"), "color":chart.colors.getIndex(1) },
      { "id":"MG", "name":"Madagascar", "value":cases.get("Madagascar"), "color":chart.colors.getIndex(2) },
      { "id":"MW", "name":"Malawi", "value":cases.get("Malawi"), "color":chart.colors.getIndex(2) },
      { "id":"MY", "name":"Malaysia", "value":cases.get("Malaysia"), "color": chart.colors.getIndex(0) },
      { "id":"ML", "name":"Mali", "value":cases.get("Mali"), "color":chart.colors.getIndex(2) },
      { "id":"MR", "name":"Mauritania", "value":cases.get("Mauritania"), "color":chart.colors.getIndex(2) },
      { "id":"MU", "name":"Mauritius", "value":cases.get("Mauritius"), "color":chart.colors.getIndex(2) },
      { "id":"MX", "name":"Mexico", "value":cases.get("Mexico"), "color":chart.colors.getIndex(4) },
      { "id":"MD", "name":"Moldova", "value":cases.get("Moldova"), "color":chart.colors.getIndex(1) },
      { "id":"MN", "name":"Mongolia", "value":cases.get("Mongolia"), "color": chart.colors.getIndex(0) },
      { "id":"ME", "name":"Montenegro", "value":cases.get("Montenegro"), "color":chart.colors.getIndex(1) },
      { "id":"MA", "name":"Morocco", "value":cases.get("Morocco"), "color":chart.colors.getIndex(2) },
      { "id":"MZ", "name":"Mozambique", "value":cases.get("Mozambique"), "color":chart.colors.getIndex(2) },
      { "id":"MM", "name":"Myanmar", "value":cases.get("Myanmar"), "color": chart.colors.getIndex(0) },
      { "id":"NA", "name":"Namibia", "value":cases.get("Namibia"), "color":chart.colors.getIndex(2) },
      { "id":"NP", "name":"Nepal", "value":cases.get("Nepal"), "color": chart.colors.getIndex(0) },
      { "id":"NL", "name":"Netherlands", "value":cases.get("Netherlands"), "color":chart.colors.getIndex(1) },
      { "id":"NZ", "name":"New Zealand", "value":cases.get("New Zealand"), "color":"#8aabb0" },
      { "id":"NI", "name":"Nicaragua", "value":cases.get("Nicargua"), "color":chart.colors.getIndex(4) },
      { "id":"NE", "name":"Niger", "value":cases.get("Niger"), "color":chart.colors.getIndex(2) },
      { "id":"NG", "name":"Nigeria", "value":cases.get("Nigeria"), "color":chart.colors.getIndex(2) },
      { "id":"NO", "name":"Norway", "value":cases.get("Norway"), "color":chart.colors.getIndex(1) },
      { "id":"OM", "name":"Oman", "value":cases.get("Oman"), "color": chart.colors.getIndex(0) },
      { "id":"PK", "name":"Pakistan", "value":cases.get("Pakistan"), "color": chart.colors.getIndex(0) },
      { "id":"PA", "name":"Panama", "value":cases.get("Panama"), "color":chart.colors.getIndex(4) },
      { "id":"PG", "name":"Papua New Guinea", "value":cases.get("Papua New Guinea"), "color":"#8aabb0" },
      { "id":"PY", "name":"Paraguay", "value":cases.get("Paraguay"), "color":chart.colors.getIndex(3) },
      { "id":"PE", "name":"Peru", "value":cases.get("Peru"), "color":chart.colors.getIndex(3) },
      { "id":"PH", "name":"Philippines", "value":cases.get("Philippines"), "color": chart.colors.getIndex(0) },
      { "id":"PL", "name":"Poland", "value":cases.get("Poland"), "color":chart.colors.getIndex(1) },
      { "id":"PT", "name":"Portugal", "value":cases.get("Portugal"), "color":chart.colors.getIndex(1) },
      { "id":"PR", "name":"Puerto Rico", "value":cases.get("Puerto Rico"), "color":chart.colors.getIndex(4) },
      { "id":"QA", "name":"Qatar", "value":cases.get("Qatar"), "color": chart.colors.getIndex(0) },
      { "id":"RO", "name":"Romania", "value":cases.get("Romania"), "color":chart.colors.getIndex(1) },
      { "id":"RU", "name":"Russia", "value":cases.get("Russia"), "color":chart.colors.getIndex(1) },
      { "id":"RW", "name":"Rwanda", "value":cases.get("Rwanda"), "color":chart.colors.getIndex(2) },
      { "id":"SA", "name":"Saudi Arabia", "value":cases.get("Saudi Arabia"), "color": chart.colors.getIndex(0) },
      { "id":"SN", "name":"Senegal", "value":cases.get("Senegal"), "color":chart.colors.getIndex(2) },
      { "id":"RS", "name":"Serbia", "value":cases.get("Serbia"), "color":chart.colors.getIndex(1) },
      { "id":"SL", "name":"Sierra Leone", "value":0, "color":chart.colors.getIndex(2) },
      { "id":"SG", "name":"Singapore", "value":cases.get("Singapore"), "color": chart.colors.getIndex(0) },
      { "id":"SK", "name":"Slovak Republic", "value":cases.get("Slovakia"), "color":chart.colors.getIndex(1) },
      { "id":"SI", "name":"Slovenia", "value":cases.get("Slovenia"), "color":chart.colors.getIndex(1) },
      { "id":"SB", "name":"Solomon Islands", "value":0, "color":"#8aabb0" },
      { "id":"SO", "name":"Somalia", "value":cases.get("Somalia"), "color":chart.colors.getIndex(2) },
      { "id":"ZA", "name":"South Africa", "value":cases.get("South Africa"), "color":chart.colors.getIndex(2) },
      { "id":"ES", "name":"Spain", "value":cases.get("Spain"), "color":chart.colors.getIndex(1) },
      { "id":"LK", "name":"Sri Lanka", "value":cases.get("Sri Lanka"), "color": chart.colors.getIndex(0) },
      { "id":"SD", "name":"Sudan", "value":cases.get("Sudan"), "color":chart.colors.getIndex(2) },
      { "id":"SR", "name":"Suriname", "value":cases.get("Suriname"), "color":chart.colors.getIndex(3) },
      { "id":"SZ", "name":"Swaziland", "value":0, "color":chart.colors.getIndex(2) },
      { "id":"SE", "name":"Sweden", "value":cases.get("Sweden"), "color":chart.colors.getIndex(1) },
      { "id":"CH", "name":"Switzerland", "value":cases.get("Switzerland"), "color":chart.colors.getIndex(1) },
      { "id":"SY", "name":"Syria", "value":cases.get("Syria"), "color": chart.colors.getIndex(0) },
      { "id":"TW", "name":"Taiwan", "value":cases.get("Taiwan"), "color": chart.colors.getIndex(0) },
      { "id":"TJ", "name":"Tajikistan", "value":0, "color": chart.colors.getIndex(0) },
      { "id":"TZ", "name":"Tanzania", "value":cases.get("Tanzania"), "color":chart.colors.getIndex(2) },
      { "id":"TH", "name":"Thailand", "value":cases.get("Thailand"), "color": chart.colors.getIndex(0) },
      { "id":"TG", "name":"Togo", "value":cases.get("Togo"), "color":chart.colors.getIndex(2) },
      { "id":"TT", "name":"Trinidad and Tobago", "value":cases.get("Trinidad and Tobago"), "color":chart.colors.getIndex(4) },
      { "id":"TN", "name":"Tunisia", "value":cases.get("Tunisia"), "color":chart.colors.getIndex(2) },
      { "id":"TR", "name":"Turkey", "value":cases.get("Turkey"), "color":chart.colors.getIndex(1) },
      { "id":"TM", "name":"Turkmenistan", "value":0, "color": chart.colors.getIndex(0) },
      { "id":"UG", "name":"Uganda", "value":cases.get("Uganda"), "color":chart.colors.getIndex(2) },
      { "id":"UA", "name":"Ukraine", "value":cases.get("Ukraine"), "color":chart.colors.getIndex(1) },
      { "id":"AE", "name":"United Arab Emirates", "value":cases.get("UAE"), "color": chart.colors.getIndex(0) },
      { "id":"GB", "name":"United Kingdom", "value":cases.get("UK"), "color":chart.colors.getIndex(1) },
      { "id":"US", "name":"United States", "value":cases.get("USA"), "color":chart.colors.getIndex(4) },
      { "id":"UY", "name":"Uruguay", "value":cases.get("Uruguay"), "color":chart.colors.getIndex(3) },
      { "id":"UZ", "name":"Uzbekistan", "value":cases.get("Uzbekistan"), "color": chart.colors.getIndex(0) },
      { "id":"VE", "name":"Venezuela", "value":cases.get("Venezuela"), "color":chart.colors.getIndex(3) },
      { "id":"PS", "name":"West Bank and Gaza", "value":cases.get("Palestine"), "color": chart.colors.getIndex(0) },
      { "id":"VN", "name":"Vietnam", "value":cases.get("Vietnam"), "color": chart.colors.getIndex(0) },
      { "id":"YE", "name":"Yemen, Rep.", "value":cases.get("Yemen"), "color": chart.colors.getIndex(0) },
      { "id":"ZM", "name":"Zambia", "value":cases.get("Zambia"), "color":chart.colors.getIndex(2) },
      { "id":"ZW", "name":"Zimbabwe", "value":cases.get("Zimbabwe"), "color":chart.colors.getIndex(2) }
    ];
    
    // Set map definition
    chart.geodata = am4geodata_worldLow;
    
    // Set projection
    chart.projection = new am4maps.projections.Miller();
    
    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.exclude = ["AQ"];
    polygonSeries.dataFields.id = "id";
    polygonSeries.useGeodata = true;
    polygonSeries.nonScalingStroke = true;
    polygonSeries.strokeWidth = 0.9;
    polygonSeries.calculateVisualCenter = true;
    
    var imageSeries = chart.series.push(new am4maps.MapImageSeries());
    imageSeries.data = mapData;
    imageSeries.dataFields.value = "value";
    
    var imageTemplate = imageSeries.mapImages.template;
    imageTemplate.nonScaling = true
    
    var circle = imageTemplate.createChild(am4core.Circle);
    circle.fillOpacity = 0.7;
    circle.propertyFields.fill = "color";
    circle.tooltipText = "{name}: [bold]{value}[/]";
    
    
    imageSeries.heatRules.push({
      "target": circle,
      "property": "radius",
      "min": 5,
      "max": 30,
      "dataField": "value"
    })
    
    imageTemplate.adapter.add("latitude", function(latitude, target) {
      let polygon = polygonSeries.getPolygonById((target.dataItem.dataContext as any).id);
      if (polygon) {
        return polygon.visualLatitude;
      }
      return latitude;
    })
  
    imageTemplate.adapter.add("longitude", function(longitude, target) {
      let polygon = polygonSeries.getPolygonById((target.dataItem.dataContext as any).id);
      if (polygon) {
        return polygon.visualLongitude;
      }
      return longitude;
    })
    


      })
 

  
  }
  

}
