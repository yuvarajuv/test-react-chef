import React, { Fragment } from 'react'

// UI Components.
import { Spinner } from '@test-react-chef/widgets'

export default function PageLoader({ loading }) {
  // Add your business logic with store condition.
  return <Fragment>{loading && <Spinner />}</Fragment>
}
