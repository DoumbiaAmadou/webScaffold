import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { DevTool } from "@hookform/devtools";
import { useStore } from './../../hooks/use-store';
import { store } from '../../core/store';

const FeatureLogin = () => {
  const [appState, dispatch, Actions] = useStore();
  const { register, control, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(' ===>', data, Actions.USER_CONNECTION_REQUEST);
    dispatch(Actions.USER_CONNECTION_REQUEST)
  }
  console.log(appState);

  return (
    <>
      <code>{JSON.stringify(store.getState())}</code>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className="form-control" type="text" placeholder="Name" {...register("Name", { minLength: 3, required: true })} />
        {
          errors.Name && <div className='alert alert-danger'>
            vous avez saisie une erreur:
            {errors.Name.type === 'required' && 'Obligatoire'}
          </div>
        }
        <input className="form-control" type="text" placeholder="Email" {...register("Email", { minLength: 3, required: true })} />

        <input type="submit" />
        <DevTool control={control} /> {/* set up the dev tool */}
      </form>

    </>
  );
}

FeatureLogin.propTypes = {};

FeatureLogin.defaultProps = {};

export default FeatureLogin;
