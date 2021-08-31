import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
const News = (props) => {


    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)

    useEffect(()  => {
        updateNews();
        // eslint-disable-next-line
        }, [])

    const updateNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=dcfa0ccb881a471f835dba4f0e541b05&page=${page}&pageSize=${props.pageSize}&country=${props.country}`
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setLoading(false);
    }


    const nextClick  = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=dcfa0ccb881a471f835dba4f0e541b05&page=${page+1}&pageSize=${props.pageSize}&country=${props.country}`
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setLoading(false);
        setPage(page+1);
    }

    const prevClick  = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=dcfa0ccb881a471f835dba4f0e541b05&page=${page-1}&pageSize=${props.pageSize}&country=${props.country}`
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles)
        setLoading(false)
        setPage(page-1)
    }



        return (
            <div>
                <div className="container mt-5">
                {loading && <Spinner/>}  {/* if state loading is true the show the spinner */}
                    <div className="row">
                        {!loading && articles.map((element) =>{
                            return  <div className="col-md-4 col-sm-12" key= {element.url}>
                                    <NewsItem title= {element.title} description = {element.description} imageUrl = {element.urlToImage} author={element.author} url={element.url}/>
                                    </div>
                        })}
                    </div>  
                </div>

                <div className="container d-flex justify-content-between">
                <button type="button" disabled={page===1} className="btn btn-dark my-3" onClick={prevClick} > &larr; Previous</button>
                <button type="button" className="btn btn-dark my-3" onClick={nextClick} >Next &rarr; </button>
                </div>
               
            </div>
        )
}


News.defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
export default News
