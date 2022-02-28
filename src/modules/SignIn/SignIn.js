import React from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

// UI Components.
import { InputTextField } from '@test-react-chef/widgets'

// Custom Hooks.
import { useI18n } from '@test-react-chef/i18n'

// Utils.
import { RoutePaths } from '@test-react-chef/utils'

const SignIn = () => {
  const navigate = useNavigate()
  const { formatMessage } = useI18n()

  return (
    <>
      <section>
        <div>
          <h1>Login Form</h1>
          Username:
          <InputTextField
            name="name"
            value=""
            placeholder={formatMessage({ id: 'user_name' })}
          />
          <button
            onClick={() => {
              navigate(RoutePaths.DashBoard)
            }}
          >
            go to dashboard
          </button>
        </div>
      </section>
    </>
  )
}

SignIn.propTypes = {
  title: PropTypes.string,
}

export default SignIn
