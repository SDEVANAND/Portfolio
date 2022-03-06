import React from "react";
import ReactDom from "react-dom";
import Photograph from "./Photograph.png";

import {
BrowserRouter as Router,
Routes,
Route,
Link,
NavLink
} from "react-router-dom";

class Home extends React.Component {
constructor() {
super();
}
render() {
return (

<body>
    <div class="heading">
        <div class="jumbotron text-center" id="heading">
            <h1 class="myname">Devanand S</h1>
            <p class="myoccupation">Frontend Developer</p>
            <ul class="nav nav-pills nav-justified" id="navigation">
                <li class="nav-item">
                    <a class="nav-link active" href="/Home">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="/Project">Project</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="/Contact">Contact</a>
                </li>
            </ul>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <div class="rounded-circle">
                        <img src= {Photograph}
                            class="rounded-circle mx-auto d-block" alt="my photo" width="150px" height="180px" />
                    </div>
                    <br />
                </div>
                <div class="col-sm-8">
                    <h2 class="myskills">Career Objective</h2>
                    <br />
                    <p class="skills">
                        I am interested in IT. I recently began to be fascinated by web programming. I am keen to gain
                        more experience in the field. For this reason, I am looking for a company to willing to offer me
                        a placement among their developers. In return, I would offer my full commitment, and be a
                        pleasant and friendly addition to your team. I have knowledge in HTML, CSS, JAVASCRIPT,
                        BOOTSTRAP and React JS.
                    </p>
                </div>
            </div>
        </div>
        <br />
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <h2 class="myskills">Technical Skills</h2>
                    <br />
                    <ul class="skills">
                        <li>
                            Front end languages - HTML, CSS, JavaScript, Bootstrap, React JS
                        </li>
                    </ul>
                </div>
                <div class="col-sm-6">
                    <h2 class="myskills">Certification</h2>
                    <br />
                    <ul class="skills">
                        <li>
                            I have done frontend development in Besant Technologies, Bengaluru
                        </li>
                    </ul>
                </div>
                <br />
            
                <div class="col-sm-12">
                    <h2 class="myskills">Educational Qualification</h2>
                    <br />
                    <table class="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th>Degree</th>
                                <th>School/College</th>
                                <th>Year of Passing</th>
                                <th>Percentage/CGPA</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>B.E (Mechanical)</td>
                                <td>Kingston Engineering College, Vellore</td>
                                <td>2017</td>
                                <td>79</td>
                            </tr>
                            <tr>
                                <td>Higher Sec School, Vellore</td>
                                <td>Lakshmi Garden Matric Hr Sec School, Vellore</td>
                                <td>2013</td>
                                <td>89</td>
                            </tr>
                            <tr>
                                <td>Secondary School, Vellore</td>
                                <td>Government Boys Hr Sec School, Vellore</td>
                                <td>2011</td>
                                <td>97</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="jumbotron text-center" id="footer">
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a href="https://www.linkedin.com/in/devanandsekar/"
                    class="fa fa-linkedin nav-link"
                    style={{color:"blue"}}
                    />
                </li>
                <li class="nav-item">
                    <a href="https://github.com/SDEVANAND/Portfolio"
                    class="fa fa-github nav-link"
                    style={{color:"black"}}
                    />
                </li>
                <li class="nav-item">
                    <a href="https://www.facebook.com/devanand.sekar.1/"
                    class="fa fa-facebook nav-link"
                    style={{color:"blue"}}
                    />
                </li>
            </ul>
        </div>
    </div>
</body>
);
}
}

export default Home;