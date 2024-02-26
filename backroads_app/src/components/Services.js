import React from 'react'
import Title from './Title'
import { services } from '../data'

const Services = () => {
  return (
    <section className="section services" id="services">

      <Title title="our" subTitle="services" />
        <div className="section-center services-center">
          {
            services.map((article)=>(
              <article key={article.id} className="service">
                <span className="service-icon">
                  <i className={article.icon}></i>
                </span>
                <div className="service-info">
                  <h4 className="service-title">{article.title}</h4>
                  <p className="service-text">
                    {article.text}
                  </p>
                </div>
              </article>
            ))
          }
        </div>
      </section>
  )
}

export default Services