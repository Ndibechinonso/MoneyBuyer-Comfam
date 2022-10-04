import React, { useLayoutEffect, useRef } from 'react'

type Props = {}

function useDocumentTitle(title:string) {
  useLayoutEffect(() => {
    window.document.title = title
  }, [title])
}

export default useDocumentTitle