import React, { useRef } from 'react';
import usePostAccounts from '../webservice/usePostAccounts';

const propTypes = {};
const defaultProps = {};

const CreateNewAccount = () => {
    const accountNameRef = useRef();
    const addAccountFuncAsync = usePostAccounts();

    return (
        <form>
            {/* <label htmlFor="account-name">Account Name</label> */}
            <label>
                Account Name
                <input type="text" id="account-name" name="account-name" ref={accountNameRef} />
            </label>

            <button
                type="button"
                onClick={() => {
                    const newData = {name: accountNameRef.current.value};
                    addAccountFuncAsync(newData).then(() => accountNameRef.current.value = "");
                }}
            >
                Add Account
            </button>
        </form>
    );
};

CreateNewAccount.propTypes = propTypes;
CreateNewAccount.defaultProps = defaultProps;

export default CreateNewAccount;
