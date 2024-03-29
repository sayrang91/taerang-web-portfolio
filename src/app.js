
		const Header = (props) => {
			return (
				<header id="header">
					<h1>{props.title}</h1>
					<nav>
						<ul>
							<li><a href="#intro">Intro</a></li>
							<li><a href="#one">What I Do</a></li>
							<li><a href="#two">Who I Am</a></li>
							<li><a href="#work">My Work</a></li>
							<li><a href="#contact">Contact</a></li>
						</ul>
					</nav>
				</header>

			);
		}
		const Section = (props) => {
			return (
				<section id="intro" class="main style1 dark fullscreen">
					<div class="content">
						<header>
							<h2>Hey.</h2>
						</header>
						<p>Welcome to <strong>TAERANG</strong> designed by html5up</p>
						<footer>
							<a href="#one" class="button style2 down">More</a>
						</footer>
					</div>
				</section>

			);
		}
		const Section1 = (props) => {
			return (
				<section id="one" class="main style2 right dark fullscreen">
					<div class="content box style2">
						<header>
							<h2>What I Do</h2>
						</header>
						<p>테스트
              {/* Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.
						Fusce blandit ultrices sapien, in accumsan orci rhoncus eu. Sed sodales venenatis arcu,
					id varius justo euismod in. Curabitur egestas consectetur magna. */}
          </p>
					</div>
					<a href="#two" class="button style2 down anchored">Next</a>
				</section>
			);
		}
		const Section2 = (props) => {
			return (
				<section id="two" class="main style2 left dark fullscreen">
					<div class="content box style2">
						<header>
							<h2>Who I Am</h2>
						</header>
						<p>
            테스트
              {/* Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.
						Fusce blandit ultrices sapien, in accumsan orci rhoncus eu. Sed sodales venenatis arcu,
					id varius justo euismod in. Curabitur egestas consectetur magna. */}
          </p>
					</div>
					<a href="#work" class="button style2 down anchored">Next</a>
				</section>

			);
		}
		const Section3 = (props) => {
			return (
				<section id="work" class="main style3 primary">
					<div class="content">
						<header>
							<h2>My Work</h2>
							<p>
              테스트
                {/* Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.
							Fusce blandit ultrices sapien, in accumsan orci rhoncus eu. Sed sodales venenatis
						arcu, id varius justo euismod in. Curabitur egestas consectetur magna vitae. */}
            </p>
						</header>


						<div class="gallery">
							<article class="from-left">
								<a href="images/fulls/01.jpg" class="image fit"><img src="images/thumbs/01.jpg" title="The Anonymous Red" alt="" /></a>
							</article>
							<article class="from-right">
								<a href="images/fulls/02.jpg" class="image fit"><img src="images/thumbs/02.jpg" title="Airchitecture II" alt="" /></a>
							</article>
							<article class="from-left">
								<a href="images/fulls/03.jpg" class="image fit"><img src="images/thumbs/03.jpg" title="Air Lounge" alt="" /></a>
							</article>
							<article class="from-right">
								<a href="images/fulls/04.jpg" class="image fit"><img src="images/thumbs/04.jpg" title="Carry on" alt="" /></a>
							</article>
							<article class="from-left">
								<a href="images/fulls/05.jpg" class="image fit"><img src="images/thumbs/05.jpg" title="The sparkling shell" alt="" /></a>
							</article>
							<article class="from-right">
								<a href="images/fulls/06.jpg" class="image fit"><img src="images/thumbs/06.jpg" title="Bent IX" alt="" /></a>
							</article>
						</div>

					</div>
				</section>

			);
		}
		const Section4 = (props) => {
			return (
				<section id="contact" class="main style3 secondary">
					<div class="content">
						<header>
							<h2>Say Hello.</h2>
							<p>
                테스트
                {/* Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum. */}
              </p>
						</header>
						<div class="box">
							<form method="post" action="#">
								<div class="fields">
									<div class="field half"><input type="text" name="name" placeholder="Name" /></div>
									<div class="field half"><input type="email" name="email" placeholder="Email" /></div>
									<div class="field"><textarea name="message" placeholder="Message" rows="6"></textarea></div>
								</div>
								<ul class="actions special">
									<li><input type="submit" value="Send Message" /></li>
								</ul>
							</form>
						</div>
					</div>
				</section>

			);
		}
		const Footer = (props) => {
			return (
				<footer id="footer">


					<ul class="icons">
						<li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
						<li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
						<li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
						<li><a href="#" class="icon brands fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
						<li><a href="#" class="icon brands fa-dribbble"><span class="label">Dribbble</span></a></li>
						<li><a href="#" class="icon brands fa-pinterest"><span class="label">Pinterest</span></a></li>
					</ul>


					<ul class="menu">
						<li>&copy; Untitled</li><li>Developer: <a href="https://www.taerang.com">TAERANG</a></li>
					</ul>

				</footer>

			);
		}


		class App extends React.Component {
			state = {
				players: [
					{ name: 'SEO', id: 1 },
					{ name: 'TAE', id: 2 },
					{ name: 'RANG', id: 3 },
					{ name: 'TEST', id: 4 },
				]
			};

			render() {
				return (
					<div className="is-preload">
						<Header title="TAERANG" totalPlayers={this.state.players.length} />
						<Section />
						<Section1 />
						<Section2 />
						<Section3 />
						<Section4 />
						<Footer />
					</div>
				);
			}
		}


		const root = document.getElementById('root');
		ReactDOM.render(<App />, root);
		// ReactDOM.unmountComponentAtNode(root);