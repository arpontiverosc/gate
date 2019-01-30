import React from 'react'
import styled from 'styled-components'

const renderChildren = element =>
  element.children.map(item => {
    if (item.type === 'element' && item.tagName === 'code')
      return <Code>{item.children[0].value}</Code>
    return <Span as={item.tagName}>{item.value}</Span>
  })

const Paragraph = ({ element }) => {
  console.log(element)
  if (element.type === 'element' && element.tagName === 'aside') {
    if (element.properties.className.includes('notice'))
      return <Notice>{renderChildren(element)}</Notice>
    if (element.properties.className.includes('success'))
      return <Success>{renderChildren(element)}</Success>
    if (element.properties.className.includes('warning'))
      return <Warning>{renderChildren(element)}</Warning>
  }

  return <View as={element.tagName}>{renderChildren(element)}</View>
}

export default Paragraph

const View = styled.div`
  display: block;
  box-sizing: border-box;
  padding: 0 28px;
  width: 50%;
`

const Notice = styled.aside`
  padding: 1em 28px;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  background: #8fbcd4;
  line-height: 1.6;
  margin-right: 50%;
  box-sizing: border-box;
  display: block;
`

const Success = styled(Notice)`
  background: #6ac174;
`

const Warning = styled(Notice)`
  background: #c97a7e;
`

const Span = styled.span``
const Code = styled.code`
  display: inline;
`