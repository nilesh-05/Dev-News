import articleStyles from "../styles/Article.module.css";

const ArticleList = ({ articles }) => {
	return (
		<div className={articleStyles.grid}>
			{articles.map((article, id) => (
				<h3>{article.title}</h3>
			))}
		</div>
	);
};

export default ArticleList;
