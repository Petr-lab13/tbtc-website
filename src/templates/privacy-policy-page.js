import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { App } from '../components'


export const PrivacyPolicyPageTemplate = ({ title, body }) => (
  <div className="page privacy-policy">
    <div className="container">
      <div className="row justify-content-center no-gutters">
        <header className="page-header col-sm-12 col-md-12 col-lg-10">
          <h1>{title}</h1>
        </header>
        <div className="content col-sm-12 col-md-12 col-lg-10">
          <div className="body" dangerouslySetInnerHTML={{ __html: body }} />
        </div>
      </div>
    </div>
  </div>
)

const PrivacyPolicyPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <App title={post.frontmatter.title}>
      <PrivacyPolicyPageTemplate
        title={post.frontmatter.title}
        body={post.html} />
    </App>
  )
}

PrivacyPolicyPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default PrivacyPolicyPage

export const pageQuery = graphql`
  query PrivacyPolicyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`
