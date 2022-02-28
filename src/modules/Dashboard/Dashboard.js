import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

import { I18nMsg } from '@test-react-chef/i18n'

// Utils.
import { RoutePaths } from '@test-react-chef/utils'

const Dashboard = (props) => {
  let history = useHistory()
  return (
    <>
      <section>
        <div>
          <h1>
            <I18nMsg id="dashboard" /> goes here
          </h1>
          <button
            onClick={() => {
              history.push(RoutePaths.SignIn)
            }}
          >
            Click back
          </button>
        </div>
      </section>
    </>
  )
}

Dashboard.propTypes = {
  title: PropTypes.string,
}

export default Dashboard
