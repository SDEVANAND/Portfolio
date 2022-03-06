import React from "react";


class Project extends React.Component {
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
                <div class="col-sm-12">
                    <h2 class="myskills">My Projects</h2>
                    <br />
                    <table class="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th>Project Domain</th>
                                <th>Programming Languages</th>
                                <th>Project Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Frontend Development</td>
                                <td>HTML, CSS, JavaScript, Bootstrap, React JS</td>
                                <td>
                                    <a href={""} /> Portfolio using ReactJS
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
                    <a href="https://github.com/SDEVANAND/Firstprojec"
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

export default Project;



