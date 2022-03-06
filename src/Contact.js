import React from "react";
import Photograph from "./Photograph.png"

class Contact extends React.Component {
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
                            class="rounded-circle mx-auto d-block" alt="my" width="150px" height="180px" />
                    </div>
                    <br />
                </div>
                <div class="col-sm-8">
                    <h2 class="contact">Contact Details</h2>
                    <br />
                    <p class="cont">
                        Mobile No. : 7402241788 , 7010738718 <br/>
                        Email Id   : devanandsekar@gmail.com
                    </p>
                </div>
            </div>
        </div>
        <div class="jumbotron text-center" id="footer">
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a href="https://www.linkedin.com/in/devanandsekar/" class="fa fa-linkedin nav-link"
                        style={{color:"blue"}} />
                </li>
                <li class="nav-item">
                    <a href="https://github.com/SDEVANAND/Firstprojec" class="fa fa-github nav-link"
                        style={{color:"black"}} />
                </li>
                <li class="nav-item">
                    <a href="https://www.facebook.com/devanand.sekar.1/" class="fa fa-facebook nav-link"
                        style={{color:"blue"}} />
                </li>
            </ul>
        </div>
    </div>
</body>
);
}
}

export default Contact;