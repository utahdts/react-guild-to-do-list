import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import usePostAccounts from '../webservice/usePostAccounts';

const propTypes = {};
const defaultProps = {};

const CreateNewAccount = props => {

    const accountNameRef = useRef();
    const mutate = usePostAccounts();
    
    function createAccount() {
        let newData = {name: accountNameRef.current.value};
        mutate(newData);
        accountNameRef.current.value = "";
    }
    
    return (
        <form>
            {/* <label htmlFor="account-name">Account Name</label> */}
            <label>
                Account Name
                  <input type="text" id="account-name" name="account-name" ref={accountNameRef} />
            </label>
            
            <button type="button" onClick={()=>{createAccount()}}>Add Account</button>
        </form>
    );
};

CreateNewAccount.propTypes = propTypes;
CreateNewAccount.defaultProps = defaultProps;

export default CreateNewAccount;