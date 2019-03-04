

var makeTable = function(){
  people = [peopleMaker("Eileen","CSC","Sophmore","Female"),peopleMaker("Caleb","CSC","Senior","Male"),
  peopleMaker("Michael","CSC","10 years removed","Male"),
  peopleMaker("Emma","Math","Sophmore","Female"),peopleMaker("Rob","CSC","Sophmore","Male")];

  var table = d3.select(".starter").append("table");
  var rows = table.selectAll("tr")
               .data(people)
               .enter()
               .append("tr");

  //var headers = ["Name","Major","Grade","Gender"];
  //headers.forEach(function(ele,i){
    //rows[i].text(ele);
  //});

  rows.append("td")
      .text(function(d){return d.name})
      .style("color","black");
  rows.append("td")
      .text(function(d){return d.major})
      .style("color","green");
  rows.append("td")
      .text(function(d){return d.year})
      .style("color","blue");
  rows.append("td")
      .text(function(d){return d.gender})
      .style("color","red");


      /// styling
  rows.selectAll("td")
     .style("border","1px solid black")
     .style("width","70px");

  table.style("color","red")
    .style("border","1px solid black")
    .style("text-align","center")
    .style("border-collapse","collapse")
    .style("margin-left","auto")
    .style("margin-right","auto")
    .style("margin-top","10%");




  var button = d3.select(".startButton");
  //button.attr("visible", "hidden");
  button.attr("disabled","disabled");
  button.style("display","none");
  d3.select("body")
    .style("background-color","beige");
}

var peopleMaker = function(name, major, year, gender){
  return{
    name:name,
    major:major,
    year:year,
    gender:gender}

}
