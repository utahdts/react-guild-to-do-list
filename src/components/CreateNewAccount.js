import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const propTypes = {};
const defaultProps = {};

const CreateNewAccount = props => {

    const [newAccount, setNewAccount] = useState();
    const accountNameRef = useRef();
    
    function createAccount() {
        let newData = {name: accountNameRef.current.value};
        fetch("https://dts-appex-todolist-ws-a234spjofq-wm.a.run.app/api/v1/accounts", {
            method: 'POST', 
            body: JSON.stringify(newData),
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        .then(res => res.json())
        .then(account => { 
            console.log(account);
            setNewAccount(account); 
        });
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