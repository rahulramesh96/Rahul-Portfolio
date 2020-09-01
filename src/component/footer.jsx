import React from "react";

import instagram from "../img/instagram.png";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";

class Footer extends React.Component {
	render() {
		return (
			<div id="footer" className="container-fluid text-center py-5">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-8 mx-auto">
							<a
								className="px-3"
								href="https://github.com/rahulramesh96"
								target="_blank"
								rel="noopener noreferrer">
								<img src={github} width="50" height="50" alt=""/>
							</a>
							<a
								className="px-3"
								href="https://instagram.com/rahul28r"
								target="_blank"
								rel="noopener noreferrer">
								<img src={instagram} width="50" height="50" alt=""/>
							</a>
							<a
								href="https://www.linkedin.com/in/rahul-ramesh-bb87a916/"
								target="_blank"
								rel="noopener noreferrer">
								<img src={linkedin} width="50" height="50" alt=""/>
							</a>
						</div>
					</div>
					<h5 className="pt-4">Rahul Ramesh &copy; 2020</h5>
				</div>
			</div>
		);
	}
}

export default Footer;
