function objj() {
  let course= {
    courseName: "BIT",
    courseFee:"Rs 150 000",
    startDate:"12.06.2018",
    center:"Our Office"
  };
  document.getElementById("q6_name").innerHTML= "Course Name: " + course.courseName + " Course" ;
  document.getElementById("q6_fee").innerHTML= "Fee: " + course.courseFee ;
  document.getElementById("q6_date").innerHTML= "Start Date: " + course.startDate ;
  document.getElementById("q6_center").innerHTML= "Center: " + course.center;

}
