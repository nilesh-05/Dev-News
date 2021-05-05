import aboutStyles from "../styles/Home.module.css";
import Head from "next/head";
const about = () => {
	return (
		<div className={aboutStyles.container}>
			<Head>
				<title>About</title>
			</Head>
			<h3 className={aboutStyles.center}>
				This web app keeps you updated with the latest information in
				the community
			</h3>
			<small>This is my first app in Next.JS. </small>
		</div>
	);
};

export default about;
