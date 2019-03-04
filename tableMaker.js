

var makeTable = function(){
  people = [peopleMaker("Eileen","CSC","Sophmore","Female"),peopleMaker("Caleb","CSC","Senior","Male"),
  peopleMaker("Michael","CSC","10 years removed","Male"),
  peopleMaker("Emma","Math","Sophmore","Female"),peopleMaker("Rob","CSC","Sophmore","Male")];

  var table = d3.select(".starter").append("table");
  var rows = table.selectAll("tr")
               .data(people)
               .enter()
               .append("tr");

  rows.append("td")
      .text(function(d){return d.name});
  rows.append("td")
      .text(function(d){return d.major});
  rows.append("td")
      .text(function(d){return d.year});
  rows.append("td")
      .text(function(d){return d.gender});

      /// styling
  rows.selectAll("td")
      .style("border","1px solid black");
  table.style("color","red")
    .style("border","1px solid black");



}

var peopleMaker = function(name, major, year, gender){
  return{
    name:name,
    major:major,
    year:year,
    gender:gender}

}
