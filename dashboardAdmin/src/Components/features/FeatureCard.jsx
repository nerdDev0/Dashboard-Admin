import React from 'react'
import './Features.css'

export default function FeatureCard(props) {
  return (
    <>
     <article className="featureItem">
        <section className="featureTitle">{props.title}</section>
        <section className="featureContainer">
          <span className="featureMony">${props.Mony}</span>
          <span className="featureRate">
            {props.Rate} {props.RateIcon}
          </span>
        </section>
        <span className="featureSub">{props.Sub}</span>
      </article>
    </>
  )
}
