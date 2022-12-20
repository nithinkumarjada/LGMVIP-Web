function fetchDetails(a) {
    url = "https://reqres.in/api/users?page=1";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        var value = data;
        var img1 = value["data"][0]["avatar"];
        document.getElementById("person1").src =img1;
        var img2 = value["data"][1]["avatar"];
        document.getElementById("person2").src =img2;
        var img3 = value["data"][2]["avatar"];
        document.getElementById("person3").src =img3;
        var img4 = value["data"][3]["avatar"];
        document.getElementById("person4").src =img4;
        var img5 = value["data"][4]["avatar"];
        document.getElementById("person5").src =img5;
        var img6 = value["data"][5]["avatar"];
        document.getElementById("person6").src =img6;
        var first1 = value["data"][0]["first_name"];
        var last1 = value["data"][0]["last_name"];
        document.getElementById("pname1").innerHTML = first1 + " " + last1;
        var first2 = value["data"][1]["first_name"];
        var last2= value["data"][1]["last_name"];
        document.getElementById("pname2").innerHTML = first2 + " " + last2;
        var first3 = value["data"][2]["first_name"];
        var last3= value["data"][2]["last_name"];
        document.getElementById("pname3").innerHTML = first3 + " " + last3;
        var first4= value["data"][3]["first_name"];
        var last4 = value["data"][3]["last_name"];
        document.getElementById("pname4").innerHTML = first4 + " " + last4;
        var first5 = value["data"][4]["first_name"];
        var last5= value["data"][4]["last_name"];
        document.getElementById("pname5").innerHTML = first5 + " " + last5;
        var first6 = value["data"][5]["first_name"];
        var last6 = value["data"][5]["last_name"];
        document.getElementById("pname6").innerHTML = first6 + " " + last6;
        var mail1 = value["data"][0]["email"];
        document.getElementById("mail1").innerHTML = mail1;
        var mail2 = value["data"][1]["email"];
        document.getElementById("mail2").innerHTML = mail2;
        var mail3 = value["data"][2]["email"];
        document.getElementById("mail3").innerHTML = mail3;
        var mail3 = value["data"][3]["email"];
        document.getElementById("mail4").innerHTML = mail3;
        var mail3 = value["data"][4]["email"];
        document.getElementById("mail5").innerHTML = mail3;
        var mail3 = value["data"][5]["email"];
        document.getElementById("mail6").innerHTML = mail3;
      });
  }
  let navBtn = document.getElementById("get_users");
  navBtn.addEventListener("click", () => {
      cards.innerHTML = `<h1 class='load'>Loading... <span >  <i class="fas fa-sync fa-spin" style="font-size:50px"></i></span></h1>`;
      setTimeout(() => {
          fetchData();
      }, 2000);
  });