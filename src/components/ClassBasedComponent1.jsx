import { Component } from "react";

class ClassBasedComponent extends Component {
	// take a state...
	state = {
		showDesc: true,
		changeColor: false,
		showText: false,
		count: 0,
		changeCountStyle: false,
	};

	buttonClick = () => {
		console.log("2nd Btn Clicked bro..!");
		// console.log(this.state);

		// the line below is prohibited... and so never do that.
		// this.textState.showText = !this.textState.showText;
		this.setState({
			showText: !this.state.showText,
		});
	};

	handleClick = () => {
		console.log("Btn clicked bro!");
		// console.log(this.state);

		const { showDesc, changeColor } = this.state;
		this.setState({
			showDesc: !showDesc,
			changeColor: !changeColor,
		});
	};

	componentDidMount() {
		console.log("Mounted page after first reload");
		this.setState({
			showDesc: !this.state.showDesc,
			// changeColor: !this.state.changeColor,
		});
	}

	componentDidUpdate(prevProps, prevState) {
		// console.log(prevState, this.state);

		if (
			prevState &&
			prevState.count !== this.state.count &&
			this.state.count === 10
		) {
			this.setState({
				...this.state,
				changeCountStyle: true,
			});
		}
	}

	increaseCounter = () => {
		this.setState({
			// ...this.state,
			count: this.state.count + 1,
		});
	};

	componentWillUnmount() {
		console.log("Component is being UNMOUNTED..");
	}

	render() {
		// console.log(this.state); // for accessing the state..

		const { showDesc, changeColor, changeCountStyle } = this.state;
		console.log(changeCountStyle);

		return (
			<div>
				<h1>Hello, Class-Based Components...</h1>
				{showDesc ? (
					<p style={{ color: changeColor ? "red" : "green" }}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
						assumenda nulla error inventore unde ad, voluptatum nemo natus
						possimus rem nobis quibusdam reprehenderit doloribus alias ullam in
						esse nostrum expedita?
					</p>
				) : (
					<p style={{ color: changeColor ? "red" : "green" }}>
						charley charleyy...
					</p>
				)}
				<div>
					<button
						onClick={this.handleClick}
						className="mx-auto flex mt-2 border p-2 rounded-xl bg-white text-gray-800 hover:bg-slate-200"
					>
						Toggle Me
					</button>
				</div>
				<div className="mt-12 p-5 border rounded-lg">
					{this.state.showText ? (
						<p className="text-red-700">
							Lorem ipsum dolor sit amet consectetur adipisore consequatur vero,
							a beatae maxime voluptas quam temporibus magni nobis!
						</p>
					) : (
						<p className="text-green-600">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
							quis recusandae commodi repellat, at natus? Nostrum reiciendis
							harum optio, tempore consequatur vero, a beatae maxime voluptas
							quam temporibus magni nobis!
						</p>
					)}
					<button
						onClick={this.buttonClick}
						className="mx-auto flex mt-2 border p-2 rounded-xl bg-white text-gray-800 hover:bg-slate-200"
					>
						Click Me
					</button>
				</div>
				<div className="flex items-center ">
					<button
						onClick={this.increaseCounter}
						className="mx-auto flex mt-2 border p-2 rounded-xl bg-white text-gray-800 hover:bg-slate-200"
					>
						Increase Counter
					</button>
					<span
						className={
							changeCountStyle ? "text-2xl font-bold" : "italic text-lg"
						}
					>
						Current count is {this.state.count}
					</span>
				</div>
			</div>
		);
	}
}

export default ClassBasedComponent;
