import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../Component/Layout'
import Content from "../Component/Content/Content";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Content/>
    </Layout>
  )
}

export default IndexPage
export const Head: HeadFC = () => <title>OpenAuto</title>
