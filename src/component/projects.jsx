import React from "react";
import Vmarine from "../img/Vmarine.jpg";
import aguaDeLuz from "../img/aguaDeLuz.png";
import todo from "../img/todolist.png";
import PropTypes from "prop-types";

export default class Projects extends React.Component {

	render() {
		return (
			<React.Fragment>
				<div id="my-projects" className="container-fluid bg-light mt-5">
					<div className=" project-container container bg-light pb-5">
						<h1
							id="projects"
							className={"text-center " + this.props.fadeInRight}>
							<small>Few of many</small> Works
						</h1>
						<div className="row my-5">
							<div
								className={
									"testbg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Visual Networks Media &amp; Technology </h2>
									</div>
									<div>
										<button
											
											id="vmarine-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var marineModal = document.getElementById(
													"vmarine" 
												);
												modalBG.style.display = "block";
												marineModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"aguabg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>BS Logistics Portfolio and Tracking System</h2>
									</div>
									<div>
										<button
											id="agua-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var aguaModal = document.getElementById(
													"agualuz"
												);
												modalBG.style.display = "block";
												aguaModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"todobg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Cruzos- Commercial Cold Storage</h2>
									</div>
									<div>
										<button
											id="todo-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var todoModal = document.getElementById(
													"todolist"
												);
												modalBG.style.display = "block";
												todoModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/*hidden modals*/}
				<div id="gallery-card">
					<div id="vmarine" className="modal-card">
						<div className="visual">
							<img src={Vmarine} alt=""/>
						</div>
						<div className="modal-info">
							<h2>Visual Networks Media &amp; Technology</h2>
							<div className="modal-description">
								<ul>
									<li>
										An attractive Portfolio, Blog, and a Corporate website for showcasing products the company offers. 
									</li>
									<li>
										Designed with HTML5, CSS3, Bootstrap,
										Webpack, Django, and Heroku.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<h3><a
									href="http://www.visualnetworks.in"
									target="_blank">
									
								View live</a></h3>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var marineModal = document.getElementById(
											"vmarine"
										);
										modalBG.style.display = "none";
										marineModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="agualuz" className="modal-card">
						<div className="visual">
							<img src={aguaDeLuz} alt=""/>
						</div>
						<div className="modal-info">
							<h2>BS Logistics Portfolio and Courier Tracking</h2>
							<div className="modal-description">
								<ul>
									<li>
										A Courier or Shipment tracking website that notifies the delivery-man and the 
										ownerafter successful door delivery. This website comes along with the company's portfolio.
									</li>
									<li>
										Developed with JSX, React-Bootstrap,
										Webpack, Parallax Effect,
										SmoothScrolling(UI), and VanillaJS.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a
									href="https://bslogistics.netlify.app"
									target="_blank">
									<h3>View live</h3>
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var aguaModal = document.getElementById(
											"agualuz"
										);
										modalBG.style.display = "none";
										aguaModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="todolist" className="modal-card">
						<div className="visual">
							<img src={todo} alt=""/>
						</div>
						<div className="modal-info">
							<h2>Cruzos-  Commercial Cold Storage</h2>
							<div className="modal-description">
								<ul>
									<li>
										An E-commerce website for selling cold meat products online and integrated 
										with secure payment gateway also delivery assisted.
									</li>
									<li>
										Developed with HTML5, CSS3, Bootstrap,
										Webpack, Django, jQuery and ReactJS.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a href="https://www.cruzos.com" target="_blank">
									<h3>View live</h3>
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var todoModal = document.getElementById(
											"todolist"
										);
										modalBG.style.display = "none";
										todoModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

Projects.propTypes = {
	bounceIn: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
