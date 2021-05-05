import headerStyles from "../styles/Header.module.css";
const Header = () => {
	return (
		<div>
			<h1 className={headerStyles.title}>
				<span>WebDev</span> Newz
			</h1>
			<p className={headerStyles.description}>
				Keep up to date with latest Web Dev News.
			</p>
		</div>
	);
};

export default Header;
