var makeTable() = function()
{
  people = [peopleMaker("Eileen","CSC","Sophmore","Female"),peopleMaker("Caleb","CSC","Senior","Male")
  ,peopleMaker("Michael","CSC","10 years removed","Male")
    ,peopleMaker("Emma","Math","Sophmore","Female"),peopleMaker("Rob","CSC","Sophmore","Male")];

  var table = d3.select(".starter").append("table");
  var rows = d3.selectAll("tr")
               .data(people)
               .enter()
               .append("tr");
  rows.append("td")
      .text(function(d){
        return d.name
      });
  rows.append("td")
      .text(function(d){
        return d.major
      });
  rows.append("td")
      .text(function(d){
        return d.year
      });
  rows.append("td")
      .text(function(d){
        return d.gender
      });
};

var peopleMaker = function(name, major, year, gender){
    name:name,
    major:major,
    year:year,
    gender:gender

};
