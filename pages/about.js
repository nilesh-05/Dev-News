import Meta from "../components/Meta";
import aboutStyles from "../styles/Home.module.css";

const about = () => {
	return (
		<div className={aboutStyles.container}>
			<Meta title="About" />
			<h3 className={aboutStyles.center}>
				This web app keeps you updated with the latest information in
				the community
			</h3>
			<small>This is my first app in Next.JS. </small>
		</div>
	);
};

export default about;
