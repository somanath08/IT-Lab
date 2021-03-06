"use strict";

function changeContent(option) {
  switch (option) {
    case 1:
      // document.getElementById("heading").innerHTML = "Ph.D."
      document.getElementById("content").innerHTML =
        "<div style='color:black'><h2><span style='color: #d82a4e'>Ph.D.</span></h2><p>The school has a very vibrant Ph.D programme with more than 60 students registered currently, both Indian and foreign nationals, as on date and more than 100 scholars have completed their research till now. As the School always has a high priority for research, it strongly encourages fresh and brilliant students to participate in the above exciting research programmes as full-time/part-time Ph.D. students. School further offers Visvesvarya PhD Fellowships (sponsored by DeitY) for supporting brilliant Ph.D. students. This is subject to sanction of the Govt. of India (Admission Notice will come as a separate advertisement). Further, details can be found at http://phd.medialabasia.in/. The School is also recognized as an AICTE Minor QIP Centre for Ph.D. Programme. Final result of Ph.D selection under QIP for the year 2018-19 is available at URL http://qip.iitd.ac.in/qipadm2017/result.php</p><br/><p>Ph.D. programme is offered on full time, part time and external registration basis as per the university regulations. Candidates who have the required qualifications and are doing teaching/research in recognized institutions or researchers from companies registered with STPI/NASSCOM/Central Government Organizations who operate within the jurisdiction of the University can apply for part time admission, which is available during 2018-19. Interested candidates are advised to study the areas of research from the School and faculty profiles. Please visit School website http://scis.uohyd.ac.in for details..</p><br/><p>Intake:15<br/></div>";
      break;
    case 2:
      // document.getElementById("heading").innerHTML = "Integrated M.Tech"
      document.getElementById("content").innerHTML =
        "<h2><span style='color: #d82a4e'>Integrated M.Tech</span></h2><p>The School has introduced a five year Integrated M.Tech. programme in Computer Science with effect from the academic year 2014-15. The students will be awarded a M.Tech Degree at the end of five years but there is no exit point. This is intended to provide a high quality computer science education with a curriculum that is state-of-the-art. The School boasts of a very low student-teacher ratio that allows faculty to give individual attention to students.</p><p>Intake: 21<br/></p><p>Minimum qualifications for admission:<br/></p><p>As per JOSAA/CSAB guidelines. One of the criteria for admission is that the candidate should satisfy at least one of these two criteria: (i) The candidate is within the category-wise top 20 percentile of successful candidates in their respective Class XII (or equivalent) examination of respective stream and Board. (ii) The candidate has secured minimum 75% (for GEN or OBC-NCL) or minimum 65 % (for SC, ST or PWD) of aggregate marks in the Class XII (or equivalent) examination of respective stream and Board.<br/></p>";
      break;
    case 3:
      // document.getElementById("heading").innerHTML = "M. Tech"
      document.getElementById("content").innerHTML =
        "<div style='color:black'><h2><span style='color: #d82a4e'>M.Tech.</span></h2><p>The school has a very vibrant Ph.D programme with more than 60 students registered currently, both Indian and foreign nationals, as on date and more than 100 scholars have completed their research till now. As the School always has a high priority for research, it strongly encourages fresh and brilliant students to participate in the above exciting research programmes as full-time/part-time Ph.D. students. School further offers Visvesvarya PhD Fellowships (sponsored by DeitY) for supporting brilliant Ph.D. students. This is subject to sanction of the Govt. of India (Admission Notice will come as a separate advertisement). Further, details can be found at http://phd.medialabasia.in/. The School is also recognized as an AICTE Minor QIP Centre for Ph.D. Programme. Final result of Ph.D selection under QIP for the year 2018-19 is available at URL http://qip.iitd.ac.in/qipadm2017/result.php</p><br/><p>Ph.D. programme is offered on full time, part time and external registration basis as per the university regulations. Candidates who have the required qualifications and are doing teaching/research in recognized institutions or researchers from companies registered with STPI/NASSCOM/Central Government Organizations who operate within the jurisdiction of the University can apply for part time admission, which is available during 2018-19. Interested candidates are advised to study the areas of research from the School and faculty profiles. Please visit School website http://scis.uohyd.ac.in for details..</p><br/><p>Intake:15<br/></div>";
      break;
    case 4:
      // document.getElementById("heading").innerHTML = "MCA"
      document.getElementById("content").innerHTML =
        "<h2><span style='color: #d82a4e'>MCA.</span></h2><p>The School has introduced a five year Integrated M.Tech. programme in Computer Science with effect from the academic year 2014-15. The students will be awarded a M.Tech Degree at the end of five years but there is no exit point. This is intended to provide a high quality computer science education with a curriculum that is state-of-the-art. The School boasts of a very low student-teacher ratio that allows faculty to give individual attention to students.</p><p>Intake: 21<br/></p><p>Minimum qualifications for admission:<br/></p><p>As per JOSAA/CSAB guidelines. One of the criteria for admission is that the candidate should satisfy at least one of these two criteria: (i) The candidate is within the category-wise top 20 percentile of successful candidates in their respective Class XII (or equivalent) examination of respective stream and Board. (ii) The candidate has secured minimum 75% (for GEN or OBC-NCL) or minimum 65 % (for SC, ST or PWD) of aggregate marks in the Class XII (or equivalent) examination of respective stream and Board.<br/></p>";
      break;
    default:
      break;
  }
}

function changeSyllabus(option) {
  switch (option) {
    case 1:
      document.getElementById(
        "content"
      ).innerHTML = `<a href="./views/UOH_SCIS_MCA_MTech_IMTech_CourseStructure_Syllabus_20042018(1).pdf">
      Syllabus for M.Tech(AI/CS/IT), M.C.A & I.MTech (CS)</a>`;
      break;
    case 2:
      document.getElementById(
        "content"
      ).innerHTML = `<a href="./views/PhDCourseWork2017updted.pdf">Syllabus for Ph.D</a>`;
      break;
    default:
      break;
  }
}
